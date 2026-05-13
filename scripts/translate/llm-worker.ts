import { createHash } from "node:crypto";
import { loadTranslationConfig } from "../lib/config.js";
import { readJson, readText, resolveRoot } from "../lib/fs.js";
import { extractJsonObject, repairTranslationOutput, validateTranslationOutput } from "../lib/validate.js";
import type { TranslationBatchInput, TranslationBatchOutput } from "../lib/types.js";

export type UsageLimitInfo = {
  message: string;
  retryAfterText?: string;
  retryAt?: string;
};

type TranslationProvider = "gemini-api";

const limitedGeminiModels = new Set<string>();

export async function translateBatch(input: TranslationBatchInput): Promise<TranslationBatchOutput> {
  if (process.env.MOCK_TRANSLATION === "1") {
    return mockTranslate(input);
  }
  const config = await loadTranslationConfig();
  const provider = normalizeProvider(process.env.TRANSLATION_PROVIDER ?? config.translation.provider);
  void provider;
  return translateWithGemini(input);
}

async function translateWithGemini(input: TranslationBatchInput): Promise<TranslationBatchOutput> {
  const config = await loadTranslationConfig();
  const promptTemplate = await readText(resolveRoot("prompts/translate-segments.md"));
  const reviewTemplate = await readText(resolveRoot("prompts/review-translation-segments.md"));
  const schema = await geminiSchema();
  const compact = compactBatchInput(input);
  const prompt = promptTemplate.replace("<INPUT_JSON>", JSON.stringify(compact.input, null, 2));
  const attempts = Math.max(1, Number(process.env.GEMINI_RETRIES ?? process.env.LLM_RETRIES ?? 1) + 1);
  const timeout = Number(process.env.GEMINI_TIMEOUT_MS ?? process.env.LLM_TIMEOUT_MS ?? 600_000);
  const models = activeGeminiModels();
  const reviewEnabled = (process.env.GEMINI_REVIEW_ENABLED ?? "true") !== "false";
  const reviewSampleRate = normalizeSampleRate(process.env.GEMINI_REVIEW_SAMPLE_RATE ?? config.translation.gemini?.reviewSampleRate ?? 1);
  const reviewerModel = process.env.GEMINI_REVIEWER_MODEL || models[0] || geminiModel();
  let lastError: unknown;

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    for (let modelIndex = 0; modelIndex < models.length; modelIndex += 1) {
      const model = models[modelIndex];
      try {
        const stdout = await runGemini(prompt, model, timeout, schema);
        const translated = parseAndValidateOutput(compact.input, stdout);
        const reviewed =
          reviewEnabled && shouldReviewBatch(compact.input, reviewSampleRate)
            ? await reviewGeminiTranslation(compact.input, translated, reviewTemplate, reviewerModel, timeout, schema)
            : translated;
        return restoreOriginalOutput(reviewed, compact.restore);
      } catch (error) {
        lastError = error;
        const message = errorMessage(error);
        const usageLimit = getUsageLimitInfo(message);
        const hasFallbackModel = modelIndex + 1 < models.length;
        if (hasFallbackModel && usageLimit) {
          limitedGeminiModels.add(model);
          console.warn(`Gemini model ${model} hit rate limits; trying fallback model ${models[modelIndex + 1]}.`);
          continue;
        }
        if (usageLimit) {
          throw new Error(message);
        }
        if (attempt < attempts) {
          console.warn(`Gemini translation attempt ${attempt}/${attempts} failed with ${model}; retrying: ${message}`);
        }
        break;
      }
    }
  }

  throw new Error(errorMessage(lastError));
}

async function reviewGeminiTranslation(
  input: TranslationBatchInput,
  translated: TranslationBatchOutput,
  reviewTemplate: string,
  reviewerModel: string,
  timeout: number,
  schema: unknown
): Promise<TranslationBatchOutput> {
  const reviewPrompt = reviewTemplate
    .replace("<INPUT_JSON>", JSON.stringify(input, null, 2))
    .replace("<DRAFT_JSON>", JSON.stringify(translated, null, 2));
  try {
    const stdout = await runGemini(reviewPrompt, reviewerModel, timeout, schema);
    return parseAndValidateOutput(input, stdout);
  } catch (error) {
    console.warn(`Gemini review failed; using first-pass translation: ${errorMessage(error)}`);
    return translated;
  }
}

async function runGemini(prompt: string, model: string, timeout: number, schema: unknown): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("GEMINI_API_KEY is required for gemini-api translation.");
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(normalizeGeminiModel(model))}:generateContent`;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": apiKey
    },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: Number(process.env.GEMINI_TEMPERATURE ?? 0.2),
        responseFormat: {
          text: {
            mimeType: "application/json",
            schema
          }
        }
      }
    }),
    signal: AbortSignal.timeout(timeout)
  });
  const body = await response.text();
  if (!response.ok) {
    throw new Error(`Gemini API HTTP ${response.status}: ${compactApiError(body)}`);
  }
  const json = JSON.parse(body) as {
    candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }>;
    promptFeedback?: unknown;
  };
  const text = json.candidates?.[0]?.content?.parts?.map((part) => part.text ?? "").join("").trim();
  if (!text) {
    throw new Error(`Gemini API returned no text: ${compactApiError(body)}`);
  }
  return text;
}

async function geminiSchema(): Promise<unknown> {
  const schema = await readJson<Record<string, unknown>>(resolveRoot("schemas/translation-output.schema.json"));
  const { $schema, ...rest } = schema;
  void $schema;
  return rest;
}

function parseAndValidateOutput(input: TranslationBatchInput, stdout: string): TranslationBatchOutput {
  const output = repairTranslationOutput(input, extractJsonObject(stdout) as TranslationBatchOutput);
  const errors = validateTranslationOutput(input, output);
  if (errors.length) throw new Error(errors.join("\n"));
  return output;
}

function compactBatchInput(input: TranslationBatchInput): {
  input: TranslationBatchInput;
  restore: Map<string, { sourcePath: string; id: string }>;
} {
  const restore = new Map<string, { sourcePath: string; id: string }>();
  return {
    input: {
      ...input,
      segments: input.segments.map((segment, index) => {
        const key = `s${index.toString(36)}`;
        restore.set(key, { sourcePath: segment.sourcePath, id: segment.id });
        return {
          ...segment,
          sourcePath: key,
          id: key
        };
      })
    },
    restore
  };
}

function restoreOriginalOutput(output: TranslationBatchOutput, restore: Map<string, { sourcePath: string; id: string }>): TranslationBatchOutput {
  return {
    segments: output.segments.map((segment) => {
      const original = restore.get(segment.id);
      return {
        sourcePath: original?.sourcePath ?? segment.sourcePath,
        id: original?.id ?? segment.id,
        ko: segment.ko
      };
    })
  };
}

function activeGeminiModels(): string[] {
  const models = configuredGeminiModels();
  const active = models.filter((model) => !limitedGeminiModels.has(model));
  return active.length ? active : models;
}

function configuredGeminiModels(): string[] {
  const seen = new Set<string>();
  const models: string[] = [];
  for (const raw of [geminiModel(), ...splitConfiguredModels(process.env.GEMINI_FALLBACK_MODELS)]) {
    const model = raw?.trim();
    if (!model || seen.has(model)) continue;
    seen.add(model);
    models.push(model);
  }
  return models.length ? models : ["gemini-3.1-flash-lite"];
}

function geminiModel(): string {
  return process.env.GEMINI_MODEL?.trim() || "gemini-3.1-flash-lite";
}

function normalizeGeminiModel(model: string): string {
  return model.replace(/^models\//, "");
}

function splitConfiguredModels(value: string | undefined): string[] {
  return value?.split(/[,\n]/).map((model) => model.trim()).filter(Boolean) ?? [];
}

function normalizeProvider(provider: string): TranslationProvider {
  if (provider === "gemini-api") return provider;
  throw new Error(`Unsupported translation provider: ${provider}. Use gemini-api.`);
}

function normalizeSampleRate(value: string | number): number {
  const rate = Number(value);
  if (!Number.isFinite(rate)) return 1;
  return Math.max(0, Math.min(1, rate));
}

function shouldReviewBatch(input: TranslationBatchInput, sampleRate: number): boolean {
  if (sampleRate >= 1) return true;
  if (sampleRate <= 0) return false;
  const seed = input.segments.map((segment) => `${segment.sourcePath}#${segment.id}`).join("\n");
  const digest = createHash("sha256").update(seed).digest("hex").slice(0, 8);
  const bucket = Number.parseInt(digest, 16) / 0xffffffff;
  return bucket < sampleRate;
}

function errorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return String(error);
}

function compactApiError(body: string): string {
  try {
    const parsed = JSON.parse(body) as { error?: { message?: string; status?: string } };
    const status = parsed.error?.status ? `${parsed.error.status}: ` : "";
    return `${status}${parsed.error?.message ?? body}`;
  } catch {
    return body.slice(0, 1000);
  }
}

export function getUsageLimitInfo(message: string, now = new Date()): UsageLimitInfo | undefined {
  if (
    !/\busage limit\b/i.test(message) &&
    !/\brate limit\b/i.test(message) &&
    !/\bquota\b/i.test(message) &&
    !/\bRESOURCE_EXHAUSTED\b/i.test(message) &&
    !/\bHTTP 429\b/i.test(message)
  ) {
    return undefined;
  }
  const retryAfterText = message.match(/try again at\s+([^\n.]+)/i)?.[1]?.trim();
  return {
    message: compactLimitMessage(message),
    retryAfterText,
    retryAt: retryAfterText ? parseRetryAt(retryAfterText, now) : undefined
  };
}

function compactLimitMessage(message: string): string {
  const usageLine = message
    .split(/\r?\n/)
    .map((line) => line.trim())
    .find((line) => /usage limit|rate limit|quota|RESOURCE_EXHAUSTED|HTTP 429/i.test(line));
  return usageLine || "Translation provider rate limit reached.";
}

function parseRetryAt(value: string, now: Date): string | undefined {
  const absoluteDate = parseAbsoluteRetryAt(value);
  if (absoluteDate) return absoluteDate;

  const match = value.match(/^(\d{1,2})(?::(\d{2}))?\s*(AM|PM)?$/i);
  if (!match) return undefined;
  let hours = Number(match[1]);
  const minutes = Number(match[2] ?? 0);
  const meridiem = match[3]?.toUpperCase();
  if (!Number.isInteger(hours) || !Number.isInteger(minutes) || minutes < 0 || minutes > 59) return undefined;
  if (meridiem) {
    if (hours < 1 || hours > 12) return undefined;
    if (meridiem === "AM") hours = hours === 12 ? 0 : hours;
    if (meridiem === "PM") hours = hours === 12 ? 12 : hours + 12;
  } else if (hours > 23) {
    return undefined;
  }
  const retryAt = new Date(now);
  retryAt.setUTCHours(hours, minutes, 0, 0);
  if (retryAt.getTime() <= now.getTime()) {
    retryAt.setUTCDate(retryAt.getUTCDate() + 1);
  }
  return retryAt.toISOString();
}

function parseAbsoluteRetryAt(value: string): string | undefined {
  const match = value.match(
    /^(Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\s+(\d{1,2})(?:st|nd|rd|th)?,?\s+(\d{4})\s+(\d{1,2})(?::(\d{2}))?\s*(AM|PM)?$/i
  );
  if (!match) return undefined;

  const month = monthIndex(match[1]);
  const day = Number(match[2]);
  const year = Number(match[3]);
  let hours = Number(match[4]);
  const minutes = Number(match[5] ?? 0);
  const meridiem = match[6]?.toUpperCase();
  if (month === undefined || !Number.isInteger(day) || day < 1 || day > 31) return undefined;
  if (!Number.isInteger(year) || year < 2000) return undefined;
  if (!Number.isInteger(hours) || !Number.isInteger(minutes) || minutes < 0 || minutes > 59) return undefined;
  if (meridiem) {
    if (hours < 1 || hours > 12) return undefined;
    if (meridiem === "AM") hours = hours === 12 ? 0 : hours;
    if (meridiem === "PM") hours = hours === 12 ? 12 : hours + 12;
  } else if (hours > 23) {
    return undefined;
  }

  const retryAt = new Date(Date.UTC(year, month, day, hours, minutes, 0, 0));
  if (
    retryAt.getUTCFullYear() !== year ||
    retryAt.getUTCMonth() !== month ||
    retryAt.getUTCDate() !== day ||
    retryAt.getUTCHours() !== hours ||
    retryAt.getUTCMinutes() !== minutes
  ) {
    return undefined;
  }
  return retryAt.toISOString();
}

function monthIndex(month: string): number | undefined {
  const normalized = month.slice(0, 3).toLowerCase();
  const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
  const index = months.indexOf(normalized);
  return index >= 0 ? index : undefined;
}

function mockTranslate(input: TranslationBatchInput): TranslationBatchOutput {
  return {
    segments: input.segments.map((segment) => ({
      sourcePath: segment.sourcePath,
      id: segment.id,
      ko: mockKorean(segment.source)
    }))
  };
}

function mockKorean(source: string): string {
  return source
    .replace(/^Use this object to /i, "이 객체를 사용해 ")
    .replace(/^Start /i, "시작합니다: ")
    .replace(/^Stop /i, "중지합니다: ")
    .replace(/^Returns /i, "반환합니다: ")
    .replace(/^A /i, "")
    .replace(/^An /i, "");
}

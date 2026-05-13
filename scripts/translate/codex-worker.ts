import { execa } from "execa";
import { readText, resolveRoot } from "../lib/fs.js";
import { extractJsonObject, repairTranslationOutput, validateTranslationOutput } from "../lib/validate.js";
import type { TranslationBatchInput, TranslationBatchOutput } from "../lib/types.js";

export type UsageLimitInfo = {
  message: string;
  retryAfterText?: string;
  retryAt?: string;
};

const limitedCodexModels = new Set<string>();

export async function translateBatch(input: TranslationBatchInput): Promise<TranslationBatchOutput> {
  if (process.env.MOCK_TRANSLATION === "1") {
    return mockTranslate(input);
  }
  const promptTemplate = await readText(resolveRoot("prompts/translate-segments.md"));
  const prompt = promptTemplate.replace("<INPUT_JSON>", JSON.stringify(input, null, 2));
  const attempts = Math.max(1, Number(process.env.CODEX_RETRIES ?? 2) + 1);
  const timeout = Number(process.env.CODEX_TIMEOUT_MS ?? 600_000);
  const models = activeModels();
  let lastError: unknown;

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    for (let modelIndex = 0; modelIndex < models.length; modelIndex += 1) {
      const model = models[modelIndex];
      try {
        const stdout = await runCodex(prompt, model, timeout);
        const output = repairTranslationOutput(input, extractJsonObject(stdout) as TranslationBatchOutput);
        const errors = validateTranslationOutput(input, output);
        if (errors.length) throw new Error(errors.join("\n"));
        return output;
      } catch (error) {
        lastError = error;
        const message = errorMessage(error);
        const usageLimit = getUsageLimitInfo(message);
        const hasFallbackModel = modelIndex + 1 < models.length;
        if (hasFallbackModel && usageLimit) {
          if (model) limitedCodexModels.add(model);
          console.warn(
            `Codex model ${modelLabel(model)} hit usage limits; trying fallback model ${modelLabel(models[modelIndex + 1])}.`
          );
          continue;
        }
        if (usageLimit) {
          throw new Error(message);
        }
        if (attempt < attempts) {
          console.warn(`Codex translation attempt ${attempt}/${attempts} failed with ${modelLabel(model)}; retrying: ${message}`);
        }
        break;
      }
    }
  }

  throw new Error(errorMessage(lastError));
}

async function runCodex(prompt: string, model: string | undefined, timeout: number): Promise<string> {
  const args = ["exec", "--ephemeral", "--output-schema", resolveRoot("schemas/translation-output.schema.json")];
  if (model) args.push("--model", model);
  args.push("-");
  const { stdout } = await execa("codex", args, {
    input: prompt,
    timeout,
    reject: true
  });
  return stdout;
}

function configuredModels(): Array<string | undefined> {
  const seen = new Set<string>();
  const models: string[] = [];
  for (const raw of [process.env.CODEX_MODEL, ...splitConfiguredModels(process.env.CODEX_FALLBACK_MODELS)]) {
    const model = raw?.trim();
    if (!model || seen.has(model)) continue;
    seen.add(model);
    models.push(model);
  }
  return models.length ? models : [undefined];
}

function activeModels(): Array<string | undefined> {
  const models = configuredModels();
  const active = models.filter((model) => !model || !limitedCodexModels.has(model));
  return active.length ? active : models;
}

function splitConfiguredModels(value: string | undefined): string[] {
  return value?.split(/[,\n]/).map((model) => model.trim()).filter(Boolean) ?? [];
}

function modelLabel(model: string | undefined): string {
  return model || "default";
}

function errorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return String(error);
}

export function getUsageLimitInfo(message: string, now = new Date()): UsageLimitInfo | undefined {
  if (!/\busage limit\b/i.test(message) && !/\brate limit\b/i.test(message) && !/\bquota\b/i.test(message)) {
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
    .find((line) => /usage limit|rate limit|quota/i.test(line));
  return usageLine || "Codex usage limit reached.";
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

import { execa } from "execa";
import { readText, resolveRoot } from "../lib/fs.js";
import { extractJsonObject, repairTranslationOutput, validateTranslationOutput } from "../lib/validate.js";
import type { TranslationBatchInput, TranslationBatchOutput } from "../lib/types.js";

export type UsageLimitInfo = {
  message: string;
  retryAfterText?: string;
  retryAt?: string;
};

export async function translateBatch(input: TranslationBatchInput): Promise<TranslationBatchOutput> {
  if (process.env.MOCK_TRANSLATION === "1") {
    return mockTranslate(input);
  }
  const promptTemplate = await readText(resolveRoot("prompts/translate-segments.md"));
  const prompt = promptTemplate.replace("<INPUT_JSON>", JSON.stringify(input, null, 2));
  const attempts = Math.max(1, Number(process.env.CODEX_RETRIES ?? 2) + 1);
  const timeout = Number(process.env.CODEX_TIMEOUT_MS ?? 600_000);
  let lastError: unknown;

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const args = ["exec", "--ephemeral", "--output-schema", resolveRoot("schemas/translation-output.schema.json")];
      if (process.env.CODEX_MODEL) args.push("--model", process.env.CODEX_MODEL);
      args.push("-");
      const { stdout } = await execa(
        "codex",
        args,
        {
          input: prompt,
          timeout,
          reject: true
        }
      );
      const output = repairTranslationOutput(input, extractJsonObject(stdout) as TranslationBatchOutput);
      const errors = validateTranslationOutput(input, output);
      if (errors.length) throw new Error(errors.join("\n"));
      return output;
    } catch (error) {
      lastError = error;
      if (attempt < attempts) {
        console.warn(`Codex translation attempt ${attempt}/${attempts} failed; retrying: ${errorMessage(error)}`);
      }
    }
  }

  throw new Error(errorMessage(lastError));
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

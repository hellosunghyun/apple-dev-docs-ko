import { execa } from "execa";
import { readText, resolveRoot } from "../lib/fs.js";
import { extractJsonObject, validateTranslationOutput } from "../lib/validate.js";
import type { TranslationBatchInput, TranslationBatchOutput } from "../lib/types.js";

export async function translateBatch(input: TranslationBatchInput): Promise<TranslationBatchOutput> {
  if (process.env.MOCK_TRANSLATION === "1") {
    return mockTranslate(input);
  }
  const promptTemplate = await readText(resolveRoot("prompts/translate-segments.md"));
  const prompt = promptTemplate.replace("<INPUT_JSON>", JSON.stringify(input, null, 2));
  const { stdout } = await execa("codex", ["exec", "--ephemeral", prompt], {
    timeout: Number(process.env.CODEX_TIMEOUT_MS ?? 180_000),
    reject: true
  });
  const output = extractJsonObject(stdout) as TranslationBatchOutput;
  const errors = validateTranslationOutput(input, output);
  if (errors.length) throw new Error(errors.join("\n"));
  return output;
}

function mockTranslate(input: TranslationBatchInput): TranslationBatchOutput {
  return {
    segments: input.segments.map((segment) => ({
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


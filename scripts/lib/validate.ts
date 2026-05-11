import { Ajv2020 } from "ajv/dist/2020.js";
import { readJson, resolveRoot } from "./fs.js";
import { collectInlineCode, collectMarkdownLinks, collectUrls } from "./segment.js";
import type { TranslationBatchInput, TranslationBatchOutput } from "./types.js";

export async function validateWithSchema(filePath: string, schemaPath: string): Promise<void> {
  const ajv = new Ajv2020({ allErrors: true }) as any;
  const schema = await readJson<Record<string, unknown>>(schemaPath);
  const data = await readJson<unknown>(filePath);
  const validate = ajv.compile(schema);
  if (!validate(data)) {
    throw new Error(`Schema validation failed for ${filePath}: ${ajv.errorsText(validate.errors)}`);
  }
}

export function validateTranslationOutput(input: TranslationBatchInput, output: TranslationBatchOutput): string[] {
  const errors: string[] = [];
  if (input.segments.length !== output.segments.length) {
    errors.push(`Segment count mismatch: input=${input.segments.length}, output=${output.segments.length}`);
  }
  const inputById = new Map(input.segments.map((segment) => [segment.id, segment]));
  for (const translated of output.segments) {
    const source = inputById.get(translated.id);
    if (!source) {
      errors.push(`Unknown segment id: ${translated.id}`);
      continue;
    }
    if (!translated.ko.trim()) {
      errors.push(`Empty Korean translation: ${translated.id}`);
    }
    for (const token of collectInlineCode(source.source)) {
      if (!translated.ko.includes(token)) errors.push(`Inline code changed in ${translated.id}: ${token}`);
    }
    for (const url of collectUrls(source.source)) {
      if (!translated.ko.includes(url)) errors.push(`URL changed in ${translated.id}: ${url}`);
    }
    for (const linkTarget of collectMarkdownLinks(source.source)) {
      if (!translated.ko.includes(`](${linkTarget})`) && !translated.ko.includes(linkTarget)) {
        errors.push(`Markdown link target changed in ${translated.id}: ${linkTarget}`);
      }
    }
  }
  return errors;
}

export function extractJsonObject(raw: string): unknown {
  const trimmed = raw.trim();
  if (trimmed.startsWith("{")) return JSON.parse(trimmed);
  const match = trimmed.match(/```json\s*([\s\S]*?)```/) ?? trimmed.match(/```\s*([\s\S]*?)```/);
  if (match) return JSON.parse(match[1]);
  const start = trimmed.indexOf("{");
  const end = trimmed.lastIndexOf("}");
  if (start >= 0 && end > start) return JSON.parse(trimmed.slice(start, end + 1));
  throw new Error("No JSON object found in model output");
}

export function schemaPath(name: string): string {
  return resolveRoot("schemas", name);
}

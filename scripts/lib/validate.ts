import { Ajv2020 } from "ajv/dist/2020.js";
import { readJson, resolveRoot } from "./fs.js";
import { collectInlineCode, collectMarkdownLinkReferences, collectMarkdownLinks, collectUrls } from "./segment.js";
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
  for (const translated of output.segments) {
    const source = findInputSegment(input, translated);
    if (!source) {
      errors.push(`Unknown segment: ${translated.sourcePath ?? "unknown"}#${translated.id}`);
      continue;
    }
    if (translated.sourcePath && translated.sourcePath !== source.sourcePath) {
      errors.push(`Source path changed in ${translated.id}: ${translated.sourcePath}`);
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

export function repairTranslationOutput(input: TranslationBatchInput, output: TranslationBatchOutput): TranslationBatchOutput {
  return {
    segments: output.segments.map((translated) => {
      const source = findInputSegment(input, translated);
      if (!source) return translated;
      const ko = repairTranslatedSegment(source.source, translated.ko);
      const segmentErrors = validateTranslationOutput(
        { ...input, segments: [source] },
        { segments: [{ sourcePath: source.sourcePath, id: translated.id, ko }] }
      );
      return {
        sourcePath: source.sourcePath,
        id: translated.id,
        ko: segmentErrors.length ? source.source : ko
      };
    })
  };
}

function findInputSegment(input: TranslationBatchInput, translated: TranslationBatchOutput["segments"][number]): TranslationBatchInput["segments"][number] | undefined {
  if (translated.sourcePath) {
    return input.segments.find((segment) => segment.sourcePath === translated.sourcePath && segment.id === translated.id);
  }
  const matches = input.segments.filter((segment) => segment.id === translated.id);
  return matches.length === 1 ? matches[0] : undefined;
}

export function repairTranslatedSegment(source: string, translated: string): string {
  let repaired = translated.trim();
  repaired = repairMarkdownLinkTargets(source, repaired);
  repaired = repairInlineCode(source, repaired);
  return repaired;
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

function repairMarkdownLinkTargets(source: string, translated: string): string {
  let repaired = translated;
  const sourceLinks = collectMarkdownLinkReferences(source);
  for (let index = 0; index < sourceLinks.length; index += 1) {
    const sourceLink = sourceLinks[index];
    if (repaired.includes(sourceLink.target)) continue;
    const replaced = replaceMarkdownLinkTargetAtIndex(repaired, index, sourceLink.target);
    if (replaced !== repaired) {
      repaired = replaced;
      continue;
    }
  }
  return repaired;
}

function repairInlineCode(source: string, translated: string): string {
  let repaired = translated;
  for (const token of collectInlineCode(source)) {
    if (repaired.includes(token)) continue;
    const inner = token.slice(1, -1);
    if (!inner) continue;
    const replaced = replaceBareToken(repaired, inner, token);
    if (replaced) repaired = replaced;
  }
  return repaired;
}

function replaceMarkdownLinkTargetAtIndex(value: string, index: number, target: string): string {
  const links = collectMarkdownLinkReferences(value);
  const link = links[index];
  if (!link) return value;
  return `${value.slice(0, link.targetStart)}${target}${value.slice(link.targetEnd)}`;
}

function replaceBareToken(value: string, token: string, replacement: string): string | undefined {
  const at = value.indexOf(token);
  if (at < 0) return undefined;
  const before = value[at - 1] ?? "";
  const after = value[at + token.length] ?? "";
  if (before === "`" && after === "`") return undefined;
  return `${value.slice(0, at)}${replacement}${value.slice(at + token.length)}`;
}

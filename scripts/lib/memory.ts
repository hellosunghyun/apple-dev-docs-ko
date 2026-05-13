import path from "node:path";
import { loadTranslationConfig } from "./config.js";
import { fileExists, pathKey, readJson, resolveRoot, writeJson } from "./fs.js";
import type {
  ManifestFile,
  OverrideFile,
  ParsedDocument,
  Segment,
  TranslationMemoryFile,
  TranslationMemorySegment
} from "./types.js";

export async function memoryFilePath(sourcePath: string): Promise<string> {
  const config = await loadTranslationConfig();
  return resolveRoot(config.translation.memoryDir, "files", `${pathKey(sourcePath)}.json`);
}

export async function readMemory(sourcePath: string): Promise<TranslationMemoryFile | undefined> {
  const filePath = await memoryFilePath(sourcePath);
  if (!(await fileExists(filePath))) return undefined;
  return readJson<TranslationMemoryFile>(filePath);
}

export async function writeMemory(memory: TranslationMemoryFile): Promise<void> {
  await writeJson(await memoryFilePath(memory.sourcePath), memory);
}

export function createMemoryFromParsed(doc: ParsedDocument, manifestFile?: ManifestFile): TranslationMemoryFile {
  const segments = doc.blocks.flatMap((block) => block.segments).map(toMemorySegment);
  return {
    sourcePath: doc.sourcePath,
    targetPath: path.posix.join("translations/ko", doc.sourcePath),
    sourceUrl: doc.officialUrl,
    upstreamSha: doc.upstreamSha,
    sourceFileHash: manifestFile?.sourceFileHash ?? "",
    status: segments.every((segment) => segment.status === "preserved") ? "translated" : "pending",
    reviewStatus: "machine_translated",
    segments
  };
}

export function mergeMemory(existing: TranslationMemoryFile | undefined, fresh: TranslationMemoryFile): TranslationMemoryFile {
  if (!existing) return fresh;
  const existingById = new Map(existing.segments.map((segment) => [segment.id, segment]));
  const segments = fresh.segments.map((segment) => {
    const old = existingById.get(segment.id);
    if (!old) return segment;
    if (!segment.translatable && segment.status === "preserved") return segment;
    if (old.sourceHash === segment.sourceHash) {
      return { ...segment, ko: old.ko, status: old.status, reviewed: old.reviewed, locked: old.locked, translatedAt: old.translatedAt, translator: old.translator };
    }
    if (old.locked || old.status === "human_edited" || old.status === "human_reviewed") {
      return {
        ...segment,
        ko: old.ko,
        status: "needs_review" as const,
        reviewed: old.reviewed,
        locked: true,
        previousSourceHash: old.sourceHash
      };
    }
    return segment;
  });
  return {
    ...fresh,
    segments,
    status: statusFromSegments(segments),
    reviewStatus: segments.some((segment) => segment.status === "needs_review") ? "needs_review" : fresh.reviewStatus
  };
}

export function applyTranslationOutput(
  memory: TranslationMemoryFile,
  output: Array<{ id: string; ko: string }>,
  translator = "gemini-api"
): TranslationMemoryFile {
  const byId = new Map(output.map((segment) => [segment.id, segment.ko]));
  const translatedAt = new Date().toISOString();
  const segments = memory.segments.map((segment) => {
    const ko = byId.get(segment.id);
    if (!ko || segment.locked) return segment;
    return {
      ...segment,
      ko,
      status: "machine_translated" as const,
      reviewed: false,
      translatedAt,
      translator
    };
  });
  return {
    ...memory,
    translatedAt,
    status: statusFromSegments(segments),
    segments
  };
}

export function applyOverride(memory: TranslationMemoryFile, overrideFile?: OverrideFile): TranslationMemoryFile {
  if (!overrideFile) return memory;
  return {
    ...memory,
    reviewStatus: "human_edited",
    segments: memory.segments.map((segment) => {
      const override = overrideFile.segments[segment.id];
      if (!override) return segment;
      return {
        ...segment,
        ko: override.ko,
        status: "human_edited",
        reviewed: true,
        locked: override.locked ?? true,
        translator: overrideFile.updatedBy ?? "human-override",
        translatedAt: overrideFile.updatedAt ?? new Date().toISOString()
      };
    })
  };
}

export function toMemorySegment(segment: Segment): TranslationMemorySegment {
  const translatable = segment.translatable && !shouldPreserveWithoutTranslation(segment.source);
  return {
    ...segment,
    translatable,
    ko: translatable ? "" : segment.source,
    status: translatable ? "failed" : "preserved",
    reviewed: false,
    locked: !translatable,
    preserveReason: segment.preserveReason ?? (translatable ? undefined : "nonlinguistic_reference")
  };
}

export function segmentNeedsTranslation(segment: TranslationMemorySegment): boolean {
  if (!segment.translatable) return false;
  if (shouldPreserveWithoutTranslation(segment.source)) return false;
  if (segment.locked) return false;
  if (segment.status === "machine_translated" && segment.ko.trim()) return false;
  if (segment.status === "human_edited" || segment.status === "human_reviewed") return false;
  return true;
}

export function shouldPreserveWithoutTranslation(source: string): boolean {
  const value = source.trim();
  if (!value) return true;
  if (/^\*\[View on Apple Developer\]\(https:\/\/developer\.apple\.com\/documentation\/[^)]+\)\*$/i.test(value)) return true;
  if (/^(?:iOS|iPadOS|macOS|Mac Catalyst|tvOS|visionOS|watchOS|Xcode)\s+\d+(?:\.\d+)*(?:\+)?$/i.test(value)) return true;
  if (/^\*\*Availability\*\*:$/.test(value)) return true;
  if (/^\*\*Framework\*\*:\s*[\w .+-]+\s+\*\*Kind\*\*:\s*[\w .+-]+$/i.test(value)) return true;

  const markdownLink = value.match(/^\[([^\]]+)\]\(([^)]+\.md)\)$/i);
  if (markdownLink && isApiReferenceText(markdownLink[1])) return true;

  if (/^(?:class|struct|enum|protocol|actor|var|let|func|init|case|typealias|associatedtype|subscript)\s+[A-Za-z_`]/.test(value)) {
    return true;
  }

  return false;
}

function isApiReferenceText(text: string): boolean {
  const value = text.trim().replace(/`/g, "");
  if (/^(?:class|struct|enum|protocol|actor|var|let|func|init|case|typealias|associatedtype|subscript)\s+/.test(value)) return true;
  if (/^[A-Za-z_][\w.<>?]*(?:\(\))?$/.test(value)) return true;
  return false;
}

function statusFromSegments(segments: TranslationMemorySegment[]): TranslationMemoryFile["status"] {
  const translatable = segments.filter((segment) => segment.translatable);
  if (!translatable.length) return "translated";
  const done = translatable.filter((segment) =>
    ["machine_translated", "human_reviewed", "human_edited", "locked"].includes(segment.status) && segment.ko.trim()
  );
  if (done.length === translatable.length) return "translated";
  if (done.length > 0) return "partial";
  return "pending";
}

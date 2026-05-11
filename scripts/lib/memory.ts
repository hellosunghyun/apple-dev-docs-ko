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
  translator = "codex-cli-oauth"
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
  return {
    ...segment,
    ko: segment.translatable ? "" : segment.source,
    status: segment.translatable ? "failed" : "preserved",
    reviewed: false,
    locked: !segment.translatable
  };
}

export function segmentNeedsTranslation(segment: TranslationMemorySegment): boolean {
  if (!segment.translatable) return false;
  if (segment.locked) return false;
  if (segment.status === "machine_translated" && segment.ko.trim()) return false;
  if (segment.status === "human_edited" || segment.status === "human_reviewed") return false;
  return true;
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

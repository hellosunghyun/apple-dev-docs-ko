import { readdir } from "node:fs/promises";
import path from "node:path";
import { Command } from "commander";
import { applyTranslationOutput, readMemory, segmentNeedsTranslation, writeMemory } from "../lib/memory.js";
import { ensureDir, fileExists, pathKey, readJson, resolveRoot, writeText } from "../lib/fs.js";
import type { QueueFile, TranslationBatchOutput, TranslationMemoryFile, TranslationMemorySegment } from "../lib/types.js";

const program = new Command();
program
  .option("--shards-dir <dir>", "directory containing translation-shard-* artifacts", "tmp/translation-shards")
  .option("--changed-files <file>", "write changed source paths", "tmp/changed-source-paths.txt")
  .parse();

const options = program.opts<{ shardsDir: string; changedFiles: string }>();

type Candidate = TranslationMemorySegment & { sourcePath: string };
type BatchResultFile = {
  batchIndex?: number;
  status?: string;
  output?: TranslationBatchOutput;
};

let skippedInvalidJsonFiles = 0;

async function main(): Promise<void> {
  const shardsDir = resolveRoot(options.shardsDir);
  const shardNames = (await readdir(shardsDir)).filter((name) => /^translation-shard-\d{4}$/.test(name)).sort();
  const outputsBySourcePath = new Map<string, Array<{ id: string; ko: string }>>();
  const artifactMemoryBySourcePath = new Map<string, TranslationMemoryFile>();
  let appliedSegments = 0;
  let skippedSegments = 0;
  let legacyMappedBatches = 0;

  for (const shardName of shardNames) {
    const shardDir = path.join(shardsDir, shardName);
    const queue = await readJsonOrWarn<QueueFile>(path.join(shardDir, "queue.json"), "queue");
    if (!queue) {
      continue;
    }
    const batchFiles = await successfulBatchFiles(path.join(shardDir, "results", "batches"));
    let legacyBatches: Map<number, Candidate[]> | undefined;

    for (const filePath of batchFiles) {
      const result = await readJsonOrWarn<BatchResultFile>(filePath, "batch result");
      if (!result) {
        continue;
      }
      if (result.status !== "success" || !result.output) continue;
      const batchIndex = result.batchIndex ?? batchIndexFromPath(filePath);
      if (batchIndex === undefined) continue;

      const needsLegacyMapping = result.output.segments.some((segment) => !segment.sourcePath);
      if (needsLegacyMapping && !legacyBatches) {
        const legacy = await buildLegacyBatchCandidates(shardDir, queue, artifactMemoryBySourcePath);
        legacyBatches = legacy.batches;
        legacyMappedBatches += legacy.batches.size;
      }
      const legacyCandidates = legacyBatches?.get(batchIndex) ?? [];
      const usedLegacyIndexes = new Set<number>();

      for (const [index, translated] of result.output.segments.entries()) {
        const candidate = translated.sourcePath
          ? { sourcePath: translated.sourcePath, id: translated.id }
          : matchLegacyCandidate(legacyCandidates, translated.id, index, usedLegacyIndexes);
        if (!candidate) {
          skippedSegments += 1;
          continue;
        }
        if (!translated.sourcePath && "legacyIndex" in candidate) {
          usedLegacyIndexes.add(candidate.legacyIndex);
        }
        const output = outputsBySourcePath.get(candidate.sourcePath) ?? [];
        output.push({ id: translated.id, ko: translated.ko });
        outputsBySourcePath.set(candidate.sourcePath, output);
        appliedSegments += 1;
      }
    }
  }

  const changedSourcePaths: string[] = [];
  for (const [sourcePath, output] of outputsBySourcePath.entries()) {
    const artifactMemory = artifactMemoryBySourcePath.get(sourcePath) ?? (await readArtifactMemoryForSourcePath(shardsDir, sourcePath));
    const memory = (await readMemory(sourcePath)) ?? artifactMemory;
    if (!memory) {
      skippedSegments += output.length;
      continue;
    }
    await writeMemory(applyTranslationOutput(memory, output));
    changedSourcePaths.push(sourcePath);
  }

  changedSourcePaths.sort();
  await ensureDir(path.dirname(resolveRoot(options.changedFiles)));
  await writeText(resolveRoot(options.changedFiles), changedSourcePaths.map((sourcePath) => `${sourcePath}\n`).join(""));
  console.log(`Applied shard result files: ${changedSourcePaths.length}`);
  console.log(`Applied translated segments: ${appliedSegments}`);
  console.log(`Skipped translated segments: ${skippedSegments}`);
  console.log(`Legacy mapped batches: ${legacyMappedBatches}`);
  console.log(`Skipped invalid JSON files: ${skippedInvalidJsonFiles}`);
}

async function successfulBatchFiles(batchDir: string): Promise<string[]> {
  if (!(await fileExists(batchDir))) return [];
  return (await readdir(batchDir))
    .filter((name) => /^batch-\d{5}\.json$/.test(name))
    .sort()
    .map((name) => path.join(batchDir, name));
}

function batchIndexFromPath(filePath: string): number | undefined {
  const match = path.basename(filePath).match(/^batch-(\d{5})\.json$/);
  return match ? Number(match[1]) : undefined;
}

async function buildLegacyBatchCandidates(
  shardDir: string,
  queue: QueueFile,
  artifactMemoryBySourcePath: Map<string, TranslationMemoryFile>
): Promise<{ batches: Map<number, Candidate[]> }> {
  const candidates: Candidate[] = [];
  for (const sourcePath of queue.sourcePaths) {
    const memory = await readArtifactMemory(shardDir, sourcePath);
    if (!memory) continue;
    artifactMemoryBySourcePath.set(sourcePath, memory);
    for (const segment of memory.segments) {
      if (segmentNeedsTranslation(segment)) {
        candidates.push({ ...segment, sourcePath });
      }
    }
  }

  const batches = new Map<number, Candidate[]>();
  let cursor = 0;
  for (const [batchIndex, batch] of queue.batches.entries()) {
    const segments = "segments" in batch ? (typeof batch.segments === "number" ? batch.segments : batch.segments.length) : 0;
    batches.set(batchIndex, candidates.slice(cursor, cursor + segments));
    cursor += segments;
  }
  return { batches };
}

function matchLegacyCandidate(
  candidates: Candidate[],
  id: string,
  preferredIndex: number,
  usedIndexes: Set<number>
): { sourcePath: string; id: string; legacyIndex: number } | undefined {
  const preferred = candidates[preferredIndex];
  if (preferred?.id === id && !usedIndexes.has(preferredIndex)) {
    return { sourcePath: preferred.sourcePath, id: preferred.id, legacyIndex: preferredIndex };
  }
  const matches = candidates
    .map((candidate, legacyIndex) => ({ candidate, legacyIndex }))
    .filter(({ candidate, legacyIndex }) => candidate.id === id && !usedIndexes.has(legacyIndex));
  if (matches.length !== 1) return undefined;
  return {
    sourcePath: matches[0].candidate.sourcePath,
    id: matches[0].candidate.id,
    legacyIndex: matches[0].legacyIndex
  };
}

async function readArtifactMemory(shardDir: string, sourcePath: string): Promise<TranslationMemoryFile | undefined> {
  const filePath = path.join(shardDir, "translation-memory", "files", `${pathKey(sourcePath)}.json`);
  if (!(await fileExists(filePath))) return undefined;
  return readJsonOrWarn<TranslationMemoryFile>(filePath, "artifact memory");
}

async function readArtifactMemoryForSourcePath(shardsDir: string, sourcePath: string): Promise<TranslationMemoryFile | undefined> {
  const shardNames = (await readdir(shardsDir)).filter((name) => /^translation-shard-\d{4}$/.test(name)).sort();
  for (const shardName of shardNames) {
    const memory = await readArtifactMemory(path.join(shardsDir, shardName), sourcePath);
    if (memory) return memory;
  }
  return undefined;
}

async function readJsonOrWarn<T>(filePath: string, kind: string): Promise<T | undefined> {
  try {
    return await readJson<T>(filePath);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    skippedInvalidJsonFiles += 1;
    console.warn(`Skipping invalid ${kind} JSON: ${filePath}: ${message}`);
    return undefined;
  }
}

await main();

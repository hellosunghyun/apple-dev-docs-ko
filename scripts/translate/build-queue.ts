import { rm } from "node:fs/promises";
import path from "node:path";
import { Command } from "commander";
import { loadGlossary, loadTranslationConfig } from "../lib/config.js";
import { ensureDir, readJson, resolveRoot, writeJson } from "../lib/fs.js";
import { readOverride } from "../lib/overrides.js";
import { applyOverride, readMemory, segmentNeedsTranslation } from "../lib/memory.js";
import type { Manifest, QueueBatchFileRef, QueueFile, TranslationBatchInput, TranslationMemorySegment } from "../lib/types.js";

const program = new Command();
program
  .option("--shard <index>")
  .option("--shard-total <total>")
  .option("--limit-files <count>")
  .option("--changed-only")
  .option("--batch-segments <count>")
  .option("--batch-chars <count>")
  .option("--force", "retranslate existing machine-translated segments")
  .parse();
const options = program.opts<{
  shard?: string;
  shardTotal?: string;
  limitFiles?: string;
  changedOnly?: boolean;
  batchSegments?: string;
  batchChars?: string;
  force?: boolean;
}>();

async function main(): Promise<void> {
  const translationConfig = await loadTranslationConfig();
  const manifest = await readJson<Manifest>(resolveRoot("state/manifest.json"));
  let sourcePaths = manifest.files.map((file) => file.sourcePath);
  if (options.limitFiles) sourcePaths = sourcePaths.slice(0, Number(options.limitFiles));
  if (options.shard && options.shardTotal) {
    const index = Number(options.shard);
    const total = Number(options.shardTotal);
    sourcePaths = sourcePaths.filter((_, i) => i % total === index);
  }

  const candidates: TranslationMemorySegment[] = [];
  let preserved = 0;
  let locked = 0;
  let skipped = 0;

  for (const sourcePath of sourcePaths) {
    const memory = await readMemory(sourcePath);
    if (!memory) continue;
    const withOverrides = applyOverride(memory, await readOverride(sourcePath));
    for (const segment of withOverrides.segments) {
      if (!segment.translatable) {
        preserved += 1;
        continue;
      }
      if (segment.locked) {
        locked += 1;
        continue;
      }
      if (options.force || segmentNeedsTranslation(segment)) {
        candidates.push(segment);
      } else {
        skipped += 1;
      }
    }
  }

  const batchSegments = Number(options.batchSegments ?? process.env.BATCH_SEGMENTS ?? translationConfig.translation.batchSegments);
  const batchChars = Number(options.batchChars ?? process.env.BATCH_CHARS ?? translationConfig.translation.batchChars);
  const batches = buildBatches(candidates, batchSegments, batchChars, await loadGlossary());

  const queuePath = options.shard ? `state/queue/shard-${String(options.shard).padStart(4, "0")}.json` : "state/queue/latest.json";
  const resolvedQueuePath = resolveRoot(queuePath);
  const queueDir = path.dirname(resolvedQueuePath);
  const queueBaseName = path.basename(queuePath, ".json");
  const batchDir = path.join(queueDir, `${queueBaseName}-batches`);

  await rm(batchDir, { recursive: true, force: true });
  await ensureDir(batchDir);
  const batchRefs = await Promise.all(
    batches.map(async (batch, index): Promise<QueueBatchFileRef> => {
      const fileName = `batch-${String(index).padStart(5, "0")}.json`;
      const batchPath = path.join(batchDir, fileName);
      await writeJson(batchPath, batch);
      return {
        path: path.relative(queueDir, batchPath),
        index,
        segments: batch.segments.length
      };
    })
  );

  const queue: QueueFile = {
    generatedAt: new Date().toISOString(),
    shard: options.shard && options.shardTotal ? { index: Number(options.shard), total: Number(options.shardTotal) } : undefined,
    sourcePaths,
    batches: batchRefs,
    summary: {
      totalSegments: candidates.length + preserved + locked + skipped,
      toTranslate: candidates.length,
      skipped,
      preserved,
      locked
    }
  };
  await writeJson(resolvedQueuePath, queue);
  console.log(`Queue batches: ${batches.length}; segments: ${candidates.length}`);
}

function buildBatches(
  segments: TranslationMemorySegment[],
  batchSegments: number,
  batchChars: number,
  glossary: Record<string, unknown>
): TranslationBatchInput[] {
  const batches: TranslationBatchInput[] = [];
  let current: TranslationBatchInput["segments"] = [];
  let chars = 0;
  for (const segment of segments) {
    const sourceChars = segment.source.length + segment.contextBefore.length + segment.contextAfter.length;
    if (current.length && (current.length >= batchSegments || chars + sourceChars > batchChars)) {
      batches.push(makeBatch(current, glossary));
      current = [];
      chars = 0;
    }
    current.push({
      id: segment.id,
      source: segment.source,
      contextBefore: segment.contextBefore,
      contextAfter: segment.contextAfter,
      documentTitle: segment.documentTitle,
      framework: segment.framework
    });
    chars += sourceChars;
  }
  if (current.length) batches.push(makeBatch(current, glossary));
  return batches;
}

function makeBatch(segments: TranslationBatchInput["segments"], glossary: Record<string, unknown>): TranslationBatchInput {
  return {
    task: "translate_apple_developer_docs_segments_to_korean",
    projectContext: {
      purpose: "learning project within Apple Developer Academy @ POSTECH",
      audience: "Korean learners and developers",
      style: "concise Korean technical documentation style"
    },
    rules: {
      output: "json_only",
      preserveSegmentIds: true,
      preserveMarkdown: true,
      preserveCode: true,
      preserveApiSymbols: true,
      doNotAddExplanations: true,
      doNotTranslateFrameworkNames: true
    },
    glossary: glossary as Record<string, string[] | Record<string, string>>,
    segments
  };
}

await main();

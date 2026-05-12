import { appendFile, readdir, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import PQueue from "p-queue";
import { Command } from "commander";
import { ensureDir, fileExists, readJson, resolveRoot } from "../lib/fs.js";
import { getUsageLimitInfo, translateBatch, type UsageLimitInfo } from "./codex-worker.js";
import type {
  QueueBatch,
  QueueBatchFileRef,
  QueueFile,
  TranslationBatchInput,
  TranslationBatchOutput
} from "../lib/types.js";

const program = new Command();
program
  .option("--queue <file>", "queue file", "state/queue/latest.json")
  .option("--concurrency <count>")
  .option("--results <file>", "incremental result file", "tmp/results/latest.json")
  .option("--progress <file>", "incremental progress file", "tmp/progress/latest.json")
  .option("--batch-dir <dir>", "per-batch output directory", "tmp/results/batches")
  .option("--max-failures <count>", "stop scheduling more batches after this many failures")
  .parse();
const options = program.opts<{ queue: string; concurrency?: string; results: string; progress: string; batchDir: string; maxFailures?: string }>();

type BatchState = {
  index: number;
  status: "queued" | "in_progress" | "success" | "failed";
  segments: number;
  startedAt?: string;
  completedAt?: string;
  durationMs?: number;
  error?: string;
};

async function main(): Promise<void> {
  const queueFile = await readJson<QueueFile>(resolveRoot(options.queue));
  const resolvedQueuePath = resolveRoot(options.queue);
  const queueDir = path.dirname(resolvedQueuePath);
  const concurrency = Number(options.concurrency ?? process.env.LLM_CONCURRENCY ?? 3);
  const workerQueue = new PQueue({ concurrency });
  const resultsPath = resolveRoot(options.results);
  const progressPath = resolveRoot(options.progress);
  const batchDir = resolveRoot(options.batchDir);
  const maxFailures = Number(options.maxFailures ?? process.env.MAX_TRANSLATION_FAILURES ?? 8);
  const outputs: Array<TranslationBatchOutput | undefined> = [];
  const failures: Array<{ batchIndex: number; error: string }> = [];
  const batchStates: BatchState[] = queueFile.batches.map((batch, index) => ({
    index,
    status: "queued",
    segments: batchSegmentCount(batch)
  }));
  const startedAt = new Date().toISOString();
  const totalBatches = queueFile.batches.length;
  const totalSegments = queueFile.batches.reduce((sum, batch) => sum + batchSegmentCount(batch), 0);
  let started = 0;
  let completed = 0;
  let failed = 0;
  let flushChain = Promise.resolve();
  let abortReason = "";
  let pauseInfo: UsageLimitInfo | undefined;
  const batchCache = new Map<number, TranslationBatchInput>();

  completed = await loadCompletedBatchOutputs(batchDir, batchStates, outputs);
  started = completed;

  await appendSummaryHeader(queueFile, totalBatches, totalSegments, concurrency);
  notice(
    "Shard queue",
    `${shardLabel(queueFile)}: batches=${totalBatches}, segments=${totalSegments}, concurrency=${concurrency}, maxFailures=${maxFailures}`
  );
  await flushState("initialized");

  queueFile.batches.forEach((_, batchIndex) => {
    if (batchStates[batchIndex].status === "success") {
      return;
    }
    workerQueue.add(async () => {
      if (abortReason) return;
      const batchState = batchStates[batchIndex];
      const batchStartedAt = Date.now();
      batchState.status = "in_progress";
      batchState.startedAt = new Date(batchStartedAt).toISOString();
      started += 1;
      logBatchStart(batchIndex, totalBatches, batchState.segments);
      await queueFlush(`batch-${batchIndex}-started`);

      try {
        const batch = await getQueueBatch(queueFile, batchIndex, queueDir, batchCache);
        const output = await translateBatch(batch);
        outputs[batchIndex] = output;
        completed += 1;
        batchState.status = "success";
        batchState.completedAt = new Date().toISOString();
        batchState.durationMs = Date.now() - batchStartedAt;
        await writeJsonAtomic(batchOutputPath(batchDir, batchIndex), {
          batchIndex,
          status: "success",
          completedAt: batchState.completedAt,
          durationMs: batchState.durationMs,
          output
        });
        logProgress(queueFile, "batch-complete", batchIndex, totalBatches, completed, failed, started, batchState.durationMs);
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        const usageLimitInfo = getUsageLimitInfo(message);
        if (usageLimitInfo) {
          batchState.status = "queued";
          batchState.completedAt = new Date().toISOString();
          batchState.durationMs = Date.now() - batchStartedAt;
          batchState.error = usageLimitInfo.message;
          if (!pauseInfo) {
            pauseInfo = usageLimitInfo;
            abortReason = pauseMessage(usageLimitInfo);
            workerQueue.clear();
            await writePauseInfo(progressPath, usageLimitInfo, queueFile);
            console.error(abortReason);
            notice("Shard paused", `${shardLabel(queueFile)}: ${abortReason}`);
          }
          await queueFlush(`batch-${batchIndex}-usage-limit-paused`);
          await appendSummaryRow(queueFile, totalBatches, completed, failed, activeCount(batchStates));
          return;
        }
        failed += 1;
        batchState.status = "failed";
        batchState.completedAt = new Date().toISOString();
        batchState.durationMs = Date.now() - batchStartedAt;
        batchState.error = message;
        failures.push({ batchIndex, error: message });
        await writeJsonAtomic(batchFailurePath(batchDir, batchIndex), {
          batchIndex,
          status: "failed",
          completedAt: batchState.completedAt,
          durationMs: batchState.durationMs,
          error: message
        });
        console.error(`Batch ${batchIndex + 1}/${totalBatches} failed: ${message}`);
        logProgress(queueFile, "batch-failed", batchIndex, totalBatches, completed, failed, started, batchState.durationMs);
        if (maxFailures > 0 && failed >= maxFailures && !abortReason) {
          abortReason = `Stopped after ${failed} failed batches`;
          workerQueue.clear();
          console.error(abortReason);
          notice("Shard stopped", `${shardLabel(queueFile)}: ${abortReason}`);
        }
      }
      await queueFlush(`batch-${batchIndex}-${batchState.status}`);
      await appendSummaryRow(queueFile, totalBatches, completed, failed, activeCount(batchStates));
    });
  });

  await workerQueue.onIdle();
  await flushChain;
  await flushState(pauseInfo ? "paused" : "finished");
  await appendSummaryRow(queueFile, totalBatches, completed, failed, activeCount(batchStates), true);
  if (pauseInfo) {
    console.log(`${shardLabel(queueFile)} paused after Codex usage limit; completed batches are saved for resume.`);
    return;
  }
  if (failures.length) {
    console.error(`Translation failures: ${failures.length}${abortReason ? ` (${abortReason})` : ""}`);
    process.exitCode = 1;
  } else {
    console.log(`Translated batches: ${outputs.length}`);
  }

  function queueFlush(reason: string): Promise<void> {
    flushChain = flushChain
      .catch(() => undefined)
      .then(() => flushState(reason).catch((error) => console.warn(`Could not write progress snapshot: ${error}`)));
    return flushChain;
  }

  async function flushState(reason: string): Promise<void> {
    const updatedAt = new Date().toISOString();
    const active = activeCount(batchStates);
    const processed = completed + failed;
    const percent = totalBatches ? Number(((processed / totalBatches) * 100).toFixed(2)) : 100;
    const progress = {
      generatedAt: startedAt,
      updatedAt,
      reason,
      queue: options.queue,
      shard: queueFile.shard,
      abortReason,
      pause: pauseInfo,
      totals: {
        batches: totalBatches,
        segments: totalSegments,
        completed,
        failed,
        processed,
        active,
        queued: Math.max(0, totalBatches - processed - active),
        percent
      },
      batches: batchStates
    };
    await writeJsonAtomic(resultsPath, {
      generatedAt: startedAt,
      updatedAt,
      queue: options.queue,
      abortReason,
      pause: pauseInfo,
      outputs,
      failures,
      progress
    });
    await writeJsonAtomic(progressPath, progress);
  }
}

await main();

function batchOutputPath(batchDir: string, index: number): string {
  return path.join(batchDir, `batch-${String(index).padStart(5, "0")}.json`);
}

function batchFailurePath(batchDir: string, index: number): string {
  return path.join(batchDir, `batch-${String(index).padStart(5, "0")}.failure.json`);
}

function batchSegmentCount(batch: QueueBatch): number {
  if (isBatchFileRef(batch)) {
    return batch.segments;
  }
  return batch.segments.length;
}

function isBatchFileRef(value: QueueBatch): value is QueueBatchFileRef {
  return "path" in value && "segments" in value && !("task" in value);
}

async function getQueueBatch(
  queueFile: QueueFile,
  index: number,
  queueDir: string,
  batchCache: Map<number, TranslationBatchInput>
): Promise<TranslationBatchInput> {
  const cached = batchCache.get(index);
  if (cached) return cached;

  const queueBatch = queueFile.batches[index];
  if (!isBatchFileRef(queueBatch)) {
    batchCache.set(index, queueBatch);
    return queueBatch;
  }

  const rawPath = queueBatch.path;
  const resolvedBatchPath = path.isAbsolute(rawPath) ? rawPath : path.resolve(queueDir, rawPath);
  const fallbackPath = resolveRoot(rawPath);
  const batchPath = (await fileExists(resolvedBatchPath)) ? resolvedBatchPath : fallbackPath;
  const loadedBatch = await readJson<TranslationBatchInput>(batchPath);
  batchCache.set(index, loadedBatch);
  return loadedBatch;
}

async function loadCompletedBatchOutputs(
  batchDir: string,
  batchStates: BatchState[],
  outputs: Array<TranslationBatchOutput | undefined>
): Promise<number> {
  try {
    const files = await readdir(batchDir);
    let loaded = 0;
    for (const file of files) {
      const match = file.match(/^batch-(\d{5})\.json$/);
      if (!match) continue;
      const batchIndex = Number(match[1]);
      if (!Number.isInteger(batchIndex) || batchIndex < 0 || batchIndex >= batchStates.length) continue;
      const batchOutput = await readJson<{
        status?: string;
        completedAt?: string;
        durationMs?: number;
        output?: TranslationBatchOutput;
      }>(path.join(batchDir, file));
      if (batchOutput.status !== "success" || !batchOutput.output) continue;
      outputs[batchIndex] = batchOutput.output;
      batchStates[batchIndex].status = "success";
      batchStates[batchIndex].completedAt = batchOutput.completedAt;
      batchStates[batchIndex].durationMs = batchOutput.durationMs;
      loaded += 1;
    }
    if (loaded > 0) {
      console.log(`Loaded completed batches from checkpoint: ${loaded}`);
    }
    return loaded;
  } catch {
    return 0;
  }
}

async function writePauseInfo(progressPath: string, usageLimitInfo: UsageLimitInfo, queueFile: QueueFile): Promise<void> {
  await writeJsonAtomic(path.join(path.dirname(progressPath), "pause.json"), {
    pausedAt: new Date().toISOString(),
    reason: "codex_usage_limit",
    shard: queueFile.shard,
    ...usageLimitInfo
  });
}

function pauseMessage(usageLimitInfo: UsageLimitInfo): string {
  const retry = usageLimitInfo.retryAfterText ? `; retry after ${usageLimitInfo.retryAfterText}` : "";
  return `Paused after Codex usage limit${retry}`;
}

function activeCount(batchStates: BatchState[]): number {
  return batchStates.filter((batch) => batch.status === "in_progress").length;
}

async function writeJsonAtomic(filePath: string, value: unknown): Promise<void> {
  await ensureDir(path.dirname(filePath));
  const tempPath = path.join(path.dirname(filePath), `.${path.basename(filePath)}.${process.pid}.${Date.now()}.tmp`);
  await writeFile(tempPath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
  await rename(tempPath, filePath);
}

function shardLabel(queueFile: QueueFile): string {
  if (!queueFile.shard) return "queue latest";
  return `shard ${String(queueFile.shard.index).padStart(4, "0")}/${queueFile.shard.total}`;
}

function logBatchStart(batchIndex: number, totalBatches: number, segments: number): void {
  console.log(`Starting batch ${batchIndex + 1}/${totalBatches} (${segments} segments)`);
}

function logProgress(
  queueFile: QueueFile,
  status: string,
  batchIndex: number,
  totalBatches: number,
  completed: number,
  failed: number,
  started: number,
  durationMs?: number
): void {
  const processed = completed + failed;
  const active = Math.max(0, started - processed);
  const percent = totalBatches ? ((processed / totalBatches) * 100).toFixed(2) : "100.00";
  const duration = durationMs === undefined ? "" : `, batchDuration=${formatDuration(durationMs)}`;
  const message = `${shardLabel(queueFile)}: ${status} batch=${batchIndex + 1}/${totalBatches}, completed=${completed}, failed=${failed}, active=${active}, progress=${percent}%${duration}`;
  notice("Shard progress", message);
}

function formatDuration(durationMs: number): string {
  const seconds = Math.round(durationMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return minutes ? `${minutes}m ${remainingSeconds}s` : `${remainingSeconds}s`;
}

function notice(title: string, message: string): void {
  if (process.env.GITHUB_ACTIONS === "true") {
    console.log(`::notice title=${escapeCommand(title)}::${escapeCommand(message)}`);
    return;
  }
  console.log(`[${title}] ${message}`);
}

function escapeCommand(value: string): string {
  return value.replace(/%/g, "%25").replace(/\r/g, "%0D").replace(/\n/g, "%0A");
}

async function appendSummaryHeader(queueFile: QueueFile, totalBatches: number, totalSegments: number, concurrency: number): Promise<void> {
  if (!process.env.GITHUB_STEP_SUMMARY) return;
  await appendFile(
    process.env.GITHUB_STEP_SUMMARY,
    [
      `### ${shardLabel(queueFile)} progress`,
      "",
      `- Batches: ${totalBatches}`,
      `- Segments: ${totalSegments}`,
      `- Concurrency: ${concurrency}`,
      "",
      "| Time | Completed | Failed | Active | Progress |",
      "| --- | ---: | ---: | ---: | ---: |"
    ].join("\n") + "\n",
    "utf8"
  );
}

async function appendSummaryRow(
  queueFile: QueueFile,
  totalBatches: number,
  completed: number,
  failed: number,
  active: number,
  force = false
): Promise<void> {
  if (!process.env.GITHUB_STEP_SUMMARY) return;
  const processed = completed + failed;
  const every = Number(process.env.PROGRESS_SUMMARY_INTERVAL_BATCHES ?? 10);
  if (!force && processed > 0 && processed % every !== 0) return;
  if (force && processed > 0 && processed % every === 0) return;
  const percent = totalBatches ? ((processed / totalBatches) * 100).toFixed(2) : "100.00";
  await appendFile(
    process.env.GITHUB_STEP_SUMMARY,
    `| ${new Date().toISOString()} | ${completed}/${totalBatches} | ${failed} | ${active} | ${percent}% |\n`,
    "utf8"
  );
  void queueFile;
}

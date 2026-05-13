import path from "node:path";
import { Command } from "commander";
import fg from "fast-glob";
import { loadTranslationConfig } from "../lib/config.js";
import { readJson, readText, resolveRoot } from "../lib/fs.js";
import type { QueueBatch, QueueBatchFileRef, QueueFile, TranslationBatchInput } from "../lib/types.js";

const program = new Command();
const argv = process.argv[2] === "--" ? [process.argv[0], process.argv[1], ...process.argv.slice(3)] : process.argv;
program
  .option("--queue <file>", "queue JSON file. Repeatable.", collect, [] as string[])
  .option("--queue-glob <pattern>", "glob for queue JSON files")
  .option("--segments <count>", "estimate without queue files using a segment count")
  .option("--avg-source-chars <count>", "average source text chars per segment", "111")
  .option("--avg-context-chars <count>", "average context chars per segment", "215")
  .option("--avg-metadata-chars <count>", "average JSON id/sourcePath/framework/title overhead per segment", "140")
  .option("--batch-segments <count>", "segments per batch", "180")
  .option("--batch-chars <count>", "source+context character budget per batch", "60000")
  .option("--review", "include second-pass review cost", true)
  .option("--no-review", "exclude second-pass review cost")
  .option("--output-ratio <number>", "estimated Korean output chars per source char", "0.75")
  .option("--chars-per-token <number>", "rough character-to-token divisor", "4")
  .option("--input-price <usd>", "input price per 1M tokens")
  .option("--output-price <usd>", "output price per 1M tokens")
  .parse(argv);

const options = program.opts<{
  queue: string[];
  queueGlob?: string;
  segments?: string;
  avgSourceChars: string;
  avgContextChars: string;
  avgMetadataChars: string;
  batchSegments: string;
  batchChars: string;
  review: boolean;
  outputRatio: string;
  charsPerToken: string;
  inputPrice?: string;
  outputPrice?: string;
}>();

type Estimate = {
  mode: "queue" | "aggregate";
  batches: number;
  segments: number;
  translationInputChars: number;
  translationOutputChars: number;
  reviewInputChars: number;
  reviewOutputChars: number;
};

function collect(value: string, previous: string[]): string[] {
  previous.push(value);
  return previous;
}

const config = await loadTranslationConfig();
const inputPrice = Number(options.inputPrice ?? config.translation.gemini?.inputPricePerMillionTokens ?? 0.25);
const outputPrice = Number(options.outputPrice ?? config.translation.gemini?.outputPricePerMillionTokens ?? 1.5);
const charsPerToken = Number(options.charsPerToken);
const reviewEnabled = options.review;

const promptTemplate = await readText(resolveRoot("prompts/translate-segments.md"));
const reviewTemplate = await readText(resolveRoot("prompts/review-translation-segments.md"));
const queueFiles = await collectQueueFiles();
const estimate = queueFiles.length ? await estimateFromQueues(queueFiles) : estimateFromAggregate();
const billableInputChars = estimate.translationInputChars + (reviewEnabled ? estimate.reviewInputChars : 0);
const billableOutputChars = estimate.translationOutputChars + (reviewEnabled ? estimate.reviewOutputChars : 0);
const inputTokens = Math.ceil(billableInputChars / charsPerToken);
const outputTokens = Math.ceil(billableOutputChars / charsPerToken);
const inputCost = (inputTokens / 1_000_000) * inputPrice;
const outputCost = (outputTokens / 1_000_000) * outputPrice;
const totalCost = inputCost + outputCost;

const result = {
  model: config.translation.gemini?.model ?? "gemini-3.1-flash-lite",
  pricingPerMillionTokens: { input: inputPrice, output: outputPrice },
  reviewEnabled,
  charsPerToken,
  estimate: {
    ...estimate,
    billableInputChars,
    billableOutputChars,
    inputTokens,
    outputTokens,
    inputCostUsd: roundMoney(inputCost),
    outputCostUsd: roundMoney(outputCost),
    totalCostUsd: roundMoney(totalCost)
  }
};

console.log(JSON.stringify(result, null, 2));
console.error(
  `Gemini cost estimate: ${estimate.segments.toLocaleString()} segments, ${estimate.batches.toLocaleString()} batches, ` +
    `$${roundMoney(totalCost).toLocaleString()} total (${reviewEnabled ? "with" : "without"} review).`
);

async function collectQueueFiles(): Promise<string[]> {
  const explicit = options.queue.map((queue) => resolveRoot(queue));
  if (!options.queueGlob) return explicit;
  const matches = await fg(options.queueGlob, { cwd: resolveRoot(), onlyFiles: true });
  return [...explicit, ...matches.map((match) => resolveRoot(match))].sort();
}

async function estimateFromQueues(queueFiles: string[]): Promise<Estimate> {
  let batches = 0;
  let segments = 0;
  let translationInputChars = 0;
  let translationOutputChars = 0;
  let reviewInputChars = 0;
  let reviewOutputChars = 0;

  for (const queuePath of queueFiles) {
    const queue = await readJson<QueueFile>(queuePath);
    const queueDir = path.dirname(queuePath);
    for (const [batchIndex, ref] of queue.batches.entries()) {
      const batch = await loadBatch(ref, batchIndex, queueDir);
      const inputJson = JSON.stringify(batch, null, 2);
      const draftJson = estimatedOutputJson(batch);
      batches += 1;
      segments += batch.segments.length;
      translationInputChars += promptTemplate.replace("<INPUT_JSON>", inputJson).length;
      translationOutputChars += draftJson.length;
      reviewInputChars += reviewTemplate.replace("<INPUT_JSON>", inputJson).replace("<DRAFT_JSON>", draftJson).length;
      reviewOutputChars += draftJson.length;
    }
  }

  return { mode: "queue", batches, segments, translationInputChars, translationOutputChars, reviewInputChars, reviewOutputChars };
}

async function loadBatch(ref: QueueBatch, batchIndex: number, queueDir: string): Promise<TranslationBatchInput> {
  if (!isBatchFileRef(ref)) return ref;
  const batchPath = path.isAbsolute(ref.path) ? ref.path : path.resolve(queueDir, ref.path);
  return readJson<TranslationBatchInput>(batchPath).catch((error) => {
    throw new Error(`Could not read batch ${batchIndex} at ${batchPath}: ${error instanceof Error ? error.message : String(error)}`);
  });
}

function isBatchFileRef(value: QueueBatch): value is QueueBatchFileRef {
  return "path" in value && "segments" in value && !("task" in value);
}

function estimateFromAggregate(): Estimate {
  const segments = Number(options.segments);
  if (!Number.isFinite(segments) || segments <= 0) {
    throw new Error("Provide --queue/--queue-glob or --segments for an aggregate estimate.");
  }
  const avgSourceChars = Number(options.avgSourceChars);
  const avgContextChars = Number(options.avgContextChars);
  const avgMetadataChars = Number(options.avgMetadataChars);
  const batchSegments = Number(options.batchSegments);
  const batchChars = Number(options.batchChars);
  const outputRatio = Number(options.outputRatio);
  const charsForBatchLimit = Math.max(1, avgSourceChars + avgContextChars);
  const segmentsPerBatch = Math.max(1, Math.min(batchSegments, Math.floor(batchChars / charsForBatchLimit)));
  const batches = Math.ceil(segments / segmentsPerBatch);
  const segmentInputChars = avgSourceChars + avgContextChars + avgMetadataChars;
  const segmentOutputChars = avgSourceChars * outputRatio + avgMetadataChars;
  const promptOverhead = promptTemplate.replace("<INPUT_JSON>", "").length;
  const reviewOverhead = reviewTemplate.replace("<INPUT_JSON>", "").replace("<DRAFT_JSON>", "").length;
  const translationInputChars = Math.ceil(segments * segmentInputChars + batches * promptOverhead);
  const translationOutputChars = Math.ceil(segments * segmentOutputChars);
  const reviewInputChars = Math.ceil(translationInputChars + translationOutputChars + batches * reviewOverhead);
  const reviewOutputChars = translationOutputChars;
  return { mode: "aggregate", batches, segments, translationInputChars, translationOutputChars, reviewInputChars, reviewOutputChars };
}

function estimatedOutputJson(batch: TranslationBatchInput): string {
  const outputRatio = Number(options.outputRatio);
  return JSON.stringify({
    segments: batch.segments.map((segment) => ({
      sourcePath: segment.sourcePath,
      id: segment.id,
      ko: "가".repeat(Math.max(1, Math.ceil(segment.source.length * outputRatio)))
    }))
  });
}

function roundMoney(value: number): number {
  return Math.round(value * 100) / 100;
}

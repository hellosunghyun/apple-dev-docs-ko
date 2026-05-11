import PQueue from "p-queue";
import { Command } from "commander";
import { readJson, resolveRoot, writeJson } from "../lib/fs.js";
import { translateBatch } from "./codex-worker.js";
import type { QueueFile, TranslationBatchOutput } from "../lib/types.js";

const program = new Command();
program.option("--queue <file>", "queue file", "state/queue/latest.json").option("--concurrency <count>").parse();
const options = program.opts<{ queue: string; concurrency?: string }>();

async function main(): Promise<void> {
  const queueFile = await readJson<QueueFile>(resolveRoot(options.queue));
  const concurrency = Number(options.concurrency ?? process.env.LLM_CONCURRENCY ?? 3);
  const workerQueue = new PQueue({ concurrency });
  const outputs: TranslationBatchOutput[] = [];
  const failures: Array<{ batchIndex: number; error: string }> = [];

  queueFile.batches.forEach((batch, batchIndex) => {
    workerQueue.add(async () => {
      try {
        outputs[batchIndex] = await translateBatch(batch);
      } catch (error) {
        failures.push({ batchIndex, error: error instanceof Error ? error.message : String(error) });
      }
    });
  });

  await workerQueue.onIdle();
  await writeJson(resolveRoot("tmp/results/latest.json"), {
    generatedAt: new Date().toISOString(),
    queue: options.queue,
    outputs,
    failures
  });
  if (failures.length) {
    console.error(`Translation failures: ${failures.length}`);
    process.exitCode = 1;
  } else {
    console.log(`Translated batches: ${outputs.length}`);
  }
}

await main();


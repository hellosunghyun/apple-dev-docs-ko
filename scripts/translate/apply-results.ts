import { Command } from "commander";
import { applyTranslationOutput, readMemory, writeMemory } from "../lib/memory.js";
import { readJson, resolveRoot } from "../lib/fs.js";
import type { QueueFile, TranslationBatchOutput } from "../lib/types.js";

const program = new Command();
program.option("--queue <file>", "queue file", "state/queue/latest.json").option("--results <file>", "results file", "tmp/results/latest.json").parse();
const options = program.opts<{ queue: string; results: string }>();

async function main(): Promise<void> {
  const queue = await readJson<QueueFile>(resolveRoot(options.queue));
  const results = await readJson<{ outputs: TranslationBatchOutput[] }>(resolveRoot(options.results));
  const bySourcePath = new Map<string, Array<{ id: string; ko: string }>>();
  const sourcePaths = new Set(queue.sourcePaths);
  const allSegments = results.outputs.flatMap((output) => output?.segments ?? []);
  const memoryIdsBySourcePath = new Map<string, Set<string>>();

  for (const sourcePath of sourcePaths) {
    const memory = await readMemory(sourcePath);
    if (!memory) continue;
    const segmentIds = new Set(memory.segments.map((segment) => segment.id));
    memoryIdsBySourcePath.set(sourcePath, segmentIds);
  }

  for (const segment of allSegments) {
    if (segment.sourcePath) {
      if (!sourcePaths.has(segment.sourcePath)) continue;
      const output = bySourcePath.get(segment.sourcePath) ?? [];
      output.push({ id: segment.id, ko: segment.ko });
      bySourcePath.set(segment.sourcePath, output);
      continue;
    }

    const matches = Array.from(memoryIdsBySourcePath.entries()).filter(([, ids]) => ids.has(segment.id));
    if (matches.length !== 1) continue;
    const [sourcePath] = matches[0];
    const output = bySourcePath.get(sourcePath) ?? [];
    output.push({ id: segment.id, ko: segment.ko });
    bySourcePath.set(sourcePath, output);
  }

  let changed = 0;
  for (const [sourcePath, output] of bySourcePath.entries()) {
    if (!output.length) continue;
    const memory = await readMemory(sourcePath);
    if (!memory) continue;
    await writeMemory(applyTranslationOutput(memory, output));
    changed += 1;
  }
  console.log(`Applied translation results to files: ${changed}`);
}

await main();

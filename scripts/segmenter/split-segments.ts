import { Command } from "commander";
import { loadSourceConfig } from "../lib/config.js";
import { filterChangedManifestFiles } from "../lib/changed-files.js";
import { selectShardManifestFiles } from "../lib/shards.js";
import { createMemoryFromParsed, mergeMemory, readMemory, writeMemory } from "../lib/memory.js";
import { readJson, readText, resolveRoot, writeJson } from "../lib/fs.js";
import { parseMarkdownDocument } from "../lib/markdown.js";
import type { Manifest, ManifestFile, Segment } from "../lib/types.js";

const program = new Command();
program
  .option("--file <sourcePath>")
  .option("--limit-files <count>")
  .option("--shard <index>")
  .option("--shard-total <total>")
  .option("--changed-only")
  .parse();
const options = program.opts<{ file?: string; limitFiles?: string; shard?: string; shardTotal?: string; changedOnly?: boolean }>();

async function main(): Promise<void> {
  const sourceConfig = await loadSourceConfig();
  const manifest = await readJson<Manifest>(resolveRoot("state/manifest.json"));
  let files = options.file ? manifest.files.filter((file) => file.sourcePath === options.file) : manifest.files;
  if (options.changedOnly) files = await filterChangedManifestFiles(files);
  if (options.limitFiles) files = files.slice(0, Number(options.limitFiles));
  if (options.shard && options.shardTotal) {
    const index = Number(options.shard);
    const total = Number(options.shardTotal);
    files = await selectShardManifestFiles(files, index, total);
  }

  let count = 0;
  for (const file of files) {
    count += await segmentFile(file, sourceConfig.upstream.cacheDir, manifest.upstream.latestSha);
  }
  console.log(`Segmented documents: ${files.length}; segments: ${count}`);
}

async function segmentFile(file: ManifestFile, cacheDir: string, upstreamSha: string): Promise<number> {
  const markdown = await readText(resolveRoot(cacheDir, file.sourcePath));
  const parsed = parseMarkdownDocument(markdown, {
    sourcePath: file.sourcePath,
    framework: file.framework,
    title: file.title,
    officialUrl: file.officialUrl,
    upstreamSha
  });
  const memory = mergeMemory(await readMemory(file.sourcePath), createMemoryFromParsed(parsed, file));
  await writeMemory(memory);
  const segments: Segment[] = parsed.blocks.flatMap((block) => block.segments);
  await writeJson(resolveRoot("state/segments", file.sourcePath.replace(/\.md$/i, ".json")), segments);
  return segments.length;
}

await main();

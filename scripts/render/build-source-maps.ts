import { Command } from "commander";
import { loadSiteConfig } from "../lib/config.js";
import { readJson, resolveRoot, writeJson } from "../lib/fs.js";
import { applyOverride, readMemory } from "../lib/memory.js";
import { readOverride } from "../lib/overrides.js";
import type { Manifest, SourceMapFile } from "../lib/types.js";

const program = new Command();
program.option("--file <sourcePath>").option("--limit-files <count>").parse();
const options = program.opts<{ file?: string; limitFiles?: string }>();

async function main(): Promise<void> {
  const manifest = await readJson<Manifest>(resolveRoot("state/manifest.json"));
  const siteConfig = await loadSiteConfig();
  let files = options.file ? manifest.files.filter((file) => file.sourcePath === options.file) : manifest.files;
  if (options.limitFiles) files = files.slice(0, Number(options.limitFiles));
  for (const file of files) {
    const memory = await readMemory(file.sourcePath);
    if (!memory) continue;
    const withOverrides = applyOverride(memory, await readOverride(file.sourcePath));
    const sourceMap: SourceMapFile = {
      docId: file.sourcePath,
      title: file.title,
      upstreamSha: manifest.upstream.latestSha,
      officialUrl: file.officialUrl,
      segments: withOverrides.segments.map((segment) => ({
        id: segment.id,
        source: siteConfig.site.sourceView.publicSourcePolicy === "sentence_source_public" ? segment.source : undefined,
        ko: segment.ko || segment.source,
        sourceHash: segment.sourceHash,
        status: segment.status
      }))
    };
    await writeJson(resolveRoot("site/public/source-maps", file.sourcePath.replace(/\.md$/i, ".json")), sourceMap);
  }
  console.log(`Source maps: ${files.length}`);
}

await main();


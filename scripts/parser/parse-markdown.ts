import { Command } from "commander";
import { loadSourceConfig } from "../lib/config.js";
import { readJson, readText, resolveRoot, writeJson } from "../lib/fs.js";
import { parseMarkdownDocument } from "../lib/markdown.js";
import type { Manifest, ManifestFile } from "../lib/types.js";

const program = new Command();
program.option("--file <sourcePath>").option("--limit-files <count>").parse();
const options = program.opts<{ file?: string; limitFiles?: string }>();

async function main(): Promise<void> {
  const sourceConfig = await loadSourceConfig();
  const manifest = await readJson<Manifest>(resolveRoot("state/manifest.json"));
  let files = options.file ? manifest.files.filter((file) => file.sourcePath === options.file) : manifest.files;
  if (options.limitFiles) files = files.slice(0, Number(options.limitFiles));

  for (const file of files) {
    await parseFile(file, sourceConfig.upstream.cacheDir, manifest.upstream.latestSha);
  }
  console.log(`Parsed documents: ${files.length}`);
}

async function parseFile(file: ManifestFile, cacheDir: string, upstreamSha: string): Promise<void> {
  const markdown = await readText(resolveRoot(cacheDir, file.sourcePath));
  const parsed = parseMarkdownDocument(markdown, {
    sourcePath: file.sourcePath,
    framework: file.framework,
    title: file.title,
    officialUrl: file.officialUrl,
    upstreamSha
  });
  await writeJson(resolveRoot("state/parsed", file.sourcePath.replace(/\.md$/i, ".json")), parsed);
}

await main();


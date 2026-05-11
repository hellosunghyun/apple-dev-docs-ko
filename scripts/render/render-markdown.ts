import { Command } from "commander";
import { loadSourceConfig } from "../lib/config.js";
import { readJson, readText, resolveRoot, writeText } from "../lib/fs.js";
import { parseMarkdownDocument, renderTranslatedMarkdown } from "../lib/markdown.js";
import { applyOverride, readMemory } from "../lib/memory.js";
import { readOverride } from "../lib/overrides.js";
import type { Manifest, ManifestFile } from "../lib/types.js";

const program = new Command();
program.option("--file <sourcePath>").option("--limit-files <count>").parse();
const options = program.opts<{ file?: string; limitFiles?: string }>();

async function main(): Promise<void> {
  const sourceConfig = await loadSourceConfig();
  const manifest = await readJson<Manifest>(resolveRoot("state/manifest.json"));
  let files = options.file ? manifest.files.filter((file) => file.sourcePath === options.file) : manifest.files;
  if (options.limitFiles) files = files.slice(0, Number(options.limitFiles));
  let rendered = 0;
  for (const file of files) {
    await renderFile(file, sourceConfig.upstream.cacheDir, manifest.upstream.latestSha);
    rendered += 1;
  }
  console.log(`Rendered Korean Markdown files: ${rendered}`);
}

async function renderFile(file: ManifestFile, cacheDir: string, upstreamSha: string): Promise<void> {
  const markdown = await readText(resolveRoot(cacheDir, file.sourcePath));
  const parsed = parseMarkdownDocument(markdown, {
    sourcePath: file.sourcePath,
    framework: file.framework,
    title: file.title,
    officialUrl: file.officialUrl,
    upstreamSha
  });
  const memory = await readMemory(file.sourcePath);
  const withOverrides = memory ? applyOverride(memory, await readOverride(file.sourcePath)) : undefined;
  const translations = new Map((withOverrides?.segments ?? []).map((segment) => [segment.id, segment.ko || segment.source]));
  await writeText(resolveRoot("translations/ko", file.sourcePath), renderTranslatedMarkdown(parsed, translations));
}

await main();


import { Command } from "commander";
import { readJson, readOptionalJson, readText, resolveRoot, writeJson } from "../lib/fs.js";
import type { Manifest } from "../lib/types.js";

const program = new Command();
program.option("--file-list <file>").parse();
const options = program.opts<{ fileList?: string }>();

const manifest = await readJson<Manifest>(resolveRoot("state/manifest.json"));
const navigation = await readOptionalJson<Array<{
  title: string;
  framework: string;
  sourcePath: string;
  slug: string;
  officialUrl?: string;
}>>(resolveRoot("site/src/data/navigation.json"), []);
const selected = options.fileList
  ? new Set((await readText(resolveRoot(options.fileList))).split(/\r?\n/).map((line) => line.trim()).filter(Boolean))
  : undefined;
const sourceItems = navigation.length
  ? navigation
  : manifest.files.map((file) => ({
    title: file.title,
    framework: file.framework,
    sourcePath: file.sourcePath,
    slug: file.sourcePath.replace(/\.md$/i, ""),
    officialUrl: file.officialUrl
  }));
const nextIndex = sourceItems
  .filter((file) => !selected || selected.has(file.sourcePath))
  .map((file) => ({
  title: file.title,
  framework: file.framework,
  sourcePath: file.sourcePath,
  slug: file.slug,
  officialUrl: file.officialUrl,
  haystack: `${file.title} ${file.framework} ${file.sourcePath}`.toLowerCase()
}));
const existing = selected
  ? await readOptionalJson<{ items?: typeof nextIndex }>(resolveRoot("site/public/search/index.json"), {})
  : {};
const bySourcePath = new Map((existing.items ?? []).map((item) => [item.sourcePath, item]));
for (const item of nextIndex) {
  bySourcePath.set(item.sourcePath, item);
}
const index = selected ? Array.from(bySourcePath.values()).sort((a, b) => a.sourcePath.localeCompare(b.sourcePath)) : nextIndex;
await writeJson(resolveRoot("site/public/search/index.json"), {
  generatedAt: new Date().toISOString(),
  count: index.length,
  items: index
});
console.log(`Search index entries: ${index.length}`);

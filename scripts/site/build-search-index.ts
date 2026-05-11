import { readJson, resolveRoot, writeJson } from "../lib/fs.js";
import type { Manifest } from "../lib/types.js";

const manifest = await readJson<Manifest>(resolveRoot("state/manifest.json"));
const index = manifest.files.map((file) => ({
  title: file.title,
  framework: file.framework,
  sourcePath: file.sourcePath,
  slug: file.sourcePath.replace(/\.md$/i, ""),
  officialUrl: file.officialUrl,
  haystack: `${file.title} ${file.framework} ${file.sourcePath}`.toLowerCase()
}));
await writeJson(resolveRoot("site/public/search/index.json"), {
  generatedAt: new Date().toISOString(),
  count: index.length,
  items: index
});
console.log(`Search index entries: ${index.length}`);


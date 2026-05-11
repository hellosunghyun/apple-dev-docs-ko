import path from "node:path";
import { readJson, readText, resolveRoot, writeJson, writeText } from "../lib/fs.js";
import type { Manifest } from "../lib/types.js";

async function main(): Promise<void> {
  const manifest = await readJson<Manifest>(resolveRoot("state/manifest.json"));
  const nav = manifest.files.map((file) => ({
    sourcePath: file.sourcePath,
    slug: slugFromSourcePath(file.sourcePath),
    title: file.title,
    framework: file.framework,
    officialUrl: file.officialUrl
  }));

  for (const file of manifest.files) {
    const renderedPath = resolveRoot("translations/ko", file.sourcePath);
    try {
      const content = await readText(renderedPath);
      const target = resolveRoot("site/src/content/docs", file.sourcePath);
      await writeText(target, content);
    } catch {
      // Site can still build while translation bootstrap is in progress.
    }
  }

  await writeJson(resolveRoot("site/src/data/navigation.json"), nav);
  await writeJson(resolveRoot("site/public/navigation.json"), nav);
  console.log(`Site navigation entries: ${nav.length}`);
}

export function slugFromSourcePath(sourcePath: string): string {
  return sourcePath.replace(/\.md$/i, "").split(path.posix.sep).map(encodeURIComponent).join("/");
}

await main();


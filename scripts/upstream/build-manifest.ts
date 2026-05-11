import path from "node:path";
import fg from "fast-glob";
import { loadSourceConfig } from "../lib/config.js";
import { ensureDir, readOptionalJson, readText, resolveRoot, sha256, writeJson, writeText } from "../lib/fs.js";
import { frameworkFromSourcePath, officialUrlFromSourcePath, sourcePathFromAbsolute, titleFromMarkdown } from "../lib/source.js";
import type { Manifest, ManifestFile, UpstreamState } from "../lib/types.js";

async function main(): Promise<void> {
  const config = await loadSourceConfig();
  const cacheDir = resolveRoot(config.upstream.cacheDir);
  const upstreamState = await readOptionalJson<UpstreamState>(resolveRoot("state/upstream.json"), {
    repo: config.upstream.repo,
    branch: config.upstream.branch,
    latestSha: "local",
    updatedAt: new Date().toISOString()
  });

  const patterns = config.scope.include.map((pattern) => path.posix.join(config.upstream.cacheDir, pattern));
  const files = await fg(patterns, {
    cwd: resolveRoot(),
    absolute: true,
    ignore: config.scope.exclude.map((pattern) => path.posix.join(config.upstream.cacheDir, pattern))
  });

  const manifestFiles: ManifestFile[] = [];
  for (const absolutePath of files.sort()) {
    const markdown = await readText(absolutePath);
    const sourcePath = sourcePathFromAbsolute(cacheDir, absolutePath);
    const file: ManifestFile = {
      sourcePath,
      sourceFileHash: sha256(markdown),
      bytes: Buffer.byteLength(markdown),
      chars: markdown.length,
      lineCount: markdown.split(/\r?\n/).length,
      framework: frameworkFromSourcePath(sourcePath),
      title: titleFromMarkdown(sourcePath, markdown),
      officialUrl: officialUrlFromSourcePath(sourcePath)
    };
    manifestFiles.push(file);
  }

  const manifest: Manifest = {
    generatedAt: new Date().toISOString(),
    upstream: upstreamState,
    files: manifestFiles
  };

  await writeJson(resolveRoot("state/manifest.json"), manifest);
  await ensureDir(resolveRoot("reports/runs"));
  const frameworkCounts = new Map<string, number>();
  for (const file of manifestFiles) frameworkCounts.set(file.framework, (frameworkCounts.get(file.framework) ?? 0) + 1);
  const summary = {
    generatedAt: manifest.generatedAt,
    upstream: manifest.upstream,
    totals: {
      files: manifest.files.length,
      frameworks: frameworkCounts.size,
      chars: manifest.files.reduce((sum, file) => sum + file.chars, 0),
      bytes: manifest.files.reduce((sum, file) => sum + file.bytes, 0)
    },
    frameworks: Array.from(frameworkCounts.entries())
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([name, count]) => ({ name, count }))
  };
  await writeJson(resolveRoot("state/manifest-summary.json"), summary);
  const report = [
    "# Manifest Report",
    "",
    `- Generated: ${manifest.generatedAt}`,
    `- Upstream: ${manifest.upstream.latestSha}`,
    `- Files: ${manifest.files.length}`,
    "",
    "## Frameworks",
    "",
    ...Array.from(frameworkCounts.entries()).sort((a, b) => a[0].localeCompare(b[0])).map(([name, count]) => `- ${name}: ${count}`)
  ].join("\n");
  await writeText(resolveRoot("reports/latest.md"), `${report}\n`);
  await writeText(resolveRoot(`reports/runs/${new Date().toISOString().replace(/[:.]/g, "-")}-manifest.md`), `${report}\n`);
  console.log(`Manifest files: ${manifest.files.length}`);
}

await main();

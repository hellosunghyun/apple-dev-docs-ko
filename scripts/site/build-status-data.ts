import { readJson, resolveRoot, writeJson } from "../lib/fs.js";
import { readMemory } from "../lib/memory.js";
import type { Manifest } from "../lib/types.js";

const manifest = await readJson<Manifest>(resolveRoot("state/manifest.json"));
const frameworks = new Map<string, { files: number; translated: number; failedSegments: number; needsReview: number }>();
let translatedFiles = 0;
let failedSegments = 0;
let needsReview = 0;

for (const file of manifest.files) {
  const current = frameworks.get(file.framework) ?? { files: 0, translated: 0, failedSegments: 0, needsReview: 0 };
  current.files += 1;
  const memory = await readMemory(file.sourcePath);
  if (memory?.status === "translated") {
    translatedFiles += 1;
    current.translated += 1;
  }
  const fileFailed = memory?.segments.filter((segment) => segment.status === "failed").length ?? 0;
  const fileReview = memory?.segments.filter((segment) => segment.status === "needs_review").length ?? 0;
  current.failedSegments += fileFailed;
  current.needsReview += fileReview;
  failedSegments += fileFailed;
  needsReview += fileReview;
  frameworks.set(file.framework, current);
}

const status = {
  generatedAt: new Date().toISOString(),
  upstream: manifest.upstream,
  totals: {
    files: manifest.files.length,
    translatedFiles,
    failedSegments,
    needsReview,
    progress: manifest.files.length ? translatedFiles / manifest.files.length : 0
  },
  frameworks: Array.from(frameworks.entries()).map(([framework, value]) => ({ framework, ...value }))
};
await writeJson(resolveRoot("site/public/status/status.json"), status);
await writeJson(resolveRoot("site/src/data/status.json"), status);
await writeJson(resolveRoot("state/translation-progress.json"), status);
console.log(`Status progress: ${Math.round(status.totals.progress * 100)}%`);

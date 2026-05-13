import { readJson, readOptionalJson, resolveRoot, writeJson } from "../lib/fs.js";
import { readMemory } from "../lib/memory.js";
import type { Manifest } from "../lib/types.js";

interface NavItem {
  sourcePath: string;
  framework: string;
}

interface ManifestSummary {
  generatedAt?: string;
  upstream?: Manifest["upstream"];
  totals?: {
    files?: number;
  };
  frameworks?: Array<{
    name: string;
    count: number;
  }>;
}

const manifest = await readJson<Manifest>(resolveRoot("state/manifest.json"));
const manifestSummary = await readOptionalJson<ManifestSummary>(resolveRoot("state/manifest-summary.json"), {});
const navigation = await readOptionalJson<NavItem[]>(resolveRoot("site/src/data/navigation.json"), []);
const translatedItems = navigation.length
  ? navigation
  : manifest.files.map((file) => ({ sourcePath: file.sourcePath, framework: file.framework }));
const frameworkTotals = new Map<string, number>();
for (const item of manifestSummary.frameworks ?? []) {
  frameworkTotals.set(item.name, item.count);
}
for (const file of manifest.files) {
  if (!frameworkTotals.has(file.framework)) frameworkTotals.set(file.framework, 1);
}

const frameworks = new Map<string, { files: number; translated: number; failedSegments: number; needsReview: number }>();
for (const [framework, files] of frameworkTotals) {
  frameworks.set(framework, { files, translated: 0, failedSegments: 0, needsReview: 0 });
}

let translatedFiles = 0;
let failedSegments = 0;
let needsReview = 0;
for (const item of translatedItems) {
  const current = frameworks.get(item.framework) ?? { files: 0, translated: 0, failedSegments: 0, needsReview: 0 };
  const memory = await readMemory(item.sourcePath);
  const fileFailed = memory?.segments.filter((segment) => segment.status === "failed").length ?? 0;
  const fileReview = memory?.segments.filter((segment) => segment.status === "needs_review").length ?? 0;
  current.translated += 1;
  current.failedSegments += fileFailed;
  current.needsReview += fileReview;
  translatedFiles += 1;
  failedSegments += fileFailed;
  needsReview += fileReview;
  frameworks.set(item.framework, current);
}

const totalFiles = manifestSummary.totals?.files ?? manifest.files.length;
const status = {
  generatedAt: new Date().toISOString(),
  upstream: manifestSummary.upstream ?? manifest.upstream,
  totals: {
    files: totalFiles,
    translatedFiles,
    failedSegments,
    needsReview,
    progress: totalFiles ? translatedFiles / totalFiles : 0
  },
  frameworks: Array.from(frameworks.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([framework, value]) => ({ framework, ...value }))
};
await writeJson(resolveRoot("site/public/status/status.json"), status);
await writeJson(resolveRoot("site/src/data/status.json"), status);
await writeJson(resolveRoot("state/translation-progress.json"), status);
console.log(`Status progress: ${Math.round(status.totals.progress * 100)}%`);

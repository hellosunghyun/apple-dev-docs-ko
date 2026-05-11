import { readJson, resolveRoot, writeText } from "../lib/fs.js";

const progress = await readJson<any>(resolveRoot("state/translation-progress.json"));
const report = [
  "# Apple Dev Docs KO Update Report",
  "",
  "## Upstream",
  "",
  `- Latest SHA: ${progress.upstream?.latestSha ?? "unknown"}`,
  `- Last processed SHA: ${progress.upstream?.lastProcessedSha ?? "not set"}`,
  "",
  "## Summary",
  "",
  `- Files: ${progress.totals?.files ?? 0}`,
  `- Translated files: ${progress.totals?.translatedFiles ?? 0}`,
  `- Failed segments: ${progress.totals?.failedSegments ?? 0}`,
  `- Review needed: ${progress.totals?.needsReview ?? 0}`,
  "",
  "## Site",
  "",
  "- Static content: generated",
  "- Search index: generated",
  "- Source maps: generated"
].join("\n");
await writeText(resolveRoot("reports/latest.md"), `${report}\n`);
console.log(report);


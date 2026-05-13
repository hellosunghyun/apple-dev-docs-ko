import fg from "fast-glob";
import { readText, resolveRoot } from "../lib/fs.js";

const workflowFiles = await fg(".github/workflows/*.yml", { cwd: resolveRoot(), onlyFiles: true });
const errors: string[] = [];
for (const file of workflowFiles) {
  const text = await readText(resolveRoot(file));
  if (/pull_request:[\s\S]*codex-oauth/.test(text)) {
    errors.push(`${file}: pull_request workflow must not use codex-oauth runner`);
  }
  if (/runs-on:\s*(?:\[[^\]]*(self-hosted|codex-oauth)[^\]]*\]|(?:self-hosted|codex-oauth)\b)/.test(text)) {
    errors.push(`${file}: secret-backed workflows must use GitHub-hosted runners`);
  }
  if (/set -x/.test(text)) errors.push(`${file}: set -x is forbidden around secrets`);
}
if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(`workflow lint passed (${workflowFiles.length} files)`);

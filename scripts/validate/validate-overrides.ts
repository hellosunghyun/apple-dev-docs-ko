import { readMemory } from "../lib/memory.js";
import { listOverrideFiles, sourcePathFromOverrideFile } from "../lib/overrides.js";
import { readYaml } from "../lib/fs.js";
import type { OverrideFile } from "../lib/types.js";

const errors: string[] = [];
for (const filePath of await listOverrideFiles()) {
  const override = await readYaml<OverrideFile>(filePath);
  const sourcePath = override.sourcePath || sourcePathFromOverrideFile(filePath);
  const memory = await readMemory(sourcePath);
  if (!memory) {
    errors.push(`${filePath}: no translation memory for ${sourcePath}`);
    continue;
  }
  const known = new Set(memory.segments.map((segment) => segment.id));
  for (const [segmentId, overrideSegment] of Object.entries(override.segments ?? {})) {
    if (!known.has(segmentId)) errors.push(`${filePath}: unknown segment ${segmentId}`);
    if (!overrideSegment.ko?.trim()) errors.push(`${filePath}: empty ko for ${segmentId}`);
  }
}
if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log("overrides valid");


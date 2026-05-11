import { readJson } from "../lib/fs.js";
import { applyOverride, readMemory, writeMemory } from "../lib/memory.js";
import { readOverride } from "../lib/overrides.js";
import { resolveRoot } from "../lib/fs.js";
import type { Manifest } from "../lib/types.js";

const manifest = await readJson<Manifest>(resolveRoot("state/manifest.json"));
let applied = 0;
for (const file of manifest.files) {
  const memory = await readMemory(file.sourcePath);
  if (!memory) continue;
  const override = await readOverride(file.sourcePath);
  if (!override) continue;
  await writeMemory(applyOverride(memory, override));
  applied += 1;
}
console.log(`Applied override files: ${applied}`);


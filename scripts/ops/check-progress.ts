import { readJson, resolveRoot } from "../lib/fs.js";

const progress = await readJson<Record<string, unknown>>(resolveRoot("state/translation-progress.json"));
console.log(JSON.stringify(progress, null, 2));


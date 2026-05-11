import { readJson, resolveRoot, writeJson } from "../lib/fs.js";
import type { Manifest } from "../lib/types.js";

interface Shard {
  shardIndex: number;
  targetChars: number;
  files: string[];
  estimatedSegments: number;
}

async function main(): Promise<void> {
  const manifest = await readJson<Manifest>(resolveRoot("state/manifest.json"));
  const targetChars = Number(process.env.TARGET_CHARS_PER_SHARD ?? 800_000);
  const maxFiles = Number(process.env.MAX_FILES_PER_SHARD ?? 300);
  const shards: Shard[] = [];
  let current: Shard = { shardIndex: 0, targetChars: 0, files: [], estimatedSegments: 0 };

  for (const file of manifest.files) {
    const estimatedSegments = Math.max(1, Math.ceil(file.chars / 180));
    const wouldOverflow = current.files.length > 0 && (current.targetChars + file.chars > targetChars || current.files.length >= maxFiles);
    if (wouldOverflow) {
      shards.push(current);
      current = { shardIndex: shards.length, targetChars: 0, files: [], estimatedSegments: 0 };
    }
    current.files.push(file.sourcePath);
    current.targetChars += file.chars;
    current.estimatedSegments += estimatedSegments;
  }
  if (current.files.length) shards.push(current);

  await writeJson(resolveRoot("state/shard-plan.json"), {
    generatedAt: new Date().toISOString(),
    targetCharsPerShard: targetChars,
    maxFilesPerShard: maxFiles,
    shards
  });
  console.log(`Shards: ${shards.length}`);
}

await main();


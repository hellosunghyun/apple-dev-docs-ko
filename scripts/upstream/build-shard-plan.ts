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
  const requestedTotal = readPositiveInt(process.env.SHARD_TOTAL);
  const maxShards = clamp(readPositiveInt(process.env.MAX_SHARDS) ?? 256, 1, 256);
  const targetChars = readPositiveInt(process.env.TARGET_CHARS_PER_SHARD) ?? 2_200_000;
  const shardTotal = requestedTotal ? clamp(requestedTotal, 1, 256) : clamp(Math.ceil(totalChars(manifest) / targetChars), 1, maxShards);
  const shards = buildBalancedShards(manifest, shardTotal);

  await writeJson(resolveRoot("state/shard-plan.json"), {
    generatedAt: new Date().toISOString(),
    strategy: "balanced_largest_files_first",
    shardTotal,
    targetCharsPerShard: targetChars,
    shards
  });
  console.log(`Shards: ${shards.length}; target=${shardTotal}; chars=${totalChars(manifest)}`);
}

await main();

function buildBalancedShards(manifest: Manifest, shardTotal: number): Shard[] {
  const indexedFiles = manifest.files.map((file, index) => ({ file, index }));
  const shards = Array.from({ length: Math.min(shardTotal, Math.max(1, indexedFiles.length)) }, (_, shardIndex) => ({
    shardIndex,
    targetChars: 0,
    files: [] as string[],
    estimatedSegments: 0,
    originalIndexes: [] as number[]
  }));

  for (const { file, index } of indexedFiles.sort((a, b) => b.file.chars - a.file.chars || a.index - b.index)) {
    const shard = shards.reduce((best, candidate) => {
      if (candidate.targetChars !== best.targetChars) return candidate.targetChars < best.targetChars ? candidate : best;
      if (candidate.files.length !== best.files.length) return candidate.files.length < best.files.length ? candidate : best;
      return candidate.shardIndex < best.shardIndex ? candidate : best;
    }, shards[0]);

    shard.files.push(file.sourcePath);
    shard.originalIndexes.push(index);
    shard.targetChars += file.chars;
    shard.estimatedSegments += Math.max(1, Math.ceil(file.chars / 180));
  }

  return shards.map(({ originalIndexes: _originalIndexes, ...shard }) => ({
    ...shard,
    files: shard.files
      .map((sourcePath, fileIndex) => ({ sourcePath, originalIndex: _originalIndexes[fileIndex] }))
      .sort((a, b) => a.originalIndex - b.originalIndex)
      .map((entry) => entry.sourcePath)
  }));
}

function totalChars(manifest: Manifest): number {
  return manifest.files.reduce((sum, file) => sum + file.chars, 0);
}

function readPositiveInt(value: string | undefined): number | undefined {
  if (!value) return undefined;
  const parsed = Number(value);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : undefined;
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

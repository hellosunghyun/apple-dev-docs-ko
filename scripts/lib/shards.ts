import { readOptionalJson, resolveRoot } from "./fs.js";
import type { ManifestFile } from "./types.js";

interface ShardPlan {
  shardTotal?: number;
  shards: Array<{
    shardIndex: number;
    files: string[];
  }>;
}

export async function selectShardManifestFiles(files: ManifestFile[], index: number, total: number): Promise<ManifestFile[]> {
  const planned = await readPlannedShardFileSet(index, total);
  if (planned) return files.filter((file) => planned.has(file.sourcePath));
  return files.filter((_, fileIndex) => fileIndex % total === index);
}

export async function selectShardSourcePaths(sourcePaths: string[], index: number, total: number): Promise<string[]> {
  const planned = await readPlannedShardFileSet(index, total);
  if (planned) return sourcePaths.filter((sourcePath) => planned.has(sourcePath));
  return sourcePaths.filter((_, sourceIndex) => sourceIndex % total === index);
}

async function readPlannedShardFileSet(index: number, total: number): Promise<Set<string> | undefined> {
  const plan = await readOptionalJson<ShardPlan | undefined>(resolveRoot("state/shard-plan.json"), undefined);
  if (!plan?.shards?.length) return undefined;
  if (plan.shardTotal && plan.shardTotal !== total) return undefined;

  const shard = plan.shards.find((entry) => entry.shardIndex === index);
  return new Set(shard?.files ?? []);
}

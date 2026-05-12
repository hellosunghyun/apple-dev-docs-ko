import { loadSourceConfig } from "./config.js";
import { readJson, resolveRoot } from "./fs.js";
import type { ManifestFile } from "./types.js";

interface ChangedFilesState {
  changes: Array<{
    status: string;
    paths: string[];
  }>;
}

export async function filterChangedManifestFiles(files: ManifestFile[]): Promise<ManifestFile[]> {
  const changed = await readChangedSourcePaths();
  return files.filter((file) => changed.has(file.sourcePath));
}

export async function filterChangedSourcePaths(sourcePaths: string[]): Promise<string[]> {
  const changed = await readChangedSourcePaths();
  return sourcePaths.filter((sourcePath) => changed.has(sourcePath));
}

export async function readChangedSourcePaths(): Promise<Set<string>> {
  const config = await loadSourceConfig();
  const state = await readJson<ChangedFilesState>(resolveRoot("state/changed-files.json"));
  const changed = new Set<string>();

  for (const change of state.changes) {
    const sourcePath = sourcePathFromChange(change, config.upstream.sourceRoot);
    if (sourcePath) changed.add(sourcePath);
  }

  return changed;
}

function sourcePathFromChange(change: ChangedFilesState["changes"][number], sourceRoot: string): string | undefined {
  const status = change.status.toUpperCase();
  if (status.startsWith("D")) return undefined;

  const rawPath = status.startsWith("R") || status.startsWith("C") ? change.paths.at(-1) : change.paths[0];
  if (!rawPath) return undefined;

  const normalized = rawPath.replace(/\\/g, "/");
  const rootPrefix = `${sourceRoot.replace(/\/+$/g, "")}/`;
  const rootIndex = normalized.indexOf(rootPrefix);
  const sourcePath = rootIndex >= 0 ? normalized.slice(rootIndex) : normalized;

  return sourcePath.startsWith(rootPrefix) && sourcePath.toLowerCase().endsWith(".md") ? sourcePath : undefined;
}

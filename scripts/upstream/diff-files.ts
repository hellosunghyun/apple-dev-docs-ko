import { execa } from "execa";
import { loadSourceConfig } from "../lib/config.js";
import { readJson, resolveRoot, writeJson } from "../lib/fs.js";
import type { UpstreamState } from "../lib/types.js";

async function main(): Promise<void> {
  const config = await loadSourceConfig();
  const cacheDir = resolveRoot(config.upstream.cacheDir);
  const state = await readJson<UpstreamState>(resolveRoot("state/upstream.json"));
  const base = state.lastProcessedSha ?? state.latestSha;
  const head = state.latestSha;
  const { stdout } = await execa("git", ["-C", cacheDir, "diff", "--name-status", base, head, "--", config.upstream.sourceRoot]);
  const changes = stdout
    .split("\n")
    .filter(Boolean)
    .map((line) => {
      const [status, ...parts] = line.split(/\t+/);
      return { status, paths: parts };
    });
  await writeJson(resolveRoot("state/changed-files.json"), {
    generatedAt: new Date().toISOString(),
    from: base,
    to: head,
    changes
  });
  console.log(`Changed files: ${changes.length}`);
}

await main();


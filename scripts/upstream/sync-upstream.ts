import { execa } from "execa";
import { loadSourceConfig } from "../lib/config.js";
import { ensureDir, fileExists, resolveRoot, writeJson } from "../lib/fs.js";
import type { UpstreamState } from "../lib/types.js";

async function main(): Promise<void> {
  const config = await loadSourceConfig();
  const cacheDir = resolveRoot(config.upstream.cacheDir);
  await ensureDir(cacheDir);

  if (!(await fileExists(`${cacheDir}/.git`))) {
    await execa("git", [
      "clone",
      "--filter=blob:none",
      "--no-checkout",
      "--branch",
      config.upstream.branch,
      config.upstream.repo,
      cacheDir
    ], { stdio: "inherit" });
    await execa("git", ["-C", cacheDir, "sparse-checkout", "set", config.upstream.sourceRoot], { stdio: "inherit" });
    await execa("git", ["-C", cacheDir, "checkout", config.upstream.branch], { stdio: "inherit" });
  } else {
    await execa("git", ["-C", cacheDir, "fetch", "origin", config.upstream.branch], { stdio: "inherit" });
    await execa("git", ["-C", cacheDir, "checkout", config.upstream.branch], { stdio: "inherit" });
    await execa("git", ["-C", cacheDir, "pull", "--ff-only", "origin", config.upstream.branch], { stdio: "inherit" });
  }

  const { stdout } = await execa("git", ["-C", cacheDir, "rev-parse", "HEAD"]);
  const state: UpstreamState = {
    repo: config.upstream.repo,
    branch: config.upstream.branch,
    latestSha: stdout.trim(),
    lastSeenSha: stdout.trim(),
    updatedAt: new Date().toISOString()
  };
  await writeJson(resolveRoot("state/upstream.json"), state);
  console.log(`Synced ${config.upstream.repo} @ ${state.latestSha}`);
}

await main();


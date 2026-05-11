import { cp, rm } from "node:fs/promises";
import { ensureDir, resolveRoot, writeJson } from "../lib/fs.js";
import type { UpstreamState } from "../lib/types.js";

const sourceCache = resolveRoot("source-cache/apple-dev-docs");
await rm(sourceCache, { recursive: true, force: true });
await rm(resolveRoot("state"), { recursive: true, force: true });
await rm(resolveRoot("translation-memory"), { recursive: true, force: true });
await rm(resolveRoot("translations"), { recursive: true, force: true });
await rm(resolveRoot("site/src/content/docs"), { recursive: true, force: true });
await rm(resolveRoot("site/public/source-maps"), { recursive: true, force: true });
await rm(resolveRoot("site/public/search"), { recursive: true, force: true });
await rm(resolveRoot("site/public/status"), { recursive: true, force: true });
await ensureDir(sourceCache);
await cp(resolveRoot("fixtures/apple-dev-docs-sample"), sourceCache, { recursive: true });

const state: UpstreamState = {
  repo: "fixtures/apple-dev-docs-sample",
  branch: "sample",
  latestSha: "sample-local",
  lastSeenSha: "sample-local",
  lastProcessedSha: "sample-local",
  updatedAt: new Date().toISOString()
};
await writeJson(resolveRoot("state/upstream.json"), state);
console.log("Seeded sample Apple docs source");

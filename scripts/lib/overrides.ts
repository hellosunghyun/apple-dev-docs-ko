import path from "node:path";
import fg from "fast-glob";
import YAML from "yaml";
import { fileExists, pathKey, readText, resolveRoot, writeYaml } from "./fs.js";
import type { OverrideFile } from "./types.js";

export function overridePath(sourcePath: string): string {
  return resolveRoot("overrides/ko", `${sourcePath.replace(/\.md$/i, ".yaml")}`);
}

export async function readOverride(sourcePath: string): Promise<OverrideFile | undefined> {
  const filePath = overridePath(sourcePath);
  if (!(await fileExists(filePath))) return undefined;
  return YAML.parse(await readText(filePath)) as OverrideFile;
}

export async function ensureOverrideExample(): Promise<void> {
  const example: OverrideFile = {
    sourcePath: "documentation/coremotion/cmdevicemotion.md",
    updatedBy: "github-username",
    updatedAt: new Date().toISOString(),
    segments: {
      "seg:paragraph:overview:0001:0001": {
        ko: "이 객체를 사용하여 모션 업데이트를 수신합니다.",
        reason: "문서체를 더 자연스럽게 수정",
        locked: true
      }
    }
  };
  await writeYaml(resolveRoot("overrides/ko/_examples/example.yaml"), example);
}

export async function listOverrideFiles(): Promise<string[]> {
  return fg("overrides/ko/**/*.yaml", { cwd: resolveRoot(), absolute: true, ignore: ["**/_examples/**"] });
}

export function overrideEditUrl(repoUrl: string, sourcePath: string, segmentId?: string): string {
  const file = `overrides/ko/${sourcePath.replace(/\.md$/i, ".yaml")}`;
  const params = segmentId ? `?segment=${encodeURIComponent(segmentId)}` : "";
  return `${repoUrl.replace(/\/$/, "")}/edit/main/${file}${params}`;
}

export function sourcePathFromOverrideFile(filePath: string): string {
  const relative = path.relative(resolveRoot("overrides/ko"), filePath).split(path.sep).join("/");
  return relative.replace(/\.yaml$/i, ".md");
}

export function overrideKey(sourcePath: string): string {
  return pathKey(sourcePath);
}


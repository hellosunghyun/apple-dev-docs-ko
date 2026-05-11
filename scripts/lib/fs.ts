import { createHash } from "node:crypto";
import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import YAML from "yaml";

export const rootDir = process.cwd();

export function resolveRoot(...parts: string[]): string {
  return path.resolve(rootDir, ...parts);
}

export async function ensureDir(dir: string): Promise<void> {
  await mkdir(dir, { recursive: true });
}

export async function readText(filePath: string): Promise<string> {
  return readFile(filePath, "utf8");
}

export async function writeText(filePath: string, value: string): Promise<void> {
  await ensureDir(path.dirname(filePath));
  await writeFile(filePath, value, "utf8");
}

export async function readJson<T>(filePath: string): Promise<T> {
  return JSON.parse(await readText(filePath)) as T;
}

export async function writeJson(filePath: string, value: unknown): Promise<void> {
  await writeText(filePath, `${JSON.stringify(value, null, 2)}\n`);
}

export async function readYaml<T>(filePath: string): Promise<T> {
  return YAML.parse(await readText(filePath)) as T;
}

export async function writeYaml(filePath: string, value: unknown): Promise<void> {
  await writeText(filePath, YAML.stringify(value));
}

export function sha256(value: string | Buffer): string {
  return createHash("sha256").update(value).digest("hex");
}

export async function fileExists(filePath: string): Promise<boolean> {
  try {
    await stat(filePath);
    return true;
  } catch {
    return false;
  }
}

export function pathKey(sourcePath: string): string {
  return sourcePath
    .replace(/\\/g, "/")
    .replace(/^\/+/, "")
    .replace(/\.md$/i, "")
    .replace(/[^a-zA-Z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .toLowerCase();
}

export function posixRelative(from: string, to: string): string {
  return path.relative(from, to).split(path.sep).join("/");
}

export async function readOptionalJson<T>(filePath: string, fallback: T): Promise<T> {
  if (!(await fileExists(filePath))) return fallback;
  return readJson<T>(filePath);
}


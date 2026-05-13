import path from "node:path";
import { rm } from "node:fs/promises";
import { Command } from "commander";
import fg from "fast-glob";
import matter from "gray-matter";
import { readOptionalJson, readText, resolveRoot, writeJson, writeText } from "../lib/fs.js";
import { frameworkFromSourcePath, officialUrlFromSourcePath, titleFromMarkdown } from "../lib/source.js";

const program = new Command();
program.option("--file-list <file>").parse();
const options = program.opts<{ fileList?: string }>();

async function main(): Promise<void> {
  const selected = options.fileList
    ? new Set((await readText(resolveRoot(options.fileList))).split(/\r?\n/).map((line) => line.trim()).filter(Boolean))
    : undefined;
  const manifestSummary = await readOptionalJson<{
    frameworks?: Array<{ name: string; count: number }>;
  }>(resolveRoot("state/manifest-summary.json"), {});
  type NavItem = {
    sourcePath: string;
    slug: string;
    title: string;
    framework: string;
    officialUrl?: string;
  };
  const existingNav = (await readOptionalJson<NavItem[]>(resolveRoot("site/src/data/navigation.json"), [])).map(normalizeNavItem);
  const translatedDocs = await discoverTranslatedDocs();
  const nextNav = translatedDocs.map((file) => ({
    sourcePath: file.sourcePath,
    slug: slugFromSourcePath(file.sourcePath),
    title: file.title,
    framework: file.framework,
    officialUrl: file.officialUrl
  }));
  const shouldReplaceNav = process.env.REPLACE_SITE_NAV === "1" && !selected;
  const nav = shouldReplaceNav
    ? nextNav
    : mergeBySlug(existingNav, selected ? nextNav.filter((item) => selected.has(item.sourcePath)) : nextNav);
  const frameworkCounts = new Map<string, number>();
  for (const item of manifestSummary.frameworks ?? []) {
    frameworkCounts.set(item.name, item.count);
  }
  for (const file of translatedDocs) {
    frameworkCounts.set(file.framework, frameworkCounts.get(file.framework) ?? 0);
  }
  const frameworks = Array.from(frameworkCounts.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([name, count]) => ({ name, count }));

  const filesToCopy = selected ? translatedDocs.filter((file) => selected.has(file.sourcePath)) : translatedDocs;
  if (!selected) {
    await rm(resolveRoot("site/src/content/docs"), { recursive: true, force: true });
  }
  for (const file of filesToCopy) {
    const content = await readText(file.absolutePath);
    const target = resolveRoot("site/src/content/docs", file.sourcePath);
    await writeText(target, content);
  }

  await writeJson(resolveRoot("site/src/data/navigation.json"), nav);
  await writeJson(resolveRoot("site/src/data/frameworks.json"), frameworks);
  await writeJson(resolveRoot("site/public/navigation.json"), nav);
  await writeJson(resolveRoot("site/public/frameworks.json"), frameworks);
  console.log(`Site navigation entries: ${nav.length}`);
  console.log(`Site copied docs: ${filesToCopy.length}`);
  console.log(`Site framework entries: ${frameworks.length}`);
}

async function discoverTranslatedDocs(): Promise<Array<{
  absolutePath: string;
  sourcePath: string;
  title: string;
  framework: string;
  officialUrl: string;
}>> {
  const translationRoot = resolveRoot("translations/ko");
  const files = await fg("**/*.md", {
    cwd: translationRoot,
    absolute: true,
    onlyFiles: true
  });
  const docs = [];
  for (const absolutePath of files.sort()) {
    const markdown = await readText(absolutePath);
    const parsed = matter(markdown);
    const relativeSourcePath = path.relative(translationRoot, absolutePath).split(path.sep).join("/");
    const sourcePath = typeof parsed.data.source_path === "string" && parsed.data.source_path.trim()
      ? parsed.data.source_path.trim()
      : relativeSourcePath;
    docs.push({
      absolutePath,
      sourcePath,
      title: titleFromMarkdown(sourcePath, parsed.content),
      framework: frameworkFromSourcePath(sourcePath),
      officialUrl: typeof parsed.data.official_url === "string" && parsed.data.official_url.trim()
        ? parsed.data.official_url.trim()
        : officialUrlFromSourcePath(sourcePath)
    });
  }
  return docs;
}

export function slugFromSourcePath(sourcePath: string): string {
  return sourcePath
    .replace(/\.md$/i, "")
    .split(path.posix.sep)
    .map((segment) => encodeURIComponent(segment.toLowerCase()))
    .join("/");
}

function mergeBySlug<T extends { slug: string }>(existing: T[], incoming: T[]): T[] {
  const bySlug = new Map(existing.map((item) => [item.slug, item]));
  for (const item of incoming) {
    bySlug.set(item.slug, item);
  }
  return Array.from(bySlug.values()).sort((a, b) => a.slug.localeCompare(b.slug));
}

function normalizeNavItem<T extends { sourcePath?: string; slug: string }>(item: T): T {
  return {
    ...item,
    slug: item.sourcePath ? slugFromSourcePath(item.sourcePath) : normalizeSlug(item.slug)
  };
}

function normalizeSlug(slug: string): string {
  return slug.split("/").map((segment) => encodeURIComponent(safeDecode(segment).toLowerCase())).join("/");
}

function safeDecode(value: string): string {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

await main();

import path from "node:path";
import Slugger from "github-slugger";
import { posixRelative } from "./fs.js";

export function sourcePathFromAbsolute(cacheDir: string, absolutePath: string): string {
  return posixRelative(cacheDir, absolutePath);
}

export function frameworkFromSourcePath(sourcePath: string): string {
  const parts = sourcePath.split("/");
  const raw = parts[1] ?? "documentation";
  const known: Record<string, string> = {
    coremotion: "Core Motion",
    createml: "Create ML",
    sensorkit: "SensorKit",
    swiftui: "SwiftUI",
    uikit: "UIKit",
    appkit: "AppKit",
    realitykit: "RealityKit",
    avfoundation: "AVFoundation",
    widgetkit: "WidgetKit"
  };
  if (known[raw.toLowerCase()]) return known[raw.toLowerCase()];
  return raw
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .replace(/\bIos\b/g, "iOS")
    .replace(/\bMacos\b/g, "macOS")
    .replace(/\bTvos\b/g, "tvOS")
    .replace(/\bWatchos\b/g, "watchOS");
}

export function titleFromMarkdown(sourcePath: string, markdown: string): string {
  const firstHeading = markdown.match(/^#\s+(.+)$/m)?.[1]?.trim();
  if (firstHeading) return stripMarkdownInline(firstHeading);
  return path.basename(sourcePath, ".md");
}

export function officialUrlFromSourcePath(sourcePath: string): string {
  const slug = sourcePath
    .replace(/^documentation\//, "")
    .replace(/\.md$/i, "")
    .split("/")
    .map((part) => part.toLowerCase())
    .join("/");
  return `https://developer.apple.com/documentation/${slug}`;
}

export function headingAnchor(value: string, slugger = new Slugger()): string {
  const stripped = stripMarkdownInline(value);
  return slugger.slug(stripped || "section");
}

export function stripMarkdownInline(value: string): string {
  return value
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_~]/g, "")
    .trim();
}

import { sha256 } from "./fs.js";
import { stripMarkdownInline } from "./source.js";

const sentenceBoundary = /(?<=[.!?])\s+(?=(?:[`*_~[(]*[A-Z0-9@]))/g;

export function normalizeSource(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

export function segmentHash(value: string): string {
  return sha256(normalizeSource(value));
}

export function splitSentences(value: string): string[] {
  const normalized = value.replace(/\s+/g, " ").trim();
  if (!normalized) return [];
  const parts = normalized.split(sentenceBoundary).map((part) => part.trim()).filter(Boolean);
  return parts.length > 0 ? parts : [normalized];
}

export function classifyPreserveReason(source: string): string | undefined {
  const text = stripMarkdownInline(source).trim();
  if (!text) return "empty";
  if (/^https?:\/\//i.test(text)) return "url";
  if (/^[./~]?[A-Za-z0-9_.\-\/]+$/.test(text) && /[/.]/.test(text)) return "path";
  if (/^`[^`]+`$/.test(source.trim())) return "inline_code";
  if (/^[@A-Za-z_][A-Za-z0-9_.$<>]*(\(\))?$/.test(text)) return "api_symbol";
  if (/^(some|any)\s+[A-Z][A-Za-z0-9_]+$/.test(text)) return "swift_type";
  if (/^[A-Z][A-Za-z0-9_]+(\.[A-Z][A-Za-z0-9_]+)+$/.test(text)) return "api_symbol";
  if (/^[A-Z0-9_]+$/.test(text) && text.length <= 12) return "constant";
  return undefined;
}

export function isTranslatable(source: string): boolean {
  return classifyPreserveReason(source) === undefined;
}

export function collectInlineCode(value: string): string[] {
  return Array.from(value.matchAll(/`([^`]+)`/g), (match) => match[0]);
}

export function collectUrls(value: string): string[] {
  return Array.from(value.matchAll(/https?:\/\/[^\s)]+/g), (match) => match[0].replace(/[.,;:!?]+$/, ""));
}

export function collectMarkdownLinks(value: string): string[] {
  return Array.from(value.matchAll(/\[[^\]]+\]\(([^)]+)\)/g), (match) => match[1]);
}

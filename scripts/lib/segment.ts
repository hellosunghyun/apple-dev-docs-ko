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
  return collectMarkdownLinkReferences(value).map((link) => link.target);
}

export interface MarkdownLinkReference {
  raw: string;
  text: string;
  target: string;
  start: number;
  end: number;
  targetStart: number;
  targetEnd: number;
}

export function collectMarkdownLinkReferences(value: string): MarkdownLinkReference[] {
  const links: MarkdownLinkReference[] = [];
  let index = 0;
  while (index < value.length) {
    const open = value.indexOf("[", index);
    if (open < 0) break;
    const close = value.indexOf("](", open + 1);
    if (close < 0) break;

    const targetStart = close + 2;
    let cursor = targetStart;
    let depth = 0;
    while (cursor < value.length) {
      const char = value[cursor];
      if (char === "(") {
        depth += 1;
      } else if (char === ")") {
        if (depth === 0) break;
        depth -= 1;
      }
      cursor += 1;
    }
    if (cursor >= value.length) {
      index = close + 2;
      continue;
    }

    links.push({
      raw: value.slice(open, cursor + 1),
      text: value.slice(open + 1, close),
      target: value.slice(targetStart, cursor),
      start: open,
      end: cursor + 1,
      targetStart,
      targetEnd: cursor
    });
    index = cursor + 1;
  }
  return links;
}

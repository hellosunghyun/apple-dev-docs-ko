import matter from "gray-matter";
import Slugger from "github-slugger";
import type { ParsedBlock, ParsedDocument, Segment } from "./types.js";
import { headingAnchor, stripMarkdownInline } from "./source.js";
import { classifyPreserveReason, normalizeSource, segmentHash, splitSentences } from "./segment.js";

interface ParseOptions {
  sourcePath: string;
  framework: string;
  title: string;
  officialUrl: string;
  upstreamSha: string;
}

export function parseMarkdownDocument(markdown: string, options: ParseOptions): ParsedDocument {
  const parsed = matter(markdown);
  const body = parsed.content.replace(/\r\n/g, "\n");
  const slugger = new Slugger();
  const lines = body.split("\n");
  const blocks: ParsedBlock[] = [];
  let index = 0;
  let sequence = 0;
  let currentAnchor = "root";

  const createBlock = (type: ParsedBlock["type"], rawLines: string[], meta: ParsedBlock["meta"] = {}): ParsedBlock => {
    const rawMarkdown = rawLines.join("\n");
    const id = `${type}:${currentAnchor}:${String(sequence++).padStart(4, "0")}`;
    const block: ParsedBlock = {
      id,
      type,
      headingAnchor: currentAnchor,
      sequence,
      rawMarkdown,
      segments: [],
      meta
    };
    block.segments = createSegments(block, options);
    return block;
  };

  while (index < lines.length) {
    const line = lines[index] ?? "";
    if (!line.trim()) {
      index += 1;
      continue;
    }

    if (/^```/.test(line.trim())) {
      const rawLines = [line];
      index += 1;
      while (index < lines.length) {
        rawLines.push(lines[index] ?? "");
        if (/^```/.test((lines[index] ?? "").trim())) {
          index += 1;
          break;
        }
        index += 1;
      }
      blocks.push(createBlock("code", rawLines));
      continue;
    }

    const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const text = headingMatch[2].trim();
      currentAnchor = headingAnchor(text, slugger);
      blocks.push(createBlock("heading", [line], { level }));
      index += 1;
      continue;
    }

    if (/^---\s*$/.test(line.trim())) {
      blocks.push(createBlock("horizontal_rule", [line]));
      index += 1;
      continue;
    }

    if (/^\s*>/.test(line)) {
      const rawLines: string[] = [];
      while (index < lines.length && /^\s*>/.test(lines[index] ?? "")) {
        rawLines.push(lines[index] ?? "");
        index += 1;
      }
      blocks.push(createBlock("blockquote", rawLines));
      continue;
    }

    if (/^\s*(?:[-*+]\s+|\d+\.\s+)/.test(line)) {
      const rawLines: string[] = [];
      while (index < lines.length && /^\s*(?:[-*+]\s+|\d+\.\s+)/.test(lines[index] ?? "")) {
        rawLines.push(lines[index] ?? "");
        index += 1;
      }
      blocks.push(createBlock("list", rawLines));
      continue;
    }

    if (/^\s*\|.*\|\s*$/.test(line)) {
      const rawLines: string[] = [];
      while (index < lines.length && /^\s*\|.*\|\s*$/.test(lines[index] ?? "")) {
        rawLines.push(lines[index] ?? "");
        index += 1;
      }
      blocks.push(createBlock("table", rawLines, { tableRows: rawLines.map(parseTableLine), tableDividerIndex: 1 }));
      continue;
    }

    if (/^\s*</.test(line)) {
      const rawLines: string[] = [];
      while (index < lines.length && (lines[index] ?? "").trim()) {
        rawLines.push(lines[index] ?? "");
        index += 1;
      }
      blocks.push(createBlock("html", rawLines));
      continue;
    }

    const rawLines: string[] = [];
    while (index < lines.length && shouldContinueParagraph(lines[index] ?? "")) {
      rawLines.push(lines[index] ?? "");
      index += 1;
    }
    blocks.push(createBlock("paragraph", rawLines));
  }

  addSegmentContext(blocks);

  return {
    sourcePath: options.sourcePath,
    title: options.title,
    framework: options.framework,
    officialUrl: options.officialUrl,
    upstreamSha: options.upstreamSha,
    frontmatter: parsed.data,
    blocks
  };
}

function shouldContinueParagraph(line: string): boolean {
  if (!line.trim()) return false;
  if (/^```/.test(line.trim())) return false;
  if (/^(#{1,6})\s+/.test(line)) return false;
  if (/^\s*(?:[-*+]\s+|\d+\.\s+)/.test(line)) return false;
  if (/^\s*>/.test(line)) return false;
  if (/^\s*\|.*\|\s*$/.test(line)) return false;
  if (/^---\s*$/.test(line.trim())) return false;
  return true;
}

function createSegments(block: ParsedBlock, options: ParseOptions): Segment[] {
  if (block.type === "code" || block.type === "html" || block.type === "horizontal_rule") {
    return [makeSegment(block, block.rawMarkdown, "preserve", options, { preserveReason: block.type })];
  }

  if (block.type === "heading") {
    const source = block.rawMarkdown.replace(/^(#{1,6})\s+/, "").trim();
    return [makeSegment(block, source, "heading", options, { meta: { level: block.meta?.level } })];
  }

  if (block.type === "list") {
    return block.rawMarkdown.split("\n").map((line, i) => {
      const match = line.match(/^(\s*(?:[-*+]|\d+\.)\s+)(.+)$/);
      const marker = match?.[1] ?? "- ";
      const source = match?.[2] ?? line;
      return makeSegment(block, source, "list_item", options, { index: i, meta: { marker } });
    });
  }

  if (block.type === "blockquote") {
    const text = block.rawMarkdown
      .split("\n")
      .map((line) => line.replace(/^\s*>\s?/, ""))
      .join(" ");
    return splitSentences(text).map((part, i) => makeSegment(block, part, "blockquote", options, { index: i }));
  }

  if (block.type === "table") {
    const rows = block.meta?.tableRows ?? [];
    const segments: Segment[] = [];
    for (const [rowIndex, row] of rows.entries()) {
      const isDivider = row.every((cell) => /^:?-{3,}:?$/.test(cell.trim()));
      if (isDivider) continue;
      for (const [cellIndex, cell] of row.entries()) {
        const source = cell.trim();
        if (!source) continue;
        segments.push(
          makeSegment(block, source, "table_cell", options, {
            index: segments.length,
            meta: { tableRow: rowIndex, tableCell: cellIndex }
          })
        );
      }
    }
    return segments;
  }

  const paragraph = block.rawMarkdown.replace(/\n+/g, " ");
  return splitSentences(paragraph).map((part, i) => makeSegment(block, part, "sentence", options, { index: i }));
}

function makeSegment(
  block: ParsedBlock,
  source: string,
  type: string,
  options: ParseOptions,
  extra: { index?: number; preserveReason?: string; meta?: Segment["meta"] } = {}
): Segment {
  const normalizedSource = normalizeSource(source);
  const preserveReason = extra.preserveReason ?? classifyPreserveReason(source);
  const index = extra.index ?? 0;
  return {
    id: `seg:${block.id}:${String(index + 1).padStart(4, "0")}`,
    blockId: block.id,
    type,
    source,
    normalizedSource,
    sourceHash: segmentHash(source),
    translatable: !preserveReason,
    preserveReason,
    contextBefore: "",
    contextAfter: "",
    documentTitle: options.title,
    framework: options.framework,
    meta: extra.meta
  };
}

function addSegmentContext(blocks: ParsedBlock[]): void {
  const flat = blocks.flatMap((block) => block.segments);
  for (const [index, segment] of flat.entries()) {
    segment.contextBefore = flat[index - 1]?.source ?? "";
    segment.contextAfter = flat[index + 1]?.source ?? "";
  }
}

function parseTableLine(line: string): string[] {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

export function renderTranslatedMarkdown(doc: ParsedDocument, translations: Map<string, string>): string {
  const output: string[] = [
    "---",
    `source_path: ${JSON.stringify(doc.sourcePath)}`,
    `upstream_sha: ${JSON.stringify(doc.upstreamSha)}`,
    "translation_status: machine_translated",
    `official_url: ${JSON.stringify(doc.officialUrl)}`,
    "official: false",
    "---",
    "",
    "> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.",
    ""
  ];

  for (const block of doc.blocks) {
    if (block.type === "code" || block.type === "html" || block.type === "horizontal_rule") {
      output.push(block.rawMarkdown, "");
      continue;
    }
    if (block.type === "heading") {
      const segment = block.segments[0];
      const level = block.meta?.level ?? 2;
      output.push(`${"#".repeat(level)} ${translated(segment, translations)}`, "");
      continue;
    }
    if (block.type === "paragraph") {
      output.push(block.segments.map((segment) => translated(segment, translations)).join(" "), "");
      continue;
    }
    if (block.type === "list") {
      for (const segment of block.segments) {
        output.push(`${segment.meta?.marker ?? "- "}${translated(segment, translations)}`);
      }
      output.push("");
      continue;
    }
    if (block.type === "blockquote") {
      output.push(`> ${block.segments.map((segment) => translated(segment, translations)).join(" ")}`, "");
      continue;
    }
    if (block.type === "table") {
      output.push(...renderTable(block, translations), "");
    }
  }

  return `${output.join("\n").replace(/\n{3,}/g, "\n\n").trim()}\n`;
}

function translated(segment: Segment | undefined, translations: Map<string, string>): string {
  if (!segment) return "";
  const value = translations.get(segment.id) ?? segment.source;
  if (!segment.translatable && segment.type === "preserve") return value;
  return `<span class="ko-segment" data-segment-id="${escapeHtml(segment.id)}">${renderInline(value)}</span>`;
}

function renderTable(block: ParsedBlock, translations: Map<string, string>): string[] {
  const rows = block.meta?.tableRows ?? [];
  const translatedCells = new Map<string, string>();
  for (const segment of block.segments) {
    const row = segment.meta?.tableRow;
    const cell = segment.meta?.tableCell;
    if (row === undefined || cell === undefined) continue;
    translatedCells.set(`${row}:${cell}`, translated(segment, translations));
  }
  return rows.map((row, rowIndex) => {
    const cells = row.map((cell, cellIndex) => translatedCells.get(`${rowIndex}:${cellIndex}`) ?? cell);
    return `| ${cells.join(" | ")} |`;
  });
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderInline(value: string): string {
  const tokens: string[] = [];
  const stash = (html: string): string => {
    const key = `@@TOKEN_${tokens.length}@@`;
    tokens.push(html);
    return key;
  };
  let working = value
    .replace(/`([^`]+)`/g, (_, code: string) => stash(`<code>${escapeHtml(code)}</code>`))
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label: string, href: string) =>
      stash(`<a href="${escapeHtml(href)}">${escapeHtml(label)}</a>`)
    );
  working = escapeHtml(working);
  for (const [index, html] of tokens.entries()) {
    working = working.replace(`@@TOKEN_${index}@@`, html);
  }
  return working;
}

export function visibleTitleFromDocument(doc: ParsedDocument): string {
  const heading = doc.blocks.find((block) => block.type === "heading")?.segments[0]?.source;
  return heading ? stripMarkdownInline(heading) : doc.title;
}

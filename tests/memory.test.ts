import { describe, expect, it } from "vitest";
import { mergeMemory, shouldPreserveWithoutTranslation, toMemorySegment } from "../scripts/lib/memory.js";
import type { Segment, TranslationMemoryFile } from "../scripts/lib/types.js";

describe("translation memory", () => {
  it("preserves API reference and availability fragments without LLM translation", () => {
    const apiLink = toMemorySegment(makeSegment("[var payloadData: Data](barcodeanchor/payloaddata.md)"));
    const availability = toMemorySegment(makeSegment("visionOS 1.0+"));
    const naturalLanguage = toMemorySegment(makeSegment("The decoded payload string value of the detected barcode."));

    expect(apiLink).toMatchObject({ translatable: false, ko: apiLink.source, status: "preserved", locked: true });
    expect(availability).toMatchObject({ translatable: false, ko: availability.source, status: "preserved", locked: true });
    expect(naturalLanguage).toMatchObject({ translatable: true, ko: "", status: "failed", locked: false });
    expect(shouldPreserveWithoutTranslation("[Creating easy-to-read thumbnail images](thumbnail-images.md)")).toBe(false);
  });

  it("lets new preservation rules replace stale failed memory for unchanged segments", () => {
    const freshSegment = toMemorySegment(makeSegment("[var id: UUID](barcodeanchor/id.md)"));
    const existing = makeMemory({ ...freshSegment, translatable: true, ko: "", status: "failed", locked: false });
    const fresh = makeMemory(freshSegment);

    expect(mergeMemory(existing, fresh).segments[0]).toMatchObject({
      translatable: false,
      ko: "[var id: UUID](barcodeanchor/id.md)",
      status: "preserved",
      locked: true
    });
  });
});

function makeSegment(source: string): Segment {
  return {
    id: "seg:test:0001",
    blockId: "block:test",
    type: "paragraph",
    source,
    normalizedSource: source,
    sourceHash: "hash",
    translatable: true,
    contextBefore: "",
    contextAfter: "",
    documentTitle: "Test",
    framework: "TestKit"
  };
}

function makeMemory(segment: TranslationMemoryFile["segments"][number]): TranslationMemoryFile {
  return {
    sourcePath: "documentation/test/test.md",
    targetPath: "translations/ko/documentation/test/test.md",
    sourceUrl: "https://developer.apple.com/documentation/test/test",
    upstreamSha: "sha",
    sourceFileHash: "hash",
    status: "pending",
    reviewStatus: "machine_translated",
    segments: [segment]
  };
}

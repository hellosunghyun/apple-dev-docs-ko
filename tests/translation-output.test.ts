import { describe, expect, it } from "vitest";
import { collectMarkdownLinks } from "../scripts/lib/segment.js";
import { repairTranslationOutput, repairTranslatedSegment, validateTranslationOutput } from "../scripts/lib/validate.js";
import type { TranslationBatchInput } from "../scripts/lib/types.js";

const input: TranslationBatchInput = {
  task: "translate_apple_developer_docs_segments_to_korean",
  projectContext: { purpose: "test", audience: "test", style: "test" },
  rules: {},
  glossary: {},
  segments: [
    {
      id: "seg:1",
      source: "Use `CMDeviceMotion` with https://example.com.",
      contextBefore: "",
      contextAfter: "",
      documentTitle: "CMDeviceMotion",
      framework: "Core Motion"
    }
  ]
};

describe("translation output validation", () => {
  it("requires inline code and URLs to be preserved", () => {
    expect(
      validateTranslationOutput(input, {
        segments: [{ id: "seg:1", ko: "`CMDeviceMotion`를 https://example.com와 함께 사용합니다." }]
      })
    ).toEqual([]);
    expect(
      validateTranslationOutput(input, {
        segments: [{ id: "seg:1", ko: "CMDeviceMotion를 사용합니다." }]
      }).length
    ).toBeGreaterThan(0);
  });

  it("repairs common model drift in protected Markdown and code tokens", () => {
    const drifted: TranslationBatchInput = {
      ...input,
      segments: [
        {
          ...input.segments[0],
          id: "seg:link",
          source: "Set `endDate` with [load(_:isolation:)](avasynchronouskeyvalueloading/load(_:isolation:).md)."
        }
      ]
    };

    const repaired = repairTranslationOutput(drifted, {
      segments: [{ id: "seg:link", ko: "load를 사용해 endDate를 설정합니다. [load](avasynchronouskeyvalueloading/load.md)" }]
    });

    expect(validateTranslationOutput(drifted, repaired)).toEqual([]);
    expect(repaired.segments[0].ko).toContain("`endDate`");
    expect(repaired.segments[0].ko).toContain("](avasynchronouskeyvalueloading/load(_:isolation:).md)");
  });

  it("falls back to source text when protected tokens cannot be repaired", () => {
    const fallbackInput: TranslationBatchInput = {
      ...input,
      segments: [
        {
          ...input.segments[0],
          id: "seg:fallback",
          source: "Use `AVCaptureDevice` with [device](avcapturedevice.md)."
        }
      ]
    };

    const repaired = repairTranslationOutput(fallbackInput, {
      segments: [{ id: "seg:fallback", ko: "장치를 사용합니다." }]
    });

    expect(repaired.segments[0].ko).toBe(fallbackInput.segments[0].source);
    expect(validateTranslationOutput(fallbackInput, repaired)).toEqual([]);
  });

  it("collects Markdown targets that contain parentheses", () => {
    expect(collectMarkdownLinks("[load(_:isolation:)](avasynchronouskeyvalueloading/load(_:isolation:).md)")).toEqual([
      "avasynchronouskeyvalueloading/load(_:isolation:).md"
    ]);
  });

  it("can directly repair a translated segment", () => {
    expect(repairTranslatedSegment("Call `trackID`.", "trackID를 호출합니다.")).toContain("`trackID`");
  });
});

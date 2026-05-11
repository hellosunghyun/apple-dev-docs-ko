import { describe, expect, it } from "vitest";
import { validateTranslationOutput } from "../scripts/lib/validate.js";
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
});


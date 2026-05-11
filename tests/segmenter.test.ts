import { describe, expect, it } from "vitest";
import { pathKey } from "../scripts/lib/fs.js";
import { parseMarkdownDocument } from "../scripts/lib/markdown.js";

describe("segmenter", () => {
  it("keeps code blocks preserved and splits paragraph sentences", () => {
    const doc = parseMarkdownDocument(
      [
        "# CMDeviceMotion",
        "",
        "Use this object to receive motion updates. Start updates only when your app needs them.",
        "",
        "```swift",
        "let manager = CMMotionManager()",
        "```"
      ].join("\n"),
      {
        sourcePath: "documentation/coremotion/cmdevicemotion.md",
        framework: "Core Motion",
        title: "CMDeviceMotion",
        officialUrl: "https://developer.apple.com/documentation/coremotion/cmdevicemotion",
        upstreamSha: "test"
      }
    );
    const paragraph = doc.blocks.find((block) => block.type === "paragraph");
    const code = doc.blocks.find((block) => block.type === "code");
    expect(paragraph?.segments).toHaveLength(2);
    expect(code?.segments[0].translatable).toBe(false);
  });

  it("generates stable segment ids for the same document", () => {
    const markdown = "# Title\n\nReturns a value. Use it carefully.";
    const parse = () =>
      parseMarkdownDocument(markdown, {
        sourcePath: "documentation/example/title.md",
        framework: "Example",
        title: "Title",
        officialUrl: "https://developer.apple.com/documentation/example/title",
        upstreamSha: "test"
      });
    expect(parse().blocks.flatMap((block) => block.segments).map((segment) => segment.id)).toEqual(
      parse().blocks.flatMap((block) => block.segments).map((segment) => segment.id)
    );
  });

  it("keeps derived file keys within filesystem filename limits", () => {
    const sourcePath = [
      "documentation",
      "accelerate",
      "bnnsoptimizeradamwithclippingfields",
      "init_learning_ratebeta1beta2time_stepepsilongradient_scaleregularization_scaleregularization_funcclipping_funcclip_gradients_minclip_gradients_maxclip_gradients_max_normclip_gradients_use_norm.md"
    ].join("/");

    const key = pathKey(sourcePath);

    expect(key).toHaveLength(160);
    expect(key).toMatch(/_[a-f0-9]{16}$/);
    expect(key).not.toContain("/");
    expect(pathKey(sourcePath)).toBe(key);
  });
});

import { describe, expect, it } from "vitest";
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
});


---
source_path: "documentation/Accelerate/bnnsgraph/builder/constant-valuesrowmajor-7b4v2.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/constant-valuesrowmajor-7b4v2"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:constantvaluesrowmajor:0000:0001">constant(values:rowMajor:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:constantvaluesrowmajor:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:constantvaluesrowmajor:0002:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:constantvaluesrowmajor:0003:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:constantvaluesrowmajor:0003:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:constantvaluesrowmajor:0003:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:constantvaluesrowmajor:0003:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:constantvaluesrowmajor:0003:0005">tvOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:constantvaluesrowmajor:0003:0006">visionOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:constantvaluesrowmajor:0003:0007">watchOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0004:0001">Declaration</span>

```swift
func constant(values: Array<Array<Float16>>, rowMajor: Bool = false) -> BNNSGraph.Builder.Tensor<Float16>
```

---

<span class="ko-segment" data-segment-id="seg:paragraph:declaration:0007:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/constant(values:rowmajor:">Apple Developer에서 보기</a>-7b4v2)*</span>

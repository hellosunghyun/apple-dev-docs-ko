---
source_path: "documentation/Accelerate/bnnsgraph/builder/tensor/l2norm-axeskeepdimensions.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/tensor/l2norm-axeskeepdimensions"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:l2normaxeskeepdimensions:0000:0001">l2Norm(axes:keepDimensions:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:l2normaxeskeepdimensions:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:l2normaxeskeepdimensions:0002:0001">현재 그래프에 지정된 축을 따라 유클리드 노름 감소 연산을 추가합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:l2normaxeskeepdimensions:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:l2normaxeskeepdimensions:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:l2normaxeskeepdimensions:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:l2normaxeskeepdimensions:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:l2normaxeskeepdimensions:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:l2normaxeskeepdimensions:0004:0005">tvOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:l2normaxeskeepdimensions:0004:0006">visionOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:l2normaxeskeepdimensions:0004:0007">watchOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func l2Norm(axes: [Int], keepDimensions: Bool) -> BNNSGraph.Builder.Tensor<T>
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>operation</code>: The string that describes the operation.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0010:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnslayerparameterstensorcontraction/init(operation:alpha:beta:ia_desc:ib_desc:o_desc:">Apple Developer에서 보기</a>)*</span>

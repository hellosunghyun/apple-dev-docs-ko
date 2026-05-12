---
source_path: "documentation/Accelerate/bnnsgraph/builder/tensor/pad-padding.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/tensor/pad-padding"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:padpadding:0000:0001">pad(_:padding:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:padpadding:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:padpadding:0002:0001">그래프에 패딩 연산을 추가합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:padpadding:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:padpadding:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:padpadding:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:padpadding:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:padpadding:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:padpadding:0004:0005">tvOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:padpadding:0004:0006">visionOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:padpadding:0004:0007">watchOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func pad(_ type: BNNSGraph.Builder.Padding, padding: [Int]) -> BNNSGraph.Builder.Tensor<T>
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>type</code>: 패딩 유형입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>padding</code>: 정수 배열입니다. 요소 개수가 짝수여야 하며, 인접한 각 두 요소 쌍이 앞(예: 상단 또는 왼쪽)과 뒤(예: 하단 또는 오른쪽) 패딩을 각각 지정합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0010:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/tensor/pad(_:padding:">Apple Developer에서 보기</a>)*</span>

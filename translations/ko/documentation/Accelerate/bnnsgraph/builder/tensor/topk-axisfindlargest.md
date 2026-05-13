---
source_path: "documentation/Accelerate/bnnsgraph/builder/tensor/topk-axisfindlargest.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/tensor/topk-axisfindlargest"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:topkaxisfindlargest:0000:0001">topK(_:axis:findLargest:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:topkaxisfindlargest:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:topkaxisfindlargest:0002:0001">현재 그래프에 top-k 연산을 추가합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:topkaxisfindlargest:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:topkaxisfindlargest:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:topkaxisfindlargest:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:topkaxisfindlargest:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:topkaxisfindlargest:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:topkaxisfindlargest:0004:0005">tvOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:topkaxisfindlargest:0004:0006">visionOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:topkaxisfindlargest:0004:0007">watchOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func topK(_ k: Int, axis: Int, findLargest: Bool) -> (values: BNNSGraph.Builder.Tensor<T>, indices: BNNSGraph.Builder.Tensor<Int32>)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 그래프의 출력은 지정된 차원에서 텐서의 top-k 값과 인덱스를 포함하는 텐서 쌍 <code>(values, indices)</code>입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002"><code>largest</code>가 <code>true</code>이면 해당하는 인덱스와 함께 가장 큰 <code>k</code> 값들을 출력하고, 그렇지 않으면 가장 작은 값을 출력합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/tensor/topk(_:axis:findlargest:">Apple Developer에서 보기</a>)*</span>

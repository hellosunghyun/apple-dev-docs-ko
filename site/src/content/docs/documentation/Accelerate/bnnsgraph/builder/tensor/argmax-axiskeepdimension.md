---
source_path: "documentation/Accelerate/bnnsgraph/builder/tensor/argmax-axiskeepdimension.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/tensor/argmax-axiskeepdimension"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:argmaxaxiskeepdimension:0000:0001">argMax(axis:keepDimension:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:argmaxaxiskeepdimension:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:argmaxaxiskeepdimension:0002:0001">현재 그래프에 argmax 연산을 추가합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:argmaxaxiskeepdimension:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:argmaxaxiskeepdimension:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:argmaxaxiskeepdimension:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:argmaxaxiskeepdimension:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:argmaxaxiskeepdimension:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:argmaxaxiskeepdimension:0004:0005">tvOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:argmaxaxiskeepdimension:0004:0006">visionOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:argmaxaxiskeepdimension:0004:0007">watchOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func argMax(axis: Int, keepDimension: Bool) -> BNNSGraph.Builder.Tensor<Int32>
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 함수는 텐서에서 최댓값의 첫 번째 인덱스를 계산합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/tensor/argmax(axis:keepdimension:">View on Apple Developer</a>)*</span>

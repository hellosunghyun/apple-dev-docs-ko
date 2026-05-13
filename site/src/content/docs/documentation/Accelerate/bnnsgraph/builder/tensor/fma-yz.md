---
source_path: "documentation/Accelerate/bnnsgraph/builder/tensor/fma-yz.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/tensor/fma-yz"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:fmayz:0000:0001">fma(y:z:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:fmayz:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:fmayz:0002:0001">현재 그래프에 요소별 fused multiply-add 연산을 추가합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:fmayz:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:fmayz:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:fmayz:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:fmayz:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:fmayz:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:fmayz:0004:0005">tvOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:fmayz:0004:0006">visionOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:fmayz:0004:0007">watchOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func fma(y: some BNNSGraph.Builder.OperationParameter<T>, z: some BNNSGraph.Builder.OperationParameter<T>) -> BNNSGraph.Builder.Tensor<T>
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 함수는 <code>x * y + z</code>에서 현재 텐서를 <code>x</code>로 처리합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>y</code>: <code>x * y + z</code>에서의 <code>y</code>입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>z</code>: The <code>z</code> in  <code>x * y + z</code>.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0012:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/tensor/fma(y:z:">View on Apple Developer</a>)*</span>

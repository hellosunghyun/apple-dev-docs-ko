---
source_path: "documentation/Accelerate/bnnsgraph/builder/tensor/instancenorm-weightbiasepsilon.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/tensor/instancenorm-weightbiasepsilon"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:instancenormweightbiasepsilon:0000:0001">instanceNorm(weight:bias:epsilon:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:instancenormweightbiasepsilon:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:instancenormweightbiasepsilon:0002:0001">현재 그래프에 인스턴스 정규화 작업을 추가합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:instancenormweightbiasepsilon:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:instancenormweightbiasepsilon:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:instancenormweightbiasepsilon:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:instancenormweightbiasepsilon:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:instancenormweightbiasepsilon:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:instancenormweightbiasepsilon:0004:0005">tvOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:instancenormweightbiasepsilon:0004:0006">visionOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:instancenormweightbiasepsilon:0004:0007">watchOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func instanceNorm(weight: some BNNSGraph.Builder.OperationParameter<T>, bias: some BNNSGraph.Builder.OperationParameter<T>, epsilon: Float = .ulpOfOne.squareRoot()) -> BNNSGraph.Builder.Tensor<T>
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 함수는 <code>weight</code>와 <code>bias</code>를 사용하여 <code>self</code>에 대해 affine 변환 기반 인스턴스 정규화를 수행합니다. <code>weight</code>와 <code>bias</code>는 1차원이어야 하며 크기가 <code>selfx.shape[1]</code>이어야 합니다. <code>self</code>는 최소 3차원이어야 합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>weight</code>: 가중치 값입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>bias</code>: 편향 값입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0003"><code>epsilon</code>: 함수가 0으로 나누기를 방지하기 위해 사용하는 엡실론 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0012:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/tensor/instancenorm(weight:bias:epsilon:">View on Apple Developer</a>)*</span>

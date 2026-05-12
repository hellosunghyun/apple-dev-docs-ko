---
source_path: "documentation/Accelerate/bnnsgraph/builder/tensor/pooling-kernelsizestridespaddingceilingmode.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/tensor/pooling-kernelsizestridespaddingceilingmode"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:poolingkernelsizestridespaddingceilingmode:0000:0001">pooling(_:kernelSize:strides:padding:ceilingMode:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:poolingkernelsizestridespaddingceilingmode:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:poolingkernelsizestridespaddingceilingmode:0002:0001">현재 그래프에 풀링 작업을 추가합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:poolingkernelsizestridespaddingceilingmode:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:poolingkernelsizestridespaddingceilingmode:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:poolingkernelsizestridespaddingceilingmode:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:poolingkernelsizestridespaddingceilingmode:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:poolingkernelsizestridespaddingceilingmode:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:poolingkernelsizestridespaddingceilingmode:0004:0005">tvOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:poolingkernelsizestridespaddingceilingmode:0004:0006">visionOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:poolingkernelsizestridespaddingceilingmode:0004:0007">watchOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func pooling(_ function: BNNSGraph.Builder.PoolingFunction, kernelSize: [Int], strides: [Int], padding: BNNSGraph.Builder.PoolingPadding, ceilingMode: BNNSGraph.Builder.CeilingMode) -> BNNSGraph.Builder.Tensor<T>
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 작업은 소스 텐서를 <code>(N, C, spatial dimensions...)</code> 형식으로 가정하며, 공간 차원의 수는 <code>1</code> 또는 <code>2</code>입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>function</code>: 풀링 함수를 지정하는 열거형입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>kernelSize</code>: 풀링 커널의 크기입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0003"><code>strides</code>: 각 공간 차원에 대한 커널 스트라이드를 포함하는 배열입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0004"><code>padding</code>: 작업이 입력 및 출력 형상에서 패딩을 계산하도록 지정하는 열거형입니다. <code>custom</code>을 지정하면 공간 차원 수의 두 배를 전달합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0005"><code>ceilingMode</code>: 출력 크기를 계산할 때 반올림 방식을 지정하는 열거형입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0012:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/tensor/pooling(_:kernelsize:strides:padding:ceilingmode:">View on Apple Developer</a>)*</span>

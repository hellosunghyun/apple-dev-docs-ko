---
source_path: "documentation/Accelerate/bnnsgraph/builder/tensor/tensorshape.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/tensor/tensorshape"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:tensorshape:0000:0001">tensorShape()</span>

<span class="ko-segment" data-segment-id="seg:paragraph:tensorshape:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:tensorshape:0002:0001">Adds a shape operation to the current graph.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:tensorshape:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:tensorshape:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:tensorshape:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:tensorshape:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:tensorshape:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:tensorshape:0004:0005">tvOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:tensorshape:0004:0006">visionOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:tensorshape:0004:0007">watchOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func tensorShape() -> BNNSGraph.Builder.Tensor<Int32>
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">This function returns a tensor that contains the shape of <code>self</code>.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">이 속성의 값은 <a href="https://developer.apple.com/documentation/SceneKit/SCNCamera">@@TOKEN_0@@</a>의 <a href="https://developer.apple.com/documentation/SceneKit/SCNCamera/motionBlurIntensity">@@TOKEN_1@@</a> 값을 덮어씁니다.</span>

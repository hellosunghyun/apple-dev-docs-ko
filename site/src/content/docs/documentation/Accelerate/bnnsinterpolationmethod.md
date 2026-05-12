---
source_path: "documentation/Accelerate/bnnsinterpolationmethod.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsinterpolationmethod"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnsinterpolationmethod:0000:0001">BNNSInterpolationMethod</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsinterpolationmethod:0001:0001">**Framework**: Accelerate **Kind**: struct</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsinterpolationmethod:0002:0001">보간 방법을 설명하는 상수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsinterpolationmethod:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnsinterpolationmethod:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsinterpolationmethod:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsinterpolationmethod:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsinterpolationmethod:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsinterpolationmethod:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsinterpolationmethod:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsinterpolationmethod:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
struct BNNSInterpolationMethod
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:interpolation-methods:0008:0001">보간 방법</span>

- <span class="ko-segment" data-segment-id="seg:list:interpolation-methods:0009:0001"><a href="bnnsinterpolationmethod/rawvalue.md">var rawValue: UInt32</a></span>
- <span class="ko-segment" data-segment-id="seg:list:interpolation-methods:0009:0002"><a href="bnnsinterpolationmethod/init(_:">init(UInt32)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:interpolation-methods:0009:0003"><a href="bnnsinterpolationmethod/init(rawvalue:">init(rawValue: UInt32)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:interpolation-methods:0009:0004"><a href="bnnsinterpolationmethodlinear.md">var BNNSInterpolationMethodLinear: BNNSInterpolationMethod</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:interpolation-methods:0010:0001">리사이즈되는 차원 수에 따라 선형 또는 양선형 보간입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:interpolation-methods:0011:0001"><a href="bnnsinterpolationmethodnearest.md">var BNNSInterpolationMethodNearest: BNNSInterpolationMethod</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:interpolation-methods:0012:0001">최근접 이웃 보간입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0013:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0014:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0015:0001"><a href="../Swift/BitwiseCopyable.md">BitwiseCopyable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0015:0002"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0015:0003"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0015:0004"><a href="../Swift/RawRepresentable.md">RawRepresentable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0015:0005"><a href="../Swift/Sendable.md">Sendable</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0016:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="bnns/resizelayer.md">class ResizeLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">크기 조정 필터를 래핑하고 해당 필터의 소멸을 관리하는 레이어 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="bnnslayerparametersresize.md">struct BNNSLayerParametersResize</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">크기 조정 레이어의 매개변수를 포함하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="bnnsfiltercreatelayerresize(_:_:">func BNNSFilterCreateLayerResize(UnsafePointer&lt;BNNSLayerParametersResize&gt;, UnsafePointer&lt;BNNSFilterParameters&gt;?) -&gt; BNNSFilter?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">새 크기 조정 레이어를 반환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsinterpolationmethod">View on Apple Developer</a>*</span>

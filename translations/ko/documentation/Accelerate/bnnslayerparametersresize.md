---
source_path: "documentation/Accelerate/bnnslayerparametersresize.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnslayerparametersresize"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnslayerparametersresize:0000:0001">BNNSLayerParametersResize</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnslayerparametersresize:0001:0001">**Framework**: Accelerate **Kind**: struct</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnslayerparametersresize:0002:0001">리사이즈 레이어의 매개변수를 포함하는 구조체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnslayerparametersresize:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnslayerparametersresize:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnslayerparametersresize:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnslayerparametersresize:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnslayerparametersresize:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnslayerparametersresize:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnslayerparametersresize:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnslayerparametersresize:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
struct BNNSLayerParametersResize
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0008:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0009:0001"><a href="bnnslayerparametersresize/init(method:i_desc:o_desc:align_corners:">init(method: BNNSInterpolationMethod, i_desc: BNNSNDArrayDescriptor, o_desc: BNNSNDArrayDescriptor, align_corners: Bool)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0010:0001">지정된 매개변수를 사용해 새 리사이즈 레이어 매개변수 구조체를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0011:0001"><a href="bnnslayerparametersresize/init.md">init()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0012:0001">새 리사이즈 레이어 매개변수 구조체를 반환합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:instance-properties:0013:0001">인스턴스 속성</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0014:0001"><a href="bnnslayerparametersresize/method.md">var method: BNNSInterpolationMethod</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0015:0001">리사이즈에 대한 보간 방법입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0016:0001"><a href="bnnslayerparametersresize/i_desc.md">var i_desc: BNNSNDArrayDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0017:0001">입력의 디스크립터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0018:0001"><a href="bnnslayerparametersresize/o_desc.md">var o_desc: BNNSNDArrayDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0019:0001">출력의 디스크립터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0020:0001"><a href="bnnslayerparametersresize/align_corners.md">var align_corners: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0021:0001">업스케일링 그리드를 스케일링 차원의 가장자리가 아닌 중심에 정렬할지 지정하는 Boolean 값입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0022:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0023:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0024:0001"><a href="../Swift/BitwiseCopyable.md">BitwiseCopyable</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0025:0001">관련 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="bnns/resizelayer.md">class ResizeLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">리사이즈 필터를 래핑하고 그 해제를 관리하는 레이어 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="bnnsinterpolationmethod.md">struct BNNSInterpolationMethod</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">보간 방법을 설명하는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="bnnsfiltercreatelayerresize(_:_:">func BNNSFilterCreateLayerResize(UnsafePointer&lt;BNNSLayerParametersResize&gt;, UnsafePointer&lt;BNNSFilterParameters&gt;?) -&gt; BNNSFilter?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">새 리사이즈 레이어를 반환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnslayerparametersresize">View on Apple Developer</a>*</span>

---
source_path: "documentation/AVFoundation/avcapturedepthdataoutput/isfilteringenabled.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedepthdataoutput/isfilteringenabled"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:isfilteringenabled:0000:0001">isFilteringEnabled</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isfilteringenabled:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isfilteringenabled:0002:0001">깊이 데이터 출력을 필터링하여 노이즈를 완화하고 유효하지 않은 값을 채울지 여부를 결정하는 불리언 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isfilteringenabled:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:isfilteringenabled:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isfilteringenabled:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isfilteringenabled:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isfilteringenabled:0004:0004">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var isFilteringEnabled: Bool { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">Before changing the value of this property, you must call <a href="avcapturedevice/lockforconfiguration(">@@TOKEN_0@@</a>.md) to acquire exclusive access to the device’s configuration properties.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">깊이 데이터 필터링은 보조 이미지에 시각 효과를 적용할 때 더 유용하게 만들지만, 데이터가 변경되어 컴퓨터 비전 작업에 더 이상 적합하지 않을 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">(필터링되지 않은 깊이 맵에서는 누락된 값이 <code>NaN</code>으로 표시됩니다.)</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="avcapturedepthdataoutput/alwaysdiscardslatedepthdata.md">var alwaysDiscardsLateDepthData: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">다음 깊이 데이터가 캡처되기 전에 처리되지 않은 깊이 데이터를 캡처 출력이 폐기해야 하는지 여부를 결정하는 불리언 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedepthdataoutput/isfilteringenabled">View on Apple Developer</a>*</span>

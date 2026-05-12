---
source_path: "documentation/AVFoundation/avcapturedevice/autofocusrangerestriction-swiftenum.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedevice/autofocusrangerestriction-swiftenum"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avcapturedeviceautofocusrangerestriction:0000:0001">AVCaptureDevice.AutoFocusRangeRestriction</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcapturedeviceautofocusrangerestriction:0001:0001">**Framework**: AVFoundation **Kind**: enum</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcapturedeviceautofocusrangerestriction:0002:0001">캡처 장치의 자동 초점 범위를 지정하는 상수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcapturedeviceautofocusrangerestriction:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avcapturedeviceautofocusrangerestriction:0004:0001">iOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturedeviceautofocusrangerestriction:0004:0002">iPadOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturedeviceautofocusrangerestriction:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturedeviceautofocusrangerestriction:0004:0004">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
enum AutoFocusRangeRestriction
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">주로 근거리나 원거리 객체에 초점을 맞출 것으로 예상되는 경우 <a href="avcapturedevice/autofocusrangerestriction-swift.property.md">@@TOKEN_0@@</a> 속성을 사용해 초점 시스템에 힌트를 제공할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0002">이 방식은 자동 초점을 더 빠르게, 전력 효율적으로, 오류 가능성이 낮게 만듭니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0003">이 제한은 지정된 범위의 거리에서 초점을 우선적으로 맞추지만, 장치가 해당 범위 내에서 초점 포인트를 찾지 못하면 다른 거리에서 초점을 맞춥니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0009:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:constants:0010:0001">Constants</span>

- <span class="ko-segment" data-segment-id="seg:list:constants:0011:0001"><a href="avcapturedevice/autofocusrangerestriction-swift.enum/none.md">AVCaptureDevice.AutoFocusRangeRestriction.none</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:constants:0012:0001">장치는 모든 범위의 객체에 초점을 맞추려고 시도합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:constants:0013:0001"><a href="avcapturedevice/autofocusrangerestriction-swift.enum/near.md">AVCaptureDevice.AutoFocusRangeRestriction.near</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:constants:0014:0001">장치는 주로 카메라에 가까운 피사체에 초점을 맞추려고 시도합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:constants:0015:0001"><a href="avcapturedevice/autofocusrangerestriction-swift.enum/far.md">AVCaptureDevice.AutoFocusRangeRestriction.far</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:constants:0016:0001">장치는 카메라에서 멀리 있는 피사체에 주로 초점을 맞추려고 시도합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0017:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0018:0001"><a href="avcapturedevice/autofocusrangerestriction-swift.enum/init(rawvalue:">init?(rawValue: Int)</a>.md)</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0019:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0020:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0021:0001"><a href="../Swift/BitwiseCopyable.md">BitwiseCopyable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0021:0002"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0021:0003"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0021:0004"><a href="../Swift/RawRepresentable.md">RawRepresentable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0021:0005"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0021:0006"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0022:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="avcapturedevice/isfocusmodesupported(_:">func isFocusModeSupported(AVCaptureDevice.FocusMode) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">지정된 초점 모드를 장치가 지원하는지 여부를 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="avcapturedevice/focusmode-swift.property.md">var focusMode: AVCaptureDevice.FocusMode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">캡처 장치의 초점 모드입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="avcapturedevice/focusmode-swift.enum.md">AVCaptureDevice.FocusMode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">캡처 장치의 초점 모드를 지정하는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="avcapturedevice/issmoothautofocussupported.md">var isSmoothAutoFocusSupported: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">장치가 부드러운 자동 초점을 지원하는지 여부를 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001"><a href="avcapturedevice/issmoothautofocusenabled.md">var isSmoothAutoFocusEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">장치에서 부드러운 자동 초점이 활성 상태인지 여부를 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0033:0001"><a href="avcapturedevice/isfacedrivenautofocusenabled.md">var isFaceDrivenAutoFocusEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">장치에 얼굴 기반 자동 초점이 활성화되어 있는지 여부를 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0035:0001"><a href="avcapturedevice/automaticallyadjustsfacedrivenautofocusenabled.md">var automaticallyAdjustsFaceDrivenAutoFocusEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0036:0001">장치가 얼굴 기반 자동 초점을 자동으로 조정하는지 여부를 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0037:0001"><a href="avcapturedevice/isautofocusrangerestrictionsupported.md">var isAutoFocusRangeRestrictionSupported: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0038:0001">장치가 초점 범위 제한을 지원하는지 여부를 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0039:0001"><a href="avcapturedevice/autofocusrangerestriction-swift.property.md">var autoFocusRangeRestriction: AVCaptureDevice.AutoFocusRangeRestriction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0040:0001">자동 초점의 허용 범위를 제어하는 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0042:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedevice/autofocusrangerestriction-swift.enum">View on Apple Developer</a>*</span>

---
source_path: "documentation/AVFoundation/avcapturedevice/isfacedrivenautofocusenabled.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedevice/isfacedrivenautofocusenabled"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:isfacedrivenautofocusenabled:0000:0001">isFaceDrivenAutoFocusEnabled</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isfacedrivenautofocusenabled:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isfacedrivenautofocusenabled:0002:0001">기기가 얼굴 기반 자동 초점 기능을 활성화했는지 나타내는 부울 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isfacedrivenautofocusenabled:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:isfacedrivenautofocusenabled:0004:0001">iOS 15.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:isfacedrivenautofocusenabled:0004:0002">iPadOS 15.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:isfacedrivenautofocusenabled:0004:0003">Mac Catalyst 15.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:isfacedrivenautofocusenabled:0004:0004">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var isFaceDrivenAutoFocusEnabled: Bool { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">얼굴 기반 자동 초점은 자동 초점을 조정할 때 피사체의 얼굴을 고려합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">iOS 15.4 이상을 대상으로 링크되는 앱의 경우, 이 속성의 기본값은 자동 초점을 지원하는 기기에서 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_0@@</a>입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이 속성의 값을 설정하기 전에 다음을 수행합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:discussion:0010:0001">해당 장치의 <a href="avcapturedevice/lockforconfiguration(">@@TOKEN_0@@</a>.md) 메서드를 호출해 배타적 접근 권한을 확보합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0010:0002">장치의 <a href="avcapturedevice/automaticallyadjustsfacedrivenautofocusenabled.md">@@TOKEN_0@@</a> 속성 값을 <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_1@@</a>로 설정합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">이 단계를 수행하지 않고 값을 설정하려고 하면 예외가 발생합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0001">장치 설정을 완료하면 <a href="avcapturedevice/unlockforconfiguration(">@@TOKEN_0@@</a>.md) 메서드를 호출해 잠금을 해제합니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0013:0001">❗ **중요**: 이 속성의 상태를 업데이트해도 포커스 변경이 시작되지 않습니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0013:0002">새 값을 설정한 다음 이 변경을 적용하려면 적절한 <a href="avcapturedevice/focusmode-swift.property.md">@@TOKEN_0@@</a>를 설정합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0014:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avcapturedevice/isfocusmodesupported(_:">func isFocusModeSupported(AVCaptureDevice.FocusMode) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">지정한 초점 모드가 장치에서 지원되는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avcapturedevice/focusmode-swift.property.md">var focusMode: AVCaptureDevice.FocusMode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">캡처 장치의 초점 모드입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="avcapturedevice/focusmode-swift.enum.md">AVCaptureDevice.FocusMode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">캡처 장치의 초점 모드를 지정하기 위한 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="avcapturedevice/issmoothautofocussupported.md">var isSmoothAutoFocusSupported: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">장치가 부드러운 오토포커스를 지원하는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="avcapturedevice/issmoothautofocusenabled.md">var isSmoothAutoFocusEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">장치에서 부드러운 오토포커스가 활성화되어 있는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="avcapturedevice/automaticallyadjustsfacedrivenautofocusenabled.md">var automaticallyAdjustsFaceDrivenAutoFocusEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">장치가 얼굴 기반 오토포커스를 자동으로 조정하는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="avcapturedevice/isautofocusrangerestrictionsupported.md">var isAutoFocusRangeRestrictionSupported: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">장치가 초점 범위 제한을 지원하는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="avcapturedevice/autofocusrangerestriction-swift.property.md">var autoFocusRangeRestriction: AVCaptureDevice.AutoFocusRangeRestriction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">자동 초점 범위의 허용 범위를 제어하는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001"><a href="avcapturedevice/autofocusrangerestriction-swift.enum.md">AVCaptureDevice.AutoFocusRangeRestriction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">캡처 장치의 자동 초점 범위를 지정하는 상수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedevice/isfacedrivenautofocusenabled">View on Apple Developer</a>*</span>

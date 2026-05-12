---
source_path: "documentation/AVFoundation/avcapturedevice/issmoothautofocusenabled.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedevice/issmoothautofocusenabled"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:issmoothautofocusenabled:0000:0001">isSmoothAutoFocusEnabled</span>

<span class="ko-segment" data-segment-id="seg:paragraph:issmoothautofocusenabled:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:issmoothautofocusenabled:0002:0001">장치에서 부드러운 자동 초점이 활성화된 상태인지 나타내는 불리언 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:issmoothautofocusenabled:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:issmoothautofocusenabled:0004:0001">iOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:issmoothautofocusenabled:0004:0002">iPadOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:issmoothautofocusenabled:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:issmoothautofocusenabled:0004:0004">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var isSmoothAutoFocusEnabled: Bool { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">지원되는 장치에서 카메라 렌즈 이동이 더 천천히 이루어지는 포커스 모드를 활성화할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">이 모드는 초점 전환이 시각적으로 덜 눈에 거슬리게 하며, 동영상 캡처에서 원하는 동작입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이 속성의 값을 변경하기 전에 <a href="avcapturedevice/lockforconfiguration(">@@TOKEN_0@@</a>.md) 을 호출해 장치 구성 속성에 대한 배타적 접근 권한을 먼저 획득해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">그렇지 않으면 이 속성 값을 설정할 때 예외가 발생합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0003">장치 구성을 마친 뒤에는 <a href="avcapturedevice/unlockforconfiguration(">@@TOKEN_0@@</a>.md) 를 호출해 잠금을 해제하고 다른 디바이스가 설정을 구성할 수 있도록 허용해야 합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="avcapturedevice/isfocusmodesupported(_:">func isFocusModeSupported(AVCaptureDevice.FocusMode) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">지정한 포커스 모드를 장치가 지원하는지 나타내는 불리언 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avcapturedevice/focusmode-swift.property.md">var focusMode: AVCaptureDevice.FocusMode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">캡처 장치의 포커스 모드입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avcapturedevice/focusmode-swift.enum.md">AVCaptureDevice.FocusMode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">캡처 장치의 포커스 모드를 지정하는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avcapturedevice/issmoothautofocussupported.md">var isSmoothAutoFocusSupported: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">장치가 부드러운 자동 초점을 지원하는지 나타내는 불리언 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="avcapturedevice/isfacedrivenautofocusenabled.md">var isFaceDrivenAutoFocusEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">장치에 얼굴 기반 자동 초점이 활성화되어 있는지 나타내는 불리언 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="avcapturedevice/automaticallyadjustsfacedrivenautofocusenabled.md">var automaticallyAdjustsFaceDrivenAutoFocusEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">장치가 얼굴 기반 자동 초점을 자동으로 조정하는지 나타내는 불리언 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="avcapturedevice/isautofocusrangerestrictionsupported.md">var isAutoFocusRangeRestrictionSupported: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">장치가 초점 범위 제한을 지원하는지 나타내는 불리언 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="avcapturedevice/autofocusrangerestriction-swift.property.md">var autoFocusRangeRestriction: AVCaptureDevice.AutoFocusRangeRestriction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">자동 초점의 허용 범위를 제어하는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="avcapturedevice/autofocusrangerestriction-swift.enum.md">AVCaptureDevice.AutoFocusRangeRestriction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">캡처 장치의 자동 초점 범위를 지정하는 상수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedevice/issmoothautofocusenabled">View on Apple Developer</a>*</span>

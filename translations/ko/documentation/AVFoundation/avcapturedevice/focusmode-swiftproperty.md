---
source_path: "documentation/AVFoundation/avcapturedevice/focusmode-swiftproperty.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedevice/focusmode-swiftproperty"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:focusmode:0000:0001">focusMode</span>

<span class="ko-segment" data-segment-id="seg:paragraph:focusmode:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:focusmode:0002:0001">캡처 장치의 포커스 모드입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:focusmode:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:focusmode:0004:0001">iOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:focusmode:0004:0002">iPadOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:focusmode:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:focusmode:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:focusmode:0004:0005">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var focusMode: AVCaptureDevice.FocusMode { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 property의 값을 변경하기 전에 기기 구성 속성에 대한 독점적 접근 권한을 얻으려면 <a href="avcapturedevice/lockforconfiguration(">@@TOKEN_0@@</a>.md) 을(를) 호출해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">반대로 이 property의 값을 설정하면 예외가 발생합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">기기 구성 완료 후에는 <a href="avcapturedevice/unlockforconfiguration(">@@TOKEN_0@@</a>.md) 을(를) 호출해 잠금을 해제하고 다른 기기가 설정을 구성할 수 있도록 허용해야 합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이 property는 key-value observable입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="avcapturedevice/isfocusmodesupported(_:">func isFocusModeSupported(AVCaptureDevice.FocusMode) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">지정한 포커스 모드를 기기가 지원하는지 나타내는 불리언 값을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avcapturedevice/focusmode-swift.enum.md">AVCaptureDevice.FocusMode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">캡처 장치의 포커스 모드를 지정하는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avcapturedevice/issmoothautofocussupported.md">var isSmoothAutoFocusSupported: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">기기가 부드러운 자동 초점을 지원하는지 나타내는 불리언 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avcapturedevice/issmoothautofocusenabled.md">var isSmoothAutoFocusEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">기기에서 부드러운 자동 초점이 활성 상태인지 나타내는 불리언 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="avcapturedevice/isfacedrivenautofocusenabled.md">var isFaceDrivenAutoFocusEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">기기에서 얼굴 기반 자동 초점이 활성화되어 있는지 나타내는 불리언 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="avcapturedevice/automaticallyadjustsfacedrivenautofocusenabled.md">var automaticallyAdjustsFaceDrivenAutoFocusEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">기기가 얼굴 기반 자동 초점을 자동으로 조정하는지 나타내는 불리언 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="avcapturedevice/isautofocusrangerestrictionsupported.md">var isAutoFocusRangeRestrictionSupported: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">기기가 초점 범위 제한을 지원하는지 나타내는 불리언 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="avcapturedevice/autofocusrangerestriction-swift.property.md">var autoFocusRangeRestriction: AVCaptureDevice.AutoFocusRangeRestriction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">자동 초점의 허용 범위를 제어하는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="avcapturedevice/autofocusrangerestriction-swift.enum.md">AVCaptureDevice.AutoFocusRangeRestriction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">캡처 장치의 자동 초점 범위를 지정하는 상수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedevice/focusmode-swift.property">View on Apple Developer</a>*</span>

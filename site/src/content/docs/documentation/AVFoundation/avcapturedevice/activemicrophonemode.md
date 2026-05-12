---
source_path: "documentation/AVFoundation/avcapturedevice/activemicrophonemode.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedevice/activemicrophonemode"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:activemicrophonemode:0000:0001">activeMicrophoneMode</span>

<span class="ko-segment" data-segment-id="seg:paragraph:activemicrophonemode:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:activemicrophonemode:0002:0001">장치의 활성 마이크로폰 모드입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:activemicrophonemode:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:activemicrophonemode:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:activemicrophonemode:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:activemicrophonemode:0004:0003">Mac Catalyst 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:activemicrophonemode:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:activemicrophonemode:0004:0005">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class var activeMicrophoneMode: AVCaptureDevice.MicrophoneMode { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">앱의 활성 오디오 경로가 해당 모드를 지원하지 않으면 <code>preferredMicrophoneMode</code>(링크의 값과) 값이 다를 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">Devices that don’t support constituent device switching return <a href="avcaptureprimaryconstituentdevicerestrictedswitchingbehaviorconditions/avcaptureprimaryconstituentdevicerestrictedswitchingbehaviorconditionnone.md">@@TOKEN_0@@</a>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="avcapturedevice/preferredmicrophonemode.md">class var preferredMicrophoneMode: AVCaptureDevice.MicrophoneMode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">Control Center에서 사용자가 선택한 마이크 모드입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avcapturedevice/microphonemode.md">AVCaptureDevice.MicrophoneMode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">사용 가능한 마이크 모드를 정의하는 상수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedevice/activemicrophonemode">View on Apple Developer</a>*</span>

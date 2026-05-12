---
source_path: "documentation/AVFoundation/avcapturedevice/primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.struct/videozoomchanged.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedevice/primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.struct/videozoomchanged"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:videozoomchanged:0000:0001">videoZoomChanged</span>

<span class="ko-segment" data-segment-id="seg:paragraph:videozoomchanged:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:videozoomchanged:0002:0001">장치의 비디오 줌이 변경될 때에만 대체 카메라로 전환이 제한됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:videozoomchanged:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:videozoomchanged:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:videozoomchanged:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:videozoomchanged:0004:0003">Mac Catalyst 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:videozoomchanged:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:videozoomchanged:0004:0005">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static var videoZoomChanged: AVCaptureDevice.PrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">A preview layer begins displaying content when you call the capture session’s <a href="avcapturesession/startrunning(">@@TOKEN_0@@</a>.md) method.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0001">비디오 줌 배율의 모든 변경이 전환-오버 줌 배율 구간을 넘는 변경에만 국한되지 않고 대체 카메라 전환을 허용합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="avcapturedevice/primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.struct/exposuremodechanged.md">static var exposureModeChanged: AVCaptureDevice.PrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">장치의 노출 모드가 변경될 때에만 대체 카메라로 전환이 제한됩니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avcapturedevice/primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.struct/focusmodechanged.md">static var focusModeChanged: AVCaptureDevice.PrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">장치의 초점 모드가 변경될 때에만 대체 카메라로 전환이 제한됩니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedevice/primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.struct/videozoomchanged">View on Apple Developer</a>*</span>

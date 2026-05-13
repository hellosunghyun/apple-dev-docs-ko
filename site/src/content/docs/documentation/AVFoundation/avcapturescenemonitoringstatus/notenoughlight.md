---
source_path: "documentation/AVFoundation/avcapturescenemonitoringstatus/notenoughlight.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturescenemonitoringstatus/notenoughlight"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:notenoughlight:0000:0001">notEnoughLight</span>

<span class="ko-segment" data-segment-id="seg:paragraph:notenoughlight:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:notenoughlight:0002:0001">현재 장면의 조도 수준이 현재 구성된 기능 세트가 최적으로 동작하기에 충분하지 않습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:notenoughlight:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:notenoughlight:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:notenoughlight:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:notenoughlight:0004:0003">Mac Catalyst 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:notenoughlight:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:notenoughlight:0004:0005">tvOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static let notEnoughLight: AVCaptureSceneMonitoringStatus
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참조 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="avcapturedevice/setcinematicvideofixedfocus(at:focusmode:">func setCinematicVideoFixedFocus(at: CGPoint, focusMode: AVCaptureDevice.CinematicVideoFocusMode)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">거리에서 초점을 고정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avcapturedevice/setcinematicvideotrackingfocus(at:focusmode:">func setCinematicVideoTrackingFocus(at: CGPoint, focusMode: AVCaptureDevice.CinematicVideoFocusMode)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">지정된 지점의 영역에서 객체가 감지되면 객체에 초점을 맞추고 추적을 시작합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcapturedevice/setcinematicvideotrackingfocus(detectedobjectid:focusmode:">func setCinematicVideoTrackingFocus(detectedObjectID: Int, focusMode: AVCaptureDevice.CinematicVideoFocusMode)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">감지된 객체에 초점을 맞추고 추적을 시작합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcapturedevice/cinematicvideofocusmode.md">AVCaptureDevice.CinematicVideoFocusMode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">Cinematic Video를 녹화할 때의 초점 동작을 나타내는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avcapturescenemonitoringstatus.md">struct AVCaptureSceneMonitoringStatus</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">디바이스가 관찰한 장면에 대한 정보성 상태입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avcapturedevice/cinematicvideocapturescenemonitoringstatuses.md">var cinematicVideoCaptureSceneMonitoringStatuses: Set&lt;AVCaptureSceneMonitoringStatus&gt;</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">현재 Cinematic Video 캡처와 관련된 현재 장면 모니터링 상태입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturescenemonitoringstatus/notenoughlight">View on Apple Developer</a>*</span>

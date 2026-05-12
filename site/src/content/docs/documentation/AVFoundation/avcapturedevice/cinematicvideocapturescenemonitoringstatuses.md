---
source_path: "documentation/AVFoundation/avcapturedevice/cinematicvideocapturescenemonitoringstatuses.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedevice/cinematicvideocapturescenemonitoringstatuses"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:cinematicvideocapturescenemonitoringstatuses:0000:0001">cinematicVideoCaptureSceneMonitoringStatuses</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cinematicvideocapturescenemonitoringstatuses:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cinematicvideocapturescenemonitoringstatuses:0002:0001">Cinematic Video 캡처와 관련된 현재 장면 모니터링 상태입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cinematicvideocapturescenemonitoringstatuses:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:cinematicvideocapturescenemonitoringstatuses:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:cinematicvideocapturescenemonitoringstatuses:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:cinematicvideocapturescenemonitoringstatuses:0004:0003">Mac Catalyst 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:cinematicvideocapturescenemonitoringstatuses:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:cinematicvideocapturescenemonitoringstatuses:0004:0005">tvOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var cinematicVideoCaptureSceneMonitoringStatuses: Set<AVCaptureSceneMonitoringStatus> { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">키-값 관찰을 통해 이 속성을 모니터링하여, Cinematic Video 경험을 개선하기 위해 사용자가 장면을 다시 구성해야 함(“scene is too dark”)을 알려주는 UI를 표시합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avcapturedevice/setcinematicvideofixedfocus(at:focusmode:">func setCinematicVideoFixedFocus(at: CGPoint, focusMode: AVCaptureDevice.CinematicVideoFocusMode)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">거리에서 포커스를 고정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcapturedevice/setcinematicvideotrackingfocus(at:focusmode:">func setCinematicVideoTrackingFocus(at: CGPoint, focusMode: AVCaptureDevice.CinematicVideoFocusMode)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">지정한 점의 영역에서 객체가 감지되면 해당 객체에 초점을 맞추고 추적을 시작합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcapturedevice/setcinematicvideotrackingfocus(detectedobjectid:focusmode:">func setCinematicVideoTrackingFocus(detectedObjectID: Int, focusMode: AVCaptureDevice.CinematicVideoFocusMode)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">감지된 객체를 추적 대상으로 설정하고 추적을 시작합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avcapturedevice/cinematicvideofocusmode.md">AVCaptureDevice.CinematicVideoFocusMode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">Cinematic Video 녹화 시 초점 동작을 나타내는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avcapturescenemonitoringstatus.md">struct AVCaptureSceneMonitoringStatus</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">기기에서 관찰한 장면에 대한 정보성 상태입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avcapturescenemonitoringstatus/notenoughlight.md">static let notEnoughLight: AVCaptureSceneMonitoringStatus</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">현재 장면의 밝기 수준이 현재 기능 세트가 최적으로 동작하기에 충분하지 않습니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedevice/cinematicvideocapturescenemonitoringstatuses">View on Apple Developer</a>*</span>

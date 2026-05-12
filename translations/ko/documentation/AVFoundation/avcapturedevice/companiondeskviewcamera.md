---
source_path: "documentation/AVFoundation/avcapturedevice/companiondeskviewcamera.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedevice/companiondeskviewcamera"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:companiondeskviewcamera:0000:0001">companionDeskViewCamera</span>

<span class="ko-segment" data-segment-id="seg:paragraph:companiondeskviewcamera:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:companiondeskviewcamera:0002:0001">디바이스와 연결된 Desk View 카메라입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:companiondeskviewcamera:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:companiondeskviewcamera:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:companiondeskviewcamera:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:companiondeskviewcamera:0004:0003">Mac Catalyst 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:companiondeskviewcamera:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:companiondeskviewcamera:0004:0005">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var companionDeskViewCamera: AVCaptureDevice? { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">해당 값은 장치에 Desk View 카메라가 존재하는 경우 이를 제공하며, 이 카메라는 장치의 울트라 와이드 카메라에서 프레이밍을 파생합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">시스템에 여러 개의 Continuity Camera 디바이스가 있는 경우, 이 속성을 사용해 특정 인스턴스를 해당 Desk View 디바이스와 연결해야 합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avcapturedevice/systempreferredcamera.md">class var systemPreferredCamera: AVCaptureDevice?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">시스템에서 비디오 및 사진 캡처용으로 선호하는 카메라입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcapturedevice/userpreferredcamera.md">class var userPreferredCamera: AVCaptureDevice?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">사용자가 비디오 및 사진 캡처용으로 선호하는 카메라입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcapturedevice/iscontinuitycamera.md">var isContinuityCamera: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">장치가 Continuity Camera인지 나타내는 불리언 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedevice/companiondeskviewcamera">View on Apple Developer</a>*</span>

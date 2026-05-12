---
source_path: "documentation/AVFoundation/avcapturedevice/iscontinuitycamera.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedevice/iscontinuitycamera"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:iscontinuitycamera:0000:0001">isContinuityCamera</span>

<span class="ko-segment" data-segment-id="seg:paragraph:iscontinuitycamera:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:iscontinuitycamera:0002:0001">장치가 Continuity Camera인지 나타내는 부울 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:iscontinuitycamera:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:iscontinuitycamera:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:iscontinuitycamera:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:iscontinuitycamera:0004:0003">Mac Catalyst 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:iscontinuitycamera:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:iscontinuitycamera:0004:0005">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var isContinuityCamera: Bool { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">Continuity Camera를 사용하면 iPhone의 후면 카메라 시스템을 macOS에서 외부 웹캠으로 사용할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avcapturedevice/systempreferredcamera.md">class var systemPreferredCamera: AVCaptureDevice?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">시스템이 동영상 및 사진 촬영에 선호하는 카메라입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcapturedevice/userpreferredcamera.md">class var userPreferredCamera: AVCaptureDevice?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">사용자가 동영상 및 사진 촬영에 선호하는 카메라입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcapturedevice/companiondeskviewcamera.md">var companionDeskViewCamera: AVCaptureDevice?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">기기와 관련된 Desk View 카메라입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedevice/iscontinuitycamera">View on Apple Developer</a>*</span>

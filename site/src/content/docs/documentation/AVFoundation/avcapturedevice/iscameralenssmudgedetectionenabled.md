---
source_path: "documentation/AVFoundation/avcapturedevice/iscameralenssmudgedetectionenabled.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedevice/iscameralenssmudgedetectionenabled"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:iscameralenssmudgedetectionenabled:0000:0001">isCameraLensSmudgeDetectionEnabled</span>

<span class="ko-segment" data-segment-id="seg:paragraph:iscameralenssmudgedetectionenabled:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:iscameralenssmudgedetectionenabled:0002:0001">카메라 렌즈 얼룩 감지가 활성화되어 있는지 여부입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:iscameralenssmudgedetectionenabled:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:iscameralenssmudgedetectionenabled:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:iscameralenssmudgedetectionenabled:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:iscameralenssmudgedetectionenabled:0004:0003">Mac Catalyst 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:iscameralenssmudgedetectionenabled:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:iscameralenssmudgedetectionenabled:0004:0005">tvOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var isCameraLensSmudgeDetectionEnabled: Bool { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001"><a href="avcapturedevice/setcameralenssmudgedetectionenabled(_:detectioninterval:">@@TOKEN_0@@</a>.md)를 호출하여 렌즈 얼룩 감지를 활성화합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">By default, this property is returns <code>false</code>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avcapturedevice/setcameralenssmudgedetectionenabled(_:detectioninterval:">func setCameraLensSmudgeDetectionEnabled(Bool, detectionInterval: CMTime)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">Specify whether to enable camera lens smudge detection, and the interval time between each run of detections.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcapturedevice/cameralenssmudgedetectioninterval.md">var cameraLensSmudgeDetectionInterval: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">The camera lens smudge detection interval.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcapturedevice/cameralenssmudgedetectionstatus.md">var cameraLensSmudgeDetectionStatus: AVCaptureCameraLensSmudgeDetectionStatus</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">A value specifying the status of camera lens smudge detection.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avcapturecameralenssmudgedetectionstatus.md">enum AVCaptureCameraLensSmudgeDetectionStatus</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">Constants indicating the current camera lens smudge detection status.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedevice/iscameralenssmudgedetectionenabled">View on Apple Developer</a>*</span>

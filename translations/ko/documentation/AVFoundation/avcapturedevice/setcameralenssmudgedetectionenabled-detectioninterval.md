---
source_path: "documentation/AVFoundation/avcapturedevice/setcameralenssmudgedetectionenabled-detectioninterval.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedevice/setcameralenssmudgedetectionenabled-detectioninterval"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:setcameralenssmudgedetectionenableddetectioninterval:0000:0001">setCameraLensSmudgeDetectionEnabled(_:detectionInterval:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setcameralenssmudgedetectionenableddetectioninterval:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setcameralenssmudgedetectionenableddetectioninterval:0002:0001">카메라 렌즈 스머지 감지를 활성화할지 여부와 각 감지 실행 사이의 간격 시간을 지정합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setcameralenssmudgedetectionenableddetectioninterval:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:setcameralenssmudgedetectionenableddetectioninterval:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:setcameralenssmudgedetectionenableddetectioninterval:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:setcameralenssmudgedetectionenableddetectioninterval:0004:0003">Mac Catalyst 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:setcameralenssmudgedetectionenableddetectioninterval:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:setcameralenssmudgedetectionenableddetectioninterval:0004:0005">tvOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func setCameraLensSmudgeDetectionEnabled(_ cameraLensSmudgeDetectionEnabled: Bool, detectionInterval: CMTime)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">각 감지는 짧은 시간 동안 프레임을 처리한 뒤 단일 감지 결과를 생성합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002"><code>detectionInterval</code>을 사용해 각 감지 실행 사이의 시간 간격을 지정합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">예를 들어 <a href="avcapturedevice/iscameralenssmudgedetectionenabled.md">@@TOKEN_0@@</a>이 <code>true</code>로 설정되고 <code>detectionInterval</code>이 1분으로 설정되면 감지는 1분마다 한 번 실행되어 <a href="avcapturecameralenssmudgedetectionstatus.md">@@TOKEN_3@@</a>를 업데이트합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0004"><code>detectionInterval</code>이 <code>kCMTimeInvalid</code>로 설정되면 세션 시작 후 한 번만 감지가 실행됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0005"><code>detectionInterval</code>이 <code>kCMTimeZero</code>로 설정되면 감지가 연속적으로 실행됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001"><a href="avcapturedevice.md">@@TOKEN_0@@</a>는 현재 활성 형식에서 <a href="avcapturedevice/format/iscameralenssmudgedetectionsupported.md">@@TOKEN_1@@</a> 속성이 <code>false</code>를 반환하면 <code>NSInvalidArgumentException</code>을 발생시킵니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">Enabling detection requires a lengthy reconfiguration of the capture render pipeline, so you should enable detection before calling <a href="avcapturesession/startrunning(">@@TOKEN_0@@</a>.md) or within <a href="avcapturesession/beginconfiguration(">@@TOKEN_1@@</a>.md) and <a href="avcapturesession/commitconfiguration(">@@TOKEN_2@@</a>.md) while running.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0010:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0001"><code>cameraLensSmudgeDetectionEnabled</code>: 카메라 렌즈 스머지 감지를 활성화할지 지정합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0002"><code>detectionInterval</code>: 감지가 활성화된 경우의 감지 실행 간격입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0012:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avcapturedevice/iscameralenssmudgedetectionenabled.md">var isCameraLensSmudgeDetectionEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">카메라 렌즈 스머지 감지가 활성화되었는지 여부입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avcapturedevice/cameralenssmudgedetectioninterval.md">var cameraLensSmudgeDetectionInterval: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">카메라 렌즈 스머지 감지 간격입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avcapturedevice/cameralenssmudgedetectionstatus.md">var cameraLensSmudgeDetectionStatus: AVCaptureCameraLensSmudgeDetectionStatus</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">카메라 렌즈 스머지 감지 상태를 지정하는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="avcapturecameralenssmudgedetectionstatus.md">enum AVCaptureCameraLensSmudgeDetectionStatus</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">현재 카메라 렌즈 스머지 감지 상태를 나타내는 상수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedevice/setcameralenssmudgedetectionenabled(_:detectioninterval:">View on Apple Developer</a>)*</span>

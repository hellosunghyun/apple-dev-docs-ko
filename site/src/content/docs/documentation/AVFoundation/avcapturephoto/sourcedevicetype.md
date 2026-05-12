---
source_path: "documentation/AVFoundation/avcapturephoto/sourcedevicetype.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturephoto/sourcedevicetype"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sourcedevicetype:0000:0001">sourceDeviceType</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sourcedevicetype:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sourcedevicetype:0002:0001">사진을 캡처한 장치의 유형입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sourcedevicetype:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:sourcedevicetype:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sourcedevicetype:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sourcedevicetype:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sourcedevicetype:0004:0004">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var sourceDeviceType: AVCaptureDevice.DeviceType? { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">By default, <code>AVCaptureScreenInput</code> captures the video buffers from the display at a scale factor of 1.0 (no scaling).</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">This property defaults to the smallest dimensions returned by <a href="avcapturedevice/format/supportedmaxphotodimensions.md">@@TOKEN_0@@</a>.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">You must enable this option before initiating a photo capture with the <a href="avcapturephotosettings/ishighresolutionphotoenabled.md">@@TOKEN_0@@</a> property of your photo settings object set to <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_1@@</a>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">관련 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcapturephoto/depthdata.md">var depthData: AVDepthData?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">사진과 함께 캡처된 깊이 또는 시차 맵 데이터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcapturephoto/cameracalibrationdata.md">var cameraCalibrationData: AVCameraCalibrationData?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">사진을 캡처한 카메라 장치의 보정 정보입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001">[var metadata: [String : Any]](avcapturephoto/metadata.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">캡처된 이미지를 설명하는 메타데이터 사전입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avcapturephoto/portraiteffectsmatte.md">var portraitEffectsMatte: AVPortraitEffectsMatte?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">사진과 함께 캡처된 portrait effects matte입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturephoto/sourcedevicetype">View on Apple Developer</a>*</span>

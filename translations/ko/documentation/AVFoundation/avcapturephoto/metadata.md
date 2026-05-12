---
source_path: "documentation/AVFoundation/avcapturephoto/metadata.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturephoto/metadata"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:metadata:0000:0001">metadata</span>

<span class="ko-segment" data-segment-id="seg:paragraph:metadata:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:metadata:0002:0001">캡처된 이미지를 설명하는 메타데이터 사전입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:metadata:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:metadata:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:metadata:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:metadata:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:metadata:0004:0004">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var metadata: [String : Any] { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">가능한 키와 값을 보려면 <code>CGImageProperties</code>를 참조합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">사진과 함께 캡처된 메타데이터에는 이미지 방향, EXIF 카메라 속성, 그리고 Live Photo 메타데이터가 포함될 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avcapturephoto/depthdata.md">var depthData: AVDepthData?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">사진과 함께 캡처된 깊이 또는 시차 맵 데이터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcapturephoto/cameracalibrationdata.md">var cameraCalibrationData: AVCameraCalibrationData?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">사진을 캡처한 카메라 장치의 보정 정보입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcapturephoto/sourcedevicetype.md">var sourceDeviceType: AVCaptureDevice.DeviceType?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">사진을 캡처한 장치의 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avcapturephoto/portraiteffectsmatte.md">var portraitEffectsMatte: AVPortraitEffectsMatte?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">사진과 함께 캡처된 portrait effects matte입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturephoto/metadata">View on Apple Developer</a>*</span>

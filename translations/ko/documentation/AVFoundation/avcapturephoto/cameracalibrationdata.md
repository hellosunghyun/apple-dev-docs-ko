---
source_path: "documentation/AVFoundation/avcapturephoto/cameracalibrationdata.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturephoto/cameracalibrationdata"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:cameracalibrationdata:0000:0001">cameraCalibrationData</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cameracalibrationdata:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cameracalibrationdata:0002:0001">사진을 캡처한 카메라 장치의 보정 정보입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cameracalibrationdata:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:cameracalibrationdata:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:cameracalibrationdata:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:cameracalibrationdata:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:cameracalibrationdata:0004:0004">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var cameraCalibrationData: AVCameraCalibrationData? { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">카메라 보정 데이터는 캡처를 요청할 때 <a href="avcapturephotosettings/iscameracalibrationdatadeliveryenabled.md">@@TOKEN_0@@</a> 및 <a href="avcapturephotosettings/isdualcameradualphotodeliveryenabled.md">@@TOKEN_1@@</a> 설정을 지정한 경우에만 존재합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">깊이 데이터가 포함된 캡처에서 카메라 보정 데이터는 <a href="avdepthdata.md">@@TOKEN_0@@</a> <a href="avdepthdata/cameracalibrationdata.md">@@TOKEN_1@@</a> 속성을 참조하세요.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avcapturephoto/depthdata.md">var depthData: AVDepthData?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">사진과 함께 캡처된 깊이 데이터 또는 시차 맵 데이터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcapturephoto/sourcedevicetype.md">var sourceDeviceType: AVCaptureDevice.DeviceType?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">사진을 캡처한 장치 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001">[var metadata: [String : Any]](avcapturephoto/metadata.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">캡처된 이미지를 설명하는 메타데이터 사전입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avcapturephoto/portraiteffectsmatte.md">var portraitEffectsMatte: AVPortraitEffectsMatte?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">사진과 함께 캡처된 portrait effects matte입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturephoto/cameracalibrationdata">View on Apple Developer</a>*</span>

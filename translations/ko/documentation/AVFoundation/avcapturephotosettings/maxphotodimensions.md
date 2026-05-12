---
source_path: "documentation/AVFoundation/avcapturephotosettings/maxphotodimensions.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/maxphotodimensions"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:maxphotodimensions:0000:0001">maxPhotoDimensions</span>

<span class="ko-segment" data-segment-id="seg:paragraph:maxphotodimensions:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:maxphotodimensions:0002:0001">캡처할 사진의 최대 해상도입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:maxphotodimensions:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:maxphotodimensions:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:maxphotodimensions:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:maxphotodimensions:0004:0003">Mac Catalyst 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:maxphotodimensions:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:maxphotodimensions:0004:0005">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var maxPhotoDimensions: CMVideoDimensions { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">By default, <code>AVCaptureScreenInput</code> captures the video buffers from the display at a scale factor of 1.0 (no scaling).</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">Set this property to scale the buffers by a given factor; for example a 320x240 capture area with a scaleFactor of <code>2.0</code> produces video buffers at 640x480.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이 속성의 기본값은 <a href="avcapturedevice/format/supportedmaxphotodimensions.md">@@TOKEN_0@@</a>에서 반환되는 가장 작은 치수입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">관련 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="avcapturephotosettings/flashmode.md">var flashMode: AVCaptureDevice.FlashMode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">사진 촬영 시 플래시를 발사할지 여부를 나타내는 설정입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avcapturephotosettings/isautoredeyereductionenabled.md">var isAutoRedEyeReductionEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">플래시 캡처에서 자동 적목 감쇄를 사용할지 여부를 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avcapturephotosettings/photoqualityprioritization.md">var photoQualityPrioritization: AVCapturePhotoOutput.QualityPrioritization</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">사진 품질과 사진 전달 속도 중 어느 쪽을 우선할지 지정하는 설정입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avcapturephotosettings/iscameracalibrationdatadeliveryenabled.md">var isCameraCalibrationDataDeliveryEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">듀얼 사진 캡처 시 카메라 캘리브레이션 데이터도 함께 전달할지 여부를 결정하는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="avcapturephotosettings/isautocontentawaredistortioncorrectionenabled.md">var isAutoContentAwareDistortionCorrectionEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">사진 출력이 필요에 따라 이 사진 요청에서 콘텐츠 인식 왜곡 보정을 사용할지 여부를 지정하는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="avcapturephotosettings/isautovirtualdevicefusionenabled.md">var isAutoVirtualDeviceFusionEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">자동 가상 장치 이미지 퓨전을 사용할지 여부를 지정하는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001">[var virtualDeviceConstituentPhotoDeliveryEnabledDevices: [AVCaptureDevice]](avcapturephotosettings/virtualdeviceconstituentphotodeliveryenableddevices.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">가상 장치가 사진을 전달해야 하는 구성 장치입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="avcapturephotosettings/isdualcameradualphotodeliveryenabled.md">var isDualCameraDualPhotoDeliveryEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">듀얼 카메라 장치가 두 카메라 모두의 이미지를 전달할지 여부를 결정하는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="avcapturephotosettings/isautodualcamerafusionenabled.md">var isAutoDualCameraFusionEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">듀얼 카메라 장치의 데이터를 캡처가 자동으로 결합할지 여부를 지정하는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="avcapturephotosettings/isautostillimagestabilizationenabled.md">var isAutoStillImageStabilizationEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">캡처에서 자동 이미지 안정화를 사용할지 여부를 지정하는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001"><a href="avcapturephotosettings/ishighresolutionphotoenabled.md">var isHighResolutionPhotoEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">활성 장치와 형식에서 지원되는 최상위 해상도로 정지 이미지를 캡처할지 여부를 지정하는 부울 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/maxphotodimensions">View on Apple Developer</a>*</span>

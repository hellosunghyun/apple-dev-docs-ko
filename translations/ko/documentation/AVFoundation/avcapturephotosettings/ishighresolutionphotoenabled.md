---
source_path: "documentation/AVFoundation/avcapturephotosettings/ishighresolutionphotoenabled.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/ishighresolutionphotoenabled"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:ishighresolutionphotoenabled:0000:0001">isHighResolutionPhotoEnabled</span>

<span class="ko-segment" data-segment-id="seg:paragraph:ishighresolutionphotoenabled:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:ishighresolutionphotoenabled:0002:0001">현재 활성 장치와 형식이 지원하는 최대 해상도로 정지 이미지를 캡처할지 지정하는 부울 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:ishighresolutionphotoenabled:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:ishighresolutionphotoenabled:0004:0001">iOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:ishighresolutionphotoenabled:0004:0002">iPadOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:ishighresolutionphotoenabled:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:ishighresolutionphotoenabled:0004:0004">macOS 10.15+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var isHighResolutionPhotoEnabled: Bool { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 설정이 <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_0@@</a> (기본값)인 경우, 사진 캡처 출력은 소스 <a href="avcapturedevice.md">@@TOKEN_1@@</a> 객체의 활성 캡처 형식에서 <a href="avcapturedevice/format/formatdescription.md">@@TOKEN_2@@</a> 속성으로 지정된 크기의 이미지를 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">그러나 일부 장치와 캡처 형식은 비디오 캡처(및 스트리밍 사진 미리보기) 해상도보다 높은 해상도로 정지 이미지 캡처를 허용합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">정지 사진의 가능한 최대 해상도(캡처 형식의 <a href="avcapturedevice/format/highresolutionstillimagedimensions.md">@@TOKEN_0@@</a> 속성으로 설명됨)로 캡처하려면 이 설정을 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_1@@</a>로 변경합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">캡처 세션에 연결된 출력 중 하나라도 <a href="avcaptureconnection.md">@@TOKEN_0@@</a> <a href="avcaptureconnection/preferredvideostabilizationmode.md">@@TOKEN_1@@</a> 속성의 비디오 안정화를 활성화하면, 캡처된 이미지가 최대 정지 이미지 치수보다 약 10% 작을 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">(이 크기 변경은 비디오 안정화의 효과입니다. 비디오 안정화는 이동하는 이미지에서 안정 영역을 찾기 위해 자르기와 회전을 수행합니다.)</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0003">사진 캡처 델리게이트에 제공되는 <a href="avcaptureresolvedphotosettings.md">@@TOKEN_0@@</a> 객체를 검사하여 각 캡처 사진의 실제 치수를 확인합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="avcapturephotosettings/flashmode.md">var flashMode: AVCaptureDevice.FlashMode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">사진을 촬영할 때 플래시가 발사되는지 설정하는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avcapturephotosettings/isautoredeyereductionenabled.md">var isAutoRedEyeReductionEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">플래시 캡처에서 자동 레드아이 감소 기능을 사용할지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avcapturephotosettings/maxphotodimensions.md">var maxPhotoDimensions: CMVideoDimensions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">캡처할 사진의 최대 해상도입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avcapturephotosettings/photoqualityprioritization.md">var photoQualityPrioritization: AVCapturePhotoOutput.QualityPrioritization</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">사진 품질과 사진 전달 속도 중 어떤 항목을 우선할지 지정하는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="avcapturephotosettings/iscameracalibrationdatadeliveryenabled.md">var isCameraCalibrationDataDeliveryEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">이중 사진 캡처에서도 카메라 보정 데이터를 전달할지 결정하는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="avcapturephotosettings/isautocontentawaredistortioncorrectionenabled.md">var isAutoContentAwareDistortionCorrectionEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">이 사진 요청에서 사진 출력이 자체 판단에 따라 콘텐츠 인식 왜곡 보정을 사용할지 지정하는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="avcapturephotosettings/isautovirtualdevicefusionenabled.md">var isAutoVirtualDeviceFusionEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">자동 가상 기기 이미지 융합을 사용할지 지정하는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001">[var virtualDeviceConstituentPhotoDeliveryEnabledDevices: [AVCaptureDevice]](avcapturephotosettings/virtualdeviceconstituentphotodeliveryenableddevices.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">가상 장치가 사진을 전달해야 하는 하위 장치입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="avcapturephotosettings/isdualcameradualphotodeliveryenabled.md">var isDualCameraDualPhotoDeliveryEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">이중 카메라 장치가 두 카메라의 이미지를 모두 전달할지 결정하는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="avcapturephotosettings/isautodualcamerafusionenabled.md">var isAutoDualCameraFusionEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">캡처가 이중 카메라 장치에서 데이터를 자동으로 결합할지 지정하는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001"><a href="avcapturephotosettings/isautostillimagestabilizationenabled.md">var isAutoStillImageStabilizationEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">캡처에서 자동 이미지 안정화를 사용할지 지정하는 부울 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/ishighresolutionphotoenabled">View on Apple Developer</a>*</span>

---
source_path: "documentation/AVFoundation/avcapturephotooutput/isdualcamerafusionsupported.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/isdualcamerafusionsupported"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:isdualcamerafusionsupported:0000:0001">isDualCameraFusionSupported</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isdualcamerafusionsupported:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isdualcamerafusionsupported:0002:0001">캡처 출력이 현재 듀얼 카메라 장치에서 이미지 데이터를 자동으로 결합하는지 여부를 나타내는 부울 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isdualcamerafusionsupported:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:isdualcamerafusionsupported:0004:0001">iOS 10.2+</span>
- <span class="ko-segment" data-segment-id="seg:list:isdualcamerafusionsupported:0004:0002">iPadOS 10.2+</span>
- <span class="ko-segment" data-segment-id="seg:list:isdualcamerafusionsupported:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var isDualCameraFusionSupported: Bool { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">Setting a <a href="avcapturesession/sessionpreset.md">@@TOKEN_0@@</a> value provides a convenient way to configure a capture session for common use cases.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이미지 퓨전으로 사진을 촬영하려면 photo settings 객체의 <a href="avcapturephotosettings/isautodualcamerafusionenabled.md">@@TOKEN_0@@</a> 속성을 설정합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">장치가 이미지 퓨전을 지원하지 않으면 <a href="avcapturephotosettings/isautodualcamerafusionenabled.md">@@TOKEN_0@@</a> 속성을 설정해도 효과가 없습니다(즉, 해석된 <a href="avcaptureresolvedphotosettings/isdualcamerafusionenabled.md">@@TOKEN_1@@</a> 값은 항상 false입니다).</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0010:0001">**Note**: 현재 캡처 세션의 <a href="avcapturesession/sessionpreset.md">@@TOKEN_0@@</a> 속성이나 기본 캡처 장치의 <a href="avcapturedevice/activeformat.md">@@TOKEN_1@@</a> 속성이 변경되면 이 속성 값이 변경될 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">이 속성은 키-값 관찰을 지원합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0012:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avcapturephotooutput/isdualcameradualphotodeliverysupported.md">var isDualCameraDualPhotoDeliverySupported: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">듀얼 카메라 장치에서 두 카메라를 모두 사용한 동시 사진 촬영을 현재 캡처 출력이 지원하는지 여부를 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avcapturephotooutput/isdualcameradualphotodeliveryenabled.md">var isDualCameraDualPhotoDeliveryEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">듀얼 카메라 장치에서 두 카메라를 동시에 사용해 사진을 촬영하도록 캡처 파이프라인을 구성할지 지정하는 부울 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/isdualcamerafusionsupported">View on Apple Developer</a>*</span>

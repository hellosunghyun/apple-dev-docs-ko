---
source_path: "documentation/AVFoundation/avcapturedevice/isgeometricdistortioncorrectionsupported.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedevice/isgeometricdistortioncorrectionsupported"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:isgeometricdistortioncorrectionsupported:0000:0001">isGeometricDistortionCorrectionSupported</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isgeometricdistortioncorrectionsupported:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isgeometricdistortioncorrectionsupported:0002:0001">이 기기가 기하학적 왜곡 보정(geometric distortion correction)을 지원하는지 여부를 나타내는 부울 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isgeometricdistortioncorrectionsupported:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:isgeometricdistortioncorrectionsupported:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isgeometricdistortioncorrectionsupported:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isgeometricdistortioncorrectionsupported:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isgeometricdistortioncorrectionsupported:0004:0004">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var isGeometricDistortionCorrectionSupported: Bool { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">매우 넓은 시야각을 가진 기기 등에서 기하학적 왜곡 보정(GDC)의 이점이 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">GDC는 프레임 외곽의 왜곡 효과를 줄이는 대신 수평 시야의 일부를 잃습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">GDC를 사용하면 기기가 보정된 이미지를 원래 이미지 크기로 업스케일링합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avcapturedevice/isgeometricdistortioncorrectionenabled.md">var isGeometricDistortionCorrectionEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">이 기기에서 기하학적 왜곡 보정이 활성화되어 있는지 여부를 나타내는 부울 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedevice/isgeometricdistortioncorrectionsupported">View on Apple Developer</a>*</span>

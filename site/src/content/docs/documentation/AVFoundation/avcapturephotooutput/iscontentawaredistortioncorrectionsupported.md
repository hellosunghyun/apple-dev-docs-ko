---
source_path: "documentation/AVFoundation/avcapturephotooutput/iscontentawaredistortioncorrectionsupported.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/iscontentawaredistortioncorrectionsupported"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:iscontentawaredistortioncorrectionsupported:0000:0001">isContentAwareDistortionCorrectionSupported</span>

<span class="ko-segment" data-segment-id="seg:paragraph:iscontentawaredistortioncorrectionsupported:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:iscontentawaredistortioncorrectionsupported:0002:0001">현재 세션의 구성에서 콘텐츠 인식 왜곡 보정을 지원하는지 나타내는 Boolean 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:iscontentawaredistortioncorrectionsupported:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:iscontentawaredistortioncorrectionsupported:0004:0001">iOS 14.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:iscontentawaredistortioncorrectionsupported:0004:0002">iPadOS 14.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:iscontentawaredistortioncorrectionsupported:0004:0003">Mac Catalyst 14.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:iscontentawaredistortioncorrectionsupported:0004:0004">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var isContentAwareDistortionCorrectionSupported: Bool { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">A preview layer begins displaying content when you call the capture session’s <a href="avcapturesession/startrunning(">@@TOKEN_0@@</a>.md) method.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">If you associate the layer with an instance of <a href="avcapturemulticamsession.md">@@TOKEN_0@@</a>, the system guarantees that all video preview layers display content by the time the blocking call to <a href="avcapturesession/startrunning(">@@TOKEN_1@@</a>.md) or <a href="avcapturesession/commitconfiguration(">@@TOKEN_2@@</a>.md) returns.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">콘텐츠 인식 왜곡 보정은 사진의 콘텐츠를 기반으로 동작을 지능적으로 조정해 왜곡을 보정합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0004">예를 들어 이 알고리즘은 사진 중앙의 얼굴에는 보정을 적용하지 않을 수 있지만, 사진 가장자리 근처의 얼굴에는 보정을 적용할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">카메라나 형식을 전환하거나 깊이 데이터 전달을 사용하도록 설정하면 이 속성 값이 변경될 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">속성이 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_0@@</a>에서 <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_1@@</a>로 변경되면 <a href="avcapturephotooutput/iscontentawaredistortioncorrectionenabled.md">@@TOKEN_2@@</a>도 <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_3@@</a>로 되돌아갑니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">Creating a <a href="avcapturephotosettings.md">@@TOKEN_0@@</a> instance automatically assigns a unique value to this property.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcapturephotooutput/iscontentawaredistortioncorrectionenabled.md">var isContentAwareDistortionCorrectionEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">사진 렌더 파이프라인이 콘텐츠 인식 왜곡 보정을 수행할 수 있는지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcapturephotooutput/islensstabilizationduringbracketedcapturesupported.md">var isLensStabilizationDuringBracketedCaptureSupported: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">캡처 출력이 브래킷 이미지 캡처 동안 렌즈 안정화를 현재 지원하는지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avcapturephotooutput/maxbracketedcapturephotocount.md">var maxBracketedCapturePhotoCount: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">단일 브래킷 캡처에서 캡처 출력이 지원할 수 있는 최대 이미지 수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001">[var supportedFlashModes: [AVCaptureDevice.FlashMode]](avcapturephotooutput/supportedflashmodes-1n6nm.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">현재 이 캡처 출력이 지원하는 플래시 설정의 Swift 배열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avcapturephotooutput/isautoredeyereductionsupported.md">var isAutoRedEyeReductionSupported: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">캡처 출력이 자동 레드아이 감소를 현재 지원하는지 나타내는 Boolean 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/iscontentawaredistortioncorrectionsupported">View on Apple Developer</a>*</span>

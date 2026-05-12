---
source_path: "documentation/AVFoundation/avcapturephotooutput/maxbracketedcapturephotocount.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/maxbracketedcapturephotocount"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:maxbracketedcapturephotocount:0000:0001">maxBracketedCapturePhotoCount</span>

<span class="ko-segment" data-segment-id="seg:paragraph:maxbracketedcapturephotocount:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:maxbracketedcapturephotocount:0002:0001">사진 캡처 출력이 단일 브래킷 캡처에서 지원할 수 있는 최대 이미지 수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:maxbracketedcapturephotocount:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:maxbracketedcapturephotocount:0004:0001">iOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:maxbracketedcapturephotocount:0004:0002">iPadOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:maxbracketedcapturephotocount:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:maxbracketedcapturephotocount:0004:0004">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var maxBracketedCapturePhotoCount: Int { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">The property returns <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_0@@</a> if video stabilization is currently in use; otherwise <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_1@@</a>.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">캡처당 최대 사진 수는 캡처할 이미지의 크기와 형식에 따라 달라집니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0001">**Note**: 현재 캡처 세션의 <a href="avcapturesession/sessionpreset.md">@@TOKEN_0@@</a> 속성이나 기본 캡처 장치의 <a href="avcapturedevice/activeformat.md">@@TOKEN_1@@</a> 속성이 변경되면 이 속성의 값이 변경될 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0002">모든 기기와 캡처 형식이 브래킷 캡처를 지원하지는 않습니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0003">현재 장치 또는 활성 형식이 브래킷 캡처를 지원하지 않으면 이 속성의 값은 0입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">이 속성은 키-값 관찰(key-value observing)을 지원합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcapturephotooutput/iscontentawaredistortioncorrectionsupported.md">var isContentAwareDistortionCorrectionSupported: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">현재 세션의 현재 구성에서 콘텐츠 인식 왜곡 보정을 지원하는지 나타내는 불리언 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcapturephotooutput/iscontentawaredistortioncorrectionenabled.md">var isContentAwareDistortionCorrectionEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">사진 렌더링 파이프라인이 콘텐츠 인식 왜곡 보정을 수행할 수 있는지 나타내는 불리언 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avcapturephotooutput/islensstabilizationduringbracketedcapturesupported.md">var isLensStabilizationDuringBracketedCaptureSupported: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">현재 캡처 출력이 브래킷 이미지 캡처 중 렌즈 안정화를 지원하는지 나타내는 불리언 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001">[var supportedFlashModes: [AVCaptureDevice.FlashMode]](avmetadataidentifier/id3metadataband.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">이 캡처 출력이 현재 지원하는 플래시 설정의 Swift 배열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avcapturephotooutput/isautoredeyereductionsupported.md">var isAutoRedEyeReductionSupported: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">이 캡처 출력이 자동 적목 감소를 지원하는지 나타내는 불리언 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/maxbracketedcapturephotocount">View on Apple Developer</a>*</span>

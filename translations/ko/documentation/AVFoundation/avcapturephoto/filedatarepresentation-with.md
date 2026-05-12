---
source_path: "documentation/AVFoundation/avcapturephoto/filedatarepresentation-with.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturephoto/filedatarepresentation-with"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:filedatarepresentationwith:0000:0001">fileDataRepresentation(with:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:filedatarepresentationwith:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:filedatarepresentationwith:0002:0001">사진 데이터의 맞춤형 표현을 가져옵니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:filedatarepresentationwith:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:filedatarepresentationwith:0004:0001">iOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:filedatarepresentationwith:0004:0002">iPadOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:filedatarepresentationwith:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:filedatarepresentationwith:0004:0004">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func fileDataRepresentation(with customizer: any AVCapturePhotoFileDataRepresentationCustomizer) -> Data?
```

## <span class="ko-segment" data-segment-id="seg:heading:mentions:0007:0001">Mentions</span>

- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0001"><a href="capturing-photos-in-raw-and-apple-proraw-formats.md">Capturing photos in RAW and Apple ProRAW formats</a></span>
- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0002"><a href="configuring-camera-capture-to-collect-a-portrait-effects-matte.md">Configuring camera capture to collect a Portrait Effects matte</a></span>

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0009:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0010:0001">사진의 데이터 표현입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>customizer</code>: 반환된 메타데이터, 이미지 썸네일 또는 깊이 데이터를 사용자 지정하는 객체입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcapturephotofiledatarepresentationcustomizer.md">protocol AVCapturePhotoFileDataRepresentationCustomizer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">사진 데이터를 패키징하는 방식을 사용자 지정하기 위해 구현할 메서드를 정의하는 프로토콜입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avcapturephoto/filedatarepresentation.md">func fileDataRepresentation() -&gt; Data?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">사진과 첨부 항목의 플랫 데이터 표현을 생성해 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avcapturephoto/cgimagerepresentation.md">func cgImageRepresentation() -&gt; CGImage?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">캡처된 사진의 기본 이미지를 Core Graphics 이미지 객체로 추출해 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avcapturephoto/previewcgimagerepresentation.md">func previewCGImageRepresentation() -&gt; CGImage?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">캡처된 사진의 미리보기 이미지를 Core Graphics 이미지 객체로 추출해 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001">[func fileDataRepresentation(withReplacementMetadata: [String : Any]?, replacementEmbeddedThumbnailPhotoFormat: [String : Any]?, replacementEmbeddedThumbnailPixelBuffer: CVPixelBuffer?, replacementDepthData: AVDepthData?) -&gt; Data?](avfiletype/au.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">일부 또는 모든 첨부 항목에 대해 지정한 교체 값을 사용해 사진의 플랫 데이터 표현을 생성해 반환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturephoto/filedatarepresentation(with:">Apple Developer에서 보기</a>)*</span>

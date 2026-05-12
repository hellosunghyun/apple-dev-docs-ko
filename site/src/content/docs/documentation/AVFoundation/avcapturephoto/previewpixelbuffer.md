---
source_path: "documentation/AVFoundation/avcapturephoto/previewpixelbuffer.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturephoto/previewpixelbuffer"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:previewpixelbuffer:0000:0001">previewPixelBuffer</span>

<span class="ko-segment" data-segment-id="seg:paragraph:previewpixelbuffer:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:previewpixelbuffer:0002:0001">요청한 경우 미리보기 크기 버전의 사진 픽셀 데이터입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:previewpixelbuffer:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:previewpixelbuffer:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:previewpixelbuffer:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:previewpixelbuffer:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:previewpixelbuffer:0004:0004">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var previewPixelBuffer: CVPixelBuffer? { get }
```

## <span class="ko-segment" data-segment-id="seg:heading:mentions:0007:0001">Mentions</span>

- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0001"><a href="capturing-thumbnail-and-preview-images.md">Capturing thumbnail and preview images</a></span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">캡처를 요청할 때 사진 설정의 <a href="avcapturephotosettings/previewphotoformat.md">@@TOKEN_0@@</a> 속성을 지정해 미리보기 이미지를 요청했다면, 이 property를 통해 결과 미리보기 이미지의 픽셀 데이터에 접근할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">픽셀 버퍼에는 올바른 표시를 위해 필요한 최소 첨부 항목만 포함됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0003">미리보기 이미지를 요청하지 않은 경우 이 property의 값은 <code>nil</code>입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001">[var embeddedThumbnailPhotoFormat: [String : Any]?](avcapturephoto/embeddedthumbnailphotoformat.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">캡처된 사진에 동반되는 미리보기 크기 이미지의 데이터 형식을 설명하는 딕셔너리입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturephoto/previewpixelbuffer">View on Apple Developer</a>*</span>

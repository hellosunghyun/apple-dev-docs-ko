---
source_path: "documentation/AVFoundation/avcapturephoto/pixelbuffer.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturephoto/pixelbuffer"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:pixelbuffer:0000:0001">pixelBuffer</span>

<span class="ko-segment" data-segment-id="seg:paragraph:pixelbuffer:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:pixelbuffer:0002:0001">요청한 경우 사진의 비압축 또는 RAW 이미지 샘플 버퍼입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:pixelbuffer:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:pixelbuffer:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:pixelbuffer:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:pixelbuffer:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:pixelbuffer:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:pixelbuffer:0004:0005">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var pixelBuffer: CVPixelBuffer? { get }
```

## <span class="ko-segment" data-segment-id="seg:heading:mentions:0007:0001">Mentions</span>

- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0001"><a href="capturing-uncompressed-image-data.md">Capturing uncompressed image data</a></span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">A capture device’s <a href="avcapturedevice/focuspointofinterest.md">@@TOKEN_0@@</a> and <a href="avcapturedevice/exposurepointofinterest.md">@@TOKEN_1@@</a> properties provide a <a href="https://developer.apple.com/documentation/CoreFoundation/CGPoint">@@TOKEN_2@@</a> value where <code>{0,0}</code> represents the top-left and <code>{1,1}</code> represents the bottom-right of the unrotated image.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">The system takes the layer’s frame size and its <a href="avcapturevideopreviewlayer/videogravity.md">@@TOKEN_0@@</a> into consideration when making the conversion.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0002">압축된 이미지 데이터를 얻으려면 <a href="avcapturephoto/filedatarepresentation(">@@TOKEN_0@@</a>.md) 또는 <a href="avcapturephoto/cgimagerepresentation(">@@TOKEN_1@@</a>.md) 메서드를 사용합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0012:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avcapturephoto/israwphoto.md">var isRawPhoto: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">이 사진 객체에 RAW 형식 데이터가 포함되어 있는지 나타내는 Boolean 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturephoto/pixelbuffer">View on Apple Developer</a>*</span>

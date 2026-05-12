---
source_path: "documentation/AVFoundation/avcapturephoto/timestamp.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturephoto/timestamp"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:timestamp:0000:0001">timestamp</span>

<span class="ko-segment" data-segment-id="seg:paragraph:timestamp:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:timestamp:0002:0001">이미지가 캡처된 시점입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:timestamp:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:timestamp:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:timestamp:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:timestamp:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:timestamp:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:timestamp:0004:0005">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var timestamp: CMTime { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">You specify a file format when creating capture settings with the <a href="avcapturephotosettings/init(rawpixelformattype:rawfiletype:processedformat:processedfiletype:">@@TOKEN_0@@</a>.md) initializer.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avcapturephoto/resolvedsettings.md">var resolvedSettings: AVCaptureResolvedPhotoSettings</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">이 사진 캡처 요청에 사용된 설정 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcapturephoto/photocount.md">var photoCount: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">같은 캡처 요청의 다른 결과에서 기준으로 한 이 사진 캡처의 1 기반 인덱스입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturephoto/timestamp">View on Apple Developer</a>*</span>

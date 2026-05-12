---
source_path: "documentation/AVFoundation/avplayeritem/preferredmaximumresolution.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avplayeritem/preferredmaximumresolution"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:preferredmaximumresolution:0000:0001">preferredMaximumResolution</span>

<span class="ko-segment" data-segment-id="seg:paragraph:preferredmaximumresolution:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:preferredmaximumresolution:0002:0001">다운로드할 비디오의 선호 최대 해상도입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:preferredmaximumresolution:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:preferredmaximumresolution:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:preferredmaximumresolution:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:preferredmaximumresolution:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:preferredmaximumresolution:0004:0004">macOS 10.13+</span>
- <span class="ko-segment" data-segment-id="seg:list:preferredmaximumresolution:0004:0005">tvOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:preferredmaximumresolution:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
nonisolated
var preferredMaximumResolution: CGSize { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">기본값은 <a href="https://developer.apple.com/documentation/CoreGraphics/CGSizeZero">@@TOKEN_0@@</a>이며, 비디오 해상도에 제한이 없음을 나타냅니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">다른 모든 값은 선호되는 최대 비디오 해상도를 나타냅니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">이 속성은 HTTP Live Streaming 에셋에만 적용됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avplayeritem/presentationsize.md">var presentationSize: CGSize</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">항목의 시각적 영역이 플레이어에 의해 표시되는 크기입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avplayeritem/videoaperturemode.md">var videoApertureMode: AVVideoApertureMode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">재생 중에 적용할 비디오 aperture 모드입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avvideoaperturemode.md">struct AVVideoApertureMode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">비디오의 크기 조정 또는 잘림 방식을 설명하는 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avplayeritem/preferredmaximumresolution">View on Apple Developer</a>*</span>

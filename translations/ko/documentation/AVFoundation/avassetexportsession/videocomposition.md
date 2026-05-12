---
source_path: "documentation/AVFoundation/avassetexportsession/videocomposition.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetexportsession/videocomposition"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:videocomposition:0000:0001">videoComposition</span>

<span class="ko-segment" data-segment-id="seg:paragraph:videocomposition:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:videocomposition:0002:0001">비디오 프레임을 합성하는 방법을 제공하는 선택적 객체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:videocomposition:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:videocomposition:0004:0001">iOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:videocomposition:0004:0002">iPadOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:videocomposition:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:videocomposition:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:videocomposition:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:videocomposition:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
@NSCopying
var videoComposition: AVVideoComposition? { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">By default, <code>AVCaptureStillImageOutput</code> emits images with the same dimensions as its source <a href="avcapturedevice.md">@@TOKEN_1@@</a> instance’s <code>activeFormat.formatDescription</code>.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이 속성은 키-값 관찰이 가능합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="avassetexportsession/customvideocompositor.md">var customVideoCompositor: (any AVVideoCompositing)?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">비디오 프레임을 합성할 때 사용할 선택적 사용자 지정 객체입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetexportsession/videocomposition">View on Apple Developer</a>*</span>

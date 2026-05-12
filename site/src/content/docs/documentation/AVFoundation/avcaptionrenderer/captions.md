---
source_path: "documentation/AVFoundation/avcaptionrenderer/captions.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcaptionrenderer/captions"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:captions:0000:0001">captions</span>

<span class="ko-segment" data-segment-id="seg:paragraph:captions:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:captions:0002:0001">렌더링할 캡션입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:captions:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:captions:0004:0001">iOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:captions:0004:0002">iPadOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:captions:0004:0003">Mac Catalyst 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:captions:0004:0004">macOS 12.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var captions: [AVCaption] { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">You can set this property to <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_0@@</a> for a video connection if <a href="avcaptureconnection/iscameraintrinsicmatrixdeliverysupported.md">@@TOKEN_1@@</a> is <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_2@@</a>, and only before calling the <a href="avcapturesession.md">@@TOKEN_3@@</a> <a href="avcapturesession/startrunning(">@@TOKEN_4@@</a>.md) method.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avcaptionrenderer/bounds.md">var bounds: CGRect</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">캡션 장면의 그리기 경계입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcaptionrenderer/captions">View on Apple Developer</a>*</span>

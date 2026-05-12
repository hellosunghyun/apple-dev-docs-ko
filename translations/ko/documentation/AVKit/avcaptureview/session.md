---
source_path: "documentation/AVKit/avcaptureview/session.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avkit/avcaptureview/session"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:session:0000:0001">session</span>

<span class="ko-segment" data-segment-id="seg:paragraph:session:0001:0001">**Framework**: AVKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:session:0002:0001">뷰와 연결된 캡처 세션입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:session:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:session:0004:0001">macOS 10.10+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var session: AVCaptureSession? { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">The default value is <code>true</code>.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002"><a href="avcaptureview/setsession(_:showvideopreview:showaudiopreview:">@@TOKEN_0@@</a>.md) 메서드를 사용해 사용자 지정 캡처 세션을 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">캡처 세션을 수정하면 뷰의 시각적 표시가 변경됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avcaptureview/setsession(_:showvideopreview:showaudiopreview:">func setSession(AVCaptureSession?, showVideoPreview: Bool, showAudioPreview: Bool)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">뷰의 캡처 세션을 설정합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">*<a href="https://developer.apple.com/documentation/avkit/avcaptureview/session">View on Apple Developer</a>*</span>

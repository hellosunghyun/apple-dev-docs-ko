---
source_path: "documentation/AVKit/avplayerview/allowsvideoframeanalysis.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avkit/avplayerview/allowsvideoframeanalysis"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:allowsvideoframeanalysis:0000:0001">allowsVideoFrameAnalysis</span>

<span class="ko-segment" data-segment-id="seg:paragraph:allowsvideoframeanalysis:0001:0001">**Framework**: AVKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:allowsvideoframeanalysis:0002:0001">비디오 프레임 분석을 수행할지 여부를 나타내는 Boolean 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:allowsvideoframeanalysis:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:allowsvideoframeanalysis:0004:0001">macOS 13.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var allowsVideoFrameAnalysis: Bool { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">This property is currently supported only with a <a href="avplayerview/controlsstyle.md">@@TOKEN_0@@</a> of <a href="avplayerviewcontrolsstyle/floating.md">@@TOKEN_1@@</a> or <a href="avplayerviewcontrolsstyle/inline.md">@@TOKEN_2@@</a>.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">개체를 찾으면 사용자는 길게 눌러 컨텍스트 메뉴를 표시하고 해당 개체와 상호작용할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">The default value is <code>false</code>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="avplayerview/videoframeanalysistypes.md">var videoFrameAnalysisTypes: AVVideoFrameAnalysisType</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0002"><a href="avvideoframeanalysistype.md">struct AVVideoFrameAnalysisType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">플레이어 뷰 컨트롤러가 일시 정지된 비디오 프레임에서 수행할 수 있는 분석 유형을 정의하는 상수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">*<a href="https://developer.apple.com/documentation/avkit/avplayerview/allowsvideoframeanalysis">View on Apple Developer</a>*</span>

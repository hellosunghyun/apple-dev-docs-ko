---
source_path: "documentation/AVKit/avplayerviewcontroller/contentoverlayview.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avkit/avplayerviewcontroller/contentoverlayview"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:contentoverlayview:0000:0001">contentOverlayView</span>

<span class="ko-segment" data-segment-id="seg:paragraph:contentoverlayview:0001:0001">**Framework**: AVKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:contentoverlayview:0002:0001">비디오 콘텐츠와 재생 컨트롤 사이에 표시되는 뷰입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:contentoverlayview:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:contentoverlayview:0004:0001">iOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:contentoverlayview:0004:0002">iPadOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:contentoverlayview:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:contentoverlayview:0004:0004">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:contentoverlayview:0004:0005">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var contentOverlayView: UIView? { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">로고나 워터마크 같은 비대화형 사용자 지정 뷰는 콘텐츠 오버레이 뷰를 사용하여 비디오 콘텐츠와 컨트롤 사이에 추가할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avplayerviewcontroller/showsplaybackcontrols.md">var showsPlaybackControls: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">플레이어 뷰 컨트롤러가 재생 컨트롤을 표시하는지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avplayerviewcontroller/videogravity.md">var videoGravity: AVLayerVideoGravity</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">뷰 컨트롤러의 뷰 경계 내에서 비디오 표시 방식을 지정하는 문자열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avplayerviewcontroller/videobounds.md">var videoBounds: CGRect</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">뷰 컨트롤러 뷰의 경계 내에서 비디오 이미지의 크기와 위치입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avplayerviewcontroller/showstimecodes.md">var showsTimecodes: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">사용 가능한 경우 플레이어 뷰가 타임코드를 표시하는지 결정하는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avplayerviewcontroller/appliespreferreddisplaycriteriaautomatically.md">var appliesPreferredDisplayCriteriaAutomatically: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">뷰 컨트롤러가 현재 재생 중인 에셋과 일치하도록 화면의 표시 기준을 자동으로 설정하는지 나타내는 Boolean 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/avkit/avplayerviewcontroller/contentoverlayview">View on Apple Developer</a>*</span>

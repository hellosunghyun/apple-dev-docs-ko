---
source_path: "documentation/AVKit/avplayerviewcontroller/transportbarcustommenuitems.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avkit/avplayerviewcontroller/transportbarcustommenuitems"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:transportbarcustommenuitems:0000:0001">transportBarCustomMenuItems</span>

<span class="ko-segment" data-segment-id="seg:paragraph:transportbarcustommenuitems:0001:0001">**Framework**: AVKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:transportbarcustommenuitems:0002:0001">기본 플레이어 컨트롤과 함께 표시할 액션과 메뉴의 배열입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:transportbarcustommenuitems:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:transportbarcustommenuitems:0004:0001">tvOS 15.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var transportBarCustomMenuItems: [UIMenuElement] { get set }
```

## <span class="ko-segment" data-segment-id="seg:heading:mentions:0007:0001">Mentions</span>

- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0001"><a href="customizing-the-tvos-playback-experience.md">Customizing the tvOS Playback Experience</a></span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">이 속성을 사용하여 transport bar에 사용자 지정 팝업 메뉴를 표시합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">이 속성은 <a href="https://developer.apple.com/documentation/UIKit/UIAction">@@TOKEN_0@@</a> 및 <a href="https://developer.apple.com/documentation/UIKit/UIMenu">@@TOKEN_1@@</a> 유형의 메뉴 요소만 지원하며, 한 단계 수준의 하위 메뉴를 인라인으로 표시합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avplayerviewcontroller/playbackcontrolsincludetransportbar.md">var playbackControlsIncludeTransportBar: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">플레이어가 transport bar와 관련 컨트롤을 표시하는지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avplayerviewcontroller/playbackcontrolsincludeinfoviews.md">var playbackControlsIncludeInfoViews: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">사용자가 요청할 때 플레이어가 비디오 메타데이터, 탐색 마커 및 재생 설정 뷰를 표시하는지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avplayerviewcontroller/transportbarincludestitleview.md">var transportBarIncludesTitleView: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">플레이어 사용자 인터페이스에서 scrubber 위에 제목 뷰를 표시하는지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001">[var customInfoViewControllers: [UIViewController]](bnnsfiltercreatefusedlayer(_:_:_:_:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">플레이어 사용자 인터페이스에서 콘텐츠 탭으로 표시할 뷰 컨트롤러의 배열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001">[var infoViewActions: [UIAction]!](bnnsfusedfilterapplybatch(_:_:_:_:_:_:_:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">Info content view에 표시할 액션의 배열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001">[var contextualActions: [UIAction]](bnnsfusedfilterapplymultiinputbatch(_:_:_:_:_:_:_:_:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">재생 중 상황에 따라 표시되는 액션 컨트롤의 배열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avplayerviewcontroller/customoverlayviewcontroller.md">var customOverlayViewController: UIViewController?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">플레이어 뷰 위에 사용자 지정 콘텐츠를 표시하는 뷰 컨트롤러입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avplayerviewcontroller/unobscuredcontentguide.md">var unobscuredContentGuide: UILayoutGuide</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">고정 위치 재생 컨트롤이 표시될 때 가려지지 않는 영역을 나타내는 레이아웃 가이드입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avplayerviewcontroller/custominfoviewcontroller.md">var customInfoViewController: UIViewController?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">시스템 제공 정보 및 설정 패널과 함께 클라이언트별 콘텐츠와 컨트롤을 제공하는 뷰 컨트롤러입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">*<a href="https://developer.apple.com/documentation/avkit/avplayerviewcontroller/transportbarcustommenuitems">View on Apple Developer</a>*</span>

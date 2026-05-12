---
source_path: "documentation/AVKit/avplayerviewcontrolsstyle.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avkit/avplayerviewcontrolsstyle"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avplayerviewcontrolsstyle:0000:0001">AVPlayerViewControlsStyle</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avplayerviewcontrolsstyle:0001:0001">**Framework**: AVKit **Kind**: enum</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avplayerviewcontrolsstyle:0002:0001">뷰가 표시하는 사용자 인터페이스 컨트롤을 나타내는 상수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avplayerviewcontrolsstyle:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avplayerviewcontrolsstyle:0004:0001">macOS 10.9+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
enum AVPlayerViewControlsStyle
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:controls-styles:0008:0001">컨트롤 스타일</span>

- <span class="ko-segment" data-segment-id="seg:list:controls-styles:0009:0001"><a href="avplayerviewcontrolsstyle/none.md">AVPlayerViewControlsStyle.none</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:controls-styles:0010:0001">이 뷰는 재생 컨트롤을 표시하지 않습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:controls-styles:0011:0001"><a href="avplayerviewcontrolsstyle/inline.md">AVPlayerViewControlsStyle.inline</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:controls-styles:0012:0001">이 뷰는 뷰의 하단 가장자리를 따라 바 형태로 재생 컨트롤을 표시합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:controls-styles:0013:0001"><a href="avplayerviewcontrolsstyle/floating.md">AVPlayerViewControlsStyle.floating</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:controls-styles:0014:0001">이 뷰는 비디오 콘텐츠 위의 떠 있는 창에 재생 컨트롤을 표시합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:controls-styles:0015:0001"><a href="avplayerviewcontrolsstyle/minimal.md">AVPlayerViewControlsStyle.minimal</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:controls-styles:0016:0001">이 뷰는 재생 및 일시 중지를 위한 기본 컨트롤을 제공합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:controls-styles:0017:0001"><a href="avplayerviewcontrolsstyle/default.md">static var @@TOKEN_0@@: AVPlayerViewControlsStyle</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:controls-styles:0018:0001">뷰의 기본 컨트롤 스타일입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0019:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0020:0001"><a href="avplayerviewcontrolsstyle/init(rawvalue:">init?(rawValue: Int)</a>.md)</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0021:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0022:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0001"><a href="../Swift/BitwiseCopyable.md">BitwiseCopyable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0002"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0003"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0004"><a href="../Swift/RawRepresentable.md">RawRepresentable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0005"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0006"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0024:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="avplayerview/controlsstyle.md">var controlsStyle: AVPlayerViewControlsStyle</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">플레이어 뷰의 컨트롤 스타일입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="avplayerview/showsframesteppingbuttons.md">var showsFrameSteppingButtons: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">플레이어 뷰가 프레임 스테핑 버튼을 표시할지 여부를 결정하는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="avplayerview/showssharingservicebutton.md">var showsSharingServiceButton: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">플레이어 뷰가 공유 서비스 버튼을 표시할지 여부를 결정하는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001"><a href="avplayerview/showsfullscreentogglebutton.md">var showsFullScreenToggleButton: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">플레이어 뷰가 전체 화면 전환 버튼을 표시할지 여부를 결정하는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0033:0001"><a href="avplayerview/showstimecodes.md">var showsTimecodes: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">가능한 경우 플레이어 뷰가 시간 코드를 표시할지 여부를 결정하는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0035:0001"><a href="avplayerview/contentoverlayview.md">var contentOverlayView: NSView?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0036:0001">비디오 콘텐츠와 컨트롤 사이에 추가 사용자 지정 뷰를 추가하는 뷰입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0037:0001"><a href="avplayerview/actionpopupbuttonmenu.md">var actionPopUpButtonMenu: NSMenu?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0038:0001">플레이어 뷰에서 표시하는 액션 팝업 버튼 메뉴입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0039:0001"><a href="avplayerview/updatesnowplayinginfocenter.md">var updatesNowPlayingInfoCenter: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0040:0001">플레이어 뷰 컨트롤러가 Now Playing 정보 센터를 업데이트하는지 나타내는 Boolean 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0042:0001">*<a href="https://developer.apple.com/documentation/avkit/avplayerviewcontrolsstyle">View on Apple Developer</a>*</span>

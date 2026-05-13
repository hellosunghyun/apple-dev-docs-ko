---
source_path: "documentation/AVKit/avplayerviewcontroller/infoviewactions.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avkit/avplayerviewcontroller/infoviewactions"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:infoviewactions:0000:0001">infoViewActions</span>

<span class="ko-segment" data-segment-id="seg:paragraph:infoviewactions:0001:0001">**Framework**: AVKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:infoviewactions:0002:0001">An array of actions to present in the Info content view.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:infoviewactions:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:infoviewactions:0004:0001">tvOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:infoviewactions:0004:0002">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var infoViewActions: [UIAction]! { get set }
```

## <span class="ko-segment" data-segment-id="seg:heading:mentions:0007:0001">Mentions</span>

- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0001"><a href="adopting-the-system-player-interface-in-visionos.md">Adopting the system player interface in visionOS</a></span>
- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0002"><a href="customizing-the-tvos-playback-experience.md">Customizing the tvOS Playback Experience</a></span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">The Info content view can display up to two custom action controls along its trailing edge.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">The default value of this property is a single action that plays the current media from the beginning when tapped.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avplayerviewcontroller/playbackcontrolsincludetransportbar.md">var playbackControlsIncludeTransportBar: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">A Boolean value that indicates whether the player shows the transport bar and related controls.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avplayerviewcontroller/playbackcontrolsincludeinfoviews.md">var playbackControlsIncludeInfoViews: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">A Boolean value that indicates whether the player presents video metadata, navigation markers, and playback settings views when the user requests them.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avplayerviewcontroller/transportbarincludestitleview.md">var transportBarIncludesTitleView: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">A Boolean value that indicates whether the player user interface shows the title view above the scrubber.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001">[var transportBarCustomMenuItems: [UIMenuElement]](avplayerviewcontroller/transportbarcustommenuitems.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">An array of actions and menus to display with the default player controls.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avassetresourceloadingrequest/finishloading(with:data:redirect:">func finishLoading(with: URLResponse?, data: Data?, redirect: URLRequest?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">An array of view controllers to display as content tabs in the player user interface.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001">[var contextualActions: [UIAction]](avplayerviewcontroller/contextualactions.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">An array of action controls to present contextually during playback.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avplayerviewcontroller/customoverlayviewcontroller.md">var customOverlayViewController: UIViewController?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">A view controller that presents custom content over the player view.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avplayerviewcontroller/unobscuredcontentguide.md">var unobscuredContentGuide: UILayoutGuide</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">A layout guide that represents an area that fixed-position playback controls don’t obscure when visible.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avplayerviewcontroller/custominfoviewcontroller.md">var customInfoViewController: UIViewController?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">A view controller that provides client-specific content and controls alongside system-provided information and settings panels.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">*<a href="https://developer.apple.com/documentation/avkit/avplayerviewcontroller/infoviewactions">View on Apple Developer</a>*</span>

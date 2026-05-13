---
source_path: "documentation/AVKit/avplayerviewdelegate/playerviewdidexitfullscreen.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avkit/avplayerviewdelegate/playerviewdidexitfullscreen"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:playerviewdidexitfullscreen:0000:0001">playerViewDidExitFullScreen(_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:playerviewdidexitfullscreen:0001:0001">**Framework**: AVKit **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:playerviewdidexitfullscreen:0002:0001">플레이어 뷰가 전체 화면 모드를 종료했음을 대리자에게 알립니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:playerviewdidexitfullscreen:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:playerviewdidexitfullscreen:0004:0001">macOS 12.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
optional func playerViewDidExitFullScreen(_ playerView: AVPlayerView)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>playerView</code>: 플레이어 뷰입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avplayerviewdelegate/playerviewwillenterfullscreen(_:">func playerViewWillEnterFullScreen(AVPlayerView)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">플레이어 뷰가 곧 전체 화면 모드로 전환될 것임을 대리자에게 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avplayerviewdelegate/playerviewdidenterfullscreen(_:">func playerViewDidEnterFullScreen(AVPlayerView)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">플레이어 뷰가 전체 화면 모드로 전환했음을 대리자에게 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avplayerviewdelegate/playerviewwillexitfullscreen(_:">func playerViewWillExitFullScreen(AVPlayerView)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">플레이어 뷰가 전체 화면 모드에서 나갈 예정임을 대리자에게 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avplayerviewdelegate/playerview(_:restoreuserinterfaceforfullscreenexitwithcompletionhandler:">func playerView(AVPlayerView, restoreUserInterfaceForFullScreenExitWithCompletionHandler: (Bool) -&gt; Void)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">전체 화면 모드를 종료할 때 앱의 사용자 인터페이스를 복원하도록 대리자에게 지시합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avkit/avplayerviewdelegate/playerviewdidexitfullscreen(_:">View on Apple Developer</a>)*</span>

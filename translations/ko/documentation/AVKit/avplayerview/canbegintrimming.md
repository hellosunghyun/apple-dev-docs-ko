---
source_path: "documentation/AVKit/avplayerview/canbegintrimming.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avkit/avplayerview/canbegintrimming"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:canbegintrimming:0000:0001">canBeginTrimming</span>

<span class="ko-segment" data-segment-id="seg:paragraph:canbegintrimming:0001:0001">**Framework**: AVKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:canbegintrimming:0002:0001">A Boolean value that indicates whether the player view can begin trimming.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:canbegintrimming:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:canbegintrimming:0004:0001">macOS 10.9+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var canBeginTrimming: Bool { get }
```

## <span class="ko-segment" data-segment-id="seg:heading:mentions:0007:0001">Mentions</span>

- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0001"><a href="implementing-trimming-in-a-macos-player.md">Implementing Trimming in a macOS Player</a></span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">Before calling <a href="avplayerview/begintrimming(completionhandler:">@@TOKEN_0@@</a>.md), check the value of this property to determine whether the player view and current media support trimming.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">Auto exposure defaults include <a href="avframeraterange/minframerate.md">@@TOKEN_0@@</a>, <a href="avframeraterange/maxframerate.md">@@TOKEN_1@@</a>, and <a href="avcapturedevice/format/maxexposureduration.md">@@TOKEN_2@@</a>.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">If you’re presenting a menu item to initiate trimming, a good place to perform this check is in the <a href="https://developer.apple.com/documentation/AppKit/NSDocument/validateUserInterfaceItem(_:">@@TOKEN_0@@</a>) method of <a href="https://developer.apple.com/documentation/AppKit/NSDocument">@@TOKEN_1@@</a>:</span>

```swift
override func validateUserInterfaceItem(_ item: NSValidatedUserInterfaceItem) -> Bool {
    if item.action == #selector(beginTrimming) {
        return playerView.canBeginTrimming
    }
    return super.validateUserInterfaceItem(item)
}
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avplayerview/begintrimming(completionhandler:">func beginTrimming(completionHandler: ((AVPlayerViewTrimResult) -&gt; Void)?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">Puts the player view into trimming mode.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avplayerviewtrimresult.md">enum AVPlayerViewTrimResult</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">Constants that specify an action a user takes when trimming media in a player view.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avkit/avplayerview/canbegintrimming">View on Apple Developer</a>*</span>

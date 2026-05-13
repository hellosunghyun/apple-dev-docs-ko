---
source_path: "documentation/AVKit/avplayerviewcontrollerdelegate/playerviewcontroller-willtransitiontovisibilityoftransportbarwith.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avkit/avplayerviewcontrollerdelegate/playerviewcontroller-willtransitiontovisibilityoftransportbarwith"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:playerviewcontrollerwilltransitiontovisibilityoftransportbarwith:0000:0001">playerViewController(_:willTransitionToVisibilityOfTransportBar:with:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:playerviewcontrollerwilltransitiontovisibilityoftransportbarwith:0001:0001">**Framework**: AVKit **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:playerviewcontrollerwilltransitiontovisibilityoftransportbarwith:0002:0001">Tells the delegate when the transport bar’s visibility is about to change.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:playerviewcontrollerwilltransitiontovisibilityoftransportbarwith:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:playerviewcontrollerwilltransitiontovisibilityoftransportbarwith:0004:0001">tvOS 11.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
optional func playerViewController(_ playerViewController: AVPlayerViewController, willTransitionToVisibilityOfTransportBar visible: Bool, with coordinator: any AVPlayerViewControllerAnimationCoordinator)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>playerViewController</code>: The player view controller.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>visible</code>: The transport bar’s new visibility.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0003"><code>coordinator</code>: The animation coordinator to use to synchronize animations with the transport bar visibility.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avplayerviewcontrolleranimationcoordinator.md">protocol AVPlayerViewControllerAnimationCoordinator</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">A protocol that defines the methods to implement to synchronize animations with playback controls’ visibility animation.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">*<a href="https://developer.apple.com/documentation/avkit/avplayerviewcontrollerdelegate/playerviewcontroller(_:willtransitiontovisibilityoftransportbar:with:">View on Apple Developer</a>)*</span>

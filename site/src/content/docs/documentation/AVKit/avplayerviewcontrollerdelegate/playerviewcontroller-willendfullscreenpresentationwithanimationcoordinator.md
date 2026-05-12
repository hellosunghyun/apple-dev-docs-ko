---
source_path: "documentation/AVKit/avplayerviewcontrollerdelegate/playerviewcontroller-willendfullscreenpresentationwithanimationcoordinator.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avkit/avplayerviewcontrollerdelegate/playerviewcontroller-willendfullscreenpresentationwithanimationcoordinator"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:playerviewcontrollerwillendfullscreenpresentationwithanimationcoordinator:0000:0001">playerViewController(_:willEndFullScreenPresentationWithAnimationCoordinator:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:playerviewcontrollerwillendfullscreenpresentationwithanimationcoordinator:0001:0001">**Framework**: AVKit **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:playerviewcontrollerwillendfullscreenpresentationwithanimationcoordinator:0002:0001">플레이어 뷰 컨트롤러가 곧 전체 화면 표시를 종료할 때 delegate에 알립니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:playerviewcontrollerwillendfullscreenpresentationwithanimationcoordinator:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:playerviewcontrollerwillendfullscreenpresentationwithanimationcoordinator:0004:0001">iOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:playerviewcontrollerwillendfullscreenpresentationwithanimationcoordinator:0004:0002">iPadOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:playerviewcontrollerwillendfullscreenpresentationwithanimationcoordinator:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:playerviewcontrollerwillendfullscreenpresentationwithanimationcoordinator:0004:0004">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
optional func playerViewController(_ playerViewController: AVPlayerViewController, willEndFullScreenPresentationWithAnimationCoordinator coordinator: any UIViewControllerTransitionCoordinator)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>filter</code>: The filter to apply.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>batch_size</code>: The number of input-output pairs.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avplayerviewcontrollerdelegate/playerviewcontroller(_:willbeginfullscreenpresentationwithanimationcoordinator:">func playerViewController(AVPlayerViewController, willBeginFullScreenPresentationWithAnimationCoordinator: any UIViewControllerTransitionCoordinator)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">플레이어 뷰 컨트롤러가 곧 전체 화면 표시를 시작할 때 delegate에 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avplayerviewcontrollerdelegate/playerviewcontroller(_:restoreuserinterfaceforfullscreenexitwithcompletionhandler:">func playerViewController(AVPlayerViewController, restoreUserInterfaceForFullScreenExitWithCompletionHandler: (Bool) -&gt; Void)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">전체 화면 표시에서 복귀한 후 앱의 사용자 인터페이스를 복원하도록 delegate에 알립니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/avkit/avplayerviewcontrollerdelegate/playerviewcontroller(_:willendfullscreenpresentationwithanimationcoordinator:">View on Apple Developer</a>)*</span>

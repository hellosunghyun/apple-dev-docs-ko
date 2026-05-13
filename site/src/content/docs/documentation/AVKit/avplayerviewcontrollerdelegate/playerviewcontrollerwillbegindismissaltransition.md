---
source_path: "documentation/AVKit/avplayerviewcontrollerdelegate/playerviewcontrollerwillbegindismissaltransition.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avkit/avplayerviewcontrollerdelegate/playerviewcontrollerwillbegindismissaltransition"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:playerviewcontrollerwillbegindismissaltransition:0000:0001">playerViewControllerWillBeginDismissalTransition(_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:playerviewcontrollerwillbegindismissaltransition:0001:0001">**Framework**: AVKit **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:playerviewcontrollerwillbegindismissaltransition:0002:0001">Tells the delegate when the player view controller is about to start its dismissal transition.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:playerviewcontrollerwillbegindismissaltransition:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:playerviewcontrollerwillbegindismissaltransition:0004:0001">tvOS 11.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
optional func playerViewControllerWillBeginDismissalTransition(_ playerViewController: AVPlayerViewController)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>playerViewController</code>: The player view controller.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avcapturedevice/setcinematicvideofixedfocus(at:focusmode:">func setCinematicVideoFixedFocus(at: CGPoint, focusMode: AVCaptureDevice.CinematicVideoFocusMode)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">Asks the delegate object whether the player view controller dismisses itself upon request.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001">[var audioSettings: [String : Any]!](avcapturedevice/setcinematicvideotrackingfocus(at:focusmode:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">세션에서 작성할 수 있는 파일 유형을 포함하는 배열입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">세션이 내보내기 작업을 병렬화할 수 있는지 나타내는 부울 값입니다.</span>

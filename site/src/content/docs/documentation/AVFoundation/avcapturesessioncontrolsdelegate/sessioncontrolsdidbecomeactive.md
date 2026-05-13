---
source_path: "documentation/AVFoundation/avcapturesessioncontrolsdelegate/sessioncontrolsdidbecomeactive.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturesessioncontrolsdelegate/sessioncontrolsdidbecomeactive"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sessioncontrolsdidbecomeactive:0000:0001">sessionControlsDidBecomeActive(_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sessioncontrolsdidbecomeactive:0001:0001">**Framework**: AVFoundation **Kind**: method **Required**: Yes</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sessioncontrolsdidbecomeactive:0002:0001">캡처 세션의 컨트롤이 활성화되어 상호작용이 가능해질 때 델리게이트에 알립니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sessioncontrolsdidbecomeactive:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:sessioncontrolsdidbecomeactive:0004:0001">iOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sessioncontrolsdidbecomeactive:0004:0002">iPadOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sessioncontrolsdidbecomeactive:0004:0003">Mac Catalyst 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sessioncontrolsdidbecomeactive:0004:0004">macOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sessioncontrolsdidbecomeactive:0004:0005">tvOS 18.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func sessionControlsDidBecomeActive(_ session: AVCaptureSession)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>session</code>: 활성 컨트롤이 있는 캡처 세션입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avcapturesessioncontrolsdelegate/sessioncontrolswillenterfullscreenappearance(_:">func sessionControlsWillEnterFullscreenAppearance(AVCaptureSession)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">캡처 세션의 컨트롤이 곧 전체 화면 모양으로 전환될 때 델리게이트에 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcapturesessioncontrolsdelegate/sessioncontrolswillexitfullscreenappearance(_:">func sessionControlsWillExitFullscreenAppearance(AVCaptureSession)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">캡처 세션의 컨트롤이 곧 전체 화면 모양에서 벗어나려 할 때 델리게이트에 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcapturesessioncontrolsdelegate/sessioncontrolsdidbecomeinactive(_:">func sessionControlsDidBecomeInactive(AVCaptureSession)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">캡처 세션의 컨트롤이 비활성화되고 상호작용할 수 없게 될 때 델리게이트에 알립니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturesessioncontrolsdelegate/sessioncontrolsdidbecomeactive(_:">View on Apple Developer</a>)*</span>

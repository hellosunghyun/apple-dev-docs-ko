---
source_path: "documentation/AVFoundation/avcapturedevice/canperformreactioneffects.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedevice/canperformreactioneffects"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:canperformreactioneffects:0000:0001">canPerformReactionEffects</span>

<span class="ko-segment" data-segment-id="seg:paragraph:canperformreactioneffects:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:canperformreactioneffects:0002:0001">A Boolean value that indicates whether you can perform reaction effects on a capture device.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:canperformreactioneffects:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:canperformreactioneffects:0004:0001">iOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:canperformreactioneffects:0004:0002">iPadOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:canperformreactioneffects:0004:0003">Mac Catalyst 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:canperformreactioneffects:0004:0004">macOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:canperformreactioneffects:0004:0005">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var canPerformReactionEffects: Bool { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">This value is <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_0@@</a> when a device’s <a href="avcapturedevice/reactioneffectsenabled.md">@@TOKEN_1@@</a> and its active format’s <a href="avcapturedevice/format/reactioneffectssupported.md">@@TOKEN_2@@</a> property values are <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_3@@</a>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avcapturedevice/reactioneffectsenabled.md">class var reactionEffectsEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">A Boolean value that indicates whether the app supports performing reaction effects.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcapturedevice/availablereactiontypes.md">var availableReactionTypes: Set&lt;AVCaptureReactionType&gt;</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">A set of reactions types that a device supports performing.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcapturedevice/reactioneffectgesturesenabled.md">class var reactionEffectGesturesEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">A Boolean value that indicates whether gesture detection triggers reaction effects on the video stream.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avcapturedevice/performeffect(for:">func performEffect(for: AVCaptureReactionType)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">anchor에 해당하는 참조 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001">[var reactionEffectsInProgress: [AVCaptureReactionEffectState]](avcapturedevice/reactioneffectsinprogress.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">프레임워크가 참조 객체를 로드할 때 사용하는 입력 파일입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avcapturereactioneffectstate.md">class AVCaptureReactionEffectState</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">An object that reports the state of a reaction effect performed on a capture device.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedevice/canperformreactioneffects">View on Apple Developer</a>*</span>

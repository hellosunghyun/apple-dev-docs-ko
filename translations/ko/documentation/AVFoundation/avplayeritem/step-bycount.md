---
source_path: "documentation/AVFoundation/avplayeritem/step-bycount.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avplayeritem/step-bycount"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:stepbycount:0000:0001">step(byCount:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:stepbycount:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:stepbycount:0002:0001">player item의 현재 시간을 지정된 스텝 수만큼 앞으로 또는 뒤로 이동합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:stepbycount:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:stepbycount:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:stepbycount:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:stepbycount:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:stepbycount:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:stepbycount:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:stepbycount:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:stepbycount:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
nonisolated
func step(byCount stepCount: Int)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">각 스텝의 크기는 수신자의 활성화된 <code>AVPlayerItemTrack</code> 객체에 따라 달라집니다(<a href="avplayeritem/tracks.md">@@TOKEN_1@@</a> 참조).</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>stepCount</code>: 이동할 스텝 수입니다. 양수는 앞으로 이동하고, 음수는 뒤로 이동합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avplayeritem/canstepforward.md">var canStepForward: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">항목이 앞으로 스텝 이동을 지원하는지 나타내는 <code>Boolean</code> 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avplayeritem/canstepbackward.md">var canStepBackward: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">항목이 뒤로 스텝 이동을 지원하는지 나타내는 <code>Boolean</code> 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avplayeritem/step(bycount:">View on Apple Developer</a>)*</span>

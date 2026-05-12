---
source_path: "documentation/AVFoundation/avcoordinatedplaybackparticipant/suspensionreasons.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcoordinatedplaybackparticipant/suspensionreasons"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:suspensionreasons:0000:0001">suspensionReasons</span>

<span class="ko-segment" data-segment-id="seg:paragraph:suspensionreasons:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:suspensionreasons:0002:0001">참여자가 현재 동기화된 재생(coordinated playback)에 참여하지 못하는 이유입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:suspensionreasons:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:suspensionreasons:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:suspensionreasons:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:suspensionreasons:0004:0003">Mac Catalyst 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:suspensionreasons:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:suspensionreasons:0004:0005">tvOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:suspensionreasons:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var suspensionReasons: [AVCoordinatedPlaybackSuspension.Reason] { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">참여자의 재생이 일시 중단 상태가 아니면 이 값은 비어 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avcoordinatedplaybackparticipant/identifier.md">var identifier: UUID</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">참여자의 고유 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcoordinatedplaybackparticipant/isreadytoplay.md">var isReadyToPlay: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">참여자가 동기화된 재생을 시작할 준비가 되었는지 나타내는 부울 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcoordinatedplaybackparticipant/suspensionreasons">View on Apple Developer</a>*</span>

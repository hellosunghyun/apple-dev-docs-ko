---
source_path: "documentation/AVFoundation/avplayeritem/preferredpeakbitrate.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avplayeritem/preferredpeakbitrate"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:preferredpeakbitrate:0000:0001">preferredPeakBitRate</span>

<span class="ko-segment" data-segment-id="seg:paragraph:preferredpeakbitrate:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:preferredpeakbitrate:0002:0001">이 항목에 대한 네트워크 대역폭 소비량의 목표 제한값(초당 비트 단위)입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:preferredpeakbitrate:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:preferredpeakbitrate:0004:0001">iOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:preferredpeakbitrate:0004:0002">iPadOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:preferredpeakbitrate:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:preferredpeakbitrate:0004:0004">macOS 10.10+</span>
- <span class="ko-segment" data-segment-id="seg:list:preferredpeakbitrate:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:preferredpeakbitrate:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:preferredpeakbitrate:0004:0007">watchOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
nonisolated
var preferredPeakBitRate: Double { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">The size and position of a rectangle depends on the aspect ratio of the media (16:9 or 4:3), the layer’s <a href="https://developer.apple.com/documentation/QuartzCore/CALayer/bounds">@@TOKEN_0@@</a>, and the value of its <a href="avplayerlayer/videogravity.md">@@TOKEN_1@@</a> property.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">시스템이 이 값을 충족하도록 네트워크 대역폭 소비량을 낮출 수 없는 경우에도 항목 재생은 계속 유지하면서 가능한 한 많이 낮춥니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="avplayeritem/preferredforwardbufferduration.md">var preferredForwardBufferDuration: TimeInterval</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">재생 헤드 앞에서 재생이 중단되지 않도록 네트워크에서 미리 버퍼링할 미디어 시간입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avplayeritem/canusenetworkresourcesforlivestreamingwhilepaused.md">var canUseNetworkResourcesForLiveStreamingWhilePaused: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">플레이어 항목이 일시 정지된 동안 재생 상태를 최신 상태로 유지하기 위해 네트워크 리소스를 사용할 수 있는지를 나타내는 불리언 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avplayeritem/preferredpeakbitrate">View on Apple Developer</a>*</span>

---
source_path: "documentation/AVFoundation/avplayerplaybackcoordinatordelegate.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avplayerplaybackcoordinatordelegate"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avplayerplaybackcoordinatordelegate:0000:0001">AVPlayerPlaybackCoordinatorDelegate</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avplayerplaybackcoordinatordelegate:0001:0001">**Framework**: AVFoundation **Kind**: protocol</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avplayerplaybackcoordinatordelegate:0002:0001">재생 조정에 참여하기 위해 구현해야 할 메서드를 정의하는 프로토콜입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avplayerplaybackcoordinatordelegate:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avplayerplaybackcoordinatordelegate:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avplayerplaybackcoordinatordelegate:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avplayerplaybackcoordinatordelegate:0004:0003">Mac Catalyst 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avplayerplaybackcoordinatordelegate:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avplayerplaybackcoordinatordelegate:0004:0005">tvOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avplayerplaybackcoordinatordelegate:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
protocol AVPlayerPlaybackCoordinatorDelegate : NSObjectProtocol, Sendable
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:identifying-items:0008:0001">항목 식별</span>

- <span class="ko-segment" data-segment-id="seg:list:identifying-items:0009:0001"><a href="avplayerplaybackcoordinatordelegate/playbackcoordinator(_:identifierfor:">func playbackCoordinator(AVPlayerPlaybackCoordinator, identifierFor: AVPlayerItem) -&gt; String</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:identifying-items:0010:0001">player item에 대한 식별자를 반환합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:retrieving-interstitial-time-ranges:0011:0001">인터스티셜 시간 범위 검색</span>

- <span class="ko-segment" data-segment-id="seg:list:retrieving-interstitial-time-ranges:0012:0001">[func playbackCoordinator(AVPlayerPlaybackCoordinator, interstitialTimeRangesFor: AVPlayerItem) -&gt; [NSValue]](avplayerplaybackcoordinatordelegate/playbackcoordinator(_:interstitialtimerangesfor:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:retrieving-interstitial-time-ranges:0013:0001">플레이어 항목에서 기본 콘텐츠에 해당하지 않는 시간 범위를 대리자에게 요청합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0014:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0015:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0016:0001"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>
- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0016:0002"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0016:0003"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0017:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avplayerplaybackcoordinator/delegate.md">var delegate: (any AVPlayerPlaybackCoordinatorDelegate)?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avspatialvideoconfiguration-swift.struct/init(formatdescription:">View on Apple Developer</a>)*</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avplayerplaybackcoordinatordelegate">View on Apple Developer</a>*</span>

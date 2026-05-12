---
source_path: "documentation/AVFoundation/avplaybackcoordinatorplaybackcontroldelegate.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avplaybackcoordinatorplaybackcontroldelegate"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avplaybackcoordinatorplaybackcontroldelegate:0000:0001">AVPlaybackCoordinatorPlaybackControlDelegate</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avplaybackcoordinatorplaybackcontroldelegate:0001:0001">**Framework**: AVFoundation **Kind**: protocol</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avplaybackcoordinatorplaybackcontroldelegate:0002:0001">재생 코디네이터에서 발송하는 재생 명령에 응답하기 위해 구현해야 하는 메서드를 정의하는 protocol입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avplaybackcoordinatorplaybackcontroldelegate:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avplaybackcoordinatorplaybackcontroldelegate:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avplaybackcoordinatorplaybackcontroldelegate:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avplaybackcoordinatorplaybackcontroldelegate:0004:0003">Mac Catalyst 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avplaybackcoordinatorplaybackcontroldelegate:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avplaybackcoordinatorplaybackcontroldelegate:0004:0005">tvOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avplaybackcoordinatorplaybackcontroldelegate:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
protocol AVPlaybackCoordinatorPlaybackControlDelegate : NSObjectProtocol, Sendable
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:responding-to-commands:0008:0001">명령에 대한 응답</span>

- <span class="ko-segment" data-segment-id="seg:list:responding-to-commands:0009:0001"><a href="avplaybackcoordinatorplaybackcontroldelegate/playbackcoordinator(_:didissue:completionhandler:">func playbackCoordinator(AVDelegatingPlaybackCoordinator, didIssue: AVDelegatingPlaybackCoordinatorPlayCommand, completionHandler: () -&gt; Void)</a>-73p3a.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:responding-to-commands:0010:0001">재생 속도가 0이 아닌 경우 그룹의 재생 속도에 맞춰 조정하도록 대리자에게 지시합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:responding-to-commands:0011:0001"><a href="avplaybackcoordinatorplaybackcontroldelegate/playbackcoordinator(_:didissue:completionhandler:">func playbackCoordinator(AVDelegatingPlaybackCoordinator, didIssue: AVDelegatingPlaybackCoordinatorPauseCommand, completionHandler: () -&gt; Void)</a>-56t01.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:responding-to-commands:0012:0001">대리자에게 재생을 일시 중지하라고 지시합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:responding-to-commands:0013:0001"><a href="avplaybackcoordinatorplaybackcontroldelegate/playbackcoordinator(_:didissue:completionhandler:">func playbackCoordinator(AVDelegatingPlaybackCoordinator, didIssue: AVDelegatingPlaybackCoordinatorSeekCommand, completionHandler: () -&gt; Void)</a>-4fk8y.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:responding-to-commands:0014:0001">대리자에게 새 시간으로 이동하라고 지시합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:responding-to-commands:0015:0001"><a href="avplaybackcoordinatorplaybackcontroldelegate/playbackcoordinator(_:didissue:completionhandler:">func playbackCoordinator(AVDelegatingPlaybackCoordinator, didIssue: AVDelegatingPlaybackCoordinatorBufferingCommand, completionHandler: () -&gt; Void)</a>-btle.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:responding-to-commands:0016:0001">대리자에게 곧 재생이 시작될 예정이므로 준비 단계로 미디어 데이터를 버퍼링하도록 지시합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0017:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0018:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0019:0001"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>
- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0019:0002"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0019:0003"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0020:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="avdelegatingplaybackcoordinator/init(playbackcontroldelegate:">init(playbackControlDelegate: any AVPlaybackCoordinatorPlaybackControlDelegate)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">사용자 정의 재생 객체에 대한 재생 코디네이터를 생성합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avplaybackcoordinatorplaybackcontroldelegate">View on Apple Developer</a>*</span>

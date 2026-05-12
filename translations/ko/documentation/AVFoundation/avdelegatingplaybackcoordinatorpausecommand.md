---
source_path: "documentation/AVFoundation/avdelegatingplaybackcoordinatorpausecommand.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinatorpausecommand"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avdelegatingplaybackcoordinatorpausecommand:0000:0001">AVDelegatingPlaybackCoordinatorPauseCommand</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avdelegatingplaybackcoordinatorpausecommand:0001:0001">**Framework**: AVFoundation **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avdelegatingplaybackcoordinatorpausecommand:0002:0001">재생 일시 중지를 나타내는 명령입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avdelegatingplaybackcoordinatorpausecommand:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avdelegatingplaybackcoordinatorpausecommand:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avdelegatingplaybackcoordinatorpausecommand:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avdelegatingplaybackcoordinatorpausecommand:0004:0003">Mac Catalyst 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avdelegatingplaybackcoordinatorpausecommand:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avdelegatingplaybackcoordinatorpausecommand:0004:0005">tvOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avdelegatingplaybackcoordinatorpausecommand:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class AVDelegatingPlaybackCoordinatorPauseCommand
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:accessing-command-details:0008:0001">명령 세부 정보 액세스</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-command-details:0009:0001"><a href="avdelegatingplaybackcoordinatorpausecommand/shouldbufferinanticipationofplayback.md">var shouldBufferInAnticipationOfPlayback: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-command-details:0010:0001">플레이어가 재생 시작 요청을 준비하기 위해 버퍼링을 시작하는지 여부를 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-command-details:0011:0001"><a href="avdelegatingplaybackcoordinatorpausecommand/anticipatedplaybackrate.md">var anticipatedPlaybackRate: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-command-details:0012:0001">코디네이터가 현재 항목의 재생 속도를 예상하는 값입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0013:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0014:0001">상속됨</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0015:0001"><a href="avdelegatingplaybackcoordinatorplaybackcontrolcommand.md">AVDelegatingPlaybackCoordinatorPlaybackControlCommand</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0016:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0017:0001"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0017:0002"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0017:0003"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0017:0004"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0017:0005"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0017:0006"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0017:0007"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0017:0008"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0018:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="avdelegatingplaybackcoordinatorplaybackcontrolcommand.md">class AVDelegatingPlaybackCoordinatorPlaybackControlCommand</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">재생 명령을 위한 추상 상위 클래스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="avdelegatingplaybackcoordinatorplaycommand.md">class AVDelegatingPlaybackCoordinatorPlayCommand</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">특정 속도와 시점에서 재생함을 나타내는 명령입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="avdelegatingplaybackcoordinatorseekcommand.md">class AVDelegatingPlaybackCoordinatorSeekCommand</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">항목 타임라인에서 새 시점으로 이동함을 나타내는 명령입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="avdelegatingplaybackcoordinatorbufferingcommand.md">class AVDelegatingPlaybackCoordinatorBufferingCommand</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">재생을 준비하기 위해 데이터 버퍼링을 시작함을 나타내는 명령입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinatorpausecommand">View on Apple Developer</a>*</span>

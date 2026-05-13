---
source_path: "documentation/AVFoundation/avcoordinatedplaybacksuspension.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcoordinatedplaybacksuspension"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avcoordinatedplaybacksuspension:0000:0001">AVCoordinatedPlaybackSuspension</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcoordinatedplaybacksuspension:0001:0001">**Framework**: AVFoundation **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcoordinatedplaybacksuspension:0002:0001">조정된 재생의 임시 중단을 나타내는 객체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcoordinatedplaybacksuspension:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avcoordinatedplaybacksuspension:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcoordinatedplaybacksuspension:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcoordinatedplaybacksuspension:0004:0003">Mac Catalyst 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcoordinatedplaybacksuspension:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcoordinatedplaybacksuspension:0004:0005">tvOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcoordinatedplaybacksuspension:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class AVCoordinatedPlaybackSuspension
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">재생 코디네이터의 <a href="avplaybackcoordinator/beginsuspension(for:">@@TOKEN_0@@</a>.md) 메서드에서 재생 중단에 대한 자세한 내용을 확인하세요.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0009:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:inspecting-a-suspension:0010:0001">중단 점검</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-a-suspension:0011:0001"><a href="avcoordinatedplaybacksuspension/begindate.md">var beginDate: Date</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-a-suspension:0012:0001">중단이 시작되는 시점입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-a-suspension:0013:0001"><a href="avcoordinatedplaybacksuspension/reason-swift.property.md">var reason: AVCoordinatedPlaybackSuspension.Reason</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-a-suspension:0014:0001">중단 사유입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-a-suspension:0015:0001"><a href="avcoordinatedplaybacksuspension/reason-swift.struct.md">AVCoordinatedPlaybackSuspension.Reason</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-a-suspension:0016:0001">재생 중단 사유를 식별하는 상수입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:ending-a-suspension:0017:0001">중단 종료</span>

- <span class="ko-segment" data-segment-id="seg:list:ending-a-suspension:0018:0001"><a href="avcoordinatedplaybacksuspension/end.md">func end()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:ending-a-suspension:0019:0001">일시 중단을 종료합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:ending-a-suspension:0020:0001"><a href="avcoordinatedplaybacksuspension/end(proposingnewtime:">func end(proposingNewTime: CMTime)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:ending-a-suspension:0021:0001">그룹에 새 재생 시간을 제안하면서 일시 중단을 종료합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0022:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0023:0001"><a href="avcoordinatedplaybacksuspension/reason-swift.struct/init(_:">init(String)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0024:0001">문자열로 중단을 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0025:0001"><a href="avcoordinatedplaybacksuspension/reason-swift.struct/init(rawvalue:">init(rawValue: String)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0026:0001">원시 문자열 값으로 중단을 생성합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0027:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0028:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0029:0001"><a href="../ObjectiveC/NSObject-swift.class.md">NSObject</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0030:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0031:0001"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0031:0002"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0031:0003"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0031:0004"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0031:0005"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0031:0006"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0031:0007"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0031:0008"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0032:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0033:0001"><a href="avplaybackcoordinator/beginsuspension(for:">func beginSuspension(for: AVCoordinatedPlaybackSuspension.Reason) -&gt; AVCoordinatedPlaybackSuspension</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">재생 객체가 그룹 활동에서 분리될 때 코디네이터가 재생 명령 전송을 일시적으로 중지하도록 지시합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0035:0001"><a href="avplaybackcoordinator/expecteditemtime(athosttime:">func expectedItemTime(atHostTime: CMTime) -&gt; CMTime</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0036:0001">지정한 호스트 시간에 코디네이터가 현재 항목의 타임라인에서 재생할 것으로 기대하는 시간을 반환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0038:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcoordinatedplaybacksuspension">View on Apple Developer</a>*</span>

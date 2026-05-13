---
source_path: "documentation/AVFoundation/avplaybackcoordinator.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avplaybackcoordinator"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avplaybackcoordinator:0000:0001">AVPlaybackCoordinator</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avplaybackcoordinator:0001:0001">**Framework**: AVFoundation **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avplaybackcoordinator:0002:0001">연결된 그룹에서 플레이어의 재생을 조정하는 개체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avplaybackcoordinator:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avplaybackcoordinator:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avplaybackcoordinator:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avplaybackcoordinator:0004:0003">Mac Catalyst 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avplaybackcoordinator:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avplaybackcoordinator:0004:0005">tvOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avplaybackcoordinator:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class AVPlaybackCoordinator
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">이 프레임워크에는 서로 다른 유형의 플레이어 개체를 관리하는 두 가지 재생 코디네이터 하위 클래스가 있습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:overview:0009:0001"><a href="avplayerplaybackcoordinator.md">@@TOKEN_0@@</a> 좌표는 <a href="avplayer.md">@@TOKEN_1@@</a> 객체의 상태를 조정합니다. 앱이 <a href="avplayer.md">@@TOKEN_2@@</a>를 사용하면 재생 제어를 위해 기존 인터페이스를 계속 사용합니다. 코디네이터는 플레이어의 속도와 시간 변경을 가로채어 그룹의 다른 플레이어로 전파합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:overview:0009:0002"><a href="avdelegatingplaybackcoordinator.md">@@TOKEN_0@@</a>는 사용자 지정 플레이어 객체의 상태를 조정합니다. 앱에서 <a href="avsamplebufferdisplaylayer.md">@@TOKEN_1@@</a>와 <a href="avsamplebufferaudiorenderer.md">@@TOKEN_2@@</a>을 사용해 미디어를 렌더링하는 사용자 지정 플레이어를 사용하는 경우에는 이 개체를 사용해 그룹 재생을 조정해야 합니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:overview:0010:0001">**Note**: 재생 코디네이터를 피어에 연결할 때는 <a href="https://developer.apple.com/documentation/GroupActivities">@@TOKEN_0@@</a> 프레임워크를 사용합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0011:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:configuring-playback-policies:0012:0001">재생 정책 구성</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-playback-policies:0013:0001"><a href="avplaybackcoordinator/participantlimitforwaitingoutsuspensions(withreason:">func participantLimitForWaitingOutSuspensions(withReason: AVCoordinatedPlaybackSuspension.Reason) -&gt; Int</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-playback-policies:0014:0001">특정 이유로 발생한 중단에 대해 조정자가 더 이상 기다리지 않기 전에 그룹이 포함할 수 있는 참가자 수의 한도를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-playback-policies:0015:0001"><a href="avplaybackcoordinator/setparticipantlimit(_:forwaitingoutsuspensionswithreason:">func setParticipantLimit(Int, forWaitingOutSuspensionsWithReason: AVCoordinatedPlaybackSuspension.Reason)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-playback-policies:0016:0001">특정 이유로 발생한 중단에서 조정자가 더 이상 기다리지 않기 전에 그룹이 포함할 수 있는 참가자 수에 대한 제한을 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-playback-policies:0017:0001">[var suspensionReasonsThatTriggerWaiting: [AVCoordinatedPlaybackSuspension.Reason]](avplaybackcoordinator/suspensionreasonsthattriggerwaiting.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-playback-policies:0018:0001">조정자가 재생을 중단하게 만드는 원인입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-playback-policies:0019:0001"><a href="avplaybackcoordinator/pausesnapstomediatimeoforiginator.md">var pauseSnapsToMediaTimeOfOriginator: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-playback-policies:0020:0001">참가자가 정지할 때 originator의 중지 시점을 반영하는지 나타내는 부울 값입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:suspending-state-coordination:0021:0001">중단 상태 조정</span>

- <span class="ko-segment" data-segment-id="seg:list:suspending-state-coordination:0022:0001"><a href="avplaybackcoordinator/beginsuspension(for:">func beginSuspension(for: AVCoordinatedPlaybackSuspension.Reason) -&gt; AVCoordinatedPlaybackSuspension</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:suspending-state-coordination:0023:0001">재생 객체가 그룹 활동에서 분리될 때 조정자가 재생 명령 전송을 일시적으로 중지하도록 지시합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:suspending-state-coordination:0024:0001"><a href="avcoordinatedplaybacksuspension.md">class AVCoordinatedPlaybackSuspension</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:suspending-state-coordination:0025:0001">조정된 재생을 일시적으로 중단하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:suspending-state-coordination:0026:0001"><a href="avplaybackcoordinator/expecteditemtime(athosttime:">func expectedItemTime(atHostTime: CMTime) -&gt; CMTime</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:suspending-state-coordination:0027:0001">조정자가 지정한 host time에서 현재 항목의 타임라인 상에서 재생할 것으로 기대하는 시간을 반환합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:observing-suspension-reasons:0028:0001">중단 사유 관찰</span>

- <span class="ko-segment" data-segment-id="seg:list:observing-suspension-reasons:0029:0001">[var suspensionReasons: [AVCoordinatedPlaybackSuspension.Reason]](avplaybackcoordinator/suspensionreasons.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:observing-suspension-reasons:0030:0001">조정자가 현재 그룹 재생 활동에 참여할 수 없는 이유입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:observing-suspension-reasons:0031:0001"><a href="avplaybackcoordinator/suspensionreasonsdidchangenotification.md">class let suspensionReasonsDidChangeNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:observing-suspension-reasons:0032:0001">조정자의 중단 사유가 변경될 때 조정자가 게시하는 알림입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:observing-other-participants:0033:0001">다른 참가자 관찰</span>

- <span class="ko-segment" data-segment-id="seg:list:observing-other-participants:0034:0001">[var otherParticipants: [AVCoordinatedPlaybackParticipant]](avplaybackcoordinator/otherparticipants.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:observing-other-participants:0035:0001">그룹 내 다른 참가자의 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:observing-other-participants:0036:0001"><a href="avcoordinatedplaybackparticipant.md">class AVCoordinatedPlaybackParticipant</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:observing-other-participants:0037:0001">조정된 재생 세션의 참가자를 나타내는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:observing-other-participants:0038:0001"><a href="avplaybackcoordinator/otherparticipantsdidchangenotification.md">class let otherParticipantsDidChangeNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:observing-other-participants:0039:0001">다른 참가자가 변경될 때 조정자가 게시하는 알림입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:coordinating-with-group-sessions:0040:0001">그룹 세션과의 조정</span>

- <span class="ko-segment" data-segment-id="seg:list:coordinating-with-group-sessions:0041:0001"><a href="avplaybackcoordinator/coordinatewithsession(_:">func coordinateWithSession&lt;T&gt;(GroupSession&lt;T&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:coordinating-with-group-sessions:0042:0001">플레이어와 그룹 세션의 조정을 시작합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0043:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0044:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0045:0001"><a href="../ObjectiveC/NSObject-swift.class.md">NSObject</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:inherited-by:0046:0001">상속받는 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:inherited-by:0047:0001"><a href="avdelegatingplaybackcoordinator.md">AVDelegatingPlaybackCoordinator</a></span>
- <span class="ko-segment" data-segment-id="seg:list:inherited-by:0047:0002"><a href="avplayerplaybackcoordinator.md">AVPlayerPlaybackCoordinator</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0048:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0049:0001"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0049:0002"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0049:0003"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0049:0004"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0049:0005"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0049:0006"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0049:0007"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0049:0008"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0050:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0051:0001"><a href="../visionOS/destination-video.md">Destination Video</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0052:0001">SwiftUI를 사용하여 멀티플랫폼 앱에서 몰입형 미디어 환경을 구축합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0053:0001"><a href="supporting-coordinated-media-playback.md">Supporting coordinated media playback</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0054:0001">사용자가 여러 기기에서 시청과 청취를 함께 할 수 있도록 동기화된 미디어 경험을 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0055:0001"><a href="avplayerplaybackcoordinator.md">class AVPlayerPlaybackCoordinator</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0056:0001">연결된 그룹의 플레이어 객체 재생을 조정하는 재생 코디네이터 하위 클래스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0057:0001"><a href="avdelegatingplaybackcoordinator.md">class AVDelegatingPlaybackCoordinator</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0058:0001">연결된 그룹의 사용자 지정 플레이어 객체 재생을 조정하는 재생 코디네이터 하위 클래스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0059:0001"><a href="avplaybackcoordinationmedium.md">class AVPlaybackCoordinationMedium</a></span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0061:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avplaybackcoordinator">View on Apple Developer</a>*</span>

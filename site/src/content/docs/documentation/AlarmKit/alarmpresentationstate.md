---
source_path: "documentation/AlarmKit/alarmpresentationstate.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/alarmkit/alarmpresentationstate"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:alarmpresentationstate:0000:0001">AlarmPresentationState</span>

<span class="ko-segment" data-segment-id="seg:paragraph:alarmpresentationstate:0001:0001">**Framework**: AlarmKit **Kind**: struct</span>

<span class="ko-segment" data-segment-id="seg:paragraph:alarmpresentationstate:0002:0001">알람 라이브 액티비티의 시스템 관리 콘텐츠 상태입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:alarmpresentationstate:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:alarmpresentationstate:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:alarmpresentationstate:0004:0002">iPadOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
struct AlarmPresentationState
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">라이브 액티비티는 정적 특성과 동적 콘텐츠라는 두 구성 요소로 이루어집니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0002">스포츠 경기를 예로 들면 정적 특성은 팀 이름을 나타내고, 동적 콘텐츠는 경기가 진행되는 동안 계속 갱신되는 현재 점수를 나타냅니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0001">알람의 경우 이 구성 요소는 서로 다른 용도로 사용됩니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:overview:0010:0001">**정적 특성**: 앱은 tint 색상과 버튼 레이블처럼 유지되는 정보를 포함하여 <a href="alarmattributes.md">@@TOKEN_0@@</a>로 이 콘텐츠를 제공합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:overview:0010:0002">**동적 콘텐츠**: AlarmKit은 알람 <a href="alarmpresentationstate/mode-swift.enum/countdown/firedate.md">@@TOKEN_0@@</a>와 현재 프레젠테이션 모드처럼 시스템이 관리하는 정보를 포함한 콘텐츠를 <a href="alarmpresentationstate.md">@@TOKEN_1@@</a>로 제공합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0011:0001">시스템은 알람이 <a href="alarm/state-swift.enum/countdown.md">@@TOKEN_0@@</a>, <a href="alarm/state-swift.enum/alerting.md">@@TOKEN_1@@</a>, <a href="alarm/state-swift.enum/paused.md">@@TOKEN_2@@</a> 같은 상태로 전환될 때 <a href="alarmpresentationstate.md">@@TOKEN_3@@</a>를 자동으로 업데이트합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0012:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:creating-an-alarm-state:0013:0001">알람 상태 생성</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-an-alarm-state:0014:0001"><a href="alarmpresentationstate/init(alarmid:mode:">init(alarmID: Alarm.ID, mode: AlarmPresentationState.Mode)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-an-alarm-state:0015:0001">알람 상태의 인스턴스를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-an-alarm-state:0016:0001"><a href="alarmpresentationstate/alarmid.md">var alarmID: Alarm.ID</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-an-alarm-state:0017:0001">알람의 고유 ID입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-an-alarm-state:0018:0001"><a href="alarmpresentationstate/mode-swift.property.md">var mode: AlarmPresentationState.Mode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-an-alarm-state:0019:0001">알람의 특정 상태이며, alerting, countdown, paused 중 하나입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-an-alarm-state:0020:0001"><a href="alarmpresentationstate/mode-swift.enum.md">AlarmPresentationState.Mode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-an-alarm-state:0021:0001">알람이 될 수 있는 모든 모드의 목록입니다: alert, countdown, paused.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0022:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0023:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0024:0001"><a href="../Swift/Decodable.md">Decodable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0024:0002"><a href="../Swift/Encodable.md">Encodable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0024:0003"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0024:0004"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0024:0005"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0024:0006"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0025:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="alarmpresentation.md">struct AlarmPresentation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">알람 UI에 필요한 콘텐츠를 설명하는 개체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="alarmattributes.md">struct AlarmAttributes</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">알람 UI에 필요한 모든 정보를 포함하는 개체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="alarmmetadata.md">protocol AlarmMetadata</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">알람에 대한 정보를 포함하는 메타데이터 개체입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">*<a href="https://developer.apple.com/documentation/alarmkit/alarmpresentationstate">View on Apple Developer</a>*</span>

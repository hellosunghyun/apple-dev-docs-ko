---
source_path: "documentation/AVFAudio/avmidicontrolchangeevent/messagetype-swiftenum.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avmidicontrolchangeevent/messagetype-swiftenum"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avmidicontrolchangeeventmessagetype:0000:0001">AVMIDIControlChangeEvent.MessageType</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avmidicontrolchangeeventmessagetype:0001:0001">**Framework**: AVFAudio **Kind**: enum</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avmidicontrolchangeeventmessagetype:0002:0001">컨트롤 변경 이벤트 유형을 나타내는 상수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avmidicontrolchangeeventmessagetype:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avmidicontrolchangeeventmessagetype:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmidicontrolchangeeventmessagetype:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmidicontrolchangeeventmessagetype:0004:0003">Mac Catalyst 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmidicontrolchangeeventmessagetype:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmidicontrolchangeeventmessagetype:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmidicontrolchangeeventmessagetype:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
enum MessageType
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:event-types:0008:0001">이벤트 유형</span>

- <span class="ko-segment" data-segment-id="seg:list:event-types:0009:0001"><a href="avmidicontrolchangeevent/messagetype-swift.enum/bankselect.md">AVMIDIControlChangeEvent.MessageType.bankSelect</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:event-types:0010:0001">밴크 선택을 전환하는 이벤트 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:event-types:0011:0001"><a href="avmidicontrolchangeevent/messagetype-swift.enum/modwheel.md">AVMIDIControlChangeEvent.MessageType.modWheel</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:event-types:0012:0001">비브라토 효과를 변조하는 이벤트 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:event-types:0013:0001"><a href="avmidicontrolchangeevent/messagetype-swift.enum/breath.md">AVMIDIControlChangeEvent.MessageType.breath</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:event-types:0014:0001">브레스 컨트롤러를 위한 이벤트 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:event-types:0015:0001"><a href="avmidicontrolchangeevent/messagetype-swift.enum/foot.md">AVMIDIControlChangeEvent.MessageType.foot</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:event-types:0016:0001">발 컨트롤러 사용 시 연속 값 스트림을 전송하는 이벤트 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:event-types:0017:0001"><a href="avmidicontrolchangeevent/messagetype-swift.enum/portamentotime.md">AVMIDIControlChangeEvent.MessageType.portamentoTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:event-types:0018:0001">포르타멘토 속도를 제어하는 이벤트 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:event-types:0019:0001"><a href="avmidicontrolchangeevent/messagetype-swift.enum/dataentry.md">AVMIDIControlChangeEvent.MessageType.dataEntry</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:event-types:0020:0001">데이터 엔트리 매개변수를 제어하는 이벤트 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:event-types:0021:0001"><a href="avmidicontrolchangeevent/messagetype-swift.enum/volume.md">AVMIDIControlChangeEvent.MessageType.volume</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:event-types:0022:0001">채널 볼륨을 제어하는 이벤트 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:event-types:0023:0001"><a href="avmidicontrolchangeevent/messagetype-swift.enum/balance.md">AVMIDIControlChangeEvent.MessageType.balance</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:event-types:0024:0001">좌우 채널 밸런스를 제어하는 이벤트 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:event-types:0025:0001"><a href="avmidicontrolchangeevent/messagetype-swift.enum/pan.md">AVMIDIControlChangeEvent.MessageType.pan</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:event-types:0026:0001">좌우 채널 패닝을 제어하는 이벤트 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:event-types:0027:0001"><a href="avmidicontrolchangeevent/messagetype-swift.enum/expression.md">AVMIDIControlChangeEvent.MessageType.expression</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:event-types:0028:0001">익스프레션 컨트롤러를 나타내는 이벤트 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:event-types:0029:0001"><a href="avmidicontrolchangeevent/messagetype-swift.enum/sustain.md">AVMIDIControlChangeEvent.MessageType.sustain</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:event-types:0030:0001">댐퍼 페달을 온/오프로 전환하는 이벤트 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:event-types:0031:0001"><a href="avmidicontrolchangeevent/messagetype-swift.enum/portamento.md">AVMIDIControlChangeEvent.MessageType.portamento</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:event-types:0032:0001">포르타멘토를 온/오프로 전환하는 이벤트 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:event-types:0033:0001"><a href="avmidicontrolchangeevent/messagetype-swift.enum/sostenuto.md">AVMIDIControlChangeEvent.MessageType.sostenuto</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:event-types:0034:0001">소스테누토를 온/오프로 전환하는 이벤트 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:event-types:0035:0001"><a href="avmidicontrolchangeevent/messagetype-swift.enum/soft.md">AVMIDIControlChangeEvent.MessageType.soft</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:event-types:0036:0001">노트 볼륨을 낮추는 이벤트 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:event-types:0037:0001"><a href="avmidicontrolchangeevent/messagetype-swift.enum/legatopedal.md">AVMIDIControlChangeEvent.MessageType.legatoPedal</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:event-types:0038:0001">레가토 페달을 온/오프로 전환하는 이벤트 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:event-types:0039:0001"><a href="avmidicontrolchangeevent/messagetype-swift.enum/hold2pedal.md">AVMIDIControlChangeEvent.MessageType.hold2Pedal</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:event-types:0040:0001">음을 지속하는 이벤트 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:event-types:0041:0001"><a href="avmidicontrolchangeevent/messagetype-swift.enum/filterresonance.md">AVMIDIControlChangeEvent.MessageType.filterResonance</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:event-types:0042:0001">필터 공명도를 제어하는 이벤트 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:event-types:0043:0001"><a href="avmidicontrolchangeevent/messagetype-swift.enum/releasetime.md">AVMIDIControlChangeEvent.MessageType.releaseTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:event-types:0044:0001">릴리스 타임을 제어하는 이벤트 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:event-types:0045:0001"><a href="avmidicontrolchangeevent/messagetype-swift.enum/attacktime.md">AVMIDIControlChangeEvent.MessageType.attackTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:event-types:0046:0001">어택 타임을 제어하는 이벤트 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:event-types:0047:0001"><a href="avmidicontrolchangeevent/messagetype-swift.enum/brightness.md">AVMIDIControlChangeEvent.MessageType.brightness</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:event-types:0048:0001">밝기를 제어하는 이벤트 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:event-types:0049:0001"><a href="avmidicontrolchangeevent/messagetype-swift.enum/decaytime.md">AVMIDIControlChangeEvent.MessageType.decayTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:event-types:0050:0001">디케이 타임을 제어하는 이벤트 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:event-types:0051:0001"><a href="avmidicontrolchangeevent/messagetype-swift.enum/vibratorate.md">AVMIDIControlChangeEvent.MessageType.vibratoRate</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:event-types:0052:0001">비브라토 속도를 제어하는 이벤트 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:event-types:0053:0001"><a href="avmidicontrolchangeevent/messagetype-swift.enum/vibratodepth.md">AVMIDIControlChangeEvent.MessageType.vibratoDepth</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:event-types:0054:0001">비브라토 깊이를 제어하는 이벤트 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:event-types:0055:0001"><a href="avmidicontrolchangeevent/messagetype-swift.enum/vibratodelay.md">AVMIDIControlChangeEvent.MessageType.vibratoDelay</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:event-types:0056:0001">비브라토 지연을 제어하는 이벤트 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:event-types:0057:0001"><a href="avmidicontrolchangeevent/messagetype-swift.enum/reverblevel.md">AVMIDIControlChangeEvent.MessageType.reverbLevel</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:event-types:0058:0001">리버브 레벨을 제어하는 이벤트 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:event-types:0059:0001"><a href="avmidicontrolchangeevent/messagetype-swift.enum/choruslevel.md">AVMIDIControlChangeEvent.MessageType.chorusLevel</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:event-types:0060:0001">코러스 레벨을 제어하는 이벤트 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:event-types:0061:0001"><a href="avmidicontrolchangeevent/messagetype-swift.enum/rpn_lsb.md">AVMIDIControlChangeEvent.MessageType.RPN_LSB</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:event-types:0062:0001">등록된 파라미터 번호 LSB를 나타내는 이벤트 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:event-types:0063:0001"><a href="avmidicontrolchangeevent/messagetype-swift.enum/rpn_msb.md">AVMIDIControlChangeEvent.MessageType.RPN_MSB</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:event-types:0064:0001">등록된 파라미터 번호 MSB를 나타내는 이벤트 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:event-types:0065:0001"><a href="avmidicontrolchangeevent/messagetype-swift.enum/allsoundoff.md">AVMIDIControlChangeEvent.MessageType.allSoundOff</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:event-types:0066:0001">현재 울리고 있는 모든 노트를 음소거하는 이벤트 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:event-types:0067:0001"><a href="avmidicontrolchangeevent/messagetype-swift.enum/resetallcontrollers.md">AVMIDIControlChangeEvent.MessageType.resetAllControllers</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:event-types:0068:0001">모든 컨트롤러를 기본 상태로 재설정하는 이벤트 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:event-types:0069:0001"><a href="avmidicontrolchangeevent/messagetype-swift.enum/allnotesoff.md">AVMIDIControlChangeEvent.MessageType.allNotesOff</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:event-types:0070:0001">릴리스 타임을 유지한 상태로 울리고 있는 모든 노트를 음소거하는 이벤트 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:event-types:0071:0001"><a href="avmidicontrolchangeevent/messagetype-swift.enum/omnimodeoff.md">AVMIDIControlChangeEvent.MessageType.omniModeOff</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:event-types:0072:0001">omni off 모드로 설정하는 이벤트 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:event-types:0073:0001"><a href="avmidicontrolchangeevent/messagetype-swift.enum/omnimodeon.md">AVMIDIControlChangeEvent.MessageType.omniModeOn</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:event-types:0074:0001">omni on 모드로 설정하는 이벤트 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:event-types:0075:0001"><a href="avmidicontrolchangeevent/messagetype-swift.enum/monomodeon.md">AVMIDIControlChangeEvent.MessageType.monoModeOn</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:event-types:0076:0001">기기 모드를 단성(모노포닉)으로 설정하는 이벤트 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:event-types:0077:0001"><a href="avmidicontrolchangeevent/messagetype-swift.enum/monomodeoff.md">AVMIDIControlChangeEvent.MessageType.monoModeOff</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:event-types:0078:0001">기기 모드를 다성(폴리포닉)으로 설정하는 이벤트 유형입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0079:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0080:0001"><a href="avmidicontrolchangeevent/messagetype-swift.enum/init(rawvalue:">init?(rawValue: Int)</a>.md)</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0081:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0082:0001">준수 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0083:0001"><a href="../Swift/BitwiseCopyable.md">BitwiseCopyable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0083:0002"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0083:0003"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0083:0004"><a href="../Swift/RawRepresentable.md">RawRepresentable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0083:0005"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0083:0006"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0084:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0085:0001"><a href="avmidicontrolchangeevent/value.md">var value: UInt32</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0086:0001">컨트롤 변경 이벤트의 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0087:0001"><a href="avmidicontrolchangeevent/messagetype-swift.property.md">var messageType: AVMIDIControlChangeEvent.MessageType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0088:0001">컨트롤 변경 메시지의 유형입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0090:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avmidicontrolchangeevent/messagetype-swift.enum">View on Apple Developer</a>*</span>

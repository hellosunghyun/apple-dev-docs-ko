---
source_path: "documentation/AVFAudio/avaudiounitmidiinstrument.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiounitmidiinstrument"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avaudiounitmidiinstrument:0000:0001">AVAudioUnitMIDIInstrument</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiounitmidiinstrument:0001:0001">**Framework**: AVFAudio **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiounitmidiinstrument:0002:0001">음악 장치 또는 원격 악기를 나타내는 객체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiounitmidiinstrument:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avaudiounitmidiinstrument:0004:0001">iOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiounitmidiinstrument:0004:0002">iPadOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiounitmidiinstrument:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiounitmidiinstrument:0004:0004">macOS 10.10+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiounitmidiinstrument:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiounitmidiinstrument:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class AVAudioUnitMIDIInstrument
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">실시간(<code>live</code>) 입력을 처리하고 노트와 같은 음악 이벤트의 일반적 개념을 가진 체인에서 <a href="avaudiounitmidiinstrument.md">@@TOKEN_1@@</a>를 사용합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0009:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:creating-a-midi-instrument:0010:0001">MIDI 악기 생성</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-a-midi-instrument:0011:0001"><a href="avaudiounitmidiinstrument/init(audiocomponentdescription:">init(audioComponentDescription: AudioComponentDescription)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-a-midi-instrument:0012:0001">지정한 구성 요소 설명으로 MIDI 악기 오디오 유닛을 생성합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:sending-information-to-the-midi-instrument:0013:0001">MIDI 악기로 정보 전송</span>

- <span class="ko-segment" data-segment-id="seg:list:sending-information-to-the-midi-instrument:0014:0001"><a href="avaudiounitmidiinstrument/sendcontroller(_:withvalue:onchannel:">func sendController(UInt8, withValue: UInt8, onChannel: UInt8)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sending-information-to-the-midi-instrument:0015:0001">악기로 MIDI 컨트롤러 이벤트를 전송합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:sending-information-to-the-midi-instrument:0016:0001"><a href="avaudiounitmidiinstrument/sendmidievent(_:data1:">func sendMIDIEvent(UInt8, data1: UInt8)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sending-information-to-the-midi-instrument:0017:0001">악기로 데이터 바이트 하나를 포함하는 MIDI 이벤트를 전송합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:sending-information-to-the-midi-instrument:0018:0001"><a href="avaudiounitmidiinstrument/sendmidievent(_:data1:data2:">func sendMIDIEvent(UInt8, data1: UInt8, data2: UInt8)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sending-information-to-the-midi-instrument:0019:0001">악기로 데이터 바이트 두 개를 포함하는 MIDI 이벤트를 전송합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:sending-information-to-the-midi-instrument:0020:0001"><a href="avaudiounitmidiinstrument/sendmidisysexevent(_:">func sendMIDISysExEvent(Data)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sending-information-to-the-midi-instrument:0021:0001">악기로 MIDI System Exclusive 이벤트를 전송합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:sending-information-to-the-midi-instrument:0022:0001"><a href="avaudiounitmidiinstrument/sendpitchbend(_:onchannel:">func sendPitchBend(UInt16, onChannel: UInt8)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sending-information-to-the-midi-instrument:0023:0001">악기로 MIDI Pitch Bend 이벤트를 전송합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:sending-information-to-the-midi-instrument:0024:0001"><a href="avaudiounitmidiinstrument/sendpressure(_:onchannel:">func sendPressure(UInt8, onChannel: UInt8)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sending-information-to-the-midi-instrument:0025:0001">악기로 MIDI 채널 압력 이벤트를 전송합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:sending-information-to-the-midi-instrument:0026:0001"><a href="avaudiounitmidiinstrument/sendpressure(forkey:withvalue:onchannel:">func sendPressure(forKey: UInt8, withValue: UInt8, onChannel: UInt8)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sending-information-to-the-midi-instrument:0027:0001">악기로 MIDI 폴리포닉 키 압력 이벤트를 전송합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:sending-information-to-the-midi-instrument:0028:0001"><a href="avaudiounitmidiinstrument/sendprogramchange(_:onchannel:">func sendProgramChange(UInt8, onChannel: UInt8)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sending-information-to-the-midi-instrument:0029:0001">악기로 MIDI Program Change 및 Bank Select 이벤트를 전송합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:sending-information-to-the-midi-instrument:0030:0001"><a href="avaudiounitmidiinstrument/sendprogramchange(_:bankmsb:banklsb:onchannel:">func sendProgramChange(UInt8, bankMSB: UInt8, bankLSB: UInt8, onChannel: UInt8)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sending-information-to-the-midi-instrument:0031:0001">악기로 MIDI Program Change 및 Bank Select 이벤트를 전송합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:sending-information-to-the-midi-instrument:0032:0001"><a href="avaudiounitmidiinstrument/send(_:">func send(UnsafePointer&lt;MIDIEventList&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sending-information-to-the-midi-instrument:0033:0001">악기로 MIDI 이벤트 목록을 전송합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:starting-and-stopping-play:0034:0001">재생 시작 및 중지</span>

- <span class="ko-segment" data-segment-id="seg:list:starting-and-stopping-play:0035:0001"><a href="avaudiounitmidiinstrument/startnote(_:withvelocity:onchannel:">func startNote(UInt8, withVelocity: UInt8, onChannel: UInt8)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:starting-and-stopping-play:0036:0001">악기로 MIDI Note On 이벤트를 전송합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:starting-and-stopping-play:0037:0001"><a href="avaudiounitmidiinstrument/stopnote(_:onchannel:">func stopNote(UInt8, onChannel: UInt8)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:starting-and-stopping-play:0038:0001">악기로 MIDI Note Off 이벤트를 전송합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0039:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0040:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0041:0001"><a href="avaudiounit.md">AVAudioUnit</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:inherited-by:0042:0001">상속 받는 대상</span>

- <span class="ko-segment" data-segment-id="seg:list:inherited-by:0043:0001"><a href="avaudiounitsampler.md">AVAudioUnitSampler</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0044:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0045:0001"><a href="avaudio3dmixing.md">AVAudio3DMixing</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0045:0002"><a href="avaudiomixing.md">AVAudioMixing</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0045:0003"><a href="avaudiostereomixing.md">AVAudioStereoMixing</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0045:0004"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0045:0005"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0045:0006"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0045:0007"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0045:0008"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0045:0009"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:conforms-to:0047:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiounitmidiinstrument">View on Apple Developer</a>*</span>

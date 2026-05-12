---
source_path: "documentation/AVFAudio/avaudiounitmidiinstrument/sendmidievent-data1data2.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiounitmidiinstrument/sendmidievent-data1data2"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sendmidieventdata1data2:0000:0001">sendMIDIEvent(_:data1:data2:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sendmidieventdata1data2:0001:0001">**Framework**: AVFAudio **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sendmidieventdata1data2:0002:0001">두 개의 데이터 바이트를 포함하는 MIDI 이벤트를 악기로 전송합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sendmidieventdata1data2:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:sendmidieventdata1data2:0004:0001">iOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sendmidieventdata1data2:0004:0002">iPadOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sendmidieventdata1data2:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:sendmidieventdata1data2:0004:0004">macOS 10.10+</span>
- <span class="ko-segment" data-segment-id="seg:list:sendmidieventdata1data2:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sendmidieventdata1data2:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func sendMIDIEvent(_ midiStatus: UInt8, data1: UInt8, data2: UInt8)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>midiStatus</code>: MIDI 이벤트의 상태 값입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>data1</code>: MIDI 이벤트의 첫 번째 데이터 바이트입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0003"><code>data2</code>: MIDI 이벤트의 첫 번째 데이터 바이트입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avaudiounitmidiinstrument/sendcontroller(_:withvalue:onchannel:">func sendController(UInt8, withValue: UInt8, onChannel: UInt8)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">악기로 MIDI 컨트롤러 이벤트를 전송합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avaudiounitmidiinstrument/sendmidievent(_:data1:">func sendMIDIEvent(UInt8, data1: UInt8)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">악기로 데이터 바이트 1개를 포함하는 MIDI 이벤트를 전송합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avaudiounitmidiinstrument/sendmidisysexevent(_:">func sendMIDISysExEvent(Data)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avspeechsynthesisvoice/currentlanguagecode(">View on Apple Developer</a>)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avaudiounitmidiinstrument/sendpitchbend(_:onchannel:">func sendPitchBend(UInt16, onChannel: UInt8)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">악기로 MIDI Pitch Bend 이벤트를 전송합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avaudiounitmidiinstrument/sendpressure(_:onchannel:">func sendPressure(UInt8, onChannel: UInt8)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">악기로 MIDI 채널 압력 이벤트를 전송합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avaudiounitmidiinstrument/sendpressure(forkey:withvalue:onchannel:">func sendPressure(forKey: UInt8, withValue: UInt8, onChannel: UInt8)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">악기로 MIDI Polyphonic Key Pressure 이벤트를 전송합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avaudiounitmidiinstrument/sendprogramchange(_:onchannel:">func sendProgramChange(UInt8, onChannel: UInt8)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">악기로 MIDI Program Change 및 Bank Select 이벤트를 전송합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avaudiounitmidiinstrument/sendprogramchange(_:bankmsb:banklsb:onchannel:">func sendProgramChange(UInt8, bankMSB: UInt8, bankLSB: UInt8, onChannel: UInt8)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">악기로 MIDI Program Change 및 Bank Select 이벤트를 전송합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avaudiounitmidiinstrument/send(_:">func send(UnsafePointer&lt;MIDIEventList&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">악기로 MIDI 이벤트 리스트를 전송합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiounitmidiinstrument/sendmidievent(_:data1:data2:">View on Apple Developer</a>)*</span>

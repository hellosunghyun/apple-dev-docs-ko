---
source_path: "documentation/AVFAudio/avaudiounitmidiinstrument/sendpitchbend-onchannel.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiounitmidiinstrument/sendpitchbend-onchannel"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sendpitchbendonchannel:0000:0001">sendPitchBend(_:onChannel:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sendpitchbendonchannel:0001:0001">**Framework**: AVFAudio **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sendpitchbendonchannel:0002:0001">악기로 MIDI Pitch Bend 이벤트를 전송합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sendpitchbendonchannel:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:sendpitchbendonchannel:0004:0001">iOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sendpitchbendonchannel:0004:0002">iPadOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sendpitchbendonchannel:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:sendpitchbendonchannel:0004:0004">macOS 10.10+</span>
- <span class="ko-segment" data-segment-id="seg:list:sendpitchbendonchannel:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sendpitchbendonchannel:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func sendPitchBend(_ pitchbend: UInt16, onChannel channel: UInt8)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 메서드가 호출되지 않으면 시스템은 기본 피치 벤드 값인 <code>8192</code>(피치 변화 없음)을 사용합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>pitchbend</code>: 피치벤드의 값입니다. 유효한 값 범위는 <code>0</code>에서 <code>16383</code>입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>channel</code>: 이벤트를 보낼 채널 번호입니다. 유효한 값 범위는 <code>0</code>에서 <code>15</code>입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avaudiounitmidiinstrument/sendcontroller(_:withvalue:onchannel:">func sendController(UInt8, withValue: UInt8, onChannel: UInt8)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">악기로 MIDI 컨트롤러 이벤트를 보냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avaudiounitmidiinstrument/sendmidievent(_:data1:">func sendMIDIEvent(UInt8, data1: UInt8)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">한 개의 데이터 바이트를 포함하는 MIDI 이벤트를 악기로 전송합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avaudiounitmidiinstrument/sendmidievent(_:data1:data2:">func sendMIDIEvent(UInt8, data1: UInt8, data2: UInt8)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">두 개의 데이터 바이트를 포함하는 MIDI 이벤트를 악기로 전송합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avaudiounitmidiinstrument/sendmidisysexevent(_:">func sendMIDISysExEvent(Data)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">MIDI System Exclusive 이벤트를 악기로 전송합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avaudiounitmidiinstrument/sendpressure(_:onchannel:">func sendPressure(UInt8, onChannel: UInt8)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">MIDI 채널 압력 이벤트를 악기로 전송합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avassetwriterinput/respondtoeachpassdescription(on:using:">func sendPressure(forKey: UInt8, withValue: UInt8, onChannel: UInt8)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">MIDI Polyphonic key pressure 이벤트를 악기로 전송합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avaudiounitmidiinstrument/sendprogramchange(_:onchannel:">func sendProgramChange(UInt8, onChannel: UInt8)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">MIDI Program Change 및 Bank Select 이벤트를 악기로 전송합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avaudiounitmidiinstrument/sendprogramchange(_:bankmsb:banklsb:onchannel:">func sendProgramChange(UInt8, bankMSB: UInt8, bankLSB: UInt8, onChannel: UInt8)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">MIDI Program Change 및 Bank Select 이벤트를 악기로 전송합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avaudiounitmidiinstrument/send(_:">func send(UnsafePointer&lt;MIDIEventList&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">MIDI 이벤트 목록을 악기로 전송합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiounitmidiinstrument/sendpitchbend(_:onchannel:">View on Apple Developer</a>)*</span>

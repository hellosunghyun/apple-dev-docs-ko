---
source_path: "documentation/AVFAudio/avmidiprogramchangeevent.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avmidiprogramchangeevent"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avmidiprogramchangeevent:0000:0001">AVMIDIProgramChangeEvent</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avmidiprogramchangeevent:0001:0001">**Framework**: AVFAudio **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avmidiprogramchangeevent:0002:0001">MIDI program 또는 patch change 메시지를 나타내는 객체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avmidiprogramchangeevent:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avmidiprogramchangeevent:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmidiprogramchangeevent:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmidiprogramchangeevent:0004:0003">Mac Catalyst 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmidiprogramchangeevent:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmidiprogramchangeevent:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmidiprogramchangeevent:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class AVMIDIProgramChangeEvent
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">이 메시지의 효과는 <a href="avmusictrack.md">@@TOKEN_0@@</a> destination audio unit에 따라 달라집니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0009:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:creating-a-program-change-event:0010:0001">Program Change Event 생성</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-a-program-change-event:0011:0001"><a href="avmidiprogramchangeevent/init(channel:programnumber:">init(channel: UInt32, programNumber: UInt32)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-a-program-change-event:0012:0001">채널과 프로그램 번호로 program change event를 생성합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:configuring-a-program-change-event:0013:0001">Program Change Event 구성</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-a-program-change-event:0014:0001"><a href="avmidiprogramchangeevent/programnumber.md">var programNumber: UInt32</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-a-program-change-event:0015:0001">MIDI 프로그램 번호입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0016:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0017:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0018:0001"><a href="avmidichannelevent.md">AVMIDIChannelEvent</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0019:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0020:0001"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0020:0002"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0020:0003"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0020:0004"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0020:0005"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0020:0006"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0021:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avmidichannelevent.md">class AVMIDIChannelEvent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">단일 MIDI 채널에서 동작하는 모든 MIDI 메시지의 기본 class입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avmidichannelpressureevent.md">class AVMIDIChannelPressureEvent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">MIDI 채널 압력 메시지를 나타내는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avmidipolypressureevent.md">class AVMIDIPolyPressureEvent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">MIDI poly 또는 key pressure 이벤트를 나타내는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avmidipitchbendevent.md">class AVMIDIPitchBendEvent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">MIDI pitch bend 메시지를 나타내는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="avmidicontrolchangeevent.md">class AVMIDIControlChangeEvent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">MIDI control change 메시지를 나타내는 객체입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avmidiprogramchangeevent">View on Apple Developer</a>*</span>

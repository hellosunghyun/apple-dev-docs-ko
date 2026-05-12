---
source_path: "documentation/AVFAudio/avmidimetaevent.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avmidimetaevent"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avmidimetaevent:0000:0001">AVMIDIMetaEvent</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avmidimetaevent:0001:0001">**Framework**: AVFAudio **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avmidimetaevent:0002:0001">MIDI 메타 이벤트 메시지를 나타내는 객체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avmidimetaevent:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avmidimetaevent:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmidimetaevent:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmidimetaevent:0004:0003">Mac Catalyst 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmidimetaevent:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmidimetaevent:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmidimetaevent:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class AVMIDIMetaEvent
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">이 이벤트를 생성한 후에는 크기와 내용을 수정할 수 없습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0002">이것은 내용이 MIDI 사양과 일치하는지 검증하지 않습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0001">시퀀스의 템포 트랙에는 <a href="avmidimetaevent/eventtype/tempo.md">@@TOKEN_0@@</a>, <a href="avmidimetaevent/eventtype/smpteoffset.md">@@TOKEN_1@@</a>, <a href="avmidimetaevent/eventtype/timesignature.md">@@TOKEN_2@@</a>만 추가할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0010:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:creating-a-meta-event:0011:0001">메타 이벤트 생성</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-a-meta-event:0012:0001"><a href="avmidimetaevent/init(type:data:">init(type: AVMIDIMetaEvent.EventType, data: Data)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-a-meta-event:0013:0001">MIDI 메타 이벤트 형식과 데이터로 이벤트를 생성합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:getting-the-meta-event-type:0014:0001">메타 이벤트 유형 가져오기</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-the-meta-event-type:0015:0001"><a href="avmidimetaevent/type.md">var type: AVMIDIMetaEvent.EventType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-the-meta-event-type:0016:0001">메타 이벤트의 형식입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-the-meta-event-type:0017:0001"><a href="avmidimetaevent/eventtype.md">AVMIDIMetaEvent.EventType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-the-meta-event-type:0018:0001">메타 이벤트 형식을 나타내는 상수입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0019:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0020:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0021:0001"><a href="avmusicevent.md">AVMusicEvent</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0022:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0001"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0002"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0003"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0004"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0005"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0006"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0024:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="avmidinoteevent.md">class AVMIDINoteEvent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">MIDI note on 또는 note off 메시지를 나타내는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="avmidisysexevent.md">class AVMIDISysexEvent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">MIDI system exclusive 메시지를 나타내는 객체입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avmidimetaevent">View on Apple Developer</a>*</span>

---
source_path: "documentation/AVFAudio/avaupresetevent.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaupresetevent"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avaupresetevent:0000:0001">AVAUPresetEvent</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaupresetevent:0001:0001">**Framework**: AVFAudio **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaupresetevent:0002:0001">음악 트랙의 대상 오디오 유닛에서 preset 로드 및 변경을 나타내는 객체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaupresetevent:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avaupresetevent:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaupresetevent:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaupresetevent:0004:0003">Mac Catalyst 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaupresetevent:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaupresetevent:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaupresetevent:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class AVAUPresetEvent
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:creating-a-preset-event:0008:0001">Preset Event 생성</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-a-preset-event:0009:0001">[init(scope: UInt32, element: UInt32, dictionary: [AnyHashable : Any])](avaupresetevent/init(scope:element:dictionary:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-a-preset-event:0010:0001">preset에 대한 scope, element 및 dictionary로 이벤트를 생성합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:configuring-a-preset-event:0011:0001">Preset Event 구성</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-a-preset-event:0012:0001"><a href="avaupresetevent/scope.md">var scope: UInt32</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-a-preset-event:0013:0001">오디오 유닛의 scope입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-a-preset-event:0014:0001"><a href="avaupresetevent/element.md">var element: UInt32</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-a-preset-event:0015:0001">scope의 요소 인덱스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-a-preset-event:0016:0001">[var presetDictionary: [AnyHashable : Any]](avaupresetevent/presetdictionary.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-a-preset-event:0017:0001">preset를 포함하는 dictionary입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0018:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0019:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0020:0001"><a href="avmusicevent.md">AVMusicEvent</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0021:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0022:0001"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0022:0002"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0022:0003"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0022:0004"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0022:0005"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0022:0006"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0023:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avmusicevent.md">class AVMusicEvent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">음악 트랙과 연계된 이벤트의 기본 class입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avmusicuserevent.md">class AVMusicUserEvent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">사용자 지정 사용자 메시지를 나타내는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avparameterevent.md">class AVParameterEvent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">음악 트랙의 대상에서 매개변수 이벤트를 나타내는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="avextendedtempoevent.md">class AVExtendedTempoEvent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">특정 beats-per-minute(BPM) 값으로 템포를 변경하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="avextendednoteonevent.md">class AVExtendedNoteOnEvent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">MIDI note on 이벤트의 사용자 지정 확장 항목을 나타내는 객체입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaupresetevent">View on Apple Developer</a>*</span>

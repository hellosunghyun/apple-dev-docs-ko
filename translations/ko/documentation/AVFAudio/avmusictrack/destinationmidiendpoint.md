---
source_path: "documentation/AVFAudio/avmusictrack/destinationmidiendpoint.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avmusictrack/destinationmidiendpoint"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:destinationmidiendpoint:0000:0001">destinationMIDIEndpoint</span>

<span class="ko-segment" data-segment-id="seg:paragraph:destinationmidiendpoint:0001:0001">**Framework**: AVFAudio **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:destinationmidiendpoint:0002:0001">트랙의 대상으로 지정한 MIDI endpoint입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:destinationmidiendpoint:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:destinationmidiendpoint:0004:0001">iOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:destinationmidiendpoint:0004:0002">iPadOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:destinationmidiendpoint:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:destinationmidiendpoint:0004:0004">macOS 10.11+</span>
- <span class="ko-segment" data-segment-id="seg:list:destinationmidiendpoint:0004:0005">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var destinationMIDIEndpoint: MIDIEndpointRef { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 property와 <a href="avmusictrack/destinationaudiounit.md">@@TOKEN_0@@</a>는 상호 배타적입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">For nonvisual tracks, like audio or chapter tracks, the value is <a href="https://developer.apple.com/documentation/CoreFoundation/CGSize/zero">@@TOKEN_0@@</a>.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">재생 시 트랙은 MIDI endpoint로 이벤트를 전송합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0004">자세한 내용은 <a href="https://developer.apple.com/documentation/CoreMIDI/MIDIDestinationCreate(_:_:_:_:_:">@@TOKEN_0@@</a>)를 참조합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0005">트랙의 시퀀스가 재생 상태일 때는 endpoint를 변경할 수 없습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avmusictrack/destinationaudiounit.md">var destinationAudioUnit: AVAudioUnit?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">트랙 이벤트를 수신하는 audio unit입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avmusictrack/destinationmidiendpoint">View on Apple Developer</a>*</span>

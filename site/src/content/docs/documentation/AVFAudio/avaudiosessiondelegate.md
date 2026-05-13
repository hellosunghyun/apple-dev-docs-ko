---
source_path: "documentation/AVFAudio/avaudiosessiondelegate.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiosessiondelegate"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avaudiosessiondelegate:0000:0001">AVAudioSessionDelegate</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiosessiondelegate:0001:0001">**Framework**: AVFAudio **Kind**: protocol</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiosessiondelegate:0002:0001">오디오 세션의 상태 변경에 대한 응답을 정의하는 프로토콜입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiosessiondelegate:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avaudiosessiondelegate:0004:0001">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiosessiondelegate:0004:0002">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
protocol AVAudioSessionDelegate : NSObjectProtocol
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001"><code>AVAudioSession</code> 객체의 대리자는 <code>AVAudioSessionDelegate</code> 프로토콜을 채택해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0002">이 프로토콜의 메서드는 선택 사항입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0003">이로 인해 대리자는 다음과 같은 상태 변경에 대응할 수 있습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:overview:0009:0001">오디오 입력 가용성 변경</span>
- <span class="ko-segment" data-segment-id="seg:list:overview:0009:0002">오디오 세션 중단 또는 오디오 세션 중단 종료</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0010:0001"><code>AVAudioSession</code> 대리자는 오디오 세션 수준에서 중단에 대응할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0010:0002">이 인터페이스는 모든 iOS 오디오 기술과 함께 사용할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0010:0003">예를 들어, <code>AVAudioSession</code> 대리자는 OpenAL 및 오디오 유닛 재생의 중단을 처리할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0011:0001">AVFoundation 프레임워크를 사용해 녹음 또는 재생할 때도 개별 녹음기 또는 플레이어 수준에서 중단에 대응할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0011:0002">이를 위해서는 <a href="avaudiorecorderdelegate.md">@@TOKEN_0@@</a> 및 <a href="avaudioplayerdelegate.md">@@TOKEN_1@@</a>에 설명된 프로토콜을 사용해 오디오 녹음기 또는 오디오 플레이어 대리자를 생성해야 합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0012:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:delegate-methods:0013:0001">대리자 메서드</span>

- <span class="ko-segment" data-segment-id="seg:list:delegate-methods:0014:0001"><a href="avaudiosessiondelegate/begininterruption.md">func beginInterruption()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:delegate-methods:0015:0001">오디오 세션이 중단된 후 호출됩니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:delegate-methods:0016:0001"><a href="avaudiosessiondelegate/endinterruption.md">func endInterruption()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:delegate-methods:0017:0001">오디오 세션 중단이 종료된 뒤 호출됩니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:delegate-methods:0018:0001"><a href="avaudiosessiondelegate/endinterruption(withflags:">func endInterruption(withFlags: Int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:delegate-methods:0019:0001">오디오 세션의 상태를 나타내는 플래그와 함께 오디오 세션 중단이 종료된 후 호출됩니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:delegate-methods:0020:0001"><a href="avaudiosessiondelegate/inputisavailablechanged(_:">func inputIsAvailableChanged(Bool)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:delegate-methods:0021:0001">기기에서 오디오 입력 가용성이 변경된 뒤 호출됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0022:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0023:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0024:0001"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0025:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avaudiosession/delegate.md">var delegate: (any AVAudioSessionDelegate)?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">오디오 세션의 대리자 객체입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiosessiondelegate">View on Apple Developer</a>*</span>

---
source_path: "documentation/AVFAudio/avaudiouniteffect.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiouniteffect"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avaudiouniteffect:0000:0001">AVAudioUnitEffect</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiouniteffect:0001:0001">**Framework**: AVFAudio **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiouniteffect:0002:0001">실시간으로 오디오를 처리하는 객체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiouniteffect:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avaudiouniteffect:0004:0001">iOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiouniteffect:0004:0002">iPadOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiouniteffect:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiouniteffect:0004:0004">macOS 10.10+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiouniteffect:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiouniteffect:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class AVAudioUnitEffect
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">이 처리는 <a href="https://developer.apple.com/documentation/AudioToolbox/AudioUnit">@@TOKEN_0@@</a> 중 type이 effect, music effect, panner, remote effect 또는 remote music effect인 오디오 유닛을 사용합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0002">이러한 효과는 실시간으로 실행되며 일부 오디오 입력 샘플을 처리해 여러 개의 오디오 출력 샘플을 생성합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0003">딜레이 유닛은 효과 유닛의 예입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0009:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:creating-an-audio-effect:0010:0001">오디오 효과 생성</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-an-audio-effect:0011:0001"><a href="avaudiouniteffect/init(audiocomponentdescription:">init(audioComponentDescription: AudioComponentDescription)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-an-audio-effect:0012:0001">지정된 설명으로 오디오 유닛 효과 객체를 생성합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:getting-the-bypass-state:0013:0001">바이패스 상태 가져오기</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-the-bypass-state:0014:0001"><a href="avaudiouniteffect/bypass.md">var bypass: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-the-bypass-state:0015:0001">오디오 유닛의 bypass 상태입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0016:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0017:0001">상속 대상</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0018:0001"><a href="avaudiounit.md">AVAudioUnit</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:inherited-by:0019:0001">상속한 클래스</span>

- <span class="ko-segment" data-segment-id="seg:list:inherited-by:0020:0001"><a href="avaudiounitdelay.md">AVAudioUnitDelay</a></span>
- <span class="ko-segment" data-segment-id="seg:list:inherited-by:0020:0002"><a href="avaudiounitdistortion.md">AVAudioUnitDistortion</a></span>
- <span class="ko-segment" data-segment-id="seg:list:inherited-by:0020:0003"><a href="avaudiouniteq.md">AVAudioUnitEQ</a></span>
- <span class="ko-segment" data-segment-id="seg:list:inherited-by:0020:0004"><a href="avaudiounitreverb.md">AVAudioUnitReverb</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0021:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0022:0001"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0022:0002"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0022:0003"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0022:0004"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0022:0005"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0022:0006"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0023:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avaudiouniteq.md">class AVAudioUnitEQ</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">멀티밴드 이퀄라이저를 구현하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avaudiounitdistortion.md">class AVAudioUnitDistortion</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">다단계 왜곡 효과를 구현하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avaudiounitdelay.md">class AVAudioUnitDelay</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">딜레이 효과를 구현하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="avaudiounitreverb.md">class AVAudioUnitReverb</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">리버브 효과를 구현하는 객체입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiouniteffect">View on Apple Developer</a>*</span>

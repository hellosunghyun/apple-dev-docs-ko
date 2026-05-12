---
source_path: "documentation/AVFAudio/avaudiounitreverb.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiounitreverb"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avaudiounitreverb:0000:0001">AVAudioUnitReverb</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiounitreverb:0001:0001">**Framework**: AVFAudio **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiounitreverb:0002:0001">리버브 효과를 구현하는 객체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiounitreverb:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avaudiounitreverb:0004:0001">iOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiounitreverb:0004:0002">iPadOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiounitreverb:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiounitreverb:0004:0004">macOS 10.10+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiounitreverb:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiounitreverb:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class AVAudioUnitReverb
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">리버브는 특정 환경의 음향 특성을 시뮬레이션합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0002">여러 프리셋을 사용하여 특정 공간을 시뮬레이션하고 <a href="avaudiounitreverb/wetdrymix.md">@@TOKEN_0@@</a> 속성으로 원본 신호와 혼합합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0009:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:configure-the-reverb:0010:0001">리버브 구성</span>

- <span class="ko-segment" data-segment-id="seg:list:configure-the-reverb:0011:0001"><a href="avaudiounitreverb/loadfactorypreset(_:">func loadFactoryPreset(AVAudioUnitReverbPreset)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:configure-the-reverb:0012:0001">오디오 유닛을 리버브 프리셋으로 구성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configure-the-reverb:0013:0001"><a href="avaudiounitreverbpreset.md">enum AVAudioUnitReverbPreset</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configure-the-reverb:0014:0001">프리셋 리버브를 나타내는 상수입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:getting-and-setting-the-reverb-values:0015:0001">리버브 값 가져오기 및 설정</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-and-setting-the-reverb-values:0016:0001"><a href="avaudiounitreverb/wetdrymix.md">var wetDryMix: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-and-setting-the-reverb-values:0017:0001">wet 신호와 dry 신호의 혼합입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0018:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0019:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0020:0001"><a href="avaudiouniteffect.md">AVAudioUnitEffect</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0021:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0022:0001"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0022:0002"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0022:0003"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0022:0004"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0022:0005"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0022:0006"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0023:0001">관련 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avaudiouniteffect.md">class AVAudioUnitEffect</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">실시간으로 오디오를 처리하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avaudiouniteq.md">class AVAudioUnitEQ</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">다중 밴드 이퀄라이저를 구현하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avaudiounitdistortion.md">class AVAudioUnitDistortion</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">다단계 디스토션 효과를 구현하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="avaudiounitdelay.md">class AVAudioUnitDelay</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">딜레이 효과를 구현하는 객체입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiounitreverb">View on Apple Developer</a>*</span>

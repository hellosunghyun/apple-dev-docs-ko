---
source_path: "documentation/AVFAudio/avaudiounittimeeffect.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiounittimeeffect"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avaudiounittimeeffect:0000:0001">AVAudioUnitTimeEffect</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiounittimeeffect:0001:0001">**Framework**: AVFAudio **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiounittimeeffect:0002:0001">실시간이 아닌(non-real-time) 오디오를 처리하는 개체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiounittimeeffect:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avaudiounittimeeffect:0004:0001">iOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiounittimeeffect:0004:0002">iPadOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiounittimeeffect:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiounittimeeffect:0004:0004">macOS 10.10+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiounittimeeffect:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiounittimeeffect:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class AVAudioUnitTimeEffect
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">You can download HTTP Live Streaming assets to an iOS device using the <a href="avassetdownloadurlsession.md">@@TOKEN_0@@</a> and <a href="avassetdownloadtask.md">@@TOKEN_1@@</a> classes.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0002">이러한 효과는 실시간으로 오디오를 처리하지 않습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0003"><a href="avaudiounitvarispeed.md">@@TOKEN_0@@</a> 클래스는 time effect 유닛의 예입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0009:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:creating-a-time-effect:0010:0001">시간 효과 생성하기</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-a-time-effect:0011:0001"><a href="avaudiounittimeeffect/init(audiocomponentdescription:">@@TOKEN_0@@</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-a-time-effect:0012:0001">지정된 설명을 사용해 time effect 오디오 유닛을 생성합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:getting-and-setting-the-time-effect:0013:0001">시간 효과 가져오기 및 설정하기</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-and-setting-the-time-effect:0014:0001"><a href="avaudiounittimeeffect/bypass.md">var bypass: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-and-setting-the-time-effect:0015:0001">오디오 유닛의 bypass 상태입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0016:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0017:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0018:0001"><a href="avaudiounit.md">AVAudioUnit</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:inherited-by:0019:0001">상속 받는 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:inherited-by:0020:0001"><a href="avaudiounittimepitch.md">AVAudioUnitTimePitch</a></span>
- <span class="ko-segment" data-segment-id="seg:list:inherited-by:0020:0002"><a href="avaudiounitvarispeed.md">AVAudioUnitVarispeed</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0021:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0022:0001"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0022:0002"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0022:0003"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0022:0004"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0022:0005"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0022:0006"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0023:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avaudiounittimepitch.md">class AVAudioUnitTimePitch</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">재생 속도와 피치 시프트를 서로 독립적으로 고품질로 제공하는 개체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avaudiounitvarispeed.md">class AVAudioUnitVarispeed</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">재생 속도를 제어할 수 있는 개체입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiounittimeeffect">View on Apple Developer</a>*</span>

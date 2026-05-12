---
source_path: "documentation/AVFAudio/avaudiounitgenerator.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiounitgenerator"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avaudiounitgenerator:0000:0001">AVAudioUnitGenerator</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiounitgenerator:0001:0001">**Framework**: AVFAudio **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiounitgenerator:0002:0001">오디오 출력을 생성하는 객체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiounitgenerator:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avaudiounitgenerator:0004:0001">iOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiounitgenerator:0004:0002">iPadOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiounitgenerator:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiounitgenerator:0004:0004">macOS 10.10+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiounitgenerator:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiounitgenerator:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class AVAudioUnitGenerator
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">제너레이터는 <code>kAudioUnitType_Generator</code> 또는 <code>kAudioUnitType_RemoteGenerator</code> 유형의 <a href="https://developer.apple.com/documentation/AudioToolbox/AudioUnit">@@TOKEN_2@@</a>를 나타냅니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0002">제너레이터는 오디오 입력이 없지만 오디오 출력을 생성합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0003">예로 톤 제너레이터가 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0009:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:creating-an-audio-unit-generator:0010:0001">오디오 유닛 제너레이터 만들기</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-an-audio-unit-generator:0011:0001"><a href="avaudiounitgenerator/init(audiocomponentdescription:">init(audioComponentDescription: AudioComponentDescription)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-an-audio-unit-generator:0012:0001">지정된 설명으로 제너레이터 오디오 유닛을 생성합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:getting-and-setting-the-bypass-status:0013:0001">bypass 상태 가져오기 및 설정</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-and-setting-the-bypass-status:0014:0001"><a href="avaudiounitgenerator/bypass.md">var bypass: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-and-setting-the-bypass-status:0015:0001">오디오 유닛의 bypass 상태입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0016:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0017:0001">상속 대상</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0018:0001"><a href="avaudiounit.md">AVAudioUnit</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0019:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0020:0001"><a href="avaudio3dmixing.md">AVAudio3DMixing</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0020:0002"><a href="avaudiomixing.md">AVAudioMixing</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0020:0003"><a href="avaudiostereomixing.md">AVAudioStereoMixing</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0020:0004"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0020:0005"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0020:0006"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0020:0007"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0020:0008"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0020:0009"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:conforms-to:0022:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiounitgenerator">View on Apple Developer</a>*</span>

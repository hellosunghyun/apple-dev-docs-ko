---
source_path: "documentation/AVFAudio/avaudiounitsampler.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiounitsampler"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avaudiounitsampler:0000:0001">AVAudioUnitSampler</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiounitsampler:0001:0001">**Framework**: AVFAudio **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiounitsampler:0002:0001">Apple의 Sampler 오디오 유닛을 기반으로 하나 이상의 악기 샘플로 구성하는 객체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiounitsampler:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avaudiounitsampler:0004:0001">iOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiounitsampler:0004:0002">iPadOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiounitsampler:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiounitsampler:0004:0004">macOS 10.10+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiounitsampler:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiounitsampler:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class AVAudioUnitSampler
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001"><code>AVAudioUnitSampler</code>는 Apple의 Sampler 오디오 유닛을 위한 <a href="avaudiounit.md">@@TOKEN_1@@</a>입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0001">샘플러는 다양한 유형의 파일에서 악기를 로드하여 구성합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0002">여기에는 <code>aupreset</code> 파일, DLS 또는 SF2 사운드 뱅크, EXS24 악기, 단일 오디오 파일 또는 오디오 파일 배열이 포함됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0010:0001"><code>AVAudioUnitSampler</code>의 출력은 단일 스테레오 버스입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0011:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:configuring-the-sampler-audio-unit:0012:0001">Sampler 오디오 유닛 구성</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-the-sampler-audio-unit:0013:0001"><a href="avaudiounitsampler/loadinstrument(at:">func loadInstrument(at: URL) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-the-sampler-audio-unit:0014:0001">지정된 악기 파일로 샘플러를 구성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-the-sampler-audio-unit:0015:0001">[func loadAudioFiles(at: [URL]) throws](avaudiounitsampler/loadaudiofiles(at:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-the-sampler-audio-unit:0016:0001">지정된 오디오 파일을 로드하여 샘플러를 구성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-the-sampler-audio-unit:0017:0001"><a href="avaudiounitsampler/loadsoundbankinstrument(at:program:bankmsb:banklsb:">func loadSoundBankInstrument(at: URL, program: UInt8, bankMSB: UInt8, bankLSB: UInt8) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-the-sampler-audio-unit:0018:0001">지정한 사운드뱅크에서 특정 악기를 로드합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:getting-and-setting-sampler-values:0019:0001">Sampler 값 가져오기 및 설정</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-and-setting-sampler-values:0020:0001"><a href="avaudiounitsampler/globaltuning.md">var globalTuning: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-and-setting-sampler-values:0021:0001">연주되는 모든 음의 튜닝을 조정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-and-setting-sampler-values:0022:0001"><a href="avaudiounitsampler/overallgain.md">var overallGain: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-and-setting-sampler-values:0023:0001">연주되는 모든 음의 게인을 데시벨 단위로 조정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-and-setting-sampler-values:0024:0001"><a href="avaudiounitsampler/stereopan.md">var stereoPan: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-and-setting-sampler-values:0025:0001">연주되는 모든 음의 스테레오 팬닝을 조정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-and-setting-sampler-values:0026:0001"><a href="avaudiounitsampler/mastergain.md">var masterGain: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-and-setting-sampler-values:0027:0001">연주되는 모든 음의 게인을 데시벨 단위로 조정합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0028:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0029:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0030:0001"><a href="avaudiounitmidiinstrument.md">AVAudioUnitMIDIInstrument</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0031:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0032:0001"><a href="avaudio3dmixing.md">AVAudio3DMixing</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0032:0002"><a href="avaudiomixing.md">AVAudioMixing</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0032:0003"><a href="avaudiostereomixing.md">AVAudioStereoMixing</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0032:0004"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0032:0005"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0032:0006"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0032:0007"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0032:0008"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0032:0009"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0033:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="avaudiosequencer.md">class AVAudioSequencer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">시스템이 음악 트랙으로 구성한 MIDI 이벤트 컬렉션에서 오디오를 재생하는 객체입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiounitsampler">View on Apple Developer</a>*</span>

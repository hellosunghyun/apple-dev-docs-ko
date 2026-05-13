---
source_path: "documentation/AVFAudio/avaudioconverterprimeinfo.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudioconverterprimeinfo"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avaudioconverterprimeinfo:0000:0001">AVAudioConverterPrimeInfo</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudioconverterprimeinfo:0001:0001">**Framework**: AVFAudio **Kind**: struct</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudioconverterprimeinfo:0002:0001">오디오 변환을 위한 사전 준비 정보입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudioconverterprimeinfo:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avaudioconverterprimeinfo:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudioconverterprimeinfo:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudioconverterprimeinfo:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudioconverterprimeinfo:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudioconverterprimeinfo:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudioconverterprimeinfo:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudioconverterprimeinfo:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
struct AVAudioConverterPrimeInfo
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:creating-priming-information:0008:0001">프라이밍 정보 만들기</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-priming-information:0009:0001"><a href="avaudioconverterprimeinfo/init.md">init()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-priming-information:0010:0001">프라이밍 정보 인스턴스를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-priming-information:0011:0001"><a href="avaudioconverterprimeinfo/init(leadingframes:trailingframes:">init(leadingFrames: AVAudioFrameCount, trailingFrames: AVAudioFrameCount)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-priming-information:0012:0001">지정한 선행 및 후행 프레임으로 프라이밍 정보 인스턴스를 생성합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:getting-frame-properties:0013:0001">프레임 속성 가져오기</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-frame-properties:0014:0001"><a href="avaudioconverterprimeinfo/leadingframes.md">var leadingFrames: AVAudioFrameCount</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-frame-properties:0015:0001">변환기가 고품질 변환을 수행하는 데 필요한 선행(이전) 입력 프레임 수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-frame-properties:0016:0001"><a href="avaudioconverterprimeinfo/trailingframes.md">var trailingFrames: AVAudioFrameCount</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-frame-properties:0017:0001">변환기가 고품질 변환을 수행하는 데 필요한 끝 입력 프레임 이후의 후행 입력 프레임 수입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0018:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0019:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0020:0001"><a href="../Swift/BitwiseCopyable.md">BitwiseCopyable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0020:0002"><a href="../Swift/Sendable.md">Sendable</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0021:0001">추가 참조</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avaudioconverter/primeinfo.md">var primeInfo: AVAudioConverterPrimeInfo</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">변환기가 사용하는 프라이밍 프레임 수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avaudioconverter/primemethod.md">var primeMethod: AVAudioConverterPrimeMethod</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">샘플 속도 변환기 또는 디코더가 사용하는 프라이밍 방식입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avaudioconverterprimemethod.md">enum AVAudioConverterPrimeMethod</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">prime method 속성의 옵션입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudioconverterprimeinfo">View on Apple Developer</a>*</span>

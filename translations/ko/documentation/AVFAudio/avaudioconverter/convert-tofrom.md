---
source_path: "documentation/AVFAudio/avaudioconverter/convert-tofrom.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudioconverter/convert-tofrom"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:converttofrom:0000:0001">convert(to:from:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:converttofrom:0001:0001">**Framework**: AVFAudio **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:converttofrom:0002:0001">코덱이나 샘플 레이트 변환을 포함하지 않는 오디오 형식 간 기본 변환을 수행합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:converttofrom:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:converttofrom:0004:0001">iOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:converttofrom:0004:0002">iPadOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:converttofrom:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:converttofrom:0004:0004">macOS 10.11+</span>
- <span class="ko-segment" data-segment-id="seg:list:converttofrom:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:converttofrom:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:converttofrom:0004:0007">watchOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func convert(to outputBuffer: AVAudioPCMBuffer, from inputBuffer: AVAudioPCMBuffer) throws
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001"><code>outputBuffer</code>의 <a href="avaudiopcmbuffer/framecapacity.md">@@TOKEN_1@@</a> 값은 <code>inputBuffer</code>의 <a href="avaudiopcmbuffer/framelength.md">@@TOKEN_3@@</a> 값보다 작지 않아야 합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>outputBuffer</code>: 출력 오디오 버퍼입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>inputBuffer</code>: 입력 오디오 버퍼입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avaudioconverter/convert(to:error:withinputfrom:">func convert(to: AVAudioBuffer, error: NSErrorPointer, withInputFrom: AVAudioConverterInputBlock) -&gt; AVAudioConverterOutputStatus</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">시스템이 지원하는 경우 오디오 형식 간 변환을 수행합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avaudioconverterinputblock.md">typealias AVAudioConverterInputBlock</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">필요 시 변환 입력 데이터를 가져오기 위한 블록입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avaudioconverterinputstatus.md">enum AVAudioConverterInputStatus</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">오디오 변환기 입력 블록의 상태를 나타내는 옵션입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avaudioconverteroutputstatus.md">enum AVAudioConverterOutputStatus</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">오디오 변환기 메서드의 반환 상태를 나타내는 옵션입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudioconverter/convert(to:from:">View on Apple Developer</a>)*</span>

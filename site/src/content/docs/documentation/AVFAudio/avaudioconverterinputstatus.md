---
source_path: "documentation/AVFAudio/avaudioconverterinputstatus.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudioconverterinputstatus"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avaudioconverterinputstatus:0000:0001">AVAudioConverterInputStatus</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudioconverterinputstatus:0001:0001">**Framework**: AVFAudio **Kind**: enum</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudioconverterinputstatus:0002:0001">오디오 변환기 입력 블록의 상태를 나타내는 옵션입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudioconverterinputstatus:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avaudioconverterinputstatus:0004:0001">iOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudioconverterinputstatus:0004:0002">iPadOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudioconverterinputstatus:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudioconverterinputstatus:0004:0004">macOS 10.11+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudioconverterinputstatus:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudioconverterinputstatus:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudioconverterinputstatus:0004:0007">watchOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
enum AVAudioConverterInputStatus
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:status-options:0008:0001">상태 옵션</span>

- <span class="ko-segment" data-segment-id="seg:list:status-options:0009:0001"><a href="avaudioconverterinputstatus/endofstream.md">AVAudioConverterInputStatus.endOfStream</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:status-options:0010:0001">오디오 스트림의 끝에 도달했음을 나타내는 상태입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:status-options:0011:0001"><a href="avaudioconverterinputstatus/havedata.md">AVAudioConverterInputStatus.haveData</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:status-options:0012:0001">변환기에 데이터를 제공하는 일반적인 경우를 나타내는 상태입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:status-options:0013:0001"><a href="avaudioconverterinputstatus/nodatanow.md">AVAudioConverterInputStatus.noDataNow</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:status-options:0014:0001">데이터가 부족함을 나타내는 상태입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0015:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0016:0001"><a href="avaudioconverterinputstatus/init(rawvalue:">init?(rawValue: Int)</a>.md)</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0017:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0018:0001">준수 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0001"><a href="../Swift/BitwiseCopyable.md">BitwiseCopyable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0002"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0003"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0004"><a href="../Swift/RawRepresentable.md">RawRepresentable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0005"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0006"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0020:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="avaudioconverter/convert(to:error:withinputfrom:">func convert(to: AVAudioBuffer, error: NSErrorPointer, withInputFrom: AVAudioConverterInputBlock) -&gt; AVAudioConverterOutputStatus</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">시스템이 지원하는 경우 오디오 형식 간 변환을 수행합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="avaudioconverterinputblock.md">typealias AVAudioConverterInputBlock</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">필요한 경우 변환을 위해 입력 데이터를 가져오는 블록입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="avaudioconverter/convert(to:from:">func convert(to: AVAudioPCMBuffer, from: AVAudioPCMBuffer) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">코덱이나 샘플 레이트를 변환하지 않는 기본 오디오 형식 간 변환을 수행합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="avaudioconverteroutputstatus.md">enum AVAudioConverterOutputStatus</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">오디오 변환기 메서드의 반환 상태를 나타내는 옵션입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudioconverterinputstatus">View on Apple Developer</a>*</span>

---
source_path: "documentation/AVFAudio/avaudioconverteroutputstatus/inputrandry.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudioconverteroutputstatus/inputrandry"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avaudioconverteroutputstatusinputrandry:0000:0001">AVAudioConverterOutputStatus.inputRanDry</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudioconverteroutputstatusinputrandry:0001:0001">**Framework**: AVFAudio **Kind**: case</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudioconverteroutputstatusinputrandry:0002:0001">요청을 충족하기에 충분한 입력이 없어 메서드에 사용 가능한 입력이 부족함을 나타내는 상태입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudioconverteroutputstatusinputrandry:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avaudioconverteroutputstatusinputrandry:0004:0001">iOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudioconverteroutputstatusinputrandry:0004:0002">iPadOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudioconverteroutputstatusinputrandry:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudioconverteroutputstatusinputrandry:0004:0004">macOS 10.11+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudioconverteroutputstatusinputrandry:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudioconverteroutputstatusinputrandry:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudioconverteroutputstatusinputrandry:0004:0007">watchOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
case inputRanDry
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">출력 버퍼에는 프레임워크가 변환할 수 있는 만큼의 데이터가 포함됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avaudioconverteroutputstatus/havedata.md">AVAudioConverterOutputStatus.haveData</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">요청한 모든 데이터를 반환했음을 나타내는 상태입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avaudioconverteroutputstatus/endofstream.md">AVAudioConverterOutputStatus.endOfStream</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">메서드가 스트림의 끝에 도달하고 더 이상 데이터를 반환하지 않음을 나타내는 상태입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avaudioconverteroutputstatus/error.md">AVAudioConverterOutputStatus.error</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">메서드에서 오류가 발생했음을 나타내는 상태입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudioconverteroutputstatus/inputrandry">View on Apple Developer</a>*</span>

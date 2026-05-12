---
source_path: "documentation/AVFAudio/avspeechsynthesisipanotationattribute.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avspeechsynthesisipanotationattribute"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avspeechsynthesisipanotationattribute:0000:0001">AVSpeechSynthesisIPANotationAttribute</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avspeechsynthesisipanotationattribute:0001:0001">**Framework**: AVFAudio **Kind**: var</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avspeechsynthesisipanotationattribute:0002:0001">speech synthesizer가 특정 단어나 구문의 발음을 제어하는 데 사용하는 International Phonetic Alphabet(IPA) 기호를 포함하는 문자열입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avspeechsynthesisipanotationattribute:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avspeechsynthesisipanotationattribute:0004:0001">iOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avspeechsynthesisipanotationattribute:0004:0002">iPadOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avspeechsynthesisipanotationattribute:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avspeechsynthesisipanotationattribute:0004:0004">macOS 10.14+</span>
- <span class="ko-segment" data-segment-id="seg:list:avspeechsynthesisipanotationattribute:0004:0005">tvOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avspeechsynthesisipanotationattribute:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avspeechsynthesisipanotationattribute:0004:0007">watchOS 3.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
let AVSpeechSynthesisIPANotationAttribute: String
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">예를 들어 speech synthesizer는 고유명사의 발음을 제어하기 위해 <code>AVSpeechSynthesisIPANotationAttribute</code> 인스턴스를 사용합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avspeechutterance/init(string:">init(string: String)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">speech synthesizer가 말하도록 지정한 텍스트 문자열로 발화를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avspeechutterance/init(attributedstring:">init(attributedString: NSAttributedString)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">speech synthesizer가 말하도록 지정한 속성 텍스트 문자열로 발화를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avspeechutterance/init(ssmlrepresentation:">init?(ssmlRepresentation: String)</a>-8zam9.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">Speech Synthesis Markup Language(SSML) 문자열로 음성 발화를 생성합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avspeechsynthesisipanotationattribute">View on Apple Developer</a>*</span>

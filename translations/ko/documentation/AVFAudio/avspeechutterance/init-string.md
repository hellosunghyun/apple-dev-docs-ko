---
source_path: "documentation/AVFAudio/avspeechutterance/init-string.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avspeechutterance/init-string"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initstring:0000:0001">init(string:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initstring:0001:0001">**Framework**: AVFAudio **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initstring:0002:0001">지정한 텍스트 문자열을 음성 합성기가 읽을 발화를 생성합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initstring:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initstring:0004:0001">iOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initstring:0004:0002">iPadOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initstring:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:initstring:0004:0004">macOS 10.14+</span>
- <span class="ko-segment" data-segment-id="seg:list:initstring:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:initstring:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initstring:0004:0007">watchOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
init(string: String)
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">The output sample buffer, or <code>nil</code> if you’ve read all samples or an error occurs.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">This method returns <code>nil</code> when you’ve read all available sample buffers, or if there’s an error.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>string</code>: 발화할 텍스트를 포함하는 문자열입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avspeechutterance/init(attributedstring:">init(attributedString: NSAttributedString)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">지정한 속성 텍스트 문자열로 음성 합성기가 읽을 발화를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avspeechsynthesisipanotationattribute.md">let AVSpeechSynthesisIPANotationAttribute: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">특정 단어 또는 구문의 발음을 제어하는 데 음성 합성기가 사용하는 국제 음성 기호(IPA) 기호를 포함하는 문자열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avspeechutterance/init(ssmlrepresentation:">init?(ssmlRepresentation: String)</a>-8zam9.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">음성 합성 마크업 언어(SSML) 문자열로 발화를 생성합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avspeechutterance/init(string:">Apple Developer에서 보기</a>)*</span>

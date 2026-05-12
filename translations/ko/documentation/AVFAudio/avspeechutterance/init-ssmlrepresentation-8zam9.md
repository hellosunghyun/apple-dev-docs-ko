---
source_path: "documentation/AVFAudio/avspeechutterance/init-ssmlrepresentation-8zam9.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avspeechutterance/init-ssmlrepresentation-8zam9"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initssmlrepresentation:0000:0001">init(ssmlRepresentation:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initssmlrepresentation:0001:0001">**Framework**: AVFAudio **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initssmlrepresentation:0002:0001">Speech Synthesis Markup Language (SSML) 문자열로 음성 발화를 생성합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initssmlrepresentation:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initssmlrepresentation:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initssmlrepresentation:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initssmlrepresentation:0004:0003">Mac Catalyst 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initssmlrepresentation:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initssmlrepresentation:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initssmlrepresentation:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initssmlrepresentation:0004:0007">watchOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
init?(ssmlRepresentation string: String)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">특정 속성에 해당하는 음성을 요청하기 위해 SSML을 사용하는 경우 시스템은 단일 발화를 여러 부분으로 분할해 각 부분을 적절한 합성기에 전송할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">일치하는 음성이 없으면 발화는 <a href="avspeechutterance/voice.md">@@TOKEN_0@@</a> 속성에 설정된 음성을 사용합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">음성을 지정하지 않으면 시스템은 기본 음성을 사용합니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0010:0001">**Note**: 음성의 운율에 영향을 주는 발화 속성(예: <a href="avspeechutterance/rate.md">@@TOKEN_0@@</a> 및 <a href="avspeechutterance/pitchmultiplier.md">@@TOKEN_1@@</a>)은 SSML 표현을 사용하는 발화에는 적용되지 않습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>string</code>: 유효한 SSML 마크업이 포함된 발음 문자열입니다. 잘못된 SSML 문자열을 전달하면 초기화 메서드가 <code>nil</code>을 반환합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avspeechutterance/init(string:">init(string: String)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">지정한 텍스트 문자열로 음성 합성기가 말할 발화를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avspeechutterance/init(attributedstring:">init(attributedString: NSAttributedString)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">지정한 속성 문자열로 음성 합성기가 말할 발화를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avspeechsynthesisipanotationattribute.md">let AVSpeechSynthesisIPANotationAttribute: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">특정 단어나 구의 발음을 제어하기 위해 음성 합성기가 사용하는 국제 음성 기호(IPA) 심볼이 포함된 문자열입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avspeechutterance/init(ssmlrepresentation:">View on Apple Developer</a>-8zam9)*</span>

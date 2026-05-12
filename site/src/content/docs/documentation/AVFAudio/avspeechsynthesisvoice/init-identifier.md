---
source_path: "documentation/AVFAudio/avspeechsynthesisvoice/init-identifier.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avspeechsynthesisvoice/init-identifier"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initidentifier:0000:0001">init(identifier:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initidentifier:0001:0001">**Framework**: AVFAudio **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initidentifier:0002:0001">지정한 식별자에 대한 음성을 가져옵니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initidentifier:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initidentifier:0004:0001">iOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initidentifier:0004:0002">iPadOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initidentifier:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:initidentifier:0004:0004">macOS 10.14+</span>
- <span class="ko-segment" data-segment-id="seg:list:initidentifier:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initidentifier:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initidentifier:0004:0007">watchOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
init?(identifier: String)
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">식별자가 유효하고 장치에서 해당 음성이 사용 가능한 경우 지정한 식별자의 음성이 반환되며, 그렇지 않으면 <code>nil</code>입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>identifier</code>: 음성의 고유 식별자입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">관련 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avspeechsynthesisvoice/init(language:">init?(language: String?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">지정한 BCP 47 언어 코드에 대한 음성을 가져옵니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001">[class func speechVoices() -&gt; [AVSpeechSynthesisVoice]](avspeechsynthesisvoice/speechvoices.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">기기에서 사용 가능한 모든 음성을 가져옵니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avspeechsynthesisvoiceidentifieralex.md">let AVSpeechSynthesisVoiceIdentifierAlex: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">시스템에서 Alex로 식별하는 음성입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avspeechsynthesisvoice/init(identifier:">View on Apple Developer</a>)*</span>

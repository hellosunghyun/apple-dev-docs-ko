---
source_path: "documentation/AVFAudio/avspeechsynthesisvoice.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avspeechsynthesisvoice"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avspeechsynthesisvoice:0000:0001">AVSpeechSynthesisVoice</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avspeechsynthesisvoice:0001:0001">**Framework**: AVFAudio **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avspeechsynthesisvoice:0002:0001">음성 합성에서 사용할 수 있는 고유한 음성입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avspeechsynthesisvoice:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avspeechsynthesisvoice:0004:0001">iOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avspeechsynthesisvoice:0004:0002">iPadOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avspeechsynthesisvoice:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avspeechsynthesisvoice:0004:0004">macOS 10.14+</span>
- <span class="ko-segment" data-segment-id="seg:list:avspeechsynthesisvoice:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avspeechsynthesisvoice:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avspeechsynthesisvoice:0004:0007">watchOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class AVSpeechSynthesisVoice
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">This class is a subclass of <a href="https://developer.apple.com/documentation/Foundation/URLSessionTask">@@TOKEN_0@@</a> that you use to download HTTP Live Streaming assets.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0002">You create instances of this class by calling <a href="avassetdownloadurlsession/makeassetdownloadtask(downloadconfiguration:">@@TOKEN_0@@</a>.md) on the download session.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0003">해당 음성은 Australian 또는 South African English와 같은 언어의 지역 변종을 선택적으로 반영할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0004">지원되는 언어의 전체 목록은 <a href="https://developer.apple.comhttps://support.apple.com/en-us/HT206175">@@TOKEN_0@@</a>에서 확인할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0009:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:obtaining-voices:0010:0001">음성 가져오기</span>

- <span class="ko-segment" data-segment-id="seg:list:obtaining-voices:0011:0001"><a href="avspeechsynthesisvoice/init(identifier:">init?(identifier: String)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:obtaining-voices:0012:0001">지정한 식별자에 대한 음성을 검색합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:obtaining-voices:0013:0001"><a href="avspeechsynthesisvoice/init(language:">init?(language: String?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:obtaining-voices:0014:0001">지정한 BCP 47 언어 코드에 대한 음성을 검색합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:obtaining-voices:0015:0001">[class func speechVoices() -&gt; [AVSpeechSynthesisVoice]](avspeechsynthesisvoice/speechvoices.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:obtaining-voices:0016:0001">기기에서 사용할 수 있는 모든 음성을 검색합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:obtaining-voices:0017:0001"><a href="avspeechsynthesisvoiceidentifieralex.md">let AVSpeechSynthesisVoiceIdentifierAlex: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:obtaining-voices:0018:0001">시스템이 Alex로 식별하는 음성입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:inspecting-voices:0019:0001">음성 검사</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-voices:0020:0001"><a href="avspeechsynthesisvoice/identifier.md">var identifier: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-voices:0021:0001">음성의 고유 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-voices:0022:0001"><a href="avspeechsynthesisvoice/name.md">var name: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-voices:0023:0001">음성의 이름입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-voices:0024:0001"><a href="avspeechsynthesisvoice/quality.md">var quality: AVSpeechSynthesisVoiceQuality</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-voices:0025:0001">음성의 음성 품질입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-voices:0026:0001"><a href="avspeechsynthesisvoice/gender.md">var gender: AVSpeechSynthesisVoiceGender</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-voices:0027:0001">음성의 성별입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-voices:0028:0001"><a href="avspeechsynthesisvoice/voicetraits.md">var voiceTraits: AVSpeechSynthesisVoice.Traits</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-voices:0029:0001">음성의 특성입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-voices:0030:0001">[var audioFileSettings: [String : Any]](avspeechsynthesisvoice/audiofilesettings.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-voices:0031:0001">오디오 파일 설정이 포함된 사전입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-voices:0032:0001"><a href="avspeechsynthesisvoicequality.md">enum AVSpeechSynthesisVoiceQuality</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-voices:0033:0001">음성의 음성 품질입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-voices:0034:0001"><a href="avspeechsynthesisvoicegender.md">enum AVSpeechSynthesisVoiceGender</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-voices:0035:0001">음성의 성별입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-voices:0036:0001"><a href="avspeechsynthesisvoice/traits.md">AVSpeechSynthesisVoice.Traits</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-voices:0037:0001">음성을 설명하는 특성입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:working-with-language-codes:0038:0001">언어 코드 작업</span>

- <span class="ko-segment" data-segment-id="seg:list:working-with-language-codes:0039:0001"><a href="avspeechsynthesisvoice/currentlanguagecode.md">class func currentLanguageCode() -&gt; String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:working-with-language-codes:0040:0001">사용자의 현재 로케일에 대한 언어 및 로케일 코드를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:working-with-language-codes:0041:0001"><a href="avspeechsynthesisvoice/language.md">var language: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:working-with-language-codes:0042:0001">음성의 언어 및 로케일을 포함하는 BCP 47 코드입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0043:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0044:0001"><a href="avspeechsynthesisvoice/init(coder:">init?(coder: NSCoder)</a>.md)</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0045:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0046:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0047:0001"><a href="../ObjectiveC/NSObject-swift.class.md">NSObject</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0048:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0049:0001"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0049:0002"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0049:0003"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0049:0004"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0049:0005"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0049:0006"><a href="../Foundation/NSCoding.md">NSCoding</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0049:0007"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0049:0008"><a href="../Foundation/NSSecureCoding.md">NSSecureCoding</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0049:0009"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0049:0010"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0050:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0051:0001"><a href="avspeechutterance.md">class AVSpeechUtterance</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0052:0001">음성 합성에 필요한 텍스트와 음성에 영향을 주는 매개변수를 캡슐화하는 객체입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0054:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avspeechsynthesisvoice">View on Apple Developer</a>*</span>

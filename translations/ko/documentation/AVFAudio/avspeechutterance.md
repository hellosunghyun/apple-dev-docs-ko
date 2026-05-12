---
source_path: "documentation/AVFAudio/avspeechutterance.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avspeechutterance"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avspeechutterance:0000:0001">AVSpeechUtterance</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avspeechutterance:0001:0001">**Framework**: AVFAudio **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avspeechutterance:0002:0001">음성 합성을 위한 텍스트와 음성에 영향을 주는 매개변수를 캡슐화하는 객체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avspeechutterance:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avspeechutterance:0004:0001">iOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avspeechutterance:0004:0002">iPadOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avspeechutterance:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avspeechutterance:0004:0004">macOS 10.14+</span>
- <span class="ko-segment" data-segment-id="seg:list:avspeechutterance:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avspeechutterance:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avspeechutterance:0004:0007">watchOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class AVSpeechUtterance
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001"><code>AVSpeechUtterance</code>는 음성 합성의 기본 단위입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0001">음성을 합성하려면 음성 합성기가 말하도록 할 텍스트로 <code>AVSpeechUtterance</code> 인스턴스를 생성합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0002">선택적으로 해당 발화의 <a href="avspeechutterance/voice.md">@@TOKEN_0@@</a>, <a href="avspeechutterance/pitchmultiplier.md">@@TOKEN_1@@</a>, <a href="avspeechutterance/volume.md">@@TOKEN_2@@</a>, <a href="avspeechutterance/rate.md">@@TOKEN_3@@</a>, <a href="avspeechutterance/preutterancedelay.md">@@TOKEN_4@@</a>, <a href="avspeechutterance/postutterancedelay.md">@@TOKEN_5@@</a> 매개변수를 변경할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0003">발화를 <a href="avspeechsynthesizer.md">@@TOKEN_0@@</a> 인스턴스에 전달하면 음성 합성이 시작되며, 합성기가 이미 음성을 재생 중이면 해당 발화를 나중에 말하기 위해 큐에 넣습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0010:0001">텍스트 본문을 여러 utterance로 분할하면 서로 다른 음성 매개변수를 개별적으로 적용할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0010:0002">예를 들어, 특정 utterance의 pitch를 높이고 rate를 낮춰 다른 utterance에 비해 해당 문장을 강조할 수 있으며, 문장 앞뒤에 지연이 있는 utterance로 나누어 문장 사이에 일시 정지를 추가할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0011:0001"><a href="avspeechsynthesizerdelegate.md">@@TOKEN_0@@</a>를 설정하고 사용하여 utterance의 재생 시작 또는 종료 시 알림을 받을 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0011:0002">음성 출력이 진행되는 동안 알림을 받으려면 텍스트 본문의 각 의미 단위마다 utterance를 생성합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0012:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:creating-an-utterance:0013:0001">발화 생성</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-an-utterance:0014:0001"><a href="avspeechutterance/init(string:">init(string: String)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-an-utterance:0015:0001">음성 합성기가 읽을 텍스트 문자열로 utterance를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-an-utterance:0016:0001"><a href="avspeechutterance/init(attributedstring:">init(attributedString: NSAttributedString)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-an-utterance:0017:0001">음성 합성기가 읽을 텍스트로 지정한 속성 문자열을 사용해 utterance를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-an-utterance:0018:0001"><a href="avspeechsynthesisipanotationattribute.md">let AVSpeechSynthesisIPANotationAttribute: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-an-utterance:0019:0001">음성 합성기가 특정 단어 또는 구문의 발음을 제어하는 데 사용하는 국제 음성 기호(IPA) 심볼을 포함하는 문자열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-an-utterance:0020:0001"><a href="avspeechutterance/init(ssmlrepresentation:">init?(ssmlRepresentation: String)</a>-8zam9.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-an-utterance:0021:0001">Speech Synthesis Markup Language (SSML) 문자열로 음성 utterance를 생성합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:configuring-an-utterance:0022:0001">발화 구성</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-an-utterance:0023:0001"><a href="avspeechutterance/voice.md">var voice: AVSpeechSynthesisVoice?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-an-utterance:0024:0001">utterance를 말할 때 음성 합성기가 사용하는 음성입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-an-utterance:0025:0001"><a href="avspeechutterance/pitchmultiplier.md">var pitchMultiplier: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-an-utterance:0026:0001">utterance를 말할 때 음성 합성기가 사용하는 기준 pitch입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-an-utterance:0027:0001"><a href="avspeechutterance/volume.md">var volume: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-an-utterance:0028:0001">utterance를 말할 때 음성 합성기가 사용하는 볼륨입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-an-utterance:0029:0001"><a href="avspeechutterance/prefersassistivetechnologysettings.md">var prefersAssistiveTechnologySettings: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-an-utterance:0030:0001">이 utterance의 property 값보다 보조 기술 설정이 우선 적용되는지 지정하는 Boolean 값입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:configuring-utterance-timing:0031:0001">발화 타이밍 구성</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-utterance-timing:0032:0001"><a href="avspeechutterance/rate.md">var rate: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-utterance-timing:0033:0001">utterance를 말할 때 음성 합성기가 사용하는 rate입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-utterance-timing:0034:0001"><a href="avspeechutteranceminimumspeechrate.md">let AVSpeechUtteranceMinimumSpeechRate: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-utterance-timing:0035:0001">utterance를 말할 때 음성 합성기가 사용하는 최소 rate입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-utterance-timing:0036:0001"><a href="avspeechutterancemaximumspeechrate.md">let AVSpeechUtteranceMaximumSpeechRate: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-utterance-timing:0037:0001">utterance를 말할 때 음성 합성기가 사용하는 최대 rate입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-utterance-timing:0038:0001"><a href="avspeechutterancedefaultspeechrate.md">let AVSpeechUtteranceDefaultSpeechRate: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-utterance-timing:0039:0001">utterance를 말할 때 음성 합성기가 사용하는 기본 rate입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-utterance-timing:0040:0001"><a href="avspeechutterance/preutterancedelay.md">var preUtteranceDelay: TimeInterval</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-utterance-timing:0041:0001">음성 합성기가 utterance를 말하기 전에 일시 정지하는 시간입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-utterance-timing:0042:0001"><a href="avspeechutterance/postutterancedelay.md">var postUtteranceDelay: TimeInterval</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-utterance-timing:0043:0001">음성 합성기가 하나의 utterance를 말한 뒤 큐의 다음 utterance를 처리하기 전에 일시 정지하는 시간입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:inspecting-utterance-text:0044:0001">발화 텍스트 검사</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-utterance-text:0045:0001"><a href="avspeechutterance/speechstring.md">var speechString: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-utterance-text:0046:0001">음성 합성용 텍스트를 포함하는 문자열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-utterance-text:0047:0001"><a href="avspeechutterance/attributedspeechstring.md">var attributedSpeechString: NSAttributedString</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-utterance-text:0048:0001">음성 합성용 텍스트를 포함하는 attributed string입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0049:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0050:0001"><a href="avspeechutterance/init(ssmlrepresentation:">convenience init?(SSMLRepresentation: String)</a>-2aunp.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:initializers:0050:0002"><a href="avspeechutterance/init(ssmlrepresentation:">init?(SSMLRepresentation: String)</a>-7rl77.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:initializers:0050:0003"><a href="avspeechutterance/init(coder:">init?(coder: NSCoder)</a>.md)</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0051:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0052:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0053:0001"><a href="../ObjectiveC/NSObject-swift.class.md">NSObject</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0054:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0055:0001"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0055:0002"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0055:0003"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0055:0004"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0055:0005"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0055:0006"><a href="../Foundation/NSCoding.md">NSCoding</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0055:0007"><a href="../Foundation/NSCopying.md">NSCopying</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0055:0008"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0055:0009"><a href="../Foundation/NSSecureCoding.md">NSSecureCoding</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0056:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0057:0001"><a href="avspeechsynthesisvoice.md">class AVSpeechSynthesisVoice</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0058:0001">음성 합성에 사용되는 고유한 voice입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0060:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avspeechutterance">View on Apple Developer</a>*</span>

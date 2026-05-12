---
source_path: "documentation/AVFAudio/avspeechsynthesisprovideraudiounit.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avspeechsynthesisprovideraudiounit"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avspeechsynthesisprovideraudiounit:0000:0001">AVSpeechSynthesisProviderAudioUnit</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avspeechsynthesisprovideraudiounit:0001:0001">**Framework**: AVFAudio **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avspeechsynthesisprovideraudiounit:0002:0001">텍스트에서 음성을 생성하는 객체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avspeechsynthesisprovideraudiounit:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avspeechsynthesisprovideraudiounit:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avspeechsynthesisprovideraudiounit:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avspeechsynthesisprovideraudiounit:0004:0003">Mac Catalyst 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avspeechsynthesisprovideraudiounit:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avspeechsynthesisprovideraudiounit:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avspeechsynthesisprovideraudiounit:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class AVSpeechSynthesisProviderAudioUnit
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">지정된 음성 및 음성 마크업에 대해 음성이 포함된 오디오 버퍼를 생성하려면 음성 합성기 오디오 유닛을 사용합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0002">오디오 유닛은 입력으로 <a href="avspeechsynthesisproviderrequest.md">@@TOKEN_0@@</a>를 받으며 render 블록을 통해 오디오 버퍼를 추출합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0001">메타데이터를 <a href="avspeechsynthesismarker.md">@@TOKEN_0@@</a> 배열로 제공하려면 <a href="avspeechsynthesisprovideraudiounit/speechsynthesisoutputmetadatablock.md">@@TOKEN_1@@</a>를 사용합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0010:0001">시스템은 이 유형의 오디오 유닛 확장에 대한 음성을 스캔하고 로드하며, 해당 음성은 <a href="avspeechsynthesizer.md">@@TOKEN_0@@</a> 및 VoiceOver, Speak Screen와 같은 접근성 기술에서 사용할 수 있습니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:overview:0011:0001">❗ **중요**: 음성 합성기에서는 네트워크 액세스가 허용되지 않습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0012:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:rendering-speech:0013:0001">음성 렌더링</span>

- <span class="ko-segment" data-segment-id="seg:list:rendering-speech:0014:0001"><a href="avspeechsynthesisprovideraudiounit/synthesizespeechrequest(_:">func synthesizeSpeechRequest(AVSpeechSynthesisProviderRequest)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:rendering-speech:0015:0001">합성할 텍스트와 사용할 음성을 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:rendering-speech:0016:0001"><a href="avspeechsynthesisproviderrequest.md">class AVSpeechSynthesisProviderRequest</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:rendering-speech:0017:0001">합성할 텍스트와 사용할 음성을 나타내는 개체입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:supplying-metadata:0018:0001">메타데이터 제공</span>

- <span class="ko-segment" data-segment-id="seg:list:supplying-metadata:0019:0001"><a href="avspeechsynthesisprovideroutputblock.md">typealias AVSpeechSynthesisProviderOutputBlock</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:supplying-metadata:0020:0001">마커 정보를 호스트로 전송하는 메서드를 나타내는 타입입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:supplying-metadata:0021:0001"><a href="avspeechsynthesisprovideraudiounit/speechsynthesisoutputmetadatablock.md">var speechSynthesisOutputMetadataBlock: AVSpeechSynthesisProviderOutputBlock?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:supplying-metadata:0022:0001">서브클래스가 호스트로 마커 정보를 전송하는 데 사용하는 블록입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:supplying-metadata:0023:0001"><a href="avspeechsynthesismarker.md">class AVSpeechSynthesisMarker</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:supplying-metadata:0024:0001">합성된 오디오에 대한 정보를 포함하는 개체입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:getting-and-setting-voices:0025:0001">음성 가져오기 및 설정</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-and-setting-voices:0026:0001">[var speechVoices: [AVSpeechSynthesisProviderVoice]](avspeechsynthesisprovideraudiounit/speechvoices.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-and-setting-voices:0027:0001">시스템에 오디오 유닛이 제공하는 음성 목록입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-and-setting-voices:0028:0001"><a href="avspeechsynthesisprovidervoice.md">class AVSpeechSynthesisProviderVoice</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-and-setting-voices:0029:0001">오디오 유닛이 호스트에 제공하는 음성을 나타내는 개체입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:cancelling-a-request:0030:0001">요청 취소</span>

- <span class="ko-segment" data-segment-id="seg:list:cancelling-a-request:0031:0001"><a href="avspeechsynthesisprovideraudiounit/cancelspeechrequest.md">func cancelSpeechRequest()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:cancelling-a-request:0032:0001">음성 요청을 폐기하도록 오디오 유닛에 알립니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0033:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0034:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0035:0001"><a href="../AudioToolbox/AUAudioUnit.md">AUAudioUnit</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0036:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0037:0001"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0037:0002"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0037:0003"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0037:0004"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0037:0005"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0037:0006"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:conforms-to:0039:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avspeechsynthesisprovideraudiounit">View on Apple Developer</a>*</span>

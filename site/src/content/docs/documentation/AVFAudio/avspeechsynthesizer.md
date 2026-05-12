---
source_path: "documentation/AVFAudio/avspeechsynthesizer.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avspeechsynthesizer"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avspeechsynthesizer:0000:0001">AVSpeechSynthesizer</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avspeechsynthesizer:0001:0001">**Framework**: AVFAudio **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avspeechsynthesizer:0002:0001">텍스트 발화에서 합성 음성을 생성하고 진행 중인 음성 합성을 모니터링하거나 제어할 수 있게 하는 객체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avspeechsynthesizer:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avspeechsynthesizer:0004:0001">iOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avspeechsynthesizer:0004:0002">iPadOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avspeechsynthesizer:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avspeechsynthesizer:0004:0004">macOS 10.14+</span>
- <span class="ko-segment" data-segment-id="seg:list:avspeechsynthesizer:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avspeechsynthesizer:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avspeechsynthesizer:0004:0007">watchOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class AVSpeechSynthesizer
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">텍스트를 말하게 하려면 텍스트를 포함하는 <a href="avspeechutterance.md">@@TOKEN_0@@</a> 인스턴스를 생성한 다음 음성 합성기 인스턴스의 <a href="avspeechsynthesizer/speak(_:">@@TOKEN_1@@</a>.md)에 전달합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0002">선택적으로 <a href="avspeechsynthesisvoice.md">@@TOKEN_0@@</a>를 가져와 발화의 <a href="avspeechutterance/voice.md">@@TOKEN_1@@</a> 속성에 설정하면 음성 합성기가 발화 텍스트를 말할 때 해당 음성을 사용합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0001">음성 합성기는 발화하는 항목들의 큐를 유지합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0002">음성 합성기가 말하고 있지 않으면, 필요한 경우 해당 발화의 <a href="avspeechutterance/preutterancedelay.md">@@TOKEN_0@@</a> 동안 일시 정지 후 또는 즉시 <a href="avspeechsynthesizer/speak(_:">@@TOKEN_1@@</a>.md)를 호출하면 해당 발화가 시작됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0003">음성 합성기가 말하고 있는 경우, 발화를 큐에 추가하고 수신한 순서대로 재생합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0010:0001">음성 합성이 시작되면 음성 합성기 객체를 사용해 음성 합성을 일시 중단하거나 중지할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0010:0002">일시 중단 후에는 중단 지점에서 다시 재개하거나 음성 합성을 완전히 중지하고 큐의 나머지 발화 항목을 모두 제거할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0011:0001">음성 합성기는 <a href="avspeechsynthesizer/isspeaking.md">@@TOKEN_0@@</a> 및 <a href="avspeechsynthesizer/ispaused.md">@@TOKEN_1@@</a> 속성을 확인하거나 <a href="avspeechsynthesizerdelegate.md">@@TOKEN_2@@</a>를 준수하는 delegate를 설정하여 모니터링할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0011:0002">delegate는 음성 합성 중에 발생하는 주요 이벤트를 수신합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0012:0001"><code>AVSpeechSynthesizer</code>는 음성이 재생되는 경로도 제어합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0012:0002">자세한 내용은 음성 출력 제어를 참조합니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:overview:0013:0001">**Note**: 시스템은 음성 합성기를 자동으로 유지하지 않으므로 음성 합성이 종료될 때까지 수동으로 유지해야 합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0014:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:controlling-speech:0015:0001">음성 제어</span>

- <span class="ko-segment" data-segment-id="seg:list:controlling-speech:0016:0001"><a href="avspeechsynthesizer/speak(_:">func speak(AVSpeechUtterance)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:controlling-speech:0017:0001">지정한 발화를 음성 합성기의 큐에 추가합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:controlling-speech:0018:0001"><a href="avspeechsynthesizer/continuespeaking.md">func continueSpeaking() -&gt; Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:controlling-speech:0019:0001">일시 중단 지점에서 음성 합성을 재개합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:controlling-speech:0020:0001"><a href="avspeechsynthesizer/pausespeaking(at:">func pauseSpeaking(at: AVSpeechBoundary) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:controlling-speech:0021:0001">지정한 경계에서 음성 합성을 일시 중단합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:controlling-speech:0022:0001"><a href="avspeechsynthesizer/stopspeaking(at:">func stopSpeaking(at: AVSpeechBoundary) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:controlling-speech:0023:0001">지정한 경계에서 음성 합성을 중지합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:controlling-speech:0024:0001"><a href="avspeechboundary.md">enum AVSpeechBoundary</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:controlling-speech:0025:0001">음성 합성에서 일시 중단 또는 중지 시점을 지정합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:inspecting-a-speech-synthesizer:0026:0001">음성 합성기 검사</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-a-speech-synthesizer:0027:0001"><a href="avspeechsynthesizer/isspeaking.md">var isSpeaking: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-a-speech-synthesizer:0028:0001">음성 합성기가 현재 발화 중인지 또는 일시 중단 상태이면서 발화할 항목이 남아 있는지를 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-a-speech-synthesizer:0029:0001"><a href="avspeechsynthesizer/ispaused.md">var isPaused: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-a-speech-synthesizer:0030:0001">음성 합성기가 일시 중단 상태인지 나타내는 부울 값입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:managing-the-delegate:0031:0001">대리자 관리</span>

- <span class="ko-segment" data-segment-id="seg:list:managing-the-delegate:0032:0001"><a href="avspeechsynthesizer/delegate.md">var delegate: (any AVSpeechSynthesizerDelegate)?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:managing-the-delegate:0033:0001">음성 합성기의 delegate 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:managing-the-delegate:0034:0001"><a href="avspeechsynthesizerdelegate.md">protocol AVSpeechSynthesizerDelegate</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:managing-the-delegate:0035:0001">음성 합성 중 발생하는 이벤트에 응답하도록 구현할 수 있는 선택적 메서드를 포함하는 delegate 프로토콜입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:directing-speech-output:0036:0001">음성 출력 제어</span>

- <span class="ko-segment" data-segment-id="seg:list:directing-speech-output:0037:0001"><a href="avspeechsynthesizer/usesapplicationaudiosession.md">var usesApplicationAudioSession: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:directing-speech-output:0038:0001">앱이 오디오 세션을 관리하는지 지정하는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:directing-speech-output:0039:0001"><a href="avspeechsynthesizer/mixtotelephonyuplink.md">var mixToTelephonyUplink: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:directing-speech-output:0040:0001">합성된 음성을 활성 통화로 전송할지 지정하는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:directing-speech-output:0041:0001">[var outputChannels: [AVAudioSessionChannelDescription]?](avspeechsynthesizer/outputchannels.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:directing-speech-output:0042:0001">생성된 음성을 라우팅할 오디오 세션 채널의 배열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:directing-speech-output:0043:0001"><a href="avspeechsynthesizer/write(_:tobuffercallback:">func write(AVSpeechUtterance, toBufferCallback: AVSpeechSynthesizer.BufferCallback)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:directing-speech-output:0044:0001">발화에 대한 음성을 생성하고 오디오 버퍼와 함께 콜백을 호출합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:directing-speech-output:0045:0001"><a href="avspeechsynthesizer/buffercallback.md">AVSpeechSynthesizer.BufferCallback</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:directing-speech-output:0046:0001">생성된 음성을 수신하는 버퍼를 받는 콜백을 정의하는 타입입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:directing-speech-output:0047:0001"><a href="avspeechsynthesizer/write(_:tobuffercallback:tomarkercallback:">func write(AVSpeechUtterance, toBufferCallback: AVSpeechSynthesizer.BufferCallback, toMarkerCallback: AVSpeechSynthesizer.MarkerCallback)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:directing-speech-output:0048:0001">저장 또는 추가 음성 합성 처리를 위해 오디오 버퍼와 관련 메타데이터를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:directing-speech-output:0049:0001"><a href="avspeechsynthesizer/markercallback.md">AVSpeechSynthesizer.MarkerCallback</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:directing-speech-output:0050:0001">음성 마커를 수신하는 콜백을 정의하는 타입입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:enabling-personal-voices:0051:0001">개인 음성 사용</span>

- <span class="ko-segment" data-segment-id="seg:list:enabling-personal-voices:0052:0001"><a href="avspeechsynthesizer/personalvoiceauthorizationstatus-swift.type.property.md">class var personalVoiceAuthorizationStatus: AVSpeechSynthesizer.PersonalVoiceAuthorizationStatus</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:enabling-personal-voices:0053:0001">개인 음성을 사용하기 위해 앱에 부여된 권한 부여입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:enabling-personal-voices:0054:0001"><a href="avspeechsynthesizer/availablevoicesdidchangenotification.md">class let availableVoicesDidChangeNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:enabling-personal-voices:0055:0001">음성 합성에서 사용 가능한 음성 변경을 나타내는 알림입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:enabling-personal-voices:0056:0001"><a href="avspeechsynthesizer/requestpersonalvoiceauthorization(completionhandler:">class func requestPersonalVoiceAuthorization(completionHandler: (AVSpeechSynthesizer.PersonalVoiceAuthorizationStatus) -&gt; Void)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:enabling-personal-voices:0057:0001">사용자에게 앱이 개인 음성을 사용하도록 권한 부여를 요청하도록 프롬프트합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:enabling-personal-voices:0058:0001"><a href="avspeechsynthesizer/personalvoiceauthorizationstatus-swift.enum.md">AVSpeechSynthesizer.PersonalVoiceAuthorizationStatus</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:enabling-personal-voices:0059:0001">개인 음성 권한 부여 상태를 모델링하는 열거형입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0060:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0061:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0062:0001"><a href="../ObjectiveC/NSObject-swift.class.md">NSObject</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0063:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0064:0001"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0064:0002"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0064:0003"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0064:0004"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0064:0005"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0064:0006"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:conforms-to:0066:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avspeechsynthesizer">View on Apple Developer</a>*</span>

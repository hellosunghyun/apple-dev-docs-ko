---
source_path: "documentation/AVFAudio/avaudiovoiceprocessingotheraudioduckingconfiguration.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiovoiceprocessingotheraudioduckingconfiguration"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avaudiovoiceprocessingotheraudioduckingconfiguration:0000:0001">AVAudioVoiceProcessingOtherAudioDuckingConfiguration</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiovoiceprocessingotheraudioduckingconfiguration:0001:0001">**Framework**: AVFAudio **Kind**: struct</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiovoiceprocessingotheraudioduckingconfiguration:0002:0001">비음성 오디오의 다킹 구성입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiovoiceprocessingotheraudioduckingconfiguration:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avaudiovoiceprocessingotheraudioduckingconfiguration:0004:0001">iOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiovoiceprocessingotheraudioduckingconfiguration:0004:0002">iPadOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiovoiceprocessingotheraudioduckingconfiguration:0004:0003">Mac Catalyst 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiovoiceprocessingotheraudioduckingconfiguration:0004:0004">macOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiovoiceprocessingotheraudioduckingconfiguration:0004:0005">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
struct AVAudioVoiceProcessingOtherAudioDuckingConfiguration
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:configuring-ducking:0008:0001">다킹 구성</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-ducking:0009:0001"><a href="avaudiovoiceprocessingotheraudioduckingconfiguration/enableadvancedducking.md">var enableAdvancedDucking: ObjCBool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-ducking:0010:0001">로컬 및 원격 채팅 참가자의 음성 활동 유무에 따라 다른 오디오를 다킹하는 고급 다킹을 활성화합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-ducking:0011:0001"><a href="avaudiovoiceprocessingotheraudioduckingconfiguration/duckinglevel.md">var duckingLevel: AVAudioVoiceProcessingOtherAudioDuckingConfiguration.Level</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-ducking:0012:0001">다른 오디오의 다킹 레벨입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-ducking:0013:0001"><a href="avaudiovoiceprocessingotheraudioduckingconfiguration/level.md">AVAudioVoiceProcessingOtherAudioDuckingConfiguration.Level</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-ducking:0014:0001">지원되는 ducking 수준을 정의하는 상수입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0015:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0016:0001"><a href="avaudiovoiceprocessingotheraudioduckingconfiguration/init.md">init()</a></span>
- <span class="ko-segment" data-segment-id="seg:list:initializers:0016:0002"><a href="avaudiovoiceprocessingotheraudioduckingconfiguration/init(enableadvancedducking:duckinglevel:">init(enableAdvancedDucking: ObjCBool, duckingLevel: AVAudioVoiceProcessingOtherAudioDuckingConfiguration.Level)</a>.md)</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0017:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0018:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0001"><a href="../Swift/BitwiseCopyable.md">BitwiseCopyable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0002"><a href="../Swift/Sendable.md">Sendable</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0020:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="avaudioinputnode/isvoiceprocessinginputmuted.md">var isVoiceProcessingInputMuted: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">음성 처리 유닛의 입력이 음소거 상태인지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="avaudioinputnode/isvoiceprocessingbypassed.md">var isVoiceProcessingBypassed: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">음성 처리 유닛의 마이크 업링크 처리를 모두 우회하는지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="avaudioinputnode/isvoiceprocessingagcenabled.md">var isVoiceProcessingAGCEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">처리된 마이크 업링크 신호에서 자동 이득 제어가 활성 상태인지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="avaudioinputnode/voiceprocessingotheraudioduckingconfiguration.md">var voiceProcessingOtherAudioDuckingConfiguration: AVAudioVoiceProcessingOtherAudioDuckingConfiguration</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">비음성 오디오의 덕킹 구성입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiovoiceprocessingotheraudioduckingconfiguration">View on Apple Developer</a>*</span>

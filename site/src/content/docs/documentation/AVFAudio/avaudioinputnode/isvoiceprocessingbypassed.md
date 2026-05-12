---
source_path: "documentation/AVFAudio/avaudioinputnode/isvoiceprocessingbypassed.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudioinputnode/isvoiceprocessingbypassed"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:isvoiceprocessingbypassed:0000:0001">isVoiceProcessingBypassed</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isvoiceprocessingbypassed:0001:0001">**Framework**: AVFAudio **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isvoiceprocessingbypassed:0002:0001">음성 처리 유닛의 마이크 업링크 처리 전체를 노드가 우회하는지 나타내는 Boolean 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isvoiceprocessingbypassed:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:isvoiceprocessingbypassed:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isvoiceprocessingbypassed:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isvoiceprocessingbypassed:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:isvoiceprocessingbypassed:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:isvoiceprocessingbypassed:0004:0005">tvOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isvoiceprocessingbypassed:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isvoiceprocessingbypassed:0004:0007">watchOS 6.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var isVoiceProcessingBypassed: Bool { get set }
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="avaudioinputnode/isvoiceprocessinginputmuted.md">var isVoiceProcessingInputMuted: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">음성 처리 유닛의 입력이 음소거 상태인지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avaudioinputnode/isvoiceprocessingagcenabled.md">var isVoiceProcessingAGCEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">처리된 마이크 업링크 신호에서 자동 이득 제어가 활성 상태인지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avaudioinputnode/voiceprocessingotheraudioduckingconfiguration.md">var voiceProcessingOtherAudioDuckingConfiguration: AVAudioVoiceProcessingOtherAudioDuckingConfiguration</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">비음성 오디오의 ducking 구성입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avaudiovoiceprocessingotheraudioduckingconfiguration.md">struct AVAudioVoiceProcessingOtherAudioDuckingConfiguration</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">비음성 오디오를 ducking하는 구성입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudioinputnode/isvoiceprocessingbypassed">View on Apple Developer</a>*</span>

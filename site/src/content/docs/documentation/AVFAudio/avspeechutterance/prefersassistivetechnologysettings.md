---
source_path: "documentation/AVFAudio/avspeechutterance/prefersassistivetechnologysettings.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avspeechutterance/prefersassistivetechnologysettings"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:prefersassistivetechnologysettings:0000:0001">prefersAssistiveTechnologySettings</span>

<span class="ko-segment" data-segment-id="seg:paragraph:prefersassistivetechnologysettings:0001:0001">**Framework**: AVFAudio **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:prefersassistivetechnologysettings:0002:0001">이 발화의 속성 값보다 보조 기술 설정이 우선되는지를 지정하는 부울 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:prefersassistivetechnologysettings:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:prefersassistivetechnologysettings:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:prefersassistivetechnologysettings:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:prefersassistivetechnologysettings:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:prefersassistivetechnologysettings:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:prefersassistivetechnologysettings:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:prefersassistivetechnologysettings:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:prefersassistivetechnologysettings:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var prefersAssistiveTechnologySettings: Bool { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 속성이 <code>true</code>이지만 VoiceOver와 같은 보조 기술이 활성화되어 있지 않으면 음성 합성기가 발화의 속성 값을 사용합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avspeechutterance/voice.md">var voice: AVSpeechSynthesisVoice?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">발화(utterance)를 읽을 때 speech synthesizer가 사용하는 음성입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avspeechutterance/pitchmultiplier.md">var pitchMultiplier: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">발화(utterance)를 읽을 때 speech synthesizer가 사용하는 기준 피치입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avspeechutterance/volume.md">var volume: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">발화(utterance)를 읽을 때 speech synthesizer가 사용하는 볼륨입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avspeechutterance/prefersassistivetechnologysettings">View on Apple Developer</a>*</span>

---
source_path: "documentation/AVFAudio/avaudiosession/interruptionreason/builtinmicmuted.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiosession/interruptionreason/builtinmicmuted"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avaudiosessioninterruptionreasonbuiltinmicmuted:0000:0001">AVAudioSession.InterruptionReason.builtInMicMuted</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiosessioninterruptionreasonbuiltinmicmuted:0001:0001">**Framework**: AVFAudio **Kind**: case</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiosessioninterruptionreasonbuiltinmicmuted:0002:0001">기기가 내장 마이크를 음소거할 때 시스템이 오디오 세션을 중단합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiosessioninterruptionreasonbuiltinmicmuted:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avaudiosessioninterruptionreasonbuiltinmicmuted:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiosessioninterruptionreasonbuiltinmicmuted:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiosessioninterruptionreasonbuiltinmicmuted:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiosessioninterruptionreasonbuiltinmicmuted:0004:0004">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiosessioninterruptionreasonbuiltinmicmuted:0004:0005">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiosessioninterruptionreasonbuiltinmicmuted:0004:0006">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
case builtInMicMuted
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 중단 사유는 사용자가 iPad의 Smart Folio 커버를 닫을 때 일반적으로 발생합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avaudiosession/interruptionreason/default.md">AVAudioSession.InterruptionReason.default</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">다른 오디오 세션이 활성화될 때 시스템이 이 오디오 세션을 중단합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avaudiosession/interruptionreason/routedisconnected.md">AVAudioSession.InterruptionReason.routeDisconnected</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">시스템이 오디오 경로가 끊겨서 오디오 세션을 중단합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avaudiosession/interruptionreason/scenewasbackgrounded.md">AVAudioSession.InterruptionReason.sceneWasBackgrounded</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">시스템이 장면을 백그라운드로 전환하고 오디오 세션을 중단합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avaudiosession/interruptionreason/appwassuspended.md">AVAudioSession.InterruptionReason.appWasSuspended</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">시스템이 앱을 일시 중단하고 오디오 세션을 중단합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiosession/interruptionreason/builtinmicmuted">View on Apple Developer</a>*</span>

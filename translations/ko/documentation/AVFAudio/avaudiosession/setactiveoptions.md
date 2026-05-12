---
source_path: "documentation/AVFAudio/avaudiosession/setactiveoptions.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiosession/setactiveoptions"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avaudiosessionsetactiveoptions:0000:0001">AVAudioSession.SetActiveOptions</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiosessionsetactiveoptions:0001:0001">**Framework**: AVFAudio **Kind**: struct</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiosessionsetactiveoptions:0002:0001">세션 비활성화 시 앱의 오디오 의도에 대한 추가 정보를 제공합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiosessionsetactiveoptions:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avaudiosessionsetactiveoptions:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiosessionsetactiveoptions:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiosessionsetactiveoptions:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiosessionsetactiveoptions:0004:0004">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiosessionsetactiveoptions:0004:0005">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiosessionsetactiveoptions:0004:0006">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
struct SetActiveOptions
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">이 옵션은 시스템이 중단된 앱에 인터럽트가 끝나 재생을 다시 시작할 수 있음을 알리도록 요청합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0002">이 옵션은 세션 비활성화 시에만 유효합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0009:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:creating-an-activation-option:0010:0001">활성화 옵션 만들기</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-an-activation-option:0011:0001"><a href="avaudiosession/setactiveoptions/init(rawvalue:">init(rawValue: UInt)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-an-activation-option:0012:0001">지정한 원시 값으로 새 인스턴스를 생성합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:getting-standard--options:0013:0001">표준 옵션 가져오기</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-standard--options:0014:0001"><a href="avaudiosession/setactiveoptions/notifyothersondeactivation.md">static var notifyOthersOnDeactivation: AVAudioSession.SetActiveOptions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-standard--options:0015:0001">시스템이 앱의 오디오 세션이 비활성화되었음을 다른 앱에 알리도록 지정하는 옵션입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-standard--options:0016:0001"><a href="avaudiosessionsetactiveflags_notifyothersondeactivation.md">var AVAudioSessionSetActiveFlags_NotifyOthersOnDeactivation: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-standard--options:0017:0001">오디오 세션이 비활성화될 때, 오디오 세션이 중단했던 다른 오디오 세션이 자체적으로 재활성화될 수 있음을 나타내는 플래그입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0018:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0019:0001">준수 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0020:0001"><a href="../Swift/BitwiseCopyable.md">BitwiseCopyable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0020:0002"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0020:0003"><a href="../Swift/ExpressibleByArrayLiteral.md">ExpressibleByArrayLiteral</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0020:0004"><a href="../Swift/OptionSet.md">OptionSet</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0020:0005"><a href="../Swift/RawRepresentable.md">RawRepresentable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0020:0006"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0020:0007"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0020:0008"><a href="../Swift/SetAlgebra.md">SetAlgebra</a></span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:conforms-to:0022:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiosession/setactiveoptions">View on Apple Developer</a>*</span>

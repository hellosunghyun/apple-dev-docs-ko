---
source_path: "documentation/AVFAudio/avaudiosession/mode-swiftproperty.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiosession/mode-swiftproperty"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:mode:0000:0001">mode</span>

<span class="ko-segment" data-segment-id="seg:paragraph:mode:0001:0001">**Framework**: AVFAudio **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:mode:0002:0001">현재 오디오 세션의 모드입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:mode:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:mode:0004:0001">iOS 5.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:mode:0004:0002">iPadOS 5.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:mode:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:mode:0004:0004">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:mode:0004:0005">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:mode:0004:0006">watchOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var mode: AVAudioSession.Mode { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">The expected behavior of an app is to pause playback if a route change occurs due to a device no longer being available (<a href="avaudiosession/routechangereason/olddeviceunavailable.md">@@TOKEN_0@@</a>).</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">비디오 녹화, 음성 또는 영상 채팅, 오디오 분석과 같은 특정 사용 사례에 대해 오디오 시스템을 구성하려면 모드를 사용할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이 property에 사용할 수 있는 값은 <a href="avaudiosession/mode-swift.struct.md">@@TOKEN_0@@</a>에서 설명합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">기본값은 <a href="avaudiosession/mode-swift.struct/default.md">@@TOKEN_0@@</a>입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001">[var availableModes: [AVAudioSession.Mode]](avaudiosession/availablemodes.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">기기에서 사용 가능한 오디오 세션 모드입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avaudiosession/mode-swift.struct.md">AVAudioSession.Mode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">오디오 세션 모드 식별자입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiosession/mode-swift.property">View on Apple Developer</a>*</span>

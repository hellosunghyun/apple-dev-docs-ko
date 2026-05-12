---
source_path: "documentation/AVFAudio/avaudiosession/currenthardwaresamplerate.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiosession/currenthardwaresamplerate"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:currenthardwaresamplerate:0000:0001">currentHardwareSampleRate</span>

<span class="ko-segment" data-segment-id="seg:paragraph:currenthardwaresamplerate:0001:0001">**Framework**: AVFAudio **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:currenthardwaresamplerate:0002:0001">오디오 하드웨어 샘플 레이트, 단위는 hertz입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:currenthardwaresamplerate:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:currenthardwaresamplerate:0004:0001">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:currenthardwaresamplerate:0004:0002">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var currentHardwareSampleRate: Double { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">The value of this property is <a href="https://developer.apple.com/documentation/ObjectiveC/nil-227m0">@@TOKEN_0@@</a> if switching between multiple output sources isn’t currently possible.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">성공적으로 활성화되면 세션이 활성 상태를 유지하는 동안 이 property의 값은 변경되지 않습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avaudiosession/currenthardwareinputnumberofchannels.md">var currentHardwareInputNumberOfChannels: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">오디오 하드웨어 입력 채널 수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avaudiosession/currenthardwareoutputnumberofchannels.md">var currentHardwareOutputNumberOfChannels: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">오디오 하드웨어 출력 채널 수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avaudiosession/inputisavailable.md">var inputIsAvailable: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">하드웨어 오디오 입력 경로 사용 가능 여부를 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avaudiosession/preferredhardwaresamplerate.md">var preferredHardwareSampleRate: Double</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">선호하는 하드웨어 샘플 레이트, 단위는 hertz입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avaudiosession/setpreferredhardwaresamplerate(_:">func setPreferredHardwareSampleRate(Double) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">입력 및 출력에 대한 선호 하드웨어 샘플 레이트를 설정합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiosession/currenthardwaresamplerate">View on Apple Developer</a>*</span>

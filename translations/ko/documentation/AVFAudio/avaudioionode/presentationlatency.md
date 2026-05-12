---
source_path: "documentation/AVFAudio/avaudioionode/presentationlatency.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudioionode/presentationlatency"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:presentationlatency:0000:0001">presentationLatency</span>

<span class="ko-segment" data-segment-id="seg:paragraph:presentationlatency:0001:0001">**Framework**: AVFAudio **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:presentationlatency:0002:0001">오디오 장치로부터 또는 오디오 장치로 렌더링할 때 적용되는 프레젠테이션 또는 하드웨어 지연 시간입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:presentationlatency:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:presentationlatency:0004:0001">iOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:presentationlatency:0004:0002">iPadOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:presentationlatency:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:presentationlatency:0004:0004">macOS 10.10+</span>
- <span class="ko-segment" data-segment-id="seg:list:presentationlatency:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:presentationlatency:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:presentationlatency:0004:0007">watchOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var presentationLatency: TimeInterval { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 값은 <code>kAudioDevicePropertyLatency</code> 및 <code>kAudioStreamPropertyLatency</code>에 해당합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">자세한 내용은 <code>CoreAudio.Framework</code>의 <code>AudioHardwareBase.h</code>를 참조합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudioionode/presentationlatency">View on Apple Developer</a>*</span>

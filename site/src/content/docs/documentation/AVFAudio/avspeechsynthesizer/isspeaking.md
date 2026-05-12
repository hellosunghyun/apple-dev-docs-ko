---
source_path: "documentation/AVFAudio/avspeechsynthesizer/isspeaking.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avspeechsynthesizer/isspeaking"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:isspeaking:0000:0001">isSpeaking</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isspeaking:0001:0001">**Framework**: AVFAudio **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isspeaking:0002:0001">음성 합성기가 발화 중이거나 일시 중지 상태에서 발화 항목을 보유하고 있는지 여부를 나타내는 불리언 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isspeaking:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:isspeaking:0004:0001">iOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isspeaking:0004:0002">iPadOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isspeaking:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:isspeaking:0004:0004">macOS 10.14+</span>
- <span class="ko-segment" data-segment-id="seg:list:isspeaking:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:isspeaking:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isspeaking:0004:0007">watchOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var isSpeaking: Bool { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001"><code>true</code>이면 합성기가 발화 중이거나 일시 중지 상태이며, 큐에 발화 항목이 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002"><code>false</code>이면 합성기가 발화 중이 아니고 큐에 발화 항목이 없습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">관련 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avspeechsynthesizer/ispaused.md">var isPaused: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">음성 합성기가 일시 중지 상태인지 여부를 나타내는 불리언 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avspeechsynthesizer/isspeaking">View on Apple Developer</a>*</span>

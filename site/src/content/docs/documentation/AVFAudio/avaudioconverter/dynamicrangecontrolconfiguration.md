---
source_path: "documentation/AVFAudio/avaudioconverter/dynamicrangecontrolconfiguration.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudioconverter/dynamicrangecontrolconfiguration"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:dynamicrangecontrolconfiguration:0000:0001">dynamicRangeControlConfiguration</span>

<span class="ko-segment" data-segment-id="seg:paragraph:dynamicrangecontrolconfiguration:0001:0001">**Framework**: AVFAudio **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:dynamicrangecontrolconfiguration:0002:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:dynamicrangecontrolconfiguration:0003:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:dynamicrangecontrolconfiguration:0003:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:dynamicrangecontrolconfiguration:0003:0003">Mac Catalyst 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:dynamicrangecontrolconfiguration:0003:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:dynamicrangecontrolconfiguration:0003:0005">tvOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:dynamicrangecontrolconfiguration:0003:0006">visionOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:dynamicrangecontrolconfiguration:0003:0007">watchOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0004:0001">Declaration</span>

```swift
var dynamicRangeControlConfiguration: AVAudioDynamicRangeControlConfiguration { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0006:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0007:0001">인코더 동적 범위 제어(Encoder Dynamic Range Control, DRC) 구성입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">인코더에서 지원되는 경우, 이 속성은 비트스트림이 생성될 때 적용할 구성을 제어합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">The default value is <code>50%</code>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avaudioconverter/audiosyncpacketfrequency.md">var audioSyncPacketFrequency: Int</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0002"><a href="avaudioconverter/contentsource.md">var contentSource: AVAudioContentSource</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0003"><a href="avaudiocontentsource.md">enum AVAudioContentSource</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0004"><a href="avaudiodynamicrangecontrolconfiguration.md">enum AVAudioDynamicRangeControlConfiguration</a></span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudioconverter/dynamicrangecontrolconfiguration">View on Apple Developer</a>*</span>

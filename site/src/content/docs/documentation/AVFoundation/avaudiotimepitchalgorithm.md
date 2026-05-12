---
source_path: "documentation/AVFoundation/avaudiotimepitchalgorithm.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avaudiotimepitchalgorithm"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avaudiotimepitchalgorithm:0000:0001">AVAudioTimePitchAlgorithm</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiotimepitchalgorithm:0001:0001">**Framework**: AVFoundation **Kind**: struct</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiotimepitchalgorithm:0002:0001">이 알고리즘은 재생 속도가 변경될 때 오디오 피치를 설정하는 데 사용됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiotimepitchalgorithm:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avaudiotimepitchalgorithm:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiotimepitchalgorithm:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiotimepitchalgorithm:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiotimepitchalgorithm:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiotimepitchalgorithm:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiotimepitchalgorithm:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiotimepitchalgorithm:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
struct AVAudioTimePitchAlgorithm
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:type-properties:0008:0001">타입 속성</span>

- <span class="ko-segment" data-segment-id="seg:list:type-properties:0009:0001"><a href="avaudiotimepitchalgorithm/lowqualityzerolatency.md">static let lowQualityZeroLatency: AVAudioTimePitchAlgorithm</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:type-properties:0010:0001">낮은 품질이면서 연산 부담이 매우 낮은 피치 알고리즘입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:type-properties:0011:0001"><a href="avaudiotimepitchalgorithm/spectral.md">static let spectral: AVAudioTimePitchAlgorithm</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:type-properties:0012:0001">음악에 적합한 최고 품질의 타임 피치 알고리즘입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:type-properties:0013:0001"><a href="avaudiotimepitchalgorithm/timedomain.md">static let timeDomain: AVAudioTimePitchAlgorithm</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:type-properties:0014:0001">보이스에 적합한 낮은 품질의 타임 피치 알고리즘입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:type-properties:0015:0001"><a href="avaudiotimepitchalgorithm/varispeed.md">static let varispeed: AVAudioTimePitchAlgorithm</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:type-properties:0016:0001">피치 보정을 수행하지 않는 고품질 타임 피치 알고리즘입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0017:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0018:0001"><a href="avaudiotimepitchalgorithm/init(rawvalue:">init(rawValue: String)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0019:0001"><code>String</code>을 사용해 새 time pitch 알고리즘을 생성합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0020:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0021:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0022:0001"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0022:0002"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0022:0003"><a href="../Swift/RawRepresentable.md">RawRepresentable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0022:0004"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0022:0005"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0023:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avaudiomixinputparameters/audiotimepitchalgorithm.md">var audioTimePitchAlgorithm: AVAudioTimePitchAlgorithm?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">음성 스케일 편집에서 오디오 피치를 관리하는 데 사용되는 처리 알고리즘입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avaudiotimepitchalgorithm">View on Apple Developer</a>*</span>

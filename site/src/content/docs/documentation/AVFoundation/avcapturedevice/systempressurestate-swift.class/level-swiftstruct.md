---
source_path: "documentation/AVFoundation/avcapturedevice/systempressurestate-swift.class/level-swiftstruct.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedevice/systempressurestate-swift.class/level-swiftstruct"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avcapturedevicesystempressurestatelevel:0000:0001">AVCaptureDevice.SystemPressureState.Level</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcapturedevicesystempressurestatelevel:0001:0001">**Framework**: AVFoundation **Kind**: struct</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcapturedevicesystempressurestatelevel:0002:0001">시스템 압력 상태 수준을 정의하는 구조체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcapturedevicesystempressurestatelevel:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avcapturedevicesystempressurestatelevel:0004:0001">iOS 11.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturedevicesystempressurestatelevel:0004:0002">iPadOS 11.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturedevicesystempressurestatelevel:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturedevicesystempressurestatelevel:0004:0004">tvOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturedevicesystempressurestatelevel:0004:0005">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
struct Level
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:system-pressure-levels:0008:0001">시스템 압력 수준</span>

- <span class="ko-segment" data-segment-id="seg:list:system-pressure-levels:0009:0001"><a href="avcapturedevice/systempressurestate-swift.class/level-swift.struct/nominal.md">static let nominal: AVCaptureDevice.SystemPressureState.Level</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:system-pressure-levels:0010:0001">시스템 압력이 정상이며 과부하 상태가 아님을 나타내는 수준입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:system-pressure-levels:0011:0001"><a href="avcapturedevice/systempressurestate-swift.class/level-swift.struct/fair.md">static let fair: AVCaptureDevice.SystemPressureState.Level</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:system-pressure-levels:0012:0001">시스템 압력이 약간 상승했음을 나타내는 수준입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:system-pressure-levels:0013:0001"><a href="avcapturedevice/systempressurestate-swift.class/level-swift.struct/serious.md">static let serious: AVCaptureDevice.SystemPressureState.Level</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:system-pressure-levels:0014:0001">시스템 압력이 크게 상승했음을 나타내는 수준입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:system-pressure-levels:0015:0001"><a href="avcapturedevice/systempressurestate-swift.class/level-swift.struct/critical.md">static let critical: AVCaptureDevice.SystemPressureState.Level</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:system-pressure-levels:0016:0001">시스템 압력이 매우 높아졌습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:system-pressure-levels:0017:0001"><a href="avcapturedevice/systempressurestate-swift.class/level-swift.struct/shutdown.md">static let shutdown: AVCaptureDevice.SystemPressureState.Level</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:system-pressure-levels:0018:0001">시스템 압력이 임계치를 초과하여 캡처 시스템이 중단되었습니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0019:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0020:0001"><a href="avcapturedevice/systempressurestate-swift.class/level-swift.struct/init(rawvalue:">init(rawValue: String)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0021:0001">원시 문자열 값에서 시스템 압력 수준을 생성합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0022:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0023:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0024:0001"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0024:0002"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0024:0003"><a href="../Swift/RawRepresentable.md">RawRepresentable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0024:0004"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0024:0005"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0025:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avcapturedevice/systempressurestate-swift.class/level-swift.property.md">var level: AVCaptureDevice.SystemPressureState.Level</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">캡처 시스템의 전반적인 성능 제약 수준입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedevice/systempressurestate-swift.class/level-swift.struct">View on Apple Developer</a>*</span>

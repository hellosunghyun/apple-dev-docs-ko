---
source_path: "documentation/AVFAudio/avaudiosession/recordpermission-swiftenum.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiosession/recordpermission-swiftenum"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avaudiosessionrecordpermission:0000:0001">AVAudioSession.RecordPermission</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiosessionrecordpermission:0001:0001">**Framework**: AVFAudio **Kind**: enum</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiosessionrecordpermission:0002:0001">녹음 권한 요청의 현재 상태를 정의하는 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiosessionrecordpermission:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avaudiosessionrecordpermission:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiosessionrecordpermission:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiosessionrecordpermission:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiosessionrecordpermission:0004:0004">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiosessionrecordpermission:0004:0005">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiosessionrecordpermission:0004:0006">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
enum RecordPermission
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001"><a href="avaudiosession/recordpermission-swift.property.md">@@TOKEN_0@@</a> 속성은 이러한 값을 반환합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0009:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:record-permissions:0010:0001">녹음 권한</span>

- <span class="ko-segment" data-segment-id="seg:list:record-permissions:0011:0001"><a href="avaudiosession/recordpermission-swift.enum/undetermined.md">AVAudioSession.RecordPermission.undetermined</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:record-permissions:0012:0001">사용자가 녹음 권한을 허용하지도 거부하지도 않았음을 나타내는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:record-permissions:0013:0001"><a href="avaudiosession/recordpermission-swift.enum/denied.md">AVAudioSession.RecordPermission.denied</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:record-permissions:0014:0001">사용자가 녹음 권한을 거부했음을 나타내는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:record-permissions:0015:0001"><a href="avaudiosession/recordpermission-swift.enum/granted.md">AVAudioSession.RecordPermission.granted</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:record-permissions:0016:0001">사용자가 녹음 권한을 허용했음을 나타내는 값입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0017:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0018:0001"><a href="avaudiosession/recordpermission-swift.enum/init(rawvalue:">init?(rawValue: UInt)</a>.md)</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0019:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0020:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0021:0001"><a href="../Swift/BitwiseCopyable.md">BitwiseCopyable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0021:0002"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0021:0003"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0021:0004"><a href="../Swift/RawRepresentable.md">RawRepresentable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0021:0005"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0021:0006"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:conforms-to:0023:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiosession/recordpermission-swift.enum">View on Apple Developer</a>*</span>

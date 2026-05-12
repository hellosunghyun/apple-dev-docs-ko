---
source_path: "documentation/AVFoundation/avassetexportsession/status-swiftenum.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetexportsession/status-swiftenum"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avassetexportsessionstatus:0000:0001">AVAssetExportSession.Status</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetexportsessionstatus:0001:0001">**Framework**: AVFoundation **Kind**: enum</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetexportsessionstatus:0002:0001">내보내기 세션의 상태를 나타내는 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetexportsessionstatus:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avassetexportsessionstatus:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetexportsessionstatus:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetexportsessionstatus:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetexportsessionstatus:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetexportsessionstatus:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetexportsessionstatus:0004:0006">visionOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
enum Status
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:status-values:0008:0001">상태 값</span>

- <span class="ko-segment" data-segment-id="seg:list:status-values:0009:0001"><a href="avassetexportsession/status-swift.enum/unknown.md">AVAssetExportSession.Status.unknown</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:status-values:0010:0001">세션 상태를 알 수 없습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:status-values:0011:0001"><a href="avassetexportsession/status-swift.enum/waiting.md">AVAssetExportSession.Status.waiting</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:status-values:0012:0001">세션이 추가 데이터를 내보낼 준비를 기다리고 있습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:status-values:0013:0001"><a href="avassetexportsession/status-swift.enum/exporting.md">AVAssetExportSession.Status.exporting</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:status-values:0014:0001">내보내기가 진행 중입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:status-values:0015:0001"><a href="avassetexportsession/status-swift.enum/completed.md">AVAssetExportSession.Status.completed</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:status-values:0016:0001">내보내기가 성공적으로 완료됩니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:status-values:0017:0001"><a href="avassetexportsession/status-swift.enum/failed.md">AVAssetExportSession.Status.failed</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:status-values:0018:0001">내보내기가 실패합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:status-values:0019:0001"><a href="avassetexportsession/status-swift.enum/cancelled.md">AVAssetExportSession.Status.cancelled</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:status-values:0020:0001">내보내기를 취소했습니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0021:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0022:0001"><a href="avassetexportsession/status-swift.enum/init(rawvalue:">init?(rawValue: Int)</a>.md)</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0023:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0024:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0025:0001"><a href="../Swift/BitwiseCopyable.md">BitwiseCopyable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0025:0002"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0025:0003"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0025:0004"><a href="../Swift/RawRepresentable.md">RawRepresentable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0025:0005"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0025:0006"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0026:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001">[func states(updateInterval: TimeInterval) -&gt; some Sendable &amp; AsyncSequence&lt;AVAssetExportSession.State, Never&gt;</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">](avassetexportsession/states(updateinterval:).md) 내보내기 작업의 진행 상태를 모니터링합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="avassetexportsession/state.md">AVAssetExportSession.State</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">내보내기 작업의 상태를 나타내는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001"><a href="avassetexportsession/status-swift.property.md">var status: AVAssetExportSession.Status</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">내보내기 세션의 상태입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0033:0001"><a href="avassetexportsession/progress.md">var progress: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">내보내기 진행 상태를 나타내는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0035:0001"><a href="avassetexportsession/error.md">var error: (any Error)?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0036:0001">선택적 오류 객체입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0038:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetexportsession/status-swift.enum">View on Apple Developer</a>*</span>

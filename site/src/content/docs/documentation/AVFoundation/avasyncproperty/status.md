---
source_path: "documentation/AVFoundation/avasyncproperty/status.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avasyncproperty/status"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avasyncpropertystatus:0000:0001">AVAsyncProperty.Status</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avasyncpropertystatus:0001:0001">**Framework**: AVFoundation **Kind**: enum</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avasyncpropertystatus:0002:0001">비동기 속성에 대한 로드된 상태 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avasyncpropertystatus:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avasyncpropertystatus:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avasyncpropertystatus:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avasyncpropertystatus:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avasyncpropertystatus:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avasyncpropertystatus:0004:0005">tvOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avasyncpropertystatus:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avasyncpropertystatus:0004:0007">watchOS 8.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
@frozen
enum Status
```

## <span class="ko-segment" data-segment-id="seg:heading:mentions:0007:0001">Mentions</span>

- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0001"><a href="capturing-thumbnail-and-preview-images.md">Loading media data asynchronously</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0009:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:status-values:0010:0001">상태 값</span>

- <span class="ko-segment" data-segment-id="seg:list:status-values:0011:0001"><a href="avasyncproperty/status/notyetloaded.md">AVAsyncProperty.Status.notYetLoaded</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:status-values:0012:0001">시스템이 속성 값을 로드하지 않았습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:status-values:0013:0001"><a href="avasyncproperty/status/loading.md">AVAsyncProperty.Status.loading</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:status-values:0014:0001">시스템이 속성을 로드하고 있습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:status-values:0015:0001"><a href="avasyncproperty/status/loaded(_:">AVAsyncProperty.Status.loaded(_:)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:status-values:0016:0001">속성 값을 사용할 수 있습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:status-values:0017:0001"><a href="avasyncproperty/status/failed(_:">AVAsyncProperty.Status.failed(_:)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:status-values:0018:0001">속성 값을 로드하지 못했습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0019:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0020:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0021:0001"><a href="../Swift/Copyable.md">Copyable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0021:0002"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0021:0003"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0021:0004"><a href="../Swift/Escapable.md">Escapable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0021:0005"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0021:0006"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:conforms-to:0023:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avasyncproperty/status">View on Apple Developer</a>*</span>

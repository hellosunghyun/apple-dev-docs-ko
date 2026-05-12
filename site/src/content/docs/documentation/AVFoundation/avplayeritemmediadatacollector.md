---
source_path: "documentation/AVFoundation/avplayeritemmediadatacollector.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avplayeritemmediadatacollector"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avplayeritemmediadatacollector:0000:0001">AVPlayerItemMediaDataCollector</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avplayeritemmediadatacollector:0001:0001">**Framework**: AVFoundation **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avplayeritemmediadatacollector:0002:0001">미디어 데이터 수집기의 추상 기본 클래스입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avplayeritemmediadatacollector:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avplayeritemmediadatacollector:0004:0001">iOS 9.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:avplayeritemmediadatacollector:0004:0002">iPadOS 9.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:avplayeritemmediadatacollector:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avplayeritemmediadatacollector:0004:0004">macOS 10.11.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:avplayeritemmediadatacollector:0004:0005">tvOS 9.2+</span>
- <span class="ko-segment" data-segment-id="seg:list:avplayeritemmediadatacollector:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avplayeritemmediadatacollector:0004:0007">watchOS 2.3+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class AVPlayerItemMediaDataCollector
```

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0007:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0008:0001">상속됨</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0009:0001"><a href="../ObjectiveC/NSObject-swift.class.md">NSObject</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:inherited-by:0010:0001">상속 대상</span>

- <span class="ko-segment" data-segment-id="seg:list:inherited-by:0011:0001"><a href="avplayeritemmetadatacollector.md">AVPlayerItemMetadataCollector</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0012:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0013:0001"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0013:0002"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0013:0003"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0013:0004"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0013:0005"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0013:0006"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0013:0007"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0013:0008"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0014:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="presenting-chapter-markers.md">Presenting chapter markers</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">사용자가 콘텐츠를 빠르게 탐색할 수 있도록 챕터 마커를 추가합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avmetadatagroup.md">class AVMetadataGroup</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">타임라인 세그먼트와 연결된 메타데이터 항목 모음입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="avtimedmetadatagroup.md">class AVTimedMetadataGroup</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">특정 시간 범위 동안 사용할 수 있는 메타데이터 항목 모음입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="avmutabletimedmetadatagroup.md">class AVMutableTimedMetadataGroup</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">특정 시간 범위 동안 사용할 수 있는 가변 메타데이터 항목 모음입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="avdaterangemetadatagroup.md">class AVDateRangeMetadataGroup</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">특정 날짜 범위 내에서 사용할 수 있는 메타데이터 항목 모음입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="avmutabledaterangemetadatagroup.md">class AVMutableDateRangeMetadataGroup</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">특정 날짜 범위 내에서 사용할 수 있는 가변 메타데이터 항목 모음입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="avplayeritemmetadatacollector.md">class AVPlayerItemMetadataCollector</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">HTTP Live Streaming 자산에 대해 정의된 날짜 범위 메타데이터를 캡처하는 데 사용되는 객체입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avplayeritemmediadatacollector">View on Apple Developer</a>*</span>

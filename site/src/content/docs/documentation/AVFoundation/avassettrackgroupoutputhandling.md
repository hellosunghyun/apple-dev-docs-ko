---
source_path: "documentation/AVFoundation/avassettrackgroupoutputhandling.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassettrackgroupoutputhandling"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avassettrackgroupoutputhandling:0000:0001">AVAssetTrackGroupOutputHandling</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassettrackgroupoutputhandling:0001:0001">**Framework**: AVFoundation **Kind**: struct</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassettrackgroupoutputhandling:0002:0001">내보내기 세션에서 트랙 그룹의 대체 트랙을 처리하는 정책을 지정하는 타입입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassettrackgroupoutputhandling:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avassettrackgroupoutputhandling:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassettrackgroupoutputhandling:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassettrackgroupoutputhandling:0004:0003">Mac Catalyst 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassettrackgroupoutputhandling:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassettrackgroupoutputhandling:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassettrackgroupoutputhandling:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
struct AVAssetTrackGroupOutputHandling
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:policies:0008:0001">Policies</span>

- <span class="ko-segment" data-segment-id="seg:list:policies:0009:0001"><a href="avassettrackgroupoutputhandling/preservealternatetracks.md">static var preserveAlternateTracks: AVAssetTrackGroupOutputHandling</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:policies:0010:0001">내보내기 시 소스 자산의 대체 오디오 트랙을 통과시키는 정책입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0011:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0012:0001"><a href="avassettrackgroupoutputhandling/init(rawvalue:">init(rawValue: UInt)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0013:0001">원시 값으로 트랙 그룹 출력 처리 구조체를 생성합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0014:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0015:0001">준수 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0016:0001"><a href="../Swift/BitwiseCopyable.md">BitwiseCopyable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0016:0002"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0016:0003"><a href="../Swift/ExpressibleByArrayLiteral.md">ExpressibleByArrayLiteral</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0016:0004"><a href="../Swift/OptionSet.md">OptionSet</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0016:0005"><a href="../Swift/RawRepresentable.md">RawRepresentable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0016:0006"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0016:0007"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0016:0008"><a href="../Swift/SetAlgebra.md">SetAlgebra</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0017:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avassetexportsession/audiotrackgrouphandling.md">var audioTrackGroupHandling: AVAssetTrackGroupOutputHandling</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">세션이 대체 오디오 트랙을 내보내는 방식을 정의하는 정책입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassettrackgroupoutputhandling">View on Apple Developer</a>*</span>

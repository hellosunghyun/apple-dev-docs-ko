---
source_path: "documentation/AVFoundation/avassetsegmenttrackreport.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetsegmenttrackreport"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avassetsegmenttrackreport:0000:0001">AVAssetSegmentTrackReport</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetsegmenttrackreport:0001:0001">**Framework**: AVFoundation **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetsegmenttrackreport:0002:0001">세그먼트 데이터의 트랙 정보를 제공하는 객체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetsegmenttrackreport:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avassetsegmenttrackreport:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetsegmenttrackreport:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetsegmenttrackreport:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetsegmenttrackreport:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetsegmenttrackreport:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetsegmenttrackreport:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class AVAssetSegmentTrackReport
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:inspecting-a-report:0008:0001">보고서 검사</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-a-report:0009:0001"><a href="avassetsegmenttrackreport/trackid.md">var trackID: CMPersistentTrackID</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-a-report:0010:0001">트랙의 영구 고유 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-a-report:0011:0001"><a href="avassetsegmenttrackreport/mediatype.md">var mediaType: AVMediaType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-a-report:0012:0001">트랙에 포함된 미디어 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-a-report:0013:0001"><a href="avassetsegmenttrackreport/duration.md">var duration: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-a-report:0014:0001">트랙의 기간입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-a-report:0015:0001"><a href="avassetsegmenttrackreport/earliestpresentationtimestamp.md">var earliestPresentationTimeStamp: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-a-report:0016:0001">이 트랙의 가장 이른 프레젠테이션 타임스탬프(PTS)입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-a-report:0017:0001"><a href="avassetsegmenttrackreport/firstvideosampleinformation.md">var firstVideoSampleInformation: AVAssetSegmentReportSampleInformation?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-a-report:0018:0001">트랙의 첫 번째 비디오 샘플에 대한 정보입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-a-report:0019:0001"><a href="avassetsegmentreportsampleinformation.md">class AVAssetSegmentReportSampleInformation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-a-report:0020:0001">트랙의 샘플 데이터에 대한 정보를 제공하는 객체입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0021:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0022:0001">상속 대상</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0023:0001"><a href="../ObjectiveC/NSObject-swift.class.md">NSObject</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0024:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0025:0001"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0025:0002"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0025:0003"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0025:0004"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0025:0005"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0025:0006"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0025:0007"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0025:0008"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0026:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="avassetsegmentreport/segmenttype.md">var segmentType: AVAssetSegmentType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">세그먼트 데이터의 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="avassetsegmenttype.md">enum AVAssetSegmentType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">세그먼트의 유형을 정의하는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001">[var trackReports: [AVAssetSegmentTrackReport]](avassetsegmentreport/trackreports.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">세그먼트의 트랙 데이터에 대한 보고서입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetsegmenttrackreport">View on Apple Developer</a>*</span>

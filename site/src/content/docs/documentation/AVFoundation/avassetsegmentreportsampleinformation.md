---
source_path: "documentation/AVFoundation/avassetsegmentreportsampleinformation.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetsegmentreportsampleinformation"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avassetsegmentreportsampleinformation:0000:0001">AVAssetSegmentReportSampleInformation</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetsegmentreportsampleinformation:0001:0001">**Framework**: AVFoundation **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetsegmentreportsampleinformation:0002:0001">트랙의 샘플 데이터 정보를 제공하는 객체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetsegmentreportsampleinformation:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avassetsegmentreportsampleinformation:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetsegmentreportsampleinformation:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetsegmentreportsampleinformation:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetsegmentreportsampleinformation:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetsegmentreportsampleinformation:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetsegmentreportsampleinformation:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class AVAssetSegmentReportSampleInformation
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:inspecting-the-information:0008:0001">정보 검토</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-the-information:0009:0001"><a href="avassetsegmentreportsampleinformation/presentationtimestamp.md">var presentationTimeStamp: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-the-information:0010:0001">샘플의 표시 타임스탬프(PTS)입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-the-information:0011:0001"><a href="avassetsegmentreportsampleinformation/offset.md">var offset: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-the-information:0012:0001">세그먼트에서 샘플의 오프셋입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-the-information:0013:0001"><a href="avassetsegmentreportsampleinformation/length.md">var length: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-the-information:0014:0001">샘플 데이터의 길이입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-the-information:0015:0001"><a href="avassetsegmentreportsampleinformation/issyncsample.md">var isSyncSample: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-the-information:0016:0001">샘플이 키 프레임인지 여부를 나타내는 불리언 값입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0017:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0018:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0019:0001"><a href="../ObjectiveC/NSObject-swift.class.md">NSObject</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0020:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0021:0001"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0021:0002"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0021:0003"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0021:0004"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0021:0005"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0021:0006"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0021:0007"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0021:0008"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0022:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="avassetsegmenttrackreport/trackid.md">var trackID: CMPersistentTrackID</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">트랙의 영구적 고유 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="avassetsegmenttrackreport/mediatype.md">var mediaType: AVMediaType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">트랙에 포함된 미디어의 타입입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="avassetsegmenttrackreport/duration.md">var duration: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">트랙의 길이입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="avassetsegmenttrackreport/earliestpresentationtimestamp.md">var earliestPresentationTimeStamp: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">이 트랙의 가장 이른 표시 타임스탬프(PTS)입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001"><a href="avassetsegmenttrackreport/firstvideosampleinformation.md">var firstVideoSampleInformation: AVAssetSegmentReportSampleInformation?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">트랙의 첫 번째 비디오 샘플에 대한 정보입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetsegmentreportsampleinformation">View on Apple Developer</a>*</span>

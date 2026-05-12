---
source_path: "documentation/AVFoundation/avplayerinterstitialevent/date.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avplayerinterstitialevent/date"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:date:0000:0001">date</span>

<span class="ko-segment" data-segment-id="seg:paragraph:date:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:date:0002:0001">기본 콘텐츠의 날짜 범위 내에서 인터스티셜 콘텐츠 재생이 시작되는 날짜입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:date:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:date:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:date:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:date:0004:0003">Mac Catalyst 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:date:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:date:0004:0005">tvOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:date:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:date:0004:0007">watchOS 8.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var date: Date? { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">When your app enters a state where using a video decoder resources is not permissible, the value of this property changes to <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_0@@</a> along with the video renderer’s status changing to <a href="avqueuedsamplebufferrenderingstatus/failed.md">@@TOKEN_1@@</a>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avplayerinterstitialevent/time.md">var time: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">기본 콘텐츠 타임라인 내에서 인터스티셜 콘텐츠 재생이 시작되는 시간입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avplayerinterstitialevent/willplayonce.md">var willPlayOnce: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">이 이벤트를 한 번만 예약하고 이후 재생을 억제해야 하는지 여부를 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avplayerinterstitialevent/resumptionoffset.md">var resumptionOffset: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avplayeritemoutputpulldelegate/outputsequencewasflushed(_:">View on Apple Developer</a>)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avplayerinterstitialevent/playoutlimit.md">var playoutLimit: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">인터스티셜 재생이 끝나는 시간 오프셋입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avplayerinterstitialevent/alignsstartwithprimarysegmentboundary.md">var alignsStartWithPrimarySegmentBoundary: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">인터스티셜 재생의 시작 시간이 기본 자산의 세그먼트 경계에 맞춰 정렬되어야 하는지 여부를 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avplayerinterstitialevent/alignsresumptionwithprimarysegmentboundary.md">var alignsResumptionWithPrimarySegmentBoundary: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">기본 콘텐츠 재생의 재개 시간이 기본 자산의 세그먼트 경계에 맞춰 정렬되어야 하는지 여부를 나타내는 Boolean 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avplayerinterstitialevent/date">View on Apple Developer</a>*</span>

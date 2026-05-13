---
source_path: "documentation/AVFoundation/avplayeritemintegratedtimelinesnapshot/currentsegment.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avplayeritemintegratedtimelinesnapshot/currentsegment"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:currentsegment:0000:0001">currentSegment</span>

<span class="ko-segment" data-segment-id="seg:paragraph:currentsegment:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:currentsegment:0002:0001">현재 재생 중인 세그먼트입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:currentsegment:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:currentsegment:0004:0001">iOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:currentsegment:0004:0002">iPadOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:currentsegment:0004:0003">Mac Catalyst 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:currentsegment:0004:0004">macOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:currentsegment:0004:0005">tvOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:currentsegment:0004:0006">visionOS 2.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:currentsegment:0004:0007">watchOS 11.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var currentSegment: AVPlayerItemSegment? { get }
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="avplayeritemintegratedtimelinesnapshot/duration.md">var duration: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">기본 항목과 예약된 인서티셜 이벤트의 총 기간입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001">[var segments: [AVPlayerItemSegment]](avplayeritemintegratedtimelinesnapshot/segments.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">이 스냅샷의 세그먼트입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avplayeritemsegment.md">class AVPlayerItemSegment</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">통합 타임라인의 시간 구간을 나타내는 불변 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avplayeritemintegratedtimelinesnapshot/currenttime.md">var currentTime: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">시스템이 스냅샷을 생성한 시점의 통합 타임라인 현재 시간입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avplayeritemintegratedtimelinesnapshot/currentdate.md">var currentDate: Date?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">시스템이 스냅샷을 생성한 시점의 통합 타임라인 현재 날짜입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avplayeritemintegratedtimelinesnapshot/currentsegment">View on Apple Developer</a>*</span>

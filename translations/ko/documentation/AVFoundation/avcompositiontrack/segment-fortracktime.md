---
source_path: "documentation/AVFoundation/avcompositiontrack/segment-fortracktime.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcompositiontrack/segment-fortracktime"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:segmentfortracktime:0000:0001">segment(forTrackTime:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:segmentfortracktime:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:segmentfortracktime:0002:0001">지정한 트랙 시간을 포함하거나 가장 가까운 대상 시간 범위를 가진 세그먼트를 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:segmentfortracktime:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:segmentfortracktime:0004:0001">iOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:segmentfortracktime:0004:0002">iPadOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:segmentfortracktime:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:segmentfortracktime:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:segmentfortracktime:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:segmentfortracktime:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:segmentfortracktime:0004:0007">watchOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func segment(forTrackTime trackTime: CMTime) -> AVCompositionTrackSegment?
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">트랙 시간과 연결된 <a href="avcompositiontracksegment.md">@@TOKEN_0@@</a>입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>trackTime</code>: 반환할 세그먼트의 트랙 시간입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001">[var segments: [AVCompositionTrackSegment]](avcompositiontrack/segments.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">트랙의 미디어 샘플에서 타임라인으로의 시간 매핑입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcompositiontrack/segment(fortracktime:">Apple Developer에서 보기</a>)*</span>

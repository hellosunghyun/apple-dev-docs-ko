---
source_path: "documentation/AVFoundation/avassettrack/segment-fortracktime.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassettrack/segment-fortracktime"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:segmentfortracktime:0000:0001">segment(forTrackTime:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:segmentfortracktime:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:segmentfortracktime:0002:0001">지정한 트랙 시간과 일치하거나 가장 가까운 대상 시간 범위를 가진 세그먼트를 검색합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:segmentfortracktime:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:segmentfortracktime:0004:0001">iOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:segmentfortracktime:0004:0002">iPadOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:segmentfortracktime:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:segmentfortracktime:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:segmentfortracktime:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:segmentfortracktime:0004:0006">watchOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func segment(forTrackTime trackTime: CMTime) -> AVAssetTrackSegment?
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">지정된 시간과 일치하거나 그에 가장 가까운 트랙 세그먼트입니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">Apple은 iOS 15, tvOS 15, macOS 12, watchOS 8 이상에서 이 메서드 사용을 권장하지 않습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">대신 <a href="avassettrack/loadsegment(fortracktime:completionhandler:">@@TOKEN_0@@</a>.md)를 사용해 세그먼트를 비동기적으로 로드합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>trackTime</code>: 필요한 세그먼트의 트랙 시간입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0014:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassettrack/segment(fortracktime:">Apple Developer에서 보기</a>)*</span>

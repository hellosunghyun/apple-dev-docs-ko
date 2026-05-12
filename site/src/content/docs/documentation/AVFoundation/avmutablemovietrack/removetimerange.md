---
source_path: "documentation/AVFoundation/avmutablemovietrack/removetimerange.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/removetimerange"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:removetimerange:0000:0001">removeTimeRange(_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:removetimerange:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:removetimerange:0002:0001">트랙에서 지정한 시간 범위를 제거합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:removetimerange:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:removetimerange:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:removetimerange:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:removetimerange:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:removetimerange:0004:0004">macOS 10.11+</span>
- <span class="ko-segment" data-segment-id="seg:list:removetimerange:0004:0005">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:removetimerange:0004:0006">watchOS 6.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func removeTimeRange(_ timeRange: CMTimeRange)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>timeRange</code>: 제거할 시간 범위입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avmutablemovietrack/inserttimerange(_:of:at:copysampledata:">func insertTimeRange(CMTimeRange, of: AVAssetTrack, at: CMTime, copySampleData: Bool) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">자산 트랙의 일부를 대상 영화에 삽입합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avmutablemovietrack/insertemptytimerange(_:">func insertEmptyTimeRange(CMTimeRange)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">트랙에 빈 시간 범위를 추가합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avplayeritem/seek(to:tolerancebefore:toleranceafter:completionhandler:">func scaleTimeRange(CMTimeRange, toDuration: CMTime)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">트랙의 시간 범위 지속 시간을 변경합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/removetimerange(_:">View on Apple Developer</a>)*</span>

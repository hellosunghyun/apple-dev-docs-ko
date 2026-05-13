---
source_path: "documentation/AVFoundation/avplayeritem/loadedtimeranges.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avplayeritem/loadedtimeranges"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:loadedtimeranges:0000:0001">loadedTimeRanges</span>

<span class="ko-segment" data-segment-id="seg:paragraph:loadedtimeranges:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:loadedtimeranges:0002:0001">An array of time ranges indicating media data that is readily available.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:loadedtimeranges:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:loadedtimeranges:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:loadedtimeranges:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:loadedtimeranges:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:loadedtimeranges:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:loadedtimeranges:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:loadedtimeranges:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:loadedtimeranges:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
nonisolated
var loadedTimeRanges: [NSValue] { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">The array contains <a href="https://developer.apple.com/documentation/Foundation/NSValue">@@TOKEN_0@@</a> objects containing a <a href="https://developer.apple.com/documentation/CoreMedia/CMTimeRange">@@TOKEN_1@@</a> value indicating the times ranges for which the player item has media data readily available.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">The time ranges returned may be discontinuous.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001">[var seekableTimeRanges: [NSValue]](avplayeritem/seekabletimeranges.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">에셋 내보내기 세션이 쓰는 출력 파일 형식입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avplayeritem/loadedtimeranges">View on Apple Developer</a>*</span>

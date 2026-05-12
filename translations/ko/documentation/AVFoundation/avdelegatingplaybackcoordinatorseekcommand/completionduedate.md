---
source_path: "documentation/AVFoundation/avdelegatingplaybackcoordinatorseekcommand/completionduedate.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinatorseekcommand/completionduedate"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:completionduedate:0000:0001">completionDueDate</span>

<span class="ko-segment" data-segment-id="seg:paragraph:completionduedate:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:completionduedate:0002:0001">코디네이터가 delegate로부터 명령 처리를 기대하는 마감 시점입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:completionduedate:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:completionduedate:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:completionduedate:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:completionduedate:0004:0003">Mac Catalyst 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:completionduedate:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:completionduedate:0004:0005">tvOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:completionduedate:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var completionDueDate: Date? { get }
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="avdelegatingplaybackcoordinatorseekcommand/shouldbufferinanticipationofplayback.md">var shouldBufferInAnticipationOfPlayback: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">재생 시작 요청을 예상해 player가 버퍼링을 시작하는지 여부를 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avdelegatingplaybackcoordinatorseekcommand/anticipatedplaybackrate.md">var anticipatedPlaybackRate: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">코디네이터가 재생이 재개될 속도를 기대하는 비율입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avdelegatingplaybackcoordinatorseekcommand/itemtime.md">var itemTime: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">항목 타임라인에서 이동할 시간입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinatorseekcommand/completionduedate">View on Apple Developer</a>*</span>

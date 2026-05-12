---
source_path: "documentation/AVFoundation/avdelegatingplaybackcoordinatorseekcommand/shouldbufferinanticipationofplayback.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinatorseekcommand/shouldbufferinanticipationofplayback"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:shouldbufferinanticipationofplayback:0000:0001">shouldBufferInAnticipationOfPlayback</span>

<span class="ko-segment" data-segment-id="seg:paragraph:shouldbufferinanticipationofplayback:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:shouldbufferinanticipationofplayback:0002:0001">플레이어가 재생 시작 요청을 예상하여 버퍼링을 시작하는지 나타내는 부울 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:shouldbufferinanticipationofplayback:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:shouldbufferinanticipationofplayback:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:shouldbufferinanticipationofplayback:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:shouldbufferinanticipationofplayback:0004:0003">Mac Catalyst 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:shouldbufferinanticipationofplayback:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:shouldbufferinanticipationofplayback:0004:0005">tvOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:shouldbufferinanticipationofplayback:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var shouldBufferInAnticipationOfPlayback: Bool { get }
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="avdelegatingplaybackcoordinatorseekcommand/anticipatedplaybackrate.md">var anticipatedPlaybackRate: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">코디네이터가 재생 재개를 예상하는 속도입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avdelegatingplaybackcoordinatorseekcommand/itemtime.md">var itemTime: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">항목 타임라인에서 이동할 시간입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avdelegatingplaybackcoordinatorseekcommand/completionduedate.md">var completionDueDate: Date?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">코디네이터가 대리자에서 명령을 처리할 것으로 예상하는 마감 시한입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinatorseekcommand/shouldbufferinanticipationofplayback">View on Apple Developer</a>*</span>

---
source_path: "documentation/AVFoundation/avplayeritemaccesslogevent/playbacksessionid.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avplayeritemaccesslogevent/playbacksessionid"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:playbacksessionid:0000:0001">playbackSessionID</span>

<span class="ko-segment" data-segment-id="seg:paragraph:playbacksessionid:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:playbacksessionid:0002:0001">재생 세션을 식별하는 GUID입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:playbacksessionid:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:playbacksessionid:0004:0001">iOS 4.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:playbacksessionid:0004:0002">iPadOS 4.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:playbacksessionid:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:playbacksessionid:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:playbacksessionid:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:playbacksessionid:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:playbacksessionid:0004:0007">watchOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var playbackSessionID: String? { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 값은 HTTP 요청에서 사용됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이 속성은 “cs-guid”에 해당합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">이 속성의 값은 알 수 없으면 <code>nil</code>입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">이 속성은 key-value observing과 호환되지 않습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0012:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avplayeritemaccesslogevent/playbackstartdate.md">var playbackStartDate: Date?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">이 이벤트에서 재생이 시작된 날짜와 시간입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avplayeritemaccesslogevent/playbackstartoffset.md">var playbackStartOffset: TimeInterval</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">플레이리스트에서 마지막으로 끊김 없이 시작된 재생이 시작되는 오프셋(초)입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avplayeritemaccesslogevent/playbacktype.md">var playbackType: String?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">재생 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="avplayeritemaccesslogevent/startuptime.md">var startupTime: TimeInterval</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">플레이어 항목이 재생 준비를 완료할 때까지의 누적 기간(초)입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="avplayeritemaccesslogevent/durationwatched.md">var durationWatched: TimeInterval</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">미디어로 재생된 누적 기간(초)입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="avplayeritemaccesslogevent/numberofdroppedvideoframes.md">var numberOfDroppedVideoFrames: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">총 누락된 비디오 프레임 수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="avplayeritemaccesslogevent/numberofstalls.md">var numberOfStalls: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">발생한 재생 정지 횟수의 총합입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="avplayeritemaccesslogevent/numberofsegmentsdownloaded.md">var numberOfSegmentsDownloaded: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">서버에서 이 클라이언트로 다운로드된 미디어 세그먼트 수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="avplayeritemaccesslogevent/segmentsdownloadedduration.md">var segmentsDownloadedDuration: TimeInterval</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">다운로드된 미디어 세그먼트의 누적 기간(초)입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001"><a href="avplayeritemaccesslogevent/downloadoverdue.md">var downloadOverdue: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">세그먼트 다운로드가 너무 오래 걸린 총 횟수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avplayeritemaccesslogevent/playbacksessionid">View on Apple Developer</a>*</span>

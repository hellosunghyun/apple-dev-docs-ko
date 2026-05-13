---
source_path: "documentation/AVFAudio/avaudiosequencer/removetrack.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiosequencer/removetrack"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:removetrack:0000:0001">removeTrack(_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:removetrack:0001:0001">**Framework**: AVFAudio **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:removetrack:0002:0001">시퀀서에서 음악 트랙을 제거합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:removetrack:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:removetrack:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:removetrack:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:removetrack:0004:0003">Mac Catalyst 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:removetrack:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:removetrack:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:removetrack:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func removeTrack(_ track: AVMusicTrack) -> Bool
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">호출이 성공했는지 나타내는 불리언 값입니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">이 메서드는 다시 사용할 수 있으므로 음악 트랙을 파기하지 않습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>track</code>: 제거할 음악 트랙입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avmusictrack.md">class AVMusicTrack</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">오프셋을 지정하거나 음소거 상태로 설정할 수 있고, 다른 트랙 이벤트와 독립적으로 수정할 수 있으며, 지정된 대상으로 전송할 수 있는 음악 이벤트의 컬렉션입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avaudiosequencer/createandappendtrack.md">func createAndAppendTrack() -&gt; AVMusicTrack</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">새로운 음악 트랙을 만들고 이를 시퀀서 목록에 추가합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avaudiosequencer/reverseevents.md">func reverseEvents()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">템포 트랙을 포함해 모든 음악 트랙의 모든 이벤트 순서를 역순으로 변경합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avmusictrackloopcount.md">enum AVMusicTrackLoopCount</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">트랙이 반복되는 횟수를 정의하는 옵션입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiosequencer/removetrack(_:">View on Apple Developer</a>)*</span>

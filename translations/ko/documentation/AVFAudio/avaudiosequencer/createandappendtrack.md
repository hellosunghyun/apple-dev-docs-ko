---
source_path: "documentation/AVFAudio/avaudiosequencer/createandappendtrack.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiosequencer/createandappendtrack"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:createandappendtrack:0000:0001">createAndAppendTrack()</span>

<span class="ko-segment" data-segment-id="seg:paragraph:createandappendtrack:0001:0001">**Framework**: AVFAudio **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:createandappendtrack:0002:0001">새 음악 트랙을 생성하고 sequencer의 목록에 추가합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:createandappendtrack:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:createandappendtrack:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:createandappendtrack:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:createandappendtrack:0004:0003">Mac Catalyst 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:createandappendtrack:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:createandappendtrack:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:createandappendtrack:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func createAndAppendTrack() -> AVMusicTrack
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">sequencer에 추가된 새 음악 트랙입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avmusictrack.md">class AVMusicTrack</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">오프셋을 지정하고 음소거 상태로 설정할 수 있으며, 다른 트랙 이벤트와 독립적으로 수정하고, 지정한 대상(destination)에 보낼 수 있는 음악 이벤트 컬렉션입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avaudiosequencer/reverseevents.md">func reverseEvents()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">템포 트랙을 포함해 모든 음악 트랙의 모든 이벤트 순서를 뒤집습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avaudiosession/port/caraudio.md">func removeTrack(AVMusicTrack) -&gt; Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">sequencer에서 음악 트랙을 제거합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avmusictrackloopcount.md">enum AVMusicTrackLoopCount</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">트랙이 반복되는 횟수를 정의하는 옵션입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiosequencer/createandappendtrack(">View on Apple Developer</a>)*</span>

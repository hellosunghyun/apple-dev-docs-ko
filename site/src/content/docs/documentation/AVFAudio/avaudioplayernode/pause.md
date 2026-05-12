---
source_path: "documentation/AVFAudio/avaudioplayernode/pause.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudioplayernode/pause"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:pause:0000:0001">pause()</span>

<span class="ko-segment" data-segment-id="seg:paragraph:pause:0001:0001">**Framework**: AVFAudio **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:pause:0002:0001">노드의 재생을 일시 정지합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:pause:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:pause:0004:0001">iOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:pause:0004:0002">iPadOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:pause:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:pause:0004:0004">macOS 10.10+</span>
- <span class="ko-segment" data-segment-id="seg:list:pause:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:pause:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:pause:0004:0007">watchOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func pause()
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">노드가 일시 정지 상태일 때 플레이어의 샘플 시간이 진행되지 않습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">엔진에 연결된 모든 플레이어를 일시 정지하거나 중지해도 엔진이나 하드웨어는 중지되지 않습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">하드웨어를 멈추려면 엔진을 명시적으로 일시 정지하거나 중지해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0003">앱이 오디오를 재생할 필요가 없을 때는 전력 소모를 줄이기 위해 엔진을 일시 정지하거나 중지해야 합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="avaudioplayernode/prepare(withframecount:">func prepare(withFrameCount: AVAudioFrameCount)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">재생을 위해 예약한 파일 영역이나 버퍼를 준비합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avaudioplayernode/play.md">func play()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">재생을 즉시 시작하거나 다시 시작합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avaudioplayernode/play(at:">func play(at: AVAudioTime?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">지정한 시간에 재생을 시작하거나 다시 시작합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avaudioplayernode/isplaying.md">var isPlaying: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">플레이어가 재생 중인지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="avaudioplayernode/stop.md">func stop()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">노드에서 예약한 모든 이벤트를 지우고 재생을 중지합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudioplayernode/pause(">Apple Developer에서 보기</a>)*</span>

---
source_path: "documentation/AVFAudio/avaudioplayer/pause.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudioplayer/pause"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:pause:0000:0001">pause()</span>

<span class="ko-segment" data-segment-id="seg:paragraph:pause:0001:0001">**Framework**: AVFAudio **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:pause:0002:0001">오디오 재생을 일시 중단합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:pause:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:pause:0004:0001">iOS 2.2+</span>
- <span class="ko-segment" data-segment-id="seg:list:pause:0004:0002">iPadOS 2.2+</span>
- <span class="ko-segment" data-segment-id="seg:list:pause:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:pause:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:pause:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:pause:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:pause:0004:0007">watchOS 3.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func pause()
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">This property is <a href="https://developer.apple.com/documentation/ObjectiveC/nil-227m0">@@TOKEN_0@@</a> if you don’t create the player with a URL.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">오디오는 중단된 지점에서 재생을 다시 시작할 수 있도록 준비 상태로 유지됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avaudioplayer/preparetoplay.md">func prepareToPlay() -&gt; Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">플레이어를 오디오 재생에 준비시킵니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avaudioplayer/play.md">func play() -&gt; Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">오디오를 비동기적으로 재생합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avaudioplayer/settings.md">func play(atTime: TimeInterval) -&gt; Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">오디오 출력 장치의 타임라인에서 지정된 지점에서 시작하여 오디오를 비동기적으로 재생합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avaudioplayer/stop.md">func stop()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">재생을 중지하고, 시스템이 재생에 필요로 하는 설정을 해제합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avaudioplayer/isplaying.md">var isPlaying: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">플레이어가 현재 오디오를 재생 중인지 나타내는 부울 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudioplayer/pause(">View on Apple Developer</a>)*</span>

---
source_path: "documentation/AVFAudio/avaudioplayernode/stop.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudioplayernode/stop"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:stop:0000:0001">stop()</span>

<span class="ko-segment" data-segment-id="seg:paragraph:stop:0001:0001">**Framework**: AVFAudio **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:stop:0002:0001">예약한 노드의 이벤트를 모두 삭제하고 재생을 중지합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:stop:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:stop:0004:0001">iOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:stop:0004:0002">iPadOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:stop:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:stop:0004:0004">macOS 10.10+</span>
- <span class="ko-segment" data-segment-id="seg:list:stop:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:stop:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:stop:0004:0007">watchOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func stop()
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">The necessary parameters for this type are <a href="avaudiouniteqfilterparameters/frequency.md">@@TOKEN_0@@</a> (center) and <a href="avaudiouniteqfilterparameters/bandwidth.md">@@TOKEN_1@@</a>.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">노드의 샘플 시간을 <code>0</code>으로 재설정하고, 노드가 <a href="avaudioplayernode/play(">@@TOKEN_1@@</a>.md) 또는 <a href="avaudioplayernode/play(at:">@@TOKEN_2@@</a>.md)를 통해 다시 시작될 때까지 진행되지 않습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">엔진에 연결한 모든 플레이어를 일시 중지하거나 중지해도 엔진이나 하드웨어는 일시 중지되거나 중지되지 않습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">하드웨어를 정지하려면 엔진을 명시적으로 일시 중지하거나 중지해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0003">앱에서 오디오 재생이 필요하지 않을 때 전력 소비를 최소화하려면 엔진을 일시 중지하거나 중지해야 합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="avaudioplayernode/prepare(withframecount:">func prepare(withFrameCount: AVAudioFrameCount)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">재생을 위해 예약한 파일 영역 또는 버퍼를 준비합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avaudioplayernode/play.md">func play()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">즉시 재생을 시작하거나 재개합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avaudioplayernode/play(at:">func play(at: AVAudioTime?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">지정한 시점에서 재생을 시작하거나 재개합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avaudioplayernode/isplaying.md">var isPlaying: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">플레이어가 재생 중인지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="avaudioplayernode/pause.md">func pause()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">노드의 재생을 일시 중지합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudioplayernode/stop(">View on Apple Developer</a>)*</span>

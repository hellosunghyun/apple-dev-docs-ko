---
source_path: "documentation/AVFAudio/avaudioplayer/preparetoplay.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudioplayer/preparetoplay"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:preparetoplay:0000:0001">prepareToPlay()</span>

<span class="ko-segment" data-segment-id="seg:paragraph:preparetoplay:0001:0001">**Framework**: AVFAudio **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:preparetoplay:0002:0001">플레이어를 오디오 재생에 준비시킵니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:preparetoplay:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:preparetoplay:0004:0001">iOS 2.2+</span>
- <span class="ko-segment" data-segment-id="seg:list:preparetoplay:0004:0002">iPadOS 2.2+</span>
- <span class="ko-segment" data-segment-id="seg:list:preparetoplay:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:preparetoplay:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:preparetoplay:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:preparetoplay:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:preparetoplay:0004:0007">watchOS 3.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func prepareToPlay() -> Bool
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">시스템이 플레이어를 성공적으로 준비하면 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_0@@</a>이고, 그렇지 않으면 <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_1@@</a>입니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">이 메서드를 호출하면 오디오 버퍼를 미리 로드하고 재생에 필요한 오디오 하드웨어를 확보합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">이 메서드는 오디오 세션을 활성화하므로 즉시 재생이 필요하지 않을 때는 <a href="avaudiosession/setactive:error:.md">@@TOKEN_0@@</a>에 <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_1@@</a>를 전달합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0003">예를 들어 카테고리 옵션 <a href="avaudiosession/categoryoptions-swift.struct/duckothers.md">@@TOKEN_0@@</a> 사용 시, 이 메서드는 앱 외부의 오디오 볼륨을 낮춥니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">시스템은 <a href="avaudioplayer/play(">@@TOKEN_0@@</a>.md) 사용 시 이 메서드를 호출하지만, 미리 호출하면 <code>play()</code> 호출 시점과 소리 출력 시작 시점 사이의 지연이 줄어듭니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0001"><a href="avaudioplayer/stop(">@@TOKEN_0@@</a>.md)을 호출하거나 오디오 재생이 끝나도록 두면 이 설정이 해제됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avaudioplayer/play.md">func play() -&gt; Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">오디오를 비동기적으로 재생합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avaudioplayer/play(attime:">func play(atTime: TimeInterval) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">오디오 출력 장치의 타임라인에서 지정된 지점에서 시작하여 오디오를 비동기적으로 재생합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avaudioplayer/pause.md">func pause()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">오디오 재생을 일시 중지합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avaudioplayer/stop.md">func stop()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">재생을 중지하고, 시스템이 재생에 필요로 하는 설정을 해제합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avaudioplayer/isplaying.md">var isPlaying: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">플레이어가 현재 오디오를 재생 중인지 나타내는 부울 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudioplayer/preparetoplay(">View on Apple Developer</a>)*</span>

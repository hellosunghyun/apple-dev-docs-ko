---
source_path: "documentation/AVFAudio/avaudioplayer/volume.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudioplayer/volume"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:volume:0000:0001">volume</span>

<span class="ko-segment" data-segment-id="seg:paragraph:volume:0001:0001">**Framework**: AVFAudio **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:volume:0002:0001">다른 오디오 출력 대비 오디오 플레이어의 볼륨입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:volume:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:volume:0004:0001">iOS 2.2+</span>
- <span class="ko-segment" data-segment-id="seg:list:volume:0004:0002">iPadOS 2.2+</span>
- <span class="ko-segment" data-segment-id="seg:list:volume:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:volume:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:volume:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:volume:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:volume:0004:0007">watchOS 3.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var volume: Float { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 속성은 무음의 <code>0.0</code>부터 전체 볼륨의 <code>1.0</code>까지의 값을 지원합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avaupresetevent/presetdictionary.md">func setVolume(Float, fadeDuration: TimeInterval)</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">지정한 시간 동안 오디오 플레이어의 볼륨을 변경합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avaudioplayer/pan.md">var pan: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">오디오 플레이어의 스테레오 패닝 위치입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avaudioplayer/enablerate.md">var enableRate: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">오디오 플레이어의 재생 속도를 조정할 수 있는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avaudioplayer/rate.md">var rate: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">오디오 플레이어의 재생 속도입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avaudioplayer/numberofloops.md">var numberOfLoops: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">오디오가 반복 재생되는 횟수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudioplayer/volume">View on Apple Developer</a>*</span>

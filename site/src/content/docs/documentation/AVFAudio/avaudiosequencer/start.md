---
source_path: "documentation/AVFAudio/avaudiosequencer/start.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiosequencer/start"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:start:0000:0001">start()</span>

<span class="ko-segment" data-segment-id="seg:paragraph:start:0001:0001">**Framework**: AVFAudio **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:start:0002:0001">시퀀서의 플레이어를 시작합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:start:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:start:0004:0001">iOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:start:0004:0002">iPadOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:start:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:start:0004:0004">macOS 10.11+</span>
- <span class="ko-segment" data-segment-id="seg:list:start:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:start:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func start() throws
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">If you don’t call <a href="avaudiosequencer/preparetoplay(">@@TOKEN_0@@</a>.md), the framework calls it and then starts the player.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avaudiosequencer/preparetoplay.md">func prepareToPlay()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">모든 이벤트를 미리 재생(preroll)하여 시퀀스를 재생할 준비를 합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avaudiosequencer/stop.md">func stop()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">시퀀서의 플레이어를 정지합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiosequencer/start(">View on Apple Developer</a>)*</span>

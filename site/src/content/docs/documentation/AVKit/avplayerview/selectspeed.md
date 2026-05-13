---
source_path: "documentation/AVKit/avplayerview/selectspeed.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avkit/avplayerview/selectspeed"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:selectspeed:0000:0001">selectSpeed(_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:selectspeed:0001:0001">**Framework**: AVKit **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:selectspeed:0002:0001">Selects a specified playback speed.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:selectspeed:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:selectspeed:0004:0001">macOS 13.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func selectSpeed(_ speed: AVPlaybackSpeed)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 속성은 트랙의 마지막 이벤트 박자와 끝나는 음표를 페이드 아웃하거나 루프 지점을 마디 단위로 반올림하는 데 필요한 추가 시간을 더한 값을 반환합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>speed</code>: The playback speed to select.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001">[var speeds: [AVPlaybackSpeed]](avplayerview/speeds.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">A list of user-selectable playback speeds to show in the playback speed control.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avplayerview/selectedspeed.md">var selectedSpeed: AVPlaybackSpeed?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">풋 컨트롤러 사용 시 연속적인 값 스트림을 전송하는 이벤트 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avplaybackspeed.md">class AVPlaybackSpeed</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">포르타멘토 속도를 제어하는 이벤트 유형입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">데이터 입력 매개변수를 제어하는 이벤트 유형입니다.</span>

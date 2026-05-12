---
source_path: "documentation/AVFoundation/avplayer/playimmediately-atrate.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avplayer/playimmediately-atrate"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:playimmediatelyatrate:0000:0001">playImmediately(atRate:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:playimmediatelyatrate:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:playimmediatelyatrate:0002:0001">지정한 속도로 사용 가능한 미디어 데이터를 즉시 재생합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:playimmediatelyatrate:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:playimmediatelyatrate:0004:0001">iOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:playimmediatelyatrate:0004:0002">iPadOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:playimmediatelyatrate:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:playimmediatelyatrate:0004:0004">macOS 10.12+</span>
- <span class="ko-segment" data-segment-id="seg:list:playimmediatelyatrate:0004:0005">tvOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:playimmediatelyatrate:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:playimmediatelyatrate:0004:0007">watchOS 3.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
nonisolated
func playImmediately(atRate rate: Float)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 메서드는 원활한 재생을 보장하기 위해 버퍼링된 미디어가 충분한지와 관계없이 지정된 <code>rate</code>로 사용 가능한 미디어 데이터를 재생합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">재생 버퍼에 미디어 데이터가 존재하는 경우 이 메서드를 호출하면 플레이어의 재생 속도가 지정된 <code>rate</code>로 변경되고, <a href="avplayer/timecontrolstatus-swift.property.md">@@TOKEN_1@@</a>도 <a href="avplayer/timecontrolstatus-swift.enum/playing.md">@@TOKEN_2@@</a> 값으로 설정됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">플레이어에 재생을 시작할 수 있을 만큼 충분한 미디어 데이터가 버퍼링되어 있지 않으면, 플레이어는 재생 중 스톨이 발생한 것처럼 동작하지만 <a href="avplayeritem/playbackstallednotification.md">@@TOKEN_0@@</a>은 게시되지 않습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>rate</code>: 지정된 재생 속도입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avplayer/automaticallywaitstominimizestalling.md">var automaticallyWaitsToMinimizeStalling: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">버퍼링 정지를 최소화하기 위해 플레이어가 재생을 자동으로 지연해야 하는지를 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avplayer/reasonforwaitingtoplay.md">var reasonForWaitingToPlay: AVPlayer.WaitingReason?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">플레이어가 현재 재생을 시작하거나 재개하기 위해 기다리는 이유입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avplayer/waitingreason.md">AVPlayer.WaitingReason</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">플레이어가 재생을 시작하거나 재개할 때 기다리는 이유입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avplayer/timecontrolstatus-swift.property.md">var timeControlStatus: AVPlayer.TimeControlStatus</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">재생이 진행 중인지, 무기한 일시 정지 상태인지, 또는 네트워크 상태 개선을 기다리는지 나타내는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avplayer/timecontrolstatus-swift.enum.md">AVPlayer.TimeControlStatus</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">재생 제어 상태를 나타내는 상수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avplayer/playimmediately(atrate:">Apple Developer에서 보기</a>)*</span>

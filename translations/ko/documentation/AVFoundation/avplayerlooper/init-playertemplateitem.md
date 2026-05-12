---
source_path: "documentation/AVFoundation/avplayerlooper/init-playertemplateitem.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avplayerlooper/init-playertemplateitem"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initplayertemplateitem:0000:0001">init(player:templateItem:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initplayertemplateitem:0001:0001">**Framework**: AVFoundation **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initplayertemplateitem:0002:0001">플레이어 항목의 전체 기간을 연속으로 반복 재생하는 플레이어 루퍼를 생성합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initplayertemplateitem:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initplayertemplateitem:0004:0001">iOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initplayertemplateitem:0004:0002">iPadOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initplayertemplateitem:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:initplayertemplateitem:0004:0004">macOS 10.12+</span>
- <span class="ko-segment" data-segment-id="seg:list:initplayertemplateitem:0004:0005">tvOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initplayertemplateitem:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
convenience init(player: AVQueuePlayer, templateItem itemToLoop: AVPlayerItem)
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001"><code>AVPlayerLooper</code>의 새 인스턴스입니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">이 메서드를 사용하여 이 클래스의 인스턴스를 생성하는 것은 <a href="avplayerlooper/init(player:templateitem:timerange:">@@TOKEN_0@@</a>.md)를 호출하고 <code>timeRange</code> 매개변수에 <a href="https://developer.apple.com/documentation/CoreMedia/CMTimeRange/invalid">@@TOKEN_2@@</a> 값을 전달하는 것과 같습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>player</code>: 재생에 사용할 큐 플레이어입니다. 플레이어는 <code>nil</code>이면 안 됩니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0002"><code>itemToLoop</code>: 반복할 플레이어 항목으로, <code>nil</code>이면 안 됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avplayerlooper/init(player:templateitem:timerange:existingitemsordering:">init(player: AVQueuePlayer, templateItem: AVPlayerItem, timeRange: CMTimeRange, existingItemsOrdering: AVPlayerLooper.ItemOrdering)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">기존 큐 항목의 지정된 순서를 준수하면서 플레이어 항목의 전체 기간을 연속적으로 재생하는 플레이어 루퍼를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avplayerlooper/init(player:templateitem:timerange:">convenience init(player: AVQueuePlayer, templateItem: AVPlayerItem, timeRange: CMTimeRange)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">플레이어 항목의 지정된 시간 범위를 연속적으로 재생하는 플레이어 루퍼를 생성합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avplayerlooper/init(player:templateitem:">View on Apple Developer</a>)*</span>

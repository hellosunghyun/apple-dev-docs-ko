---
source_path: "documentation/AVFoundation/avqueueplayer/insert-after.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avqueueplayer/insert-after"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:insertafter:0000:0001">insert(_:after:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:insertafter:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:insertafter:0002:0001">큐에서 다른 플레이어 항목 뒤에 플레이어 항목을 삽입합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:insertafter:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:insertafter:0004:0001">iOS 4.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:insertafter:0004:0002">iPadOS 4.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:insertafter:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:insertafter:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:insertafter:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:insertafter:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:insertafter:0004:0007">watchOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
nonisolated
func insert(_ item: AVPlayerItem, after afterItem: AVPlayerItem?)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>item</code>: 큐에 삽입할 항목입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>afterItem</code>: 뒤따라야 할 큐의 플레이어 항목입니다. <code>nil</code>을 전달하면 항목을 큐의 끝에 추가합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001">[func items() -&gt; [AVPlayerItem]](avqueueplayer/items.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">현재 큐에 들어 있는 항목의 배열을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avqueueplayer/advancetonextitem.md">func advanceToNextItem()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">현재 항목의 재생을 종료하고 플레이어 큐에서 다음 항목의 재생을 시작합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avqueueplayer/caninsert(_:after:">func canInsert(AVPlayerItem, after: AVPlayerItem?) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">플레이어 큐에 플레이어 항목을 삽입할 수 있는지 여부를 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avqueueplayer/remove(_:">func remove(AVPlayerItem)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">지정한 플레이어 항목을 큐에서 제거합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avqueueplayer/removeallitems.md">func removeAllItems()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">큐에서 모든 플레이어 항목을 제거합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avqueueplayer/insert(_:after:">Apple Developer에서 보기</a>)*</span>

---
source_path: "documentation/AVFoundation/avplayeritemrenderedlegibleoutput/setdelegate-queue.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avplayeritemrenderedlegibleoutput/setdelegate-queue"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:setdelegatequeue:0000:0001">setDelegate(_:queue:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setdelegatequeue:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setdelegatequeue:0002:0001">이 출력의 delegate 객체와 해당 객체가 호출되는 큐를 설정합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setdelegatequeue:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:setdelegatequeue:0004:0001">iOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:setdelegatequeue:0004:0002">iPadOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:setdelegatequeue:0004:0003">Mac Catalyst 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:setdelegatequeue:0004:0004">macOS 15.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func setDelegate(_ delegate: (any AVPlayerItemRenderedLegibleOutputPushDelegate)?, queue delegateQueue: dispatch_queue_t?)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>delegate</code>: 이 출력의 delegate 객체입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>delegateQueue</code>: 시스템이 모든 delegate 메서드를 호출하는 dispatch queue입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avplayeritemrenderedlegibleoutput/delegate.md">var delegate: (any AVPlayerItemRenderedLegibleOutputPushDelegate)?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">이 출력의 delegate 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avplayeritemrenderedlegibleoutput/delegatequeue.md">var delegateQueue: dispatch_queue_t?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">출력이 delegate 객체를 호출하는 dispatch queue입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avplayeritemrenderedlegibleoutputpushdelegate.md">protocol AVPlayerItemRenderedLegibleOutputPushDelegate</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">렌더링된 legible output 객체에서 생성된 렌더링 픽셀 버퍼를 처리하는 delegate입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avplayeritemrenderedlegibleoutput/setdelegate(_:queue:">Apple Developer에서 보기</a>)*</span>

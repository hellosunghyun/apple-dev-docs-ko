---
source_path: "documentation/AVFoundation/avcontentkeysession/setdelegate-queue.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcontentkeysession/setdelegate-queue"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:setdelegatequeue:0000:0001">setDelegate(_:queue:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setdelegatequeue:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setdelegatequeue:0002:0001">세션의 delegate 객체와 delegate 메서드를 호출할 dispatch queue를 설정합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setdelegatequeue:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:setdelegatequeue:0004:0001">iOS 10.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:setdelegatequeue:0004:0002">iPadOS 10.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:setdelegatequeue:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:setdelegatequeue:0004:0004">macOS 10.12.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:setdelegatequeue:0004:0005">tvOS 10.2+</span>
- <span class="ko-segment" data-segment-id="seg:list:setdelegatequeue:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:setdelegatequeue:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func setDelegate(_ delegate: (any AVContentKeySessionDelegate)?, queue delegateQueue: dispatch_queue_t?)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>delegate</code>: <a href="avcontentkeysessiondelegate.md">@@TOKEN_1@@</a> 프로토콜을 준수하는 객체입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>delegateQueue</code>: 세션에서 delegate 객체를 호출할 때 사용하는 dispatch queue입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avcontentkeysession/delegate.md">var delegate: (any AVContentKeySessionDelegate)?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">콘텐츠 키 세션의 delegate 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcontentkeysession/delegatequeue.md">var delegateQueue: dispatch_queue_t?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">세션이 delegate 콜백을 호출할 때 사용하는 dispatch queue입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcontentkeysession/setdelegate(_:queue:">Apple Developer에서 보기</a>)*</span>

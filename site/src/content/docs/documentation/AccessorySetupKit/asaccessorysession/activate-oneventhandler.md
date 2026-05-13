---
source_path: "documentation/AccessorySetupKit/asaccessorysession/activate-oneventhandler.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accessorysetupkit/asaccessorysession/activate-oneventhandler"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:activateoneventhandler:0000:0001">activate(on:eventHandler:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:activateoneventhandler:0001:0001">**Framework**: AccessorySetupKit **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:activateoneventhandler:0002:0001">세션을 활성화하고 이벤트를 이벤트 핸들러로 전달하기 시작합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:activateoneventhandler:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:activateoneventhandler:0004:0001">iOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:activateoneventhandler:0004:0002">iPadOS 18.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func activate(on queue: dispatch_queue_t, eventHandler: @escaping (ASAccessoryEvent) -> Void)
```

## <span class="ko-segment" data-segment-id="seg:heading:mentions:0007:0001">Mentions</span>

- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0001"><a href="discovering-and-configuring-accessories.md">Discovering and configuring accessories</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>queue</code>: 세션이 이벤트를 <code>eventHandler</code>에 전달하는 데 사용하는 dispatch입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>eventHandler</code>: 세션에서 생성된 이벤트를 받는 클로저 또는 블록입니다. 이벤트 핸들러의 각 콜백은 <a href="asaccessoryevent.md">@@TOKEN_1@@</a>를 매개변수로 제공하며 반환값을 기대하지 않습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="asaccessorysession/invalidate.md">func invalidate()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">모든 작업을 중지하여 세션을 무효화합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/accessorysetupkit/asaccessorysession/activate(on:eventhandler:">View on Apple Developer</a>)*</span>

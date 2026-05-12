---
source_path: "documentation/ARKit/arskviewdelegate/view-willupdatefor.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arskviewdelegate/view-willupdatefor"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:viewwillupdatefor:0000:0001">view(_:willUpdate:for:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:viewwillupdatefor:0001:0001">**Framework**: ARKit **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:viewwillupdatefor:0002:0001">이 메서드는 delegate에 대해 SpriteKit 노드의 속성이 해당 앵커의 현재 상태와 일치하도록 업데이트될 예정임을 알립니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:viewwillupdatefor:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:viewwillupdatefor:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:viewwillupdatefor:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:viewwillupdatefor:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
optional func view(_ view: ARSKView, willUpdate node: SKNode, for anchor: ARAnchor)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">세션 구성에 따라 ARKit는 세션의 앵커를 자동으로 업데이트할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">뷰는 업데이트된 각 앵커에 대해 이 메서드를 한 번 호출합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>view</code>: 씬을 렌더링하는 <a href="arskview.md">@@TOKEN_1@@</a> 객체입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>node</code>: 업데이트된 SpriteKit 노드입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0003"><code>anchor</code>: 노드에 해당하는 AR 앵커입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="arskviewdelegate/view(_:nodefor:">func view(ARSKView, nodeFor: ARAnchor) -&gt; SKNode?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">새로 추가된 앵커에 해당하는 SpriteKit 노드를 delegate가 제공하도록 요청합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="arskviewdelegate/view(_:didadd:for:">func view(ARSKView, didAdd: SKNode, for: ARAnchor)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">새로운 AR 앵커에 해당하는 SpriteKit 노드가 씬에 추가되었음을 delegate에 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="arskviewdelegate/view(_:didupdate:for:">func view(ARSKView, didUpdate: SKNode, for: ARAnchor)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">SpriteKit 노드의 속성이 해당 앵커의 현재 상태와 일치하도록 업데이트되었음을 delegate에 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="arskviewdelegate/view(_:didremove:for:">func view(ARSKView, didRemove: SKNode, for: ARAnchor)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">AR 앵커에 해당하는 SpriteKit 노드가 씬에서 제거되었음을 delegate에 알립니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/arkit/arskviewdelegate/view(_:willupdate:for:">View on Apple Developer</a>)*</span>

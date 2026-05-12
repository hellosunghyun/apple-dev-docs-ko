---
source_path: "documentation/ARKit/arscnviewdelegate/renderer-didremovefor.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arscnviewdelegate/renderer-didremovefor"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:rendererdidremovefor:0000:0001">renderer(_:didRemove:for:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:rendererdidremovefor:0001:0001">**Framework**: ARKit **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:rendererdidremovefor:0002:0001">제거된 AR 앵커에 해당하는 SceneKit 노드가 씬에서 제거되었음을 델리게이트에 알립니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:rendererdidremovefor:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:rendererdidremovefor:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:rendererdidremovefor:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:rendererdidremovefor:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
optional func renderer(_ renderer: any SCNSceneRenderer, didRemove node: SCNNode, for anchor: ARAnchor)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">세션 구성에 따라 ARKit가 세션에서 앵커를 자동으로 제거할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">뷰는 제거된 앵커마다 이 메서드를 한 번 호출합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>renderer</code>: 씬을 렌더링하는 <a href="arscnview.md">@@TOKEN_1@@</a> 객체입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>node</code>: 제거된 SceneKit 노드입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0003"><code>anchor</code>: 노드에 해당하는 AR 앵커입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="arscnviewdelegate/renderer(_:nodefor:">func renderer(any SCNSceneRenderer, nodeFor: ARAnchor) -&gt; SCNNode?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">새로 추가된 앵커에 해당하는 SceneKit 노드를 델리게이트에서 제공하도록 요청합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="arscnviewdelegate/renderer(_:didadd:for:">func renderer(any SCNSceneRenderer, didAdd: SCNNode, for: ARAnchor)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">씬에 새 AR 앵커에 해당하는 SceneKit 노드가 추가되었음을 델리게이트에 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="arscnviewdelegate/renderer(_:willupdate:for:">func renderer(any SCNSceneRenderer, willUpdate: SCNNode, for: ARAnchor)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">SceneKit 노드의 속성이 해당 앵커의 현재 상태와 일치하도록 업데이트될 것임을 델리게이트에 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="arscnviewdelegate/renderer(_:didupdate:for:">func renderer(any SCNSceneRenderer, didUpdate: SCNNode, for: ARAnchor)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">SceneKit 노드의 속성이 해당 앵커의 현재 상태와 일치하도록 업데이트되었음을 델리게이트에 알립니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/arkit/arscnviewdelegate/renderer(_:didremove:for:">View on Apple Developer</a>)*</span>

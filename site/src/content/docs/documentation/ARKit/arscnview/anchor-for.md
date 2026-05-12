---
source_path: "documentation/ARKit/arscnview/anchor-for.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arscnview/anchor-for"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:anchorfor:0000:0001">anchor(for:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:anchorfor:0001:0001">**Framework**: ARKit **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:anchorfor:0002:0001">지정한 SceneKit 노드와 연결된 AR 앵커가 있으면 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:anchorfor:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:anchorfor:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:anchorfor:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:anchorfor:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func anchor(for node: SCNNode) -> ARAnchor?
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">노드를 추적하는 <a href="aranchor.md">@@TOKEN_0@@</a> 객체이며, 노드가 앵커와 연관되지 않았거나 뷰의 scene에 없으면 <code>nil</code>입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>node</code>: 뷰의 scene에 있는 SceneKit 노드입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="arscnview/node(for:">func node(for: ARAnchor) -&gt; SCNNode?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">지정한 AR 앵커와 연결된 SceneKit 노드가 있으면 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="arscnview/unprojectpoint(_:ontoplane:">func unprojectPoint(CGPoint, ontoPlane: simd_float4x4) -&gt; simd_float3?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">ARKit이 감지한 3D 월드 공간의 평면으로 2D 뷰 점을 사영한 결과를 반환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/arkit/arscnview/anchor(for:">View on Apple Developer</a>)*</span>

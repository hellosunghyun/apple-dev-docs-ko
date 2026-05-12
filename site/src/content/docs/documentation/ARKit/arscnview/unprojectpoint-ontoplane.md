---
source_path: "documentation/ARKit/arscnview/unprojectpoint-ontoplane.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arscnview/unprojectpoint-ontoplane"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:unprojectpointontoplane:0000:0001">unprojectPoint(_:ontoPlane:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:unprojectpointontoplane:0001:0001">**Framework**: ARKit **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:unprojectpointontoplane:0002:0001">ARKit에서 감지한 3D 월드 공간의 평면에 2D 뷰의 점을 투영한 결과를 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:unprojectpointontoplane:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:unprojectpointontoplane:0004:0001">iOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:unprojectpointontoplane:0004:0002">iPadOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:unprojectpointontoplane:0004:0003">Mac Catalyst 12.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
@MainActor
@nonobjc @preconcurrency func unprojectPoint(_ point: CGPoint, ontoPlane planeTransform: simd_float4x4) -> simd_float3?
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">지정한 2D 점에서 투영된 광선이 지정된 평면과 교차하는 월드 공간의 3D 점입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0002">광선이 평면과 교차하지 않으면 이 메서드는 <code>nil</code>을 반환합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>point</code>: 평면으로 투영할 뷰의 2D 좌표계 내 한 점입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>planeTransform</code>: 3D 월드 공간에서 평면(무한히 확장)의 위치와 방향을 지정하는 변환 행렬입니다. 이 평면은 이 변환이 정의하는 로컬 좌표 공간의 xz 평면입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="arscnview/anchor(for:">func anchor(for: SCNNode) -&gt; ARAnchor?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">지정된 SceneKit 노드와 연관된 AR 앵커를 반환합니다(있는 경우).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="arscnview/node(for:">func node(for: ARAnchor) -&gt; SCNNode?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">지정된 AR 앵커와 연관된 SceneKit 노드를 반환합니다(있는 경우).</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/arkit/arscnview/unprojectpoint(_:ontoplane:">Apple Developer에서 보기</a>)*</span>

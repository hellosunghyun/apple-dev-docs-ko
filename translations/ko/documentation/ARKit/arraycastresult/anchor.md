---
source_path: "documentation/ARKit/arraycastresult/anchor.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arraycastresult/anchor"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:anchor:0000:0001">anchor</span>

<span class="ko-segment" data-segment-id="seg:paragraph:anchor:0001:0001">**Framework**: ARKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:anchor:0002:0001">광선이 교차한 평면의 앵커입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:anchor:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:anchor:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:anchor:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:anchor:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var anchor: ARAnchor? { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">기존 평면 대상을 선택한 경우 ARKit는 해당 앵커를 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">예상 평면 대상을 선택한 경우에는 광선이 기존 평면과 교차할 때만 ARKit가 앵커를 제공합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="arraycastresult/worldtransform.md">var worldTransform: simd_float4x4</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">대상과 광선 교차점의 위치, 회전 및 스케일입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="arraycastresult/target.md">var target: ARRaycastQuery.Target</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">광선이 교차하는 표면의 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="arraycastquery/target-swift.enum.md">ARRaycastQuery.Target</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">Raycast에서 교차를 허용하는 표면의 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="arraycastresult/targetalignment.md">var targetAlignment: ARRaycastQuery.TargetAlignment</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">광선이 교차한 평면의 정렬입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="arraycastquery/targetalignment-swift.enum.md">ARRaycastQuery.TargetAlignment</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">중력에 대한 대상의 정렬을 나타내는 사양입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/arkit/arraycastresult/anchor">View on Apple Developer</a>*</span>

---
source_path: "documentation/ARKit/armeshclassification.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/armeshclassification"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:armeshclassification:0000:0001">ARMeshClassification</span>

<span class="ko-segment" data-segment-id="seg:paragraph:armeshclassification:0001:0001">**Framework**: ARKit **Kind**: enum</span>

<span class="ko-segment" data-segment-id="seg:paragraph:armeshclassification:0002:0001">ARKit가 식별할 수 있는 실제 세계 객체의 다양한 클래스를 나타내는 열거형입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:armeshclassification:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:armeshclassification:0004:0001">iOS 13.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:armeshclassification:0004:0002">iPadOS 13.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:armeshclassification:0004:0003">Mac Catalyst 13.4+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
enum ARMeshClassification
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001"><code>world-tracking</code> 구성에서 <a href="arworldtrackingconfiguration/scenereconstruction.md">@@TOKEN_1@@</a>를 활성화하면 ARKit은 물리적 환경의 형상을 함께 추정하는 여러 개의 메쉬 앵커(<a href="armeshanchor.md">@@TOKEN_2@@</a>)를 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0002">ARKit은 해당 실제 세계 모델에서 좌석, 창문, 탁자, 벽과 같은 특정 객체를 식별할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0003">ARKit은 메쉬의 <a href="armeshanchor/geometry.md">@@TOKEN_0@@</a> 속성에서 하나 이상의 <a href="armeshclassification.md">@@TOKEN_1@@</a> 인스턴스를 노출하여 해당 정보를 공유합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0001">메시 분류를 시연하는 샘플 앱은 <a href="visualizing-and-interacting-with-a-reconstructed-scene.md">@@TOKEN_0@@</a>에서 확인할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0010:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:options:0011:0001">Options</span>

- <span class="ko-segment" data-segment-id="seg:list:options:0012:0001"><a href="armeshclassification/ceiling.md">ARMeshClassification.ceiling</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:options:0013:0001">이 면은 실제 세계의 천장의 일부입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:options:0014:0001"><a href="armeshclassification/door.md">ARMeshClassification.door</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:options:0015:0001">이 면은 실제 세계의 문 일부입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:options:0016:0001"><a href="armeshclassification/floor.md">ARMeshClassification.floor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:options:0017:0001">이 면은 실제 세계의 바닥의 일부입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:options:0018:0001"><a href="armeshclassification/none.md">ARMeshClassification.none</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:options:0019:0001">ARKit이 분류할 수 없는 면입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:options:0020:0001"><a href="armeshclassification/seat.md">ARMeshClassification.seat</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:options:0021:0001">이 면은 실제 세계의 좌석 일부입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:options:0022:0001"><a href="armeshclassification/table.md">ARMeshClassification.table</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:options:0023:0001">이 면은 실제 세계의 탁자 일부입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:options:0024:0001"><a href="armeshclassification/wall.md">ARMeshClassification.wall</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:options:0025:0001">이 면은 실제 세계의 벽의 일부입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:options:0026:0001"><a href="armeshclassification/window.md">ARMeshClassification.window</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:options:0027:0001">이 면은 실제 세계의 창문 일부입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0028:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0029:0001"><a href="armeshclassification/init(rawvalue:">init?(rawValue: Int)</a>.md)</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0030:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0031:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0032:0001"><a href="../Swift/BitwiseCopyable.md">BitwiseCopyable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0032:0002"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0032:0003"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0032:0004"><a href="../Swift/RawRepresentable.md">RawRepresentable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0032:0005"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0032:0006"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0033:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="armeshgeometry/classification.md">var classification: ARGeometrySource?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">메시의 각 면에 대한 분류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="armeshgeometry/faces.md">var faces: ARGeometryElement</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">지오메트리 면의 정점 인덱스 버퍼를 포함하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="argeometryelement.md">class ARGeometryElement</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">예를 들어 면의 정점 인덱스와 같은 인덱스 데이터를 보관하는 컨테이너입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001"><a href="armeshgeometry/normals.md">var normals: ARGeometrySource</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">각 면의 바깥 방향을 정의하는 광선입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">*<a href="https://developer.apple.com/documentation/arkit/armeshclassification">View on Apple Developer</a>*</span>

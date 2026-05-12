---
source_path: "documentation/ARKit/arplaneextent.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arplaneextent"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:arplaneextent:0000:0001">ARPlaneExtent</span>

<span class="ko-segment" data-segment-id="seg:paragraph:arplaneextent:0001:0001">**Framework**: ARKit **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:arplaneextent:0002:0001">감지된 평면의 크기와 y축 회전입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:arplaneextent:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:arplaneextent:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:arplaneextent:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:arplaneextent:0004:0003">Mac Catalyst 16.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class ARPlaneExtent
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">평면 앵커(<a href="arplaneanchor.md">@@TOKEN_0@@</a>)는 이 타입의 <a href="arplaneanchor/planeextent.md">@@TOKEN_1@@</a> 속성을 사용해 y축에서의 크기와 방향을 설명합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0001">런타임에서 ARKit는 환경에서 평면 형태에 대한 프레임워크의 이해가 정교해짐에 따라 앵커의 너비와 높이를 지속적으로 갱신합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0010:0001">마찬가지로 세션이 실행되는 동안 프레임워크는 환경에서 평면의 직사각형 영역에 더 잘 맞도록 평면의 y축 회전을 업데이트할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0010:0002">iOS 15 및 이전 버전에서는 프레임워크가 해당 각도에 따라 평면 앵커를 회전시킵니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0010:0003">iOS 16에서는 프레임워크가 앵커를 자동으로 회전시키지 않으므로 해당 앵커의 변환 행렬은 변경되지 않습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0010:0004">대신 프레임워크는 앱의 평면 확장 기하 도형에 적용할 수 있는 <a href="arplaneextent/rotationonyaxis.md">@@TOKEN_0@@</a> 각도를 노출합니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:overview:0011:0001">❗ **중요**: 배포 대상이 iOS 16 미만인 앱이 iOS 16에서 실행될 때에는 이전 y축 회전 동작이 유지됩니다.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:size-and-rotate-an-entity-to-a-planes-extent:0012:0001">평면 크기에 맞춰 엔터티 크기 조정 및 회전</span>

<span class="ko-segment" data-segment-id="seg:paragraph:size-and-rotate-an-entity-to-a-planes-extent:0013:0001">다음 코드는 평면의 너비와 높이에 맞춘 RealityKit 엔터티를 정의합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:size-and-rotate-an-entity-to-a-planes-extent:0013:0002">도우미 함수는 변환의 <code>yaw</code> 값을 <a href="arplaneextent/rotationonyaxis.md">@@TOKEN_1@@</a>로 설정해 해당 확장의 제안된 y축 회전도 적용합니다.
``<code>swift
func createPlane(for planeAnchor: ARPlaneAnchor, material: Material) -&gt; ModelEntity {

    // Get the plane's extent.
    let extent = planeAnchor.planeExtent

    // Create a model entity sized to the plane's extent.
    let planeEntity = ModelEntity(mesh: .generatePlane (width: extent.width, depth: extent.height),
        materials: [material])

    // Orient the entity according to the extent's y-axis rotation.
    planeEntity.transform = Transform(pitch: 0, yaw: extent.rotationOnYAxis, roll: 0)

    // Center the entity on the plane.
    planeEntity.transform.translation = planeAnchor.center

    return planeEntity
}
</code>``</span>

```swift
func createPlane(for planeAnchor: ARPlaneAnchor, material: Material) -> ModelEntity {

    // Get the plane's extent.
    let extent = planeAnchor.planeExtent

    // Create a model entity sized to the plane's extent.
    let planeEntity = ModelEntity(mesh: .generatePlane (width: extent.width, depth: extent.height),
        materials: [material])

    // Orient the entity according to the extent's y-axis rotation.
    planeEntity.transform = Transform(pitch: 0, yaw: extent.rotationOnYAxis, roll: 0)

    // Center the entity on the plane.
    planeEntity.transform.translation = planeAnchor.center

    return planeEntity
}
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0015:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:inspecting-plane-size:0016:0001">평면 크기 검사</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-plane-size:0017:0001"><a href="arplaneextent/width.md">var width: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-plane-size:0018:0001">평면의 추정 너비입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-plane-size:0019:0001"><a href="arplaneextent/height.md">var height: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-plane-size:0020:0001">평면의 추정 높이입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:inspecting-plane-y-rotation:0021:0001">평면 y축 회전 검사</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-plane-y-rotation:0022:0001"><a href="arplaneextent/rotationonyaxis.md">var rotationOnYAxis: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-plane-y-rotation:0023:0001">평면의 y축 방향을 나타내는 라디안 값입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0024:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0025:0001"><a href="arplaneextent/init(coder:">init?(coder: NSCoder)</a>.md)</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0026:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0027:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0028:0001"><a href="../ObjectiveC/NSObject-swift.class.md">NSObject</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0029:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0001"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0002"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0003"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0004"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0005"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0006"><a href="../Foundation/NSCoding.md">NSCoding</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0007"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0008"><a href="../Foundation/NSSecureCoding.md">NSSecureCoding</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0009"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0010"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0031:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="arplaneanchor/center.md">var center: simd_float3</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">앵커 위치에 대한 평면의 중심점입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="arplaneanchor/planeextent.md">var planeExtent: ARPlaneExtent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">감지된 평면의 추정 너비, 길이 및 y축 회전입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="arplaneanchor/extent.md">var extent: simd_float3</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">감지된 평면의 추정 너비와 길이입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">*<a href="https://developer.apple.com/documentation/arkit/arplaneextent">View on Apple Developer</a>*</span>

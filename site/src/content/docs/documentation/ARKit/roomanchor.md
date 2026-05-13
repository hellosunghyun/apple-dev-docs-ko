---
source_path: "documentation/ARKit/roomanchor.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/roomanchor"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:roomanchor:0000:0001">RoomAnchor</span>

<span class="ko-segment" data-segment-id="seg:paragraph:roomanchor:0001:0001">**Framework**: ARKit **Kind**: struct</span>

<span class="ko-segment" data-segment-id="seg:paragraph:roomanchor:0002:0001">ARKit가 현재 추적 중인 방의 표현입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:roomanchor:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:roomanchor:0004:0001">visionOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
struct RoomAnchor
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001"><code>RoomAnchor</code> 구조체는 방의 기하 구조에 대한 대략적인 표현을 설명하며, 프레임워크가 해당 방과 연결하는 메시 앵커 및 평면 앵커의 식별자 배열을 포함합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0009:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:getting-information-about-a-room-anchor:0010:0001">방 앵커에 대한 정보 가져오기</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-information-about-a-room-anchor:0011:0001"><a href="roomanchor/geometry.md">var geometry: MeshAnchor.Geometry</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-information-about-a-room-anchor:0012:0001">앵커 좌표계에서 메시의 기하입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-information-about-a-room-anchor:0013:0001"><a href="roomanchor/id.md">var id: UUID</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-information-about-a-room-anchor:0014:0001">이 앵커의 고유 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-information-about-a-room-anchor:0015:0001"><a href="roomanchor/iscurrentroom.md">var isCurrentRoom: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-information-about-a-room-anchor:0016:0001">방이 사용자의 현재 위치인지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-information-about-a-room-anchor:0017:0001">[var meshAnchorIDs: [UUID]](roomanchor/meshanchorids.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-information-about-a-room-anchor:0018:0001">방과 연결된 메시 앵커의 ID 배열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-information-about-a-room-anchor:0019:0001"><a href="roomanchor/originfromanchortransform.md">var originFromAnchorTransform: simd_float4x4</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-information-about-a-room-anchor:0020:0001">방 앵커에서 원점 좌표계로의 변환입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-information-about-a-room-anchor:0021:0001">[var planeAnchorIDs: [UUID]](roomanchor/planeanchorids.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-information-about-a-room-anchor:0022:0001">방과 연결된 평면 앵커의 ID 배열입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:inspecting-a-room-anchor:0023:0001">방 앵커 검사</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-a-room-anchor:0024:0001"><a href="roomanchor/contains(_:">func contains(SIMD3&lt;Float&gt;) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-a-room-anchor:0025:0001">제공된 점이 방에 포함되는지 나타내는 Boolean 값을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-a-room-anchor:0026:0001">[func geometries(of: MeshAnchor.MeshClassification) -&gt; [MeshAnchor.Geometry]](roomanchor/geometries(of:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-a-room-anchor:0027:0001">지정된 분류의 분리된 메시 기하를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-a-room-anchor:0028:0001"><a href="roomanchor/description.md">var description: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-a-room-anchor:0029:0001">이 앵커의 텍스트 표현입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:instance-methods:0030:0001">인스턴스 메서드</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-methods:0031:0001">[func geometries(classifiedAs: SurfaceClassification) -&gt; [MeshAnchor.Geometry]](roomanchor/geometries(classifiedas:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-methods:0032:0001">주어진 표면 분류의 분리된 메시 기하를 가져옵니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0033:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0034:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0035:0001"><a href="anchor.md">Anchor</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0035:0002"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0035:0003"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0035:0004"><a href="../Swift/Identifiable.md">Identifiable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0035:0005"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0035:0006"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0036:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0037:0001"><a href="roomtrackingprovider.md">class RoomTrackingProvider</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0038:0001">사용자가 현재 있는 방에 대한 실시간 정보의 출처입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0039:0001"><a href="surfaceclassification.md">enum SurfaceClassification</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0040:0001">표면의 분류를 설명하는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0041:0001"><a href="../visionOS/building-local-experiences-with-room-tracking.md">Building local experiences with room tracking</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0042:0001">visionOS에서 room tracking을 사용해 물리적 공간과 맞춤형 상호 작용을 제공합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0044:0001">*<a href="https://developer.apple.com/documentation/arkit/roomanchor">View on Apple Developer</a>*</span>

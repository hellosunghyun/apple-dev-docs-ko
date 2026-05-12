---
source_path: "documentation/ARKit/planeanchor/classification-swiftenum.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/planeanchor/classification-swiftenum"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:planeanchorclassification:0000:0001">PlaneAnchor.Classification</span>

<span class="ko-segment" data-segment-id="seg:paragraph:planeanchorclassification:0001:0001">**Framework**: ARKit **Kind**: enum</span>

<span class="ko-segment" data-segment-id="seg:paragraph:planeanchorclassification:0002:0001">plane anchor가 가질 수 있는 객체 분류 유형입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:planeanchorclassification:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:planeanchorclassification:0004:0001">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
enum Classification
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:getting-known-classifications:0008:0001">알려진 분류 보기</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-known-classifications:0009:0001"><a href="planeanchor/classification-swift.enum/ceiling.md">PlaneAnchor.Classification.ceiling</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-known-classifications:0010:0001">천장입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-known-classifications:0011:0001"><a href="planeanchor/classification-swift.enum/door.md">PlaneAnchor.Classification.door</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-known-classifications:0012:0001">문입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-known-classifications:0013:0001"><a href="planeanchor/classification-swift.enum/floor.md">PlaneAnchor.Classification.floor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-known-classifications:0014:0001">바닥입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-known-classifications:0015:0001"><a href="planeanchor/classification-swift.enum/seat.md">PlaneAnchor.Classification.seat</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-known-classifications:0016:0001">좌석입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-known-classifications:0017:0001"><a href="planeanchor/classification-swift.enum/table.md">PlaneAnchor.Classification.table</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-known-classifications:0018:0001">테이블입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-known-classifications:0019:0001"><a href="planeanchor/classification-swift.enum/wall.md">PlaneAnchor.Classification.wall</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-known-classifications:0020:0001">벽입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-known-classifications:0021:0001"><a href="planeanchor/classification-swift.enum/window.md">PlaneAnchor.Classification.window</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-known-classifications:0022:0001">창문입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:getting-unknown-classifications:0023:0001">알 수 없는 분류 보기</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-unknown-classifications:0024:0001"><a href="planeanchor/classification-swift.enum/notavailable.md">PlaneAnchor.Classification.notAvailable</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-unknown-classifications:0025:0001">평면 분류를 현재 사용할 수 없습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-unknown-classifications:0026:0001"><a href="planeanchor/classification-swift.enum/undetermined.md">PlaneAnchor.Classification.undetermined</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-unknown-classifications:0027:0001">평면 분류가 아직 결정되지 않았습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-unknown-classifications:0028:0001"><a href="planeanchor/classification-swift.enum/unknown.md">PlaneAnchor.Classification.unknown</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-unknown-classifications:0029:0001">평면 분류가 알려진 클래스 중 하나가 아닙니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:instance-properties:0030:0001">인스턴스 속성</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0031:0001"><a href="planeanchor/classification-swift.enum/description.md">var description: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0032:0001">PlaneAnchor.Classification의 텍스트 표현입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0033:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0034:0001">준수 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0035:0001"><a href="../Swift/Copyable.md">Copyable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0035:0002"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0035:0003"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0035:0004"><a href="../Swift/Escapable.md">Escapable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0035:0005"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0035:0006"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0035:0007"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0036:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0037:0001"><a href="planeanchor/originfromanchortransform.md">var originFromAnchorTransform: simd_float4x4</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0038:0001">월드 공간에서 평면의 위치와 방향입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0039:0001"><a href="planeanchor/alignment-swift.property.md">var alignment: PlaneAnchor.Alignment</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0040:0001">중력에 대한 탐지된 평면의 일반적인 방향입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0041:0001"><a href="planeanchor/alignment-swift.enum.md">PlaneAnchor.Alignment</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0042:0001">중력에 대한 탐지된 평면의 가능한 일반적인 방향을 설명하는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0043:0001"><a href="planeanchor/classification-swift.property.md">var classification: PlaneAnchor.Classification</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0044:0001">이 평면의 분류를 가져옵니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0045:0001"><a href="planeanchor/description.md">var description: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0046:0001">이 앵커의 텍스트 표현입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0048:0001">*<a href="https://developer.apple.com/documentation/arkit/planeanchor/classification-swift.enum">View on Apple Developer</a>*</span>

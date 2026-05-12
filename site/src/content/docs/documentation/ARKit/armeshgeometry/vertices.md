---
source_path: "documentation/ARKit/armeshgeometry/vertices.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/armeshgeometry/vertices"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:vertices:0000:0001">vertices</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vertices:0001:0001">**Framework**: ARKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vertices:0002:0001">메시의 정점입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vertices:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:vertices:0004:0001">iOS 13.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:vertices:0004:0002">iPadOS 13.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:vertices:0004:0003">Mac Catalyst 13.4+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var vertices: ARGeometrySource { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001"><a href="argeometrysource/count.md">@@TOKEN_0@@</a>는 정점의 총 수와 같습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">각 정점이 <code>SIMD3&lt;Float&gt;</code> 타입이므로 <a href="argeometrysource/componentspervector.md">@@TOKEN_1@@</a>는 3입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">다음 코드는 특정 인덱스의 정점을 검색하는 예입니다.</span>

```swift
extension ARMeshGeometry { 
    func vertex(at index: UInt32) -> SIMD3<Float> {
        assert(vertices.format == MTLVertexFormat.float3, "Expected three floats (twelve bytes) per vertex.")
        let vertexPointer = vertices.buffer.contents().advanced(by: vertices.offset + (vertices.stride * Int(index)))
        let vertex = vertexPointer.assumingMemoryBound(to: SIMD3<Float>.self).pointee
        return vertex
    }
}
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="argeometrysource.md">class ARGeometrySource</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">버퍼 기반 배열의 메시 데이터입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/arkit/armeshgeometry/vertices">View on Apple Developer</a>*</span>

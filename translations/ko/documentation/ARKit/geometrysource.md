---
source_path: "documentation/ARKit/geometrysource.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/geometrysource"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:geometrysource:0000:0001">GeometrySource</span>

<span class="ko-segment" data-segment-id="seg:paragraph:geometrysource:0001:0001">**Framework**: ARKit **Kind**: struct</span>

<span class="ko-segment" data-segment-id="seg:paragraph:geometrysource:0002:0001">기하학적 벡터 데이터의 컨테이너입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:geometrysource:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:geometrysource:0004:0001">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
struct GeometrySource
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">메시 앵커 지오메트리(<a href="https://developer.apple.com/documentation/RealityKit/MeshDescriptor">@@TOKEN_0@@</a>)는 정점과 노멀과 같은 3D 데이터를 효율적인 배열 유사 형식으로 보유하기 위해 지오메트리 소스를 사용합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0002">Metal 버퍼가 데이터를 래핑하고 다른 속성이 해당 데이터를 해석하는 방법을 지정합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0001"><a href="https://docs-assets.developer.apple.com/published/9ec57b947ed7064da9005afeac529989/figure2-annotated.png">@@TOKEN_0@@</a>가 1보다 크면, 지오메트리 소스 배열의 요소 타입 자체가 시퀀스(쌍, 삼중 등)입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0010:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:inspecting-geometry-data:0011:0001">지오메트리 데이터 검사</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-geometry-data:0012:0001"><a href="geometrysource/buffer.md">var buffer: any MTLBuffer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-geometry-data:0013:0001">지오메트리 소스의 벡터별 데이터를 포함하는 Metal 버퍼입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-geometry-data:0014:0001"><a href="geometrysource/count.md">var count: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-geometry-data:0015:0001">지오메트리 소스의 벡터 수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-geometry-data:0016:0001"><a href="geometrysource/format.md">var format: MTLVertexFormat</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-geometry-data:0017:0001">지오메트리 소스 버퍼의 정점 형식입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-geometry-data:0018:0001"><a href="geometrysource/componentspervector.md">var componentsPerVector: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-geometry-data:0019:0001">지오메트리 소스의 각 벡터에 있는 스칼라 구성 요소 수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-geometry-data:0020:0001"><a href="geometrysource/offset.md">var offset: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-geometry-data:0021:0001">지오메트리 소스 버퍼 시작점에서 바이트 단위로 측정한 오프셋입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-geometry-data:0022:0001"><a href="geometrysource/stride.md">var stride: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-geometry-data:0023:0001">지오메트리 소스 버퍼에서 한 벡터와 다음 벡터 사이의 바이트 수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-geometry-data:0024:0001"><a href="geometrysource/description.md">var description: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-geometry-data:0025:0001">이 지오메트리 소스의 텍스트 표현입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0026:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0027:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0028:0001"><a href="../Swift/Copyable.md">Copyable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0028:0002"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0028:0003"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0028:0004"><a href="../Swift/Escapable.md">Escapable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0028:0005"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0028:0006"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0029:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="geometryelement.md">struct GeometryElement</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">선 또는 삼각형의 정점 인덱스를 위한 컨테이너입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">*<a href="https://developer.apple.com/documentation/arkit/geometrysource">View on Apple Developer</a>*</span>

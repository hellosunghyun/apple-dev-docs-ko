---
source_path: "documentation/ARKit/argeometryelement.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/argeometryelement"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:argeometryelement:0000:0001">ARGeometryElement</span>

<span class="ko-segment" data-segment-id="seg:paragraph:argeometryelement:0001:0001">**Framework**: ARKit **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:argeometryelement:0002:0001">면의 정점 인덱스와 같은 인덱스 데이터에 대한 컨테이너입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:argeometryelement:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:argeometryelement:0004:0001">iOS 13.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:argeometryelement:0004:0002">iPadOS 13.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:argeometryelement:0004:0003">Mac Catalyst 13.4+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class ARGeometryElement
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001"><a href="armeshgeometry.md">@@TOKEN_0@@</a>는 면 데이터를 저장하기 위해 geometry-elements를 사용합니다(자세한 내용은 <a href="armeshgeometry/faces.md">@@TOKEN_1@@</a> 참조).</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0002">각 면은 primitive type으로 정의됩니다. 예를 들어 <a href="argeometryprimitivetype/triangle.md">@@TOKEN_0@@</a>입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0001">예시로, 삼각형 형식의 면 두 개를 가진 <a href="armeshgeometry.md">@@TOKEN_0@@</a> 인스턴스는 다음 구성으로 표시됩니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:overview:0010:0001"><code>faces</code> <a href="argeometryelement/count.md">@@TOKEN_1@@</a> <code>= 2</code></span>
- <span class="ko-segment" data-segment-id="seg:list:overview:0010:0002"><code>faces</code> <a href="argeometryelement/indexcountperprimitive.md">@@TOKEN_1@@</a> <code>= 3</code> (because <a href="argeometryelement/primitivetype.md">@@TOKEN_3@@</a> is <a href="argeometryprimitivetype/triangle.md">@@TOKEN_4@@</a>)</span>
- <span class="ko-segment" data-segment-id="seg:list:overview:0010:0003"><code>faces</code> <a href="argeometryelement/bytesperindex.md">@@TOKEN_1@@</a> <code>= 4</code> (정점 인덱스가 <a href="https://developer.apple.com/documentation/Swift/UInt32">@@TOKEN_3@@</a> 유형이므로)</span>
- <span class="ko-segment" data-segment-id="seg:list:overview:0010:0004">버퍼의 총 바이트 크기 <code>=</code> <a href="argeometryelement/count.md">@@TOKEN_1@@</a> <code>*</code> <a href="argeometryelement/indexcountperprimitive.md">@@TOKEN_3@@</a> <code>*</code> <a href="argeometryelement/bytesperindex.md">@@TOKEN_5@@</a> (이 경우 <code>2 * 3 * 4 = 24</code> 바이트)</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0011:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:accessing-index-data:0012:0001">인덱스 데이터 액세스</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-index-data:0013:0001">[subscript(Int) -&gt; [Int32]](argeometryelement/subscript(_:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-index-data:0014:0001">지정한 하위 스크립트 인덱스의 기하 원시 요소를 나타내는 정점 인덱스 배열을 제공합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-index-data:0015:0001"><a href="argeometryelement/buffer.md">var buffer: any MTLBuffer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-index-data:0016:0001">기하 원시 데이터를 포함하는 Metal 버퍼입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:getting-index-information:0017:0001">인덱스 정보 가져오기</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-index-information:0018:0001"><a href="argeometryelement/bytesperindex.md">var bytesPerIndex: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-index-information:0019:0001">각 인덱스의 바이트 수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-index-information:0020:0001"><a href="argeometryelement/count.md">var count: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-index-information:0021:0001">버퍼의 primitive 수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-index-information:0022:0001"><a href="argeometryelement/indexcountperprimitive.md">var indexCountPerPrimitive: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-index-information:0023:0001">각 primitive의 인덱스 수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-index-information:0024:0001"><a href="argeometryelement/primitivetype.md">var primitiveType: ARGeometryPrimitiveType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-index-information:0025:0001">기하 데이터의 유형(삼각형 또는 선)입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-index-information:0026:0001"><a href="argeometryprimitivetype.md">enum ARGeometryPrimitiveType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-index-information:0027:0001">정점 간 연결의 종류입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0028:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0029:0001"><a href="argeometryelement/init(coder:">init?(coder: NSCoder)</a>.md)</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0030:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0031:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0032:0001"><a href="../ObjectiveC/NSObject-swift.class.md">NSObject</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0033:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0034:0001"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0034:0002"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0034:0003"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0034:0004"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0034:0005"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0034:0006"><a href="../Foundation/NSCoding.md">NSCoding</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0034:0007"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0034:0008"><a href="../Foundation/NSSecureCoding.md">NSSecureCoding</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0034:0009"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0034:0010"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0035:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="armeshgeometry/classification.md">var classification: ARGeometrySource?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">메시의 각 면에 대한 분류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="armeshclassification.md">enum ARMeshClassification</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">ARKit이 식별할 수 있는 실제 객체의 다양한 클래스에 대한 열거입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001"><a href="armeshgeometry/faces.md">var faces: ARGeometryElement</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">기하면의 정점 인덱스 버퍼를 포함하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0042:0001"><a href="armeshgeometry/normals.md">var normals: ARGeometrySource</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">각 면의 바깥 방향을 정의하는 광선입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0045:0001">*<a href="https://developer.apple.com/documentation/arkit/argeometryelement">View on Apple Developer</a>*</span>

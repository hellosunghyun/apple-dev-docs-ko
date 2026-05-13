---
source_path: "documentation/ARKit/roomanchor/geometries-of.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/roomanchor/geometries-of"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:geometriesof:0000:0001">geometries(of:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:geometriesof:0001:0001">**Framework**: ARKit **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:geometriesof:0002:0001">주어진 분류에 대한 분리된 메시 지오메트리를 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:geometriesof:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:geometriesof:0004:0001">visionOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func geometries(of classification: MeshAnchor.MeshClassification) -> [MeshAnchor.Geometry]
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">제공된 분류와 일치하는 <a href="meshanchor/geometry-swift.struct.md">@@TOKEN_0@@</a> 구조체 배열입니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001"><code>RoomAnchor.geometries(of:)</code>는 <a href="armeshclassification/floor.md">@@TOKEN_1@@</a> 및 <a href="armeshclassification/wall.md">@@TOKEN_2@@</a> 메시 분류를 지원합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>classification</code>: 검색할 메시 분류입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="roomanchor/contains(_:">func contains(SIMD3&lt;Float&gt;) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">방이 제공된 점을 포함하는지 나타내는 Boolean 값을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="roomanchor/description.md">var description: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">이 앵커의 텍스트 표현입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/arkit/roomanchor/geometries(of:">View on Apple Developer</a>)*</span>

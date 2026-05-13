---
source_path: "documentation/ARKit/roomanchor/contains.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/roomanchor/contains"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:contains:0000:0001">contains(_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:contains:0001:0001">**Framework**: ARKit **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:contains:0002:0001">주어진 포인트가 방에 포함되어 있는지를 나타내는 Boolean 값을 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:contains:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:contains:0004:0001">visionOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func contains(_ point: SIMD3<Float>) -> Bool
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">방이 포인트를 포함하면 <code>true</code>를 반환하고, 그렇지 않으면 <code>false</code>를 반환합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>point</code>: 검색할 포인트입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001">[func geometries(of: MeshAnchor.MeshClassification) -&gt; [MeshAnchor.Geometry]](roomanchor/geometries(of:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">주어진 분류의 분리된 메시 기하를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="roomanchor/description.md">var description: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">이 앵커의 텍스트 표현입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/arkit/roomanchor/contains(_:">Apple Developer에서 보기</a>)*</span>

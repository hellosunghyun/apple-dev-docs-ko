---
source_path: "documentation/ARKit/arreferenceobject/center.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arreferenceobject/center"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:center:0000:0001">center</span>

<span class="ko-segment" data-segment-id="seg:paragraph:center:0001:0001">**Framework**: ARKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:center:0002:0001">참조 객체의 공간 매핑 데이터의 중심점입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:center:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:center:0004:0001">iOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:center:0004:0002">iPadOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:center:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var center: simd_float3 { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001"><a href="arworldmap/extent.md">@@TOKEN_0@@</a>와 <a href="arworldmap/center.md">@@TOKEN_1@@</a> 속성은 함께 로컬 좌표계에서 참조 객체에 기록된 데이터의 바운딩 박스를 정의합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">해당 좌표계는 <code>extractReferenceObject(transform:center:extent:)</code>를 호출할 때 transform 매개변수로 정의되며, <a href="arreferenceobject/applyingtransform(_:">@@TOKEN_1@@</a>.md)로 다른 참조 객체를 생성해 수정할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="arreferenceobject/name.md">var name: String?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">참조 객체의 설명 이름입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="arreferenceobject/resourcegroupname.md">var resourceGroupName: String?</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0002"><a href="arreferenceobject/extent.md">var extent: simd_float3</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">참조 객체의 공간 매핑 데이터 크기입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="arreferenceobject/scale.md">var scale: simd_float3</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">참조 객체가 정의한 로컬 좌표 공간의 스케일 계수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/arkit/arreferenceobject/center">View on Apple Developer</a>*</span>

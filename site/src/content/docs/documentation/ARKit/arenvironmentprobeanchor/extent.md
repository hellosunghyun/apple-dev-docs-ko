---
source_path: "documentation/ARKit/arenvironmentprobeanchor/extent.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arenvironmentprobeanchor/extent"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:extent:0000:0001">extent</span>

<span class="ko-segment" data-segment-id="seg:paragraph:extent:0001:0001">**Framework**: ARKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:extent:0002:0001">텍스처를 포함하는 앵커 위치 주변 영역입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:extent:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:extent:0004:0001">iOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:extent:0004:0002">iPadOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:extent:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var extent: simd_float3 { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">Each 16-bit integer value in this array represents an index into the <a href="arplanegeometry/vertices-43kle.md">@@TOKEN_0@@</a> and <a href="arplanegeometry/texturecoordinates-p801.md">@@TOKEN_1@@</a> arrays.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">Each set of three indices forms a triangle, so the number of indices in the <a href="arplanegeometry/triangleindices-64epx.md">@@TOKEN_0@@</a> array is three times the <a href="arplanegeometry/trianglecount.md">@@TOKEN_1@@</a> value.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">*<a href="https://developer.apple.com/documentation/arkit/arenvironmentprobeanchor/extent">View on Apple Developer</a>*</span>

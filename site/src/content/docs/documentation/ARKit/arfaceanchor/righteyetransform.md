---
source_path: "documentation/ARKit/arfaceanchor/righteyetransform.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arfaceanchor/righteyetransform"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:righteyetransform:0000:0001">rightEyeTransform</span>

<span class="ko-segment" data-segment-id="seg:paragraph:righteyetransform:0001:0001">**Framework**: ARKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:righteyetransform:0002:0001">얼굴의 오른쪽 눈 위치와 방향을 나타내는 변환 행렬입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:righteyetransform:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:righteyetransform:0004:0001">iOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:righteyetransform:0004:0002">iPadOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:righteyetransform:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var rightEyeTransform: simd_float4x4 { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 행렬의 translation 구성 요소는 앵커의 <a href="aranchor/transform.md">@@TOKEN_0@@</a>으로 표시되는 위치를 기준으로 눈알 중심의 위치를 나타냅니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">양의 z축은 눈알 중심에서 동공 방향으로 향합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">Identify the anchors you want to react to by calling <a href="anchor/id.md">@@TOKEN_0@@</a>.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">눈은 z축을 기준으로 회전하지 않습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">!<a href="https://docs-assets.developer.apple.com/published/3a144016a0f37954454fcd4e6c20a9c3/media-3001544%402x.png">Diagram showing the coordinate axis origin defined by the rightEyeTransform, representing both the position and rotation of the eye relative to the face anchor.</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="arfaceanchor/lefteyetransform.md">var leftEyeTransform: simd_float4x4</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">얼굴의 왼쪽 눈 위치와 방향을 나타내는 변환 행렬입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="arfaceanchor/lookatpoint.md">var lookAtPoint: simd_float3</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">얼굴 좌표 공간에서 얼굴의 시선 방향을 추정하는 위치입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/arkit/arfaceanchor/righteyetransform">View on Apple Developer</a>*</span>

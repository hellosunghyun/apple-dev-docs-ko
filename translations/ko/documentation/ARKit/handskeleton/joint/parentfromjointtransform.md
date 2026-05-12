---
source_path: "documentation/ARKit/handskeleton/joint/parentfromjointtransform.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/handskeleton/joint/parentfromjointtransform"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:parentfromjointtransform:0000:0001">parentFromJointTransform</span>

<span class="ko-segment" data-segment-id="seg:paragraph:parentfromjointtransform:0001:0001">**Framework**: ARKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:parentfromjointtransform:0002:0001">관절에서 부모 관절의 좌표계로의 변환입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:parentfromjointtransform:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:parentfromjointtransform:0004:0001">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var parentFromJointTransform: simd_float4x4 { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">루트 관절의 <a href="handskeleton/joint/parentfromjointtransform.md">@@TOKEN_0@@</a>은 항등 행렬입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">추가 참조</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="handskeleton/joint/anchorfromjointtransform.md">var anchorFromJointTransform: simd_float4x4</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">이 관절의 스켈레톤 기본 관절에 대한 위치와 방향입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="handskeleton/joint/istracked.md">var isTracked: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">ARKit이 손 관절을 추적하는지 나타내는 부울 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/arkit/handskeleton/joint/parentfromjointtransform">View on Apple Developer</a>*</span>

---
source_path: "documentation/ARKit/arskeleton3d/jointlocaltransforms-66gbm.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arskeleton3d/jointlocaltransforms-66gbm"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:jointlocaltransforms:0000:0001">jointLocalTransforms</span>

<span class="ko-segment" data-segment-id="seg:paragraph:jointlocaltransforms:0001:0001">**Framework**: ARKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:jointlocaltransforms:0002:0001">각 관절의 로컬 공간 변환입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:jointlocaltransforms:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:jointlocaltransforms:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:jointlocaltransforms:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:jointlocaltransforms:0004:0003">Mac Catalyst 13.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
@nonobjc
var jointLocalTransforms: [simd_float4x4] { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">로컬 공간은 관절이 부모 관절을 기준으로 갖는 상대 위치를 의미합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001">[var jointModelTransforms: [simd_float4x4]](arskeleton3d/jointmodeltransforms-i6yu.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">각 관절에 대한 모델 공간 변환입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="arskeleton3d/localtransform(for:">func localTransform(for: ARSkeleton.JointName) -&gt; simd_float4x4?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">주어진 이름의 관절에 대한 로컬 변환을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="arskeleton3d/modeltransform(for:">func modelTransform(for: ARSkeleton.JointName) -&gt; simd_float4x4?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">주어진 이름의 관절에 대한 모델 변환을 반환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/arkit/arskeleton3d/jointlocaltransforms-66gbm">View on Apple Developer</a>*</span>

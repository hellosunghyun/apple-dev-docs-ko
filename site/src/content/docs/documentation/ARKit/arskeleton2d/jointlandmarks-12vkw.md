---
source_path: "documentation/ARKit/arskeleton2d/jointlandmarks-12vkw.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arskeleton2d/jointlandmarks-12vkw"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:jointlandmarks:0000:0001">jointLandmarks</span>

<span class="ko-segment" data-segment-id="seg:paragraph:jointlandmarks:0001:0001">**Framework**: ARKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:jointlandmarks:0002:0001">정규화된 좌표의 조인트 랜드마크입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:jointlandmarks:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:jointlandmarks:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:jointlandmarks:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:jointlandmarks:0004:0003">Mac Catalyst 13.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
@nonobjc
var jointLandmarks: [simd_float2] { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">This property returns <code>nil</code> if you’re not encoding.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="arskeleton2d/landmark(for:">func landmark(for: ARSkeleton.JointName) -&gt; simd_float2?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">지정된 이름을 가진 조인트의 위치를 반환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">*<a href="https://developer.apple.com/documentation/arkit/arskeleton2d/jointlandmarks-12vkw">View on Apple Developer</a>*</span>

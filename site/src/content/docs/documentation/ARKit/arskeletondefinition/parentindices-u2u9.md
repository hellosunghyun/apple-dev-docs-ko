---
source_path: "documentation/ARKit/arskeletondefinition/parentindices-u2u9.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arskeletondefinition/parentindices-u2u9"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:parentindices:0000:0001">parentIndices</span>

<span class="ko-segment" data-segment-id="seg:paragraph:parentindices:0001:0001">**Framework**: ARKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:parentindices:0002:0001">각 관절의 부모 인덱스입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:parentindices:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:parentindices:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:parentindices:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:parentindices:0004:0003">Mac Catalyst 13.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
@nonobjc
var parentIndices: [Int] { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 속성은 관절 간의 계층적 종속성을 식별하는 데 사용될 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">모든 관절과 해당 부모 관절에 대해 선을 그리면 기본 골격을 시각화할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">부모가 없는 관절은 루트 관절로 표시됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0004">루트 관절의 부모 인덱스는 -1입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001">[var jointNames: [String]](arskeletondefinition/jointnames.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">고유한 관절 이름의 컬렉션입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="arskeletondefinition/jointcount.md">var jointCount: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">스켈레톤의 총 관절 수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="arskeletondefinition/index(for:">func index(for: ARSkeleton.JointName) -&gt; Int</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">지정한 관절 식별자의 인덱스를 반환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/arkit/arskeletondefinition/parentindices-u2u9">View on Apple Developer</a>*</span>

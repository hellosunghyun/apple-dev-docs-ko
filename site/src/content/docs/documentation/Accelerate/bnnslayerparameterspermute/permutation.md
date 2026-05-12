---
source_path: "documentation/Accelerate/bnnslayerparameterspermute/permutation.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnslayerparameterspermute/permutation"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:permutation:0000:0001">permutation</span>

<span class="ko-segment" data-segment-id="seg:paragraph:permutation:0001:0001">**Framework**: Accelerate **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:permutation:0002:0001">순열을 정의하는 튜플입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:permutation:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:permutation:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:permutation:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:permutation:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:permutation:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:permutation:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:permutation:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:permutation:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var permutation: (Int, Int, Int, Int, Int, Int, Int, Int)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">순열 배열을 사용해 출력 축에 해당하는 입력 축 소스를 지정합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">예를 들어, <a href="bnnsdatalayoutimagechw.md">@@TOKEN_0@@</a> 텐서에 순열 배열 [2,1,0]을 적용하면 축이 역전됩니다. 즉, 출력 축 0은 입력 축 2, 출력 축 1은 입력 축 1, 출력 축 2는 입력 축 0입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">관련 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnnslayerparameterspermute/i_desc.md">var i_desc: BNNSNDArrayDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">입력의 디스크립터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnnslayerparameterspermute/o_desc.md">var o_desc: BNNSNDArrayDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">출력의 디스크립터입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnslayerparameterspermute/permutation">View on Apple Developer</a>*</span>

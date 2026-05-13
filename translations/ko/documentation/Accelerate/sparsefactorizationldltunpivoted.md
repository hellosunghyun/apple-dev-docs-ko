---
source_path: "documentation/Accelerate/sparsefactorizationldltunpivoted.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/sparsefactorizationldltunpivoted"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sparsefactorizationldltunpivoted:0000:0001">SparseFactorizationLDLTUnpivoted</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsefactorizationldltunpivoted:0001:0001">**Framework**: Accelerate **Kind**: var</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsefactorizationldltunpivoted:0002:0001">A constant that represents Cholesky-like *LDLᵀ* factorization with only one-by-one pivots and no pivoting.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsefactorizationldltunpivoted:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:sparsefactorizationldltunpivoted:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsefactorizationldltunpivoted:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsefactorizationldltunpivoted:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsefactorizationldltunpivoted:0004:0004">macOS 10.13+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsefactorizationldltunpivoted:0004:0005">tvOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsefactorizationldltunpivoted:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsefactorizationldltunpivoted:0004:0007">watchOS 4.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var SparseFactorizationLDLTUnpivoted: SparseFactorization_t { get }
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="sparsefactorizationcholesky.md">var SparseFactorizationCholesky: SparseFactorization_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">A constant that represents Cholesky (*LLᵀ*) factorization.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="sparsefactorizationldlt.md">var SparseFactorizationLDLT: SparseFactorization_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">A constant that represents the default *LDLᵀ* factorization.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="sparsefactorizationldltsbk.md">var SparseFactorizationLDLTSBK: SparseFactorization_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">A constant that represents *LDLᵀ* factorization with Supernode-Bunch-Kaufman and static pivoting.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="sparsefactorizationldlttpp.md">var SparseFactorizationLDLTTPP: SparseFactorization_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">값 집합에서 인덱스를 선택하는 객체를 생성합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/accelerate/sparsefactorizationldltunpivoted">View on Apple Developer</a>*</span>

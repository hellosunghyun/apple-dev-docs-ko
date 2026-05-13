---
source_path: "documentation/Accelerate/sparsesubfactorsr.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/sparsesubfactorsr"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sparsesubfactorsr:0000:0001">SparseSubfactorSr</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsesubfactorsr:0001:0001">**Framework**: Accelerate **Kind**: var</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsesubfactorsr:0002:0001">Types of sub-factor object.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsesubfactorsr:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:sparsesubfactorsr:0004:0001">iOS 18.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsesubfactorsr:0004:0002">iPadOS 18.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsesubfactorsr:0004:0003">Mac Catalyst 18.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsesubfactorsr:0004:0004">macOS 15.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsesubfactorsr:0004:0005">tvOS 18.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsesubfactorsr:0004:0006">visionOS 2.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsesubfactorsr:0004:0007">watchOS 11.5+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var SparseSubfactorSr: SparseSubfactor_t { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

- <span class="ko-segment" data-segment-id="seg:list:discussion:0008:0001">**<code>SparseSubfactorInvalid</code>**: Invalid subfactor (requested type not compatible with supplied factorization or already destroyed).</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0008:0002">**<code>SparseSubfactorP</code>**: Permutation subfactor, valid for all factorization types. (this is the row permutation for LU factorization)</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0008:0003">**<code>SparseSubfactorS</code>**: Diagonal scaling subfactor, valid for Cholesky and LDL^T only.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0008:0004">**<code>SparseSubfactorL</code>**: L factor subfactor, valid for Cholesky and LDL^T only.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0008:0005">**<code>SparseSubfactorD</code>**: D factor subfactor, valid for LDL^T only.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0008:0006">**<code>SparseSubfactorPLPS</code>**: Half-solve subfactor, valid for Cholesky and LDL^T only. Corresponds to PLP’ on forward (non-transpose) solve, and corresponds to PLDP’ on backward (transpose) solve (D=I for Chokesky).</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0008:0007">**<code>SparseSubfactorQ</code>**: Q factor subfactor, valid for QR only. Column permutation, valid for LU only.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0008:0008">**<code>SparseSubfactorR</code>**: R factor subfactor, valid for QR and CholeskyAtA only.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0008:0009">**<code>SparseSubfactorRP</code>**: Half-solve subfactor, valid for QR and CholeskyAtA only.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0008:0010">**<code>SparseSubfactorSr</code>**: Diagonal row scaling subfactor, valid for LU only.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0008:0011">**<code>SparseSubfactorSc</code>**: Diagonal column scaling subfactor, valid for LU only.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="sparsesubfactorinvalid.md">var SparseSubfactorInvalid: SparseSubfactor_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">플레이어 뷰 컨트롤러가 곧 전체 화면 표시를 시작할 때 delegate에 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="sparsesubfactorp.md">var SparseSubfactorP: SparseSubfactor_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">A permutation subfactor that’s valid for all factorization types.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="sparsesubfactors.md">var SparseSubfactorS: SparseSubfactor_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">A diagonal scaling subfactor that’s valid for Cholesky and *LDLᵀ* only.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="sparsesubfactorl.md">var SparseSubfactorL: SparseSubfactor_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">An *L* factor subfactor that’s valid for Cholesky and *LDLᵀ* only.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="sparsesubfactord.md">var SparseSubfactorD: SparseSubfactor_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">A *D* factor subfactor that’s valid for *LDLᵀ*<code> </code>only.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="sparsesubfactorplps.md">var SparseSubfactorPLPS: SparseSubfactor_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">A half-solve subfactor that’s valid for Cholesky and *LDLᵀ* only.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="sparsesubfactorq.md">var SparseSubfactorQ: SparseSubfactor_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">A *Q* factor subfactor that’s valid for QR only.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="sparsesubfactorr.md">var SparseSubfactorR: SparseSubfactor_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">An *R* factor subfactor that’s valid for QR and Cholesky *AᵀA* only.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="sparsesubfactorrp.md">var SparseSubfactorRP: SparseSubfactor_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">고정 위치 재생 컨트롤이 표시될 때 가려지지 않는 영역을 나타내는 레이아웃 가이드입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="sparsesubfactorsc.md">var SparseSubfactorSc: SparseSubfactor_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">시스템 제공 정보 및 설정 패널과 함께 클라이언트별 콘텐츠와 컨트롤을 제공하는 뷰 컨트롤러입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">*<a href="https://developer.apple.com/documentation/accelerate/sparsesubfactorsr">View on Apple Developer</a>*</span>

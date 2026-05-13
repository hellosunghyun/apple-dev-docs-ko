---
source_path: "documentation/Accelerate/sparsesubfactors.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/sparsesubfactors"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sparsesubfactors:0000:0001">SparseSubfactorS</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsesubfactors:0001:0001">**Framework**: Accelerate **Kind**: var</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsesubfactors:0002:0001">A diagonal scaling subfactor that’s valid for Cholesky and *LDLᵀ* only.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsesubfactors:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:sparsesubfactors:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsesubfactors:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsesubfactors:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsesubfactors:0004:0004">macOS 10.13+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsesubfactors:0004:0005">tvOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsesubfactors:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsesubfactors:0004:0007">watchOS 4.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var SparseSubfactorS: SparseSubfactor_t { get }
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="sparsesubfactorinvalid.md">var SparseSubfactorInvalid: SparseSubfactor_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">An invalid subfactor that indicates the requested type is incompatible with the supplied factorization or the system has destroyed it.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="sparsesubfactorp.md">var SparseSubfactorP: SparseSubfactor_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">A permutation subfactor that’s valid for all factorization types.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="sparsesubfactorl.md">var SparseSubfactorL: SparseSubfactor_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">An *L* factor subfactor that’s valid for Cholesky and *LDLᵀ* only.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="sparsesubfactord.md">var SparseSubfactorD: SparseSubfactor_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">A *D* factor subfactor that’s valid for *LDLᵀ*<code> </code>only.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="sparsesubfactorplps.md">var SparseSubfactorPLPS: SparseSubfactor_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">A half-solve subfactor that’s valid for Cholesky and *LDLᵀ* only.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="sparsesubfactorq.md">var SparseSubfactorQ: SparseSubfactor_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">A *Q* factor subfactor that’s valid for QR only.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="sparsesubfactorr.md">var SparseSubfactorR: SparseSubfactor_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">An *R* factor subfactor that’s valid for QR and Cholesky *AᵀA* only.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="sparsesubfactorrp.md">var SparseSubfactorRP: SparseSubfactor_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">A half-solve subfactor that’s valid for QR and Cholesky *AᵀA* only.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="sparsesubfactorsc.md">var SparseSubfactorSc: SparseSubfactor_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">입력의 요소별 floor division을 계산하는 연산입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="sparsesubfactorsr.md">var SparseSubfactorSr: SparseSubfactor_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">입력의 요소별 truncated division을 계산하는 연산입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">*<a href="https://developer.apple.com/documentation/accelerate/sparsesubfactors">View on Apple Developer</a>*</span>

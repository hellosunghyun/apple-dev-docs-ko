---
source_path: "documentation/Accelerate/sparsesubfactorr.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/sparsesubfactorr"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sparsesubfactorr:0000:0001">SparseSubfactorR</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsesubfactorr:0001:0001">**Framework**: Accelerate **Kind**: var</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsesubfactorr:0002:0001">*R* 하위 인수는 QR 및 Cholesky *AᵀA*에서만 유효합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsesubfactorr:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:sparsesubfactorr:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsesubfactorr:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsesubfactorr:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsesubfactorr:0004:0004">macOS 10.13+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsesubfactorr:0004:0005">tvOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsesubfactorr:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsesubfactorr:0004:0007">watchOS 4.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var SparseSubfactorR: SparseSubfactor_t { get }
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="sparsesubfactorinvalid.md">var SparseSubfactorInvalid: SparseSubfactor_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">요청한 유형이 제공된 인수분해와 호환되지 않거나 시스템에서 파기된 경우를 나타내는 유효하지 않은 하위 인수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="sparsesubfactorp.md">var SparseSubfactorP: SparseSubfactor_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">모든 인수분해 유형에서 유효한 순열 하위 인수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="sparsesubfactors.md">var SparseSubfactorS: SparseSubfactor_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">대각 스케일링 하위 인수는 Cholesky와 *LDLᵀ*에서만 유효합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="sparsesubfactorl.md">var SparseSubfactorL: SparseSubfactor_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*L* 하위 인수는 Cholesky와 *LDLᵀ*에서만 유효합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="sparsesubfactord.md">var SparseSubfactorD: SparseSubfactor_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*D*<code> </code>하위 인수는 *LDLᵀ*에서만 유효합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="sparsesubfactorplps.md">var SparseSubfactorPLPS: SparseSubfactor_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">half-solve 하위 인수는 Cholesky 및 *LDLᵀ*에서만 유효합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="sparsesubfactorq.md">var SparseSubfactorQ: SparseSubfactor_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*Q* 하위 인수는 QR에서만 유효합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="sparsesubfactorrp.md">var SparseSubfactorRP: SparseSubfactor_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">half-solve 하위 인수는 QR 및 Cholesky *AᵀA*에서만 유효합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="sparsesubfactorsc.md">var SparseSubfactorSc: SparseSubfactor_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">하위 인수 객체의 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="sparsesubfactorsr.md">var SparseSubfactorSr: SparseSubfactor_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">하위 인수 객체의 유형입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">*<a href="https://developer.apple.com/documentation/accelerate/sparsesubfactorr">View on Apple Developer</a>*</span>

---
source_path: "documentation/Accelerate/sparsegettranspose-7dx1i.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/sparsegettranspose-7dx1i"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sparsegettranspose:0000:0001">SparseGetTranspose(_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsegettranspose:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsegettranspose:0002:0001">Returns a transposed copy of the specified matrix of complex float values.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsegettranspose:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:sparsegettranspose:0004:0001">iOS 18.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsegettranspose:0004:0002">iPadOS 18.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsegettranspose:0004:0003">Mac Catalyst 18.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsegettranspose:0004:0004">macOS 15.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsegettranspose:0004:0005">tvOS 18.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsegettranspose:0004:0006">visionOS 2.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsegettranspose:0004:0007">watchOS 11.5+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func SparseGetTranspose(_ Matrix: SparseMatrix_Complex_Float) -> SparseMatrix_Complex_Float
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">A voice for the specified identifier if the identifier is valid and the voice is available on the device; otherwise, <code>nil</code>.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">Note that the underlying storage is *not* reference counted, so users must ensure the original matrix (or at least its underlying storage) is not destroyed before they are finished with the matrix returned by this routine.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>Matrix</code>: The matrix to transpose.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avspeechsynthesisvoice/speechvoices.md">func setIsNowPlayingCandidate(Bool) throws</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">Returns a transposed, reference-counted copy of a <code>SparseOpaqueFactorization_Complex_Float</code>.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="sparsegettranspose(_:">func SparseGetTranspose(SparseOpaqueSubfactor_Complex_Float) -&gt; SparseOpaqueSubfactor_Complex_Float</a>-2fuzo.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">Returns a transposed, reference-counted copy of a <code>SparseOpaqueSubfactor_Complex_Float</code>.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="sparsegettranspose(_:">func SparseGetTranspose(SparseOpaqueSubfactor_Complex_Double) -&gt; SparseOpaqueSubfactor_Complex_Double</a>-4nr8u.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">Returns a transposed, reference-counted copy of a <code>SparseOpaqueSubfactor_Complex_Double</code>.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="sparsegettranspose(_:">func SparseGetTranspose(SparseMatrix_Complex_Double) -&gt; SparseMatrix_Complex_Double</a>-9olfr.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">Returns a transposed copy of the specified matrix of complex double values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="sparsegettranspose(_:">func SparseGetTranspose(SparseOpaqueFactorization_Complex_Double) -&gt; SparseOpaqueFactorization_Complex_Double</a>-d0ny.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">대형 챔버 환경의 음향 특성을 나타내는 리버브 프리셋입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">대성당 환경의 음향 특성을 나타내는 리버브 프리셋입니다.</span>

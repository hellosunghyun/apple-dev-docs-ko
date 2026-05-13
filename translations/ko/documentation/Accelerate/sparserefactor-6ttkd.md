---
source_path: "documentation/Accelerate/sparserefactor-6ttkd.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/sparserefactor-6ttkd"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sparserefactor:0000:0001">SparseRefactor(_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparserefactor:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparserefactor:0002:0001">Computes a factorization of the specified double-precision matrix using an existing factorization’s storage and specified options.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparserefactor:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:sparserefactor:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparserefactor:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparserefactor:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparserefactor:0004:0004">macOS 10.13+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparserefactor:0004:0005">tvOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparserefactor:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparserefactor:0004:0007">watchOS 4.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func SparseRefactor(_ Matrix: SparseMatrix_Double, _ Factorization: UnsafeMutablePointer<SparseOpaqueFactorization_Double>, _ nfoptions: SparseNumericFactorOptions)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 UTI의 값은 <code>public.heif</code>입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">이 형식의 파일은 <code>.heif</code> 확장자를 가집니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">This function provides behavior similar to <a href="sparsefactor(_:_:_:_:_:">@@TOKEN_0@@</a>-68hki.md) by reusing explicit storage that you supply to <a href="sparsefactor(_:_:_:_:_:">@@TOKEN_1@@</a>-68hki.md) as the argument <code>factorStorage</code>.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">However, in addition to providing a simplified call sequence, this call can also reuse any additional storage that you allocate to accommodate delayed pivots.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">The following figure shows two systems of equations where the coefficient matrix is sparse:</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">![A mathematical equation that has two stacked sets of three simultaneous equations on the left.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0002">Each equation has three unknowns.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0003">The same sets of simultaneous equations appear on the right as two matrix equations, A x equals B.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0004">Each matrix equation consists of a three-by-three matrix multiplied by a three-element column matrix that equals a three-element column matrix.](https://docs-assets.developer.apple.com/published/7183115249663e3ee5beedf41262d86d/media-3703913%402x.png)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0001">The following code solves these two systems with refactoring.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0002">After factorizing and solving for the coefficient matrix *A0*, the code refactors and solves for matrix *A1*.</span>

```swift
/// Define the sparsity structure of matrices `A0` and `A1`.
let rowIndices: [Int32] =    [ 0, 1, 1, 2]
let columnIndices: [Int32] = [ 2, 0, 2, 1]

/// Create the single-precision coefficient matrix _A0_.
let a0Values: [Double] = [10, 20, 5, 50]
let A0 = SparseConvertFromCoordinate(3, 3,
                                     4, 1,
                                     SparseAttributes_t(),
                                     rowIndices, columnIndices,
                                     a0Values)

/// Factorize _A0_.
var factorization = SparseFactor(SparseFactorizationQR, A0)

/// Solve _A0 · x = b0_ in place.
var b0Values: [Double] = [30, 35, 100]
b0Values.withUnsafeMutableBufferPointer { bPtr in
    let xb = DenseVector_Double(count: 3,
                                data: bPtr.baseAddress!)
    
    SparseSolve(factorization, xb)
}

/// Create the double-precision coefficient matrix _A1_.
let a1Values: [Double] = [5, 10, 2.5, 25]
let A1 = SparseConvertFromCoordinate(3, 3,
                                     4, 1,
                                     SparseAttributes_t(),
                                     rowIndices, columnIndices,
                                     a1Values)

/// Factorize _A1_ into the existing factorization.
let numericFactorOptions = SparseNumericFactorOptions()
SparseRefactor(A1, &factorization,
               numericFactorOptions)

/// Solve _A1 · x = b1_ in place.
var b1Values: [Double] = [60, 70, 200]
b1Values.withUnsafeMutableBufferPointer { bPtr in
    let xb = DenseVector_Double(count: 3,
                                data: bPtr.baseAddress!)
    
    SparseSolve(factorization, xb)
}

SparseCleanup(A0)
SparseCleanup(A1)
SparseCleanup(factorization)
```

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0014:0001">On return, <code>b0Values</code> contains the values <code>[1.0, 2.0, 3.0]</code>, and <code>b1Values</code> contains the values <code>[4.0, 8.0, 12.0]</code>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0015:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0016:0001"><code>Matrix</code>: The matrix that contains numerical data to recompute.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0016:0002"><code>Factorization</code>: On input, the factorization to recompute. On output, the recomputed result.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0016:0003"><code>nfoptions</code>: The numeric factor options, such as the scaling method to use.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0017:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avmetadataidentifier/commonidentifierassetidentifier.md">static let aiff: AVFileType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">복구할 수 없는 방식으로 콘텐츠 권한 부여 요청의 마지막 호출을 완료할 수 없었습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avmetadataidentifier/commonidentifierauthor.md">static let amr: AVFileType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">적응형 멀티레이트 오디오 파일 형식의 UTI입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avmetadataidentifier/commonidentifiercontributor.md">static let appleiTT: AVFileType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">Apple iTT 캡션 파일 형식의 UTI입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avfiletype/au.md">static let au: AVFileType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">Sun/NeXT 오디오 파일 형식의 UTI입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avfiletype/avci.md">static let avci: AVFileType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">H.264 압축 이미지를 포함하는 고효율 이미지 파일 형식의 UTI입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avmetadataidentifier/quicktimemetadatacameraidentifier.md">static let commonIdentifierCreator: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">작성자의 이름을 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="avmetadataidentifier/quicktimemetadatacameralensirisfnumber.md">static let commonIdentifierDescription: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">미디어의 설명을 나타내는 식별자입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">미디어 콘텐츠의 파일 형식을 나타내는 식별자입니다.</span>

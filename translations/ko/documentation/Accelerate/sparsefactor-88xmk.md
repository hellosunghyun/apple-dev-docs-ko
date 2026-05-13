---
source_path: "documentation/Accelerate/sparsefactor-88xmk.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/sparsefactor-88xmk"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sparsefactor:0000:0001">SparseFactor(_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsefactor:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsefactor:0002:0001">제공된 옵션을 사용해 이중 정밀도 값의 희소 행렬에 대한 지정된 분해를 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsefactor:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:sparsefactor:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsefactor:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsefactor:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsefactor:0004:0004">macOS 10.13+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsefactor:0004:0005">tvOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsefactor:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsefactor:0004:0007">watchOS 4.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func SparseFactor(_ type: SparseFactorization_t, _ Matrix: SparseMatrix_Double, _ options: SparseSymbolicFactorOptions, _ nfoptions: SparseNumericFactorOptions) -> SparseOpaqueFactorization_Double
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">행렬 분해를 나타내는 <a href="sparseopaquefactorization_double.md">@@TOKEN_0@@</a> 구조입니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">직접 해법 함수에 전달할 희소 행렬의 분해를 계산하려면 이 함수를 사용합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">다음 그림은 계수 행렬이 희소인 연립방정식 시스템을 보여 줍니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">![왼쪽에 세 개의 동시방정식 집합이 있는 수학식.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0002">각 방정식에는 미지수가 세 개 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0003">동일한 연립방정식 집합이 오른쪽에서는 하나의 행렬 방정식으로 표시되며, <code>A x equals B</code>와 같습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0004">단일 행렬 방정식은 3x3 행렬과 3개 원소 열벡터의 곱이 3개 원소 열벡터와 같은 형태로 구성됩니다. ](https://docs-assets.developer.apple.com/published/0974a26754c699cdf34196f2c95365c3/media-3703879%402x.png)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0001">다음 코드는 계수 행렬의 QR 분해를 사용해 이 시스템을 해결합니다:
``<code>swift
/// Create the coefficient matrix _A_.
let rowIndices: [Int32] =    [ 0,  1, 1,  2]
let columnIndices: [Int32] = [ 2,  0, 2,  1]
let aValues: [Double] =      [10, 20, 5, 50]

let A = SparseConvertFromCoordinate(3, 3,
                                    4, 1,
                                    SparseAttributes_t(),
                                    rowIndices, columnIndices,
                                    aValues)

/// Factorize _A_
let symbolicOptions = SparseSymbolicFactorOptions(
    control: SparseDefaultControl,
    orderMethod: SparseOrderDefault,
    order: nil,
    ignoreRowsAndColumns: nil,
    malloc: { malloc($0) },
    free: { free($0) },
    reportError: nil)
let numericOptions = SparseNumericFactorOptions()
let factorization = SparseFactor(SparseFactorizationQR, A,
                                 symbolicOptions,
                                 numericOptions)

defer {
    SparseCleanup(A)
    SparseCleanup(factorization)
}

/// Create the right-hand-side vector, _b_.
var bValues = [30.0, 35.0, 100.0]

bValues.withUnsafeMutableBufferPointer { bPtr in
    
    let xb = DenseVector_Double(count: 3,
                               data: bPtr.baseAddress!)
    
    SparseSolve(factorization, xb)
}
</code>``</span>

```swift
/// Create the coefficient matrix _A_.
let rowIndices: [Int32] =    [ 0,  1, 1,  2]
let columnIndices: [Int32] = [ 2,  0, 2,  1]
let aValues: [Double] =      [10, 20, 5, 50]

let A = SparseConvertFromCoordinate(3, 3,
                                    4, 1,
                                    SparseAttributes_t(),
                                    rowIndices, columnIndices,
                                    aValues)

/// Factorize _A_
let symbolicOptions = SparseSymbolicFactorOptions(
    control: SparseDefaultControl,
    orderMethod: SparseOrderDefault,
    order: nil,
    ignoreRowsAndColumns: nil,
    malloc: { malloc($0) },
    free: { free($0) },
    reportError: nil)
let numericOptions = SparseNumericFactorOptions()
let factorization = SparseFactor(SparseFactorizationQR, A,
                                 symbolicOptions,
                                 numericOptions)

defer {
    SparseCleanup(A)
    SparseCleanup(factorization)
}

/// Create the right-hand-side vector, _b_.
var bValues = [30.0, 35.0, 100.0]

bValues.withUnsafeMutableBufferPointer { bPtr in
    
    let xb = DenseVector_Double(count: 3,
                               data: bPtr.baseAddress!)
    
    SparseSolve(factorization, xb)
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0014:0001">On return, <code>bValues</code> contains the values <code>[1.0, 2.0, 3.0]</code>.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0015:0001">You can use the symbolic factorization that this function returns for multiple numerical factorizations with different numerical values but the same nonzero structure.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0016:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0017:0001"><code>type</code>: The type of factorization to perform.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0017:0002"><code>Matrix</code>: The matrix to factorize.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0017:0003"><code>options</code>: The symbolic factor options, such as the ordering algorithm to use.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0017:0004"><code>nfoptions</code>: The numeric factor options, such as the scaling method to use.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0018:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="sparsefactor(_:_:">func SparseFactor(SparseFactorization_t, SparseMatrix_Double) -&gt; SparseOpaqueFactorization_Double</a>-8gl6j.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">Returns the specified factorization of a sparse matrix of double-precision values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="sparsefactor(_:_:">func SparseFactor(SparseFactorization_t, SparseMatrix_Float) -&gt; SparseOpaqueFactorization_Float</a>-38shj.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">Returns the specified factorization of a sparse matrix of single-precision values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="sparsefactor(_:_:_:_:">func SparseFactor(SparseFactorization_t, SparseMatrix_Float, SparseSymbolicFactorOptions, SparseNumericFactorOptions) -&gt; SparseOpaqueFactorization_Float</a>-8apyz.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">Returns the specified factorization of a sparse matrix of single-precision values using the specified options.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">*<a href="https://developer.apple.com/documentation/accelerate/sparsefactor(_:_:_:_:">View on Apple Developer</a>-88xmk)*</span>

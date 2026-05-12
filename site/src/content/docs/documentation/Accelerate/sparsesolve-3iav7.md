---
source_path: "documentation/Accelerate/sparsesolve-3iav7.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/sparsesolve-3iav7"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sparsesolve:0000:0001">SparseSolve(_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsesolve:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsesolve:0002:0001">이 함수는 제공된 double-precision 분해를 사용해 시스템 *AX = B*를 풉니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsesolve:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:sparsesolve:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsesolve:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsesolve:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsesolve:0004:0004">macOS 10.13+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsesolve:0004:0005">tvOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsesolve:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsesolve:0004:0007">watchOS 4.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func SparseSolve(_ Factored: SparseOpaqueFactorization_Double, _ B: DenseMatrix_Double, _ X: DenseMatrix_Double)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 함수는 분해된 계수 행렬을 사용해 선형 방정식 시스템을 풉니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">다음 그림은 계수 행렬이 희소한 두 개의 방정식 시스템을 보여줍니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">!<a href="https://docs-assets.developer.apple.com/published/f418105a3665a60546bc23d6a8dd3f50/media-3703887%402x.png">왼쪽에 세 개씩 쌓인 두 세트의 동시 방정식 수식</a></span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">각 방정식에는 미지수가 세 개입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0003">동일한 연립방정식 집합이 오른쪽에서는 하나의 행렬 방정식 *A x = B*로 표시됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0004">단일 행렬 방정식은 3×3 행렬과 3×2 행렬의 곱셈이 3×2 행렬이 되는 형태입니다.](https://docs-assets.developer.apple.com/published/f418105a3665a60546bc23d6a8dd3f50/media-3703887%402x.png)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">다음 코드는 계수 행렬의 QR 분해를 사용해 이 시스템을 풉니다:
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

/// Factorize _A_.
let factorization = SparseFactor(SparseFactorizationQR, A)

defer {
    SparseCleanup(A)
    SparseCleanup(factorization)
}

/// Create the right-hand-side matrix, _B_.
var bValues: [Double] = [30, 35, 100,
                         300, 350, 1000]
let n = bValues.count

/// Solve the system.
let xValues = [Double](unsafeUninitializedCapacity: n) {
    buffer, count in
    bValues.withUnsafeMutableBufferPointer { bPtr in
        let B = DenseMatrix_Double(rowCount: 3,
                                   columnCount: 2,
                                   columnStride: 3,
                                   attributes: SparseAttributes_t(),
                                   data: bPtr.baseAddress!)
        
        let X = DenseMatrix_Double(rowCount: 3,
                                   columnCount: 2,
                                   columnStride: 3,
                                   attributes: SparseAttributes_t(),
                                   data: buffer.baseAddress!)
        
        SparseSolve(factorization, B, X)
        
        count = n
    }
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

/// Factorize _A_.
let factorization = SparseFactor(SparseFactorizationQR, A)

defer {
    SparseCleanup(A)
    SparseCleanup(factorization)
}

/// Create the right-hand-side matrix, _B_.
var bValues: [Double] = [30, 35, 100,
                         300, 350, 1000]
let n = bValues.count

/// Solve the system.
let xValues = [Double](unsafeUninitializedCapacity: n) {
    buffer, count in
    bValues.withUnsafeMutableBufferPointer { bPtr in
        let B = DenseMatrix_Double(rowCount: 3,
                                   columnCount: 2,
                                   columnStride: 3,
                                   attributes: SparseAttributes_t(),
                                   data: bPtr.baseAddress!)
        
        let X = DenseMatrix_Double(rowCount: 3,
                                   columnCount: 2,
                                   columnStride: 3,
                                   attributes: SparseAttributes_t(),
                                   data: buffer.baseAddress!)
        
        SparseSolve(factorization, B, X)
        
        count = n
    }
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0001">반환 시 <code>xValues</code>에는 <code>[1.0, 2.0, 3.0, 10.0, 20.0, 30.0]</code> 값이 포함됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0013:0001">분해가 *A = QR*인 경우, 함수는 미지수 수가 많은 시스템에서 최소 노름 *‖ x ‖₂* 해를 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0014:0001">분해가 *A = QR*인 경우, 함수는 미지수가 많은 방정식에서 과잉 결정 시스템의 최소자승 해 *minₓ ‖ AX - B ‖₂*를 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0015:0001">분해가 <a href="sparsefactorizationcholeskyata.md">@@TOKEN_0@@</a>인 경우 분해는 *AᵀA*에 대해 수행되며, 반환되는 해는 시스템 *AᵀAX = B*에 대한 해입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0016:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0017:0001"><code>Factored</code>: *A*의 분해입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0017:0002"><code>B</code>: 우변 <code>B</code>입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0017:0003"><code>X</code>: 해를 반환할 행렬입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0018:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="sparsesolve(_:_:_:">func SparseSolve(SparseOpaqueFactorization_Float, DenseMatrix_Float, DenseMatrix_Float)</a>-2rxlq.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">이 함수는 제공된 single-precision 분해를 사용해 시스템 *AX = B*를 풉니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">*<a href="https://developer.apple.com/documentation/accelerate/sparsesolve(_:_:_:">Apple Developer에서 보기</a>-3iav7)*</span>

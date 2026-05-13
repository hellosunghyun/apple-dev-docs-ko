---
source_path: "documentation/Accelerate/sparsemultiplyadd-86gfz.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/sparsemultiplyadd-86gfz"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sparsemultiplyadd:0000:0001">SparseMultiplyAdd(_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsemultiplyadd:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsemultiplyadd:0002:0001">Performs the multiply operation *Y += alpha * AX* on a sparse matrix of double-precision, floating-point values.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsemultiplyadd:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:sparsemultiplyadd:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsemultiplyadd:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsemultiplyadd:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsemultiplyadd:0004:0004">macOS 10.13+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsemultiplyadd:0004:0005">tvOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsemultiplyadd:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsemultiplyadd:0004:0007">watchOS 4.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func SparseMultiplyAdd(_ alpha: Double, _ A: SparseMatrix_Double, _ X: DenseMatrix_Double, _ Y: DenseMatrix_Double)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">Use this function to multiply a scalar value by a sparse matrix, then by a dense matrix, and accumulate the result.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">The following equation is an example of a matrix-matrix multiplication where the first matrix is sparse:</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">![A mathematical formula that describes the matrix multiplication, Y plus-equals alpha times A X.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">A four-by-two matrix added to a scalar value multiplied by a four-by-four matrix multiplied by a four-by-two matrix equals a four-by-two matrix.](https://docs-assets.developer.apple.com/published/4fa2f6ea2f3d3796488891c3737aa224/media-3703078%402x.png)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">Call <a href="sparsemultiplyadd(_:_:_:_:">@@TOKEN_0@@</a>-3oa6n.md) to calculate the result.</span>

```swift
let rowCount = Int32(4)
let columnCount = Int32(4)
let blockCount = 4
let blockSize = UInt8(1)
let rowIndices: [Int32] = [0, 3, 0, 3]
let columnIndices: [Int32] = [0, 0, 3, 3]
let data = [1.0, 4.0, 13.0, 16.0]

/// The _A_ in _Y += alpha * AX_.
let A = SparseConvertFromCoordinate(rowCount, columnCount,
                                    blockCount, blockSize,
                                    SparseAttributes_t(),
                                    rowIndices, columnIndices,
                                    data)
defer {
    SparseCleanup(A)
}

/// The values for _X_ in _Y += alpha * AX_.
var xValues = [10.0, -1.0, -1.0, 10.0,
               100.0, -1.0, -1.0, 100.0]

/// The values for _Y_ in _Y += alpha * AX_.
var yValues = [Double](repeating: 1,
                       count: xValues.count)

let alpha = 2.0

yValues.withUnsafeMutableBufferPointer { yValuesPtr in
    xValues.withUnsafeMutableBufferPointer { denseMatrixPtr in
        /// The _X_ in _Y += alpha * AX_.
        let X = DenseMatrix_Double(rowCount: 4,
                                   columnCount: 2,
                                   columnStride: 4,
                                   attributes: SparseAttributes_t(),
                                   data: denseMatrixPtr.baseAddress!)
        
        /// The _Y_ in _Y += alpha * AX_.
        let Y = DenseMatrix_Double(rowCount: 4,
                                   columnCount: 2,
                                   columnStride: 4,
                                   attributes: SparseAttributes_t(),
                                   data: yValuesPtr.baseAddress!)
        
        SparseMultiplyAdd(alpha, A, X, Y)
    }
}

// On return, `yValues` contains:
//      `[ 281.0, 1.0, 1.0,  401.0,
//        2801.0, 1.0, 1.0, 4001.0]`
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0012:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0001"><code>alpha</code>: The scalar value *alpha* in *Y += alpha * AX*.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0002"><code>A</code>: The sparse matrix *A* in *Y* *+= AX*.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0003"><code>X</code>: The dense matrix *X* in *Y* *+= AX*.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0004"><code>Y</code>: The dense matrix *Y* in *Y* *+= AX*.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0014:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="sparsemultiplyadd(_:_:_:">func SparseMultiplyAdd(SparseMatrix_Double, DenseMatrix_Double, DenseMatrix_Double)</a>-lgm5.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">희소 행렬의 double-precision 부동 소수점 값에 대해 곱셈 연산 *Y += AX*를 수행합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="sparsemultiplyadd(_:_:_:">func SparseMultiplyAdd(SparseMatrix_Float, DenseMatrix_Float, DenseMatrix_Float)</a>-8pgpq.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">희소 행렬의 single-precision 부동 소수점 값에 대해 곱셈 연산 *Y += AX*를 수행합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="sparsemultiplyadd(_:_:_:_:">func SparseMultiplyAdd(Float, SparseMatrix_Float, DenseMatrix_Float, DenseMatrix_Float)</a>-n61k.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">희소 행렬의 single-precision 부동 소수점 값에 대해 곱셈 연산 *Y += alpha * AX*를 수행합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">*<a href="https://developer.apple.com/documentation/accelerate/sparsemultiplyadd(_:_:_:_:">Apple Developer에서 보기</a>-86gfz)*</span>

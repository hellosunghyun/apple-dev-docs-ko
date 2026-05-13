---
source_path: "documentation/Accelerate/sparsesolve-1f00y.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/sparsesolve-1f00y"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sparsesolve:0000:0001">SparseSolve(_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsesolve:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsesolve:0002:0001">Solves the equation *AX = B* for matrices of single-precision values using the specified iterative method.</span>

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
func SparseSolve(_ method: SparseIterativeMethod, _ A: SparseMatrix_Float, _ B: DenseMatrix_Float, _ X: DenseMatrix_Float) -> SparseIterativeStatus_t
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">Return Value</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">A <a href="sparseiterativestatus_t.md">@@TOKEN_0@@</a> enumeration that represents the status of the iterative solve.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">Use this function to solve a system of linear equations using a factored coefficient matrix.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">The following figure shows two systems of equations where the coefficient matrix is sparse:</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">![A mathematical equation that has two stacked sets of three simultaneous equations on the left.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0002">Each equation has three unknowns.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0003">The same sets of simultaneous equations appear on the right as a single matrix equation, A x equals B.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0004">The single matrix equation consists of a three-by-three matrix multiplied by a three-by-two matrix that equals a three-by-two matrix.](https://docs-assets.developer.apple.com/published/f418105a3665a60546bc23d6a8dd3f50/media-3703918%402x.png)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0001">The following code solves this system using the least squares minimum residual method:</span>

```swift
/// Create the coefficient matrix _A_.
let rowIndices: [Int32] =    [ 0,  1, 1,  2]
let columnIndices: [Int32] = [ 2,  0, 2,  1]
let aValues: [Float] =       [10, 20, 5, 50]

let A = SparseConvertFromCoordinate(3, 3,
                                    4, 1,
                                    SparseAttributes_t(),
                                    rowIndices, columnIndices,
                                    aValues)

defer {
    SparseCleanup(A)
}

/// Create the right-hand-side matrix, _B_.
var bValues: [Float] = [30, 35, 100,
                        300, 350, 1000]
let n = bValues.count

let xValues = [Float](unsafeUninitializedCapacity: n) {
    buffer, count in
    bValues.withUnsafeMutableBufferPointer { bPtr in
        let B = DenseMatrix_Float(rowCount: 3,
                                  columnCount: 2,
                                  columnStride: 3,
                                  attributes: SparseAttributes_t(),
                                  data: bPtr.baseAddress!)
        
        let X = DenseMatrix_Float(rowCount: 3,
                                  columnCount: 2,
                                  columnStride: 3,
                                  attributes: SparseAttributes_t(),
                                  data: buffer.baseAddress!)
        
        SparseSolve(SparseLSMR(),
                    A, B, X)
        
        count = n
    }
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0014:0001">On return, x<code>Values</code> contains the values <code>[1.0, 2.0, 3.0, 10.0, 20.0, 30.0]</code>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0015:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0016:0001"><code>method</code>: The iterative method.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0016:0002"><code>A</code>: The matrix *A*.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0016:0003"><code>B</code>: The matrix *B*.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0016:0004"><code>X</code>: The matrix *X*.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0017:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="sparsesolve(_:_:_:_:">func SparseSolve(SparseIterativeMethod, SparseMatrix_Double, DenseMatrix_Double, DenseMatrix_Double) -&gt; SparseIterativeStatus_t</a>-3ft19.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">지정한 반복 방법을 사용하여 배정밀도 값 행렬의 방정식 *AX = B*를 풉니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="sparsesolve(_:_:_:_:">func SparseSolve(SparseIterativeMethod, (Bool, CBLAS_TRANSPOSE, DenseMatrix_Double, DenseMatrix_Double) -&gt; Void, DenseMatrix_Double, DenseMatrix_Double) -&gt; SparseIterativeStatus_t</a>-vewd.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">지정한 반복 방법을 사용하고 *A*를 연산자로 처리하여 배정밀도 값 행렬의 방정식 *AX = B*를 풉니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="sparsesolve(_:_:_:_:">func SparseSolve(SparseIterativeMethod, (Bool, CBLAS_TRANSPOSE, DenseMatrix_Float, DenseMatrix_Float) -&gt; Void, DenseMatrix_Float, DenseMatrix_Float) -&gt; SparseIterativeStatus_t</a>-8mtxu.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">지정한 반복 방법을 사용하고 *A*를 연산자로 처리하여 단정밀도 값 행렬의 방정식 *AX = B*를 풉니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">*<a href="https://developer.apple.com/documentation/accelerate/sparsesolve(_:_:_:_:">Apple Developer에서 보기</a>-1f00y)*</span>

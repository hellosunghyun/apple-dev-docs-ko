---
source_path: "documentation/Accelerate/sparsesolve-3aphv.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/sparsesolve-3aphv"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sparsesolve:0000:0001">SparseSolve(_:_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsesolve:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsesolve:0002:0001">Solves the equation *Ax = b* for vectors of single-precision values using the specified iterative method and opaque preconditioner.</span>

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
func SparseSolve(_ method: SparseIterativeMethod, _ A: SparseMatrix_Float, _ b: DenseVector_Float, _ x: DenseVector_Float, _ Preconditioner: SparseOpaquePreconditioner_Float) -> SparseIterativeStatus_t
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">Return Value</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">A <a href="sparseiterativestatus_t.md">@@TOKEN_0@@</a> enumeration that represents the status of the iterative solve.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">이 값은 활성 비디오 형식 또는 활성 깊이 데이터 형식이 변경될 때마다 재설정됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">Preconditioning the coefficient matrix can reduce the number of iterations the function requires to converge the system.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">The following figure shows two systems of equations where the coefficient matrix is sparse:</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0001">![A mathematical equation that has one set of three simultaneous equations on the left.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0002">Each equation has three unknowns.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0003">The same set of simultaneous equations appears on the right as a single matrix equation, A x equals B.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0004">The single matrix equation consists of a three-by-three matrix multiplied by a three-element column matrix that equals a three-element column matrix.](https://docs-assets.developer.apple.com/published/0974a26754c699cdf34196f2c95365c3/media-3703931%402x.png)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0013:0001">The following code solves this system by applying a diagonal scaling preconditioner and using the least squares minimum residual method:</span>

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
let preconditioner = SparseCreatePreconditioner(SparsePreconditionerDiagScaling,
                                                A)

defer {
    SparseCleanup(A)
    SparseCleanup(preconditioner)
}

/// Create the right-hand-side vector, _b_.
var bValues: [Float] = [30, 35, 100]
var xValues = [Float](repeating: .nan, count: bValues.count)

bValues.withUnsafeMutableBufferPointer { bPtr in
    xValues.withUnsafeMutableBufferPointer { xPtr in
        
        let b = DenseVector_Float(count: 3,
                                   data: bPtr.baseAddress!)
        
        let x = DenseVector_Float(count: 3,
                                   data: xPtr.baseAddress!)
        
        SparseSolve(SparseLSMR(),
                    A, b, x,
                    preconditioner)
    }
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0015:0001">On return, x<code>Values</code> contains the values <code>[1.0, 2.0, 3.0]</code>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0016:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0017:0001"><code>method</code>: The iterative method.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0017:0002"><code>A</code>: The matrix *A*.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0017:0003"><code>b</code>: The vector *b*.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0017:0004"><code>x</code>: The vector *x*.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0017:0005"><code>Preconditioner</code>: The preconditioner to apply.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0018:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="sparsesolve(_:_:_:_:_:">func SparseSolve(SparseIterativeMethod, SparseMatrix_Double, DenseVector_Double, DenseVector_Double, SparseOpaquePreconditioner_Double) -&gt; SparseIterativeStatus_t</a>-1qwax.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">Solves the equation *Ax = b* for vectors of double-precision values using the specified iterative method and opaque preconditioner.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="sparsesolve(_:_:_:_:_:">func SparseSolve(SparseIterativeMethod, SparseMatrix_Double, DenseVector_Double, DenseVector_Double, SparsePreconditioner_t) -&gt; SparseIterativeStatus_t</a>-5vs11.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">Solves the equation *Ax = b* for vectors of double-precision values using the specified iterative method and preconditioner type.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="sparsesolve(_:_:_:_:_:">func SparseSolve(SparseIterativeMethod, SparseMatrix_Float, DenseVector_Float, DenseVector_Float, SparsePreconditioner_t) -&gt; SparseIterativeStatus_t</a>-9nzvm.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">Solves the equation *Ax = b* for vectors of single-precision values using the specified iterative method and preconditioner type.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="sparsesolve(_:_:_:_:_:">func SparseSolve(SparseIterativeMethod, (Bool, CBLAS_TRANSPOSE, DenseVector_Double, DenseVector_Double) -&gt; Void, DenseVector_Double, DenseVector_Double, SparseOpaquePreconditioner_Double) -&gt; SparseIterativeStatus_t</a>-6i1nx.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">Solves the equation *Ax = b* for vectors of double-precision values, treating *A* as an operator and using the specified iterative method and preconditioner.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="sparsesolve(_:_:_:_:_:">func SparseSolve(SparseIterativeMethod, (Bool, CBLAS_TRANSPOSE, DenseVector_Float, DenseVector_Float) -&gt; Void, DenseVector_Float, DenseVector_Float, SparseOpaquePreconditioner_Float) -&gt; SparseIterativeStatus_t</a>-7wnum.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">Solves the equation *Ax = b* for vectors of single-precision values, treating *A* as an operator and using the specified iterative method and preconditioner.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">*<a href="https://developer.apple.com/documentation/accelerate/sparsesolve(_:_:_:_:_:">View on Apple Developer</a>-3aphv)*</span>

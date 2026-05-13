---
source_path: "documentation/Accelerate/sparsesolve-14nj.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/sparsesolve-14nj"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sparsesolve:0000:0001">SparseSolve(_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsesolve:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsesolve:0002:0001">Solves the system *Ax = b* using the supplied double-precision factorization of *A*, in place and without any internal memory allocations.</span>

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
func SparseSolve(_ Factored: SparseOpaqueFactorization_Double, _ xb: DenseVector_Double, _ workspace: UnsafeMutableRawPointer)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">Use this function to solve a system of linear equations using a factored coefficient matrix.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">In cases where your code calls the function frequently, create and manage the workspace that the Sparse Solvers library uses and reuse it across function calls.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">Reusing a workspace prevents the Sparse Solvers library from allocating the temporary storage with each call.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">The following figure shows two systems of equations where the coefficient matrix is sparse:</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">![A mathematical equation that has one set of three simultaneous equations on the left.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">Each equation has three unknowns.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0003">The same set of simultaneous equations appears on the right as a single matrix equation, A x equals B.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0004">The single matrix equation consists of a three-by-three matrix multiplied by a three-element column matrix that equals a three-element column matrix.](https://docs-assets.developer.apple.com/published/0974a26754c699cdf34196f2c95365c3/media-3703892%402x.png)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">The following code solves this system with a QR factorization of the coefficient matrix:</span>

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

/// Create the right-hand-side vector, _b_:
var bValues: [Double] = [30, 35, 100]

/// Create the workspace.
let byteCount = factorization.solveWorkspaceRequiredStatic +
                    factorization.solveWorkspaceRequiredPerRHS
let workspace = UnsafeMutableRawPointer.allocate(
    byteCount: byteCount,
    alignment: MemoryLayout<Double>.alignment)
defer {
    workspace.deallocate()
}

/// Solve the system.
bValues.withUnsafeMutableBufferPointer { bPtr in
    let xb = DenseVector_Double(count: 3,
                                data: bPtr.baseAddress!)
    
    SparseSolve(factorization, xb, workspace)
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0013:0001">On return, <code>bValues</code> contains the values <code>[1.0, 2.0, 3.0]</code>.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0014:0001">If the factorization is *A = QR*, the function returns the solution of minimum norm *‖ x ‖₂* for underdetermined systems.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0015:0001">If the factorization is *A = QR*, the function returns the least squares solution *minₓ ‖ AX - B ‖₂* for overdetermined systems.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0016:0001">If the factorization is <a href="sparsefactorizationcholeskyata.md">@@TOKEN_0@@</a>, the factorization is of *AᵀA*, and the solution that returns is for the system *AᵀAX = B*.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0017:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0001"><code>Factored</code>: The factored matrix to solve.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0002"><code>xb</code>: On input, the vector *b*. On return, the function overwrites with the vector *x*. If *A* has dimension *m x n*, this parameter must have length *k*, where *k = max(m,n)*.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0003"><code>workspace</code>: The scratch space of size <a href="sparseopaquefactorization_double/solveworkspacerequiredstatic.md">@@TOKEN_1@@</a> <code>+ nrhs *</code> <a href="sparseopaquefactorization_double/solveworkspacerequiredperrhs.md">@@TOKEN_3@@</a>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0019:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avmetadataidentifier/quicktimemetadataautolivephoto.md">static let quickTimeMetadataAutoLivePhoto: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">라이브 포토 영화가 자동 모드를 사용했는지 나타내는 식별자입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">kCMMetadataBaseDataType_UTF8 형식의 값으로, 35mm 필름 동등값으로 정규화된 초점 거리를 나타냅니다(예: “50.00mm”).</span>

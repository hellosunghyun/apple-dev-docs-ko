---
source_path: "documentation/Accelerate/sparsesolve-5xn6p.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/sparsesolve-5xn6p"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sparsesolve:0000:0001">SparseSolve(_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsesolve:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsesolve:0002:0001">Solves the system <code>AX=B</code> for <code>X</code>, using the supplied <code>SparseOpaqueFactorization_Complex_Double</code> of <code>A</code>, and without any internal memory allocations.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsesolve:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:sparsesolve:0004:0001">iOS 18.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsesolve:0004:0002">iPadOS 18.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsesolve:0004:0003">Mac Catalyst 18.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsesolve:0004:0004">macOS 15.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsesolve:0004:0005">tvOS 18.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsesolve:0004:0006">visionOS 2.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsesolve:0004:0007">watchOS 11.5+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func SparseSolve(_ Factored: SparseOpaqueFactorization_Complex_Double, _ B: DenseMatrix_Complex_Double, _ X: DenseMatrix_Complex_Double, _ workspace: UnsafeMutableRawPointer)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">If the factorization is <code>A=QR</code> and the system is underdetermined, the solution of minimum norm <code>|| x ||_2</code> is returned.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">If the factorization is <code>A=QR</code> and the system is overdetermined, the least squares solution <code>arg min_x || Ax - b ||_2</code> is returned.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">In the case of a factorization of <code>type=SparseCholeskyAtA</code>, the factorization is in fact of <code>A^T A</code>, so the solution returned is for the system <code>A^TAx=b</code>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>timeRange</code>: The time range to be made empty.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>B</code>: The right-hand sides <code>B</code> to solve for. If <code>A</code> has dimension <code>m x n</code>, then <code>B</code> must have dimension <code>m x nrhs</code>, where nrhs is the number of right-hand sides to find solutions for.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0003"><code>X</code>: Matrix in which to return solutions. If <code>A</code> has dimension <code>m x n</code>, and <code>B</code> has dimension <code>m x nrhs</code>, then <code>X</code> must have dimension <code>n x nrhs</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0004"><code>workspace</code>: Scratch space of size <code>Factored.solveWorkspaceRequiredStatic + nrhs * Factored.solveWorkspaceRequiredPerRHS</code>. This memory must be 16-byte aligned (any allocation returned by <code>malloc()</code> has this property).</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avmetadataidentifier/quicktimemetadataarranger.md">static let quickTimeMetadataArranger: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">영화 파일 콘텐츠의 편곡자 이름을 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avmetadataidentifier/quicktimemetadataartist.md">static let quickTimeMetadataArtist: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">영화 파일 콘텐츠의 아티스트 이름을 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avmetadataidentifier/quicktimemetadataartwork.md">static let quickTimeMetadataArtwork: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">영화 파일 콘텐츠와 관련된 이미지를 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="sparsesolve(_:_:_:">func SparseSolve(SparseOpaqueSubfactor_Complex_Float, DenseMatrix_Complex_Float, UnsafeMutableRawPointer)</a>-2qlwo.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmutablemovie/insertemptytimerange(_:">Apple Developer에서 보기</a>)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="bnnstranspose(_:_:_:_:_:">func BNNSTranspose(UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafePointer&lt;BNNSNDArrayDescriptor&gt;, Int, Int, UnsafePointer&lt;BNNSFilterParameters&gt;?) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">텐서를 두 차원을 서로 바꿔 전치합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="bnnsgetpointer(_:_:">func BNNSGetPointer(BNNSFilter?, BNNSPointerSpecifier) -&gt; BNNSNDArrayDescriptor</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">필터 데이터 멤버에 대한 참조를 포함하는 n차원 배열 디스크립터를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="sparsesolve(_:_:_:">func SparseSolve(SparseOpaqueFactorization_Complex_Float, DenseMatrix_Complex_Float, DenseMatrix_Complex_Float)</a>-48njk.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">BNNS get filter 함수가 반환할 포인터를 지정하는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="sparsesolve(_:_:_:">func SparseSolve(SparseOpaqueSubfactor_Complex_Double, DenseMatrix_Complex_Double, UnsafeMutableRawPointer)</a>-6pudz.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">Gram 행렬 필터를 래핑하고 비초기화를 관리하는 레이어 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="sparsesolve(_:_:_:">func SparseSolve(SparseOpaqueSubfactor_Complex_Float, DenseMatrix_Complex_Float, DenseMatrix_Complex_Float)</a>-7krer.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">Gram 행렬 레이어를 정의하는 파라미터 집합입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="bnnsfiltercreatelayergram(_:_:">func BNNSFilterCreateLayerGram(UnsafePointer&lt;BNNSLayerParametersGram&gt;, UnsafePointer&lt;BNNSFilterParameters&gt;?) -&gt; BNNSFilter?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">새 Gram 행렬 레이어를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="bnns/clip(to:input:output:">static func clip(to: ClosedRange&lt;Float&gt;, input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">입력 텐서를 닫힌 범위로 클리핑하고 결과를 출력 텐서에 기록합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001">[static func clipByNorm(threshold: Float, input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, axes: [Int]?) throws](bnns/clipbynorm(threshold:input:output:axes:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">입력 텐서를 유클리드 노름으로 클리핑하고 결과를 출력 텐서에 기록합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="sparsesolve(_:_:_:_:">func SparseSolve(SparseOpaqueFactorization_Complex_Float, DenseVector_Complex_Float, DenseVector_Complex_Float, UnsafeMutableRawPointer)</a>-6od6k.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">Solves the system <code>Ax=b</code> for <code>x</code>, using the supplied <code>SparseOpaqueFactorization_Complex_Float</code> of <code>A</code>, in place.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="sparsesolve(_:_:_:_:">func SparseSolve(SparseOpaqueFactorization_Complex_Float, DenseMatrix_Complex_Float, DenseMatrix_Complex_Float, UnsafeMutableRawPointer)</a>-7mtyx.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">Solves the system <code>AX=B</code> for <code>X</code>, using the supplied <code>SparseOpaqueFactorization_Complex_Float</code> of <code>A</code>, and without any internal memory allocations.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">*<a href="https://developer.apple.com/documentation/accelerate/sparsesolve(_:_:_:_:">View on Apple Developer</a>-5xn6p)*</span>

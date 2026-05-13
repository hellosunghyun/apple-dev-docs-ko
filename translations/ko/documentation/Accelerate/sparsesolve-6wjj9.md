---
source_path: "documentation/Accelerate/sparsesolve-6wjj9.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/sparsesolve-6wjj9"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sparsesolve:0000:0001">SparseSolve(_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsesolve:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsesolve:0002:0001">Solve <code>AX=B</code> using the specified iterative method for complex float values.</span>

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
func SparseSolve(_ method: SparseIterativeMethod, _ ApplyOperator: @escaping (Bool, CBLAS_TRANSPOSE, DenseMatrix_Complex_Float, DenseMatrix_Complex_Float) -> Void, _ B: DenseMatrix_Complex_Float, _ X: DenseMatrix_Complex_Float) -> SparseIterativeStatus_t
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>method</code>: (Input) Iterative method specification, eg return value of <code>SparseConjugateGradient()</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>ApplyOperator</code>: <code>ApplyOperator(accumulate, trans, X, Y)</code> should perform the operation <code>Y = op(A)X</code> if <code>accumulate</code> is <code>false</code>, or <code>Y += op(A)X</code> if <code>accumulate</code> is <code>true</code>. - **<code>accumulate</code>**: (input) Indicates whether to perform <code>Y += op(A)X</code> (if true) or <code>Y = op(A)X</code> (if false).</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0003">**<code>trans</code>**: (input) Indicates whether <code>op(A)</code> is the application of <code>A</code> (<code>trans=CblasNoTrans</code>) or <code>A^T</code> (<code>trans=CblasTrans</code>).</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0004">**<code>X</code>**: The matrix to multiply.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0005">**<code>Y</code>**: The matrix in which to accumulate or store the result.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0006"><code>B</code>: The right-hand sides <code>B</code> to solve for. If <code>A</code> has dimension <code>m x n</code>, then <code>B</code> must have dimension <code>m x nrhs</code>, where nrhs is the number of right-hand sides to find solutions for.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0007"><code>X</code>: On entry, initial guess for solution, on return the solution. If <code>A</code> has dimension <code>m x n</code>, and <code>B</code> has dimension <code>m x nrhs</code>, then <code>X</code> must have dimension <code>n x nrhs</code>. If no good initial estimate is available, user should set the initial guess to be the zero vector.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="sparsesolve(_:_:_:_:">func SparseSolve(SparseIterativeMethod, SparseMatrix_Complex_Double, DenseVector_Complex_Double, DenseVector_Complex_Double) -&gt; SparseIterativeStatus_t</a>-41c6p.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">이 세그먼트의 시간 매핑입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avplayeritemsegment/loadedtimeranges-879hc.md">func insertTimeRange(CMTimeRange, of: AVAsset, at: CMTime, copySampleData: Bool) throws</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">지정된 자산의 특정 시간 범위에 있는 모든 트랙을 영화에 삽입합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnns/copy(_:to:filterparameters:">func scale(CMTimeRange, toDuration: CMTime)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">영화의 시간 범위 길이를 변경합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnns/transpose(input:output:firsttransposeaxis:secondtransposeaxis:filterparameters:">func removeTimeRange(CMTimeRange)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">지정된 시간 범위를 영화에서 제거합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="sparsesolve(_:_:_:_:_:">func SparseSolve(SparseIterativeMethod, (Bool, CBLAS_TRANSPOSE, DenseMatrix_Complex_Float, DenseMatrix_Complex_Float) -&gt; Void, DenseMatrix_Complex_Float, DenseMatrix_Complex_Float, SparseOpaquePreconditioner_Complex_Float) -&gt; SparseIterativeStatus_t</a>-1i6u8.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">주어진 함수 인수에 대한 인수 배열의 인덱스를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="sparsesolve(_:_:_:_:_:">func SparseSolve(SparseIterativeMethod, SparseMatrix_Complex_Double, DenseMatrix_Complex_Double, DenseMatrix_Complex_Double, SparseOpaquePreconditioner_Complex_Double) -&gt; SparseIterativeStatus_t</a>-4fvqm.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">지정한 함수의 입력 인수 개수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001">[var functionNames: [String]](bnnsgraph/context/functionnames.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">그래프에서 호출 가능한 함수의 이름을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="sparsesolve(_:_:_:_:_:">func SparseSolve(SparseIterativeMethod, SparseMatrix_Complex_Double, DenseMatrix_Complex_Double, DenseMatrix_Complex_Double, SparseOpaquePreconditioner_Complex_Double) -&gt; SparseIterativeStatus_t</a>-4fvqm.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">컨텍스트가 중간 텐서를 NaN과 infinity 값에 대해 검사하는지 지정하는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="sparsesolve(_:_:_:_:_:">func SparseSolve(SparseIterativeMethod, SparseMatrix_Complex_Float, DenseMatrix_Complex_Float, DenseMatrix_Complex_Float, SparsePreconditioner_t) -&gt; SparseIterativeStatus_t</a>-655i9.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsgraph/context/setdynamicshapes(_:forfunction:">View on Apple Developer</a>)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="sparsesolve(_:_:_:_:_:">func SparseSolve(SparseIterativeMethod, SparseMatrix_Complex_Double, DenseVector_Complex_Double, DenseVector_Complex_Double, SparsePreconditioner_t) -&gt; SparseIterativeStatus_t</a>-7hdp4.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">컨볼루션 중 입력 이미지에서 요소 간 세로 간격 증가량입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="sparsesolve(_:_:_:_:_:">func SparseSolve(SparseIterativeMethod, (Bool, CBLAS_TRANSPOSE, DenseMatrix_Complex_Double, DenseMatrix_Complex_Double) -&gt; Void, DenseMatrix_Complex_Double, DenseMatrix_Complex_Double, SparseOpaquePreconditioner_Complex_Double) -&gt; SparseIterativeStatus_t</a>-7m9vp.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">각 채널의 좌우에 추가되는 가상 0의 개수인 가로 패딩입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="sparsesolve(_:_:_:_:">func SparseSolve(SparseIterativeMethod, SparseMatrix_Complex_Double, DenseMatrix_Complex_Double, DenseMatrix_Complex_Double) -&gt; SparseIterativeStatus_t</a>-7zp1d.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">각 채널의 상단과 하단에 추가되는 가상 0의 개수인 세로 패딩입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="sparsesolve(_:_:_:_:">func SparseSolve(SparseIterativeMethod, (Bool, CBLAS_TRANSPOSE, DenseMatrix_Complex_Double, DenseMatrix_Complex_Double) -&gt; Void, DenseMatrix_Complex_Double, DenseMatrix_Complex_Double) -&gt; SparseIterativeStatus_t</a>-8bndu.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">Solve <code>AX=B</code> using the specified iterative method for complex double values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="bnnsclipbyvalue(_:_:_:_:">func BNNSClipByValue(UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafePointer&lt;BNNSNDArrayDescriptor&gt;, Float, Float) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">텐서의 값을 지정한 최소값과 최대값 범위로 클리핑합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="bnnsclipbynorm(_:_:_:_:">func BNNSClipByNorm(UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafePointer&lt;BNNSNDArrayDescriptor&gt;, Float, UInt32) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">텐서의 값을 최대 유클리디안 노름으로 클리핑합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">텐서의 값을 최대 전역 유클리디안 노름으로 클리핑합니다.</span>

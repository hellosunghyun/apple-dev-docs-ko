---
source_path: "documentation/Accelerate/sparsesolve-8yld7.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/sparsesolve-8yld7"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sparsesolve:0000:0001">SparseSolve(_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsesolve:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsesolve:0002:0001">지정된 반복 방법을 사용해 복소수 단정도 값의 <code>Ax=b</code>를 풉니다.</span>

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
func SparseSolve(_ method: SparseIterativeMethod, _ A: SparseMatrix_Complex_Float, _ b: DenseVector_Complex_Float, _ x: DenseVector_Complex_Float) -> SparseIterativeStatus_t
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>method</code>: (입력) 반복 메서드의 사양입니다. 예를 들어 <code>SparseConjugateGradient()</code>의 반환 값입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>A</code>: (입력) 시스템을 푸는 데 사용하는 행렬 <code>A</code>입니다. <code>A</code> 또는 <code>A^T</code> 곱셈에만 사용됩니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0003"><code>b</code>: 풀이하려는 우변 <code>b</code>입니다. <code>A</code>의 크기가 <code>m x n</code>이면 <code>b</code>의 길이는 <code>m</code>이어야 합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0004"><code>x</code>: 입력 시에는 해의 초기 추정값이며, 반환 시에는 해입니다. <code>A</code>의 크기가 <code>m x n</code>이면 <code>x</code>의 길이는 <code>n</code>이어야 합니다. 적절한 초기 추정값이 없으면 초기 추정값을 영 벡터로 설정해야 합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="sparsesolve(_:_:_:_:">func SparseSolve(SparseIterativeMethod, SparseMatrix_Complex_Double, DenseVector_Complex_Double, DenseVector_Complex_Double) -&gt; SparseIterativeStatus_t</a>-41c6p.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">복소수 이중 정밀도 값에 대해 지정된 반복 방법으로 <code>Ax=b</code>를 풉니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="sparsesolve(_:_:_:_:">func SparseSolve(SparseIterativeMethod, SparseMatrix_Complex_Float, DenseMatrix_Complex_Float, DenseMatrix_Complex_Float) -&gt; SparseIterativeStatus_t</a>-4xwsw.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">복소수 단정도 값에 대해 지정된 반복 방법으로 <code>AX=B</code>를 풉니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="sparsesolve(_:_:_:_:_:">func SparseSolve(SparseIterativeMethod, SparseMatrix_Complex_Float, DenseMatrix_Complex_Float, DenseMatrix_Complex_Float, SparseOpaquePreconditioner_Complex_Float) -&gt; SparseIterativeStatus_t</a>-155od.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">복소수 단정도 값에 대해 지정된 반복 방법으로 <code>AX=B</code>를 풉니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="sparsesolve(_:_:_:_:_:">func SparseSolve(SparseIterativeMethod, SparseMatrix_Complex_Float, DenseVector_Complex_Float, DenseVector_Complex_Float, SparsePreconditioner_t) -&gt; SparseIterativeStatus_t</a>-1fw3p.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">복소수 단정도 값에 대해 지정된 반복 방법으로 <code>Ax=b</code>를 풉니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="sparsesolve(_:_:_:_:_:">func SparseSolve(SparseIterativeMethod, (Bool, CBLAS_TRANSPOSE, DenseMatrix_Complex_Float, DenseMatrix_Complex_Float) -&gt; Void, DenseMatrix_Complex_Float, DenseMatrix_Complex_Float, SparseOpaquePreconditioner_Complex_Float) -&gt; SparseIterativeStatus_t</a>-1i6u8.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">복소수 단정도 값에 대해 지정된 반복 방법으로 <code>AX=B</code>를 풉니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="sparsesolve(_:_:_:_:_:">func SparseSolve(SparseIterativeMethod, SparseMatrix_Complex_Double, DenseMatrix_Complex_Double, DenseMatrix_Complex_Double, SparseOpaquePreconditioner_Complex_Double) -&gt; SparseIterativeStatus_t</a>-4fvqm.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">지정된 반복 방법을 사용하여 복소수 배정밀도 값의 <code>AX=B</code>를 풉니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="sparsesolve(_:_:_:_:_:">func SparseSolve(SparseIterativeMethod, SparseMatrix_Complex_Double, DenseMatrix_Complex_Double, DenseMatrix_Complex_Double, SparseOpaquePreconditioner_Complex_Double) -&gt; SparseIterativeStatus_t</a>-4fvqm.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">지정된 반복 방법을 사용하여 복소수 배정밀도 값의 <code>AX=B</code>를 풉니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="sparsesolve(_:_:_:_:_:">func SparseSolve(SparseIterativeMethod, SparseMatrix_Complex_Double, DenseMatrix_Complex_Double, DenseMatrix_Complex_Double, SparseOpaquePreconditioner_Complex_Double) -&gt; SparseIterativeStatus_t</a>-4fvqm.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">지정된 반복 방법을 사용하여 복소수 배정밀도 값의 <code>AX=B</code>를 풉니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="sparsesolve(_:_:_:_:_:">func SparseSolve(SparseIterativeMethod, SparseMatrix_Complex_Float, DenseMatrix_Complex_Float, DenseMatrix_Complex_Float, SparsePreconditioner_t) -&gt; SparseIterativeStatus_t</a>-655i9.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">지정된 반복 방법을 사용하여 복소수 단일 정밀도 값의 <code>AX=B</code>를 풉니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="sparsesolve(_:_:_:_:_:">func SparseSolve(SparseIterativeMethod, SparseMatrix_Complex_Double, DenseVector_Complex_Double, DenseVector_Complex_Double, SparsePreconditioner_t) -&gt; SparseIterativeStatus_t</a>-7hdp4.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">지정된 반복 방법을 사용하여 복소수 배정밀도 값의 <code>Ax=b</code>를 풉니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="sparsesolve(_:_:_:_:_:">func SparseSolve(SparseIterativeMethod, (Bool, CBLAS_TRANSPOSE, DenseMatrix_Complex_Double, DenseMatrix_Complex_Double) -&gt; Void, DenseMatrix_Complex_Double, DenseMatrix_Complex_Double, SparseOpaquePreconditioner_Complex_Double) -&gt; SparseIterativeStatus_t</a>-7m9vp.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">지정된 반복 방법을 사용하여 복소수 배정밀도 값의 <code>AX=B</code>를 풉니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="sparsesolve(_:_:_:_:">func SparseSolve(SparseIterativeMethod, (Bool, CBLAS_TRANSPOSE, DenseMatrix_Complex_Float, DenseMatrix_Complex_Float) -&gt; Void, DenseMatrix_Complex_Float, DenseMatrix_Complex_Float) -&gt; SparseIterativeStatus_t</a>-6wjj9.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">지정된 반복 방법을 사용하여 복소수 단일 정밀도 값의 <code>AX=B</code>를 풉니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="sparsesolve(_:_:_:_:">func SparseSolve(SparseIterativeMethod, SparseMatrix_Complex_Double, DenseMatrix_Complex_Double, DenseMatrix_Complex_Double) -&gt; SparseIterativeStatus_t</a>-7zp1d.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">지정된 반복 방법을 사용하여 복소수 배정밀도 값의 <code>AX=B</code>를 풉니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="sparsesolve(_:_:_:_:">func SparseSolve(SparseIterativeMethod, (Bool, CBLAS_TRANSPOSE, DenseMatrix_Complex_Double, DenseMatrix_Complex_Double) -&gt; Void, DenseMatrix_Complex_Double, DenseMatrix_Complex_Double) -&gt; SparseIterativeStatus_t</a>-8bndu.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">지정된 반복 방법을 사용하여 복소수 배정밀도 값의 <code>AX=B</code>를 풉니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="sparsesolve(_:_:_:_:_:">func SparseSolve(SparseIterativeMethod, SparseMatrix_Complex_Double, DenseMatrix_Complex_Double, DenseMatrix_Complex_Double, SparsePreconditioner_t) -&gt; SparseIterativeStatus_t</a>-4xd4z.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">지정된 반복 방법을 사용하여 복소수 배정밀도 값의 <code>AX=B</code>를 풉니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">*<a href="https://developer.apple.com/documentation/accelerate/sparsesolve(_:_:_:_:">Apple Developer에서 보기</a>-8yld7)*</span>

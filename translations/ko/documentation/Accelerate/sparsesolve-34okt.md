---
source_path: "documentation/Accelerate/sparsesolve-34okt.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/sparsesolve-34okt"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sparsesolve:0000:0001">SparseSolve(_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsesolve:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsesolve:0002:0001"><code>SparseOpaqueFactorization_Complex_Double</code>로 제공된 <code>A</code>를 사용해 제자리에서 <code>AX=B</code>의 <code>X</code>를 계산하며, 내부 메모리 할당을 수행하지 않습니다.</span>

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
func SparseSolve(_ Factored: SparseOpaqueFactorization_Complex_Double, _ XB: DenseMatrix_Complex_Double, _ workspace: UnsafeMutableRawPointer)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001"><code>A=QR</code>로 인수분해되고 시스템이 미결정이면 최소 노름 <code>|| x ||_2</code> 해가 반환됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002"><code>A=QR</code>로 인수분해되고 시스템이 과잉결정이면 최소제곱해 <code>arg min_x || Ax - b ||_2</code>가 반환됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003"><code>type=SparseCholeskyAtA</code>의 경우 인수분해는 실제로 <code>A^T A</code>이므로, 반환되는 해는 <code>A^TAx=b</code> 시스템의 해입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>Factored</code>: <code>A</code>의 인수분해입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>XB</code>: 입력 시에는 우변 <code>B</code>입니다. 반환 시에는 해 벡터 <code>X</code>입니다. <code>A</code>의 크기가 <code>m x n</code>이면 <code>XB</code>의 크기는 <code>k x nrhs</code>여야 하며, <code>k=max(m,n)</code>이고 <code>nrhs</code>는 해를 구할 우변의 개수입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0003"><code>workspace</code>: <code>Factored.solveWorkspaceRequiredStatic + nrhs * Factored.solveWorkspaceRequiredPerRHS * 2</code> 크기의 스크래치 공간입니다. 이 메모리는 16바이트 정렬되어야 하며, <code>malloc()</code>이 반환하는 할당은 모두 이 조건을 만족합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="sparsesolve(_:_:">func SparseSolve(SparseOpaqueFactorization_Complex_Double, DenseMatrix_Complex_Double)</a>-31yj7.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">Solves the system <code>AX=B</code> for <code>X</code>, using the supplied <code>SparseOpaqueFactorization_Complex_Double</code> of <code>A</code>, in place.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="sparsesolve(_:_:">func SparseSolve(SparseOpaqueSubfactor_Complex_Double, DenseMatrix_Complex_Double)</a>-3x0vj.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001"><code>Subfactor * X = B</code> 방정식을 복소수 double 값 행렬 <code>X</code>에 대해 제자리에서 풉니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="sparsesolve(_:_:">func SparseSolve(SparseOpaqueFactorization_Complex_Float, DenseMatrix_Complex_Float)</a>-4j17a.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">Solves the system <code>AX=B</code> for <code>X</code>, using the supplied <code>SparseOpaqueFactorization_Complex_Float</code> of <code>A</code>, in place.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="sparsesolve(_:_:_:">func SparseSolve(SparseOpaqueSubfactor_Complex_Float, DenseMatrix_Complex_Float, UnsafeMutableRawPointer)</a>-2qlwo.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001"><code>Subfactor * X</code> = B에 대한 복소수 float 값 행렬 <code>X</code>를 제자리에서 풉니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="sparsesolve(_:_:_:">func SparseSolve(SparseOpaqueFactorization_Complex_Double, DenseMatrix_Complex_Double, DenseMatrix_Complex_Double)</a>-2rk1c.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">Solves the system <code>AX=B</code> for <code>X</code>, using the supplied <code>SparseOpaqueFactorization_Complex_Double</code> of A<code>,</code> in place.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="sparsesolve(_:_:_:">func SparseSolve(SparseOpaqueFactorization_Complex_Float, DenseMatrix_Complex_Float, DenseMatrix_Complex_Float)</a>-48njk.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">Solves the system <code>AX=B</code> for <code>X</code>, using the supplied <code>SparseOpaqueFactorization_Complex_Float</code> of A<code>,</code> in place.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="sparsesolve(_:_:_:">func SparseSolve(SparseOpaqueSubfactor_Complex_Double, DenseMatrix_Complex_Double, UnsafeMutableRawPointer)</a>-6pudz.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">`<code>Subfactor * X</code> = B<code>에 대한 복소수 double 값 행렬 </code>X`를 제자리에서 풉니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="sparsesolve(_:_:_:">func SparseSolve(SparseOpaqueSubfactor_Complex_Float, DenseMatrix_Complex_Float, DenseMatrix_Complex_Float)</a>-7krer.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001"><code>Subfactor * X = B</code>에 대한 복소수 float 값 행렬 <code>X</code>를 제자리에서 풉니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="sparsesolve(_:_:_:">func SparseSolve(SparseOpaqueSubfactor_Complex_Double, DenseMatrix_Complex_Double, DenseMatrix_Complex_Double)</a>-7qdpl.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001"><code>Subfactor * X = B</code>에 대한 복소수 double 값 행렬 <code>X</code>를 제자리에서 풉니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="sparsesolve(_:_:_:">func SparseSolve(SparseOpaqueFactorization_Complex_Float, DenseMatrix_Complex_Float, UnsafeMutableRawPointer)</a>-8ikjb.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001"><code>SparseOpaqueFactorization_Complex_Float</code>로 제공된 <code>A</code>를 사용해 제자리에서 <code>AX=B</code>의 <code>X</code>를 계산하고 내부 메모리 할당은 수행하지 않습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="sparsesolve(_:_:_:_:">func SparseSolve(SparseOpaqueFactorization_Complex_Double, DenseMatrix_Complex_Double, DenseMatrix_Complex_Double, UnsafeMutableRawPointer)</a>-5xn6p.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001"><code>SparseOpaqueFactorization_Complex_Double</code>로 제공된 <code>A</code>를 사용해 제자리에서 <code>AX=B</code>의 <code>X</code>를 계산하며 내부 메모리를 추가로 할당하지 않습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="sparsesolve(_:_:_:_:">func SparseSolve(SparseOpaqueFactorization_Complex_Double, DenseVector_Complex_Double, DenseVector_Complex_Double, UnsafeMutableRawPointer)</a>-6demt.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001"><code>SparseOpaqueFactorization_Complex_Double</code>로 제공된 <code>A</code>를 사용해 제자리에서 <code>Ax=b</code>의 <code>x</code>를 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="sparsesolve(_:_:_:_:">func SparseSolve(SparseOpaqueFactorization_Complex_Float, DenseVector_Complex_Float, DenseVector_Complex_Float, UnsafeMutableRawPointer)</a>-6od6k.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001"><code>SparseOpaqueFactorization_Complex_Float</code>로 제공된 <code>A</code>를 사용해 제자리에서 <code>Ax=b</code>의 <code>x</code>를 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="sparsesolve(_:_:_:_:">func SparseSolve(SparseOpaqueFactorization_Complex_Float, DenseMatrix_Complex_Float, DenseMatrix_Complex_Float, UnsafeMutableRawPointer)</a>-7mtyx.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">제공된 <code>A</code>의 <code>SparseOpaqueFactorization_Complex_Float</code>를 사용하여 <code>AX=B</code> 시스템을 <code>X</code>에 대해 풀고, 내부 메모리 할당을 수행하지 않습니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">*<a href="https://developer.apple.com/documentation/accelerate/sparsesolve(_:_:_:">Apple Developer에서 보기</a>-34okt)*</span>

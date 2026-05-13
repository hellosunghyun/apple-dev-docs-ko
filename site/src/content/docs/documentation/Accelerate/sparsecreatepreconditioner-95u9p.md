---
source_path: "documentation/Accelerate/sparsecreatepreconditioner-95u9p.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/sparsecreatepreconditioner-95u9p"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sparsecreatepreconditioner:0000:0001">SparseCreatePreconditioner(_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsecreatepreconditioner:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsecreatepreconditioner:0002:0001">주어진 복소수 float 값 행렬에 대해 전처리기를 생성합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsecreatepreconditioner:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:sparsecreatepreconditioner:0004:0001">iOS 18.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsecreatepreconditioner:0004:0002">iPadOS 18.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsecreatepreconditioner:0004:0003">Mac Catalyst 18.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsecreatepreconditioner:0004:0004">macOS 15.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsecreatepreconditioner:0004:0005">tvOS 18.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsecreatepreconditioner:0004:0006">visionOS 2.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsecreatepreconditioner:0004:0007">watchOS 11.5+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func SparseCreatePreconditioner(_ type: SparsePreconditioner_t, _ A: SparseMatrix_Complex_Float) -> SparseOpaquePreconditioner_Complex_Float
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">구성된 preconditioner 객체입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0002">사용자가 preconditioner 사용을 마치면 <code>SparseCleanup()</code> 호출을 통해 리소스를 해제해야 합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>type</code>: (입력) 생성할 preconditioner의 유형입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>A</code>: (입력) preconditioner를 생성할 행렬입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="sparsecreatepreconditioner(_:_:">func SparseCreatePreconditioner(SparsePreconditioner_t, SparseMatrix_Double) -&gt; SparseOpaquePreconditioner_Double</a>-4ysww.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">Creates a preconditioner for the specified matrix of double-precision values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="sparsecreatepreconditioner(_:_:">func SparseCreatePreconditioner(SparsePreconditioner_t, SparseMatrix_Float) -&gt; SparseOpaquePreconditioner_Float</a>-59ql5.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">Creates a preconditioner for the specified matrix of single-precision values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="sparseopaquepreconditioner_double.md">struct SparseOpaquePreconditioner_Double</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">A structure that represents a double-precision preconditioner.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="sparseopaquepreconditioner_float.md">struct SparseOpaquePreconditioner_Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">A structure that represents a single-precision preconditioner.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="sparsecreatepreconditioner(_:_:">func SparseCreatePreconditioner(SparsePreconditioner_t, SparseMatrix_Complex_Double) -&gt; SparseOpaquePreconditioner_Complex_Double</a>-1yp4n.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">Create a preconditioner for the given matrix of complex double values.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/accelerate/sparsecreatepreconditioner(_:_:">View on Apple Developer</a>-95u9p)*</span>

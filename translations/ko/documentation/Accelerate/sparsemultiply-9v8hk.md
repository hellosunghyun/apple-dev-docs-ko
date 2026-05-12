---
source_path: "documentation/Accelerate/sparsemultiply-9v8hk.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/sparsemultiply-9v8hk"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sparsemultiply:0000:0001">SparseMultiply(_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsemultiply:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsemultiply:0002:0001">이 함수는 단정밀도 값의 밀집 행렬에서 내부 메모리 할당 없이 *Y* *= Subfactor * X* 곱셈 연산을 수행합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsemultiply:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:sparsemultiply:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsemultiply:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsemultiply:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsemultiply:0004:0004">macOS 10.13+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsemultiply:0004:0005">tvOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsemultiply:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsemultiply:0004:0007">watchOS 4.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func SparseMultiply(_ Subfactor: SparseOpaqueSubfactor_Float, _ X: DenseMatrix_Float, _ Y: DenseMatrix_Float, _ workspace: UnsafeMutableRawPointer)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>Subfactor</code>: <a href="sparsecreatesubfactor(_:_:">@@TOKEN_1@@</a>-4renf.md)가 반환하는, 곱셈에 사용할 Subfactor입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>X</code>: 행렬 *X*입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0003"><code>Y</code>: 행렬 *Y*입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0004"><code>workspace</code>: <code>nrhs</code>가 우변 벡터의 개수일 때 <code>workspaceRequiredStatic</code> <code>+ nrhs *</code> <code>workspaceRequiredPerRHS</code> 크기의 작업 공간입니다. 여기서 <code>nrhs</code>는 우변 벡터 개수입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="sparsemultiply(_:_:_:">func SparseMultiply(SparseOpaqueSubfactor_Double, DenseMatrix_Double, UnsafeMutableRawPointer)</a>-20xvs.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">이 함수는 배정밀도 값의 밀집 행렬에서 내부 메모리 할당 없이 제자리에서 *Y* *= Subfactor * X* 곱셈 연산을 수행합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="sparsemultiply(_:_:_:">func SparseMultiply(SparseOpaqueSubfactor_Float, DenseMatrix_Float, UnsafeMutableRawPointer)</a>-6thvw.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">이 함수는 단정밀도 값의 밀집 행렬에서 내부 메모리 할당 없이 제자리에서 *Y* *= Subfactor * X* 곱셈 연산을 수행합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="sparsemultiply(_:_:_:_:">func SparseMultiply(SparseOpaqueSubfactor_Double, DenseMatrix_Double, DenseMatrix_Double, UnsafeMutableRawPointer)</a>-2osop.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">이 함수는 배정밀도 값의 밀집 행렬에서 내부 메모리 할당 없이 제자리에서 *Y* *= Subfactor * X* 곱셈 연산을 수행합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="sparsemultiply(_:_:_:">func SparseMultiply(SparseOpaqueSubfactor_Complex_Float, DenseMatrix_Complex_Float, UnsafeMutableRawPointer)</a>-6strd.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">복소 단정밀도 값에 대해 곱셈 연산 <code>Y = Subfactor * X</code>를 제자리에서 수행합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="vdsp/absolute(_:">func SparseMultiply(SparseOpaqueSubfactor_Complex_Double, DenseMatrix_Complex_Double, UnsafeMutableRawPointer)</a>-9c3ge.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">복소 배정밀도 값에 대해 곱셈 연산 <code>Y = Subfactor * X</code>를 제자리에서 수행합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="vdsp/absolute(_:">func SparseMultiply(SparseOpaqueSubfactor_Complex_Float, DenseMatrix_Complex_Float, DenseMatrix_Complex_Float, UnsafeMutableRawPointer)</a>-5ehc1.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">복소 단정밀도 값에 대한 곱셈 연산 <code>Y = Subfactor * X</code>를 수행합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/accelerate/sparsemultiply(_:_:_:_:">View on Apple Developer</a>-9v8hk)*</span>

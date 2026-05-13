---
source_path: "documentation/Accelerate/sparsefactor-6s9g.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/sparsefactor-6s9g"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sparsefactor:0000:0001">SparseFactor(_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsefactor:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsefactor:0002:0001">주어진 구조를 가진 복소수 행렬에 대해 요청한 유형의 기호적 분해를 제공된 옵션으로 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsefactor:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:sparsefactor:0004:0001">iOS 18.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsefactor:0004:0002">iPadOS 18.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsefactor:0004:0003">Mac Catalyst 18.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsefactor:0004:0004">macOS 15.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsefactor:0004:0005">tvOS 18.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsefactor:0004:0006">visionOS 2.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsefactor:0004:0007">watchOS 11.5+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func SparseFactor(_ type: SparseFactorization_t, _ MatrixComplex: SparseMatrixStructureComplex, _ options: SparseSymbolicFactorOptions) -> SparseOpaqueSymbolicFactorization
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">요청한 Matrix의 기호적 분해입니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">결과 기호적 분해는 동일한 영(0) 원소 구조를 가진 서로 다른 수치값으로 여러 번의 수치 분해에 사용할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>type</code>: 수행할 분해의 유형입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="sparsefactor(_:_:">func SparseFactor(SparseOpaqueSymbolicFactorization, SparseMatrix_Complex_Float) -&gt; SparseOpaqueFactorization_Complex_Float</a>-7a3l4.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">제공된 기호적 분해에 해당하는 복소수 float 값 희소 행렬의 분해를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="sparsefactor(_:_:_:">func SparseFactor(SparseOpaqueSymbolicFactorization, SparseMatrix_Complex_Float, SparseNumericFactorOptions) -&gt; SparseOpaqueFactorization_Complex_Float</a>-7kqvi.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">제공된 기호적 분해에 해당하는 복소수 float 값 희소 행렬의 분해를 지정된 옵션을 사용해 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="sparsefactor(_:_:_:">func SparseFactor(SparseOpaqueSymbolicFactorization, SparseMatrix_Complex_Double, SparseNumericFactorOptions) -&gt; SparseOpaqueFactorization_Complex_Double</a>-9ypz5.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">제공된 기호적 분해에 해당하는 복소수 double 값 희소 행렬의 분해를 지정된 옵션을 사용해 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="sparsefactor(_:_:_:_:">func SparseFactor(SparseFactorization_t, SparseMatrix_Complex_Double, SparseSymbolicFactorOptions, SparseNumericFactorOptions) -&gt; SparseOpaqueFactorization_Complex_Double</a>-6hqfp.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">지정된 옵션을 사용해 복소수 double 값 희소 행렬의 지정된 분해를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="sparsefactor(_:_:_:_:">func SparseFactor(SparseFactorization_t, SparseMatrix_Complex_Float, SparseSymbolicFactorOptions, SparseNumericFactorOptions) -&gt; SparseOpaqueFactorization_Complex_Float</a>-9ykfp.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">지정된 옵션을 사용해 복소수 float 값 희소 행렬의 지정된 분해를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="sparsefactor(_:_:_:_:_:">func SparseFactor(SparseOpaqueSymbolicFactorization, SparseMatrix_Complex_Float, SparseNumericFactorOptions, UnsafeMutableRawPointer?, UnsafeMutableRawPointer?) -&gt; SparseOpaqueFactorization_Complex_Float</a>-2dqfv.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">제공된 기호적 분해에 해당하는 복소수 float 값 희소 행렬의 분해를 지정된 옵션으로, 내부 메모리 할당 없이 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="sparsefactor(_:_:_:_:_:">func SparseFactor(SparseOpaqueSymbolicFactorization, SparseMatrix_Complex_Double, SparseNumericFactorOptions, UnsafeMutableRawPointer?, UnsafeMutableRawPointer?) -&gt; SparseOpaqueFactorization_Complex_Double</a>-7j0dm.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">제공된 기호적 분해에 해당하는 복소수 double 값 희소 행렬의 분해를 지정된 옵션으로, 내부 메모리 할당 없이 반환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">*<a href="https://developer.apple.com/documentation/accelerate/sparsefactor(_:_:_:">View on Apple Developer</a>-6s9g)*</span>

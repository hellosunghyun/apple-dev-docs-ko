---
source_path: "documentation/Accelerate/sparse-matrix-create-double.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/sparse-matrix-create-double"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sparsematrixcreatedouble:0000:0001">sparse_matrix_create_double(_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsematrixcreatedouble:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsematrixcreatedouble:0002:0001">Returns a double-precision sparse matrix object.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsematrixcreatedouble:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:sparsematrixcreatedouble:0004:0001">iOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsematrixcreatedouble:0004:0002">iPadOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsematrixcreatedouble:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsematrixcreatedouble:0004:0004">macOS 10.11+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsematrixcreatedouble:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsematrixcreatedouble:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsematrixcreatedouble:0004:0007">watchOS 3.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func sparse_matrix_create_double(_ M: sparse_dimension, _ N: sparse_dimension) -> sparse_matrix_double!
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">Return Value</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">A matrix object that is ready for receiving entries.</span> <span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0002">If an error occurs, <code>nil</code> is returned.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">This function creates a sparse matrix object that is stored in pointwise format and is ready to receive values from the various insert routines.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">Pointwise 형식은 <code>i,j</code> 위치에 대해 개별 값이 값 블록이 아닌 형태로 저장됨을 의미합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0003">블록 지원은 블록 생성 루틴을 사용합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0004">이 행렬 객체에 항목을 삽입하는 자세한 내용은 다양한 삽입 루틴을 참조합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">행렬 사용이 끝나면 <a href="sparse_matrix_destroy(_:">@@TOKEN_0@@</a>.md)를 사용해 행렬에 할당된 메모리를 해제해야 합니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0012:0001">❗ **중요**: Apple은 Accelerate 프레임워크에서 BLAS 및 LAPACK 라이브러리를 LAPACK 3.9.1과 일치하도록 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0012:0002">iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, watchOS 26부터 라이브러리는 LAPACK 3.12.0과 일치합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0012:0003">이 새 인터페이스는 추가 기능과 함께 새 ILP64 인터페이스도 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0012:0004">새 인터페이스를 사용하려면 Accelerate 또는 vecLib 헤더를 포함하기 전에 <code>ACCELERATE_NEW_LAPACK</code>을 정의합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0012:0005">ILP64 인터페이스의 경우 <code>ACCELERATE_LAPACK_ILP64</code>도 정의합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0012:0006">Swift 프로젝트의 경우 Xcode 빌드 설정에서 <code>ACCELERATE_NEW_LAPACK=1</code> 및 <code>ACCELERATE_LAPACK_ILP64=1</code>을 전처리기 매크로로 지정합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0013:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0001"><code>M</code>: 행렬의 행 개수입니다. 0보다 커야 합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0002"><code>N</code>: 행렬의 열 개수입니다. 0보다 커야 합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0015:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="sparse_matrix_create_float(_:_:">func sparse_matrix_create_float(sparse_dimension, sparse_dimension) -&gt; sparse_matrix_float!</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">단정밀도 희소 행렬 객체를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="sparse_insert_entry_double(_:_:_:_:">func sparse_insert_entry_double(sparse_matrix_double!, Double, sparse_index, sparse_index) -&gt; sparse_status</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">단일 스칼라 항목을 배정밀도 희소 행렬에 삽입합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="sparse_insert_entry_float(_:_:_:_:">func sparse_insert_entry_float(sparse_matrix_float!, Float, sparse_index, sparse_index) -&gt; sparse_status</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">단일 스칼라 항목을 단정밀도 희소 행렬에 삽입합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="sparse_insert_entries_double(_:_:_:_:_:">func sparse_insert_entries_double(sparse_matrix_double!, sparse_dimension, UnsafePointer&lt;Double&gt;!, UnsafePointer&lt;sparse_index&gt;!, UnsafePointer&lt;sparse_index&gt;!) -&gt; sparse_status</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">배정밀도 희소 행렬에 스칼라 항목 목록을 삽입합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="sparse_insert_entries_float(_:_:_:_:_:">func sparse_insert_entries_float(sparse_matrix_float!, sparse_dimension, UnsafePointer&lt;Float&gt;!, UnsafePointer&lt;sparse_index&gt;!, UnsafePointer&lt;sparse_index&gt;!) -&gt; sparse_status</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">단정밀도 희소 행렬에 스칼라 항목 목록을 삽입합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="sparse_insert_col_double(_:_:_:_:_:">func sparse_insert_col_double(sparse_matrix_double!, sparse_index, sparse_dimension, UnsafePointer&lt;Double&gt;!, UnsafePointer&lt;sparse_index&gt;!) -&gt; sparse_status</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">배정밀도 희소 행렬의 단일 열에 스칼라 항목 목록을 삽입합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="sparse_insert_col_float(_:_:_:_:_:">func sparse_insert_col_float(sparse_matrix_float!, sparse_index, sparse_dimension, UnsafePointer&lt;Float&gt;!, UnsafePointer&lt;sparse_index&gt;!) -&gt; sparse_status</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">단정밀도 희소 행렬의 단일 열에 스칼라 항목 목록을 삽입합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="sparse_insert_row_double(_:_:_:_:_:">func sparse_insert_row_double(sparse_matrix_double!, sparse_index, sparse_dimension, UnsafePointer&lt;Double&gt;!, UnsafePointer&lt;sparse_index&gt;!) -&gt; sparse_status</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">배정밀도 희소 행렬의 단일 행에 스칼라 항목 목록을 삽입합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="sparse_insert_row_float(_:_:_:_:_:">func sparse_insert_row_float(sparse_matrix_float!, sparse_index, sparse_dimension, UnsafePointer&lt;Float&gt;!, UnsafePointer&lt;sparse_index&gt;!) -&gt; sparse_status</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">단정밀도 희소 행렬의 단일 행에 스칼라 항목 목록을 삽입합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">*<a href="https://developer.apple.com/documentation/accelerate/sparse_matrix_create_double(_:_:">Apple Developer에서 보기</a>)*</span>

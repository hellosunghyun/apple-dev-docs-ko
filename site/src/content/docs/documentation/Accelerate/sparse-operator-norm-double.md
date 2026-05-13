---
source_path: "documentation/Accelerate/sparse-operator-norm-double.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/sparse-operator-norm-double"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sparseoperatornormdouble:0000:0001">sparse_operator_norm_double(_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparseoperatornormdouble:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparseoperatornormdouble:0002:0001">이중 정밀도 희소 행렬 *A*의 지정된 연산자 노름을 계산합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparseoperatornormdouble:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:sparseoperatornormdouble:0004:0001">iOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparseoperatornormdouble:0004:0002">iPadOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparseoperatornormdouble:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparseoperatornormdouble:0004:0004">macOS 10.11+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparseoperatornormdouble:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparseoperatornormdouble:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparseoperatornormdouble:0004:0007">watchOS 3.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func sparse_operator_norm_double(_ A: sparse_matrix_double!, _ norm: sparse_norm) -> Double
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">요청한 노름입니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">이는 원소별 노름이 아니라 선형 연산자로 취급한 행렬의 노름입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">다음 중 하나를 지정합니다.</span>

| <span class="ko-segment" data-segment-id="seg:table:discussion:0011:0001"><a href="sparse_norm_one.md">@@TOKEN_0@@</a></span> | <span class="ko-segment" data-segment-id="seg:table:discussion:0011:0002">*j에 대한 최댓값 ( i에 대한 합 (</span> | <span class="ko-segment" data-segment-id="seg:table:discussion:0011:0003">A[i,j]</span> | <span class="ko-segment" data-segment-id="seg:table:discussion:0011:0004">) )*</span> |  | <span class="ko-segment" data-segment-id="seg:table:discussion:0011:0005">—</span> | <span class="ko-segment" data-segment-id="seg:table:discussion:0011:0006">—</span> |  | <span class="ko-segment" data-segment-id="seg:table:discussion:0011:0007"><a href="sparse_norm_two.md">@@TOKEN_0@@</a></span> | <span class="ko-segment" data-segment-id="seg:table:discussion:0011:0008">최대 특이값입니다. 다른 노름보다 계산 비용이 훨씬 더 큽니다.</span> |  | <span class="ko-segment" data-segment-id="seg:table:discussion:0011:0009"><a href="sparse_norm_inf.md">@@TOKEN_0@@</a></span> | <span class="ko-segment" data-segment-id="seg:table:discussion:0011:0010">*i에 대한 최댓값 ( j에 대한 합 (</span> | <span class="ko-segment" data-segment-id="seg:table:discussion:0011:0011">A[i,j]</span> | <span class="ko-segment" data-segment-id="seg:table:discussion:0011:0012">) )*</span> |  | <span class="ko-segment" data-segment-id="seg:table:discussion:0011:0013"><a href="sparse_norm_r1.md">@@TOKEN_0@@</a></span> | <span class="ko-segment" data-segment-id="seg:table:discussion:0011:0014">지원되지 않으며 정의되지 않습니다.</span> |

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0001">열거된 노름 유형이 아니면 기본값은 <a href="sparse_norm_inf.md">@@TOKEN_0@@</a>입니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0013:0001">❗ **중요**: Apple은 BLAS 및 LAPACK 라이브러리를 Accelerate framework에서 제공하여 LAPACK 3.9.1과 일치합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0013:0002">iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, watchOS 26부터 라이브러리는 LAPACK 3.12.0과 일치합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0013:0003">이 새로운 인터페이스는 추가 기능과 함께 새로운 ILP64 인터페이스도 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0013:0004">새 인터페이스를 사용하려면 Accelerate 또는 vecLib 헤더를 포함하기 전에 <code>ACCELERATE_NEW_LAPACK</code>을 정의합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0013:0005">ILP64 인터페이스의 경우 <code>ACCELERATE_LAPACK_ILP64</code>도 정의합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0013:0006">Swift 프로젝트의 경우 Xcode 빌드 설정에서 <code>ACCELERATE_NEW_LAPACK=1</code> 및 <code>ACCELERATE_LAPACK_ILP64=1</code>을 전처리기 매크로로 지정합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0014:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0015:0001"><code>A</code>: 희소 행렬 *A*입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0015:0002"><code>norm</code>: 계산할 노름을 지정합니다. <a href="sparse_norm_one.md">@@TOKEN_1@@</a>, <a href="sparse_norm_two.md">@@TOKEN_2@@</a>, <a href="sparse_norm_inf.md">@@TOKEN_3@@</a> 중 하나여야 합니다. 자세한 내용은 discussion을 참조합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0016:0001">참조</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="sparse_matrix_vector_product_dense_double(_:_:_:_:_:_:_:">func sparse_matrix_vector_product_dense_double(CBLAS_TRANSPOSE, Double, sparse_matrix_double!, UnsafePointer&lt;Double&gt;!, sparse_stride, UnsafeMutablePointer&lt;Double&gt;!, sparse_stride) -&gt; sparse_status</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">밀집 벡터 *x*를 희소 행렬 *A*와 곱한 다음 그 결과를 밀집 벡터 *y*에 더합니다. 모든 피연산자는 이중 정밀도 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="sparse_matrix_vector_product_dense_float(_:_:_:_:_:_:_:">func sparse_matrix_vector_product_dense_float(CBLAS_TRANSPOSE, Float, sparse_matrix_float!, UnsafePointer&lt;Float&gt;!, sparse_stride, UnsafeMutablePointer&lt;Float&gt;!, sparse_stride) -&gt; sparse_status</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">밀집 벡터 *x*를 희소 행렬 *A*와 곱한 다음 그 결과를 밀집 벡터 *y*에 더합니다. 모든 피연산자는 단정밀도 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="sparse_vector_triangular_solve_dense_double(_:_:_:_:_:">func sparse_vector_triangular_solve_dense_double(CBLAS_TRANSPOSE, Double, sparse_matrix_double!, UnsafeMutablePointer&lt;Double&gt;!, sparse_stride) -&gt; sparse_status</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">방정식 *x = alpha * T⁻¹ * x*를 *x*에 대해 풉니다. 여기서 *x*는 밀집 벡터이고 *T*는 삼각 희소 행렬로, 두 피연산자 모두 이중 정밀도 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="sparse_vector_triangular_solve_dense_float(_:_:_:_:_:">func sparse_vector_triangular_solve_dense_float(CBLAS_TRANSPOSE, Float, sparse_matrix_float!, UnsafeMutablePointer&lt;Float&gt;!, sparse_stride) -&gt; sparse_status</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">방정식 *x = alpha * T⁻¹ * x*를 *x*에 대해 풉니다. 여기서 *x*는 밀집 벡터이고 *T*는 삼각 희소 행렬로, 두 피연산자 모두 단정밀도 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="sparse_outer_product_dense_double(_:_:_:_:_:_:_:_:_:">func sparse_outer_product_dense_double(sparse_dimension, sparse_dimension, sparse_dimension, Double, UnsafePointer&lt;Double&gt;!, sparse_stride, UnsafePointer&lt;Double&gt;!, UnsafePointer&lt;sparse_index&gt;!, UnsafeMutablePointer&lt;sparse_matrix_double?&gt;!) -&gt; sparse_status</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">밀집 벡터 *x*와 희소 벡터 *y*의 외적을 계산합니다. 두 피연산자 모두 이중 정밀도 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="sparse_outer_product_dense_float(_:_:_:_:_:_:_:_:_:">func sparse_outer_product_dense_float(sparse_dimension, sparse_dimension, sparse_dimension, Float, UnsafePointer&lt;Float&gt;!, sparse_stride, UnsafePointer&lt;Float&gt;!, UnsafePointer&lt;sparse_index&gt;!, UnsafeMutablePointer&lt;sparse_matrix_float?&gt;!) -&gt; sparse_status</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">밀집 벡터 *x*와 희소 벡터 *y*의 외적을 계산합니다. 두 피연산자 모두 단정밀도 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="sparse_permute_rows_double(_:_:">func sparse_permute_rows_double(sparse_matrix_double!, UnsafePointer&lt;sparse_index&gt;!) -&gt; sparse_status</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">주어진 순열 배열을 기준으로 이중 정밀도 희소 행렬 *A*의 행을 순열 처리합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001"><a href="sparse_permute_rows_float(_:_:">func sparse_permute_rows_float(sparse_matrix_float!, UnsafePointer&lt;sparse_index&gt;!) -&gt; sparse_status</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">주어진 순열 배열을 기준으로 단정밀도 희소 행렬 *A*의 행을 순열 처리합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0033:0001"><a href="sparse_permute_cols_double(_:_:">func sparse_permute_cols_double(sparse_matrix_double!, UnsafePointer&lt;sparse_index&gt;!) -&gt; sparse_status</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">주어진 순열 배열을 기준으로 이중 정밀도 희소 행렬 *A*의 열을 순열 처리합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0035:0001"><a href="sparse_permute_cols_float(_:_:">func sparse_permute_cols_float(sparse_matrix_float!, UnsafePointer&lt;sparse_index&gt;!) -&gt; sparse_status</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0036:0001">제공된 순열 배열을 기반으로 단정밀도 희소 행렬 *A*의 열을 재배열합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0037:0001"><a href="sparse_elementwise_norm_double(_:_:">func sparse_elementwise_norm_double(sparse_matrix_double!, sparse_norm) -&gt; Double</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0038:0001">이중 정밀도 희소 행렬 *A*의 지정된 원소별 노름을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0039:0001"><a href="sparse_elementwise_norm_float(_:_:">func sparse_elementwise_norm_float(sparse_matrix_float!, sparse_norm) -&gt; Float</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0040:0001">단정밀도 희소 행렬 *A*의 지정된 원소별 노름을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0041:0001"><a href="sparse_operator_norm_float(_:_:">func sparse_operator_norm_float(sparse_matrix_float!, sparse_norm) -&gt; Float</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0042:0001">단정밀도 희소 행렬 *A*의 지정된 연산자 노름을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0043:0001"><a href="sparse_matrix_trace_double(_:_:">func sparse_matrix_trace_double(sparse_matrix_double!, sparse_index) -&gt; Double</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0044:0001">이중 정밀도 희소 행렬 *A*의 지정된 대각선에 따른 합을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0045:0001"><a href="sparse_matrix_trace_float(_:_:">func sparse_matrix_trace_float(sparse_matrix_float!, sparse_index) -&gt; Float</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0046:0001">단정밀도 희소 행렬 *A*의 지정된 대각선에 따른 합을 계산합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0048:0001">*<a href="https://developer.apple.com/documentation/accelerate/sparse_operator_norm_double(_:_:">View on Apple Developer</a>)*</span>

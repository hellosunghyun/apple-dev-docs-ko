---
source_path: "documentation/Accelerate/sparse-matrix-triangular-solve-dense-float.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/sparse-matrix-triangular-solve-dense-float"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sparsematrixtriangularsolvedensefloat:0000:0001">sparse_matrix_triangular_solve_dense_float(_:_:_:_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsematrixtriangularsolvedensefloat:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsematrixtriangularsolvedensefloat:0002:0001">배정밀도 값을 사용하는 *B*와 *T*로 구성된 선형 방정식 *B = alpha * T⁻¹ * B*를 풉니다. 여기서 *B*는 조밀 행렬이고 *T*는 삼각 희소 행렬입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsematrixtriangularsolvedensefloat:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:sparsematrixtriangularsolvedensefloat:0004:0001">iOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsematrixtriangularsolvedensefloat:0004:0002">iPadOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsematrixtriangularsolvedensefloat:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsematrixtriangularsolvedensefloat:0004:0004">macOS 10.11+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsematrixtriangularsolvedensefloat:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsematrixtriangularsolvedensefloat:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsematrixtriangularsolvedensefloat:0004:0007">watchOS 3.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func sparse_matrix_triangular_solve_dense_float(_ order: CBLAS_ORDER, _ transt: CBLAS_TRANSPOSE, _ nrhs: sparse_dimension, _ alpha: Float, _ T: sparse_matrix_float!, _ B: UnsafeMutablePointer<Float>!, _ ldb: sparse_dimension) -> sparse_status
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">성공하면 <a href="sparse_success.md">@@TOKEN_0@@</a>가 반환되며 연산 결과로 *B*가 업데이트됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0002"><code>order</code> 또는 <code>transt</code> 중 하나가 유효하지 않거나 <code>ldb</code>가 치수 요구사항을 충족하지 않으면 <a href="sparse_illegal_parameter.md">@@TOKEN_3@@</a>이 반환됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0003">오류가 발생하면 *B*는 변경되지 않습니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">*T*의 크기가 *N x N*이면 *B*의 크기는 *N x* <code>nrhs</code>여야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">행렬 *T*는 상삼각 행렬 또는 하삼각 행렬이어야 합니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0011:0001">❗ **중요**: Apple은 BLAS 및 LAPACK 라이브러리를 LAPACK 3.9.1에 맞추어 Accelerate 프레임워크에서 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0011:0002">iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, watchOS 26부터 라이브러리는 LAPACK 3.12.0과 일치합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0011:0003">이 새로운 인터페이스는 추가 기능과 함께 새 ILP64 인터페이스도 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0011:0004">새 인터페이스를 사용하려면 Accelerate 또는 vecLib 헤더를 포함하기 전에 <code>ACCELERATE_NEW_LAPACK</code>을(를) 정의해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0011:0005">ILP64 인터페이스의 경우 <code>ACCELERATE_LAPACK_ILP64</code>도 정의해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0011:0006">Swift 프로젝트에서는 Xcode 빌드 설정에서 전처리기 매크로로 <code>ACCELERATE_NEW_LAPACK=1</code> 및 <code>ACCELERATE_LAPACK_ILP64=1</code>을 지정해야 합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0012:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0001"><code>order</code>: 조밀 행렬 *B*의 저장 순서를 지정합니다. <code>CblasRowMajor</code> 또는 <code>CblasColMajor</code> 중 하나여야 합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0002"><code>transt</code>: 연산을 *T* 또는 *T*의 전치 행렬로 수행할지 지정합니다. <code>CblasNoTrans</code> 또는 <code>CblasTrans</code> 중 하나여야 합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0003"><code>nrhs</code>: 행렬 *B*의 열 개수입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0004"><code>alpha</code>: *T*의 스칼라 배수입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0005"><code>T</code>: 희소 삼각 행렬 *T*입니다. 상삼각 또는 하삼각 행렬이어야 합니다. 삼각 행렬이 아니면 <a href="sparse_illegal_parameter.md">@@TOKEN_1@@</a>가 반환됩니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0006"><code>B</code>: 조밀 행렬 *B*에 대한 포인터입니다. 행 수는 *T*의 열 수와 같아야 하며 열 수는 <code>nrhs</code>입니다. 이를 충족하지 않으면 동작이 정의되지 않습니다. 인수 <code>ldb</code>는 행 우선(행 major) 또는 열 우선(열 major)에서 한 행 또는 한 열 사이를 이동할 요소 수를 나타냅니다. 종료 시점에는 방정식의 해가 저장됩니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0007"><code>ldb</code>: *B*의 행(행 우선) 또는 열(열 우선) 사이 요소 간격입니다. 행 우선에서는 <code>nrhs</code>보다 크거나 같아야 하며 열 우선에서는 *A*의 열 수와 같거나 커야 합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0014:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="sparse_matrix_product_dense_double(_:_:_:_:_:_:_:_:_:">func sparse_matrix_product_dense_double(CBLAS_ORDER, CBLAS_TRANSPOSE, sparse_dimension, Double, sparse_matrix_double!, UnsafePointer&lt;Double&gt;!, sparse_dimension, UnsafeMutablePointer&lt;Double&gt;!, sparse_dimension) -&gt; sparse_status</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">밀집 행렬 *B*를 희소 행렬 *A*와 곱하고 결과를 밀집 행렬 *C*에 더합니다. 연산은 배정밀도 값으로 수행됩니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="sparse_matrix_product_dense_float(_:_:_:_:_:_:_:_:_:">func sparse_matrix_product_dense_float(CBLAS_ORDER, CBLAS_TRANSPOSE, sparse_dimension, Float, sparse_matrix_float!, UnsafePointer&lt;Float&gt;!, sparse_dimension, UnsafeMutablePointer&lt;Float&gt;!, sparse_dimension) -&gt; sparse_status</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">밀집 행렬 *B*를 희소 행렬 *A*와 곱하고 결과를 밀집 행렬 *C*에 더합니다. 연산은 단정밀도 값으로 수행됩니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="sparse_matrix_product_sparse_double(_:_:_:_:_:_:_:">func sparse_matrix_product_sparse_double(CBLAS_ORDER, CBLAS_TRANSPOSE, Double, sparse_matrix_double!, sparse_matrix_double!, UnsafeMutablePointer&lt;Double&gt;!, sparse_dimension) -&gt; sparse_status</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">희소 행렬 *B*를 희소 행렬 *A*와 곱하고 결과를 밀집 행렬 *C*에 더합니다. 연산은 배정밀도 값으로 수행됩니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="sparse_matrix_product_sparse_float(_:_:_:_:_:_:_:">func sparse_matrix_product_sparse_float(CBLAS_ORDER, CBLAS_TRANSPOSE, Float, sparse_matrix_float!, sparse_matrix_float!, UnsafeMutablePointer&lt;Float&gt;!, sparse_dimension) -&gt; sparse_status</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">희소 행렬 *B*에 희소 행렬 *A*를 곱하고 그 결과를 밀집 행렬 *C*에 더합니다. 모든 값은 단정밀도입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="sparse_matrix_triangular_solve_dense_double(_:_:_:_:_:_:_:">func sparse_matrix_triangular_solve_dense_double(CBLAS_ORDER, CBLAS_TRANSPOSE, sparse_dimension, Double, sparse_matrix_double!, UnsafeMutablePointer&lt;Double&gt;!, sparse_dimension) -&gt; sparse_status</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">밀집 행렬 *B*에서 방정식 *B = alpha * T⁻¹ * B*를 풀어 해를 계산합니다. 여기서 *B*는 밀집 행렬이고 *T*는 삼각 희소 행렬로, 두 행렬 모두 이중 정밀도 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001"><a href="https://developer.apple.com/documentation/accelerate/sparse_matrix_triangular_solve_dense_float(_:_:_:_:_:_:_:">View on Apple Developer</a>)*</span>

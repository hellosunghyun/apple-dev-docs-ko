---
source_path: "documentation/Accelerate/sparse-matrix-block-create-double.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/sparse-matrix-block-create-double"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sparsematrixblockcreatedouble:0000:0001">sparse_matrix_block_create_double(_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsematrixblockcreatedouble:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsematrixblockcreatedouble:0002:0001">고정된 블록 크기로 저장되는 블록 항목 형식의 배정밀도 희소 행렬 객체를 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsematrixblockcreatedouble:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:sparsematrixblockcreatedouble:0004:0001">iOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsematrixblockcreatedouble:0004:0002">iPadOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsematrixblockcreatedouble:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsematrixblockcreatedouble:0004:0004">macOS 10.11+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsematrixblockcreatedouble:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsematrixblockcreatedouble:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsematrixblockcreatedouble:0004:0007">watchOS 3.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func sparse_matrix_block_create_double(_ Mb: sparse_dimension, _ Nb: sparse_dimension, _ k: sparse_dimension, _ l: sparse_dimension) -> sparse_matrix_double!
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">항목을 받아들일 준비가 된 행렬 객체입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0002">오류가 발생하면 <code>nil</code>이 반환됩니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">블록 삽입 루틴에서 값을 받을 수 있도록 블록 항목 형식으로 저장되는 희소 행렬 객체를 생성합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">블록은 고정 크기 <code>k * l</code>입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0003">블록 항목 형식은 밀집 영역 블록이 블록 인덱스 <code>i,j</code>에 저장됨을 의미합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0004">요소 단위 형식을 사용하려면 비블록 버전의 create를 사용합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0005">이 행렬 객체에 값을 삽입하는 자세한 방법은 각 삽입 루틴 설명을 참조합니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0011:0001">❗ **중요**: Apple은 Accelerate 프레임워크에서 BLAS 및 LAPACK 라이브러리를 LAPACK 3.9.1에 맞춰 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0011:0002">iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, watchOS 26부터 라이브러리는 LAPACK 3.12.0에 맞춰 제공됩니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0011:0003">이 새 인터페이스는 추가 기능과 함께 새로운 ILP64 인터페이스를 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0011:0004">새 인터페이스를 사용하려면 Accelerate 또는 vecLib 헤더를 포함하기 전에 <code>ACCELERATE_NEW_LAPACK</code>를 정의합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0011:0005">ILP64 인터페이스의 경우 <code>ACCELERATE_LAPACK_ILP64</code>도 함께 정의합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0011:0006">Swift 프로젝트의 경우 Xcode 빌드 설정에서 전처리기 매크로로 <code>ACCELERATE_NEW_LAPACK=1</code> 및 <code>ACCELERATE_LAPACK_ILP64=1</code>을 지정합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0012:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0001"><code>Mb</code>: 행렬의 블록 단위 행 수입니다. 행렬의 전체 행 수는 <code>Mb * k</code>입니다. 0보다 커야 합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0002"><code>Nb</code>: 행렬의 블록 단위 열 수입니다. 행렬의 전체 열 수는 <code>Nb * l</code>입니다. 0보다 커야 합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0003"><code>k</code>: 희소 행렬에서 블록의 행 차원입니다. 0보다 커야 합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0004"><code>l</code>: 희소 행렬에서 블록의 열 차원입니다. 0보다 커야 합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0014:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="sparse_matrix_block_create_float(_:_:_:_:">func sparse_matrix_block_create_float(sparse_dimension, sparse_dimension, sparse_dimension, sparse_dimension) -&gt; sparse_matrix_float!</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">고정 블록 크기의 block-entry 형식으로 저장되는 단정밀도 희소 행렬 객체를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="sparse_matrix_variable_block_create_double(_:_:_:_:">func sparse_matrix_variable_block_create_double(sparse_dimension, sparse_dimension, UnsafePointer&lt;sparse_dimension&gt;!, UnsafePointer&lt;sparse_dimension&gt;!) -&gt; sparse_matrix_double!</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">가변 블록 크기의 block-entry 형식으로 저장되는 배정밀도 희소 행렬 객체를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="sparse_matrix_variable_block_create_float(_:_:_:_:">func sparse_matrix_variable_block_create_float(sparse_dimension, sparse_dimension, UnsafePointer&lt;sparse_dimension&gt;!, UnsafePointer&lt;sparse_dimension&gt;!) -&gt; sparse_matrix_float!</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">가변 블록 크기의 block-entry 형식으로 저장되는 단정밀도 희소 행렬 객체를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="sparse_insert_block_double(_:_:_:_:_:_:">func sparse_insert_block_double(sparse_matrix_double!, UnsafePointer&lt;Double&gt;!, sparse_dimension, sparse_dimension, sparse_index, sparse_index) -&gt; sparse_status</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">배정밀도 행렬에 밀집 블록 항목을 삽입합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="sparse_insert_block_float(_:_:_:_:_:_:">func sparse_insert_block_float(sparse_matrix_float!, UnsafePointer&lt;Float&gt;!, sparse_dimension, sparse_dimension, sparse_index, sparse_index) -&gt; sparse_status</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">단정밀도 행렬에 밀집 블록 항목을 삽입합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="sparse_matrix_block_create_double_complex(_:_:_:_:">func sparse_matrix_block_create_double_complex(sparse_dimension, sparse_dimension, sparse_dimension, sparse_dimension) -&gt; sparse_matrix_double_complex!</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0002"><a href="sparse_matrix_block_create_float_complex(_:_:_:_:">func sparse_matrix_block_create_float_complex(sparse_dimension, sparse_dimension, sparse_dimension, sparse_dimension) -&gt; sparse_matrix_float_complex!</a>.md)</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">*<a href="https://developer.apple.com/documentation/accelerate/sparse_matrix_block_create_double(_:_:_:_:">View on Apple Developer</a>)*</span>

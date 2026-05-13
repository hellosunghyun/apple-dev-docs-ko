---
source_path: "documentation/Accelerate/sparse-matrix-block-create-float.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/sparse-matrix-block-create-float"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sparsematrixblockcreatefloat:0000:0001">sparse_matrix_block_create_float(_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsematrixblockcreatefloat:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsematrixblockcreatefloat:0002:0001">Returns a single-precision sparse matrix object that is stored in block-entry format with a fixed block size.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsematrixblockcreatefloat:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:sparsematrixblockcreatefloat:0004:0001">iOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsematrixblockcreatefloat:0004:0002">iPadOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsematrixblockcreatefloat:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsematrixblockcreatefloat:0004:0004">macOS 10.11+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsematrixblockcreatefloat:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsematrixblockcreatefloat:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsematrixblockcreatefloat:0004:0007">watchOS 3.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func sparse_matrix_block_create_float(_ Mb: sparse_dimension, _ Nb: sparse_dimension, _ k: sparse_dimension, _ l: sparse_dimension) -> sparse_matrix_float!
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">Return Value</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">A matrix object that is ready for receiving entries.</span> <span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0002">If an error occurs, <code>nil</code> is returned.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">Create a sparse matrix object that is stored in block-entry format and is ready to receive values from the various block insert routines.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">Blocks are are of fixed dimensions <code>k * l</code>.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0003">Block-entry format means blocks of dense regions will be stored at block indices <code>i,j</code>.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0004">For point wise format use non block version of create.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0005">See the various insert routines for details on inserting values into this matrix object.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0011:0001">❗ **Important**: Apple provides the BLAS and LAPACK libraries under the Accelerate framework to be in line with LAPACK 3.9.1.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0011:0002">Starting with iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, and watchOS 26, the libraries are in line with LAPACK 3.12.0.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0011:0003">These new interfaces provide additional functionality, as well as a new ILP64 interface.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0011:0004">To use the new interfaces, define <code>ACCELERATE_NEW_LAPACK</code> before including the Accelerate or vecLib headers.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0011:0005">For ILP64 interfaces, also define <code>ACCELERATE_LAPACK_ILP64</code>.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0011:0006">For Swift projects, specify <code>ACCELERATE_NEW_LAPACK=1</code> and <code>ACCELERATE_LAPACK_ILP64=1</code> as preprocessor macros in Xcode build settings.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0012:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0001"><code>Mb</code>: The number of rows in terms of blocks of the matrix. There are a total of <code>Mb * k</code> rows in the matrix.  Must be greater than 0.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0002"><code>Nb</code>: The number of columns in terms of blocks of the matrix.  There are a total of <code>Nb * l</code> columns in the matrix.  Must be greater than 0.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0003"><code>k</code>: The row dimension of a block in the sparse matrix.  Must be greater than 0.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0004"><code>l</code>: The column dimension of a block in the sparse matrix.  Must be greater than 0.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0014:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="sparse_matrix_block_create_double(_:_:_:_:">func sparse_matrix_block_create_double(sparse_dimension, sparse_dimension, sparse_dimension, sparse_dimension) -&gt; sparse_matrix_double!</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">Returns a double-precision sparse matrix object that is stored in block-entry format with a fixed block size.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="sparse_matrix_variable_block_create_double(_:_:_:_:">func sparse_matrix_variable_block_create_double(sparse_dimension, sparse_dimension, UnsafePointer&lt;sparse_dimension&gt;!, UnsafePointer&lt;sparse_dimension&gt;!) -&gt; sparse_matrix_double!</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">Returns a double-precision sparse matrix object that is stored in block-entry format with a variable block size.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="sparse_matrix_variable_block_create_float(_:_:_:_:">func sparse_matrix_variable_block_create_float(sparse_dimension, sparse_dimension, UnsafePointer&lt;sparse_dimension&gt;!, UnsafePointer&lt;sparse_dimension&gt;!) -&gt; sparse_matrix_float!</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">Returns a single-precision sparse matrix object that is stored in block-entry format with a variable block size.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="sparse_insert_block_double(_:_:_:_:_:_:">func sparse_insert_block_double(sparse_matrix_double!, UnsafePointer&lt;Double&gt;!, sparse_dimension, sparse_dimension, sparse_index, sparse_index) -&gt; sparse_status</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">Inserts a dense block of entries into a double-precision matrix.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="sparse_insert_block_float(_:_:_:_:_:_:">func sparse_insert_block_float(sparse_matrix_float!, UnsafePointer&lt;Float&gt;!, sparse_dimension, sparse_dimension, sparse_index, sparse_index) -&gt; sparse_status</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">Inserts a dense block of entries into a single-precision matrix.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="sparse_matrix_block_create_double_complex(_:_:_:_:">func sparse_matrix_block_create_double_complex(sparse_dimension, sparse_dimension, sparse_dimension, sparse_dimension) -&gt; sparse_matrix_double_complex!</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0002"><a href="sparse_matrix_block_create_float_complex(_:_:_:_:">func sparse_matrix_block_create_float_complex(sparse_dimension, sparse_dimension, sparse_dimension, sparse_dimension) -&gt; sparse_matrix_float_complex!</a>.md)</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">더 긴 초점 거리를 가진 기본 구성 요소 장치의 대체 선택 대상으로 사용할 수 있는 구성 요소 장치입니다.</span>

---
source_path: "documentation/Accelerate/sparse-extract-sparse-row-double-complex.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/sparse-extract-sparse-row-double-complex"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sparseextractsparserowdoublecomplex:0000:0001">sparse_extract_sparse_row_double_complex(_:_:_:_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparseextractsparserowdoublecomplex:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparseextractsparserowdoublecomplex:0002:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:sparseextractsparserowdoublecomplex:0003:0001">iOS 18.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparseextractsparserowdoublecomplex:0003:0002">iPadOS 18.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparseextractsparserowdoublecomplex:0003:0003">Mac Catalyst 18.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparseextractsparserowdoublecomplex:0003:0004">macOS 15.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparseextractsparserowdoublecomplex:0003:0005">tvOS 18.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparseextractsparserowdoublecomplex:0003:0006">visionOS 2.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparseextractsparserowdoublecomplex:0003:0007">watchOS 11.5+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0004:0001">Declaration</span>

```swift
func sparse_extract_sparse_row_double_complex(_ A: sparse_matrix_double_complex!, _ row: sparse_index, _ column_start: sparse_index, _ column_end: UnsafeMutablePointer<sparse_index>!, _ nz: sparse_dimension, _ val: OpaquePointer!, _ jndx: UnsafeMutablePointer<sparse_index>!) -> sparse_status
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0006:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0007:0001"><a href="sparse_extract_sparse_row_double(_:_:_:_:_:_:_:">func sparse_extract_sparse_row_double(sparse_matrix_double!, sparse_index, sparse_index, UnsafeMutablePointer&lt;sparse_index&gt;!, sparse_dimension, UnsafeMutablePointer&lt;Double&gt;!, UnsafeMutablePointer&lt;sparse_index&gt;!) -&gt; sparse_status</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0008:0001">이중 정밀도 희소 행렬의 지정된 행에서 값을 추출합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0009:0001"><a href="sparse_extract_sparse_row_float(_:_:_:_:_:_:_:">func sparse_extract_sparse_row_float(sparse_matrix_float!, sparse_index, sparse_index, UnsafeMutablePointer&lt;sparse_index&gt;!, sparse_dimension, UnsafeMutablePointer&lt;Float&gt;!, UnsafeMutablePointer&lt;sparse_index&gt;!) -&gt; sparse_status</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0010:0001">단정도 희소 행렬의 지정된 행에서 값을 추출합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="sparse_extract_sparse_column_double(_:_:_:_:_:_:_:">func sparse_extract_sparse_column_double(sparse_matrix_double!, sparse_index, sparse_index, UnsafeMutablePointer&lt;sparse_index&gt;!, sparse_dimension, UnsafeMutablePointer&lt;Double&gt;!, UnsafeMutablePointer&lt;sparse_index&gt;!) -&gt; sparse_status</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">이중 정밀도 희소 행렬의 지정된 열에서 값을 추출합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="sparse_extract_sparse_column_float(_:_:_:_:_:_:_:">func sparse_extract_sparse_column_float(sparse_matrix_float!, sparse_index, sparse_index, UnsafeMutablePointer&lt;sparse_index&gt;!, sparse_dimension, UnsafeMutablePointer&lt;Float&gt;!, UnsafeMutablePointer&lt;sparse_index&gt;!) -&gt; sparse_status</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">단정도 희소 행렬의 지정된 열에서 값을 추출합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="sparse_extract_sparse_column_double_complex(_:_:_:_:_:_:_:">func sparse_extract_sparse_column_double_complex(sparse_matrix_double_complex!, sparse_index, sparse_index, UnsafeMutablePointer&lt;sparse_index&gt;!, sparse_dimension, OpaquePointer!, UnsafeMutablePointer&lt;sparse_index&gt;!) -&gt; sparse_status</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0002"><a href="sparse_extract_sparse_column_float_complex(_:_:_:_:_:_:_:">func sparse_extract_sparse_column_float_complex(sparse_matrix_float_complex!, sparse_index, sparse_index, UnsafeMutablePointer&lt;sparse_index&gt;!, sparse_dimension, OpaquePointer!, UnsafeMutablePointer&lt;sparse_index&gt;!) -&gt; sparse_status</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0003"><a href="sparse_extract_sparse_row_float_complex(_:_:_:_:_:_:_:">func sparse_extract_sparse_row_float_complex(sparse_matrix_float_complex!, sparse_index, sparse_index, UnsafeMutablePointer&lt;sparse_index&gt;!, sparse_dimension, OpaquePointer!, UnsafeMutablePointer&lt;sparse_index&gt;!) -&gt; sparse_status</a>.md)</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/accelerate/sparse_extract_sparse_row_double_complex(_:_:_:_:_:_:_:">View on Apple Developer</a>)*</span>

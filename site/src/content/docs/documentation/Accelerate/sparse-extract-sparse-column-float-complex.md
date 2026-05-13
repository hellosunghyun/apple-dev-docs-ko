---
source_path: "documentation/Accelerate/sparse-extract-sparse-column-float-complex.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/sparse-extract-sparse-column-float-complex"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sparseextractsparsecolumnfloatcomplex:0000:0001">sparse_extract_sparse_column_float_complex(_:_:_:_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparseextractsparsecolumnfloatcomplex:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparseextractsparsecolumnfloatcomplex:0002:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:sparseextractsparsecolumnfloatcomplex:0003:0001">iOS 18.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparseextractsparsecolumnfloatcomplex:0003:0002">iPadOS 18.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparseextractsparsecolumnfloatcomplex:0003:0003">Mac Catalyst 18.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparseextractsparsecolumnfloatcomplex:0003:0004">macOS 15.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparseextractsparsecolumnfloatcomplex:0003:0005">tvOS 18.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparseextractsparsecolumnfloatcomplex:0003:0006">visionOS 2.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparseextractsparsecolumnfloatcomplex:0003:0007">watchOS 11.5+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0004:0001">Declaration</span>

```swift
func sparse_extract_sparse_column_float_complex(_ A: sparse_matrix_float_complex!, _ column: sparse_index, _ row_start: sparse_index, _ row_end: UnsafeMutablePointer<sparse_index>!, _ nz: sparse_dimension, _ val: OpaquePointer!, _ indx: UnsafeMutablePointer<sparse_index>!) -> sparse_status
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0006:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0007:0001"><a href="sparse_extract_sparse_row_double(_:_:_:_:_:_:_:">func sparse_extract_sparse_row_double(sparse_matrix_double!, sparse_index, sparse_index, UnsafeMutablePointer&lt;sparse_index&gt;!, sparse_dimension, UnsafeMutablePointer&lt;Double&gt;!, UnsafeMutablePointer&lt;sparse_index&gt;!) -&gt; sparse_status</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0008:0001">Extracts values from a specified row of a double-precision sparse matrix.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0009:0001"><a href="sparse_extract_sparse_row_float(_:_:_:_:_:_:_:">func sparse_extract_sparse_row_float(sparse_matrix_float!, sparse_index, sparse_index, UnsafeMutablePointer&lt;sparse_index&gt;!, sparse_dimension, UnsafeMutablePointer&lt;Float&gt;!, UnsafeMutablePointer&lt;sparse_index&gt;!) -&gt; sparse_status</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0010:0001">Extracts values from a specified row of a single-precision sparse matrix.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="sparse_extract_sparse_column_double(_:_:_:_:_:_:_:">func sparse_extract_sparse_column_double(sparse_matrix_double!, sparse_index, sparse_index, UnsafeMutablePointer&lt;sparse_index&gt;!, sparse_dimension, UnsafeMutablePointer&lt;Double&gt;!, UnsafeMutablePointer&lt;sparse_index&gt;!) -&gt; sparse_status</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">Extracts values from a specified column of a double-precision sparse matrix.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="sparse_extract_sparse_column_float(_:_:_:_:_:_:_:">func sparse_extract_sparse_column_float(sparse_matrix_float!, sparse_index, sparse_index, UnsafeMutablePointer&lt;sparse_index&gt;!, sparse_dimension, UnsafeMutablePointer&lt;Float&gt;!, UnsafeMutablePointer&lt;sparse_index&gt;!) -&gt; sparse_status</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">현재 활성화된 최소 프레임 지속 시간입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="sparse_extract_sparse_column_double_complex(_:_:_:_:_:_:_:">func sparse_extract_sparse_column_double_complex(sparse_matrix_double_complex!, sparse_index, sparse_index, UnsafeMutablePointer&lt;sparse_index&gt;!, sparse_dimension, OpaquePointer!, UnsafeMutablePointer&lt;sparse_index&gt;!) -&gt; sparse_status</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0002"><a href="sparse_extract_sparse_row_float_complex(_:_:_:_:_:_:_:">func sparse_extract_sparse_row_float_complex(sparse_matrix_float_complex!, sparse_index, sparse_index, UnsafeMutablePointer&lt;sparse_index&gt;!, sparse_dimension, OpaquePointer!, UnsafeMutablePointer&lt;sparse_index&gt;!) -&gt; sparse_status</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0003"><a href="sparse_extract_sparse_row_double_complex(_:_:_:_:_:_:_:">func sparse_extract_sparse_row_double_complex(sparse_matrix_double_complex!, sparse_index, sparse_index, UnsafeMutablePointer&lt;sparse_index&gt;!, sparse_dimension, OpaquePointer!, UnsafeMutablePointer&lt;sparse_index&gt;!) -&gt; sparse_status</a>.md)</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">인덱스 파일에 나열된 인터스티셜 자산을 다운로드합니다.</span>

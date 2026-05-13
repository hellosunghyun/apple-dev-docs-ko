---
source_path: "documentation/Accelerate/sparse-extract-sparse-row-double.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/sparse-extract-sparse-row-double"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sparseextractsparserowdouble:0000:0001">sparse_extract_sparse_row_double(_:_:_:_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparseextractsparserowdouble:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparseextractsparserowdouble:0002:0001">Extracts values from a specified row of a double-precision sparse matrix.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparseextractsparserowdouble:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:sparseextractsparserowdouble:0004:0001">iOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparseextractsparserowdouble:0004:0002">iPadOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparseextractsparserowdouble:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparseextractsparserowdouble:0004:0004">macOS 10.11+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparseextractsparserowdouble:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparseextractsparserowdouble:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparseextractsparserowdouble:0004:0007">watchOS 3.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func sparse_extract_sparse_row_double(_ A: sparse_matrix_double!, _ row: sparse_index, _ column_start: sparse_index, _ column_end: UnsafeMutablePointer<sparse_index>!, _ nz: sparse_dimension, _ val: UnsafeMutablePointer<Double>!, _ jndx: UnsafeMutablePointer<sparse_index>!) -> sparse_status
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">Return Value</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">On success <code>val</code> and <code>jndx</code> have been updated with the nonzero values of the <code>row</code>’th row, <code>column_end</code> holds the column index of the next nonzero value, and the number of nonzero values written are returned.</span> <span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0002">If <code>A</code> creation requirements are not met, <a href="sparse_illegal_parameter.md">@@TOKEN_1@@</a> is returned and <code>val</code> and <code>jndx</code> are unchanged.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001"><code>CGImageSource</code> 함수를 사용해 깊이 데이터(및 이미지 데이터)가 포함된 HEIF, JPEG 또는 DNG 파일에서 읽을 때, <a href="https://developer.apple.com/documentation/ImageIO/CGImageSourceCopyAuxiliaryDataInfoAtIndex(_:_:_:">@@TOKEN_1@@</a>) 함수를 통해 원시 깊이 맵 정보를 로드한 뒤, 아래와 같이 이 초기화 메서드를 사용해 <a href="avdepthdata.md">@@TOKEN_2@@</a> 객체를 생성할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">The number of nonzero values extracted is limited by <code>nz</code>, and the number of nonzero’s written to <code>jndx</code> and <code>val</code> are returned.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0003">Additionally, the column index of the next nonzero value is returned in <code>column_end</code>.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0004">For example if <code>nz</code> is returned, not all nonzero values have been extracted, and a second extract can start from <code>column_end</code>.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0011:0001">❗ **Important**: Apple provides the BLAS and LAPACK libraries under the Accelerate framework to be in line with LAPACK 3.9.1.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0011:0002">Starting with iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, and watchOS 26, the libraries are in line with LAPACK 3.12.0.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0011:0003">These new interfaces provide additional functionality, as well as a new ILP64 interface.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0011:0004">To use the new interfaces, define <code>ACCELERATE_NEW_LAPACK</code> before including the Accelerate or vecLib headers.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0011:0005">For ILP64 interfaces, also define <code>ACCELERATE_LAPACK_ILP64</code>.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0011:0006">For Swift projects, specify <code>ACCELERATE_NEW_LAPACK=1</code> and <code>ACCELERATE_LAPACK_ILP64=1</code> as preprocessor macros in Xcode build settings.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0012:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0001"><code>imageSourceAuxDataInfoDictionary</code>: <a href="https://developer.apple.com/documentation/ImageIO/CGImageSourceCopyAuxiliaryDataInfoAtIndex(_:_:_:">@@TOKEN_1@@</a>) 함수가 제공하는 형식의 원시 깊이 관련 정보 사전입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0002"><code>row</code>: The row for value extraction.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0003"><code>column_start</code>: The index of the column to start extraction.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0004"><code>column_end</code>: On return, holds the column index of the next nonzero value.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0005"><code>nz</code>: The number of values to extract from <code>A</code>.  Each of <code>jndx</code> and <code>val</code> are of size <code>nz</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0006"><code>val</code>: Pointer to array to hold the values extracted from the sparse matrix.  The value is extracted from the location specified by the corresponding indices of <code>row</code> and <code>jndx</code>.  Must be of size <code>nz</code> elements.  If less than <code>nz</code> nonzero values are found, then the last <code>nz - actual_nonzero_count</code> elements of val are untouched.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0007"><code>jndx</code>: An array to hold the extracted column indices that correspond to the values in <code>val</code>. Note that these indices are relative to the matrix row and not the starting column index specified by <code>column_start</code>.  Returned indices are 0 based (first element of pointer is <code>ptr[0]</code>).  Must be of size <code>nz</code> elements.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0014:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001">[func dictionaryRepresentation(forAuxiliaryDataType: AutoreleasingUnsafeMutablePointer&lt;NSString?&gt;?) -&gt; [AnyHashable : Any]?](avdepthdata/dictionaryrepresentation(forauxiliarydatatype:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">이미지 파일에 쓰기에 적합한 깊이 데이터의 사전 표현을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="sparse_extract_sparse_column_double(_:_:_:_:_:_:_:">func sparse_extract_sparse_column_double(sparse_matrix_double!, sparse_index, sparse_index, UnsafeMutablePointer&lt;sparse_index&gt;!, sparse_dimension, UnsafeMutablePointer&lt;Double&gt;!, UnsafeMutablePointer&lt;sparse_index&gt;!) -&gt; sparse_status</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avdepthdata/init(fromdictionaryrepresentation:">View on Apple Developer</a>)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="sparse_extract_sparse_column_float(_:_:_:_:_:_:_:">func sparse_extract_sparse_column_float(sparse_matrix_float!, sparse_index, sparse_index, UnsafeMutablePointer&lt;sparse_index&gt;!, sparse_dimension, UnsafeMutablePointer&lt;Float&gt;!, UnsafeMutablePointer&lt;sparse_index&gt;!) -&gt; sparse_status</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">Extracts values from a specified column of a single-precision sparse matrix.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="sparse_extract_sparse_column_double_complex(_:_:_:_:_:_:_:">func sparse_extract_sparse_column_double_complex(sparse_matrix_double_complex!, sparse_index, sparse_index, UnsafeMutablePointer&lt;sparse_index&gt;!, sparse_dimension, OpaquePointer!, UnsafeMutablePointer&lt;sparse_index&gt;!) -&gt; sparse_status</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0002"><a href="sparse_extract_sparse_column_float_complex(_:_:_:_:_:_:_:">func sparse_extract_sparse_column_float_complex(sparse_matrix_float_complex!, sparse_index, sparse_index, UnsafeMutablePointer&lt;sparse_index&gt;!, sparse_dimension, OpaquePointer!, UnsafeMutablePointer&lt;sparse_index&gt;!) -&gt; sparse_status</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0003"><a href="sparse_extract_sparse_row_float_complex(_:_:_:_:_:_:_:">func sparse_extract_sparse_row_float_complex(sparse_matrix_float_complex!, sparse_index, sparse_index, UnsafeMutablePointer&lt;sparse_index&gt;!, sparse_dimension, OpaquePointer!, UnsafeMutablePointer&lt;sparse_index&gt;!) -&gt; sparse_status</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0004"><a href="sparse_extract_sparse_row_double_complex(_:_:_:_:_:_:_:">func sparse_extract_sparse_row_double_complex(sparse_matrix_double_complex!, sparse_index, sparse_index, UnsafeMutablePointer&lt;sparse_index&gt;!, sparse_dimension, OpaquePointer!, UnsafeMutablePointer&lt;sparse_index&gt;!) -&gt; sparse_status</a>.md)</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/accelerate/sparse_extract_sparse_row_double(_:_:_:_:_:_:_:">View on Apple Developer</a>)*</span>

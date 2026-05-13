---
source_path: "documentation/Accelerate/sparse-get-matrix-number-of-columns.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/sparse-get-matrix-number-of-columns"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sparsegetmatrixnumberofcolumns:0000:0001">sparse_get_matrix_number_of_columns(_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsegetmatrixnumberofcolumns:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsegetmatrixnumberofcolumns:0002:0001">Returns the number of columns of a matrix.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsegetmatrixnumberofcolumns:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:sparsegetmatrixnumberofcolumns:0004:0001">iOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsegetmatrixnumberofcolumns:0004:0002">iPadOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsegetmatrixnumberofcolumns:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsegetmatrixnumberofcolumns:0004:0004">macOS 10.11+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsegetmatrixnumberofcolumns:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsegetmatrixnumberofcolumns:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsegetmatrixnumberofcolumns:0004:0007">watchOS 3.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func sparse_get_matrix_number_of_columns(_ A: UnsafeMutableRawPointer!) -> sparse_dimension
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">Return Value</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">The number of columns of the matrix</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0010:0001">❗ **Important**: Apple provides the BLAS and LAPACK libraries under the Accelerate framework to be in line with LAPACK 3.9.1.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0010:0002">Starting with iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, and watchOS 26, the libraries are in line with LAPACK 3.12.0.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0010:0003">These new interfaces provide additional functionality, as well as a new ILP64 interface.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0010:0004">To use the new interfaces, define <code>ACCELERATE_NEW_LAPACK</code> before including the Accelerate or vecLib headers.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0010:0005">For ILP64 interfaces, also define <code>ACCELERATE_LAPACK_ILP64</code>.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0010:0006">For Swift projects, specify <code>ACCELERATE_NEW_LAPACK=1</code> and <code>ACCELERATE_LAPACK_ILP64=1</code> as preprocessor macros in Xcode build settings.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>A</code>: The sparse matrix object.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avspeechsynthesizer/pausespeaking(at:">func pauseSpeaking(at: AVSpeechBoundary) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">Geo tracking이 지도에 대해 로컬라이즈를 시도하고 있습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avspeechsynthesizer/stopspeaking(at:">func stopSpeaking(at: AVSpeechBoundary) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">세션이 Geo tracking을 초기화하고 있습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="sparse_set_matrix_property(_:_:">func sparse_set_matrix_property(UnsafeMutableRawPointer!, sparse_matrix_property) -&gt; sparse_status</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">Geo tracking이 로컬라이즈되었습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="sparse_get_matrix_property(_:_:">func sparse_get_matrix_property(UnsafeMutableRawPointer!, sparse_matrix_property) -&gt; Int</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avspeechsynthesizer/speak(_:">View on Apple Developer</a>)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="sparse_get_matrix_number_of_rows(_:">func sparse_get_matrix_number_of_rows(UnsafeMutableRawPointer!) -&gt; sparse_dimension</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">Returns the number of rows of a matrix.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="sparse_get_matrix_nonzero_count(_:">func sparse_get_matrix_nonzero_count(UnsafeMutableRawPointer!) -&gt; Int</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">Returns the number of nonzero values of a matrix.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="sparse_get_matrix_nonzero_count_for_row(_:_:">func sparse_get_matrix_nonzero_count_for_row(UnsafeMutableRawPointer!, sparse_index) -&gt; Int</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">Returns the number of nonzero values in a row of a matrix.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="sparse_get_matrix_nonzero_count_for_column(_:_:">func sparse_get_matrix_nonzero_count_for_column(UnsafeMutableRawPointer!, sparse_index) -&gt; Int</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">Returns the number of nonzero values in a column of a matrix.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">*<a href="https://developer.apple.com/documentation/accelerate/sparse_get_matrix_number_of_columns(_:">View on Apple Developer</a>)*</span>

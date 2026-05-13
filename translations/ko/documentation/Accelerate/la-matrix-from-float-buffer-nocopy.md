---
source_path: "documentation/Accelerate/la-matrix-from-float-buffer-nocopy.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/la-matrix-from-float-buffer-nocopy"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:lamatrixfromfloatbuffernocopy:0000:0001">la_matrix_from_float_buffer_nocopy(_:_:_:_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:lamatrixfromfloatbuffernocopy:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:lamatrixfromfloatbuffernocopy:0002:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:lamatrixfromfloatbuffernocopy:0003:0001">iOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:lamatrixfromfloatbuffernocopy:0003:0002">iPadOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:lamatrixfromfloatbuffernocopy:0003:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:lamatrixfromfloatbuffernocopy:0003:0004">macOS 10.10+</span>
- <span class="ko-segment" data-segment-id="seg:list:lamatrixfromfloatbuffernocopy:0003:0005">tvOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:lamatrixfromfloatbuffernocopy:0003:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:lamatrixfromfloatbuffernocopy:0003:0007">watchOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0004:0001">Declaration</span>

```swift
func la_matrix_from_float_buffer_nocopy(_ buffer: UnsafeMutablePointer<Float>, _ matrix_rows: la_count_t, _ matrix_cols: la_count_t, _ matrix_row_stride: la_count_t, _ matrix_hint: la_hint_t, _ deallocator: la_deallocator_t?, _ attributes: la_attribute_t) -> la_object_t
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0006:0001">Return Value</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0007:0001">A new la_object_t object representing the matrix.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0008:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">Create a matrix using data from a buffer of floats.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">Ownership of the buffer is transferred from the caller to the returned object.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">This function creates an object representing a matrix whose entries are copied out of the supplied buffer of floats.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">Negative or zero strides are not supported by this function (but note that you can reverse the rows or columns using the la_matrix_slice function defined below).</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">This routine assumes that the elements of the matrix are stored in the buffer in row-major order.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0002">If you need to work with data that is in column-major order, you can do that as follows:</span>

1. <span class="ko-segment" data-segment-id="seg:list:discussion:0012:0001">Use this routine to create a matrix object, but pass the number of columns in your matrix for the matrix_rows parameter and vice-versa.  For the matrix_row_stride parameter, pass the column stride of your matrix.</span>
2. <span class="ko-segment" data-segment-id="seg:list:discussion:0012:0002">Make a new matrix transpose object from the object created in step 1.  The resulting object represents the matrix that you want to work with.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0013:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0001"><code>buffer</code>: Pointer to float data providing the elements of the matrix.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0002"><code>matrix_rows</code>: The number of rows in the matrix.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0003"><code>matrix_cols</code>: The number of columns in the matrix.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0004"><code>matrix_row_stride</code>: The offset in the buffer (measured in floats) between corresponding elements in consecutive rows of the matrix.  Must be positive.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0005"><code>matrix_hint</code>: Flags describing special matrix structures.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0006"><code>deallocator</code>: Callback to be used to deallocate the buffer when the returned matrix object is destroyed.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0007"><code>attributes</code>: Attributes to attach to the new la_object_t object.  Pass LA_DEFAULT_ATTRIBUTES to create a normal object.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0015:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="caxpy_(_:_:_:_:_:_:">func caxpy_(UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0002"><a href="ccopy_(_:_:_:_:_:">func ccopy_(UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0003"><a href="cdotc_(_:_:_:_:_:_:">func cdotc_(OpaquePointer, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0004"><a href="cdotu_(_:_:_:_:_:_:">func cdotu_(OpaquePointer, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0005"><a href="cgbmv_(_:_:_:_:_:_:_:_:_:_:_:_:_:">func cgbmv_(UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0006"><a href="cgemm_(_:_:_:_:_:_:_:_:_:_:_:_:_:">func cgemm_(UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0007"><a href="cgemv_(_:_:_:_:_:_:_:_:_:_:_:">func cgemv_(UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0008"><a href="cgerc_(_:_:_:_:_:_:_:_:_:">func cgerc_(UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0009"><a href="cgeru_(_:_:_:_:_:_:_:_:_:">func cgeru_(UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0010"><a href="chbmv_(_:_:_:_:_:_:_:_:_:_:_:">func chbmv_(UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0011"><a href="chemm_(_:_:_:_:_:_:_:_:_:_:_:_:">func chemm_(UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0012"><a href="chemv_(_:_:_:_:_:_:_:_:_:_:">func chemv_(UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0013"><a href="cher2_(_:_:_:_:_:_:_:_:_:">func cher2_(UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0014"><a href="cher2k_(_:_:_:_:_:_:_:_:_:_:_:_:">func cher2k_(UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;Float&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0015"><a href="cher_(_:_:_:_:_:_:_:">func cher_(UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;Float&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;)</a>.md)</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001"><a href="https://developer.apple.com/documentation/accelerate/la_matrix_from_float_buffer_nocopy(_:_:_:_:_:_:_:">Apple Developer에서 보기</a>)</span>

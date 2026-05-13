---
source_path: "documentation/Accelerate/la-matrix-to-float-buffer.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/la-matrix-to-float-buffer"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:lamatrixtofloatbuffer:0000:0001">la_matrix_to_float_buffer(_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:lamatrixtofloatbuffer:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:lamatrixtofloatbuffer:0002:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:lamatrixtofloatbuffer:0003:0001">iOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:lamatrixtofloatbuffer:0003:0002">iPadOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:lamatrixtofloatbuffer:0003:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:lamatrixtofloatbuffer:0003:0004">macOS 10.10+</span>
- <span class="ko-segment" data-segment-id="seg:list:lamatrixtofloatbuffer:0003:0005">tvOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:lamatrixtofloatbuffer:0003:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:lamatrixtofloatbuffer:0003:0007">watchOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0004:0001">Declaration</span>

```swift
func la_matrix_to_float_buffer(_ buffer: UnsafeMutablePointer<Float>, _ buffer_row_stride: la_count_t, _ matrix: la_object_t) -> la_status_t
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0006:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0007:0001">행렬의 요소를 버퍼에 저장합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">버퍼는 저장할 행렬을 수용할 수 있을 만큼 충분히 커야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">특히 다음을 저장할 수 있을 만큼 충분한 공간이 있어야 합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">buffer_row_stride*(la_matrix_rows(matrix)-1) + la_matrix_cols(matrix)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">float 요소입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">이 함수는 벡터와 행렬의 내용을 저장하는 것도 지원합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0002">길이가 n인 벡터는 이 함수에서 rows(matrix) x cols(matrix)로 해석됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0003">객체가 벡터 또는 행렬이며 오류 상태가 아닌 경우, 해당 내용이 버퍼에 저장됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0004">오류 상태인 경우 NaN이 버퍼에 저장됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0001">객체가 행렬 또는 벡터가 아니면 버퍼에 아무것도 쓰지 않으며 LA_INVALID_PARAMETER_ERROR가 반환됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0013:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0001"><code>buffer</code>: 대상 버퍼에 대한 포인터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0002"><code>buffer_row_stride</code>: 행렬의 연속된 행에서 대응 요소의 대상 버퍼 오프셋(단위: float)입니다. 양수여야 합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0003"><code>matrix</code>: 저장할 행렬입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0015:0001">참고 항목</span>

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

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">*<a href="https://developer.apple.com/documentation/accelerate/la_matrix_to_float_buffer(_:_:_:">View on Apple Developer</a>)*</span>

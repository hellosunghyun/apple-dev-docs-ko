---
source_path: "documentation/Accelerate/la-elementwise-product.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/la-elementwise-product"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:laelementwiseproduct:0000:0001">la_elementwise_product(_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:laelementwiseproduct:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:laelementwiseproduct:0002:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:laelementwiseproduct:0003:0001">iOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:laelementwiseproduct:0003:0002">iPadOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:laelementwiseproduct:0003:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:laelementwiseproduct:0003:0004">macOS 10.10+</span>
- <span class="ko-segment" data-segment-id="seg:list:laelementwiseproduct:0003:0005">tvOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:laelementwiseproduct:0003:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:laelementwiseproduct:0003:0007">watchOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0004:0001">Declaration</span>

```swift
func la_elementwise_product(_ obj_left: la_object_t, _ obj_right: la_object_t) -> la_object_t
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0006:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0007:0001">Compute the element-wise product of two vectors or matrices.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 키에 대응하는 값은 <code>NSString</code>이며, <code>AVPlayerInterstitialEventController</code>에 <code>localizedStringsBundle</code>이 설정되어 있고 건너뛰기 이벤트 상태가 변경된 <code>AVPlayerInterstitialEvent</code>에 <code>skipControlLocalizedLabelBundleKey</code>가 있는 경우 지역화된 skip label입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">The two operands must have the same dimensions.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">If they do not, the result will have status LA_DIMENSION_MISMATCH_ERROR.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0003">For simplicity, a vector of length n, a 1xn matrix, and an nx1 matrix are all treated as having the same dimensions.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0004">If 1xn and nx1 or nx1 and 1xn vectors are passed, an nx1 vector will be created, otherwise orientation matches input.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">현재 샘플이 <code>audioSamplePacketRefreshCount</code>가 <code>0</code>인 상태에서 독립적으로 디코딩 가능하면 커서를 다시 배치할 필요가 없습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="caxpy_(_:_:_:_:_:_:">func caxpy_(UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0002"><a href="ccopy_(_:_:_:_:_:">func ccopy_(UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0003"><a href="cdotc_(_:_:_:_:_:_:">func cdotc_(OpaquePointer, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0004"><a href="cdotu_(_:_:_:_:_:_:">func cdotu_(OpaquePointer, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0005"><a href="cgbmv_(_:_:_:_:_:_:_:_:_:_:_:_:_:">func cgbmv_(UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0006"><a href="cgemm_(_:_:_:_:_:_:_:_:_:_:_:_:_:">func cgemm_(UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0007"><a href="cgemv_(_:_:_:_:_:_:_:_:_:_:_:">func cgemv_(UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0008"><a href="cgerc_(_:_:_:_:_:_:_:_:_:">func cgerc_(UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0009"><a href="cgeru_(_:_:_:_:_:_:_:_:_:">func cgeru_(UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0010"><a href="chbmv_(_:_:_:_:_:_:_:_:_:_:_:">func chbmv_(UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0011"><a href="chemm_(_:_:_:_:_:_:_:_:_:_:_:_:">func chemm_(UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0012"><a href="chemv_(_:_:_:_:_:_:_:_:_:_:">func chemv_(UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0013"><a href="cher2_(_:_:_:_:_:_:_:_:_:">func cher2_(UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0014"><a href="cher2k_(_:_:_:_:_:_:_:_:_:_:_:_:">func cher2k_(UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;Float&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0015"><a href="cher_(_:_:_:_:_:_:_:">func cher_(UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;Float&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;)</a>.md)</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">*<a href="https://developer.apple.com/documentation/accelerate/la_elementwise_product(_:_:">View on Apple Developer</a>)*</span>

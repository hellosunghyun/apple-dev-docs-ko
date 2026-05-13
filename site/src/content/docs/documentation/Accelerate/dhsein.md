---
source_path: "documentation/Accelerate/dhsein.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/dhsein"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:dhsein:0000:0001">dhsein_(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:dhsein:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:dhsein:0002:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:dhsein:0003:0001">iOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:dhsein:0003:0002">iPadOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:dhsein:0003:0003">Mac Catalyst 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:dhsein:0003:0004">macOS 13.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:dhsein:0003:0005">tvOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:dhsein:0003:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:dhsein:0003:0007">watchOS 9.4+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0004:0001">Declaration</span>

```swift
func dhsein_(_ side: UnsafePointer<CChar>, _ eigsrc: UnsafePointer<CChar>, _ initv: UnsafePointer<CChar>, _ select: UnsafeMutablePointer<__LAPACK_bool>?, _ n: UnsafePointer<__LAPACK_int>, _ h: UnsafePointer<Double>?, _ ldh: UnsafePointer<__LAPACK_int>, _ wr: UnsafeMutablePointer<Double>?, _ wi: UnsafePointer<Double>?, _ vl: UnsafeMutablePointer<Double>?, _ ldvl: UnsafePointer<__LAPACK_int>, _ vr: UnsafeMutablePointer<Double>?, _ ldvr: UnsafePointer<__LAPACK_int>, _ mm: UnsafePointer<__LAPACK_int>, _ m: UnsafeMutablePointer<__LAPACK_int>, _ work: UnsafeMutablePointer<Double>, _ ifaill: UnsafeMutablePointer<__LAPACK_int>?, _ ifailr: UnsafeMutablePointer<__LAPACK_int>?, _ info: UnsafeMutablePointer<__LAPACK_int>)
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0006:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0007:0001"><a href="caxpy_(_:_:_:_:_:_:">func caxpy_(UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0007:0002"><a href="ccopy_(_:_:_:_:_:">func ccopy_(UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0007:0003"><a href="cdotc_(_:_:_:_:_:_:">func cdotc_(OpaquePointer, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0007:0004"><a href="cdotu_(_:_:_:_:_:_:">func cdotu_(OpaquePointer, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0007:0005"><a href="cgbmv_(_:_:_:_:_:_:_:_:_:_:_:_:_:">func cgbmv_(UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0007:0006"><a href="cgemm_(_:_:_:_:_:_:_:_:_:_:_:_:_:">func cgemm_(UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0007:0007"><a href="cgemv_(_:_:_:_:_:_:_:_:_:_:_:">func cgemv_(UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0007:0008"><a href="cgerc_(_:_:_:_:_:_:_:_:_:">func cgerc_(UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0007:0009"><a href="cgeru_(_:_:_:_:_:_:_:_:_:">func cgeru_(UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0007:0010"><a href="chbmv_(_:_:_:_:_:_:_:_:_:_:_:">func chbmv_(UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0007:0011"><a href="chemm_(_:_:_:_:_:_:_:_:_:_:_:_:">func chemm_(UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0007:0012"><a href="chemv_(_:_:_:_:_:_:_:_:_:_:">func chemv_(UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0007:0013"><a href="cher2_(_:_:_:_:_:_:_:_:_:">func cher2_(UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0007:0014"><a href="cher2k_(_:_:_:_:_:_:_:_:_:_:_:_:">func cher2k_(UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;Float&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0007:0015"><a href="cher_(_:_:_:_:_:_:_:">func cher_(UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;Float&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;)</a>.md)</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">기기의 초점을 고정하는 모드입니다.</span>

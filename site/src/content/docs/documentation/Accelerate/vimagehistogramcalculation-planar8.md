---
source_path: "documentation/Accelerate/vimagehistogramcalculation-planar8.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vimagehistogramcalculation-planar8"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:vimagehistogramcalculationplanar8:0000:0001">vImageHistogramCalculation_Planar8(_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimagehistogramcalculationplanar8:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimagehistogramcalculationplanar8:0002:0001">Calculates the histogram of an 8-bit planar buffer.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimagehistogramcalculationplanar8:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:vimagehistogramcalculationplanar8:0004:0001">iOS 5.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimagehistogramcalculationplanar8:0004:0002">iPadOS 5.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimagehistogramcalculationplanar8:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimagehistogramcalculationplanar8:0004:0004">macOS 10.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimagehistogramcalculationplanar8:0004:0005">tvOS 5.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimagehistogramcalculationplanar8:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimagehistogramcalculationplanar8:0004:0007">watchOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func vImageHistogramCalculation_Planar8(_ src: UnsafePointer<vImage_Buffer>, _ histogram: UnsafeMutablePointer<vImagePixelCount>, _ flags: vImage_Flags) -> vImage_Error
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">Return Value</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001"><a href="kvimagenoerror.md">@@TOKEN_0@@</a>; otherwise, one of the error codes in <a href="data-types-and-constants.md">@@TOKEN_1@@</a>.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">The following code populates the <code>histogram</code> array with the histogram of the specified <a href="vimage_buffer.md">@@TOKEN_1@@</a> structure.</span>

```swift
var histogram = [vImagePixelCount](repeating: 0, count: 256)

// `buffer` is a `vImage_Buffer` structure.
_ = vImageHistogramCalculation_Planar8(&buffer,
                                       &histogram,
                                       vImage_Flags(kvImageNoFlags))
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0012:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0001"><code>src</code>: The source vImage buffer.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0002"><code>histogram</code>: The collection that contains 256 elements that receives the histogram data.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0003"><code>flags</code>: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass <a href="kvimagedonottile.md">@@TOKEN_1@@</a>; otherwise, pass <a href="kvimagenoflags.md">@@TOKEN_2@@</a>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0014:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="cblas_daxpy(_:_:_:_:_:_:">func cblas_daxpy(__LAPACK_int, Double, UnsafePointer&lt;Double&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">상수 곱셈과 벡터 덧셈을 수행합니다(배정밀도).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="cblas_dcopy(_:_:_:_:_:">func cblas_dcopy(__LAPACK_int, UnsafePointer&lt;Double&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">벡터를 다른 벡터로 복사합니다(배정밀도).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="cblas_dgbmv(_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_dgbmv(CBLAS_ORDER, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, __LAPACK_int, __LAPACK_int, Double, UnsafePointer&lt;Double&gt;?, __LAPACK_int, UnsafePointer&lt;Double&gt;?, __LAPACK_int, Double, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">일반 밴드 행렬을 스케일링한 다음 벡터와 곱하고 벡터를 더합니다(배정밀도).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="cblas_dgemm(_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_dgemm(CBLAS_ORDER, CBLAS_TRANSPOSE, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, __LAPACK_int, Double, UnsafePointer&lt;Double&gt;?, __LAPACK_int, UnsafePointer&lt;Double&gt;?, __LAPACK_int, Double, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">두 행렬을 곱합니다(배정밀도).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="cblas_dgemv(_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_dgemv(CBLAS_ORDER, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, Double, UnsafePointer&lt;Double&gt;?, __LAPACK_int, UnsafePointer&lt;Double&gt;?, __LAPACK_int, Double, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">행렬과 벡터를 곱합니다(배정밀도).</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">벡터 X를 벡터 Y의 전치와 곱한 뒤 행렬 A를 더합니다(배정밀도).</span>

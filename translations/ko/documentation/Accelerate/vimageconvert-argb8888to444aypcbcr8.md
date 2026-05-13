---
source_path: "documentation/Accelerate/vimageconvert-argb8888to444aypcbcr8.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vimageconvert-argb8888to444aypcbcr8"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:vimageconvertargb8888to444aypcbcr8:0000:0001">vImageConvert_ARGB8888To444AYpCbCr8(_:_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimageconvertargb8888to444aypcbcr8:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimageconvertargb8888to444aypcbcr8:0002:0001">Converts an 8-bit-per-channel, 4-channel ARGB buffer to an 8-bit-per-channel 4:4:4 YpCbCr buffer.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimageconvertargb8888to444aypcbcr8:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:vimageconvertargb8888to444aypcbcr8:0004:0001">iOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageconvertargb8888to444aypcbcr8:0004:0002">iPadOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageconvertargb8888to444aypcbcr8:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageconvertargb8888to444aypcbcr8:0004:0004">macOS 10.10+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageconvertargb8888to444aypcbcr8:0004:0005">tvOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageconvertargb8888to444aypcbcr8:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageconvertargb8888to444aypcbcr8:0004:0007">watchOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func vImageConvert_ARGB8888To444AYpCbCr8(_ src: UnsafePointer<vImage_Buffer>, _ dest: UnsafePointer<vImage_Buffer>, _ info: UnsafePointer<vImage_ARGBToYpCbCr>, _ permuteMap: UnsafePointer<UInt8>!, _ flags: vImage_Flags) -> vImage_Error
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">Return Value</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001"><a href="kvimagenoerror.md">@@TOKEN_0@@</a>; otherwise, one of the error codes in <a href="data-types-and-constants.md">@@TOKEN_1@@</a>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>in</code>: 입력의 descriptor입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>dest</code>: A pointer to the destination vImage buffer structure. You’re responsible for filling out the <a href="vimage_buffer/height.md">@@TOKEN_1@@</a>, <a href="vimage_buffer/width.md">@@TOKEN_2@@</a>, and <a href="vimage_buffer/rowbytes.md">@@TOKEN_3@@</a> fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0003"><code>info</code>: A <a href="vimage_argbtoypcbcr.md">@@TOKEN_1@@</a> structure that describes the conversion matrix, the range of the input and output pixels from the matrix, and clamping information.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0004"><code>permuteMap</code>: An array of four 8-bit integers with the values <code>0</code>, <code>1</code>, <code>2</code>, and 3, in some order. Each value specifies the channel from the source image that the function copies to the destination channel at the corresponding index.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0005"><code>flags</code>: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass <a href="kvimagedonottile.md">@@TOKEN_1@@</a>; otherwise, pass <a href="kvimagenoflags.md">@@TOKEN_2@@</a>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="vimageconvert_argb8888to444crypcb8(_:_:_:_:_:">func vImageConvert_ARGB8888To444CrYpCb8(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_ARGBToYpCbCr&gt;, UnsafePointer&lt;UInt8&gt;!, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">재생을 시작할 기본 비율입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="vimageconvert_argb8888to444cbypcra8(_:_:_:_:_:">func vImageConvert_ARGB8888To444CbYpCrA8(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_ARGBToYpCbCr&gt;, UnsafePointer&lt;UInt8&gt;!, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">현재 항목의 재생을 시작합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="vimageconvert_argb8888to444crypcb10(_:_:_:_:_:">func vImageConvert_ARGB8888To444CrYpCb10(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_ARGBToYpCbCr&gt;, UnsafePointer&lt;UInt8&gt;!, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">현재 재생 속도입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="vimageconvert_argb8888to444aypcbcr16(_:_:_:_:_:">func vImageConvert_ARGB8888To444AYpCbCr16(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_ARGBToYpCbCr&gt;, UnsafePointer&lt;UInt8&gt;!, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">재생 속도가 변경될 때 player가 게시하는 알림입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="vimageconvert_argb16uto444aypcbcr16(_:_:_:_:_:">func vImageConvert_ARGB16UTo444AYpCbCr16(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_ARGBToYpCbCr&gt;, UnsafePointer&lt;UInt8&gt;!, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">Converts an unsigned 16-bit-per-channel, 4-channel ARGB buffer to an 16-bit-per-channel 4:4:4 AYpCbCr buffer.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="vimageconvert_argb16q12to444crypcb10(_:_:_:_:_:">func vImageConvert_ARGB16Q12To444CrYpCb10(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_ARGBToYpCbCr&gt;, UnsafePointer&lt;UInt8&gt;!, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">Converts a fixed-point 16-bit-per-channel, 4-channel ARGB buffer to an 10-bit-per-channel 4:4:4 CrYpCb buffer.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">*<a href="https://developer.apple.com/documentation/accelerate/vimageconvert_argb8888to444aypcbcr8(_:_:_:_:_:">View on Apple Developer</a>)*</span>

---
source_path: "documentation/Accelerate/vimageconvert-planar16q12toargb16f.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vimageconvert-planar16q12toargb16f"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:vimageconvertplanar16q12toargb16f:0000:0001">vImageConvert_Planar16Q12toARGB16F(_:_:_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimageconvertplanar16q12toargb16f:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimageconvertplanar16q12toargb16f:0002:0001">Interleaves four fixed-point 16-bit planar buffers into a floating-point 32-bit-per-channel, 4-channel interleaved buffer.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimageconvertplanar16q12toargb16f:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:vimageconvertplanar16q12toargb16f:0004:0001">iOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageconvertplanar16q12toargb16f:0004:0002">iPadOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageconvertplanar16q12toargb16f:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageconvertplanar16q12toargb16f:0004:0004">macOS 10.12+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageconvertplanar16q12toargb16f:0004:0005">tvOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageconvertplanar16q12toargb16f:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageconvertplanar16q12toargb16f:0004:0007">watchOS 3.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func vImageConvert_Planar16Q12toARGB16F(_ alpha: UnsafePointer<vImage_Buffer>, _ red: UnsafePointer<vImage_Buffer>, _ green: UnsafePointer<vImage_Buffer>, _ blue: UnsafePointer<vImage_Buffer>, _ dest: UnsafePointer<vImage_Buffer>, _ flags: vImage_Flags) -> vImage_Error
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">Return Value</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001"><a href="kvimagenoerror.md">@@TOKEN_0@@</a>; otherwise, one of the error codes in <a href="data-types-and-constants.md">@@TOKEN_1@@</a>.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">The conversion maps source pixels with a value of <code>0</code> to <code>0.0</code>, and maps source pixels with a value of <code>4096</code> to <code>1.0</code>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>alpha</code>: The source vImage buffer that contains the alpha channel.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0002"><code>red</code>: The source vImage buffer that contains the red channel.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0003"><code>green</code>: The source vImage buffer that contains the green channel.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0004"><code>blue</code>: The source vImage buffer that contains the blue channel.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0005"><code>dest</code>: A pointer to the destination vImage buffer structure. You’re responsible for filling out the <a href="vimage_buffer/height.md">@@TOKEN_1@@</a>, <a href="vimage_buffer/width.md">@@TOKEN_2@@</a>, and <a href="vimage_buffer/rowbytes.md">@@TOKEN_3@@</a> fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0006"><code>flags</code>: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass <a href="kvimagedonottile.md">@@TOKEN_1@@</a>; otherwise, pass <a href="kvimagenoflags.md">@@TOKEN_2@@</a>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="vimageconvert_planar16q12toargb8888(_:_:_:_:_:_:">func vImageConvert_Planar16Q12toARGB8888(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">입력값에 대해 요소별 역쌍곡 사인을 계산하는 연산입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">입력값에 대해 요소별 역탄젠트를 계산하는 연산입니다.</span>

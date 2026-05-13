---
source_path: "documentation/Accelerate/vimageverticalshear-argb8888.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vimageverticalshear-argb8888"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:vimageverticalshearargb8888:0000:0001">vImageVerticalShear_ARGB8888(_:_:_:_:_:_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimageverticalshearargb8888:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimageverticalshearargb8888:0002:0001">Performs a single-precision vertical shear on a region of interest within an 8-bit-per-channel, 4-channel interleaved image.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimageverticalshearargb8888:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:vimageverticalshearargb8888:0004:0001">iOS 5.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageverticalshearargb8888:0004:0002">iPadOS 5.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageverticalshearargb8888:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageverticalshearargb8888:0004:0004">macOS 10.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageverticalshearargb8888:0004:0005">tvOS 5.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageverticalshearargb8888:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageverticalshearargb8888:0004:0007">watchOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func vImageVerticalShear_ARGB8888(_ src: UnsafePointer<vImage_Buffer>, _ dest: UnsafePointer<vImage_Buffer>, _ srcOffsetToROI_X: vImagePixelCount, _ srcOffsetToROI_Y: vImagePixelCount, _ yTranslate: Float, _ shearSlope: Float, _ filter: ResamplingFilter!, _ backColor: UnsafePointer<UInt8>!, _ flags: vImage_Flags) -> vImage_Error
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">Return Value</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001"><a href="kvimagenoerror.md">@@TOKEN_0@@</a>; otherwise, one of the error codes that <a href="data-types-and-constants.md">@@TOKEN_1@@</a> describes.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">This function uses a resampling filter that you specify to shear, resize, and translate an image in one dimension.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">Use the resampling filter’s scale property to resize the image and the translate parameter to adjust the position of the destination image.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0003">The function transforms as much of the source image as it needs to fill the destination buffer.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0004">Therefore, it can transform pixels outside the region of interest.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">이 단계를 수행하지 않고 값을 설정하려고 하면 예외가 발생합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0012:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0001"><code>src</code>: A pointer to a vImage buffer structure that contains the source image.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0002"><code>dest</code>: A pointer to the destination vImage buffer structure. You’re responsible for filling out the <code>height</code>, <code>width</code>, and <code>rowBytes</code> fields of this structure and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks. This parameter also specifies the size of the region of interest within the source image. The region of interest has the same height and width as the destination image buffer.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0003"><code>srcOffsetToROI_X</code>: The horizontal offset, in pixels, from the upper-left pixel of the region of interest within the source image.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0004"><code>srcOffsetToROI_Y</code>: The vertical offset, in pixels, from the upper-left pixel of the region of interest within the source image.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0005"><code>yTranslate</code>: A translation value for the vertical direction.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0006"><code>shearSlope</code>: The slope of the front edge of the sheared image, measured in a clockwise direction.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0007"><code>filter</code>: The resampling filter that the function uses. For more information, see <a href="reducing-artifacts-with-custom-resampling-filters.md">@@TOKEN_1@@</a>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0008"><code>backColor</code>: A background color. If you set the <code>kvImageBackgroundColorFill</code> flag, pass a pixel value.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0009"><code>flags</code>: The options to use when applying the transform. To specify how vImage handles pixel locations beyond the edge of the source image, set one of the following flags: <a href="kvimagebackgroundcolorfill.md">@@TOKEN_1@@</a> or <a href="kvimageedgeextend.md">@@TOKEN_2@@</a>. If you want vImage to use a higher quality but a slower resampling filter, set the <a href="kvimagehighqualityresampling.md">@@TOKEN_3@@</a> flag. If your code implements its own tiling or its own multithreading, pass <a href="kvimagedonottile.md">@@TOKEN_4@@</a>. This function ignores the <a href="kvimageleavealphaunchanged.md">@@TOKEN_5@@</a> flag.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0014:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="applying-geometric-transforms-to-images.md">Applying geometric transforms to images</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">Reflect, shear, rotate, and scale image buffers using vImage.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="vimageverticalshear_planar8(_:_:_:_:_:_:_:_:_:">func vImageVerticalShear_Planar8(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, vImagePixelCount, vImagePixelCount, Float, Float, ResamplingFilter!, Pixel_8, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">Performs a single-precision vertical shear on a region of interest within an 8-bit planar image.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="vimageverticalshear_cbcr8(_:_:_:_:_:_:_:_:_:">func vImageVerticalShear_CbCr8(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, vImagePixelCount, vImagePixelCount, Float, Float, ResamplingFilter!, UnsafePointer&lt;UInt8&gt;!, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">Performs a single-precision vertical shear on a region of interest within an 8-bit-per-channel, 2-channel interleaved image.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">*<a href="https://developer.apple.com/documentation/accelerate/vimageverticalshear_argb8888(_:_:_:_:_:_:_:_:_:">View on Apple Developer</a>)*</span>

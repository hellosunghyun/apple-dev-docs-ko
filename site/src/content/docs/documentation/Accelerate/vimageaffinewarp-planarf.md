---
source_path: "documentation/Accelerate/vimageaffinewarp-planarf.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vimageaffinewarp-planarf"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:vimageaffinewarpplanarf:0000:0001">vImageAffineWarp_PlanarF(_:_:_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimageaffinewarpplanarf:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimageaffinewarpplanarf:0002:0001">Applies a single-precision affine transformation to a 32-bit planar image.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimageaffinewarpplanarf:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:vimageaffinewarpplanarf:0004:0001">iOS 5.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageaffinewarpplanarf:0004:0002">iPadOS 5.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageaffinewarpplanarf:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageaffinewarpplanarf:0004:0004">macOS 10.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageaffinewarpplanarf:0004:0005">tvOS 5.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageaffinewarpplanarf:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageaffinewarpplanarf:0004:0007">watchOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func vImageAffineWarp_PlanarF(_ src: UnsafePointer<vImage_Buffer>, _ dest: UnsafePointer<vImage_Buffer>, _ tempBuffer: UnsafeMutableRawPointer!, _ transform: UnsafePointer<vImage_AffineTransform>, _ backColor: Pixel_F, _ flags: vImage_Flags) -> vImage_Error
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001"><code>AVPlayerLooper</code>의 새 인스턴스입니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">This function maps each pixel in the source image <code>[x, y]</code> to a new position <code>[x’, y’]</code> in the destination image using the following formula:</span>

```objc
(x', y') = (x, y) * transform
```

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0001">In the preceding function, <code>transform</code> is the 3 x 3 affine transformation matrix.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0013:0001">The coordinate space places the origin at the bottom-left corner of the image.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0013:0002">Positive movement in the horizontal direction moves pixels to the right.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0013:0003">Positive movement in the vertical direction moves pixels up.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0014:0001">To avoid artifacts in high-frequency regions of the image, supply image data that’s nonpremultiplied or that has a constant alpha over the entire image.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0015:0001">This function doesn’t work in place — that is, the source and destination buffers need to point to different memory.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:optimize-performance-with-temporary-buffers:0016:0001">Optimize Performance with Temporary Buffers</span>

<span class="ko-segment" data-segment-id="seg:paragraph:optimize-performance-with-temporary-buffers:0017:0001">This function uses a multiple-pass algorithm that saves intermediate pixel values between passes.</span> <span class="ko-segment" data-segment-id="seg:paragraph:optimize-performance-with-temporary-buffers:0017:0002">In some cases, the destination buffer may not be large enough to store that intermediate data, so the operation requires additional storage.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:optimize-performance-with-temporary-buffers:0018:0001">Pass <code>nil</code> to the <code>tempBuffer</code> parameter to have vImage create and manage this temporary storage for you.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:optimize-performance-with-temporary-buffers:0019:0001">In cases where your code calls the function frequently (for example, when processing video), create and manage this temporary buffer yourself and reuse it across function calls.</span> <span class="ko-segment" data-segment-id="seg:paragraph:optimize-performance-with-temporary-buffers:0019:0002">Reusing a buffer avoids vImage allocating the temporary storage with each call.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:optimize-performance-with-temporary-buffers:0020:0001">To use your own temporary buffer, first call the function with the same values for all other parameters that you intend to use for subsequent calls.</span> <span class="ko-segment" data-segment-id="seg:paragraph:optimize-performance-with-temporary-buffers:0020:0002">In addition, pass the <code>kvImageGetTempBufferSize</code> flag.</span> <span class="ko-segment" data-segment-id="seg:paragraph:optimize-performance-with-temporary-buffers:0020:0003">The <code>kvImageGetTempBufferSize</code> instructs the function not to perform any processing, and to return a positive value that represents the minimum size, in bytes, of the temporary buffer.</span> <span class="ko-segment" data-segment-id="seg:paragraph:optimize-performance-with-temporary-buffers:0020:0004">A negative return value represents an error.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:optimize-performance-with-temporary-buffers:0021:0001">After you allocate the memory for the temporary buffer, pass that to the <code>tempBuffer</code> parameter for subsequent calls to the function, and don’t pass the <code>kvImageGetTempBufferSize</code> flag.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:optimize-performance-with-temporary-buffers:0022:0001">You can use the same workspace memory for a group of images that are different sizes.</span> <span class="ko-segment" data-segment-id="seg:paragraph:optimize-performance-with-temporary-buffers:0022:0002">To do this, create a vImage buffer structure with a size that shares the maximum width and maximum height of the images that you’re working with.</span> <span class="ko-segment" data-segment-id="seg:paragraph:optimize-performance-with-temporary-buffers:0022:0003">For example, to create a workspace memory that’s suitable for 4x4, 5x4, and 4x5 images, pass a buffer with the size 5x5.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0023:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0024:0001"><code>src</code>: A pointer to a vImage buffer structure that contains the source image.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0024:0002"><code>dest</code>: A pointer to the destination vImage buffer structure. You’re responsible for filling out the <code>height</code>, <code>width</code>, and <code>rowBytes</code> fields of this structure and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0024:0003"><code>tempBuffer</code>: A pointer to workspace memory the function uses as it operates on an image. Pass <code>nil</code> to instruct the function to allocate, use, and then free its own temporary buffer.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0024:0004"><code>transform</code>: The affine transformation matrix that the function applies to the source image.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0024:0005"><code>backColor</code>: A background color. If you set the <code>kvImageBackgroundColorFill</code> flag, pass a pixel value.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0024:0006"><code>flags</code>: The options to use when applying the transform. To instruct the function to return the minimum size of the workspace memory, set the <a href="kvimagegettempbuffersize.md">@@TOKEN_1@@</a> flag. To specify how vImage handles pixel locations beyond the edge of the source image, set one of the following flags: <a href="kvimagebackgroundcolorfill.md">@@TOKEN_2@@</a> or <a href="kvimageedgeextend.md">@@TOKEN_3@@</a>. If you want vImage to use a higher quality but a slower resampling filter, set the <a href="kvimagehighqualityresampling.md">@@TOKEN_4@@</a> flag. If your code implements its own tiling or its own multithreading, pass <a href="kvimagedonottile.md">@@TOKEN_5@@</a>. This function ignores the <a href="kvimageleavealphaunchanged.md">@@TOKEN_6@@</a> flag.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0025:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="applying-geometric-transforms-to-images.md">Applying geometric transforms to images</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">4D first-major 텐서를 나타내는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="vimageaffinewarp_planar8(_:_:_:_:_:_:">func vImageAffineWarp_Planar8(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafeMutableRawPointer!, UnsafePointer&lt;vImage_AffineTransform&gt;, Pixel_8, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">5D first-major 텐서를 나타내는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="vimageaffinewarp_argb16u(_:_:_:_:_:_:">func vImageAffineWarp_ARGB16U(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafeMutableRawPointer!, UnsafePointer&lt;vImage_AffineTransform&gt;, UnsafePointer&lt;UInt16&gt;!, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">5D last-major 텐서를 나타내는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="vimageaffinewarp_argb16s(_:_:_:_:_:_:">func vImageAffineWarp_ARGB16S(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafeMutableRawPointer!, UnsafePointer&lt;vImage_AffineTransform&gt;, UnsafePointer&lt;Int16&gt;!, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">6D first-major 텐서를 나타내는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="vimageaffinewarp_argb8888(_:_:_:_:_:_:">func vImageAffineWarp_ARGB8888(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafeMutableRawPointer!, UnsafePointer&lt;vImage_AffineTransform&gt;, UnsafePointer&lt;UInt8&gt;!, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">6D first-major 텐서를 나타내는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="vimageaffinewarp_argbffff(_:_:_:_:_:_:">func vImageAffineWarp_ARGBFFFF(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafeMutableRawPointer!, UnsafePointer&lt;vImage_AffineTransform&gt;, UnsafePointer&lt;Float&gt;!, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">6D first-major 텐서를 나타내는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="vimageaffinewarp_argb16f(_:_:_:_:_:_:">func vImageAffineWarp_ARGB16F(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafeMutableRawPointer!, UnsafePointer&lt;vImage_AffineTransform&gt;, UnsafePointer&lt;UInt16&gt;!, vImage_Flags) -&gt; vImage_Error</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0002"><a href="vimageaffinewarp_cbcr16f(_:_:_:_:_:_:">func vImageAffineWarp_CbCr16F(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafeMutableRawPointer!, UnsafePointer&lt;vImage_AffineTransform&gt;, UnsafePointer&lt;UInt16&gt;!, vImage_Flags) -&gt; vImage_Error</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0003"><a href="vimageaffinewarp_planar16f(_:_:_:_:_:_:">func vImageAffineWarp_Planar16F(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafeMutableRawPointer!, UnsafePointer&lt;vImage_AffineTransform&gt;, Pixel_16F, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0040:0001">*<a href="https://developer.apple.com/documentation/accelerate/vimageaffinewarp_planarf(_:_:_:_:_:_:">View on Apple Developer</a>)*</span>

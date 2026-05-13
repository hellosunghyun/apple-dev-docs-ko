---
source_path: "documentation/Accelerate/vimageconvolvewithbias-planarf.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vimageconvolvewithbias-planarf"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:vimageconvolvewithbiasplanarf:0000:0001">vImageConvolveWithBias_PlanarF(_:_:_:_:_:_:_:_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimageconvolvewithbiasplanarf:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimageconvolvewithbiasplanarf:0002:0001">Convolves a floating-point 32-bit planar image by a 2D kernel and adds a bias.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimageconvolvewithbiasplanarf:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:vimageconvolvewithbiasplanarf:0004:0001">iOS 5.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageconvolvewithbiasplanarf:0004:0002">iPadOS 5.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageconvolvewithbiasplanarf:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageconvolvewithbiasplanarf:0004:0004">macOS 10.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageconvolvewithbiasplanarf:0004:0005">tvOS 5.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageconvolvewithbiasplanarf:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageconvolvewithbiasplanarf:0004:0007">watchOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func vImageConvolveWithBias_PlanarF(_ src: UnsafePointer<vImage_Buffer>, _ dest: UnsafePointer<vImage_Buffer>, _ tempBuffer: UnsafeMutableRawPointer!, _ srcOffsetToROI_X: vImagePixelCount, _ srcOffsetToROI_Y: vImagePixelCount, _ kernel: UnsafePointer<Float>!, _ kernel_height: UInt32, _ kernel_width: UInt32, _ bias: Float, _ backgroundColor: Pixel_F, _ flags: vImage_Flags) -> vImage_Error
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">Return Value</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001"><a href="kvimagenoerror.md">@@TOKEN_0@@</a>; otherwise, a negative value indicates one of the error codes that <a href="data-types-and-constants.md">@@TOKEN_1@@</a> describes, and a positive value indicates the required size for the temporary buffer.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

##### <span class="ko-segment" data-segment-id="seg:heading:optimize-performance-with-temporary-buffers:0010:0001">Optimize Performance with Temporary Buffers</span>

<span class="ko-segment" data-segment-id="seg:paragraph:optimize-performance-with-temporary-buffers:0011:0001">This function uses a multiple-pass algorithm that saves intermediate pixel values between passes.</span> <span class="ko-segment" data-segment-id="seg:paragraph:optimize-performance-with-temporary-buffers:0011:0002">In some cases, the destination buffer may not be large enough to store that intermediate data, so the operation requires additional storage.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:optimize-performance-with-temporary-buffers:0012:0001">Pass <code>nil</code> to the <code>tempBuffer</code> parameter to have vImage create and manage this temporary storage for you.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:optimize-performance-with-temporary-buffers:0013:0001">In cases where your code calls the function frequently (for example, when processing video), create and manage this temporary buffer yourself and reuse it across function calls.</span> <span class="ko-segment" data-segment-id="seg:paragraph:optimize-performance-with-temporary-buffers:0013:0002">Reusing a buffer avoids vImage allocating the temporary storage with each call.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:optimize-performance-with-temporary-buffers:0014:0001">To use your own temporary buffer, first call the function with the same values for all other parameters that you intend to use for subsequent calls.</span> <span class="ko-segment" data-segment-id="seg:paragraph:optimize-performance-with-temporary-buffers:0014:0002">In addition, pass the <code>kvImageGetTempBufferSize</code> flag.</span> <span class="ko-segment" data-segment-id="seg:paragraph:optimize-performance-with-temporary-buffers:0014:0003">The <code>kvImageGetTempBufferSize</code> instructs the function not to perform any processing, and to return a positive value that represents the minimum size, in bytes, of the temporary buffer.</span> <span class="ko-segment" data-segment-id="seg:paragraph:optimize-performance-with-temporary-buffers:0014:0004">A negative return value represents an error.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:optimize-performance-with-temporary-buffers:0015:0001">After you allocate the memory for the temporary buffer, pass that to the <code>tempBuffer</code> parameter for subsequent calls to the function, and don’t pass the <code>kvImageGetTempBufferSize</code> flag.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:optimize-performance-with-temporary-buffers:0016:0001">You can use the same workspace memory for a group of images that are different sizes.</span> <span class="ko-segment" data-segment-id="seg:paragraph:optimize-performance-with-temporary-buffers:0016:0002">To do this, create a vImage buffer structure with a size that shares the maximum width and maximum height of the images that you’re working with.</span> <span class="ko-segment" data-segment-id="seg:paragraph:optimize-performance-with-temporary-buffers:0016:0003">For example, to create a workspace memory that’s suitable for 4x4, 5x4, and 4x5 images, pass a buffer with the size 5x5.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0017:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0001"><code>src</code>: A pointer to a vImage buffer structure that contains data for the source image.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0002"><code>dest</code>: A pointer to a vImage buffer data structure. You’re responsible for filling out the <code>height</code>, <code>width</code>, and <code>rowBytes</code> fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the destination image data. When you no longer need the data buffer, you need to deallocate the memory. The size (number of rows and number of columns) of the destination buffer also specifies the size of the region of interest in the source buffer.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0003"><code>tempBuffer</code>: A pointer to workspace memory the function uses as it operates on an image. Pass <code>nil</code> to instruct the function to allocate, use, and then free its own temporary buffer.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0004"><code>srcOffsetToROI_X</code>: The horizontal offset, in pixels, to the upper-left pixel of the region of interest within the source image.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0005"><code>srcOffsetToROI_Y</code>: The vertical offset, in pixels, to the upper-left pixel of the region of interest within the source image.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0006"><code>kernel</code>: A pointer to the convolution kernel data, which needs to be a packed array without any padding.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0007"><code>kernel_height</code>: The height of the kernel in pixels. This value needs to be odd.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0008"><code>kernel_width</code>: The width of the kernel in pixels. This value needs to be odd.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0009"><code>bias</code>: The value to add  to each element in the convolution result, before performing any clipping.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0010"><code>backgroundColor</code>: A background color. If you supply a color, you need to also set the <code>kvImageBackgroundColorFill</code> flag; otherwise, the function ignores the color.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0011"><code>flags</code>: The options to use when performing the operation. If your code implements its own tiling or its own multithreading, pass <a href="kvimagedonottile.md">@@TOKEN_1@@</a>. To instruct the function to return the minimum size of the workspace memory, set the <a href="kvimagegettempbuffersize.md">@@TOKEN_2@@</a> flag. Pass one of the following flags to specify how vImage handles pixel locations beyond the edge of the source image: <a href="kvimagecopyinplace.md">@@TOKEN_3@@</a>, <a href="kvimagetruncatekernel.md">@@TOKEN_4@@</a>, <a href="kvimagebackgroundcolorfill.md">@@TOKEN_5@@</a>, or <a href="kvimageedgeextend.md">@@TOKEN_6@@</a>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0019:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="vimageconvolve_planarf(_:_:_:_:_:_:_:_:_:_:">func vImageConvolve_PlanarF(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafeMutableRawPointer!, vImagePixelCount, vImagePixelCount, UnsafePointer&lt;Float&gt;!, UInt32, UInt32, Pixel_F, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">Convolves a floating-point 32-bit planar image by a 2D kernel.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="vimageconvolvewithbias_planar8(_:_:_:_:_:_:_:_:_:_:_:_:">func vImageConvolveWithBias_Planar8(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafeMutableRawPointer!, vImagePixelCount, vImagePixelCount, UnsafePointer&lt;Int16&gt;!, UInt32, UInt32, Int32, Int32, Pixel_8, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">2D 커널을 사용해 8비트 평면 이미지를 컨볼루션하고 바이어스를 더합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="vimageconvolvewithbias_planar16f(_:_:_:_:_:_:_:_:_:_:_:">func vImageConvolveWithBias_Planar16F(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafeMutableRawPointer!, vImagePixelCount, vImagePixelCount, UnsafePointer&lt;Float&gt;!, UInt32, UInt32, Float, Pixel_16F, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">2D 커널을 사용해 부동소수점 16비트 평면 이미지를 컨볼루션하고 바이어스를 더합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="vimageconvolvewithbias_argb8888(_:_:_:_:_:_:_:_:_:_:_:_:">func vImageConvolveWithBias_ARGB8888(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafeMutableRawPointer!, vImagePixelCount, vImagePixelCount, UnsafePointer&lt;Int16&gt;!, UInt32, UInt32, Int32, Int32, UnsafePointer&lt;UInt8&gt;!, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">2D 커널을 사용해 채널당 8비트의 4채널 인터리브 이미지를 컨볼루션하고 바이어스를 더합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="vimageconvolvewithbias_argb16f(_:_:_:_:_:_:_:_:_:_:_:">func vImageConvolveWithBias_ARGB16F(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafeMutableRawPointer!, vImagePixelCount, vImagePixelCount, UnsafePointer&lt;Float&gt;!, UInt32, UInt32, Float, UnsafePointer&lt;UInt16&gt;!, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">2D 커널을 사용해 채널당 부동소수점 16비트의 4채널 인터리브 이미지를 컨볼루션하고 바이어스를 더합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="vimageconvolvewithbias_argbffff(_:_:_:_:_:_:_:_:_:_:_:">func vImageConvolveWithBias_ARGBFFFF(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafeMutableRawPointer!, vImagePixelCount, vImagePixelCount, UnsafePointer&lt;Float&gt;!, UInt32, UInt32, Float, UnsafePointer&lt;Float&gt;!, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">2D 커널을 사용해 채널당 부동소수점 32비트의 4채널 인터리브 이미지를 컨볼루션하고 바이어스를 더합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">*<a href="https://developer.apple.com/documentation/accelerate/vimageconvolvewithbias_planarf(_:_:_:_:_:_:_:_:_:_:_:">View on Apple Developer</a>)*</span>

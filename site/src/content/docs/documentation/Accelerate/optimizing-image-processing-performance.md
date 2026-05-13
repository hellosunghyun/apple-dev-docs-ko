---
source_path: "documentation/Accelerate/optimizing-image-processing-performance.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/optimizing-image-processing-performance"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:optimizing-image-processing-performance:0000:0001">Optimizing image-processing performance</span>

<span class="ko-segment" data-segment-id="seg:paragraph:optimizing-image-processing-performance:0001:0001">**Framework**: Accelerate</span>

<span class="ko-segment" data-segment-id="seg:paragraph:optimizing-image-processing-performance:0002:0001">Improve your app’s performance by converting image buffer formats from interleaved to planar.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0003:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0001">The vImage library operates on image data with two memory layouts:</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0005:0001">**Interleaved** stores each pixel’s color data consecutively in a single buffer.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0005:0002">For example, the data that describes a 4-channel image (red, green, blue, and alpha) would be stored as RGBARGBARGBA…</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0006:0001">**Planar** stores each color channel in separate buffers.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0006:0002">For example, a 4-channel image would be stored as four individual buffers containing red, green, blue, and alpha data.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0007:0001">!<a href="https://docs-assets.developer.apple.com/published/9ca5720cecfccf9a40e29dcb8dfb8134/media-3023512%402x.png">A diagram showing how the color information for each pixel in an image is stored in interleaved and planar buffers.</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">Because many vImage functions operate on a single color channel at a time — by converting an interleaved buffer to planar buffers — you can often improve your app’s performance by doing this conversion manually.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0002">However, most vImage functions are available in both the interleaved and planar variants, so before you do the conversion, try both to see which works better in your context.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0001">In some cases, you may not want to apply a vImage operation to all four channels of an image.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0002">For example, you may know beforehand that the alpha channel is irrelevant in the images that you’re dealing with, or perhaps all of your images are grayscale and you need to operate on only one channel.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0003">Using planar formats makes it possible to isolate and work with only the channels you need.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:review-interleaved-performance:0010:0001">Review Interleaved Performance</span>

<span class="ko-segment" data-segment-id="seg:paragraph:review-interleaved-performance:0011:0001">Typically, your source imagery is in interleaved format, and your default option will be to use the interleaved variant of a vImage function.</span> <span class="ko-segment" data-segment-id="seg:paragraph:review-interleaved-performance:0011:0002">For example, the following code scales a Core Graphics image to one tenth of its original size.</span> <span class="ko-segment" data-segment-id="seg:paragraph:review-interleaved-performance:0011:0003">Note that the 4-channel, 8-bit-per-channel interleaved pixel buffer <a href="vimage/pixelbuffer/scale(destination:">@@TOKEN_0@@</a>-5euvc.md) function calls <a href="vimagescale_argb8888(_:_:_:_:">@@TOKEN_1@@</a>.md).</span>

```swift
var cgImageFormat = vImage_CGImageFormat(
    bitsPerComponent: 8,
    bitsPerPixel: 8 * 4,
    colorSpace: CGColorSpaceCreateDeviceRGB(),
    bitmapInfo: CGBitmapInfo(rawValue:
                                CGImageAlphaInfo.noneSkipLast.rawValue))!

let sourceBuffer = try vImage.PixelBuffer(cgImage: sourceImage,
                                          cgImageFormat: &cgImageFormat,
                                          pixelFormat: vImage.Interleaved8x4.self)

let destinationBuffer = vImage.PixelBuffer(size: .init(width: sourceBuffer.width / 10,
                                                       height: sourceBuffer.height / 10),
                                           pixelFormat: vImage.Interleaved8x4.self)

let time = ContinuousClock().measure {
    sourceBuffer.scale(destination: destinationBuffer)
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:review-interleaved-performance:0013:0001">You can use <a href="https://developer.apple.com/documentation/Swift/ContinuousClock">@@TOKEN_0@@</a> to measure the execution time.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:convert-an-interleaved-source-buffer-to-planar-buffers:0014:0001">Convert an Interleaved Source Buffer to Planar Buffers</span>

<span class="ko-segment" data-segment-id="seg:paragraph:convert-an-interleaved-source-buffer-to-planar-buffers:0015:0001">The pixel buffer <a href="vimage/pixelbuffer/init(cgimage:cgimageformat:pixelformat:">@@TOKEN_0@@</a>.md) initializer and the vImage buffer <a href="vimagebuffer_initwithcgimage(_:_:_:_:_:">@@TOKEN_1@@</a>.md) function both populate a buffer based on the properties of a <a href="vimage_cgimageformat.md">@@TOKEN_2@@</a> structure.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:convert-an-interleaved-source-buffer-to-planar-buffers:0016:0001">For example, the following code creates an interleaved 3-channel, 8-bit-per-channel <a href="vimage/pixelbuffer.md">@@TOKEN_0@@</a> structure from the source Core Graphics image.</span> <span class="ko-segment" data-segment-id="seg:paragraph:convert-an-interleaved-source-buffer-to-planar-buffers:0016:0002">The code calls <a href="vimage/pixelbuffer/deinterleave(destination:">@@TOKEN_0@@</a>-hrhz.md) to deinterleave the image data and populate the individual red, green, and blue planar pixel buffers.</span>

```swift
var cgImageFormat = vImage_CGImageFormat(
    bitsPerComponent: 8,
    bitsPerPixel: 8 * 3,
    colorSpace: CGColorSpaceCreateDeviceRGB(),
    bitmapInfo: CGBitmapInfo(rawValue:
                                CGImageAlphaInfo.none.rawValue))!

let sourceBuffer = try vImage.PixelBuffer(cgImage: sourceImage,
                                          cgImageFormat: &cgImageFormat,
                                          pixelFormat: vImage.Interleaved8x3.self)
let sourceRedBuffer = vImage.PixelBuffer(size: sourceBuffer.size,
                                         pixelFormat: vImage.Planar8.self)
let sourceGreenBuffer = vImage.PixelBuffer(size: sourceBuffer.size,
                                           pixelFormat: vImage.Planar8.self)
let sourceBlueBuffer = vImage.PixelBuffer(size: sourceBuffer.size,
                                          pixelFormat: vImage.Planar8.self)

sourceBuffer.deinterleave(planarDestinationBuffers: [sourceRedBuffer,
                                                     sourceGreenBuffer,
                                                     sourceBlueBuffer])
```

##### <span class="ko-segment" data-segment-id="seg:heading:initialize-the-destination-buffers:0018:0001">Initialize the Destination Buffers</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initialize-the-destination-buffers:0019:0001">Create an interleaved 3-channel, 8-bit-per-channel destination buffer and three planar destination buffers:</span>

```swift
let destinationBuffer = vImage.PixelBuffer(size: .init(width: sourceBuffer.width / 10,
                                                       height: sourceBuffer.height / 10),
                                           pixelFormat: vImage.Interleaved8x3.self)

let destinationRedBuffer = vImage.PixelBuffer(size: destinationBuffer.size,
                                              pixelFormat: vImage.Planar8.self)
let destinationGreenBuffer = vImage.PixelBuffer(size: destinationBuffer.size,
                                                pixelFormat: vImage.Planar8.self)
let destinationBlueBuffer = vImage.PixelBuffer(size: destinationBuffer.size,
                                               pixelFormat: vImage.Planar8.self)
```

##### <span class="ko-segment" data-segment-id="seg:heading:apply-the-scale-operation-to-the-planar-buffers:0021:0001">Apply the Scale Operation to the Planar Buffers</span>

<span class="ko-segment" data-segment-id="seg:paragraph:apply-the-scale-operation-to-the-planar-buffers:0022:0001">Use the <code>withTaskGroup(of:returning:body:)</code> function to start a new scope that contains the three planar scale operations.</span> <span class="ko-segment" data-segment-id="seg:paragraph:apply-the-scale-operation-to-the-planar-buffers:0022:0002">Note that the 8-bit planar <a href="vimage/pixelbuffer/scale(destination:">@@TOKEN_0@@</a>-5euvc.md) function calls <a href="vimagescale_planar8(_:_:_:_:">@@TOKEN_1@@</a>.md).</span>

<span class="ko-segment" data-segment-id="seg:paragraph:apply-the-scale-operation-to-the-planar-buffers:0023:0001">In the code below, the <a href="vimage/pixelbuffer/interleave(destination:">@@TOKEN_0@@</a>-46cgi.md) function interleaves the three planar buffers and populates the interleaved destination buffer with the scaled image:</span>

```swift
let time = await ContinuousClock().measure {
    
    await withTaskGroup(of: Void.self) { group in
        
        group.addTask(priority: .userInitiated) {
            sourceRedBuffer.scale(destination: destinationRedBuffer)
        }
        
        group.addTask(priority: .userInitiated) {
            sourceGreenBuffer.scale(destination: destinationGreenBuffer)
        }
        
        group.addTask(priority: .userInitiated) {
            sourceBlueBuffer.scale(destination: destinationBlueBuffer)
        }
    }
    
    destinationBuffer.interleave(planarSourceBuffers: [destinationRedBuffer,
                                                       destinationGreenBuffer,
                                                       destinationBlueBuffer])
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:apply-the-scale-operation-to-the-planar-buffers:0025:0001">The following code calls <a href="vimage/pixelbuffer/makecgimage(cgimageformat:">@@TOKEN_0@@</a>.md) to create a Core Graphics image from the result of the scale operation:</span>

```swift
let scaledImage = destinationBuffer.makeCGImage(cgImageFormat: cgImageFormat)
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0027:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avmetadatakey/id3metadatakeycomposer.md">static let quickTimeUserDataDescription: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">영화 파일 콘텐츠의 설명을 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="avmetadatakey/id3metadatakeyconductor.md">static let quickTimeUserDataDirector: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">영화 파일 콘텐츠의 감독 이름을 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="avmetadatakey/id3metadatakeycontentgroupdescription.md">static let quickTimeUserDataDisclaimer: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">영화 파일 콘텐츠와 관련된 면책 조항을 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="avmetadatakey/id3metadatakeycontenttype.md">static let quickTimeUserDataEncodedBy: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">영화 파일 콘텐츠의 인코딩을 담당한 사람 또는 조직의 이름을 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="avmetadatakey/id3metadatakeycopyright.md">static let quickTimeUserDataFullName: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">영화 파일 콘텐츠의 전체 이름을 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="compositing-images-with-alpha-blending.md">Compositing images with alpha blending</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">Combine two images by using alpha blending to create a single output.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001"><a href="compositing-images-with-vimage-blend-modes.md">Compositing images with vImage blend modes</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">Combine two images by using blend modes to create a single output.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0042:0001"><a href="applying-vimage-operations-to-regions-of-interest.md">Applying vImage operations to regions of interest</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">Limit the effect of vImage operations to rectangular regions of interest.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0044:0001"><a href="vimage-library.md">vImage</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0045:0001">Manipulate large images using the CPU’s vector processor.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0047:0001">*<a href="https://developer.apple.com/documentation/accelerate/optimizing-image-processing-performance">View on Apple Developer</a>*</span>

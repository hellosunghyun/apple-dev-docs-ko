---
source_path: "documentation/Accelerate/specifying-histograms-with-vimage.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/specifying-histograms-with-vimage"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:specifying-histograms-with-vimage:0000:0001">Specifying histograms with vImage</span>

<span class="ko-segment" data-segment-id="seg:paragraph:specifying-histograms-with-vimage:0001:0001">**Framework**: Accelerate</span>

<span class="ko-segment" data-segment-id="seg:paragraph:specifying-histograms-with-vimage:0002:0001">Calculate the histogram of one image, and apply it to a second image.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:specifying-histograms-with-vimage:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:specifying-histograms-with-vimage:0004:0001">macOS 13.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:specifying-histograms-with-vimage:0004:0002">Xcode 14.3+</span>

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0005:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0006:0001">*Histogram specification* is an image-processing operation that calculates the histogram of a reference image and applies it to an input image.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0006:0002">The operation changes the colors and tones of the input image to match those of the reference image.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0007:0001">The example below shows a source image (bottom left) and a histogram reference image (top left), with the histogram specification output on the right.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">![Photos showing a source image of a lemon bloom, a histogram source image of brightly colored flowers, and histogram specified result.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0002">The histogram specified result contains the original image with the histogram source image colors.](https://docs-assets.developer.apple.com/published/227e8dda814cb49fe07834e4436fdc61/specification_2x.png)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0001">Before exploring the code, build and run the app to familiarize yourself with the different visual results the app generates when you select different source and reference images.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:perform-histogram-specification-using-pixel-buffers:0010:0001">Perform Histogram Specification Using Pixel Buffers</span>

<span class="ko-segment" data-segment-id="seg:paragraph:perform-histogram-specification-using-pixel-buffers:0011:0001">The <a href="vimage/pixelbuffer.md">@@TOKEN_0@@</a> structure provides a simple API to calculate and specify a histogram.</span> <span class="ko-segment" data-segment-id="seg:paragraph:perform-histogram-specification-using-pixel-buffers:0011:0002">The <a href="vimage/pixelbuffer/histogram(">@@TOKEN_0@@</a>-30tsp.md) function returns the histogram of a pixel buffer, and the <a href="vimage/pixelbuffer/specifyhistogram(_:destination:">@@TOKEN_1@@</a>-qeqr.md) function performs the histogram specification operation.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:perform-histogram-specification-using-pixel-buffers:0012:0001">The following code creates the pixel buffers that the operation requires, performs the specification, and returns a Core Graphics image that contains the result:</span>

```swift
/// Performs a histogram specification operation using `vImage.PixelBuffer` structures.
static func applyHistogramSpecification_PixelBuffer(
    histogramSourceImage: CGImage,
    imageSourceImage: CGImage) -> CGImage {
        
        let histogramSource = try! vImage.PixelBuffer<vImage.Interleaved8x4>(
            cgImage: histogramSourceImage,
            cgImageFormat: &imageFormat)
        
        let imageSource = try! vImage.PixelBuffer<vImage.Interleaved8x4>(
            cgImage: imageSourceImage,
            cgImageFormat: &imageFormat)
        
        let destinationBuffer = vImage.PixelBuffer<vImage.Interleaved8x4>(
            size: imageSource.size)
        
        let histogram = histogramSource.histogram()
        
        imageSource.specifyHistogram(histogram, destination: destinationBuffer)
        
        return destinationBuffer.makeCGImage(cgImageFormat: imageFormat)!
    }
```

##### <span class="ko-segment" data-segment-id="seg:heading:calculate-the-reference-histogram-using-vimage-buffers:0014:0001">Calculate the Reference Histogram Using Vimage Buffers</span>

<span class="ko-segment" data-segment-id="seg:paragraph:calculate-the-reference-histogram-using-vimage-buffers:0015:0001">If you’re creating apps for older operating systems that don’t support the <a href="vimage/pixelbuffer.md">@@TOKEN_0@@</a> API, the sample code project also includes source code for performing histogram specification using <a href="vimage_buffer.md">@@TOKEN_1@@</a> structures.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:calculate-the-reference-histogram-using-vimage-buffers:0016:0001">The <a href="vimagehistogramcalculation_argb8888(_:_:_:">@@TOKEN_0@@</a>.md) calculates and stores histogram data in four arrays — one for each channel — where the value of each element is the number of pixels in the reference image with that color value.</span> <span class="ko-segment" data-segment-id="seg:paragraph:calculate-the-reference-histogram-using-vimage-buffers:0016:0002">In an 8-bit-per-channel image, each color channel can hold 256 different values, and the sample code defines each array with a count of 256.</span>

```swift
var histogramBinZero = [vImagePixelCount](repeating: 0, count: 256)
var histogramBinOne = [vImagePixelCount](repeating: 0, count: 256)
var histogramBinTwo = [vImagePixelCount](repeating: 0, count: 256)
var histogramBinThree = [vImagePixelCount](repeating: 0, count: 256)
```

<span class="ko-segment" data-segment-id="seg:paragraph:calculate-the-reference-histogram-using-vimage-buffers:0018:0001">The following code calculates the histogram of the <code>histogramSource</code> <a href="vimage_buffer.md">@@TOKEN_1@@</a> structure:</span>

```swift
histogramBinZero.withUnsafeMutableBufferPointer { zeroPtr in
    histogramBinOne.withUnsafeMutableBufferPointer { onePtr in
        histogramBinTwo.withUnsafeMutableBufferPointer { twoPtr in
            histogramBinThree.withUnsafeMutableBufferPointer { threePtr in
                
                var histogramBins = [zeroPtr.baseAddress, onePtr.baseAddress,
                                     twoPtr.baseAddress, threePtr.baseAddress]
                
                histogramBins.withUnsafeMutableBufferPointer { histogramBinsPtr in
                    let error = vImageHistogramCalculation_ARGB8888(&histogramSource,
                                                                    histogramBinsPtr.baseAddress!,
                                                                    vImage_Flags(kvImageNoFlags))
                    
                    guard error == kvImageNoError else {
                        fatalError("Error calculating histogram: \(error)")
                    }
                }
            }
        }
    }
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:calculate-the-reference-histogram-using-vimage-buffers:0020:0001">On return, the four arrays contain the histogram data from the <code>histogramSource</code>.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:specify-the-image-histogram-using-vimage-buffers:0021:0001">Specify the Image Histogram Using Vimage Buffers</span>

<span class="ko-segment" data-segment-id="seg:paragraph:specify-the-image-histogram-using-vimage-buffers:0022:0001">The <a href="vimagehistogramspecification_argb8888(_:_:_:_:">@@TOKEN_0@@</a>.md) performs the histogram specification operation.</span> <span class="ko-segment" data-segment-id="seg:paragraph:specify-the-image-histogram-using-vimage-buffers:0022:0002">The following code matches the histogram of the reference image to the input image:</span>

```swift
histogramBinZero.withUnsafeBufferPointer { zeroPtr in
    histogramBinOne.withUnsafeBufferPointer { onePtr in
        histogramBinTwo.withUnsafeBufferPointer { twoPtr in
            histogramBinThree.withUnsafeBufferPointer { threePtr in
                
                var histogramBins = [zeroPtr.baseAddress, onePtr.baseAddress,
                                     twoPtr.baseAddress, threePtr.baseAddress]
                
                histogramBins.withUnsafeMutableBufferPointer { histogramBinsPtr in
                    let error = vImageHistogramSpecification_ARGB8888(&imageSource,
                                                                      &destinationBuffer,
                                                                      histogramBinsPtr.baseAddress!,
                                                                      vImage_Flags(kvImageNoFlags))
                    
                    guard error == kvImageNoError else {
                        fatalError("Error specifying histogram: \(error)")
                    }
                }
            }
        }
    }
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:specify-the-image-histogram-using-vimage-buffers:0024:0001">On return, <code>destinationBuffer</code> contains the original input image with the histogram that the reference image specified.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0025:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avmetadatakey/metadata3gpuserdatakeyperformer.md">static let id3MetadataKeyCommercialInformation: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">구매 정보를 포함하는 웹페이지를 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avmetadatakey/metadata3gpuserdatakeyrecordingyear.md">static let id3MetadataKeyComposer: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">Convert an RGB image to discrete luminance and chrominance channels, and apply color and contrast treatments.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="avmetadatakey/metadata3gpuserdatakeythumbnail.md">static let id3MetadataKeyConductor: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">Use the vImage library’s polynomial transform to apply tone curve adjustments to images.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="avmetadatakey/metadata3gpuserdatakeytitle.md">static let id3MetadataKeyContentGroupDescription: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">Convert an image to L*a*b* color space and apply hue adjustment.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="avmetadatakey/metadata3gpuserdatakeyuserrating.md">static let id3MetadataKeyContentType: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">미디어 콘텐츠 유형을 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="histogram.md">Histogram</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">저작권 문구를 나타내는 키입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">*<a href="https://developer.apple.com/documentation/accelerate/specifying-histograms-with-vimage">View on Apple Developer</a>*</span>

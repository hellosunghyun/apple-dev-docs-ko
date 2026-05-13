---
source_path: "documentation/Accelerate/vimage/pixelbuffer/contraststretch-bincountdestination-3bo13.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/contraststretch-bincountdestination-3bo13"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:contraststretchbincountdestination:0000:0001">contrastStretch(binCount:destination:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:contraststretchbincountdestination:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:contraststretchbincountdestination:0002:0001">Stretches the histogram of a 32-bit planar pixel buffer.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:contraststretchbincountdestination:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:contraststretchbincountdestination:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:contraststretchbincountdestination:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:contraststretchbincountdestination:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:contraststretchbincountdestination:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:contraststretchbincountdestination:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:contraststretchbincountdestination:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:contraststretchbincountdestination:0004:0007">watchOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func contrastStretch(binCount: Int, destination: vImage.PixelBuffer<vImage.PlanarF>)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">Use this function to evenly distributes a histogram’s pixel values across the full range of available pixel values.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">For example, the following code stretches the contrast of an image:</span>

```swift
let srcImage =  imageLiteral(resourceName: "Landscape_28_lowContrast.jpg").cgImage(
    forProposedRect: nil,
    context: nil,
    hints: nil)!

var cgImageFormat = vImage_CGImageFormat(
    bitsPerComponent: 32,
    bitsPerPixel: 32 * 1,
    colorSpace: CGColorSpaceCreateDeviceGray(),
    bitmapInfo: CGBitmapInfo(rawValue: kCGBitmapByteOrder32Host.rawValue |
                             CGBitmapInfo.floatComponents.rawValue |
                             CGImageAlphaInfo.none.rawValue))!

let buffer = try vImage.PixelBuffer(
    cgImage: srcImage,
    cgImageFormat: &cgImageFormat,
    pixelFormat: vImage.PlanarF.self)

buffer.contrastStretch(binCount: 1024,
                       destination: buffer)

let outputImage = buffer.makeCGImage(cgImageFormat: cgImageFormat)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>binCount</code>: The number of histogram entries for each channel.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0002"><code>destination</code>: The destination pixel buffer.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="enhancing-image-contrast-with-histogram-manipulation.md">Enhancing image contrast with histogram manipulation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">Enhance and adjust the contrast of an image with histogram equalization and contrast stretching.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="vimage/pixelbuffer/contraststretch(destination:">func contrastStretch(destination: vImage.PixelBuffer&lt;vImage.Planar8&gt;)</a>-6usbh.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">Stretches the histogram of an 8-bit planar pixel buffer.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avmetadataidentifier/commonidentifierauthor.md">func contentKeySession(AVContentKeySession, contentKeyRequest: AVContentKeyRequest, didFailWithError: any Error)</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">Stretches the histogram of an 8-bit-per-channel, 4-channel interleaved pixel buffer.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avcontentkeysessiondelegate/contentkeysession(_:contentkeyrequestdidsucceed:">func contentKeySession(AVContentKeySession, contentKeyRequestDidSucceed: AVContentKeyRequest)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">Stretches the histogram of a 32-bit-per-channel, 4-channel interleaved pixel buffer.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avcontentkeysessiondelegate/contentkeysessiondidgenerateexpiredsessionreport(_:">func contentKeySessionDidGenerateExpiredSessionReport(AVContentKeySession)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">Stretches the histogram of a multiple-plane 8-bit pixel buffer.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="vimage/pixelbuffer/contraststretch(bincount:destination:">func contrastStretch(binCount: Int, destination: vImage.PixelBuffer&lt;Format&gt;)</a>-81vq2.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">Stretches the histogram of a multiple-plane 32-bit pixel buffer.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">*<a href="https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/contraststretch(bincount:destination:">View on Apple Developer</a>-3bo13)*</span>

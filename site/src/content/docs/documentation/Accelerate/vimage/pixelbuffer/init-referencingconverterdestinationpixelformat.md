---
source_path: "documentation/Accelerate/vimage/pixelbuffer/init-referencingconverterdestinationpixelformat.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/init-referencingconverterdestinationpixelformat"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initreferencingconverterdestinationpixelformat:0000:0001">init(referencing:converter:destinationPixelFormat:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initreferencingconverterdestinationpixelformat:0001:0001">**Framework**: Accelerate **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initreferencingconverterdestinationpixelformat:0002:0001">Returns a new pixel buffer that references the specified Core Video pixel buffer and populated converter.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initreferencingconverterdestinationpixelformat:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initreferencingconverterdestinationpixelformat:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initreferencingconverterdestinationpixelformat:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initreferencingconverterdestinationpixelformat:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:initreferencingconverterdestinationpixelformat:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initreferencingconverterdestinationpixelformat:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initreferencingconverterdestinationpixelformat:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:initreferencingconverterdestinationpixelformat:0004:0007">watchOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
init(referencing lockedCVPixelBuffer: CVPixelBuffer, converter: vImageConverter, destinationPixelFormat: Format.Type = Format.self)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">The following code shows how to incorporate a vImage pixel buffer into a <a href="https://developer.apple.com/documentation/CoreImage/CIImageProcessorKernel">@@TOKEN_0@@</a> instance.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">요소가 true로 평가되면 어텐션 연산에서 key 행렬의 해당 요소를 무시합니다.</span>

```swift
class ContrastStretchImageProcessorKernel: CIImageProcessorKernel {
    
    static var cgImageFormat = vImage_CGImageFormat(
        bitsPerComponent: 8,
        bitsPerPixel: 32,
        colorSpace: CGColorSpaceCreateDeviceRGB(),
        bitmapInfo: CGBitmapInfo(rawValue: CGImageAlphaInfo.noneSkipLast.rawValue),
        renderingIntent: .defaultIntent)!
    
    static let cvImageFormat = vImageCVImageFormat.make(
        format: .format32BGRA,
        colorSpace: CGColorSpaceCreateDeviceRGB(),
        alphaIsOpaqueHint: true)!
    
    static let converter = try! vImageConverter.make(sourceFormat: cvImageFormat,
                                                     destinationFormat: cgImageFormat)
    
    override class var outputFormat: CIFormat {
        return CIFormat.BGRA8
    }
    
    override class func formatForInput(at input: Int32) -> CIFormat {
        return CIFormat.BGRA8
    }
    
    override class func process(with inputs: [CIImageProcessorInput]?,
                                arguments: [String: Any]?,
                                output: CIImageProcessorOutput) throws {
        
        guard
            let input = inputs?.first,
            let inputPixelBuffer = input.pixelBuffer,
            let outputPixelBuffer = output.pixelBuffer else {
                return
            }
        
        CVPixelBufferLockBaseAddress(inputPixelBuffer,
                                     CVPixelBufferLockFlags.readOnly)
        CVPixelBufferLockBaseAddress(outputPixelBuffer,
                                     CVPixelBufferLockFlags(rawValue: 0))
        
        defer {
            CVPixelBufferUnlockBaseAddress(inputPixelBuffer,
                                           CVPixelBufferLockFlags.readOnly)
            CVPixelBufferUnlockBaseAddress(outputPixelBuffer,
                                           CVPixelBufferLockFlags(rawValue: 0))
        }
        
        let source = vImage.PixelBuffer(
            referencing: inputPixelBuffer,
            converter: converter,
            destinationPixelFormat: vImage.Interleaved8x4.self)
        
        let destination = vImage.PixelBuffer(
            referencing: outputPixelBuffer,
            converter: converter,
            destinationPixelFormat: vImage.Interleaved8x4.self)
        
        source.contrastStretch(destination: destination)
    }
}
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0010:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0001"><code>lockedCVPixelBuffer</code>: The locked Core Video pixel buffer. Use <a href="https://developer.apple.com/documentation/CoreVideo/CVPixelBufferLockBaseAddress(_:_:">@@TOKEN_1@@</a>) and <a href="https://developer.apple.com/documentation/CoreVideo/CVPixelBufferUnlockBaseAddress(_:_:">@@TOKEN_2@@</a>) to lock and unlock the pixel buffer.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0002"><code>converter</code>: The vImage Core Video to Core Graphics any-to-any converter.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0003"><code>destinationPixelFormat</code>: The pixel format of the initialized buffer.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0012:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="vimagebuffer_initforcopyfromcvpixelbuffer(_:_:_:_:">func vImageBuffer_InitForCopyFromCVPixelBuffer(UnsafeMutablePointer&lt;vImage_Buffer&gt;, vImageConverter, CVPixelBuffer, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">Initializes an array of vImage buffers in the order necessary to copy from a Core Video pixel buffer.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="vimage/pixelbuffer/init(copying:cvimageformat:cgimageformat:pixelformat:">init(copying: CVPixelBuffer, cvImageFormat: vImageCVImageFormat, cgImageFormat: inout vImage_CGImageFormat, pixelFormat: Format.Type) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">Initializes a pixel buffer by copying the data from a Core Video pixel buffer.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="vimage/pixelbuffer/init(referencing:planeindex:overridesize:pixelformat:">init(referencing: CVPixelBuffer, planeIndex: Int, overrideSize: vImage.Size?, pixelFormat: Format.Type)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">Initializes a pixel buffer by refencing the data from a single plane of a multiplane Core Video pixel buffer.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">*<a href="https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/init(referencing:converter:destinationpixelformat:">View on Apple Developer</a>)*</span>

---
source_path: "documentation/Accelerate/converting-chroma-subsampled-images.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/converting-chroma-subsampled-images"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:converting-chroma-subsampled-images:0000:0001">크로마 서브샘플링된 이미지 변환</span>

<span class="ko-segment" data-segment-id="seg:paragraph:converting-chroma-subsampled-images:0001:0001">**프레임워크**: Accelerate</span>

<span class="ko-segment" data-segment-id="seg:paragraph:converting-chroma-subsampled-images:0002:0001">서브샘플링된 크로마 정보를 가진 이미지들 간의 변환을 위해 적절한 차원의 vImage 버퍼를 생성합니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0003:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0001">비디오 데이터를 사용할 때는 서로 다른 해상도로 분리된 휘도(Y) 및 색차(CbCr) 정보를 사용하는 이미지를 자주 다룹니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0002">vImage 라이브러리는 이 형식의 이미지를 인터리브된 RGB 형식으로 변환하는 기능을 제공하여 일부 이미지 처리 작업 적용을 단순화합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0005:0001">반면에 채도 조정과 같은 다른 이미지 변환 작업은 RGB 이미지를 YCbCr로 변환해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0005:0002">색차 정보의 해상도를 낮추면 처리해야 하는 픽셀 수가 절반 또는 4분의 1로 줄어들므로 앱 성능이 향상됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0006:0001">*크로마 서브샘플링*은 색차 정보의 해상도를 줄여 이미지 데이터를 압축하는 인코딩 방식입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0006:0002">크로마 서브샘플링은 인간 시각이 휘도보다 색상보다 덜 민감하다는 사실을 기반으로 합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0007:0001">이 문서의 코드는 4:2:0 서브샘플링 방식을 사용하며, 이는 휘도 픽셀 4개마다 Cb 픽셀 1개와 Cr 픽셀 1개가 있다는 의미입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0007:0002">즉 각 색차 채널은 휘도 채널의 너비와 높이의 절반입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0007:0003">예를 들어 4:2:0 서브샘플링은 4 x 2 휘도 채널과 2 x 1 크기의 두 색차 채널을 가진 4 x 2 이미지를 나타냅니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">!<a href="https://docs-assets.developer.apple.com/published/fc95d53c190aa0f91c8411fcd7bbf01a/media-4264983%402x.png">RGB 원본 픽셀이 2 x 2 타일로 정렬된 개별 휘도 및 색차 픽셀로 변환되는 다이어그램.</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0001">아래 이미지는 사진에 4:2:0 서브샘플링 방식을 적용한 예시입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0002">*Y* 휘도 채널은 원본 이미지와 동일한 해상도를 가집니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0003">그러나 *Cb*와 *Cr* 색차 채널은 더 낮은 해상도를 가집니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0004">휘도 채널의 2 x 2 픽셀 정사각형마다 색차 채널에는 단일 픽셀 하나만 포함됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0005">![YpCbCr 이미지의 두 색차 채널과 단일 휘도 채널 크기 및 내용을 동일한 피사체의 RGB 이미지와 비교한 다이어그램,</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0010:0001">좌측에는 세 개의 YpCbCr 채널이 있으며, 우측에는 단일 인터리브 RGB 이미지가 있습니다.](https://docs-assets.developer.apple.com/published/696306b4d1602091ebaca151924bab5d/media-3866875%402x.png)</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0010:0002">On the left are the three YpCbCr channels and on the right in the single, interleaved RGB image.](https://docs-assets.developer.apple.com/published/696306b4d1602091ebaca151924bab5d/media-3866875%402x.png)</span>

##### <span class="ko-segment" data-segment-id="seg:heading:define-the-core-video-and-core-graphics-image-formats:0011:0001">Core Video 및 Core Graphics 이미지 형식 정의</span>

<span class="ko-segment" data-segment-id="seg:paragraph:define-the-core-video-and-core-graphics-image-formats:0012:0001"><a href="https://developer.apple.com/documentation/CoreVideo/cvpixelbuffer-q2e">@@TOKEN_0@@</a> 객체를 사용하는 경우, vImage 라이브러리는 Core Video 픽셀 버퍼에서 <a href="vimagecvimageformat.md">@@TOKEN_1@@</a> 구조체를 생성하는 <a href="vimagecvimageformat_createwithcvpixelbuffer(_:">@@TOKEN_2@@</a>.md) 및 <a href="vimagecvimageformat/make(buffer:">@@TOKEN_3@@</a>.md) 함수를 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:define-the-core-video-and-core-graphics-image-formats:0012:0002">하지만 이 문서의 코드는 YpCbCr 이미지를 설명하는 <a href="vimagecvimageformat/format/format420ypcbcr8planarfullrange.md">@@TOKEN_0@@</a> Core Video 이미지 형식을 정의합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:define-the-core-video-and-core-graphics-image-formats:0012:0003">아래 코드는 채널당 8비트 RGB Core Graphics 이미지 형식도 정의합니다.</span>

```swift
var cgImageFormat = vImage_CGImageFormat(
    bitsPerComponent: 8,
    bitsPerPixel: 8 * 3,
    colorSpace: CGColorSpaceCreateDeviceRGB(),
    bitmapInfo: CGBitmapInfo(rawValue: CGImageAlphaInfo.none.rawValue))!

let cvImageFormat = vImageCVImageFormat.make(
    format: .format420YpCbCr8PlanarFullRange,
    matrix: kvImage_ARGBToYpCbCrMatrix_ITU_R_601_4.pointee,
    chromaSiting: .center,
    colorSpace: CGColorSpaceCreateDeviceRGB(),
    alphaIsOpaqueHint: true)!
```

##### <span class="ko-segment" data-segment-id="seg:heading:perform-the-core-graphics-to-core-video-conversion:0014:0001">Core Graphics에서 Core Video로의 변환 수행</span>

<span class="ko-segment" data-segment-id="seg:paragraph:perform-the-core-graphics-to-core-video-conversion:0015:0001">Core Video 및 Core Graphics 이미지 형식 설명을 사용해 Core Graphics에서 Core Video 이미지 형식으로 변환하는 any-to-any <a href="vimageconverter.md">@@TOKEN_0@@</a> 인스턴스를 생성합니다.</span>

```swift
let cgToCvConverter = try vImageConverter.make(sourceFormat: cgImageFormat,
                                               destinationFormat: cvImageFormat)
```

<span class="ko-segment" data-segment-id="seg:paragraph:perform-the-core-graphics-to-core-video-conversion:0017:0001">변환기는 대상 버퍼 수를 올바르게 생성하는 데 사용하는 <a href="vimageconverter/destinationbuffercount.md">@@TOKEN_0@@</a> 속성을 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:perform-the-core-graphics-to-core-video-conversion:0017:0002">색차 크기는 휘도 크기의 1/4이지만, 세 개의 픽셀 버퍼 모두의 크기는 소스 이미지 크기로 선언합니다.</span>

```swift
let ypCbCr8PlanarBuffers = (0 ..< cgToCvConverter.destinationBufferCount).map { _ in
    vImage.PixelBuffer<vImage.Planar8>(size: rgbSourceBuffer.size)
}
```

> <span class="ko-segment" data-segment-id="seg:blockquote:perform-the-core-graphics-to-core-video-conversion:0019:0001">❗ **중요**: any-to-any 변환에 전달하는 소스 및 대상 vImage 버퍼는 모두 동일한 크기를 공유해야 합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:perform-the-core-graphics-to-core-video-conversion:0020:0001">아래 코드에서 <code>rgbSourceBuffer</code>는 위의 <a href="vimage_cgimageformat.md">@@TOKEN_1@@</a> 구조와 일치하는 형식의 <a href="vimage/interleaved8x3.md">@@TOKEN_2@@</a> <a href="vimage/pixelbuffer.md">@@TOKEN_3@@</a>로, 소스 이미지를 포함합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:perform-the-core-graphics-to-core-video-conversion:0020:0002">대상 버퍼를 채우려면 <a href="vimageconverter/convert(from:to:">@@TOKEN_0@@</a>-587gc.md) 메서드를 호출합니다.</span>

```swift
try cgToCvConverter.convert(from: [rgbSourceBuffer],
                            to: ypCbCr8PlanarBuffers)
```

<span class="ko-segment" data-segment-id="seg:paragraph:perform-the-core-graphics-to-core-video-conversion:0022:0001">반환되면 <code>ypCbCr8PlanarBuffers</code> 배열의 세 픽셀 버퍼에 휘도와 두 개의 크로마 채널이 들어 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:perform-the-core-graphics-to-core-video-conversion:0022:0002">아래 이미지는 휘도 채널(왼쪽), Cb 채널(중간), Cr 채널(오른쪽)을 보여줍니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:perform-the-core-graphics-to-core-video-conversion:0023:0001">![꽃 사진의 YpCrCb 표현에서 서로 다른 평면을 보여주는 세 개의 그레이스케일 이미지.</span> <span class="ko-segment" data-segment-id="seg:paragraph:perform-the-core-graphics-to-core-video-conversion:0023:0002">첫 번째 이미지에는 휘도 정보가 포함되어 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:perform-the-core-graphics-to-core-video-conversion:0023:0003">두 번째와 세 번째 이미지는 크로마 정보가 포함되어 있으며, 이미지의 왼쪽 위 1/4 영역만 채우도록 크기가 조정됩니다.](https://docs-assets.developer.apple.com/published/05210844d773d099f3ddea68afb37de1/media-4264989%402x.png)</span>

##### <span class="ko-segment" data-segment-id="seg:heading:apply-an-operation-to-the-subsampled-chrominance-channels:0024:0001">하위 샘플링된 크로마 채널에 연산 적용</span>

<span class="ko-segment" data-segment-id="seg:paragraph:apply-an-operation-to-the-subsampled-chrominance-channels:0025:0001">두 크로마 채널은 전체 크기의 휘도 채널과 같은 크기이지만 데이터는 1/4만 포함합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:apply-an-operation-to-the-subsampled-chrominance-channels:0025:0002">Cb 및 Cr 채널에 이미지 처리 연산을 적용하는 경우 <a href="vimage/pixelbuffer/withunsaferegionofinterest(_:_:">@@TOKEN_0@@</a>.md) 메서드를 사용합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:apply-an-operation-to-the-subsampled-chrominance-channels:0025:0003">이렇게 하면 사용되지 않는 픽셀이 처리되지 않습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:apply-an-operation-to-the-subsampled-chrominance-channels:0025:0004">아래 코드는 <a href="adjusting-saturation-and-applying-tone-mapping.md">@@TOKEN_0@@</a>에서 다룬 방법을 사용해 이미지의 채도를 감소시킵니다.</span>

```swift
let saturation = Float(0.25)
let preBias = -128
let divisor = 0x1000
let postBias = 128 * divisor
let factor = Int(saturation * Float(divisor))

// Define a region of interest that's a quarter of the area of the
// luminance channel.
let roi = CGRect(x: 0, y: 0,
                 width: ypCbCr8PlanarBuffers[0].width / 2,
                 height: ypCbCr8PlanarBuffers[0].height / 2)

// Indices 1 and 2 refer to the Cb and Cr buffers, respectively.
for index in [1, 2] {
    ypCbCr8PlanarBuffers[index].withUnsafeRegionOfInterest(roi) { buffer in
        buffer.multiply(by: factor,
                        divisor: divisor,
                        preBias: preBias,
                        postBias: postBias,
                        destination: buffer)
    }
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:apply-an-operation-to-the-subsampled-chrominance-channels:0027:0001">사각형 관심 영역에서만 vImage 연산을 제한하는 방법에 대한 자세한 내용은 <a href="applying-vimage-operations-to-regions-of-interest.md">@@TOKEN_0@@</a>를 참고하십시오.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:perform-the-core-video-to-core-graphics-conversion:0028:0001">Core Video에서 Core Graphics로의 변환 수행</span>

<span class="ko-segment" data-segment-id="seg:paragraph:perform-the-core-video-to-core-graphics-conversion:0029:0001">YpCbCr 버퍼를 RGB 버퍼로 변환하려면 소스가 Core Video 이미지 형식이고 대상은 Core Graphics 이미지 형식인 컨버터를 생성합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:perform-the-core-video-to-core-graphics-conversion:0029:0002">위와 동일하게 <a href="vimageconverter/convert(from:to:">@@TOKEN_0@@</a>-587gc.md) 메서드를 호출하되, 소스는 <code>ypCbCr8PlanarBuffers</code> 배열로, 대상은 채널당 8비트 인터리브 버퍼로 지정합니다.</span>

```swift
let cvToCgConverter = try vImageConverter.make(sourceFormat: cvImageFormat,
                                               destinationFormat: cgImageFormat)

let rgbDestinationBuffer = vImage.PixelBuffer<vImage.Interleaved8x3>(
    size: ypCbCr8PlanarBuffers.first!.size)

try cvToCgConverter.convert(from: ypCbCr8PlanarBuffers,
                            to: [rgbDestinationBuffer])
```

<span class="ko-segment" data-segment-id="seg:paragraph:perform-the-core-video-to-core-graphics-conversion:0031:0001">반환되면 <code>rgbDestinationBuffer</code>에 원본 이미지(왼쪽)의 채도 감소 버전(오른쪽)이 들어 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:perform-the-core-video-to-core-graphics-conversion:0032:0001">!<a href="https://docs-assets.developer.apple.com/published/1df1b26d502a07d2261f0ac6c69daf84/media-4264990%402x.png">꽃의 원본 사진과 동일한 사진의 채도 감소 버전을 나란히 비교한 이미지입니다.</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0033:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="building-a-basic-image-conversion-workflow.md">Building a basic image conversion workflow</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">CMYK 이미지를 RGB 이미지로 변환하여 any-to-any 함수의 기본 동작을 익힐 수 있습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="functions-that-perform-any-to-any-conversion.md">Functions that perform any-to-any conversion</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">임의의 색 공간과 비트 심도를 가진 Core Video 또는 Core Graphics 이미지 데이터 간을 변환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">*<a href="https://developer.apple.com/documentation/accelerate/converting-chroma-subsampled-images">View on Apple Developer</a>*</span>

---
source_path: "documentation/Accelerate/vimage/planar16f.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vimage/planar16f"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:vimageplanar16f:0000:0001">vImage.Planar16F</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimageplanar16f:0001:0001">**Framework**: Accelerate **Kind**: struct</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimageplanar16f:0002:0001">단일 채널, 채널당 16비트 부동소수점 버퍼입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimageplanar16f:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:vimageplanar16f:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageplanar16f:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageplanar16f:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageplanar16f:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageplanar16f:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageplanar16f:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageplanar16f:0004:0007">watchOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
struct Planar16F
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:type-methods:0008:0001">타입 메서드</span>

- <span class="ko-segment" data-segment-id="seg:list:type-methods:0009:0001"><a href="vimage/planar16f/makepixel(_:">static func makePixel(Pixel_F) -&gt; Pixel_16F</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:type-methods:0010:0001">32비트 부동소수점 픽셀 값에서 16비트 부동소수점 픽셀 값을 반환합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0011:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0012:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0013:0001"><a href="initializablefromcgimage.md">InitializableFromCGImage</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0013:0002"><a href="pixelformat.md">PixelFormat</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0013:0003"><a href="singleplanepixelformat.md">SinglePlanePixelFormat</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0013:0004"><a href="staticpixelformat.md">StaticPixelFormat</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0014:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="vimage/structuringelement.md">typealias StructuringElement</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">형태학 커널을 나타내는 2차원 행렬입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="vimage/convolutionkernel.md">vImage.ConvolutionKernel</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">1차원 컨볼루션 커널을 설명하는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="vimage/convolutionkernel2d.md">vImage.ConvolutionKernel2D</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">컨볼루션 커널을 나타내는 2차원 행렬입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="vimage/dynamicpixelformat.md">vImage.DynamicPixelFormat</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">컴파일 시점에 데이터 타입을 알 수 없는 픽셀을 포함하는 버퍼입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="vimage/interleaved16fx2.md">vImage.Interleaved16Fx2</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">2채널, 채널당 16비트 부동소수점 인터리브 버퍼입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="vimage/interleaved16fx4.md">vImage.Interleaved16Fx4</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">4채널, 채널당 16비트 부동소수점 인터리브 버퍼입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="vimage/interleaved16ux2.md">vImage.Interleaved16Ux2</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">2채널, 채널당 16비트 부호 없는 정수 인터리브 버퍼입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="vimage/interleaved16ux4.md">vImage.Interleaved16Ux4</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">4채널, 채널당 16비트 부호 없는 정수 인터리브 버퍼입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001"><a href="vimage/interleaved8x2.md">vImage.Interleaved8x2</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">2채널, 채널당 8비트 인터리브 버퍼입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0033:0001"><a href="vimage/interleaved8x3.md">vImage.Interleaved8x3</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">3채널, 채널당 8비트 인터리브 버퍼입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0035:0001"><a href="vimage/interleaved8x4.md">vImage.Interleaved8x4</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0036:0001">4채널, 채널당 8비트 인터리브 버퍼입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0037:0001"><a href="vimage/interleavedfx2.md">vImage.InterleavedFx2</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0038:0001">2채널, 채널당 32비트 부동소수점 인터리브 버퍼입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0039:0001"><a href="vimage/interleavedfx3.md">vImage.InterleavedFx3</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0040:0001">3채널, 채널당 32비트 부동소수점 인터리브 버퍼입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0041:0001"><a href="vimage/interleavedfx4.md">vImage.InterleavedFx4</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0042:0001">4채널, 채널당 32비트 부동소수점 인터리브 버퍼입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0043:0001"><a href="vimage/multidimensionallookuptable.md">vImage.MultidimensionalLookupTable</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0044:0001">다차원 조회 테이블입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0046:0001">*<a href="https://developer.apple.com/documentation/accelerate/vimage/planar16f">View on Apple Developer</a>*</span>

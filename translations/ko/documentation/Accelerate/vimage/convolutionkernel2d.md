---
source_path: "documentation/Accelerate/vimage/convolutionkernel2d.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vimage/convolutionkernel2d"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:vimageconvolutionkernel2d:0000:0001">vImage.ConvolutionKernel2D</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimageconvolutionkernel2d:0001:0001">**Framework**: Accelerate **Kind**: struct</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimageconvolutionkernel2d:0002:0001">A 2D matrix that represents a convolution kernel.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimageconvolutionkernel2d:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:vimageconvolutionkernel2d:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageconvolutionkernel2d:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageconvolutionkernel2d:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageconvolutionkernel2d:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageconvolutionkernel2d:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageconvolutionkernel2d:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageconvolutionkernel2d:0004:0007">watchOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
struct ConvolutionKernel2D<ComponentType>
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0008:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0009:0001">[init(values: [ComponentType], size: vImage.Size)](vimage/convolutionkernel2d/init(values:size:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0010:0001">Returns a new convolution kernel structure with the size you specify.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0011:0001">[init(values: [ComponentType], width: Int, height: Int)](vimage/convolutionkernel2d/init(values:width:height:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0012:0001">Returns a new convolution kernel structure with the width and height you specify.</span>

### <span class="ko-segment" data-segment-id="seg:heading:instance-properties:0013:0001">Instance Properties</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0014:0001"><a href="vimage/convolutionkernel2d/width.md">let width: vImagePixelCount</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0015:0001">The width of the kernel that must be a positive, odd number.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0016:0001"><a href="vimage/convolutionkernel2d/height.md">let height: vImagePixelCount</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0017:0001">The height of the kernel that must be a positive, odd number.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0018:0001">[let values: [ComponentType]](vimage/convolutionkernel2d/values.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0019:0001">The kernel weights or structuring element values that must contain <code>height * width</code> elements.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0020:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="vimage/structuringelement.md">typealias StructuringElement</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">특정 시간 범위 동안 사용할 수 있는 가변 메타데이터 항목 모음입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="vimage/convolutionkernel.md">vImage.ConvolutionKernel</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">특정 날짜 범위 내에서 사용할 수 있는 메타데이터 항목 모음입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="vimage/dynamicpixelformat.md">vImage.DynamicPixelFormat</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">특정 날짜 범위 내에서 사용할 수 있는 가변 메타데이터 항목 모음입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="vimage/interleaved16fx2.md">vImage.Interleaved16Fx2</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">HTTP Live Streaming 자산에 대해 정의된 날짜 범위 메타데이터를 캡처하는 데 사용되는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="vimage/interleaved16fx4.md">vImage.Interleaved16Fx4</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">A four-channel, 16-bit-per-channel, floating-point interleaved buffer.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001"><a href="vimage/interleaved16ux2.md">vImage.Interleaved16Ux2</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">A two-channel, 16-bit-per-channel, unsigned-integer interleaved buffer.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0033:0001"><a href="vimage/interleaved16ux4.md">vImage.Interleaved16Ux4</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">A four-channel, 16-bit-per-channel, unsigned-integer interleaved buffer.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0035:0001"><a href="vimage/interleaved8x2.md">vImage.Interleaved8x2</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0036:0001">A two-channel, 8-bit-per-channel interleaved buffer.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0037:0001"><a href="vimage/interleaved8x3.md">vImage.Interleaved8x3</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0038:0001">A three-channel, 8-bit-per-channel interleaved buffer.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0039:0001"><a href="vimage/interleaved8x4.md">vImage.Interleaved8x4</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0040:0001">A four-channel, 8-bit-per-channel interleaved buffer.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0041:0001"><a href="vimage/interleavedfx2.md">vImage.InterleavedFx2</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0042:0001">A two-channel, 32-bit-per-channel, floating-point interleaved buffer.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0043:0001"><a href="vimage/interleavedfx3.md">vImage.InterleavedFx3</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0044:0001">A three-channel, 32-bit-per-channel, floating-point interleaved buffer.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0045:0001"><a href="vimage/interleavedfx4.md">vImage.InterleavedFx4</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0046:0001">A four-channel, 32-bit-per-channel, floating-point interleaved buffer.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0047:0001"><a href="vimage/multidimensionallookuptable.md">vImage.MultidimensionalLookupTable</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0048:0001">A multidimensional lookup table.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0049:0001"><a href="vimage/options.md">vImage.Options</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0050:0001">Set flags on vImage operations to specify processing options.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0052:0001">*<a href="https://developer.apple.com/documentation/accelerate/vimage/convolutionkernel2d">View on Apple Developer</a>*</span>

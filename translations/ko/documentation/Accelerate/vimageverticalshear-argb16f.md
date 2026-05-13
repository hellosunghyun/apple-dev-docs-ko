---
source_path: "documentation/Accelerate/vimageverticalshear-argb16f.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vimageverticalshear-argb16f"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:vimageverticalshearargb16f:0000:0001">vImageVerticalShear_ARGB16F(_:_:_:_:_:_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimageverticalshearargb16f:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimageverticalshearargb16f:0002:0001">부동 소수점 16비트 채널당 4채널 인터리브 이미지의 관심 영역에서 단정밀도 수직 전단 변환을 수행합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimageverticalshearargb16f:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:vimageverticalshearargb16f:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageverticalshearargb16f:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageverticalshearargb16f:0004:0003">Mac Catalyst 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageverticalshearargb16f:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageverticalshearargb16f:0004:0005">tvOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageverticalshearargb16f:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageverticalshearargb16f:0004:0007">watchOS 8.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func vImageVerticalShear_ARGB16F(_ src: UnsafePointer<vImage_Buffer>, _ dest: UnsafePointer<vImage_Buffer>, _ srcOffsetToROI_X: vImagePixelCount, _ srcOffsetToROI_Y: vImagePixelCount, _ yTranslate: Float, _ shearSlope: Float, _ filter: ResamplingFilter!, _ backColor: UnsafePointer<UInt16>!, _ flags: vImage_Flags) -> vImage_Error
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001"><a href="kvimagenoerror.md">@@TOKEN_0@@</a>; 그렇지 않으면 <a href="data-types-and-constants.md">@@TOKEN_1@@</a>에서 설명하는 오류 코드 중 하나입니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">이 함수는 사용자가 지정한 리샘플링 필터를 사용해 이미지를 한 차원에서 기울이기, 크기 조정 및 이동 변환합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">이미지 크기 조정에는 리샘플링 필터의 scale 속성을 사용하고, 대상 이미지의 위치 조정에는 translate 매개변수를 사용합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0003">이 함수는 대상 버퍼를 채우는 데 필요한 만큼 소스 이미지를 변환합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0004">따라서 관심 영역 밖의 픽셀도 변환할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">이 함수는 제자리(in-place)로 동작하지 않습니다. 즉, 소스 버퍼와 대상 버퍼는 서로 다른 메모리를 가리켜야 합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0012:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0001"><code>src</code>: 소스 이미지를 포함하는 vImage 버퍼 구조체에 대한 포인터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0002"><code>dest</code>: 대상 vImage 버퍼 구조체에 대한 포인터입니다. 이 구조체의 <code>height</code>, <code>width</code>, <code>rowBytes</code> 필드를 채우고 적절한 크기의 데이터 버퍼를 할당할 책임이 있습니다. 반환 시 이 구조체가 가리키는 데이터 버퍼에는 대상 이미지 데이터가 포함됩니다. 더 이상 데이터 버퍼가 필요하지 않으면 메모리 누수를 방지하기 위해 메모리를 해제해야 합니다. 이 매개변수는 소스 이미지 내 관심 영역의 크기도 지정합니다. 관심 영역의 높이와 너비는 대상 이미지 버퍼와 동일합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0003"><code>srcOffsetToROI_X</code>: 소스 이미지 내에서 관심 영역 좌측 상단 픽셀을 기준으로 한 수평 오프셋(픽셀)입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0004"><code>srcOffsetToROI_Y</code>: 소스 이미지 내에서 관심 영역 좌측 상단 픽셀을 기준으로 한 수직 오프셋(픽셀)입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0005"><code>yTranslate</code>: 수직 방향의 이동 값입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0006"><code>shearSlope</code>: 시계 방향으로 측정한 전단된 이미지 전면 모서리의 기울기입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0007"><code>filter</code>: 함수가 사용하는 리샘플링 필터입니다. 자세한 내용은 <a href="reducing-artifacts-with-custom-resampling-filters.md">@@TOKEN_1@@</a>를 참조합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0008"><code>backColor</code>: 배경색입니다. <code>kvImageBackgroundColorFill</code> 플래그를 설정한 경우 픽셀 값을 전달합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0009"><code>flags</code>: 변환을 적용할 때 사용할 옵션입니다. 소스 이미지 가장자리 바깥의 픽셀 위치 처리 방식을 지정하려면 다음 플래그 중 하나를 설정합니다: <a href="kvimagebackgroundcolorfill.md">@@TOKEN_1@@</a> 또는 <a href="kvimageedgeextend.md">@@TOKEN_2@@</a>. 더 높은 품질이지만 느린 리샘플링 필터를 사용하려면 <a href="kvimagehighqualityresampling.md">@@TOKEN_3@@</a> 플래그를 설정합니다. 코드에서 자체 타일링 또는 자체 멀티스레딩을 구현한 경우 <a href="kvimagedonottile.md">@@TOKEN_4@@</a>을 전달합니다. 이 함수는 <a href="kvimageleavealphaunchanged.md">@@TOKEN_5@@</a> 플래그를 무시합니다. vImage가 더 빠르지만 정밀도가 낮은 내부 산술을 사용하도록 하려면 <a href="kvimageusefp16accumulator.md">@@TOKEN_6@@</a> 플래그를 설정합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0014:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="applying-geometric-transforms-to-images.md">Applying geometric transforms to images</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">vImage를 사용해 이미지 버퍼를 반사하고, 전단, 회전 및 스케일링합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="vimageverticalshear_planar16u(_:_:_:_:_:_:_:_:_:">func vImageVerticalShear_Planar16U(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, vImagePixelCount, vImagePixelCount, Float, Float, ResamplingFilter!, Pixel_16U, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">부호 없는 16비트 평면 이미지의 관심 영역에서 단정밀도 수직 전단 변환을 수행합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="vimageverticalshear_planar16s(_:_:_:_:_:_:_:_:_:">func vImageVerticalShear_Planar16S(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, vImagePixelCount, vImagePixelCount, Float, Float, ResamplingFilter!, Pixel_16S, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">부호 있는 16비트 평면 이미지의 관심 영역에서 단정밀도 수직 전단 변환을 수행합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="vimageverticalshear_planar16f(_:_:_:_:_:_:_:_:_:">func vImageVerticalShear_Planar16F(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, vImagePixelCount, vImagePixelCount, Float, Float, ResamplingFilter!, Pixel_16F, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">부동 소수점 16비트 평면 이미지의 관심 영역에서 단정밀도 수직 전단 변환을 수행합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="vimageverticalshear_cbcr16u(_:_:_:_:_:_:_:_:_:">func vImageVerticalShear_CbCr16U(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, vImagePixelCount, vImagePixelCount, Float, Float, ResamplingFilter!, UnsafePointer&lt;UInt16&gt;!, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">Performs a single-precision vertical shear on a region of interest within an unsigned 16-bit-per-channel, 2-channel interleaved image.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="vimageverticalshear_cbcr16f(_:_:_:_:_:_:_:_:_:">func vImageVerticalShear_CbCr16F(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, vImagePixelCount, vImagePixelCount, Float, Float, ResamplingFilter!, UnsafePointer&lt;UInt16&gt;!, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">Performs a single-precision vertical shear on a region of interest within a floating-point 16-bit-per-channel, 2-channel interleaved image.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="vimageverticalshear_argb16u(_:_:_:_:_:_:_:_:_:">func vImageVerticalShear_ARGB16U(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, vImagePixelCount, vImagePixelCount, Float, Float, ResamplingFilter!, UnsafePointer&lt;UInt16&gt;!, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">Performs a single-precision vertical shear on a region of interest within an unsigned 16-bit-per-channel, 4-channel interleaved image.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="vimageverticalshear_argb16s(_:_:_:_:_:_:_:_:_:">func vImageVerticalShear_ARGB16S(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, vImagePixelCount, vImagePixelCount, Float, Float, ResamplingFilter!, UnsafePointer&lt;Int16&gt;!, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">Performs a single-precision vertical shear on a region of interest within a signed 16-bit-per-channel, 4-channel interleaved image.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">*<a href="https://developer.apple.com/documentation/accelerate/vimageverticalshear_argb16f(_:_:_:_:_:_:_:_:_:">View on Apple Developer</a>)*</span>

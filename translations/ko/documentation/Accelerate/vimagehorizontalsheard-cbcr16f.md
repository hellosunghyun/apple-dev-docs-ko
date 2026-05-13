---
source_path: "documentation/Accelerate/vimagehorizontalsheard-cbcr16f.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vimagehorizontalsheard-cbcr16f"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:vimagehorizontalsheardcbcr16f:0000:0001">vImageHorizontalShearD_CbCr16F(_:_:_:_:_:_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimagehorizontalsheardcbcr16f:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimagehorizontalsheardcbcr16f:0002:0001">이 함수는 채널당 16비트 부동 소수점 2채널 인터리브 이미지의 관심 영역에서 배정도(double-precision) 수평 시어 변환을 수행합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimagehorizontalsheardcbcr16f:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:vimagehorizontalsheardcbcr16f:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimagehorizontalsheardcbcr16f:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimagehorizontalsheardcbcr16f:0004:0003">Mac Catalyst 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimagehorizontalsheardcbcr16f:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimagehorizontalsheardcbcr16f:0004:0005">tvOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimagehorizontalsheardcbcr16f:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimagehorizontalsheardcbcr16f:0004:0007">watchOS 8.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func vImageHorizontalShearD_CbCr16F(_ src: UnsafePointer<vImage_Buffer>, _ dest: UnsafePointer<vImage_Buffer>, _ srcOffsetToROI_X: vImagePixelCount, _ srcOffsetToROI_Y: vImagePixelCount, _ xTranslate: Double, _ shearSlope: Double, _ filter: ResamplingFilter!, _ backColor: UnsafePointer<UInt16>!, _ flags: vImage_Flags) -> vImage_Error
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">반환 값은 <a href="kvimagenoerror.md">@@TOKEN_0@@</a>입니다. 그렇지 않으면 <a href="data-types-and-constants.md">@@TOKEN_1@@</a>에 설명된 오류 코드 중 하나가 반환됩니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">이 함수는 사용자가 지정한 재샘플링 필터를 사용해 한 차원에서 이미지를 시어, 크기 조정, 이동합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">재샘플링 필터의 <code>scale</code> 속성을 사용해 이미지를 크기 조정하고 <code>translate</code> 매개변수로 대상 이미지의 위치를 조정합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0003">이 함수는 대상 버퍼를 채우기 위해 필요한 만큼 소스 이미지의 픽셀을 변환합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0004">따라서 관심 영역 밖의 픽셀도 변환할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">이 함수는 제자리 처리되지 않으므로 <code>src</code>와 <code>dest</code> 버퍼가 서로 다른 메모리를 가리켜야 합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0012:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0001"><code>src</code>: 소스 이미지를 포함하는 vImage 버퍼 구조체에 대한 포인터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0002"><code>dest</code>: 대상 vImage 버퍼 구조체에 대한 포인터입니다. 이 구조체의 <code>height</code>, <code>width</code>, <code>rowBytes</code> 필드를 채우고 적절한 크기의 데이터 버퍼를 할당해야 합니다. 반환 시, 이 구조체가 가리키는 데이터 버퍼에 대상 이미지 데이터가 저장됩니다. 데이터 버퍼가 더 이상 필요하지 않으면 메모리 누수를 방지하려면 메모리를 해제합니다. 이 매개변수는 소스 이미지 내에서 관심 영역의 크기도 지정합니다. 관심 영역의 높이와 너비는 대상 이미지 버퍼와 동일합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0003"><code>srcOffsetToROI_X</code>: 소스 이미지 내 관심 영역의 좌측 상단 픽셀로부터의 수평 오프셋(픽셀)입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0004"><code>srcOffsetToROI_Y</code>: 소스 이미지 내 관심 영역의 좌측 상단 픽셀로부터의 수직 오프셋(픽셀)입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0005"><code>xTranslate</code>: 수평 방향으로 이동할 값입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0006"><code>shearSlope</code>: 시계 방향으로 측정한 시어 이미지의 앞쪽 경계 기울기입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0007"><code>filter</code>: 이 함수가 사용하는 재샘플링 필터입니다. 자세한 내용은 <a href="reducing-artifacts-with-custom-resampling-filters.md">@@TOKEN_1@@</a>에서 확인합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0008"><code>backColor</code>: 배경색입니다. <code>kvImageBackgroundColorFill</code> 플래그를 설정한 경우 픽셀 값을 전달합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0009"><code>flags</code>: 변환 적용 시 사용할 옵션입니다. 소스 이미지 경계 밖 픽셀 위치 처리 방식을 지정하려면 다음 플래그 중 하나를 사용합니다: <a href="kvimagebackgroundcolorfill.md">@@TOKEN_1@@</a> 또는 <a href="kvimageedgeextend.md">@@TOKEN_2@@</a>. vImage가 더 높은 품질이지만 느린 재샘플링 필터를 사용하려면 <a href="kvimagehighqualityresampling.md">@@TOKEN_3@@</a> 플래그를 설정합니다. 코드에서 자체 타일링 또는 멀티스레딩을 구현하는 경우 <a href="kvimagedonottile.md">@@TOKEN_4@@</a> 플래그를 전달합니다. 이 함수는 <a href="kvimageleavealphaunchanged.md">@@TOKEN_5@@</a> 플래그를 무시합니다. vImage가 더 빠르지만 정밀도가 낮은 내부 산술을 사용하도록 하려면 <a href="kvimageusefp16accumulator.md">@@TOKEN_6@@</a> 플래그를 설정합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0014:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="applying-geometric-transforms-to-images.md">이미지에 기하학적 변환 적용</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">vImage를 사용해 이미지 버퍼를 반사, 시어, 회전 및 스케일링합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="vimagehorizontalsheard_planar16f(_:_:_:_:_:_:_:_:_:">func vImageHorizontalShearD_Planar16F(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, vImagePixelCount, vImagePixelCount, Double, Double, ResamplingFilter!, Pixel_16F, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">이 함수는 부동 소수점 16비트 플래너(planar) 이미지의 관심 영역 내에서 배정도 수평 시어를 수행합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="vimagehorizontalsheard_argb16u(_:_:_:_:_:_:_:_:_:">func vImageHorizontalShearD_ARGB16U(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, vImagePixelCount, vImagePixelCount, Double, Double, ResamplingFilter!, UnsafePointer&lt;UInt16&gt;!, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">이 함수는 채널당 부호 없는 16비트, 4채널 인터리브 이미지의 관심 영역 내에서 배정도 수평 시어를 수행합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="vimagehorizontalsheard_argb16s(_:_:_:_:_:_:_:_:_:">func vImageHorizontalShearD_ARGB16S(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, vImagePixelCount, vImagePixelCount, Double, Double, ResamplingFilter!, UnsafePointer&lt;Int16&gt;!, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">이 함수는 채널당 부호 있는 16비트, 4채널 인터리브 이미지의 관심 영역 내에서 배정도 수평 시어를 수행합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="vimagehorizontalsheard_argb16f(_:_:_:_:_:_:_:_:_:">func vImageHorizontalShearD_ARGB16F(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, vImagePixelCount, vImagePixelCount, Double, Double, ResamplingFilter!, UnsafePointer&lt;UInt16&gt;!, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">이 함수는 채널당 부동 소수점 16비트, 4채널 인터리브 이미지의 관심 영역 내에서 배정도 수평 시어를 수행합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="vimagehorizontalsheard_cbcr16s(_:_:_:_:_:_:_:_:_:">func vImageHorizontalShearD_CbCr16S(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, vImagePixelCount, vImagePixelCount, Double, Double, ResamplingFilter!, UnsafePointer&lt;Int16&gt;!, vImage_Flags) -&gt; vImage_Error</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0002"><a href="vimagehorizontalsheard_cbcr16u(_:_:_:_:_:_:_:_:_:">func vImageHorizontalShearD_CbCr16U(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, vImagePixelCount, vImagePixelCount, Double, Double, ResamplingFilter!, UnsafePointer&lt;UInt16&gt;!, vImage_Flags) -&gt; vImage_Error</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0003"><a href="vimagehorizontalshear_cbcr16s(_:_:_:_:_:_:_:_:_:">func vImageHorizontalShear_CbCr16S(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, vImagePixelCount, vImagePixelCount, Float, Float, ResamplingFilter!, UnsafePointer&lt;Int16&gt;!, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">*<a href="https://developer.apple.com/documentation/accelerate/vimagehorizontalsheard_cbcr16f(_:_:_:_:_:_:_:_:_:">Apple Developer에서 보기</a>)*</span>

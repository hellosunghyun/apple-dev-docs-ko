---
source_path: "documentation/Accelerate/vimageconvolvewithbias-argb16f.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vimageconvolvewithbias-argb16f"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:vimageconvolvewithbiasargb16f:0000:0001">vImageConvolveWithBias_ARGB16F(_:_:_:_:_:_:_:_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimageconvolvewithbiasargb16f:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimageconvolvewithbiasargb16f:0002:0001">부동 소수점 16비트 채널 4채널 인터리브 이미지를 2D 커널로 컨볼루션하고 바이어스를 더합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimageconvolvewithbiasargb16f:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:vimageconvolvewithbiasargb16f:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageconvolvewithbiasargb16f:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageconvolvewithbiasargb16f:0004:0003">Mac Catalyst 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageconvolvewithbiasargb16f:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageconvolvewithbiasargb16f:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageconvolvewithbiasargb16f:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageconvolvewithbiasargb16f:0004:0007">watchOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func vImageConvolveWithBias_ARGB16F(_ src: UnsafePointer<vImage_Buffer>, _ dest: UnsafePointer<vImage_Buffer>, _ tempBuffer: UnsafeMutableRawPointer!, _ srcOffsetToROI_X: vImagePixelCount, _ srcOffsetToROI_Y: vImagePixelCount, _ kernel: UnsafePointer<Float>!, _ kernel_height: UInt32, _ kernel_width: UInt32, _ bias: Float, _ backgroundColor: UnsafePointer<UInt16>!, _ flags: vImage_Flags) -> vImage_Error
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001"><a href="kvimagenoerror.md">@@TOKEN_0@@</a>인 경우 문제 없습니다. 그렇지 않으면 음수 값은 <a href="data-types-and-constants.md">@@TOKEN_1@@</a>에 설명된 오류 코드 중 하나를 나타내며, 양수 값은 임시 버퍼에 필요한 크기를 바이트 단위로 나타냅니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

##### <span class="ko-segment" data-segment-id="seg:heading:optimize-performance-with-temporary-buffers:0010:0001">임시 버퍼를 사용한 성능 최적화</span>

<span class="ko-segment" data-segment-id="seg:paragraph:optimize-performance-with-temporary-buffers:0011:0001">이 함수는 패스 간에 중간 픽셀 값을 저장하는 다중 패스 알고리즘을 사용합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:optimize-performance-with-temporary-buffers:0011:0002">일부 경우 대상 버퍼에 그 중간 데이터를 저장할 만큼 충분히 크지 않아서 작업에 추가 저장소가 필요할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:optimize-performance-with-temporary-buffers:0012:0001"><code>tempBuffer</code> 매개변수에 <code>nil</code>을 전달하면 vImage가 이 임시 저장 공간을 생성하고 관리합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:optimize-performance-with-temporary-buffers:0013:0001">코드가 함수를 자주 호출하는 경우(예: 비디오 처리), 해당 임시 버퍼를 직접 생성·관리하고 함수 호출 간에 재사용합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:optimize-performance-with-temporary-buffers:0013:0002">버퍼를 재사용하면 vImage가 호출마다 임시 저장 공간을 할당하는 것을 방지할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:optimize-performance-with-temporary-buffers:0014:0001">자체 임시 버퍼를 사용하려면, 이후 호출에서 동일하게 사용할 모든 다른 매개변수 값을 같은 값으로 설정한 상태에서 먼저 함수를 호출합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:optimize-performance-with-temporary-buffers:0014:0002">또한 <code>kvImageGetTempBufferSize</code> 플래그를 전달합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:optimize-performance-with-temporary-buffers:0014:0003"><code>kvImageGetTempBufferSize</code>는 함수가 실제 처리를 수행하지 않고, 임시 버퍼의 최소 크기(바이트 단위)를 나타내는 양수 값을 반환하도록 지시합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:optimize-performance-with-temporary-buffers:0014:0004">음수 반환 값은 오류를 나타냅니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:optimize-performance-with-temporary-buffers:0015:0001">임시 버퍼 메모리를 할당한 후에는 이후 호출에서 해당 메모리를 <code>tempBuffer</code> 매개변수에 전달하고 <code>kvImageGetTempBufferSize</code> 플래그는 전달하지 않습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:optimize-performance-with-temporary-buffers:0016:0001">서로 다른 크기의 이미지 그룹에서도 동일한 작업 공간 메모리를 사용할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:optimize-performance-with-temporary-buffers:0016:0002">이를 위해 처리 대상 이미지의 최대 너비와 최대 높이를 공유하는 크기의 vImage 버퍼 구조체를 생성합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:optimize-performance-with-temporary-buffers:0016:0003">예를 들어, 4x4, 5x4, 4x5 이미지에 적합한 작업 공간 메모리를 만들려면 크기가 5x5인 버퍼를 전달합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0017:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0001"><code>src</code>: 소스 이미지 데이터를 포함하는 vImage 버퍼 구조체에 대한 포인터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0002"><code>dest</code>: vImage 버퍼 데이터 구조에 대한 포인터입니다. 이 구조체의 <code>height</code>, <code>width</code>, <code>rowBytes</code> 필드를 채우고 적절한 크기의 데이터 버퍼를 할당해야 합니다. 반환 시, 이 구조체가 가리키는 데이터 버퍼에는 대상 이미지 데이터가 포함됩니다. 더 이상 데이터 버퍼가 필요하지 않으면 메모리를 해제해야 합니다. 대상 버퍼의 크기(행 수와 열 수)는 소스 버퍼에서 관심 영역의 크기도 지정합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0003"><code>tempBuffer</code>: 함수가 이미지를 처리할 때 사용하는 작업 공간 메모리에 대한 포인터입니다. <code>nil</code>을 전달하면 함수가 자체 임시 버퍼를 할당하고 사용한 뒤 해제하도록 지시할 수 있습니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0004"><code>srcOffsetToROI_X</code>: 소스 이미지 내에서 관심 영역의 좌상단 픽셀까지의 수평 오프셋(픽셀)입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0005"><code>srcOffsetToROI_Y</code>: 소스 이미지 내에서 관심 영역의 좌상단 픽셀까지의 수직 오프셋(픽셀)입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0006"><code>kernel</code>: 컨볼루션 커널 데이터에 대한 포인터로, 패딩이 없는 packed 배열이어야 합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0007"><code>kernel_height</code>: 커널의 높이(픽셀)입니다. 이 값은 홀수여야 합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0008"><code>kernel_width</code>: 커널의 너비(픽셀)입니다. 이 값은 홀수여야 합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0009"><code>bias</code>: 임의의 클리핑을 수행하기 전에 컨볼루션 결과의 각 요소에 더할 값입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0010"><code>backgroundColor</code>: 배경색입니다. 색상을 제공하는 경우 <code>kvImageBackgroundColorFill</code> 플래그도 함께 설정해야 합니다. 그렇지 않으면 함수가 해당 색상을 무시합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0011"><code>flags</code>: 작업을 수행할 때 사용할 옵션입니다. 코드에서 자체 타일링이나 자체 멀티스레딩을 구현한 경우 <a href="kvimagedonottile.md">@@TOKEN_1@@</a> 플래그를 전달합니다. 함수가 작업 영역 메모리의 최소 크기를 반환하도록 하려면 <a href="kvimagegettempbuffersize.md">@@TOKEN_2@@</a> 플래그를 설정합니다. 소스 이미지 경계를 벗어난 픽셀 위치를 vImage가 처리하는 방식을 지정하려면 다음 플래그 중 하나를 전달합니다: <a href="kvimagecopyinplace.md">@@TOKEN_3@@</a>, <a href="kvimagetruncatekernel.md">@@TOKEN_4@@</a>, <a href="kvimagebackgroundcolorfill.md">@@TOKEN_5@@</a>, 또는 <a href="kvimageedgeextend.md">@@TOKEN_6@@</a>. vImage가 더 빠르지만 정밀도가 낮은 내부 산술을 사용하도록 하려면 <a href="kvimageusefp16accumulator.md">@@TOKEN_7@@</a> 플래그를 설정합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0019:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="vimageconvolve_argbffff(_:_:_:_:_:_:_:_:_:_:">func vImageConvolve_ARGBFFFF(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafeMutableRawPointer!, vImagePixelCount, vImagePixelCount, UnsafePointer&lt;Float&gt;!, UInt32, UInt32, UnsafePointer&lt;Float&gt;!, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">부동 소수점 32비트 채널당 4채널 interleaved 이미지를 2D 커널로 컨볼루션한 다음 픽셀 값을 divisor로 나눕니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="vimageconvolvewithbias_planar8(_:_:_:_:_:_:_:_:_:_:_:_:">func vImageConvolveWithBias_Planar8(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafeMutableRawPointer!, vImagePixelCount, vImagePixelCount, UnsafePointer&lt;Int16&gt;!, UInt32, UInt32, Int32, Int32, Pixel_8, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">8비트 planar 이미지를 2D 커널로 컨볼루션하고 bias를 더합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="vimageconvolvewithbias_planar16f(_:_:_:_:_:_:_:_:_:_:_:">func vImageConvolveWithBias_Planar16F(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafeMutableRawPointer!, vImagePixelCount, vImagePixelCount, UnsafePointer&lt;Float&gt;!, UInt32, UInt32, Float, Pixel_16F, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">2D 커널로 부동 소수점 16비트 planar 이미지를 컨볼루션하고 bias를 더합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="vimageconvolvewithbias_planarf(_:_:_:_:_:_:_:_:_:_:_:">func vImageConvolveWithBias_PlanarF(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafeMutableRawPointer!, vImagePixelCount, vImagePixelCount, UnsafePointer&lt;Float&gt;!, UInt32, UInt32, Float, Pixel_F, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">2D 커널로 부동 소수점 32비트 planar 이미지를 컨볼루션하고 bias를 더합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="vimageconvolvewithbias_argb8888(_:_:_:_:_:_:_:_:_:_:_:_:">func vImageConvolveWithBias_ARGB8888(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafeMutableRawPointer!, vImagePixelCount, vImagePixelCount, UnsafePointer&lt;Int16&gt;!, UInt32, UInt32, Int32, Int32, UnsafePointer&lt;UInt8&gt;!, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">채널당 8비트, 4채널 interleaved 이미지를 2D 커널로 컨볼루션하고 bias를 더합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="vimageconvolvewithbias_argbffff(_:_:_:_:_:_:_:_:_:_:_:">func vImageConvolveWithBias_ARGBFFFF(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafeMutableRawPointer!, vImagePixelCount, vImagePixelCount, UnsafePointer&lt;Float&gt;!, UInt32, UInt32, Float, UnsafePointer&lt;Float&gt;!, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">부동 소수점 32비트 채널당 4채널 interleaved 이미지를 2D 커널로 컨볼루션하고 bias를 더합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">*<a href="https://developer.apple.com/documentation/accelerate/vimageconvolvewithbias_argb16f(_:_:_:_:_:_:_:_:_:_:_:">Apple Developer에서 보기</a>)*</span>

---
source_path: "documentation/Accelerate/vimage/pixelbuffer/reflect-overdestination-7b1md.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/reflect-overdestination-7b1md"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:reflectoverdestination:0000:0001">reflect(over:destination:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:reflectoverdestination:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:reflectoverdestination:0002:0001">Reflects a 32-bit-per-channel, four-channel interleaved pixel buffer over a horizontal or vertical axis.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:reflectoverdestination:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:reflectoverdestination:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:reflectoverdestination:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:reflectoverdestination:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:reflectoverdestination:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:reflectoverdestination:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:reflectoverdestination:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:reflectoverdestination:0004:0007">watchOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func reflect(over axis: vImage.ReflectionAxis, destination: vImage.PixelBuffer<Format>)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>F</code>: 적용할 필터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>batch_size</code>: 입력-출력 쌍의 개수입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="applying-geometric-transforms-to-images.md">Applying geometric transforms to images</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">Reflect, shear, rotate, and scale image buffers using vImage.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="vimage/pixelbuffer/reflect(over:destination:">func reflect(over: vImage.ReflectionAxis, destination: vImage.PixelBuffer&lt;Format&gt;)</a>-9ezqm.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">Reflects an 8-bit planar pixel buffer over a horizontal or vertical axis.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnnsfiltercreatelayermultiheadattention(_:_:">func BNNSFilterCreateLayerMultiheadAttention(UnsafePointer&lt;BNNSLayerParametersMultiheadAttention&gt;, UnsafePointer&lt;BNNSFilterParameters&gt;?) -&gt; BNNSFilter?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">두 입력의 요소별 나눗셈을 계산하며, 첫 번째 입력이 NaN이나 무한대인 경우에도 나누는 값이 0이면 0을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="vimage/pixelbuffer/reflect(over:destination:">func reflect(over: vImage.ReflectionAxis, destination: vImage.PixelBuffer&lt;Format&gt;)</a>-4i4vi.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">Reflects a 32-bit planar pixel buffer over a horizontal or vertical axis.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="vimage/pixelbuffer/reflect(over:destination:">func reflect(over: vImage.ReflectionAxis, destination: vImage.PixelBuffer&lt;Format&gt;)</a>-6syq1.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">Reflects a floating-point 16-bit-per-channel, two-channel interleaved pixel buffer over a horizontal or vertical axis.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="vimage/pixelbuffer/reflect(over:destination:">func reflect(over: vImage.ReflectionAxis, destination: vImage.PixelBuffer&lt;Format&gt;)</a>-7o9tt.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">Reflects an 8-bit-per-channel, four-channel interleaved pixel buffer over a horizontal or vertical axis.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="vimage/pixelbuffer/reflect(over:destination:">func reflect(over: vImage.ReflectionAxis, destination: vImage.PixelBuffer&lt;Format&gt;)</a>-fg4a.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">Reflects an unsigned 16-bit-per-channel, four-channel interleaved pixel buffer over a horizontal or vertical axis.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="vimage/pixelbuffer/reflect(over:destination:">func reflect(over: vImage.ReflectionAxis, destination: vImage.PixelBuffer&lt;Format&gt;)</a>-97wi9.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">Reflects a floating-point 16-bit-per-channel, four-channel interleaved pixel buffer over a horizontal or vertical axis.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="vimage/reflectionaxis.md">vImage.ReflectionAxis</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">The axis to reflect an image.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">*<a href="https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/reflect(over:destination:">View on Apple Developer</a>-7b1md)*</span>

---
source_path: "documentation/Accelerate/vimage/pixelbuffer/reflect-overdestination-6syq1.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/reflect-overdestination-6syq1"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:reflectoverdestination:0000:0001">reflect(over:destination:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:reflectoverdestination:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:reflectoverdestination:0002:0001">채널당 부동소수점 16비트인 2채널 인터리브 픽셀 버퍼를 수평 또는 수직 축에 대해 반사합니다.</span>

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

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>axis</code>: 반사 축입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>destination</code>: 대상 픽셀 버퍼입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="applying-geometric-transforms-to-images.md">Applying geometric transforms to images</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">vImage를 사용해 이미지 버퍼를 반사, 전단, 회전 및 스케일링합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="vimage/pixelbuffer/reflect(over:destination:">func reflect(over: vImage.ReflectionAxis, destination: vImage.PixelBuffer&lt;Format&gt;)</a>-9ezqm.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">8비트 평면 픽셀 버퍼를 수평 또는 수직 축에 대해 반사합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="vimage/pixelbuffer/reflect(over:destination:">func reflect(over: vImage.ReflectionAxis, destination: vImage.PixelBuffer&lt;Format&gt;)</a>-529j0.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">부동소수점 16비트 평면 픽셀 버퍼를 수평 또는 수직 축에 대해 반사합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="vimage/pixelbuffer/reflect(over:destination:">func reflect(over: vImage.ReflectionAxis, destination: vImage.PixelBuffer&lt;Format&gt;)</a>-4i4vi.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">32비트 평면 픽셀 버퍼를 수평 또는 수직 축에 대해 반사합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="vimage/pixelbuffer/reflect(over:destination:">func reflect(over: vImage.ReflectionAxis, destination: vImage.PixelBuffer&lt;Format&gt;)</a>-7o9tt.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">채널당 8비트, 4채널 인터리브 픽셀 버퍼를 수평 또는 수직 축에 대해 반사합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="vimage/pixelbuffer/reflect(over:destination:">func reflect(over: vImage.ReflectionAxis, destination: vImage.PixelBuffer&lt;Format&gt;)</a>-fg4a.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">채널당 부호 없는 16비트, 4채널 인터리브 픽셀 버퍼를 수평 또는 수직 축에 대해 반사합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="vimage/pixelbuffer/reflect(over:destination:">func reflect(over: vImage.ReflectionAxis, destination: vImage.PixelBuffer&lt;Format&gt;)</a>-97wi9.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">채널당 부동소수점 16비트, 4채널 인터리브 픽셀 버퍼를 수평 또는 수직 축에 대해 반사합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="vimage/pixelbuffer/reflect(over:destination:">func reflect(over: vImage.ReflectionAxis, destination: vImage.PixelBuffer&lt;Format&gt;)</a>-7b1md.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">채널당 32비트, 4채널 인터리브 픽셀 버퍼를 수평 또는 수직 축에 대해 반사합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="vimage/reflectionaxis.md">vImage.ReflectionAxis</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">이미지를 반사할 축입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">*<a href="https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/reflect(over:destination:">View on Apple Developer</a>-6syq1)*</span>

---
source_path: "documentation/Accelerate/vimage/pixelbuffer/convert-to-8ljhz.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/convert-to-8ljhz"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:convertto:0000:0001">convert(to:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:convertto:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:convertto:0002:0001">부동소수점 16비트/채널 4채널 인터리브 픽셀 버퍼의 내용을 32비트/채널 형식으로 변환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:convertto:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:convertto:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:convertto:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:convertto:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:convertto:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:convertto:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:convertto:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:convertto:0004:0007">watchOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func convert(to destination: vImage.PixelBuffer<vImage.InterleavedFx4>)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>destination</code>: 대상 픽셀 버퍼입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="vimage/pixelbuffer/convert(to:">func convert(to: vImage.PixelBuffer&lt;vImage.PlanarF&gt;)</a>-4876v.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">부동소수점 채널당 16비트 평면 픽셀 버퍼의 내용을 채널당 32비트 평면 형식으로 변환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="vimage/pixelbuffer/convert(to:">func convert(to: vImage.PixelBuffer&lt;vImage.InterleavedFx2&gt;)</a>-1xpk2.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">부동소수점 채널당 16비트, 2채널 인터리브 픽셀 버퍼의 내용을 채널당 32비트 형식으로 변환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="vimage/pixelbuffer/convert(to:">func convert(to: vImage.PixelBuffer&lt;vImage.InterleavedFx4&gt;)</a>-674t9.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">부호 없는 채널당 16비트, 4채널 인터리브 픽셀 버퍼의 내용을 채널당 32비트 형식으로 변환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/convert(to:">Apple Developer에서 보기</a>-8ljhz)*</span>

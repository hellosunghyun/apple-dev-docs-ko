---
source_path: "documentation/Accelerate/vimage/pixelbuffer/convert-to-674t9.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/convert-to-674t9"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:convertto:0000:0001">convert(to:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:convertto:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:convertto:0002:0001">Converts the contents of the unsigned 16-bit-per-channel, 4-channel interleaved pixel buffer to 32-bit-per-channel format.</span>

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

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>destination</code>: The destination pixel buffer.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avvideocodectype/hevc.md">static let hevc: AVVideoCodecType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">HEVC 비디오 코덱입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="vimage/pixelbuffer/convert(to:">func convert(to: vImage.PixelBuffer&lt;vImage.InterleavedFx2&gt;)</a>-1xpk2.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">입력값에 대해 요소별 역사인을 계산하는 연산입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="vimage/pixelbuffer/convert(to:">func convert(to: vImage.PixelBuffer&lt;vImage.InterleavedFx4&gt;)</a>-8ljhz.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">Converts the contents of the floating-point 16-bit-per-channel, 4-channel interleaved pixel buffer to 32-bit-per-channel format.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/convert(to:">View on Apple Developer</a>-674t9)*</span>

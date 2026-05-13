---
source_path: "documentation/Accelerate/vimage/pixelbuffer/extractchannel-atdestination-i1zm.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/extractchannel-atdestination-i1zm"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:extractchannelatdestination:0000:0001">extractChannel(at:destination:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:extractchannelatdestination:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:extractchannelatdestination:0002:0001">Extracts a single channel from an unsigned 16-bit-per-channel, 4-channel interleaved pixel buffer.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:extractchannelatdestination:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:extractchannelatdestination:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:extractchannelatdestination:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:extractchannelatdestination:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:extractchannelatdestination:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:extractchannelatdestination:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:extractchannelatdestination:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:extractchannelatdestination:0004:0007">watchOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func extractChannel(at channelIndex: Int, destination: vImage.PixelBuffer<vImage.Planar16U>)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">For example, the following code extracts channel <code>2</code> from a four-channel pixel buffer.</span>

```swift
let src = vImage.PixelBuffer<vImage.Interleaved16Ux4>(
    pixelValues: [10, 11, 12, 13,
                  20, 21, 22, 23,
                  30, 31, 32, 33],
    size: vImage.Size(width: 1, height: 3))

let dest = vImage.PixelBuffer<vImage.Planar16U>(
    size: src.size)

src.extractChannel(at: 2,
                   destination: dest)

// Prints "[12, 22, 32]"
print(dest.array)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0010:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0001"><code>channelIndex</code>: The index of the channel that the function extracts.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0002"><code>destination</code>: The destination pixel buffer.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0012:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="vimage/pixelbuffer/extractchannel(at:destination:">func extractChannel(at: Int, destination: vImage.PixelBuffer&lt;vImage.Planar8&gt;)</a>-ageg.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">요청한 데이터의 길이(바이트)입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="vimage/pixelbuffer/extractchannel(at:destination:">func extractChannel(at: Int, destination: vImage.PixelBuffer&lt;vImage.PlanarF&gt;)</a>-8xrq1.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">Extracts a single channel from an 32-bit-per-channel, 4-channel interleaved pixel buffer.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">*<a href="https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/extractchannel(at:destination:">View on Apple Developer</a>-i1zm)*</span>

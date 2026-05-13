---
source_path: "documentation/Accelerate/vimage/pixelbuffer/overwritechannels-withpixeldestination-6fab6.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/overwritechannels-withpixeldestination-6fab6"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:overwritechannelswithpixeldestination:0000:0001">overwriteChannels(_:withPixel:destination:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overwritechannelswithpixeldestination:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overwritechannelswithpixeldestination:0002:0001">하나 이상의 채널의 픽셀을 제공된 8비트 4채널 픽셀 값으로 픽셀 버퍼에 덮어씁니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overwritechannelswithpixeldestination:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:overwritechannelswithpixeldestination:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:overwritechannelswithpixeldestination:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:overwritechannelswithpixeldestination:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:overwritechannelswithpixeldestination:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:overwritechannelswithpixeldestination:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:overwritechannelswithpixeldestination:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:overwritechannelswithpixeldestination:0004:0007">watchOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func overwriteChannels(_ channels: [UInt8], withPixel pixel: Pixel_8888, destination: vImage.PixelBuffer<Format>)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 함수는 인터리브 버퍼의 하나 이상의 채널을 픽셀 값으로 덮어쓸 때 사용합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">다음 코드는 <code>pixel</code>의 해당 채널을 사용하여 <code>1</code> 및 <code>3</code> 채널을 덮어씁니다:</span>

```swift
let pixelValues: [Pixel_8] = [ 1, 2, 3, 4,
                               5, 6, 7, 8 ]
let buffer = vImage.PixelBuffer(pixelValues: pixelValues,
                                size: vImage.Size(width: 1,
                                                  height: 2),
                                pixelFormat: vImage.Interleaved8x4.self)

let destination = vImage.PixelBuffer(size: vImage.Size(width: 1,
                                                       height: 2),
                                     pixelFormat: vImage.Interleaved8x4.self)

let pixel = Pixel_8888(101, 102, 103, 104)

buffer.overwriteChannels([3, 1],
                         withPixel: pixel,
                         destination: destination)
```

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">반환되면 <code>destination.array</code>에는 다음 값이 포함됩니다.</span>

```swift
[ 1, 102, 3, 104,
  5, 102, 7, 104 ]
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0012:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0001"><code>channels</code>: 함수를 통해 덮어써질 채널의 인덱스를 포함하는 배열입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0002"><code>pixel</code>: 함수가 채널에 쓸 값입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0003"><code>destination</code>: 대상 픽셀 버퍼입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0014:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="vimage/pixelbuffer/overwritechannels(withscalar:">func overwriteChannels(withScalar: Pixel_8)</a>-3zb93.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">픽셀 버퍼의 픽셀을 제공된 8비트 스칼라 값으로 덮어씁니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="vimage/pixelbuffer/overwritechannels(withscalar:">func overwriteChannels(withScalar: Pixel_16F)</a>-1hrrg.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">픽셀 버퍼의 픽셀을 제공된 부동소수점 16비트 스칼라 값으로 덮어씁니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="vimage/pixelbuffer/overwritechannels(withscalar:">func overwriteChannels(withScalar: Pixel_F)</a>-1wm1o.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">픽셀 버퍼의 픽셀을 제공된 32비트 스칼라 값으로 덮어씁니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001">[func overwriteChannels([UInt8], withScalar: Pixel_8, destination: vImage.PixelBuffer&lt;Format&gt;)](vimage/pixelbuffer/overwritechannels(_:withscalar:destination:)-57ov2.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">픽셀 버퍼의 하나 이상의 채널의 픽셀을 제공된 8비트 스칼라 값으로 덮어씁니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001">[func overwriteChannels([UInt8], withScalar: Pixel_F, destination: vImage.PixelBuffer&lt;Format&gt;)](vimage/pixelbuffer/overwritechannels(_:withscalar:destination:)-ev8q.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">픽셀 버퍼의 하나 이상의 채널의 픽셀을 제공된 32비트 스칼라 값으로 덮어씁니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001">[func overwriteChannels([UInt8], withPixel: Pixel_ARGB_16U, destination: vImage.PixelBuffer&lt;Format&gt;)](vimage/pixelbuffer/overwritechannels(_:withpixel:destination:)-6zw3o.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">픽셀 버퍼의 하나 이상의 채널의 픽셀을 제공된 부호 없는 16비트 4채널 픽셀 값으로 덮어씁니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001">[func overwriteChannels([UInt8], withPixel: Pixel_FFFF, destination: vImage.PixelBuffer&lt;Format&gt;)](vimage/pixelbuffer/overwritechannels(_:withpixel:destination:)-6pbz8.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">픽셀 버퍼의 하나 이상의 채널의 픽셀을 제공된 32비트, 4채널 픽셀 값으로 덮어씁니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001">[func overwriteChannels([UInt8], withPlanarBuffer: vImage.PixelBuffer&lt;vImage.Planar8&gt;, destination: vImage.PixelBuffer&lt;Format&gt;)](vimage/pixelbuffer/overwritechannels(_:withplanarbuffer:destination:)-9jbky.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">픽셀 버퍼의 하나 이상의 채널의 픽셀을 제공된 8비트 평면 픽셀 버퍼로 덮어씁니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001">[func overwriteChannels([UInt8], withPlanarBuffer: vImage.PixelBuffer&lt;vImage.PlanarF&gt;, destination: vImage.PixelBuffer&lt;Format&gt;)](vimage/pixelbuffer/overwritechannels(_:withplanarbuffer:destination:)-hiw0.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">픽셀 버퍼의 하나 이상의 채널의 픽셀을 제공된 32비트 평면 픽셀 버퍼로 덮어씁니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0033:0001">[func overwriteChannels([UInt8], withInterleavedBuffer: vImage.PixelBuffer&lt;Format&gt;, destination: vImage.PixelBuffer&lt;Format&gt;)](vimage/pixelbuffer/overwritechannels(_:withinterleavedbuffer:destination:)-74hah.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">픽셀 버퍼의 하나 이상의 채널의 픽셀을 제공된 8비트 인터리브드 픽셀 버퍼로 덮어씁니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0035:0001">[func overwriteChannels([UInt8], withInterleavedBuffer: vImage.PixelBuffer&lt;Format&gt;, destination: vImage.PixelBuffer&lt;Format&gt;)](vimage/pixelbuffer/overwritechannels(_:withinterleavedbuffer:destination:)-8xkd1.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0036:0001">픽셀 버퍼의 하나 이상의 채널의 픽셀을 제공된 32비트 인터리브드 픽셀 버퍼로 덮어씁니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0038:0001">*<a href="https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/overwritechannels(_:withpixel:destination:">View on Apple Developer</a>-6fab6)*</span>

---
source_path: "documentation/Accelerate/converting-pixel-buffers.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/converting-pixel-buffers"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:converting-pixel-buffers:0000:0001">픽셀 버퍼 변환</span>

<span class="ko-segment" data-segment-id="seg:paragraph:converting-pixel-buffers:0001:0001">**프레임워크**: Accelerate</span>

<span class="ko-segment" data-segment-id="seg:paragraph:converting-pixel-buffers:0002:0001">픽셀 버퍼 데이터를 서로 다른 비트 깊이 간에 변환합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0003:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:conversion-from-yuv-to-rgb:0004:0001">YUV에서 RGB로 변환</span>

- <span class="ko-segment" data-segment-id="seg:list:conversion-from-yuv-to-rgb:0005:0001"><a href="vimage/pixelbuffer/convert(lumasource:chromasource:conversioninfo:">func convert(lumaSource: vImage.PixelBuffer&lt;vImage.Planar8&gt;, chromaSource: vImage.PixelBuffer&lt;vImage.Interleaved8x2&gt;, conversionInfo: vImage_YpCbCrToARGB)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:conversion-from-yuv-to-rgb:0006:0001">주어진 휘도 및 색차 픽셀 버퍼에서 ARGB 데이터로 픽셀 버퍼를 채웁니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:conversion-from-8-bit-to-16-bit:0007:0001">8비트에서 16비트로 변환</span>

- <span class="ko-segment" data-segment-id="seg:list:conversion-from-8-bit-to-16-bit:0008:0001"><a href="vimage/pixelbuffer/convert(to:">func convert(to: vImage.PixelBuffer&lt;vImage.Planar16F&gt;)</a>-3wpdu.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:conversion-from-8-bit-to-16-bit:0009:0001">8비트 평면 픽셀 버퍼의 내용을 부동 소수점 16비트 평면 형식으로 변환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:conversion-from-8-bit-to-16-bit:0010:0001"><a href="vimage/pixelbuffer/convert(to:">func convert(to: vImage.PixelBuffer&lt;vImage.Interleaved16Fx2&gt;)</a>-4v16.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:conversion-from-8-bit-to-16-bit:0011:0001">채널당 8비트, 2채널 인터리브 픽셀 버퍼의 내용을 채널당 부동 소수점 16비트 형식으로 변환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:conversion-from-8-bit-to-16-bit:0012:0001"><a href="vimage/pixelbuffer/convert(to:">func convert(to: vImage.PixelBuffer&lt;vImage.Interleaved16Ux4&gt;)</a>-9j6eu.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:conversion-from-8-bit-to-16-bit:0013:0001">채널당 8비트, 4채널 인터리브 픽셀 버퍼의 내용을 채널당 부호 없는 16비트 형식으로 변환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:conversion-from-8-bit-to-16-bit:0014:0001"><a href="vimage/pixelbuffer/convert(to:">func convert(to: vImage.PixelBuffer&lt;vImage.Interleaved16Fx4&gt;)</a>-6ci2d.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:conversion-from-8-bit-to-16-bit:0015:0001">채널당 8비트, 4채널 인터리브 픽셀 버퍼의 내용을 채널당 부동 소수점 16비트 형식으로 변환합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:conversion-from-8-bit-to-32-bit:0016:0001">8비트에서 32비트로 변환</span>

- <span class="ko-segment" data-segment-id="seg:list:conversion-from-8-bit-to-32-bit:0017:0001"><a href="vimage/pixelbuffer/convert(to:">func convert(to: vImage.PixelBuffer&lt;vImage.PlanarF&gt;)</a>-7src4.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:conversion-from-8-bit-to-32-bit:0018:0001">8비트 평면 픽셀 버퍼의 내용을 32비트 평면 형식으로 변환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:conversion-from-8-bit-to-32-bit:0019:0001"><a href="vimage/pixelbuffer/convert(to:">func convert(to: vImage.PixelBuffer&lt;vImage.InterleavedFx3&gt;)</a>-8hivu.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:conversion-from-8-bit-to-32-bit:0020:0001">채널당 8비트, 3채널 인터리브 픽셀 버퍼의 내용을 채널당 32비트 형식으로 변환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:conversion-from-8-bit-to-32-bit:0021:0001"><a href="vimage/pixelbuffer/convert(to:">func convert(to: vImage.PixelBuffer&lt;vImage.InterleavedFx4&gt;)</a>-1e0nd.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:conversion-from-8-bit-to-32-bit:0022:0001">채널당 8비트, 4채널 인터리브 픽셀 버퍼의 내용을 채널당 32비트 형식으로 변환합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:conversion-from-16-bit-to-8-bit:0023:0001">16비트에서 8비트로 변환</span>

- <span class="ko-segment" data-segment-id="seg:list:conversion-from-16-bit-to-8-bit:0024:0001"><a href="vimage/pixelbuffer/convert(to:">func convert(to: vImage.PixelBuffer&lt;vImage.Planar8&gt;)</a>-449hx.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:conversion-from-16-bit-to-8-bit:0025:0001">부동 소수점 16비트 평면 픽셀 버퍼의 내용을 8비트 평면 형식으로 변환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:conversion-from-16-bit-to-8-bit:0026:0001"><a href="vimage/pixelbuffer/convert(to:">func convert(to: vImage.PixelBuffer&lt;vImage.Interleaved8x2&gt;)</a>-1h96t.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:conversion-from-16-bit-to-8-bit:0027:0001">부동 소수점 16비트 채널별 2채널 인터리브 픽셀 버퍼의 내용을 채널당 8비트 형식으로 변환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:conversion-from-16-bit-to-8-bit:0028:0001"><a href="vimage/pixelbuffer/convert(to:">func convert(to: vImage.PixelBuffer&lt;vImage.Interleaved8x4&gt;)</a>-k50a.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:conversion-from-16-bit-to-8-bit:0029:0001">부호 없는 16비트 채널별 4채널 인터리브 픽셀 버퍼의 내용을 채널당 8비트 형식으로 변환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:conversion-from-16-bit-to-8-bit:0030:0001"><a href="vimage/pixelbuffer/convert(to:">func convert(to: vImage.PixelBuffer&lt;vImage.Interleaved8x4&gt;)</a>-9xnxc.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:conversion-from-16-bit-to-8-bit:0031:0001">부동 소수점 16비트 채널별 4채널 인터리브 픽셀 버퍼의 내용을 채널당 8비트 형식으로 변환합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:conversion-between-16-bit-formats:0032:0001">16비트 형식 간 변환</span>

- <span class="ko-segment" data-segment-id="seg:list:conversion-between-16-bit-formats:0033:0001"><a href="vimage/pixelbuffer/convert(to:">func convert(to: vImage.PixelBuffer&lt;vImage.Planar16F&gt;)</a>-1zk6k.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:conversion-between-16-bit-formats:0034:0001">부호 없는 16비트 평면 픽셀 버퍼의 내용을 부동 소수점 16비트 평면 형식으로 변환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:conversion-between-16-bit-formats:0035:0001"><a href="vimage/pixelbuffer/convert(to:">func convert(to: vImage.PixelBuffer&lt;vImage.Planar16U&gt;)</a>-ip9z.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:conversion-between-16-bit-formats:0036:0001">부동 소수점 16비트 평면 픽셀 버퍼의 내용을 부호 없는 16비트 평면 형식으로 변환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:conversion-between-16-bit-formats:0037:0001"><a href="vimage/pixelbuffer/convert(to:">func convert(to: vImage.PixelBuffer&lt;vImage.Interleaved16Ux2&gt;)</a>-7dx2c.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:conversion-between-16-bit-formats:0038:0001">부동 소수점 16비트 채널별 2채널 인터리브 픽셀 버퍼의 내용을 채널당 부호 없는 16비트 형식으로 변환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:conversion-between-16-bit-formats:0039:0001"><a href="vimage/pixelbuffer/convert(to:">func convert(to: vImage.PixelBuffer&lt;vImage.Interleaved16Fx4&gt;)</a>-7tdb1.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:conversion-between-16-bit-formats:0040:0001">부호 없는 채널당 16비트, 4채널 인터리브 픽셀 버퍼의 내용을 부동 소수점 채널당 16비트 형식으로 변환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:conversion-between-16-bit-formats:0041:0001"><a href="vimage/pixelbuffer/convert(to:">func convert(to: vImage.PixelBuffer&lt;vImage.Interleaved16Ux4&gt;)</a>-3lg9p.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:conversion-between-16-bit-formats:0042:0001">부동 소수점 채널당 16비트, 4채널 인터리브 픽셀 버퍼의 내용을 부호 없는 채널당 16비트 형식으로 변환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:conversion-between-16-bit-formats:0043:0001"><a href="vimage/pixelbuffer/convert(to:">func convert(to: vImage.PixelBuffer&lt;vImage.Interleaved16Fx2&gt;)</a>-8u16v.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:conversion-between-16-bit-formats:0044:0001">부호 없는 채널당 16비트, 2채널 인터리브 픽셀 버퍼의 내용을 부동 소수점 채널당 16비트 형식으로 변환합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:conversion-from-16-bit-to-32-bit:0045:0001">16비트에서 32비트로 변환</span>

- <span class="ko-segment" data-segment-id="seg:list:conversion-from-16-bit-to-32-bit:0046:0001"><a href="vimage/pixelbuffer/convert(to:">func convert(to: vImage.PixelBuffer&lt;vImage.PlanarF&gt;)</a>-4876v.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:conversion-from-16-bit-to-32-bit:0047:0001">부동 소수점 채널당 16비트 평면 픽셀 버퍼의 내용을 채널당 32비트 평면 형식으로 변환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:conversion-from-16-bit-to-32-bit:0048:0001"><a href="vimage/pixelbuffer/convert(to:">func convert(to: vImage.PixelBuffer&lt;vImage.InterleavedFx2&gt;)</a>-1xpk2.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:conversion-from-16-bit-to-32-bit:0049:0001">부동 소수점 채널당 16비트, 2채널 인터리브 픽셀 버퍼의 내용을 채널당 32비트 형식으로 변환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:conversion-from-16-bit-to-32-bit:0050:0001"><a href="vimage/pixelbuffer/convert(to:">func convert(to: vImage.PixelBuffer&lt;vImage.InterleavedFx4&gt;)</a>-674t9.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:conversion-from-16-bit-to-32-bit:0051:0001">부호 없는 채널당 16비트, 4채널 인터리브 픽셀 버퍼의 내용을 채널당 32비트 형식으로 변환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:conversion-from-16-bit-to-32-bit:0052:0001"><a href="vimage/pixelbuffer/convert(to:">func convert(to: vImage.PixelBuffer&lt;vImage.InterleavedFx4&gt;)</a>-8ljhz.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:conversion-from-16-bit-to-32-bit:0053:0001">부동 소수점 채널당 16비트, 4채널 인터리브 픽셀 버퍼의 내용을 채널당 32비트 형식으로 변환합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:conversion-from-32-bit-to-8-bit:0054:0001">32비트에서 8비트로 변환</span>

- <span class="ko-segment" data-segment-id="seg:list:conversion-from-32-bit-to-8-bit:0055:0001"><a href="vimage/pixelbuffer/convert(to:">func convert(to: vImage.PixelBuffer&lt;vImage.Planar8&gt;)</a>-1ka0r.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:conversion-from-32-bit-to-8-bit:0056:0001">32비트 평면 픽셀 버퍼의 내용을 8비트 평면 형식으로 변환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:conversion-from-32-bit-to-8-bit:0057:0001"><a href="vimage/pixelbuffer/convert(to:">func convert(to: vImage.PixelBuffer&lt;vImage.Interleaved8x3&gt;)</a>-69qa2.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:conversion-from-32-bit-to-8-bit:0058:0001">채널당 32비트, 3채널 인터리브 픽셀 버퍼의 내용을 채널당 8비트 형식으로 변환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:conversion-from-32-bit-to-8-bit:0059:0001"><a href="vimage/pixelbuffer/convert(to:">func convert(to: vImage.PixelBuffer&lt;vImage.Interleaved8x4&gt;)</a>-24xu0.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:conversion-from-32-bit-to-8-bit:0060:0001">채널당 32비트, 4채널 인터리브 픽셀 버퍼의 내용을 채널당 8비트 형식으로 변환합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:conversion-from-32-bit-to-16-bit:0061:0001">32비트에서 16비트로 변환</span>

- <span class="ko-segment" data-segment-id="seg:list:conversion-from-32-bit-to-16-bit:0062:0001"><a href="vimage/pixelbuffer/convert(to:">func convert(to: vImage.PixelBuffer&lt;vImage.Planar16F&gt;)</a>-2bc8n.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:conversion-from-32-bit-to-16-bit:0063:0001">32비트 평면 픽셀 버퍼의 내용을 부동 소수점 16비트 평면 형식으로 변환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:conversion-from-32-bit-to-16-bit:0064:0001"><a href="vimage/pixelbuffer/convert(to:">func convert(to: vImage.PixelBuffer&lt;vImage.Interleaved16Fx2&gt;)</a>-56zhe.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:conversion-from-32-bit-to-16-bit:0065:0001">채널당 32비트, 2채널 인터리브 픽셀 버퍼의 내용을 채널당 부동 소수점 16비트 형식으로 변환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:conversion-from-32-bit-to-16-bit:0066:0001"><a href="vimage/pixelbuffer/convert(to:">func convert(to: vImage.PixelBuffer&lt;vImage.Interleaved16Fx4&gt;)</a>-1132q.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:conversion-from-32-bit-to-16-bit:0067:0001">채널당 32비트, 4채널 인터리브 픽셀 버퍼의 내용을 채널당 부동 소수점 16비트 형식으로 변환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:conversion-from-32-bit-to-16-bit:0068:0001"><a href="vimage/pixelbuffer/convert(to:">func convert(to: vImage.PixelBuffer&lt;vImage.Interleaved16Ux4&gt;)</a>-2dbbo.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:conversion-from-32-bit-to-16-bit:0069:0001">채널당 32비트, 4채널 인터리브 픽셀 버퍼의 내용을 부호 없는 채널당 16비트 형식으로 변환합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:conversion-from-four-channels-to-three-channels:0070:0001">4채널에서 3채널로 변환</span>

- <span class="ko-segment" data-segment-id="seg:list:conversion-from-four-channels-to-three-channels:0071:0001"><a href="vimage/pixelbuffer/convert(to:channelordering:">func convert(to: vImage.PixelBuffer&lt;vImage.InterleavedFx3&gt;, channelOrdering: vImage.ChannelOrdering)</a>-1nll2.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:conversion-from-four-channels-to-three-channels:0072:0001">채널당 32비트 RGBA 또는 ARGB 픽셀 버퍼를 RGB로 변환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:conversion-from-four-channels-to-three-channels:0073:0001"><a href="vimage/pixelbuffer/convert(to:channelordering:">func convert(to: vImage.PixelBuffer&lt;vImage.Interleaved8x3&gt;, channelOrdering: vImage.ChannelOrdering)</a>-9h53.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:conversion-from-four-channels-to-three-channels:0074:0001">채널당 8비트 RGBA 또는 ARGB 픽셀 버퍼를 RGB로 변환합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0075:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0076:0001"><a href="applying-geometric-operations-to-pixel-buffers.md">Applying geometric operations to pixel buffers</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0077:0001">이미지 데이터에 반사, 전단, 회전, 크기 조절 및 아핀 변환을 적용합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0078:0001"><a href="applying-color-transforms-to-pixel-buffers.md">Applying color transforms to pixel buffers</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0079:0001">감마, 다항식, 또는 다차원 룩업을 적용하여 이미지의 색상을 조정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0080:0001"><a href="blending-and-compositing-pixel-buffers.md">Blending and compositing pixel buffers</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0081:0001">두 픽셀 버퍼를 합성하여 단일 이미지를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0082:0001"><a href="convolving-and-applying-morphology.md">Convolving and applying morphology</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0083:0001">픽셀 버퍼에 컨볼루션, 팽윤, 침식을 적용합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0084:0001"><a href="thresholding-and-clipping-pixel-buffer-values.md">Thresholding and clipping pixel buffer values</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0085:0001">픽셀 버퍼의 값을 임계값 또는 범위로 제한합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0086:0001"><a href="calculating-and-transforming-histograms.md">Calculating and transforming histograms</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0087:0001">히스토그램 평활화, 대비 스트레칭 및 명세 지정으로 이미지의 대비를 향상하고 조정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0088:0001"><a href="interleaving-and-deinterleaving-pixel-buffers.md">Interleaving and deinterleaving pixel buffers</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0089:0001">인터리브 형식과 평면 형식 간에 픽셀 버퍼 데이터를 변환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0090:0001"><a href="cropping-and-working-with-regions-of-interest.md">Cropping and working with regions of interest</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0091:0001">이미지를 잘라 관심 영역에 연산을 적용합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0092:0001"><a href="applying-channel-operations.md">Applying channel operations</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0093:0001">픽셀 버퍼의 개별 색상 채널을 추출하고 평탄화하고 순서를 바꾸고 덮어씁니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0094:0001"><a href="applying-arithmetic-operations.md">Applying arithmetic operations</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0095:0001">버퍼의 픽셀 값을 스칼라 값이나 행렬로 곱합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0097:0001">*<a href="https://developer.apple.com/documentation/accelerate/converting-pixel-buffers">View on Apple Developer</a>*</span>

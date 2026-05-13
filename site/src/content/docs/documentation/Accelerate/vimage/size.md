---
source_path: "documentation/Accelerate/vimage/size.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vimage/size"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:vimagesize:0000:0001">vImage.Size</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimagesize:0001:0001">**Framework**: Accelerate **Kind**: struct</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimagesize:0002:0001">너비와 높이 값을 포함하는 구조체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimagesize:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:vimagesize:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimagesize:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimagesize:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimagesize:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimagesize:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimagesize:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimagesize:0004:0007">watchOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
struct Size
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0008:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0009:0001"><a href="vimage/size/init(cvpixelbuffer:">init(cvPixelBuffer: CVPixelBuffer)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0010:0001">Core Video 픽셀 버퍼에서 지정한 차원으로 크기 구조체를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0011:0001"><a href="vimage/size/init(exactwidth:height:">init?&lt;T&gt;(exactWidth: T, height: T)</a>-9nwk0.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0012:0001">부동소수점 값으로 지정된 크기를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0013:0001"><a href="vimage/size/init(exactwidth:height:">init?&lt;T&gt;(exactWidth: T, height: T)</a>-4ygbk.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0014:0001">정수 값으로 지정된 크기를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0015:0001"><a href="vimage/size/init(exactly:">init?(exactly: CGSize)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0016:0001">Core Graphics 크기 값으로 지정된 크기를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0017:0001"><a href="vimage/size/init(width:height:">init(width: Int, height: Int)</a>-fzcb.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0018:0001">정수 값으로 지정된 크기를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0019:0001"><a href="vimage/size/init(width:height:">init(width: vImagePixelCount, height: vImagePixelCount)</a>-8ly3k.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0020:0001">부호 없는 정수 값으로 지정된 크기를 생성합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:instance-properties:0021:0001">인스턴스 속성</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0022:0001"><a href="vimage/size/height.md">let height: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0023:0001">크기 구조체의 높이입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0024:0001"><a href="vimage/size/width.md">let width: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0025:0001">크기 구조체의 너비입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0026:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0027:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0028:0001"><a href="../Swift/Equatable.md">Equatable</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0029:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="vimage/structuringelement.md">typealias StructuringElement</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">형태학 커널을 나타내는 2D 행렬입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="vimage/convolutionkernel.md">vImage.ConvolutionKernel</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">1D 합성곱 커널을 설명하는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="vimage/convolutionkernel2d.md">vImage.ConvolutionKernel2D</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">2D 합성곱 커널을 나타내는 행렬입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="vimage/dynamicpixelformat.md">vImage.DynamicPixelFormat</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">컴파일 타임에 데이터 타입이 알 수 없는 픽셀을 포함하는 버퍼입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="vimage/interleaved16fx2.md">vImage.Interleaved16Fx2</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">채널당 16비트 부동소수점, 두 채널 인터리브 버퍼입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001"><a href="vimage/interleaved16fx4.md">vImage.Interleaved16Fx4</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">채널당 16비트 부동소수점, 네 채널 인터리브 버퍼입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0042:0001"><a href="vimage/interleaved16ux2.md">vImage.Interleaved16Ux2</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">채널당 16비트 부호 없는 정수, 두 채널 인터리브 버퍼입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0044:0001"><a href="vimage/interleaved16ux4.md">vImage.Interleaved16Ux4</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0045:0001">채널당 16비트 부호 없는 정수, 네 채널 인터리브 버퍼입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0046:0001"><a href="vimage/interleaved8x2.md">vImage.Interleaved8x2</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0047:0001">채널당 8비트, 두 채널 인터리브 버퍼입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0048:0001"><a href="vimage/interleaved8x3.md">vImage.Interleaved8x3</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0049:0001">채널당 8비트, 세 채널 인터리브 버퍼입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0050:0001"><a href="vimage/interleaved8x4.md">vImage.Interleaved8x4</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0051:0001">채널당 8비트, 네 채널 인터리브 버퍼입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0052:0001"><a href="vimage/interleavedfx2.md">vImage.InterleavedFx2</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0053:0001">채널당 32비트 부동소수점, 두 채널 인터리브 버퍼입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0054:0001"><a href="vimage/interleavedfx3.md">vImage.InterleavedFx3</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0055:0001">채널당 32비트 부동소수점, 세 채널 인터리브 버퍼입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0056:0001"><a href="vimage/interleavedfx4.md">vImage.InterleavedFx4</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0057:0001">채널당 32비트 부동소수점, 네 채널 인터리브 버퍼입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0058:0001"><a href="vimage/multidimensionallookuptable.md">vImage.MultidimensionalLookupTable</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0059:0001">다차원 룩업 테이블입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0061:0001">*<a href="https://developer.apple.com/documentation/accelerate/vimage/size">View on Apple Developer</a>*</span>

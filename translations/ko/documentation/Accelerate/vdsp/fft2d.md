---
source_path: "documentation/Accelerate/vdsp/fft2d.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vdsp/fft2d"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:vdspfft2d:0000:0001">vDSP.FFT2D</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vdspfft2d:0001:0001">**Framework**: Accelerate **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vdspfft2d:0002:0001">A 2D single- and double-precision fast Fourier transform.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vdspfft2d:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:vdspfft2d:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vdspfft2d:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vdspfft2d:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:vdspfft2d:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:vdspfft2d:0004:0005">tvOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vdspfft2d:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:vdspfft2d:0004:0007">watchOS 6.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class FFT2D<T> where T : vDSP_FourierTransformable
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0008:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0009:0001"><a href="vdsp/fft2d/init(width:height:oftype:">init?(width: Int, height: Int, ofType: T.Type)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0010:0001">Initializes a new fast Fourier transform instance for 2D FFT.</span>

### <span class="ko-segment" data-segment-id="seg:heading:instance-methods:0011:0001">Instance Methods</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-methods:0012:0001"><a href="vdsp/fft2d/transform(input:output:direction:">func transform&lt;T&gt;(input: T, output: inout T, direction: vDSP.FourierTransformDirection)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-methods:0013:0001">Computes an out-of-place 2D fast Fourier transform.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0014:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0015:0001">Inherits From</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0016:0001"><a href="vdsp/fft.md">vDSP.FFT</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0017:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="vdsp/fft.md">class FFT</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">녹음의 연주자에 대한 추가 정보를 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="vdsp/fouriertransformdirection.md">vDSP.FourierTransformDirection</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">오디오의 분당 박자 수를 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="vdsp/radix.md">vDSP.Radix</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">미디어에 대한 추가 텍스트 정보를 나타내는 키입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">*<a href="https://developer.apple.com/documentation/accelerate/vdsp/fft2d">View on Apple Developer</a>*</span>

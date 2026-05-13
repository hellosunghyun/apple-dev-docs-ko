---
source_path: "documentation/Accelerate/vdsp/convert-powertodecibelszeroreference-5u3vs.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vdsp/convert-powertodecibelszeroreference-5u3vs"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:convertpowertodecibelszeroreference:0000:0001">convert(power:toDecibels:zeroReference:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:convertpowertodecibelszeroreference:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:convertpowertodecibelszeroreference:0002:0001">Converts single-precision power values to decibel values.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:convertpowertodecibelszeroreference:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:convertpowertodecibelszeroreference:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:convertpowertodecibelszeroreference:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:convertpowertodecibelszeroreference:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:convertpowertodecibelszeroreference:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:convertpowertodecibelszeroreference:0004:0005">tvOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:convertpowertodecibelszeroreference:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:convertpowertodecibelszeroreference:0004:0007">watchOS 6.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static func convert<U, V>(power: U, toDecibels decibels: inout V, zeroReference: Float) where U : AccelerateBuffer, V : AccelerateMutableBuffer, U.Element == Float, V.Element == Float
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">The function uses the following calculation to perform the conversion:</span>

```swift
alpha = 10;

for (n = 0; n < N; ++n)
    C[n] = alpha * log10(A[n] / B[0]);
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0010:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0001"><code>power</code>: The input vector that defines the power values.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0002"><code>decibels</code>: The output vector that contains the decibel values.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0003"><code>zeroReference</code>: The zero reference that the function uses for the conversion.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0012:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avmediacharacteristic/containsalphachannel.md">static let containsAlphaChannel: AVMediaCharacteristic</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">트랙에 알파 채널이 포함되어 있음을 나타내는 미디어 특성입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avmediacharacteristic/framebased.md">static let frameBased: AVMediaCharacteristic</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">해당 트랙 또는 미디어 선택 옵션에 프레임 기반 콘텐츠가 포함되어 있음을 나타내는 미디어 특성입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avmediacharacteristic/useswidegamutcolorspace.md">static let usesWideGamutColorSpace: AVMediaCharacteristic</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">트랙이 와이드갬트 색 공간을 사용하는지를 나타내는 미디어 특성입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">트랙에 다중 뷰 압축 형식으로 캡처한 입체 영상을 포함하는지를 나타내는 미디어 특성입니다.</span>

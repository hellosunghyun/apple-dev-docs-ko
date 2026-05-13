---
source_path: "documentation/Accelerate/vdsp/twopoletwozerofilter-coefficients-8oaux.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vdsp/twopoletwozerofilter-coefficients-8oaux"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:twopoletwozerofiltercoefficients:0000:0001">twoPoleTwoZeroFilter(_:coefficients:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:twopoletwozerofiltercoefficients:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:twopoletwozerofiltercoefficients:0002:0001">Returns the result of double-precision, two-pole, two-zero recursive filtering.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:twopoletwozerofiltercoefficients:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:twopoletwozerofiltercoefficients:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:twopoletwozerofiltercoefficients:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:twopoletwozerofiltercoefficients:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:twopoletwozerofiltercoefficients:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:twopoletwozerofiltercoefficients:0004:0005">tvOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:twopoletwozerofiltercoefficients:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:twopoletwozerofiltercoefficients:0004:0007">watchOS 6.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static func twoPoleTwoZeroFilter<U>(_ source: U, coefficients: (Double, Double, Double, Double, Double)) -> [Double] where U : AccelerateBuffer, U.Element == Double
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="bnnslayerparameterslossbase/init(function:i_desc:o_desc:reduction:">init(function: BNNSLossFunction, i_desc: BNNSNDArrayDescriptor, o_desc: BNNSNDArrayDescriptor, reduction: BNNSLossReductionFunction)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">지정한 매개변수에서 새 손실 레이어 매개변수 구조체를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="vdsp/twopoletwozerofilter(_:coefficients:result:">static func twoPoleTwoZeroFilter&lt;U, V&gt;(U, coefficients: (Double, Double, Double, Double, Double), result: inout V)</a>-fe5l.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">Performs double-precision, two-pole, two-zero recursive filtering.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="vdsp/twopoletwozerofilter(_:coefficients:result:">static func twoPoleTwoZeroFilter&lt;U, V&gt;(U, coefficients: (Float, Float, Float, Float, Float), result: inout V)</a>-gq5l.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">Performs single-precision, two-pole, two-zero recursive filtering.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/accelerate/vdsp/twopoletwozerofilter(_:coefficients:">View on Apple Developer</a>-8oaux)*</span>

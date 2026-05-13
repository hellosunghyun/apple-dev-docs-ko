---
source_path: "documentation/Accelerate/bnnsactivationfunctionselu.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsactivationfunctionselu"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnsactivationfunctionselu:0000:0001">BNNSActivationFunctionSELU</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsactivationfunctionselu:0001:0001">**Framework**: Accelerate **Kind**: var</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsactivationfunctionselu:0002:0001">An activation function that evaluates the scaled exponential linear units (SELU) on its input.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsactivationfunctionselu:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnsactivationfunctionselu:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsactivationfunctionselu:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsactivationfunctionselu:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsactivationfunctionselu:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsactivationfunctionselu:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsactivationfunctionselu:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsactivationfunctionselu:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var BNNSActivationFunctionSELU: BNNSActivationFunction { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">This constant defines an activation function that returns values using the following operation:</span>

```None
// λ and ɑ have the values given by Klambauer, Unterthiner and Mayr 
// (~1.0507 and ~1.6733, respectively)

if x < 0
    λɑ(exp(x)-1)
else
    λx
```

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">이 메서드가 특정 스레드에서 호출된다고 가정하지 말고, 가능한 한 효율적으로 구현해야 합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">!<a href="https://docs-assets.developer.apple.com/published/6d06ab19caa65397994f694396e05d88/media-3560501%402x.png">Graph that shows input values for the activation function on horizontal axis and its output values on vertical axis. </a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0012:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="bnnsactivationfunction/init(_:">init(UInt32)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0002"><a href="bnnsactivationfunction/init(rawvalue:">init(rawValue: UInt32)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0003"><a href="bnnsactivationfunction/rawvalue.md">var rawValue: UInt32</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0004"><a href="bnnsactivationfunctionabs.md">var BNNSActivationFunctionAbs: BNNSActivationFunction</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0005"><a href="bnnsactivationfunctioncelu.md">var BNNSActivationFunctionCELU: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">An activation function that evaluates the continuously differentiable exponential linear units (CELU) on its input.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="bnnsactivationfunctionclampedleakyrectifiedlinear.md">var BNNSActivationFunctionClampedLeakyRectifiedLinear: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">An activation function that returns its input clamped to beta when that is greater than or equal to zero, otherwise it returns its input multiplied by alpha clamped to beta.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="bnnsactivationfunctionelu.md">var BNNSActivationFunctionELU: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">An activation function that evaluates the exponential linear units (ELU) on its input.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="bnnsactivationfunctionerf.md">var BNNSActivationFunctionErf: BNNSActivationFunction</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0002"><a href="bnnsactivationfunctiongelu.md">var BNNSActivationFunctionGELU: BNNSActivationFunction</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0003"><a href="bnnsactivationfunctiongeluapproximation.md">var BNNSActivationFunctionGELUApproximation: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">An activation function that evaluates the Gaussian error linear units (GELU) approximation on its input.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="bnnsactivationfunctiongeluapproximation2.md">var BNNSActivationFunctionGELUApproximation2: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">An activation function that provides a fast evaluation of the Gaussian error linear units (GELU) approximation on its input.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="bnnsactivationfunctiongeluapproximationsigmoid.md">var BNNSActivationFunctionGELUApproximationSigmoid: BNNSActivationFunction</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0002"><a href="bnnsactivationfunctiongumbel.md">var BNNSActivationFunctionGumbel: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">An activation function that returns random numbers from the Gumbel distribution.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="bnnsactivationfunctiongumbelmax.md">var BNNSActivationFunctionGumbelMax: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">An activation function that returns random numbers from the Gumbel distribution.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="bnnsactivationfunctionhardshrink.md">var BNNSActivationFunctionHardShrink: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">An activation function that returns zero when the absolute input is less than alpha, otherwise it returns its input.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsactivationfunctionselu">View on Apple Developer</a>*</span>

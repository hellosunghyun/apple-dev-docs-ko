---
source_path: "documentation/Accelerate/bnns/activationfunction/hardsigmoid-alphabeta.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnns/activationfunction/hardsigmoid-alphabeta"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnsactivationfunctionhardsigmoidalphabeta:0000:0001">BNNS.ActivationFunction.hardSigmoid(alpha:beta:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsactivationfunctionhardsigmoidalphabeta:0001:0001">**Framework**: Accelerate **Kind**: case</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsactivationfunctionhardsigmoidalphabeta:0002:0001">An activation function that returns the hard sigmoid function of its input.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsactivationfunctionhardsigmoidalphabeta:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnsactivationfunctionhardsigmoidalphabeta:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsactivationfunctionhardsigmoidalphabeta:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsactivationfunctionhardsigmoidalphabeta:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsactivationfunctionhardsigmoidalphabeta:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsactivationfunctionhardsigmoidalphabeta:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsactivationfunctionhardsigmoidalphabeta:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsactivationfunctionhardsigmoidalphabeta:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
case hardSigmoid(alpha: Float, beta: Float)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001"><code>endDate</code>는 관련 메타데이터가 유효한 타임라인의 종료 날짜를 정의합니다.</span>

```c
max(0, min(1, alpha*x + beta))
```

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">The following illustrates the output that the activation function generates from inputs in the range <code>-10...10</code>, an <code>alpha</code> of <code>1.0</code>, and a <code>beta</code> of <code>0.5</code>:</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">!<a href="https://docs-assets.developer.apple.com/published/62dda3856341edac58c55503d628d3e6/media-3654636%402x.png">Graph that shows input values for the activation function on horizontal axis and its output values on vertical axis. </a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0012:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="bnns/activationfunction/abs.md">BNNS.ActivationFunction.abs</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">An activation function that returns the absolute value of its input.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="bnns/activationfunction/celu(alpha:">BNNS.ActivationFunction.celu(alpha:)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">An activation function that evaluates the continuously differentiable exponential linear units (CELU) on its input.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="bnns/activationfunction/clamp(bounds:">BNNS.ActivationFunction.clamp(bounds:)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">An activation function that returns its input clamped to the specified range.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="bnns/activationfunction/clampedleakyrectifiedlinear(alpha:beta:">BNNS.ActivationFunction.clampedLeakyRectifiedLinear(alpha:beta:)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">An activation function that returns its input clamped to beta when that is greater than or equal to zero, otherwise it returns its input multiplied by alpha clamped to beta.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="bnns/activationfunction/elu(alpha:">BNNS.ActivationFunction.elu(alpha:)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">An activation function that evaluates the exponential linear units (ELU) on its input.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="bnns/activationfunction/geluapproximation(alpha:beta:">BNNS.ActivationFunction.geluApproximation(alpha:beta:)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">An activation function that evaluates the Gaussian error linear units (GELU) approximation on its input.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="bnns/activationfunction/geluapproximation2(alpha:beta:">BNNS.ActivationFunction.geluApproximation2(alpha:beta:)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">An activation function that provides a fast evaluation of the Gaussian error linear units (GELU) approximation on its input.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="bnns/activationfunction/gumbel(alpha:beta:">BNNS.ActivationFunction.gumbel(alpha:beta:)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">An activation function that returns random numbers from the Gumbel distribution.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="bnns/activationfunction/gumbelmax(alpha:beta:">BNNS.ActivationFunction.gumbelMax(alpha:beta:)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">An activation function that returns random numbers from the Gumbel distribution.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001"><a href="bnns/activationfunction/hardshrink(alpha:">BNNS.ActivationFunction.hardShrink(alpha:)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">An activation function that returns zero when the absolute input is less than alpha, otherwise it returns its input.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0033:0001"><a href="bnns/activationfunction/hardswish(alpha:beta:">BNNS.ActivationFunction.hardSwish(alpha:beta:)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">An activation function that returns the hard swish function of its input.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0035:0001"><a href="bnns/activationfunction/identity.md">BNNS.ActivationFunction.identity</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0036:0001">An activation function that returns its input.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0037:0001"><a href="bnns/activationfunction/leakyrectifiedlinear(alpha:">BNNS.ActivationFunction.leakyRectifiedLinear(alpha:)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0038:0001">An activation function that returns its input when that is greater than or equal to zero, otherwise it returns its input multiplied by a specified value.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0039:0001"><a href="bnns/activationfunction/linear(alpha:">BNNS.ActivationFunction.linear(alpha:)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0040:0001">An activation function that returns its input multiplied by a specified value.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0041:0001"><a href="bnns/activationfunction/linearwithbias(alpha:beta:">BNNS.ActivationFunction.linearWithBias(alpha:beta:)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0042:0001">An activation function that returns its input multiplied by a scale and added to a bias.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0044:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnns/activationfunction/hardsigmoid(alpha:beta:">View on Apple Developer</a>)*</span>

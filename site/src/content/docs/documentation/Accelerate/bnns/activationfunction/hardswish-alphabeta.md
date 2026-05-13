---
source_path: "documentation/Accelerate/bnns/activationfunction/hardswish-alphabeta.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnns/activationfunction/hardswish-alphabeta"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnsactivationfunctionhardswishalphabeta:0000:0001">BNNS.ActivationFunction.hardSwish(alpha:beta:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsactivationfunctionhardswishalphabeta:0001:0001">**Framework**: Accelerate **Kind**: case</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsactivationfunctionhardswishalphabeta:0002:0001">An activation function that returns the hard swish function of its input.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsactivationfunctionhardswishalphabeta:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnsactivationfunctionhardswishalphabeta:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsactivationfunctionhardswishalphabeta:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsactivationfunctionhardswishalphabeta:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsactivationfunctionhardswishalphabeta:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsactivationfunctionhardswishalphabeta:0004:0005">tvOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsactivationfunctionhardswishalphabeta:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsactivationfunctionhardswishalphabeta:0004:0007">watchOS 8.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
case hardSwish(alpha: Float, beta: Float)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">This readonly property returns the <a href="avexternalsyncdevice.md">@@TOKEN_0@@</a> instance you provided in <a href="avcapturedeviceinput/follow(_:videoframeduration:delegate:">@@TOKEN_1@@</a>.md).</span>

```swift
HardSwish(x) = x * (ReLU6(x + 3.0) * 1.0/6.0)
```

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001"><a href="avcaptureexternaldisplayconfigurator.md">@@TOKEN_0@@</a>는 외부 디스플레이에서만 적용됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">동일한 외부 디스플레이에 여러 구성자가 연결된 경우 마지막에 생성된 구성자가 해당 외부 디스플레이의 활성 구성자가 됩니다 (<a href="avcaptureexternaldisplayconfigurator/isactive.md">@@TOKEN_0@@</a> 참조).</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0012:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="bnnsactivationfunctionhardswish.md">var BNNSActivationFunctionHardSwish: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">An activation function that returns the hard swish function of its input.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="bnns/activationfunction/abs.md">BNNS.ActivationFunction.abs</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">An activation function that returns the absolute value of its input.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="bnns/activationfunction/celu(alpha:">BNNS.ActivationFunction.celu(alpha:)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">An activation function that evaluates the continuously differentiable exponential linear units (CELU) on its input.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="bnns/activationfunction/clamp(bounds:">BNNS.ActivationFunction.clamp(bounds:)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">An activation function that returns its input clamped to the specified range.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="bnns/activationfunction/clampedleakyrectifiedlinear(alpha:beta:">BNNS.ActivationFunction.clampedLeakyRectifiedLinear(alpha:beta:)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">An activation function that returns its input clamped to beta when that is greater than or equal to zero, otherwise it returns its input multiplied by alpha clamped to beta.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="bnns/activationfunction/elu(alpha:">BNNS.ActivationFunction.elu(alpha:)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">An activation function that evaluates the exponential linear units (ELU) on its input.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="bnns/activationfunction/geluapproximation(alpha:beta:">BNNS.ActivationFunction.geluApproximation(alpha:beta:)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">An activation function that evaluates the Gaussian error linear units (GELU) approximation on its input.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="bnns/activationfunction/geluapproximation2(alpha:beta:">BNNS.ActivationFunction.geluApproximation2(alpha:beta:)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">An activation function that provides a fast evaluation of the Gaussian error linear units (GELU) approximation on its input.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="bnns/activationfunction/gumbel(alpha:beta:">BNNS.ActivationFunction.gumbel(alpha:beta:)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">제한된 범위에서 값을 선택하는 슬라이더 컨트롤입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001"><a href="bnns/activationfunction/gumbelmax(alpha:beta:">BNNS.ActivationFunction.gumbelMax(alpha:beta:)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">상호 배타적인 값 집합에서 인덱스로 값을 선택하는 컨트롤입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0033:0001"><a href="bnns/activationfunction/hardshrink(alpha:">BNNS.ActivationFunction.hardShrink(alpha:)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">An activation function that returns zero when the absolute input is less than alpha, otherwise it returns its input.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0035:0001"><a href="bnns/activationfunction/hardsigmoid(alpha:beta:">BNNS.ActivationFunction.hardSigmoid(alpha:beta:)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0036:0001">An activation function that returns the hard sigmoid function of its input.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0037:0001"><a href="bnns/activationfunction/identity.md">BNNS.ActivationFunction.identity</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0038:0001">An activation function that returns its input.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0039:0001"><a href="bnns/activationfunction/leakyrectifiedlinear(alpha:">BNNS.ActivationFunction.leakyRectifiedLinear(alpha:)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0040:0001">An activation function that returns its input when that is greater than or equal to zero, otherwise it returns its input multiplied by a specified value.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0041:0001"><a href="bnns/activationfunction/linear(alpha:">BNNS.ActivationFunction.linear(alpha:)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0042:0001">An activation function that returns its input multiplied by a specified value.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0043:0001"><a href="bnns/activationfunction/linearwithbias(alpha:beta:">BNNS.ActivationFunction.linearWithBias(alpha:beta:)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0044:0001">An activation function that returns its input multiplied by a scale and added to a bias.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0046:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnns/activationfunction/hardswish(alpha:beta:">View on Apple Developer</a>)*</span>

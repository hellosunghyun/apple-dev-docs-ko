---
source_path: "documentation/Accelerate/bnnsactivationfunctiongumbelmax.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsactivationfunctiongumbelmax"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnsactivationfunctiongumbelmax:0000:0001">BNNSActivationFunctionGumbelMax</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsactivationfunctiongumbelmax:0001:0001">**Framework**: Accelerate **Kind**: var</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsactivationfunctiongumbelmax:0002:0001">Gumbel 분포에서 무작위 수를 반환하는 활성화 함수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsactivationfunctiongumbelmax:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnsactivationfunctiongumbelmax:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsactivationfunctiongumbelmax:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsactivationfunctiongumbelmax:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsactivationfunctiongumbelmax:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsactivationfunctiongumbelmax:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsactivationfunctiongumbelmax:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsactivationfunctiongumbelmax:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var BNNSActivationFunctionGumbelMax: BNNSActivationFunction { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 상수는 다음 연산으로 값을 반환하는 활성화 함수를 정의합니다:</span>

```c
 GumbleMax(X)_i = MAX(−log(−log(alpha*Uniform(0,1)+beta)+beta) + Xj) 
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="bnnsactivationfunction/init(_:">init(UInt32)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0002"><a href="bnnsactivationfunction/init(rawvalue:">init(rawValue: UInt32)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0003"><a href="bnnsactivationfunction/rawvalue.md">var rawValue: UInt32</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0004"><a href="bnnsactivationfunctionabs.md">var BNNSActivationFunctionAbs: BNNSActivationFunction</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0005"><a href="bnnsactivationfunctioncelu.md">var BNNSActivationFunctionCELU: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">입력에서 연속적으로 미분 가능한 exponential linear units(CELU)를 계산하는 활성화 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="bnnsactivationfunctionclampedleakyrectifiedlinear.md">var BNNSActivationFunctionClampedLeakyRectifiedLinear: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">입력이 0 이상이면 beta로 클램프된 값을 반환하고, 그렇지 않으면 alpha를 곱한 입력을 beta로 클램프한 값을 반환하는 활성화 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="bnnsactivationfunctionelu.md">var BNNSActivationFunctionELU: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">입력에서 exponential linear units(ELU)를 계산하는 활성화 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="bnnsactivationfunctionerf.md">var BNNSActivationFunctionErf: BNNSActivationFunction</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0002"><a href="bnnsactivationfunctiongelu.md">var BNNSActivationFunctionGELU: BNNSActivationFunction</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0003"><a href="bnnsactivationfunctiongeluapproximation.md">var BNNSActivationFunctionGELUApproximation: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">입력에서 Gaussian error linear units(GELU) 근사값을 계산하는 활성화 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="bnnsactivationfunctiongeluapproximation2.md">var BNNSActivationFunctionGELUApproximation2: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">입력에서 Gaussian error linear units(GELU) 근사값을 빠르게 계산하는 활성화 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="bnnsactivationfunctiongeluapproximationsigmoid.md">var BNNSActivationFunctionGELUApproximationSigmoid: BNNSActivationFunction</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0002"><a href="bnnsactivationfunctiongumbel.md">var BNNSActivationFunctionGumbel: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">Gumbel 분포에서 무작위 수를 반환하는 활성화 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="bnnsactivationfunctionhardshrink.md">var BNNSActivationFunctionHardShrink: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">입력의 절대값이 alpha보다 작으면 0을 반환하고, 그렇지 않으면 입력 값을 그대로 반환하는 활성화 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="bnnsactivationfunctionhardsigmoid.md">var BNNSActivationFunctionHardSigmoid: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">입력의 hard sigmoid 함수를 계산하는 활성화 함수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsactivationfunctiongumbelmax">View on Apple Developer</a>*</span>

---
source_path: "documentation/Accelerate/bnnsactivationfunction/init.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsactivationfunction/init"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:init:0000:0001">init(_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:init:0001:0001">**Framework**: Accelerate **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:init:0002:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:init:0003:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:init:0003:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:init:0003:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:init:0003:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:init:0003:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:init:0003:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:init:0003:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0004:0001">Declaration</span>

```swift
init(_ rawValue: UInt32)
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0006:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0007:0001"><a href="bnnsactivationfunction/init(rawvalue:">init(rawValue: UInt32)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0007:0002"><a href="bnnsactivationfunction/rawvalue.md">var rawValue: UInt32</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0007:0003"><a href="bnnsactivationfunctionabs.md">var BNNSActivationFunctionAbs: BNNSActivationFunction</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0007:0004"><a href="bnnsactivationfunctioncelu.md">var BNNSActivationFunctionCELU: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0008:0001">입력에 대해 연속 미분 가능한 지수 선형 유닛(CELU)을 평가하는 활성화 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0009:0001"><a href="bnnsactivationfunctionclampedleakyrectifiedlinear.md">var BNNSActivationFunctionClampedLeakyRectifiedLinear: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0010:0001">입력이 0 이상이면 beta로 클램프한 값을 반환하고, 그렇지 않으면 alpha를 beta로 클램프한 값을 입력에 곱해 반환하는 활성화 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="bnnsactivationfunctionelu.md">var BNNSActivationFunctionELU: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">입력에 대해 지수 선형 유닛(ELU)을 평가하는 활성화 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="bnnsactivationfunctionerf.md">var BNNSActivationFunctionErf: BNNSActivationFunction</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0002"><a href="bnnsactivationfunctiongelu.md">var BNNSActivationFunctionGELU: BNNSActivationFunction</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0003"><a href="bnnsactivationfunctiongeluapproximation.md">var BNNSActivationFunctionGELUApproximation: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">입력에 대해 가우시안 오차 선형 유닛(GELU) 근사값을 평가하는 활성화 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="bnnsactivationfunctiongeluapproximation2.md">var BNNSActivationFunctionGELUApproximation2: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">입력에 대해 가우시안 오차 선형 유닛(GELU) 근사값을 빠르게 계산하는 활성화 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="bnnsactivationfunctiongeluapproximationsigmoid.md">var BNNSActivationFunctionGELUApproximationSigmoid: BNNSActivationFunction</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0002"><a href="bnnsactivationfunctiongumbel.md">var BNNSActivationFunctionGumbel: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">Gumbel 분포에서 임의의 수를 반환하는 활성화 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="bnnsactivationfunctiongumbelmax.md">var BNNSActivationFunctionGumbelMax: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">Gumbel 분포에서 임의의 숫자를 반환하는 활성화 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="bnnsactivationfunctionhardshrink.md">var BNNSActivationFunctionHardShrink: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">절대 입력값이 alpha보다 작을 때 0을 반환하고, 그렇지 않으면 입력을 그대로 반환하는 활성화 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="bnnsactivationfunctionhardsigmoid.md">var BNNSActivationFunctionHardSigmoid: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">입력의 하드 시그모이드 함수를 반환하는 활성화 함수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsactivationfunction/init(_:">View on Apple Developer</a>)*</span>

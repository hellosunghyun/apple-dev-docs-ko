---
source_path: "documentation/Accelerate/bnnsactivationfunction/bnnsactivationfunctionintegerlinearsaturateperchannel.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsactivationfunction/bnnsactivationfunctionintegerlinearsaturateperchannel"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnsactivationfunctionintegerlinearsaturateperchannel:0000:0001">BNNSActivationFunctionIntegerLinearSaturatePerChannel</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsactivationfunctionintegerlinearsaturateperchannel:0001:0001">**Framework**: Accelerate **Kind**: case</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsactivationfunctionintegerlinearsaturateperchannel:0002:0001">각 채널별로 부호를 보존하는 산술 시프트 값을 반환하는 활성화 함수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsactivationfunctionintegerlinearsaturateperchannel:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnsactivationfunctionintegerlinearsaturateperchannel:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsactivationfunctionintegerlinearsaturateperchannel:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsactivationfunctionintegerlinearsaturateperchannel:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsactivationfunctionintegerlinearsaturateperchannel:0004:0004">macOS 10.13+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsactivationfunctionintegerlinearsaturateperchannel:0004:0005">tvOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsactivationfunctionintegerlinearsaturateperchannel:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsactivationfunctionintegerlinearsaturateperchannel:0004:0007">watchOS 4.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
BNNSActivationFunctionIntegerLinearSaturatePerChannel
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">Use this option to specify that the graph <a href="bnnsgraphcompilefromfile(_:_:_:">@@TOKEN_0@@</a>.md) returns is a read-only memory-mapped file.</span>

```c
saturate<output_type>((iscale_per_channel[channel] * x + ioffset_per_channel[channel]) >> ishift_per_channel[channel]) 
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="bnnsactivationfunctioncelu.md">var BNNSActivationFunctionCELU: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">입력에 대해 연속적으로 미분 가능한 지수 선형 유닛(CELU)을 평가하는 활성화 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="bnnsactivationfunction/bnnsactivationfunctionclamp.md">BNNSActivationFunctionClamp</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">입력을 지정된 범위로 clamp한 값을 반환하는 활성화 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="bnnsactivationfunctionclampedleakyrectifiedlinear.md">var BNNSActivationFunctionClampedLeakyRectifiedLinear: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">입력이 0 이상일 때 beta로 clamp하고, 그렇지 않으면 입력에 alpha를 곱해 beta로 clamp하는 활성화 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="bnnsactivationfunctionelu.md">var BNNSActivationFunctionELU: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">입력에 대해 지수 선형 유닛(ELU)을 평가하는 활성화 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="bnnsactivationfunctionerf.md">var BNNSActivationFunctionErf: BNNSActivationFunction</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0002"><a href="bnnsactivationfunctiongelu.md">var BNNSActivationFunctionGELU: BNNSActivationFunction</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0003"><a href="bnnsactivationfunctiongeluapproximation.md">var BNNSActivationFunctionGELUApproximation: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">입력에서 Gaussian error linear unit(GELU) 근사값을 평가하는 활성화 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="bnnsactivationfunctiongeluapproximation2.md">var BNNSActivationFunctionGELUApproximation2: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">입력에서 Gaussian error linear unit(GELU) 근사값을 빠르게 평가하는 활성화 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="bnnsactivationfunctiongeluapproximationsigmoid.md">var BNNSActivationFunctionGELUApproximationSigmoid: BNNSActivationFunction</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0002"><a href="bnnsactivationfunctiongumbel.md">var BNNSActivationFunctionGumbel: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">Gumbel 분포에서 난수 값을 반환하는 활성화 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="bnnsactivationfunctiongumbelmax.md">var BNNSActivationFunctionGumbelMax: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">Gumbel 분포에서 난수 값을 반환하는 활성화 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="bnnsactivationfunctionhardshrink.md">var BNNSActivationFunctionHardShrink: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">입력 절대값이 alpha 미만이면 0을 반환하고, 그렇지 않으면 입력을 반환하는 활성화 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="bnnsactivationfunctionhardsigmoid.md">var BNNSActivationFunctionHardSigmoid: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">입력의 hard sigmoid 함수를 반환하는 활성화 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001"><a href="bnnsactivationfunctionhardswish.md">var BNNSActivationFunctionHardSwish: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">입력의 hard swish 함수를 반환하는 활성화 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0033:0001"><a href="bnnsactivationfunction/bnnsactivationfunctionintegerlinearsaturate.md">BNNSActivationFunctionIntegerLinearSaturate</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">부호를 보존하는 산술 시프트 값을 반환하는 활성화 함수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0036:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsactivationfunction/bnnsactivationfunctionintegerlinearsaturateperchannel">View on Apple Developer</a>*</span>

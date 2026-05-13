---
source_path: "documentation/Accelerate/bnnsactivationfunctionsigmoid.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsactivationfunctionsigmoid"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnsactivationfunctionsigmoid:0000:0001">BNNSActivationFunctionSigmoid</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsactivationfunctionsigmoid:0001:0001">**Framework**: Accelerate **Kind**: var</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsactivationfunctionsigmoid:0002:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnsactivationfunctionsigmoid:0003:0001">iOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsactivationfunctionsigmoid:0003:0002">iPadOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsactivationfunctionsigmoid:0003:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsactivationfunctionsigmoid:0003:0004">macOS 10.12+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsactivationfunctionsigmoid:0003:0005">tvOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsactivationfunctionsigmoid:0003:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsactivationfunctionsigmoid:0003:0007">watchOS 3.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0004:0001">Declaration</span>

```swift
var BNNSActivationFunctionSigmoid: BNNSActivationFunction
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0006:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0007:0001"><a href="bnnsactivationfunction/init(_:">init(UInt32)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0007:0002"><a href="bnnsactivationfunction/init(rawvalue:">init(rawValue: UInt32)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0007:0003"><a href="bnnsactivationfunction/rawvalue.md">var rawValue: UInt32</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0007:0004"><a href="bnnsactivationfunctionabs.md">var BNNSActivationFunctionAbs: BNNSActivationFunction</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0007:0005"><a href="bnnsactivationfunctioncelu.md">var BNNSActivationFunctionCELU: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0008:0001">An activation function that evaluates the continuously differentiable exponential linear units (CELU) on its input.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0009:0001"><a href="bnnsactivationfunctionclampedleakyrectifiedlinear.md">var BNNSActivationFunctionClampedLeakyRectifiedLinear: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0010:0001">An activation function that returns its input clamped to beta when that is greater than or equal to zero, otherwise it returns its input multiplied by alpha clamped to beta.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="bnnsactivationfunctionelu.md">var BNNSActivationFunctionELU: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">An activation function that evaluates the exponential linear units (ELU) on its input.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="bnnsactivationfunctionerf.md">var BNNSActivationFunctionErf: BNNSActivationFunction</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0002"><a href="bnnsactivationfunctiongelu.md">var BNNSActivationFunctionGELU: BNNSActivationFunction</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0003"><a href="bnnsactivationfunctiongeluapproximation.md">var BNNSActivationFunctionGELUApproximation: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">An activation function that evaluates the Gaussian error linear units (GELU) approximation on its input.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="bnnsactivationfunctiongeluapproximation2.md">var BNNSActivationFunctionGELUApproximation2: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">캡처 출력이 설정을 해석했으며 곧 캡처 프로세스를 시작할 것임을 대리자에게 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="bnnsactivationfunctiongeluapproximationsigmoid.md">var BNNSActivationFunctionGELUApproximationSigmoid: BNNSActivationFunction</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0002"><a href="bnnsactivationfunctiongumbel.md">var BNNSActivationFunctionGumbel: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">특정 유형의 미디어를 캡처할 수 있도록 사용자가 앱에 권한을 부여했는지를 나타내는 권한 상태를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="bnnsactivationfunctiongumbelmax.md">var BNNSActivationFunctionGumbelMax: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">앱의 미디어 캡처 권한 상태를 나타내는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="bnnsactivationfunctionhardshrink.md">var BNNSActivationFunctionHardShrink: BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturephotocapturedelegate/photooutput(_:willcapturephotofor:">View on Apple Developer</a>)*</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsactivationfunctionsigmoid">View on Apple Developer</a>*</span>

---
source_path: "documentation/Accelerate/bnns/rmspropoptimizer/init-learningratealphaepsiloncenteredmomentumgradientscaleregularizationscalegradientclippingregularizationfunction.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnns/rmspropoptimizer/init-learningratealphaepsiloncenteredmomentumgradientscaleregularizationscalegradientclippingregularizationfunction"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initlearningratealphaepsiloncenteredmomentumgradientscaleregularizationscalegradientclippingregularizationfunction:0000:0001">init(learningRate:alpha:epsilon:centered:momentum:gradientScale:regularizationScale:gradientClipping:regularizationFunction:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initlearningratealphaepsiloncenteredmomentumgradientscaleregularizationscalegradientclippingregularizationfunction:0001:0001">**Framework**: Accelerate **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initlearningratealphaepsiloncenteredmomentumgradientscaleregularizationscalegradientclippingregularizationfunction:0002:0001">값 또는 노름으로 그래디언트를 클리핑한 새 RMSProp 최적화기 객체를 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initlearningratealphaepsiloncenteredmomentumgradientscaleregularizationscalegradientclippingregularizationfunction:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initlearningratealphaepsiloncenteredmomentumgradientscaleregularizationscalegradientclippingregularizationfunction:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initlearningratealphaepsiloncenteredmomentumgradientscaleregularizationscalegradientclippingregularizationfunction:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initlearningratealphaepsiloncenteredmomentumgradientscaleregularizationscalegradientclippingregularizationfunction:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:initlearningratealphaepsiloncenteredmomentumgradientscaleregularizationscalegradientclippingregularizationfunction:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initlearningratealphaepsiloncenteredmomentumgradientscaleregularizationscalegradientclippingregularizationfunction:0004:0005">tvOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initlearningratealphaepsiloncenteredmomentumgradientscaleregularizationscalegradientclippingregularizationfunction:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:initlearningratealphaepsiloncenteredmomentumgradientscaleregularizationscalegradientclippingregularizationfunction:0004:0007">watchOS 8.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
init(learningRate: Float = 1e-2, alpha: Float = 0.99, epsilon: Float = 1e-8, centered: Bool, momentum: Float = 0, gradientScale: Float, regularizationScale: Float, gradientClipping: BNNS.GradientClipping, regularizationFunction: BNNSOptimizerRegularizationFunction)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>learningRate</code>: 학습률을 지정하는 값입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>alpha</code>: <code>0</code>에서 <code>1</code> 범위의 평활화 상수입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0003"><code>epsilon</code>: 최적화기가 분모에 추가하는 항입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0004"><code>centered</code>: centered 변형을 사용할지 지정하는 불리언 값입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0005"><code>momentum</code>: 모멘텀 감쇠율입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0006"><code>gradientScale</code>: 그래디언트 스케일링 계수를 지정합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0007"><code>regularizationScale</code>: 정규화 스케일링 계수를 지정합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0008"><code>gradientClipping</code>: 그래디언트 클리핑 함수 및 경계값입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0009"><code>regularizationFunction</code>: 정규화 함수를 지정하는 변수입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnns/rmspropoptimizer/init(learningrate:alpha:epsilon:centered:momentum:gradientscale:regularizationscale:clipsgradientsto:regularizationfunction:">init(learningRate: Float, alpha: Float, epsilon: Float, centered: Bool, momentum: Float, gradientScale: Float, regularizationScale: Float, clipsGradientsTo: ClosedRange&lt;Float&gt;?, regularizationFunction: BNNSOptimizerRegularizationFunction)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">새 RMSProp 최적화기 객체를 반환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnns/rmspropoptimizer/init(learningrate:alpha:epsilon:centered:momentum:gradientscale:regularizationscale:gradientclipping:regularizationfunction:">Apple Developer에서 보기</a>)*</span>

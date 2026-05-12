---
source_path: "documentation/Accelerate/bnnsoptimizerrmspropfields.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsoptimizerrmspropfields"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnsoptimizerrmspropfields:0000:0001">BNNSOptimizerRMSPropFields</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsoptimizerrmspropfields:0001:0001">**Framework**: Accelerate **Kind**: struct</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsoptimizerrmspropfields:0002:0001">Root Mean Square Propagation (RMSProp) 옵티마이저의 필드를 포함하는 구조체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsoptimizerrmspropfields:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnsoptimizerrmspropfields:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsoptimizerrmspropfields:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsoptimizerrmspropfields:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsoptimizerrmspropfields:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsoptimizerrmspropfields:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsoptimizerrmspropfields:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsoptimizerrmspropfields:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
struct BNNSOptimizerRMSPropFields
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0008:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0009:0001"><a href="bnnsoptimizerrmspropfields/init(learning_rate:alpha:epsilon:centered:momentum:gradient_scale:regularization_scale:clip_gradients:clip_gradients_min:clip_gradients_max:regularization_func:">init(learning_rate: Float, alpha: Float, epsilon: Float, centered: Bool, momentum: Float, gradient_scale: Float, regularization_scale: Float, clip_gradients: Bool, clip_gradients_min: Float, clip_gradients_max: Float, regularization_func: BNNSOptimizerRegularizationFunction)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0010:0001">지정된 매개변수로부터 새 RMSProp 옵티마이저 필드 구조체를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0011:0001"><a href="bnnsoptimizerrmspropfields/init.md">init()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0012:0001">새로운 RMSProp 옵티마이저 필드 구조체를 반환합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:instance-properties:0013:0001">인스턴스 속성</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0014:0001"><a href="bnnsoptimizerrmspropfields/learning_rate.md">var learning_rate: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0015:0001">학습률을 지정하는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0016:0001"><a href="bnnsoptimizerrmspropfields/alpha.md">var alpha: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0017:0001">평활화를 지정하는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0018:0001"><a href="bnnsoptimizerrmspropfields/epsilon.md">var epsilon: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0019:0001">옵티마이저가 분모에 더하는 항입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0020:0001"><a href="bnnsoptimizerrmspropfields/centered.md">var centered: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0021:0001">Centered 변형을 사용할지 여부를 지정하는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0022:0001"><a href="bnnsoptimizerrmspropfields/momentum.md">var momentum: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0023:0001">모멘텀 감쇠율입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0024:0001"><a href="bnnsoptimizerrmspropfields/gradient_scale.md">var gradient_scale: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0025:0001">그래디언트 스케일링 계수를 지정하는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0026:0001"><a href="bnnsoptimizerrmspropfields/regularization_scale.md">var regularization_scale: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0027:0001">정규화 스케일링 계수를 지정하는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0028:0001"><a href="bnnsoptimizerrmspropfields/clip_gradients.md">var clip_gradients: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0029:0001">최솟값과 최댓값 사이에서 그래디언트를 클리핑할지 여부를 지정하는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0030:0001"><a href="bnnsoptimizerrmspropfields/clip_gradients_min.md">var clip_gradients_min: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0031:0001">최소 그래디언트 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0032:0001"><a href="bnnsoptimizerrmspropfields/clip_gradients_max.md">var clip_gradients_max: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0033:0001">최대 그래디언트 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0034:0001"><a href="bnnsoptimizerrmspropfields/regularization_func.md">var regularization_func: BNNSOptimizerRegularizationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0035:0001">정규화 함수를 지정하는 변수입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0036:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0037:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0038:0001"><a href="../Swift/BitwiseCopyable.md">BitwiseCopyable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0038:0002"><a href="../Swift/Sendable.md">Sendable</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0039:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001"><a href="bnns/adamoptimizer.md">struct AdamOptimizer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">Adam 최적화 알고리즘을 사용하는 옵티마이저입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0042:0001"><a href="bnns/adamwoptimizer.md">struct AdamWOptimizer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">AdamW 최적화 알고리즘을 사용하는 옵티마이저입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0044:0001"><a href="bnns/rmspropoptimizer.md">struct RMSPropOptimizer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0045:0001">루트 평균 제곱 전파(RMSProp) 최적화 방법을 사용하는 옵티마이저입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0046:0001"><a href="bnns/sgdmomentumoptimizer.md">struct SGDMomentumOptimizer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0047:0001">모멘텀 최적화 방식을 사용하는 확률적 경사 하강법(SGD) 옵티마이저입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0048:0001"><a href="bnnsoptimizer.md">protocol BNNSOptimizer</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0048:0002"><a href="bnnsoptimizerregularizationfunction.md">struct BNNSOptimizerRegularizationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0049:0001">옵티마이저 정규화 함수를 포함하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0050:0001"><a href="bnnsoptimizeradamfields.md">struct BNNSOptimizerAdamFields</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0051:0001">Adam 옵티마이저의 필드가 포함된 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0052:0001"><a href="bnnsoptimizeradamwithclippingfields.md">struct BNNSOptimizerAdamWithClippingFields</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0053:0001">값 또는 노름 기준으로 기울기를 선택적으로 클리핑하는 Adam 또는 AdamW 옵티마이저의 필드가 포함된 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0054:0001"><a href="bnnsoptimizerrmspropwithclippingfields.md">struct BNNSOptimizerRMSPropWithClippingFields</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0055:0001">값 또는 노름 기준으로 기울기를 선택적으로 클리핑하는 RMSProp 옵티마이저의 필드가 포함된 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0056:0001"><a href="bnnsoptimizersgdmomentumfields.md">struct BNNSOptimizerSGDMomentumFields</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0057:0001">모멘텀 기반 확률적 경사 하강법(SGD) 옵티마이저의 필드가 포함된 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0058:0001"><a href="bnnsoptimizersgdmomentumwithclippingfields.md">struct BNNSOptimizerSGDMomentumWithClippingFields</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0059:0001">값 또는 노름 기준으로 기울기를 선택적으로 클리핑하는 모멘텀 기반 확률적 경사 하강법(SGD) 옵티마이저의 필드가 포함된 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0060:0001"><a href="bnnsoptimizersgdmomentumvariant.md">struct BNNSOptimizerSGDMomentumVariant</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0061:0001">SGD 모멘텀 변형을 정의하는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0062:0001"><a href="bnnsoptimizerstep(_:_:_:_:_:_:_:">func BNNSOptimizerStep(BNNSOptimizerFunction, UnsafeRawPointer, Int, UnsafeMutablePointer&lt;UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;&gt;, UnsafeMutablePointer&lt;UnsafePointer&lt;BNNSNDArrayDescriptor&gt;&gt;, UnsafeMutablePointer&lt;UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;?&gt;?, UnsafePointer&lt;BNNSFilterParameters&gt;?) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0063:0001">하나 이상의 매개변수에 대해 단일 최적화 단계를 적용합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0064:0001"><a href="bnnsoptimizerfunction.md">struct BNNSOptimizerFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0065:0001">옵티마이저 함수가 포함된 구조체입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0067:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsoptimizerrmspropfields">View on Apple Developer</a>*</span>

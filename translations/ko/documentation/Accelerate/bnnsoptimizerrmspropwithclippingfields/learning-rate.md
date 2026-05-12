---
source_path: "documentation/Accelerate/bnnsoptimizerrmspropwithclippingfields/learning-rate.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsoptimizerrmspropwithclippingfields/learning-rate"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:learningrate:0000:0001">learning_rate</span>

<span class="ko-segment" data-segment-id="seg:paragraph:learningrate:0001:0001">**Framework**: Accelerate **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:learningrate:0002:0001">학습률을 지정하는 값입니다</span>

<span class="ko-segment" data-segment-id="seg:paragraph:learningrate:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:learningrate:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:learningrate:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:learningrate:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:learningrate:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:learningrate:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:learningrate:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:learningrate:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var learning_rate: Float
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="bnnsoptimizerrmspropwithclippingfields/alpha.md">var alpha: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">평활화를 지정하는 상수입니다</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnnsoptimizerrmspropwithclippingfields/epsilon.md">var epsilon: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">옵티마이저가 분모에 추가하는 항입니다</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnnsoptimizerrmspropwithclippingfields/centered.md">var centered: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">중심화된 변형을 사용할지 지정하는 Boolean 값입니다</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnnsoptimizerrmspropwithclippingfields/momentum.md">var momentum: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">모멘텀 감쇠율입니다</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnnsoptimizerrmspropwithclippingfields/gradient_scale.md">var gradient_scale: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">그래디언트 스케일링 계수를 지정하는 값입니다</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="bnnsoptimizerrmspropwithclippingfields/regularization_scale.md">var regularization_scale: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">정규화 스케일링 계수를 지정하는 값입니다</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="bnnsoptimizerrmspropwithclippingfields/regularization_func.md">var regularization_func: BNNSOptimizerRegularizationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">정규화 함수를 지정하는 변수입니다</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="bnnsoptimizerrmspropwithclippingfields/clipping_func.md">var clipping_func: BNNSOptimizerClippingFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">클리핑 함수입니다</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="bnnsoptimizerclippingfunction.md">struct BNNSOptimizerClippingFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">클리핑 함수를 설명하는 상수입니다</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="bnnsoptimizerrmspropwithclippingfields/clip_gradients_min.md">var clip_gradients_min: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">값 기준 클리핑의 최소 클리핑 값입니다</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="bnnsoptimizerrmspropwithclippingfields/clip_gradients_max.md">var clip_gradients_max: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">값 기준 클리핑의 최대 클리핑 값입니다</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="bnnsoptimizerrmspropwithclippingfields/clip_gradients_max_norm.md">var clip_gradients_max_norm: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">노름 기반 클리핑과 글로벌 노름 기반 클리핑의 최대 유클리디안 노름입니다</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="bnnsoptimizerrmspropwithclippingfields/clip_gradients_use_norm.md">var clip_gradients_use_norm: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">글로벌 노름 클리핑에서 알려진 유클리디안 노름을 지정하는 선택값입니다</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsoptimizerrmspropwithclippingfields/learning_rate">View on Apple Developer</a>*</span>

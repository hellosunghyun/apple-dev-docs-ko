---
source_path: "documentation/Accelerate/bnnsoptimizerrmspropfields/clip-gradients.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsoptimizerrmspropfields/clip-gradients"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:clipgradients:0000:0001">clip_gradients</span>

<span class="ko-segment" data-segment-id="seg:paragraph:clipgradients:0001:0001">**Framework**: Accelerate **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:clipgradients:0002:0001">최소값과 최대값 사이에서 그래디언트를 클리핑할지 지정하는 부울 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:clipgradients:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:clipgradients:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:clipgradients:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:clipgradients:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:clipgradients:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:clipgradients:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:clipgradients:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:clipgradients:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var clip_gradients: Bool
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="bnnsoptimizerrmspropfields/learning_rate.md">var learning_rate: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">학습률을 지정하는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnnsoptimizerrmspropfields/alpha.md">var alpha: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">스무딩을 지정하는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnnsoptimizerrmspropfields/epsilon.md">var epsilon: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">옵티마이저가 분모에 추가하는 항입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnnsoptimizerrmspropfields/centered.md">var centered: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">중심(centered) 변형을 사용할지 지정하는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnnsoptimizerrmspropfields/momentum.md">var momentum: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">모멘텀 감쇠율입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="bnnsoptimizerrmspropfields/gradient_scale.md">var gradient_scale: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">그래디언트 스케일링 계수를 지정하는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="bnnsoptimizerrmspropfields/regularization_scale.md">var regularization_scale: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">정규화 스케일링 계수를 지정하는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="bnnsoptimizerrmspropfields/clip_gradients_min.md">var clip_gradients_min: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">최소 그래디언트 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="bnnsoptimizerrmspropfields/clip_gradients_max.md">var clip_gradients_max: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">최대 그래디언트 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="bnnsoptimizerrmspropfields/regularization_func.md">var regularization_func: BNNSOptimizerRegularizationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">정규화 함수를 지정하는 변수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsoptimizerrmspropfields/clip_gradients">View on Apple Developer</a>*</span>

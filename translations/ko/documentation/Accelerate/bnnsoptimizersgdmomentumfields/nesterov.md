---
source_path: "documentation/Accelerate/bnnsoptimizersgdmomentumfields/nesterov.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsoptimizersgdmomentumfields/nesterov"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:nesterov:0000:0001">nesterov</span>

<span class="ko-segment" data-segment-id="seg:paragraph:nesterov:0001:0001">**Framework**: Accelerate **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:nesterov:0002:0001">A Boolean value that specifies whether to use Nesterov momentum update.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:nesterov:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:nesterov:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:nesterov:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:nesterov:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:nesterov:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:nesterov:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:nesterov:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:nesterov:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var nesterov: Bool
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="bnnsoptimizersgdmomentumfields/learning_rate.md">var learning_rate: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">A value that specifies the learning rate.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnnsoptimizersgdmomentumfields/momentum.md">var momentum: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">Apple Haptics Audio Pattern 파일 형식의 UTI입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnnsoptimizersgdmomentumfields/gradient_scale.md">var gradient_scale: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">에셋의 전체 타임라인에서 트랙의 시간 범위입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnnsoptimizersgdmomentumfields/regularization_scale.md">var regularization_scale: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">트랙이 참조하는 미디어의 natural time scale입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnnsoptimizersgdmomentumfields/clip_gradients.md">var clip_gradients: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">트랙이 참조하는 미디어의 예상 데이터 전송률(초당 비트)입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="bnnsoptimizersgdmomentumfields/clip_gradients_min.md">var clip_gradients_min: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcompositiontrack/samplepresentationtime(fortracktime:">View on Apple Developer</a>)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="bnnsoptimizersgdmomentumfields/clip_gradients_max.md">var clip_gradients_max: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">The values for the maximum gradient.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="bnnsoptimizersgdmomentumfields/regularization_func.md">var regularization_func: BNNSOptimizerRegularizationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">The variable that specifies the regularization function.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="bnnsoptimizersgdmomentumfields/sgd_momentum_variant.md">var sgd_momentum_variant: BNNSOptimizerSGDMomentumVariant</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">The variable that specifies the momentum variant.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsoptimizersgdmomentumfields/nesterov">View on Apple Developer</a>*</span>

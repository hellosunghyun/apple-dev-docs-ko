---
source_path: "documentation/Accelerate/bnnsoptimizerrmspropwithclippingfields/clipping-func.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsoptimizerrmspropwithclippingfields/clipping-func"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:clippingfunc:0000:0001">clipping_func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:clippingfunc:0001:0001">**Framework**: Accelerate **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:clippingfunc:0002:0001">The clipping function.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:clippingfunc:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:clippingfunc:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:clippingfunc:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:clippingfunc:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:clippingfunc:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:clippingfunc:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:clippingfunc:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:clippingfunc:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var clipping_func: BNNSOptimizerClippingFunction
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="bnnsoptimizerrmspropwithclippingfields/learning_rate.md">var learning_rate: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">A value that specifies the learning rate.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnnsoptimizerrmspropwithclippingfields/alpha.md">var alpha: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">A constant that specifies smoothing.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnnsoptimizerrmspropwithclippingfields/epsilon.md">var epsilon: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">A term that the optimizer adds to the denominator.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnnsoptimizerrmspropwithclippingfields/centered.md">var centered: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">A Boolean value that specifies whether to use the centered variant.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnnsoptimizerrmspropwithclippingfields/momentum.md">var momentum: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">The rate of momentum decay.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="bnnsoptimizerrmspropwithclippingfields/gradient_scale.md">var gradient_scale: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">A value that specifies the gradient scaling factor.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="bnnsoptimizerrmspropwithclippingfields/regularization_scale.md">var regularization_scale: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">A value that specifies the regularization scaling factor.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="bnnsoptimizerrmspropwithclippingfields/regularization_func.md">var regularization_func: BNNSOptimizerRegularizationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">The variable that specifies the regularization function.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="bnnsoptimizerclippingfunction.md">struct BNNSOptimizerClippingFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">Constants that describe clipping functions.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="bnnsoptimizerrmspropwithclippingfields/clip_gradients_min.md">var clip_gradients_min: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">The minimum clipping value for clipping by value.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="bnnsoptimizerrmspropwithclippingfields/clip_gradients_max.md">var clip_gradients_max: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">시스템이 캡처한 콘텐츠를 업데이트할 수 없습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="bnnsoptimizerrmspropwithclippingfields/clip_gradients_max_norm.md">var clip_gradients_max_norm: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">앱에서 콘텐츠 키 요청을 생성할 수 없습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="bnnsoptimizerrmspropwithclippingfields/clip_gradients_use_norm.md">var clip_gradients_use_norm: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">시스템이 미디어 디코딩에 실패했습니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsoptimizerrmspropwithclippingfields/clipping_func">View on Apple Developer</a>*</span>

---
source_path: "documentation/Accelerate/bnns/rmspropoptimizer/gradientscale.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnns/rmspropoptimizer/gradientscale"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:gradientscale:0000:0001">gradientScale</span>

<span class="ko-segment" data-segment-id="seg:paragraph:gradientscale:0001:0001">**Framework**: Accelerate **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:gradientscale:0002:0001">A value that specifies the gradient scaling factor.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:gradientscale:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:gradientscale:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:gradientscale:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:gradientscale:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:gradientscale:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:gradientscale:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:gradientscale:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:gradientscale:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var gradientScale: Float { get set }
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="bnns/rmspropoptimizer/learningrate.md">var learningRate: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">A value that specifies the learning rate.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnns/rmspropoptimizer/alpha.md">var alpha: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">A constant that specifies smoothing.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnns/rmspropoptimizer/epsilon.md">var epsilon: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">A term that the optimizer adds to the denominator.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnns/rmspropoptimizer/centered.md">var centered: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">A Boolean value that specifies whether to use the centered variant.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnns/rmspropoptimizer/momentum.md">var momentum: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">The rate of momentum decay.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="bnns/rmspropoptimizer/regularizationscale.md">var regularizationScale: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">A value that specifies the regularization scaling factor.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="bnns/rmspropoptimizer/gradientbounds.md">var gradientBounds: ClosedRange&lt;Float&gt;?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">The values for the minimum and maximum gradients.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="bnns/rmspropoptimizer/gradientclipping.md">var gradientClipping: BNNS.GradientClipping</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">그래디언트 클리핑입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="bnns/gradientclipping.md">BNNS.GradientClipping</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">클리핑 함수를 설명하는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="bnns/rmspropoptimizer/regularizationfunction.md">var regularizationFunction: BNNSOptimizerRegularizationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">정규화 함수를 지정하는 변수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="bnns/rmspropoptimizer/accumulatorcountmultiplier.md">var accumulatorCountMultiplier: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">매개변수별로 필요한 누적기 개수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnns/rmspropoptimizer/gradientscale">View on Apple Developer</a>*</span>

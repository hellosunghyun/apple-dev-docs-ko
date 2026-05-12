---
source_path: "documentation/Accelerate/bnns/adamwoptimizer/accumulatorcountmultiplier.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnns/adamwoptimizer/accumulatorcountmultiplier"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:accumulatorcountmultiplier:0000:0001">accumulatorCountMultiplier</span>

<span class="ko-segment" data-segment-id="seg:paragraph:accumulatorcountmultiplier:0001:0001">**Framework**: Accelerate **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:accumulatorcountmultiplier:0002:0001">각 매개변수에 필요한 누산기 개수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:accumulatorcountmultiplier:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:accumulatorcountmultiplier:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:accumulatorcountmultiplier:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:accumulatorcountmultiplier:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:accumulatorcountmultiplier:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:accumulatorcountmultiplier:0004:0005">tvOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:accumulatorcountmultiplier:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:accumulatorcountmultiplier:0004:0007">watchOS 8.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var accumulatorCountMultiplier: Int { get }
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="bnns/adamwoptimizer/learningrate.md">var learningRate: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">학습률을 지정하는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnns/adamwoptimizer/beta1.md">var beta1: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">범위 <code>0</code>에서 <code>1</code> 사이인 1차 모멘트 상수를 지정하는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnns/adamwoptimizer/beta2.md">var beta2: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">범위 <code>0</code>에서 <code>1</code> 사이인 2차 모멘트 상수를 지정하는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnns/adamwoptimizer/timestep.md">var timeStep: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">최소 <code>1</code> 이상이며 옵티마이저의 현재 시간을 나타내는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnns/adamwoptimizer/epsilon.md">var epsilon: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">수치적 안정성을 개선하기 위해 사용하는 엡실론 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="bnns/adamwoptimizer/gradientscale.md">var gradientScale: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">그래디언트 스케일링 계수를 지정하는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="bnns/adamwoptimizer/weightdecay.md">var weightDecay: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">가중치 감쇠 계수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="bnns/adamwoptimizer/gradientclipping.md">var gradientClipping: BNNS.GradientClipping</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">그래디언트 클리핑 함수와 범위입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="bnns/gradientclipping.md">BNNS.GradientClipping</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">클리핑 함수를 설명하는 상수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnns/adamwoptimizer/accumulatorcountmultiplier">View on Apple Developer</a>*</span>

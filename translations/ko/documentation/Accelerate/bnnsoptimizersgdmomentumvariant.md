---
source_path: "documentation/Accelerate/bnnsoptimizersgdmomentumvariant.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsoptimizersgdmomentumvariant"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnsoptimizersgdmomentumvariant:0000:0001">BNNSOptimizerSGDMomentumVariant</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsoptimizersgdmomentumvariant:0001:0001">**Framework**: Accelerate **Kind**: struct</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsoptimizersgdmomentumvariant:0002:0001">SGD 모멘텀 변형을 정의하는 상수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsoptimizersgdmomentumvariant:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnsoptimizersgdmomentumvariant:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsoptimizersgdmomentumvariant:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsoptimizersgdmomentumvariant:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsoptimizersgdmomentumvariant:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsoptimizersgdmomentumvariant:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsoptimizersgdmomentumvariant:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsoptimizersgdmomentumvariant:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
struct BNNSOptimizerSGDMomentumVariant
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:momentum-variants:0008:0001">모멘텀 변형</span>

- <span class="ko-segment" data-segment-id="seg:list:momentum-variants:0009:0001"><a href="bnnsoptimizersgdmomentumvariant/init(_:">init(UInt32)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:momentum-variants:0009:0002"><a href="bnnsoptimizersgdmomentumvariant/init(rawvalue:">init(rawValue: UInt32)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:momentum-variants:0009:0003"><a href="bnnsoptimizersgdmomentumvariant/rawvalue.md">var rawValue: UInt32</a></span>
- <span class="ko-segment" data-segment-id="seg:list:momentum-variants:0009:0004"><a href="bnnssgdmomentumvariant0.md">var BNNSSGDMomentumVariant0: BNNSOptimizerSGDMomentumVariant</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:momentum-variants:0010:0001">SGD 모멘텀 변형 0을 나타내는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:momentum-variants:0011:0001"><a href="bnnssgdmomentumvariant1.md">var BNNSSGDMomentumVariant1: BNNSOptimizerSGDMomentumVariant</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:momentum-variants:0012:0001">SGD 모멘텀 변형 1을 나타내는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:momentum-variants:0013:0001"><a href="bnnssgdmomentumvariant2.md">var BNNSSGDMomentumVariant2: BNNSOptimizerSGDMomentumVariant</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:momentum-variants:0014:0001">SGD 모멘텀 변형 2를 나타내는 상수입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0015:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0016:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0017:0001"><a href="../Swift/BitwiseCopyable.md">BitwiseCopyable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0017:0002"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0017:0003"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0017:0004"><a href="../Swift/RawRepresentable.md">RawRepresentable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0017:0005"><a href="../Swift/Sendable.md">Sendable</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0018:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="bnns/adamoptimizer.md">struct AdamOptimizer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">Adam 최적화 알고리즘을 사용하는 옵티마이저입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="bnns/adamwoptimizer.md">struct AdamWOptimizer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">AdamW 최적화 알고리즘을 사용하는 옵티마이저입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="bnns/rmspropoptimizer.md">struct RMSPropOptimizer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">제곱 평균 전파(RMSProp) 최적화 방법을 사용하는 옵티마이저입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="bnns/sgdmomentumoptimizer.md">struct SGDMomentumOptimizer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">모멘텀 최적화 방법이 적용된 확률적 경사 하강법(SGD)을 사용하는 옵티마이저입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="bnnsoptimizer.md">protocol BNNSOptimizer</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0002"><a href="bnnsoptimizerregularizationfunction.md">struct BNNSOptimizerRegularizationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">옵티마이저 정규화 함수를 포함하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="bnnsoptimizeradamfields.md">struct BNNSOptimizerAdamFields</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">Adam 옵티마이저의 필드를 포함하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001"><a href="bnnsoptimizeradamwithclippingfields.md">struct BNNSOptimizerAdamWithClippingFields</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">값 또는 노름 기준으로 그래디언트를 선택적으로 클리핑하는 Adam 또는 AdamW 옵티마이저의 필드를 포함하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0033:0001"><a href="bnnsoptimizerrmspropfields.md">struct BNNSOptimizerRMSPropFields</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">RMSProp 옵티마이저의 필드를 포함하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0035:0001"><a href="bnnsoptimizerrmspropwithclippingfields.md">struct BNNSOptimizerRMSPropWithClippingFields</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0036:0001">값 또는 노름 기준으로 그래디언트를 선택적으로 클리핑하는 RMSProp 옵티마이저의 필드를 포함하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0037:0001"><a href="bnnsoptimizersgdmomentumfields.md">struct BNNSOptimizerSGDMomentumFields</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0038:0001">모멘텀을 사용하는 확률적 경사 하강법(SGD) 옵티마이저의 필드를 포함하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0039:0001"><a href="bnnsoptimizersgdmomentumwithclippingfields.md">struct BNNSOptimizerSGDMomentumWithClippingFields</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0040:0001">값 또는 노름 기준으로 그래디언트를 선택적으로 클리핑하는 모멘텀 기반 확률적 경사 하강법(SGD) 옵티마이저의 필드를 포함하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0041:0001"><a href="bnnsoptimizerstep(_:_:_:_:_:_:_:">func BNNSOptimizerStep(BNNSOptimizerFunction, UnsafeRawPointer, Int, UnsafeMutablePointer&lt;UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;&gt;, UnsafeMutablePointer&lt;UnsafePointer&lt;BNNSNDArrayDescriptor&gt;&gt;, UnsafeMutablePointer&lt;UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;?&gt;?, UnsafePointer&lt;BNNSFilterParameters&gt;?) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0042:0001">하나 이상의 매개변수에 대해 단일 최적화 단계를 적용합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0043:0001"><a href="bnnsoptimizerfunction.md">struct BNNSOptimizerFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0044:0001">옵티마이저 함수를 포함하는 구조체입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0046:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsoptimizersgdmomentumvariant">View on Apple Developer</a>*</span>

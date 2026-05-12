---
source_path: "documentation/Accelerate/bnns/fusednormalizationparameters/type.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnns/fusednormalizationparameters/type"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:type:0000:0001">type</span>

<span class="ko-segment" data-segment-id="seg:paragraph:type:0001:0001">**Framework**: Accelerate **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:type:0002:0001">정규화 유형을 지정하는 열거형입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:type:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:type:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:type:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:type:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:type:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:type:0004:0005">tvOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:type:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:type:0004:0007">watchOS 8.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var type: BNNS.NormalizationType
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="bnns/fusednormalizationparameters/beta.md">var beta: BNNSNDArrayDescriptor?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">beta의 디스크립터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnns/fusednormalizationparameters/gamma.md">var gamma: BNNSNDArrayDescriptor?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">gamma의 디스크립터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnns/fusednormalizationparameters/momentum.md">var momentum: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">학습 중 이동 평균과 이동 분산을 업데이트할 때 정규화 연산에서 사용하는 0과 1 사이의 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnns/fusednormalizationparameters/epsilon.md">var epsilon: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">표준 편차 계산에 사용되는 epsilon입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnns/fusednormalizationparameters/activation.md">var activation: BNNS.ActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">레이어가 출력에 적용하는 활성화 함수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnns/fusednormalizationparameters/type">View on Apple Developer</a>*</span>

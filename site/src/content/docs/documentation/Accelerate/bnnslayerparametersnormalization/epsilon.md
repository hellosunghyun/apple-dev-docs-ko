---
source_path: "documentation/Accelerate/bnnslayerparametersnormalization/epsilon.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnslayerparametersnormalization/epsilon"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:epsilon:0000:0001">epsilon</span>

<span class="ko-segment" data-segment-id="seg:paragraph:epsilon:0001:0001">**Framework**: Accelerate **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:epsilon:0002:0001">표준 편차 계산에 사용되는 epsilon입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:epsilon:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:epsilon:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:epsilon:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:epsilon:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:epsilon:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:epsilon:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:epsilon:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:epsilon:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var epsilon: Float
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="bnnslayerparametersnormalization/i_desc.md">var i_desc: BNNSNDArrayDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">입력의 디스크립터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnnslayerparametersnormalization/o_desc.md">var o_desc: BNNSNDArrayDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">출력의 디스크립터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnnslayerparametersnormalization/beta_desc.md">var beta_desc: BNNSNDArrayDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">베타 또는 바이어스의 디스크립터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnnslayerparametersnormalization/gamma_desc.md">var gamma_desc: BNNSNDArrayDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">감마 또는 스케일의 디스크립터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnnslayerparametersnormalization/moving_mean_desc.md">var moving_mean_desc: BNNSNDArrayDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">이동 평균의 디스크립터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="bnnslayerparametersnormalization/moving_variance_desc.md">var moving_variance_desc: BNNSNDArrayDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">이동 분산의 디스크립터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="bnnslayerparametersnormalization/momentum.md">var momentum: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">정규화 작업이 학습 중 이동 평균과 이동 분산을 업데이트하는 데 사용하는 0과 1 사이의 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="bnnslayerparametersnormalization/activation.md">var activation: BNNSActivation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">레이어가 출력에 적용하는 활성화 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="bnnslayerparametersnormalization/num_groups.md">var num_groups: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">레이어가 정규화 통계를 계산하는 그룹 수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="bnnslayerparametersnormalization/normalization_axis.md">var normalization_axis: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">레이어 정규화 작업이 정규화를 시작하는 축입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnslayerparametersnormalization/epsilon">View on Apple Developer</a>*</span>

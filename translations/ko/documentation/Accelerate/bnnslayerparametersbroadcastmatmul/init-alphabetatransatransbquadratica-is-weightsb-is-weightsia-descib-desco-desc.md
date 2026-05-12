---
source_path: "documentation/Accelerate/bnnslayerparametersbroadcastmatmul/init-alphabetatransatransbquadratica-is-weightsb-is-weightsia-descib-desco-desc.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnslayerparametersbroadcastmatmul/init-alphabetatransatransbquadratica-is-weightsb-is-weightsia-descib-desco-desc"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initalphabetatransatransbquadraticaisweightsbisweightsiadescibdescodesc:0000:0001">init(alpha:beta:transA:transB:quadratic:a_is_weights:b_is_weights:iA_desc:iB_desc:o_desc:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initalphabetatransatransbquadraticaisweightsbisweightsiadescibdescodesc:0001:0001">**Framework**: Accelerate **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initalphabetatransatransbquadraticaisweightsbisweightsiadescibdescodesc:0002:0001">지정된 매개변수로부터 새 브로드캐스트 행렬 곱셈 레이어 매개변수 구조체를 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initalphabetatransatransbquadraticaisweightsbisweightsiadescibdescodesc:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initalphabetatransatransbquadraticaisweightsbisweightsiadescibdescodesc:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initalphabetatransatransbquadraticaisweightsbisweightsiadescibdescodesc:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initalphabetatransatransbquadraticaisweightsbisweightsiadescibdescodesc:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initalphabetatransatransbquadraticaisweightsbisweightsiadescibdescodesc:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initalphabetatransatransbquadraticaisweightsbisweightsiadescibdescodesc:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initalphabetatransatransbquadraticaisweightsbisweightsiadescibdescodesc:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initalphabetatransatransbquadraticaisweightsbisweightsiadescibdescodesc:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
init(alpha: Float, beta: Float, transA: Bool, transB: Bool, quadratic: Bool, a_is_weights: Bool, b_is_weights: Bool, iA_desc: BNNSNDArrayDescriptor, iB_desc: BNNSNDArrayDescriptor, o_desc: BNNSNDArrayDescriptor)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>filter</code>: The filter to apply.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>batch_size</code>: The number of input-output pairs.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0003"><code>in</code>: Pointer to the input data.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0004"><code>in_stride</code>: Increment, in values, between inputs.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0005"><code>out</code>: Pointer to the output data.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0006"><code>out_stride</code>: Increment, in values, between outputs.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0007"><code>training</code>: Set to true during training and false during inference.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0008"><code>iA_desc</code>: 행렬 *A*의 디스크립터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0009"><code>iB_desc</code>: 행렬 *B*의 디스크립터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0010"><code>o_desc</code>: 출력의 디스크립터입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnnslayerparametersbroadcastmatmul/init.md">init()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">지정된 매개변수로부터 새 브로드캐스트 행렬 곱셈 레이어 매개변수 구조체를 반환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnslayerparametersbroadcastmatmul/init(alpha:beta:transa:transb:quadratic:a_is_weights:b_is_weights:ia_desc:ib_desc:o_desc:">View on Apple Developer</a>)*</span>

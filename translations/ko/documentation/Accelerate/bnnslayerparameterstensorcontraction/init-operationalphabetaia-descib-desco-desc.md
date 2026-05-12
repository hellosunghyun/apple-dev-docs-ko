---
source_path: "documentation/Accelerate/bnnslayerparameterstensorcontraction/init-operationalphabetaia-descib-desco-desc.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnslayerparameterstensorcontraction/init-operationalphabetaia-descib-desco-desc"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initoperationalphabetaiadescibdescodesc:0000:0001">init(operation:alpha:beta:iA_desc:iB_desc:o_desc:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initoperationalphabetaiadescibdescodesc:0001:0001">**Framework**: Accelerate **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initoperationalphabetaiadescibdescodesc:0002:0001">새 tensor-contraction 매개변수 구조체를 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initoperationalphabetaiadescibdescodesc:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initoperationalphabetaiadescibdescodesc:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initoperationalphabetaiadescibdescodesc:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initoperationalphabetaiadescibdescodesc:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initoperationalphabetaiadescibdescodesc:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initoperationalphabetaiadescibdescodesc:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initoperationalphabetaiadescibdescodesc:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initoperationalphabetaiadescibdescodesc:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
init(operation: UnsafePointer<CChar>, alpha: Float, beta: Float, iA_desc: BNNSNDArrayDescriptor, iB_desc: BNNSNDArrayDescriptor, o_desc: BNNSNDArrayDescriptor)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>operation</code>: 연산을 설명하는 문자열입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>alpha</code>: 연산 결과에 적용되는 스케일링입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0003"><code>beta</code>: 연산이 결과에 더하기 전에 기존 출력을 스케일링할 때 사용하는 값으로, <code>0.0</code> 또는 <code>1.0</code>이어야 합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0004"><code>iA_desc</code>: 입력 행렬 *A*의 디스크립터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0005"><code>iB_desc</code>: 입력 행렬 *B*의 디스크립터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0006"><code>o_desc</code>: 출력의 디스크립터입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0010:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnslayerparameterstensorcontraction/init(operation:alpha:beta:ia_desc:ib_desc:o_desc:">Apple Developer에서 보기</a>)*</span>

---
source_path: "documentation/Accelerate/bnns/convolutionlayer/applybackward-batchsizeinputoutputoutputgradientgeneratinginputgradientgeneratingweightsgradientgeneratingbiasgradient.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnns/convolutionlayer/applybackward-batchsizeinputoutputoutputgradientgeneratinginputgradientgeneratingweightsgradientgeneratingbiasgradient"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:applybackwardbatchsizeinputoutputoutputgradientgeneratinginputgradientgeneratingweightsgradientgeneratingbiasgradient:0000:0001">applyBackward(batchSize:input:output:outputGradient:generatingInputGradient:generatingWeightsGradient:generatingBiasGradient:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:applybackwardbatchsizeinputoutputoutputgradientgeneratinginputgradientgeneratingweightsgradientgeneratingbiasgradient:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:applybackwardbatchsizeinputoutputoutputgradientgeneratinginputgradientgeneratingweightsgradientgeneratingbiasgradient:0002:0001">계층의 역전파를 적용하여 입력 그래디언트를 생성합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:applybackwardbatchsizeinputoutputoutputgradientgeneratinginputgradientgeneratingweightsgradientgeneratingbiasgradient:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:applybackwardbatchsizeinputoutputoutputgradientgeneratinginputgradientgeneratingweightsgradientgeneratingbiasgradient:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:applybackwardbatchsizeinputoutputoutputgradientgeneratinginputgradientgeneratingweightsgradientgeneratingbiasgradient:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:applybackwardbatchsizeinputoutputoutputgradientgeneratinginputgradientgeneratingweightsgradientgeneratingbiasgradient:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:applybackwardbatchsizeinputoutputoutputgradientgeneratinginputgradientgeneratingweightsgradientgeneratingbiasgradient:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:applybackwardbatchsizeinputoutputoutputgradientgeneratinginputgradientgeneratingweightsgradientgeneratingbiasgradient:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:applybackwardbatchsizeinputoutputoutputgradientgeneratinginputgradientgeneratingweightsgradientgeneratingbiasgradient:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:applybackwardbatchsizeinputoutputoutputgradientgeneratinginputgradientgeneratingweightsgradientgeneratingbiasgradient:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func applyBackward(batchSize: Int, input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, outputGradient: BNNSNDArrayDescriptor, generatingInputGradient inputGradient: BNNSNDArrayDescriptor, generatingWeightsGradient weightsGradient: BNNSNDArrayDescriptor? = nil, generatingBiasGradient biasGradient: BNNSNDArrayDescriptor? = nil) throws
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>batchSize</code>: 입력-출력 쌍의 수입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>input</code>: 입력의 디스크립터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0003"><code>output</code>: 출력의 디스크립터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0004"><code>outputGradient</code>: 출력 그래디언트의 디스크립터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0005"><code>inputGradient</code>: 입력 그래디언트의 디스크립터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0006"><code>weightsGradient</code>: 가중치 그래디언트의 디스크립터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0007"><code>biasGradient</code>: 바이어스 그래디언트의 디스크립터입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0010:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnns/convolutionlayer/applybackward(batchsize:input:output:outputgradient:generatinginputgradient:generatingweightsgradient:generatingbiasgradient:">Apple Developer에서 보기</a>)*</span>

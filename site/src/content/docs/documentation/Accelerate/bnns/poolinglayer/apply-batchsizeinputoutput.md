---
source_path: "documentation/Accelerate/bnns/poolinglayer/apply-batchsizeinputoutput.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnns/poolinglayer/apply-batchsizeinputoutput"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:applybatchsizeinputoutput:0000:0001">apply(batchSize:input:output:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:applybatchsizeinputoutput:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:applybatchsizeinputoutput:0002:0001">Applies the layer to a set of input objects, writing the result to a set of output objects.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:applybatchsizeinputoutput:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:applybatchsizeinputoutput:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:applybatchsizeinputoutput:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:applybatchsizeinputoutput:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:applybatchsizeinputoutput:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:applybatchsizeinputoutput:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:applybatchsizeinputoutput:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:applybatchsizeinputoutput:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func apply(batchSize: Int, input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor) throws
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>batchSize</code>: The number of input-output pairs.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>input</code>: The descriptor of the input.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0003"><code>output</code>: The descriptor of the output.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참조 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnns/poolinglayer/applybackward(batchsize:input:output:outputgradient:generatinginputgradient:generatingbiasgradient:">func applyBackward(batchSize: Int, input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, outputGradient: BNNSNDArrayDescriptor, generatingInputGradient: BNNSNDArrayDescriptor, generatingBiasGradient: BNNSNDArrayDescriptor?) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">Applies the layer backward to generate input gradients.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnns/poolinglayer/apply(batchsize:input:output:">View on Apple Developer</a>)*</span>

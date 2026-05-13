---
source_path: "documentation/Accelerate/bnns/normalizationlayer/apply-batchsizeinputoutputfor.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnns/normalizationlayer/apply-batchsizeinputoutputfor"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:applybatchsizeinputoutputfor:0000:0001">apply(batchSize:input:output:for:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:applybatchsizeinputoutputfor:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:applybatchsizeinputoutputfor:0002:0001">Applies the layer to a set of input objects, writing the result to a set of output objects.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:applybatchsizeinputoutputfor:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:applybatchsizeinputoutputfor:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:applybatchsizeinputoutputfor:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:applybatchsizeinputoutputfor:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:applybatchsizeinputoutputfor:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:applybatchsizeinputoutputfor:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:applybatchsizeinputoutputfor:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:applybatchsizeinputoutputfor:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func apply(batchSize: Int, input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, for learningPhase: BNNS.LearningPhase) throws
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>midiStatus</code>: MIDI 이벤트의 상태 값입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>data1</code>: MIDI 이벤트의 첫 번째 데이터 바이트입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0003"><code>data2</code>: MIDI 이벤트의 첫 번째 데이터 바이트입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0004"><code>learningPhase</code>: An enumeration that specifies whether the function call context is training or inference.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avaudiounitmidiinstrument/sendcontroller(_:withvalue:onchannel:">func sendController(UInt8, withValue: UInt8, onChannel: UInt8)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">Applies the layer backward to generate input gradients.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnns/normalizationlayer/apply(batchsize:input:output:for:">View on Apple Developer</a>)*</span>

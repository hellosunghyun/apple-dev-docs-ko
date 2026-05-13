---
source_path: "documentation/Accelerate/bnnslayerparameterslosssoftmaxcrossentropy.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnslayerparameterslosssoftmaxcrossentropy"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnslayerparameterslosssoftmaxcrossentropy:0000:0001">BNNSLayerParametersLossSoftmaxCrossEntropy</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnslayerparameterslosssoftmaxcrossentropy:0001:0001">**Framework**: Accelerate **Kind**: struct</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnslayerparameterslosssoftmaxcrossentropy:0002:0001">A structure that contains the parameters of a softmax cross entropy loss layer.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnslayerparameterslosssoftmaxcrossentropy:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnslayerparameterslosssoftmaxcrossentropy:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnslayerparameterslosssoftmaxcrossentropy:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnslayerparameterslosssoftmaxcrossentropy:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnslayerparameterslosssoftmaxcrossentropy:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnslayerparameterslosssoftmaxcrossentropy:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnslayerparameterslosssoftmaxcrossentropy:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnslayerparameterslosssoftmaxcrossentropy:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
struct BNNSLayerParametersLossSoftmaxCrossEntropy
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0008:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0009:0001"><a href="bnnslayerparameterslosssoftmaxcrossentropy/init(function:i_desc:o_desc:reduction:label_smooth:">init(function: BNNSLossFunction, i_desc: BNNSNDArrayDescriptor, o_desc: BNNSNDArrayDescriptor, reduction: BNNSLossReductionFunction, label_smooth: Float)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0010:0001">Returns a new softmax cross entropy loss layer parameters structure from the specified parameters.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0011:0001"><a href="bnnslayerparameterslosssoftmaxcrossentropy/init.md">init()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0012:0001">Returns a new softmax cross entropy loss layer parameters structure.</span>

### <span class="ko-segment" data-segment-id="seg:heading:instance-properties:0013:0001">Instance Properties</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0014:0001"><a href="bnnslayerparameterslosssoftmaxcrossentropy/function.md">var function: BNNSLossFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0015:0001">The function that’s used to compute loss.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0016:0001"><a href="bnnslayerparameterslosssoftmaxcrossentropy/i_desc.md">var i_desc: BNNSNDArrayDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0017:0001">The descriptor of the input.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0018:0001"><a href="bnnslayerparameterslosssoftmaxcrossentropy/o_desc.md">var o_desc: BNNSNDArrayDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0019:0001">The descriptor of the output.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0020:0001"><a href="bnnslayerparameterslosssoftmaxcrossentropy/reduction.md">var reduction: BNNSLossReductionFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0021:0001">The function that’s used to reduce the computed loss.</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0022:0001"><a href="bnnslayerparameterslosssoftmaxcrossentropy/label_smooth.md">var label_smooth: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0023:0001">A value that defines the smoothing that the loss function applies to the labels.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0024:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0025:0001">Conforms To</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0026:0001"><a href="../Swift/BitwiseCopyable.md">BitwiseCopyable</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0027:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="bnns/losslayer.md">class LossLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">앱이 콘텐츠 키 검색 요청을 취소했습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="bnnslossfunction.md">struct BNNSLossFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">시스템이 캡처된 콘텐츠를 업데이트하지 못했습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="bnnslossreductionfunction.md">struct BNNSLossReductionFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">앱에서 콘텐츠 키 요청을 생성하지 못했습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="bnnslayerparameterslossbase.md">struct BNNSLayerParametersLossBase</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">A structure that contains the parameters of a loss layer.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="bnnslayerparameterslosshuber.md">struct BNNSLayerParametersLossHuber</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">A structure that contains the parameters of a Huber loss layer.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="bnnslayerparameterslosssigmoidcrossentropy.md">struct BNNSLayerParametersLossSigmoidCrossEntropy</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">A structure that contains the parameters of a sigmoid cross entropy loss layer.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001"><a href="bnnslayerparameterslossyolo.md">struct BNNSLayerParametersLossYolo</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">A structure that contains the parameters of a You Only Look Once (YOLO) loss layer.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0042:0001"><a href="bnnsfiltercreatelayerloss(_:_:">func BNNSFilterCreateLayerLoss(UnsafeRawPointer, UnsafePointer&lt;BNNSFilterParameters&gt;?) -&gt; BNNSFilter?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">Returns a new loss layer.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0044:0001"><a href="bnnslossfilterapplybatch(_:_:_:_:_:_:_:_:_:_:_:">func BNNSLossFilterApplyBatch(BNNSFilter?, Int, UnsafeRawPointer, Int, UnsafeRawPointer, Int, UnsafeRawPointer?, Int, UnsafeMutableRawPointer, UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;?, Int) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0045:0001">Applies a loss filter to a set of input objects, writing the result to a set of output objects.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0046:0001"><a href="bnnslossfilterapplybackwardbatch(_:_:_:_:_:_:_:_:_:_:_:_:">func BNNSLossFilterApplyBackwardBatch(BNNSFilter?, Int, UnsafeRawPointer, Int, UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;, Int, UnsafeRawPointer, Int, UnsafeRawPointer?, Int, UnsafePointer&lt;BNNSNDArrayDescriptor&gt;, Int) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0047:0001">Applies a loss filter backward to generate gradients.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0049:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnslayerparameterslosssoftmaxcrossentropy">View on Apple Developer</a>*</span>

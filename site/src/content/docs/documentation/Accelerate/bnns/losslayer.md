---
source_path: "documentation/Accelerate/bnns/losslayer.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnns/losslayer"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnslosslayer:0000:0001">BNNS.LossLayer</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnslosslayer:0001:0001">**Framework**: Accelerate **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnslosslayer:0002:0001">A layer object that wraps a loss filter and manages its deinitialization.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnslosslayer:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnslosslayer:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnslosslayer:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnslosslayer:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnslosslayer:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnslosslayer:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnslosslayer:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnslosslayer:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class LossLayer
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:creating-a-loss-layer:0008:0001">Creating a Loss Layer</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-a-loss-layer:0009:0001"><a href="bnns/losslayer/init(input:output:lossfunction:lossreduction:filterparameters:">convenience init?(input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, lossFunction: BNNS.LossFunction, lossReduction: BNNS.LossReduction, filterParameters: BNNSFilterParameters?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-a-loss-layer:0010:0001">Returns a new loss layer.</span>

### <span class="ko-segment" data-segment-id="seg:heading:specifying-a-loss-function:0011:0001">Specifying a Loss Function</span>

- <span class="ko-segment" data-segment-id="seg:list:specifying-a-loss-function:0012:0001"><a href="bnns/lossfunction.md">BNNS.LossFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:specifying-a-loss-function:0013:0001">Constants that describe loss functions.</span>

### <span class="ko-segment" data-segment-id="seg:heading:specifying-a-loss-reduction-function:0014:0001">Specifying a Loss Reduction Function</span>

- <span class="ko-segment" data-segment-id="seg:list:specifying-a-loss-reduction-function:0015:0001"><a href="bnns/lossreduction.md">BNNS.LossReduction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:specifying-a-loss-reduction-function:0016:0001">An enumeration that describes loss reduction functions.</span>

### <span class="ko-segment" data-segment-id="seg:heading:applying-a-loss-layer:0017:0001">Applying a Loss Layer</span>

- <span class="ko-segment" data-segment-id="seg:list:applying-a-loss-layer:0018:0001"><a href="bnns/losslayer/apply(batchsize:input:labels:output:generatinginputgradient:">func apply(batchSize: Int, input: BNNSNDArrayDescriptor, labels: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, generatingInputGradient: BNNSNDArrayDescriptor) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:applying-a-loss-layer:0019:0001">Applies the layer to a set of input objects, writing the result to a set of output objects.</span>

### <span class="ko-segment" data-segment-id="seg:heading:instance-methods:0020:0001">Instance Methods</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-methods:0021:0001"><a href="bnns/losslayer/apply(batchsize:input:labels:output:weights:broadcastsweights:generatinginputgradient:">func apply(batchSize: Int, input: BNNSNDArrayDescriptor, labels: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, weights: BNNSNDArrayDescriptor?, broadcastsWeights: Bool, generatingInputGradient: BNNSNDArrayDescriptor) throws</a>.md)</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0022:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0023:0001">Inherits From</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0024:0001"><a href="bnns/layer.md">BNNS.Layer</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0025:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="bnnslossfunction.md">struct BNNSLossFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">Constants that describe loss functions.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="bnnslossreductionfunction.md">struct BNNSLossReductionFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">프레임워크가 월드 맵을 처리하지 못했음을 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="bnnslayerparameterslossbase.md">struct BNNSLayerParametersLossBase</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">앱이 마이크 사용자 권한이 없는 경우를 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="bnnslayerparameterslosshuber.md">struct BNNSLayerParametersLossHuber</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">프레임워크가 감지된 객체를 병합하지 못했음을 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="bnnslayerparameterslosssigmoidcrossentropy.md">struct BNNSLayerParametersLossSigmoidCrossEntropy</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">필수 입력을 제공하지 못한 센서 오류를 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="bnnslayerparameterslosssoftmaxcrossentropy.md">struct BNNSLayerParametersLossSoftmaxCrossEntropy</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">프레임워크가 필요한 센서에 액세스하지 못했음을 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="bnnslayerparameterslossyolo.md">struct BNNSLayerParametersLossYolo</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">기기가 세션 구성에 대한 지원이 부족함을 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001"><a href="bnnsfiltercreatelayerloss(_:_:">func BNNSFilterCreateLayerLoss(UnsafeRawPointer, UnsafePointer&lt;BNNSFilterParameters&gt;?) -&gt; BNNSFilter?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">Returns a new loss layer.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0042:0001"><a href="bnnslossfilterapplybatch(_:_:_:_:_:_:_:_:_:_:_:">func BNNSLossFilterApplyBatch(BNNSFilter?, Int, UnsafeRawPointer, Int, UnsafeRawPointer, Int, UnsafeRawPointer?, Int, UnsafeMutableRawPointer, UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;?, Int) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">Applies a loss filter to a set of input objects, writing the result to a set of output objects.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0044:0001"><a href="bnnslossfilterapplybackwardbatch(_:_:_:_:_:_:_:_:_:_:_:_:">func BNNSLossFilterApplyBackwardBatch(BNNSFilter?, Int, UnsafeRawPointer, Int, UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;, Int, UnsafeRawPointer, Int, UnsafeRawPointer?, Int, UnsafePointer&lt;BNNSNDArrayDescriptor&gt;, Int) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0045:0001">Applies a loss filter backward to generate gradients.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0047:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnns/losslayer">View on Apple Developer</a>*</span>

---
source_path: "documentation/Accelerate/bnns/binaryarithmeticlayer.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnns/binaryarithmeticlayer"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnsbinaryarithmeticlayer:0000:0001">BNNS.BinaryArithmeticLayer</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsbinaryarithmeticlayer:0001:0001">**Framework**: Accelerate **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsbinaryarithmeticlayer:0002:0001">A layer object that wraps a binary arithmetic filter and manages its deinitialization.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsbinaryarithmeticlayer:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnsbinaryarithmeticlayer:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsbinaryarithmeticlayer:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsbinaryarithmeticlayer:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsbinaryarithmeticlayer:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsbinaryarithmeticlayer:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsbinaryarithmeticlayer:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsbinaryarithmeticlayer:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class BinaryArithmeticLayer
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:creating-a-binary-arithmetic-layer:0008:0001">Creating a Binary Arithmetic Layer</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-a-binary-arithmetic-layer:0009:0001"><a href="bnns/binaryarithmeticlayer/init(inputa:inputadescriptortype:inputb:inputbdescriptortype:output:outputdescriptortype:function:activation:filterparameters:">convenience init?(inputA: BNNSNDArrayDescriptor, inputADescriptorType: BNNS.DescriptorType, inputB: BNNSNDArrayDescriptor, inputBDescriptorType: BNNS.DescriptorType, output: BNNSNDArrayDescriptor, outputDescriptorType: BNNS.DescriptorType, function: BNNS.ArithmeticBinaryFunction, activation: BNNS.ActivationFunction, filterParameters: BNNSFilterParameters?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-a-binary-arithmetic-layer:0010:0001">Returns a new binary arithmetic layer.</span>

### <span class="ko-segment" data-segment-id="seg:heading:specifying-a-binary-arithmetic-function:0011:0001">Specifying a Binary Arithmetic Function</span>

- <span class="ko-segment" data-segment-id="seg:list:specifying-a-binary-arithmetic-function:0012:0001"><a href="bnns/arithmeticbinaryfunction.md">BNNS.ArithmeticBinaryFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:specifying-a-binary-arithmetic-function:0013:0001">Constants that describe binary arithmetic functions.</span>

### <span class="ko-segment" data-segment-id="seg:heading:specifying-a-descriptor-type:0014:0001">Specifying a Descriptor Type</span>

- <span class="ko-segment" data-segment-id="seg:list:specifying-a-descriptor-type:0015:0001"><a href="bnns/descriptortype.md">BNNS.DescriptorType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:specifying-a-descriptor-type:0016:0001">Constants that describe the input and output types of an arithmetic operation.</span>

### <span class="ko-segment" data-segment-id="seg:heading:applying-a-binary-arithmetic-layer:0017:0001">Applying a Binary Arithmetic Layer</span>

- <span class="ko-segment" data-segment-id="seg:list:applying-a-binary-arithmetic-layer:0018:0001"><a href="bnns/binaryarithmeticlayer/apply(batchsize:inputa:inputb:output:">func apply(batchSize: Int, inputA: BNNSNDArrayDescriptor, inputB: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:applying-a-binary-arithmetic-layer:0019:0001">Applies the layer to a set of input array descriptors, writing the result to a set of output array descriptors.</span>

- <span class="ko-segment" data-segment-id="seg:list:applying-a-binary-arithmetic-layer:0020:0001"><a href="bnns/binaryarithmeticlayer/applybackward(batchsize:inputa:inputb:output:outputgradient:generatinginputagradient:generatinginputbgradient:">func applyBackward(batchSize: Int, inputA: BNNSNDArrayDescriptor, inputB: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, outputGradient: BNNSNDArrayDescriptor, generatingInputAGradient: BNNSNDArrayDescriptor, generatingInputBGradient: BNNSNDArrayDescriptor) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:applying-a-binary-arithmetic-layer:0021:0001">Applies the layer backward to generate input gradients.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0022:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0023:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0024:0001"><a href="bnns/layer.md">BNNS.Layer</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0025:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="bnns/unaryarithmeticlayer.md">class UnaryArithmeticLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">A layer object that wraps a unary arithmetic filter and manages its deinitialization.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="bnns/ternaryarithmeticlayer.md">class TernaryArithmeticLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">전면 또는 후면 카메라를 선택하거나 TrueDepth 카메라 또는 듀얼 카메라 같은 고급 기능을 사용할 수 있습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="bnnsdescriptortype.md">struct BNNSDescriptorType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">자동 구도 권장 사항을 제공하여 최적의 샷을 캡처합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="bnnsarithmeticunary.md">struct BNNSArithmeticUnary</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">카메라 또는 마이크와 같은 하드웨어 또는 가상 캡처 장치를 나타내는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="bnnsarithmeticbinary.md">struct BNNSArithmeticBinary</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">캡처 세션으로 캡처 장치에서 미디어 입력을 제공하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="bnnsarithmeticternary.md">struct BNNSArithmeticTernary</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">세 개의 입력을 갖는 산술 연산의 입력과 출력을 포함하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="bnnsarithmeticfunction.md">struct BNNSArithmeticFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">산술 연산을 정의하는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001"><a href="bnnslayerparametersarithmetic.md">struct BNNSLayerParametersArithmetic</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">산술 레이어의 매개변수를 포함하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0042:0001"><a href="bnnsfiltercreatelayerarithmetic(_:_:">func BNNSFilterCreateLayerArithmetic(UnsafePointer&lt;BNNSLayerParametersArithmetic&gt;, UnsafePointer&lt;BNNSFilterParameters&gt;?) -&gt; BNNSFilter?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">새 산술 레이어를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0044:0001"><a href="bnnsarithmeticfilterapplybatch(_:_:_:_:_:_:_:">func BNNSArithmeticFilterApplyBatch(BNNSFilter?, Int, Int, UnsafeMutablePointer&lt;UnsafeRawPointer&gt;, UnsafePointer&lt;Int&gt;, UnsafeMutableRawPointer, Int) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0045:0001">입력 객체 집합에 산술 필터를 적용하고 결과를 출력 객체 집합에 기록합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0046:0001"><a href="bnnsarithmeticfilterapplybackwardbatch(_:_:_:_:_:_:_:_:_:_:_:">func BNNSArithmeticFilterApplyBackwardBatch(BNNSFilter?, Int, Int, UnsafeMutablePointer&lt;UnsafeRawPointer?&gt;?, UnsafePointer&lt;Int&gt;?, UnsafeMutablePointer&lt;UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;&gt;, UnsafePointer&lt;Int&gt;, UnsafeRawPointer?, Int, UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;, Int) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0047:0001">입력 그래디언트를 생성하기 위해 산술 필터를 역방향으로 적용합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0049:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnns/binaryarithmeticlayer">View on Apple Developer</a>*</span>

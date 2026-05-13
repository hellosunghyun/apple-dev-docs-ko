---
source_path: "documentation/Accelerate/bnns/transpose-inputoutputfirsttransposeaxissecondtransposeaxisfilterparameters.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnns/transpose-inputoutputfirsttransposeaxissecondtransposeaxisfilterparameters"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:transposeinputoutputfirsttransposeaxissecondtransposeaxisfilterparameters:0000:0001">transpose(input:output:firstTransposeAxis:secondTransposeAxis:filterParameters:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:transposeinputoutputfirsttransposeaxissecondtransposeaxisfilterparameters:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:transposeinputoutputfirsttransposeaxissecondtransposeaxisfilterparameters:0002:0001">Transposes a tensor by swapping two of its dimensions.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:transposeinputoutputfirsttransposeaxissecondtransposeaxisfilterparameters:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:transposeinputoutputfirsttransposeaxissecondtransposeaxisfilterparameters:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:transposeinputoutputfirsttransposeaxissecondtransposeaxisfilterparameters:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:transposeinputoutputfirsttransposeaxissecondtransposeaxisfilterparameters:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:transposeinputoutputfirsttransposeaxissecondtransposeaxisfilterparameters:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:transposeinputoutputfirsttransposeaxissecondtransposeaxisfilterparameters:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:transposeinputoutputfirsttransposeaxissecondtransposeaxisfilterparameters:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:transposeinputoutputfirsttransposeaxissecondtransposeaxisfilterparameters:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static func transpose(input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, firstTransposeAxis: Int, secondTransposeAxis: Int, filterParameters: BNNSFilterParameters? = nil) throws
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>input</code>: The descriptor of the input.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>output</code>: The descriptor of the output.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0003"><code>firstTransposeAxis</code>: The first axis of transposition.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0004"><code>secondTransposeAxis</code>: The second axis of transposition.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0005"><code>filterParameters</code>: Runtime filter parameters.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnns/copy(_:to:filterparameters:">static func copy(BNNSNDArrayDescriptor, to: BNNSNDArrayDescriptor, filterParameters: BNNSFilterParameters?) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">Copies the contents of an n-dimensional array descriptor to another descriptor of the same shape.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnnscopy(_:_:_:">func BNNSCopy(UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafePointer&lt;BNNSFilterParameters&gt;?) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">Copies the contents of an n-dimensional array descriptor to another of the same shape.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnnstranspose(_:_:_:_:_:">func BNNSTranspose(UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafePointer&lt;BNNSNDArrayDescriptor&gt;, Int, Int, UnsafePointer&lt;BNNSFilterParameters&gt;?) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">Transposes a tensor by swapping two of its dimensions.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnnsgetpointer(_:_:">func BNNSGetPointer(BNNSFilter?, BNNSPointerSpecifier) -&gt; BNNSNDArrayDescriptor</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">Returns an n-dimensional array descriptor that contains a reference to a filter-data member.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="bnnspointerspecifier.md">struct BNNSPointerSpecifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">Constants that specify which pointer the BNNS get filter function returns.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="bnns/gramlayer.md">class GramLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">A layer object that wraps a Gram matrix filter and manages its deinitialization.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="bnnslayerparametersgram.md">struct BNNSLayerParametersGram</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">A set of parameters that define a Gram matrix layer.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="bnnsfiltercreatelayergram(_:_:">func BNNSFilterCreateLayerGram(UnsafePointer&lt;BNNSLayerParametersGram&gt;, UnsafePointer&lt;BNNSFilterParameters&gt;?) -&gt; BNNSFilter?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">Returns a new Gram matrix layer.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="bnns/clip(to:input:output:">static func clip(to: ClosedRange&lt;Float&gt;, input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">Clips the input tensor to a closed range and writes the result to the output tensor.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001">[static func clipByNorm(threshold: Float, input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, axes: [Int]?) throws](bnns/clipbynorm(threshold:input:output:axes:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">Clips the input tensor to a Euclidean norm and writes the result to the output tensor.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001">[static func clipByGlobalNorm(threshold: Float, inputs: [BNNSNDArrayDescriptor], outputs: [BNNSNDArrayDescriptor], globalNorm: Float) throws](bnns/clipbyglobalnorm(threshold:inputs:outputs:globalnorm:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">Clips the input tensors to a global Euclidean norm and writes the result to the output tensors.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="bnnsclipbyvalue(_:_:_:_:">func BNNSClipByValue(UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafePointer&lt;BNNSNDArrayDescriptor&gt;, Float, Float) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">텐서의 값을 지정한 최소값과 최대값으로 클립합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="bnnsclipbynorm(_:_:_:_:">func BNNSClipByNorm(UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafePointer&lt;BNNSNDArrayDescriptor&gt;, Float, UInt32) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">텐서의 값을 최대 유클리드 노름으로 클립합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="bnnsclipbyglobalnorm(_:_:_:_:_:">func BNNSClipByGlobalNorm(UnsafeMutablePointer&lt;UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;&gt;, UnsafeMutablePointer&lt;UnsafePointer&lt;BNNSNDArrayDescriptor&gt;&gt;, Int, Float, Float) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">텐서의 값을 최대 전역 유클리드 노름으로 클립합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="bnns/copybandpart(_:to:lowerbandcount:upperbandcount:filterparameters:">static func copyBandPart(BNNSNDArrayDescriptor, to: BNNSNDArrayDescriptor, lowerBandCount: Int?, upperBandCount: Int?, filterParameters: BNNSFilterParameters?) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">행렬의 지정된 하위 대각선과 상위 대각선을 복사하고 다른 요소를 0으로 설정합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnns/transpose(input:output:firsttransposeaxis:secondtransposeaxis:filterparameters:">View on Apple Developer</a>)*</span>

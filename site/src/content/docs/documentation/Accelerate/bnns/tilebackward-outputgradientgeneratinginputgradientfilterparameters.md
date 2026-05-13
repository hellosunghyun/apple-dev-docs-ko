---
source_path: "documentation/Accelerate/bnns/tilebackward-outputgradientgeneratinginputgradientfilterparameters.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnns/tilebackward-outputgradientgeneratinginputgradientfilterparameters"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:tilebackwardoutputgradientgeneratinginputgradientfilterparameters:0000:0001">tileBackward(outputGradient:generatingInputGradient:filterParameters:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:tilebackwardoutputgradientgeneratinginputgradientfilterparameters:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:tilebackwardoutputgradientgeneratinginputgradientfilterparameters:0002:0001">입력 그라디언트를 생성하기 위해 타일 필터를 역방향으로 적용합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:tilebackwardoutputgradientgeneratinginputgradientfilterparameters:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:tilebackwardoutputgradientgeneratinginputgradientfilterparameters:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:tilebackwardoutputgradientgeneratinginputgradientfilterparameters:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:tilebackwardoutputgradientgeneratinginputgradientfilterparameters:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:tilebackwardoutputgradientgeneratinginputgradientfilterparameters:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:tilebackwardoutputgradientgeneratinginputgradientfilterparameters:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:tilebackwardoutputgradientgeneratinginputgradientfilterparameters:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:tilebackwardoutputgradientgeneratinginputgradientfilterparameters:0004:0007">watchOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static func tileBackward(outputGradient: BNNSNDArrayDescriptor, generatingInputGradient inputGradient: BNNSNDArrayDescriptor, filterParameters: BNNSFilterParameters? = nil) throws
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>outputGradient</code>: 출력 그라디언트 디스크립터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>inputGradient</code>: 입력 그라디언트 디스크립터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0003"><code>filterParameters</code>: 런타임 필터 매개변수입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnnstilebackward(_:_:_:">func BNNSTileBackward(UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafePointer&lt;BNNSFilterParameters&gt;?) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">입력 그라디언트를 생성하기 위해 타일 필터를 역방향으로 적용합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnns/copy(_:to:filterparameters:">static func copy(BNNSNDArrayDescriptor, to: BNNSNDArrayDescriptor, filterParameters: BNNSFilterParameters?) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">동일한 모양의 다른 디스크립터로 n차원 배열 디스크립터의 내용을 복사합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnns/transpose(input:output:firsttransposeaxis:secondtransposeaxis:filterparameters:">static func transpose(input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, firstTransposeAxis: Int, secondTransposeAxis: Int, filterParameters: BNNSFilterParameters?) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">두 차원을 교환하여 텐서를 전치합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnnscopy(_:_:_:">func BNNSCopy(UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafePointer&lt;BNNSFilterParameters&gt;?) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">동일한 모양의 다른 디스크립터로 n차원 배열 디스크립터의 내용을 복사합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="bnnstranspose(_:_:_:_:_:">func BNNSTranspose(UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafePointer&lt;BNNSNDArrayDescriptor&gt;, Int, Int, UnsafePointer&lt;BNNSFilterParameters&gt;?) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">두 개의 차원을 서로 바꿔 텐서를 전치합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="bnnsgetpointer(_:_:">func BNNSGetPointer(BNNSFilter?, BNNSPointerSpecifier) -&gt; BNNSNDArrayDescriptor</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">필터 데이터 멤버에 대한 참조를 포함하는 n차원 배열 디스크립터를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="bnnspointerspecifier.md">struct BNNSPointerSpecifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">좌우 채널 밸런스를 제어하는 이벤트 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="bnns/gramlayer.md">class GramLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">좌우 채널 패닝을 제어하는 이벤트 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="bnnslayerparametersgram.md">struct BNNSLayerParametersGram</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">expression 컨트롤러를 나타내는 이벤트 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="bnnsfiltercreatelayergram(_:_:">func BNNSFilterCreateLayerGram(UnsafePointer&lt;BNNSLayerParametersGram&gt;, UnsafePointer&lt;BNNSFilterParameters&gt;?) -&gt; BNNSFilter?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">댐퍼 페달을 켜거나 끄는 이벤트 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="bnns/clip(to:input:output:">static func clip(to: ClosedRange&lt;Float&gt;, input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">portamento를 켜거나 끄는 이벤트 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001">[static func clipByNorm(threshold: Float, input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, axes: [Int]?) throws](bnns/clipbynorm(threshold:input:output:axes:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">sostenuto를 켜거나 끄는 이벤트 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001">[static func clipByGlobalNorm(threshold: Float, inputs: [BNNSNDArrayDescriptor], outputs: [BNNSNDArrayDescriptor], globalNorm: Float) throws](bnns/clipbyglobalnorm(threshold:inputs:outputs:globalnorm:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">노트의 볼륨을 낮추는 이벤트 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="bnnsclipbyvalue(_:_:_:_:">func BNNSClipByValue(UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafePointer&lt;BNNSNDArrayDescriptor&gt;, Float, Float) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">legato 페달을 켜거나 끄는 이벤트 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="bnnsclipbynorm(_:_:_:_:">func BNNSClipByNorm(UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafePointer&lt;BNNSNDArrayDescriptor&gt;, Float, UInt32) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">Clips a tensor’s values to a maximum Euclidean norm.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001"><a href="bnnsclipbyglobalnorm(_:_:_:_:_:">func BNNSClipByGlobalNorm(UnsafeMutablePointer&lt;UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;&gt;, UnsafeMutablePointer&lt;UnsafePointer&lt;BNNSNDArrayDescriptor&gt;&gt;, Int, Float, Float) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">Clips a tensor’s values to a maximum global Euclidean norm.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnns/tilebackward(outputgradient:generatinginputgradient:filterparameters:">View on Apple Developer</a>)*</span>

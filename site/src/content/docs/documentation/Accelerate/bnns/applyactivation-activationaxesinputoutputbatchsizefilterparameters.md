---
source_path: "documentation/Accelerate/bnns/applyactivation-activationaxesinputoutputbatchsizefilterparameters.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnns/applyactivation-activationaxesinputoutputbatchsizefilterparameters"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:applyactivationactivationaxesinputoutputbatchsizefilterparameters:0000:0001">applyActivation(activation:axes:input:output:batchSize:filterParameters:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:applyactivationactivationaxesinputoutputbatchsizefilterparameters:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:applyactivationactivationaxesinputoutputbatchsizefilterparameters:0002:0001">지정한 축에 대해 활성화 함수를 적용합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:applyactivationactivationaxesinputoutputbatchsizefilterparameters:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:applyactivationactivationaxesinputoutputbatchsizefilterparameters:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:applyactivationactivationaxesinputoutputbatchsizefilterparameters:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:applyactivationactivationaxesinputoutputbatchsizefilterparameters:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:applyactivationactivationaxesinputoutputbatchsizefilterparameters:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:applyactivationactivationaxesinputoutputbatchsizefilterparameters:0004:0005">tvOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:applyactivationactivationaxesinputoutputbatchsizefilterparameters:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:applyactivationactivationaxesinputoutputbatchsizefilterparameters:0004:0007">watchOS 8.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static func applyActivation(activation: BNNS.ActivationFunction, axes: [Int], input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, batchSize: Int, filterParameters: BNNSFilterParameters? = nil) throws
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>activation</code>: 함수에서 적용할 활성화 함수입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>axes</code>: 함수가 <a href="bnnsactivationfunction/softmax.md">@@TOKEN_1@@</a>와 같은 특정 활성화 함수를 적용하는 축의 인덱스입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0003"><code>input</code>: 입력의 디스크립터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0004"><code>output</code>: 출력의 디스크립터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0005"><code>batchSize</code>: 입력-출력 쌍의 개수입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0006"><code>filterParameters</code>: 필터 런타임 매개변수입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnnsfiltercreatevectoractivationlayer(_:_:_:_:">func BNNSFilterCreateVectorActivationLayer(UnsafePointer&lt;BNNSVectorDescriptor&gt;, UnsafePointer&lt;BNNSVectorDescriptor&gt;, UnsafePointer&lt;BNNSActivation&gt;, UnsafePointer&lt;BNNSFilterParameters&gt;?) -&gt; BNNSFilter?</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0002"><a href="bnns/activationlayer.md">class ActivationLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">활성화 필터를 래핑하고 비초기화 처리를 관리하는 레이어 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnnsactivationfunction.md">struct BNNSActivationFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">활성화 함수를 설명하는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnnsactivation.md">struct BNNSActivation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">일반적인 활성화 함수를 설명하는 매개변수 모음입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnnslayerparametersactivation.md">struct BNNSLayerParametersActivation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">활성화 레이어를 정의하는 매개변수 모음입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="bnnsfiltercreatelayeractivation(_:_:">func BNNSFilterCreateLayerActivation(UnsafePointer&lt;BNNSLayerParametersActivation&gt;, UnsafePointer&lt;BNNSFilterParameters&gt;?) -&gt; BNNSFilter?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">프레임워크가 참조 객체를 로드할 때 사용하는 입력 파일입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="bnnsdirectapplyactivationbatch(_:_:_:_:_:">func BNNSDirectApplyActivationBatch(UnsafePointer&lt;BNNSLayerParametersActivation&gt;, UnsafePointer&lt;BNNSFilterParameters&gt;?, Int, Int, Int) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">Applies an activation filter to a set of input objects, writing out the result to a set of output objects.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="bnns/applyactivation(activation:input:output:batchsize:filterparameters:">static func applyActivation(activation: BNNS.ActivationFunction, input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, batchSize: Int, filterParameters: BNNSFilterParameters?) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">Applies the specified activation function.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnns/applyactivation(activation:axes:input:output:batchsize:filterparameters:">View on Apple Developer</a>)*</span>

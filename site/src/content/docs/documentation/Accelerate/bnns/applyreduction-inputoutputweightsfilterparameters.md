---
source_path: "documentation/Accelerate/bnns/applyreduction-inputoutputweightsfilterparameters.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnns/applyreduction-inputoutputweightsfilterparameters"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:applyreductioninputoutputweightsfilterparameters:0000:0001">applyReduction(_:input:output:weights:filterParameters:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:applyreductioninputoutputweightsfilterparameters:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:applyreductioninputoutputweightsfilterparameters:0002:0001">지정한 축소 함수를 적용합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:applyreductioninputoutputweightsfilterparameters:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:applyreductioninputoutputweightsfilterparameters:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:applyreductioninputoutputweightsfilterparameters:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:applyreductioninputoutputweightsfilterparameters:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:applyreductioninputoutputweightsfilterparameters:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:applyreductioninputoutputweightsfilterparameters:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:applyreductioninputoutputweightsfilterparameters:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:applyreductioninputoutputweightsfilterparameters:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static func applyReduction(_ reductionFunction: BNNS.ReductionFunction, input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, weights: BNNSNDArrayDescriptor?, filterParameters: BNNSFilterParameters? = nil) throws
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>reductionFunction</code>: 축소 함수를 지정하는 변수입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>input</code>: 입력의 디스크립터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0003"><code>output</code>: 출력의 디스크립터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0004"><code>weights</code>: 가중치의 디스크립터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0005"><code>filterParameters</code>: 필터 런타임 매개변수입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnns/reductionlayer.md">class ReductionLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">감산 함수 필터를 래핑하고 해제 처리를 관리하는 레이어 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnnsreducefunction.md">struct BNNSReduceFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">축소 함수를 설명하는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnnslayerparametersreduction.md">struct BNNSLayerParametersReduction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">축소 레이어를 정의하는 매개변수 집합입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnnsfiltercreatelayerreduction(_:_:">func BNNSFilterCreateLayerReduction(UnsafePointer&lt;BNNSLayerParametersReduction&gt;, UnsafePointer&lt;BNNSFilterParameters&gt;?) -&gt; BNNSFilter?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">새 축소 레이어를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="bnnsdirectapplyreduction(_:_:">func BNNSDirectApplyReduction(UnsafePointer&lt;BNNSLayerParametersReduction&gt;, UnsafePointer&lt;BNNSFilterParameters&gt;?) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">축소 연산을 입력 텐서에 직접 적용합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnns/applyreduction(_:input:output:weights:filterparameters:">Apple Developer에서 보기</a>)*</span>

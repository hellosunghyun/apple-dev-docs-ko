---
source_path: "documentation/Accelerate/bnnsreducefunction.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsreducefunction"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnsreducefunction:0000:0001">BNNSReduceFunction</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsreducefunction:0001:0001">**Framework**: Accelerate **Kind**: struct</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsreducefunction:0002:0001">축소 함수를 설명하는 상수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsreducefunction:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnsreducefunction:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsreducefunction:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsreducefunction:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsreducefunction:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsreducefunction:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsreducefunction:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsreducefunction:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
struct BNNSReduceFunction
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:reduction-functions:0008:0001">축소 함수</span>

- <span class="ko-segment" data-segment-id="seg:list:reduction-functions:0009:0001"><a href="bnnsreducefunction/init(_:">init(UInt32)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:reduction-functions:0009:0002"><a href="bnnsreducefunction/init(rawvalue:">init(rawValue: UInt32)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:reduction-functions:0009:0003"><a href="bnnsreducefunction/rawvalue.md">var rawValue: UInt32</a></span>
- <span class="ko-segment" data-segment-id="seg:list:reduction-functions:0009:0004"><a href="bnnsreducefunctionargmax.md">var BNNSReduceFunctionArgMax: BNNSReduceFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:reduction-functions:0010:0001">최대값의 인덱스를 계산하는 축소 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:reduction-functions:0011:0001"><a href="bnnsreducefunctionargmin.md">var BNNSReduceFunctionArgMin: BNNSReduceFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:reduction-functions:0012:0001">최소값의 인덱스를 계산하는 축소 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:reduction-functions:0013:0001"><a href="bnnsreducefunctionl1norm.md">var BNNSReduceFunctionL1Norm: BNNSReduceFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:reduction-functions:0014:0001">각 요소의 절댓값을 합산하는 축소 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:reduction-functions:0015:0001"><a href="bnnsreducefunctionlogicaland.md">var BNNSReduceFunctionLogicalAnd: BNNSReduceFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:reduction-functions:0016:0001">모든 요소가 <code>true</code>이면 텐서를 <code>true</code>로 축소하는 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:reduction-functions:0017:0001"><a href="bnnsreducefunctionall.md">var BNNSReduceFunctionAll: BNNSReduceFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:reduction-functions:0018:0001">논리 AND 축소 함수의 별칭입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:reduction-functions:0019:0001"><a href="bnnsreducefunctionlogicalor.md">var BNNSReduceFunctionLogicalOr: BNNSReduceFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:reduction-functions:0020:0001">요소 중 하나라도 <code>true</code>이면 텐서를 <code>true</code>로 축소하는 축소 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:reduction-functions:0021:0001"><a href="bnnsreducefunctionlogsum.md">var BNNSReduceFunctionLogSum: BNNSReduceFunction</a></span>
- <span class="ko-segment" data-segment-id="seg:list:reduction-functions:0021:0002"><a href="bnnsreducefunctionany.md">var BNNSReduceFunctionAny: BNNSReduceFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:reduction-functions:0022:0001">논리 OR 축소 함수의 별칭입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:reduction-functions:0023:0001"><a href="bnnsreducefunctionmax.md">var BNNSReduceFunctionMax: BNNSReduceFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:reduction-functions:0024:0001">최대값을 계산하는 축소 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:reduction-functions:0025:0001"><a href="bnnsreducefunctionmean.md">var BNNSReduceFunctionMean: BNNSReduceFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:reduction-functions:0026:0001">평균값을 계산하는 축소 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:reduction-functions:0027:0001"><a href="bnnsreducefunctionmeannonzero.md">var BNNSReduceFunctionMeanNonZero: BNNSReduceFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:reduction-functions:0028:0001">영(0)이 아닌 요소의 평균값을 계산하는 축소 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:reduction-functions:0029:0001"><a href="bnnsreducefunctionmin.md">var BNNSReduceFunctionMin: BNNSReduceFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:reduction-functions:0030:0001">최소값을 계산하는 축소 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:reduction-functions:0031:0001"><a href="bnnsreducefunctionsum.md">var BNNSReduceFunctionSum: BNNSReduceFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:reduction-functions:0032:0001">모든 값의 합을 계산하는 축소 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:reduction-functions:0033:0001"><a href="bnnsreducefunctionsumlog.md">var BNNSReduceFunctionSumLog: BNNSReduceFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:reduction-functions:0034:0001">모든 값의 자연 로그 합을 계산하는 축소 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:reduction-functions:0035:0001"><a href="bnnsreducefunctionsumsquare.md">var BNNSReduceFunctionSumSquare: BNNSReduceFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:reduction-functions:0036:0001">모든 값의 제곱을 합산하는 축소 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:reduction-functions:0037:0001"><a href="bnnsreducefunctionl2norm.md">var BNNSReduceFunctionL2Norm: BNNSReduceFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:reduction-functions:0038:0001">유클리드 노름을 계산하는 축소 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:reduction-functions:0039:0001"><a href="bnnsreducefunctionlogsumexp.md">var BNNSReduceFunctionLogSumExp: BNNSReduceFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:reduction-functions:0040:0001">각 요소의 지수 합의 로그를 계산하는 축소 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:reduction-functions:0041:0001"><a href="bnnsreducefunctionnone.md">var BNNSReduceFunctionNone: BNNSReduceFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:reduction-functions:0042:0001">입력을 출력으로 복사하는 축소 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:reduction-functions:0043:0001"><a href="bnnsreducefunctionproduct.md">var BNNSReduceFunctionProduct: BNNSReduceFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:reduction-functions:0044:0001">A reduction function that computes the product of all values.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0045:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0046:0001">Conforms To</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0047:0001"><a href="../Swift/BitwiseCopyable.md">BitwiseCopyable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0047:0002"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0047:0003"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0047:0004"><a href="../Swift/RawRepresentable.md">RawRepresentable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0047:0005"><a href="../Swift/Sendable.md">Sendable</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0048:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0049:0001"><a href="bnns/reductionlayer.md">class ReductionLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0050:0001">A layer object that wraps a reduction filter and manages its deinitialization.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0051:0001"><a href="bnns/applyreduction(_:input:output:weights:filterparameters:">static func applyReduction(BNNS.ReductionFunction, input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, weights: BNNSNDArrayDescriptor?, filterParameters: BNNSFilterParameters?) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0052:0001">Applies the specified reduction function.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0053:0001"><a href="bnnslayerparametersreduction.md">struct BNNSLayerParametersReduction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0054:0001">A set of parameters that define a reduction layer.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0055:0001"><a href="bnnsfiltercreatelayerreduction(_:_:">func BNNSFilterCreateLayerReduction(UnsafePointer&lt;BNNSLayerParametersReduction&gt;, UnsafePointer&lt;BNNSFilterParameters&gt;?) -&gt; BNNSFilter?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0056:0001">Returns a new reduction layer.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0057:0001"><a href="bnnsdirectapplyreduction(_:_:">func BNNSDirectApplyReduction(UnsafePointer&lt;BNNSLayerParametersReduction&gt;, UnsafePointer&lt;BNNSFilterParameters&gt;?) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0058:0001">Applies a reduction operation directly to an input tensor.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0060:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsreducefunction">View on Apple Developer</a>*</span>

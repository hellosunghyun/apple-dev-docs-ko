---
source_path: "documentation/Accelerate/bnnsreducefunctionsum.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsreducefunctionsum"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnsreducefunctionsum:0000:0001">BNNSReduceFunctionSum</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsreducefunctionsum:0001:0001">**Framework**: Accelerate **Kind**: var</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsreducefunctionsum:0002:0001">모든 값의 합계를 계산하는 축소 함수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsreducefunctionsum:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnsreducefunctionsum:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsreducefunctionsum:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsreducefunctionsum:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsreducefunctionsum:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsreducefunctionsum:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsreducefunctionsum:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsreducefunctionsum:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var BNNSReduceFunctionSum: BNNSReduceFunction { get }
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="bnnsreducefunction/init(_:">init(UInt32)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0002"><a href="bnnsreducefunction/init(rawvalue:">init(rawValue: UInt32)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0003"><a href="bnnsreducefunction/rawvalue.md">var rawValue: UInt32</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0004"><a href="bnnsreducefunctionargmax.md">var BNNSReduceFunctionArgMax: BNNSReduceFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">최대값의 인덱스를 계산하는 축소 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnnsreducefunctionargmin.md">var BNNSReduceFunctionArgMin: BNNSReduceFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">최소값의 인덱스를 계산하는 축소 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnnsreducefunctionl1norm.md">var BNNSReduceFunctionL1Norm: BNNSReduceFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">각 요소의 절댓값 합을 계산하는 축소 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnnsreducefunctionlogicaland.md">var BNNSReduceFunctionLogicalAnd: BNNSReduceFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">모든 요소가 true일 때 텐서를 true로 축소합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnnsreducefunctionall.md">var BNNSReduceFunctionAll: BNNSReduceFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">논리 AND 축소 함수의 별칭입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="bnnsreducefunctionlogicalor.md">var BNNSReduceFunctionLogicalOr: BNNSReduceFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">하나의 요소라도 true이면 텐서를 true로 축소하는 축소 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="bnnsreducefunctionlogsum.md">var BNNSReduceFunctionLogSum: BNNSReduceFunction</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0002"><a href="bnnsreducefunctionany.md">var BNNSReduceFunctionAny: BNNSReduceFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">논리 OR 축소 함수의 별칭입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="bnnsreducefunctionmax.md">var BNNSReduceFunctionMax: BNNSReduceFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">최대값을 계산하는 축소 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="bnnsreducefunctionmean.md">var BNNSReduceFunctionMean: BNNSReduceFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">평균값을 계산하는 축소 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="bnnsreducefunctionmeannonzero.md">var BNNSReduceFunctionMeanNonZero: BNNSReduceFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">0이 아닌 요소의 평균값을 계산하는 축소 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="bnnsreducefunctionmin.md">var BNNSReduceFunctionMin: BNNSReduceFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">최소값을 계산하는 축소 함수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsreducefunctionsum">View on Apple Developer</a>*</span>

---
source_path: "documentation/Accelerate/bnnsreducefunctionmin.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsreducefunctionmin"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnsreducefunctionmin:0000:0001">BNNSReduceFunctionMin</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsreducefunctionmin:0001:0001">**Framework**: Accelerate **Kind**: var</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsreducefunctionmin:0002:0001">A reduction function that computes the minimum value.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsreducefunctionmin:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnsreducefunctionmin:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsreducefunctionmin:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsreducefunctionmin:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsreducefunctionmin:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsreducefunctionmin:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsreducefunctionmin:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsreducefunctionmin:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var BNNSReduceFunctionMin: BNNSReduceFunction { get }
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="bnnsreducefunction/init(_:">init(UInt32)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0002"><a href="bnnsreducefunction/init(rawvalue:">init(rawValue: UInt32)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0003"><a href="bnnsreducefunction/rawvalue.md">var rawValue: UInt32</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0004"><a href="bnnsreducefunctionargmax.md">var BNNSReduceFunctionArgMax: BNNSReduceFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">A reduction function that computes the index of the maximum value.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnnsreducefunctionargmin.md">var BNNSReduceFunctionArgMin: BNNSReduceFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">중간 화질 동영상 파일을 내보내기 위한 프리셋입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnnsreducefunctionl1norm.md">var BNNSReduceFunctionL1Norm: BNNSReduceFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">고화질 동영상 파일을 내보내기 위한 프리셋입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnnsreducefunctionlogicaland.md">var BNNSReduceFunctionLogicalAnd: BNNSReduceFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">최고 사용 가능 비디오 품질과 HEVC 비디오 압축을 사용해 내보내는 프리셋입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnnsreducefunctionall.md">var BNNSReduceFunctionAll: BNNSReduceFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">최고 사용 가능 비디오 품질과 알파 채널이 포함된 HEVC 비디오 압축을 사용해 내보내는 프리셋입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="bnnsreducefunctionlogicalor.md">var BNNSReduceFunctionLogicalOr: BNNSReduceFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">A reduction function that reduces a tensor to true if any element is true.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="bnnsreducefunctionlogsum.md">var BNNSReduceFunctionLogSum: BNNSReduceFunction</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0002"><a href="bnnsreducefunctionany.md">var BNNSReduceFunctionAny: BNNSReduceFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">An alias of the logical OR reduction function.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="bnnsreducefunctionmax.md">var BNNSReduceFunctionMax: BNNSReduceFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">A reduction function that computes the maximum value.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="bnnsreducefunctionmean.md">var BNNSReduceFunctionMean: BNNSReduceFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">A reduction function that computes the mean value.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="bnnsreducefunctionmeannonzero.md">var BNNSReduceFunctionMeanNonZero: BNNSReduceFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">A reduction function that computes the mean value of nonzero elements.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="bnnsreducefunctionsum.md">var BNNSReduceFunctionSum: BNNSReduceFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">A reduction function that computes the sum of all values.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsreducefunctionmin">View on Apple Developer</a>*</span>

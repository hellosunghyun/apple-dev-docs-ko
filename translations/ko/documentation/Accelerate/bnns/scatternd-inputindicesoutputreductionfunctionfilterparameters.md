---
source_path: "documentation/Accelerate/bnns/scatternd-inputindicesoutputreductionfunctionfilterparameters.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnns/scatternd-inputindicesoutputreductionfunctionfilterparameters"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:scatterndinputindicesoutputreductionfunctionfilterparameters:0000:0001">scatterND(input:indices:output:reductionFunction:filterParameters:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:scatterndinputindicesoutputreductionfunctionfilterparameters:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:scatterndinputindicesoutputreductionfunctionfilterparameters:0002:0001">텐서의 슬라이스를 산포합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:scatterndinputindicesoutputreductionfunctionfilterparameters:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:scatterndinputindicesoutputreductionfunctionfilterparameters:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:scatterndinputindicesoutputreductionfunctionfilterparameters:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:scatterndinputindicesoutputreductionfunctionfilterparameters:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:scatterndinputindicesoutputreductionfunctionfilterparameters:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:scatterndinputindicesoutputreductionfunctionfilterparameters:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:scatterndinputindicesoutputreductionfunctionfilterparameters:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:scatterndinputindicesoutputreductionfunctionfilterparameters:0004:0007">watchOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static func scatterND(input: BNNSNDArrayDescriptor, indices: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, reductionFunction: BNNS.ReductionFunction, filterParameters: BNNSFilterParameters? = nil) throws
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>input</code>: The input descriptor.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>indices</code>: The indices descriptor.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0003"><code>output</code>: The output descriptor.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0004"><code>reductionFunction</code>: The reduction operation that the function uses to reduce existing output value with scattered value.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0005"><code>filterParameters</code>: The runtime filter parameters.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnnsscatternd(_:_:_:_:_:">func BNNSScatterND(BNNSReduceFunction, UnsafePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafePointer&lt;BNNSFilterParameters&gt;?) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">Scatters the slices of a tensor.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="calculating-the-dominant-colors-in-an-image.md">Calculating the dominant colors in an image</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">Find the main colors in an image by implementing k-means clustering using the Accelerate framework.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnns/gather(input:indices:output:axis:filterparameters:">static func gather(input: BNNSNDArrayDescriptor, indices: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, axis: Int, filterParameters: BNNSFilterParameters?) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">Gathers the elements of a tensor along a single axis.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnns/gathernd(input:indices:output:filterparameters:">static func gatherND(input: BNNSNDArrayDescriptor, indices: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, filterParameters: BNNSFilterParameters?) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">Gathers the slices of a tensor.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="bnns/scatter(input:indices:output:axis:reductionfunction:filterparameters:">static func scatter(input: BNNSNDArrayDescriptor, indices: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, axis: Int, reductionFunction: BNNS.ReductionFunction, filterParameters: BNNSFilterParameters?) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">Scatters the elements of a tensor along a single axis.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="bnnsgather(_:_:_:_:_:">func BNNSGather(Int, UnsafePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafePointer&lt;BNNSFilterParameters&gt;?) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">Gathers the elements of a tensor along a single axis.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="bnnsgathernd(_:_:_:_:">func BNNSGatherND(UnsafePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafePointer&lt;BNNSFilterParameters&gt;?) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">Gathers the slices of a tensor.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="bnnsscatter(_:_:_:_:_:_:">func BNNSScatter(Int, BNNSReduceFunction, UnsafePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafePointer&lt;BNNSFilterParameters&gt;?) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">Scatters the elements of a tensor along a single axis.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="bnnsscatternd(_:_:_:_:_:">func BNNSScatterND(BNNSReduceFunction, UnsafePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafePointer&lt;BNNSFilterParameters&gt;?) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">Scatters the slices of a tensor.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnns/scatternd(input:indices:output:reductionfunction:filterparameters:">View on Apple Developer</a>)*</span>

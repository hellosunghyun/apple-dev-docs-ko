---
source_path: "documentation/Accelerate/vdsp/divide-result-18qa3.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vdsp/divide-result-18qa3"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:divideresult:0000:0001">divide(_:_:result:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:divideresult:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:divideresult:0002:0001">Calculates the double-precision element-wise division of a scalar value and a vector.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:divideresult:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:divideresult:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:divideresult:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:divideresult:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:divideresult:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:divideresult:0004:0005">tvOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:divideresult:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:divideresult:0004:0007">watchOS 6.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static func divide<U, V>(_ scalar: Double, _ vector: U, result: inout V) where U : AccelerateBuffer, V : AccelerateMutableBuffer, U.Element == Double, V.Element == Double
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">This function calculates the element-wise division of scalar value <code>A</code> and vector <code>B</code>, and writes the result to vector <code>C</code>.</span>

```swift
 for (n = 0; n < N; ++n)
    C[n] = A / B[n];
```

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">![A diagram showing the operation of this function.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">There are three rows.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0003">The top row represents the scalar value A with one box, and the input vector B with three boxes.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0004">The middle row represents the operation as three boxes with division signs.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0005">The bottom row represents the output vector C as three boxes.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0006">The diagram has connecting lines from the input vectors to the operation, and from the operation to the output vector. ](https://docs-assets.developer.apple.com/published/de2d14d4b3697b21f34309aea77cecc1/media-4337221%402x.png)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">The following code shows an example of using this function:</span>

```swift
    let count = 5
    
    let a: Double = 100
    let b: [Double] = [1, 2, 3, 4, 5]
    
    let c = [Double](unsafeUninitializedCapacity: count) {
        buffer, initializedCount in
        
        vDSP.divide(a, b,
                    result: &buffer)
        
        initializedCount = count
    }
    
    // Prints "[100.0, 50.0, 33.33, 25.0, 20.0]".
    print(c)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0013:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0001"><code>scalar</code>: The input scalar value, <code>A</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0002"><code>vector</code>: The input vector, <code>B</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0003"><code>result</code>: The output vector, <code>C</code>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0015:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avvideocompositionlayerinstruction/opacityramp(at:">func opacityRamp(at: CMTime) -&gt; AVVideoCompositionLayerInstruction.OpacityRamp?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avportraiteffectsmatte/applyingexiforientation(_:">View on Apple Developer</a>)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001">[static func divide&lt;U&gt;(U, Double) -&gt; [Double]](vdsp/divide(_:_:)-9nb4j.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">지정된 시간을 포함하는 transform ramp를 가져옵니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001">[static func divide&lt;T, U&gt;(T, U) -&gt; [Double]](vdsp/divide(_:_:)-8swnm.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">지정된 시간을 포함하는 transform ramp를 가져옵니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001">[static func divide&lt;U&gt;(Float, U) -&gt; [Float]](vdsp/divide(_:_:)-70npt.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avvideocompositionlayerinstruction/getopacityramp(for:startopacity:endopacity:timerange:">View on Apple Developer</a>)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001">[static func divide&lt;U&gt;(U, Float) -&gt; [Float]](vdsp/divide(_:_:)-1uqmz.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">Calculates the single-precision element-wise division of a vector and a scalar value.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001">[static func divide&lt;T, U&gt;(T, U) -&gt; [Float]](vdsp/divide(_:_:)-6nfsi.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">Returns the single-precision element-wise division of two vectors.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="vdsp/divide(_:_:result:">static func divide&lt;U, V&gt;(Float, U, result: inout V)</a>-3emlk.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">Calculates the single-precision element-wise division of a scalar value and a vector.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="vdsp/divide(_:_:result:">static func divide&lt;U, V&gt;(U, Double, result: inout V)</a>-44mff.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">Calculates the double-precision element-wise division of a vector and a scalar value.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="vdsp/divide(_:_:result:">static func divide&lt;U, V&gt;(U, Float, result: inout V)</a>-5hwb2.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">Calculates the single-precision element-wise division of a vector and a scalar value.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="vdsp/divide(_:_:result:">static func divide&lt;T, U, V&gt;(T, U, result: inout V)</a>-6gtmm.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">Calculates the double-precision element-wise division of two vectors.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="vdsp/divide(_:_:result:">static func divide&lt;T, U, V&gt;(T, U, result: inout V)</a>-7ejy9.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">Calculates the single-precision element-wise division of two vectors.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="vdsp/divide(_:by:count:result:">static func divide(DSPSplitComplex, by: DSPSplitComplex, count: Int, result: inout DSPSplitComplex)</a>-9chz5.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">Calculates the single-precision element-wise division of a complex vector by a complex vector.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001"><a href="vdsp/divide(_:by:count:result:">static func divide(DSPDoubleSplitComplex, by: DSPDoubleSplitComplex, count: Int, result: inout DSPDoubleSplitComplex)</a>-57jlj.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">Calculates the double-precision element-wise division of a complex vector by a complex vector.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0042:0001"><a href="vdsp/divide(_:by:result:">static func divide&lt;U&gt;(DSPSplitComplex, by: U, result: inout DSPSplitComplex)</a>-66qch.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">Calculates the single-precision element-wise division of a complex vector by a real vector.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0044:0001"><a href="vdsp/divide(_:by:result:">static func divide&lt;U&gt;(DSPDoubleSplitComplex, by: U, result: inout DSPDoubleSplitComplex)</a>-402v9.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0045:0001">Calculates the double-precision element-wise division of a complex vector by a complex vector.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0047:0001">*<a href="https://developer.apple.com/documentation/accelerate/vdsp/divide(_:_:result:">View on Apple Developer</a>-18qa3)*</span>

---
source_path: "documentation/Accelerate/vdsp/multiply-9zgw.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vdsp/multiply-9zgw"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:multiply:0000:0001">multiply(_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:multiply:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:multiply:0002:0001">두 벡터의 단정밀도 요소별 곱을 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:multiply:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:multiply:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:multiply:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:multiply:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:multiply:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:multiply:0004:0005">tvOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:multiply:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:multiply:0004:0007">watchOS 6.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static func multiply<T, U>(_ vectorA: T, _ vectorB: U) -> [Float] where T : AccelerateBuffer, U : AccelerateBuffer, T.Element == Float, U.Element == Float
```

## <span class="ko-segment" data-segment-id="seg:heading:mentions:0007:0001">Mentions</span>

- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0001"><a href="using-vdsp-for-vector-based-arithmetic.md">Using vDSP for vector-based arithmetic</a></span>

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0009:0001">Return Value</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0010:0001">The output vector, <code>C</code>.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0011:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0001">This function calculates the products of the first <code>N</code> elements of input vectors <code>A</code> and <code>B</code>, and writes the result to output vector <code>C</code>.</span>

```swift
 for (n = 0; n < N; ++n)
    C[n] = A[n] * B[n];
```

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0014:0001">![A diagram showing the operation of this function.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0014:0002">There are three rows.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0014:0003">The top row represents the input vectors, A and B, with three boxes of each.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0014:0004">The middle row represents the operation as three boxes with multiplication signs.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0014:0005">The bottom row represents the output vector C as three boxes.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0014:0006">The diagram has connecting lines from the input vectors to the operation, and from the operation to the output vectors.](https://docs-assets.developer.apple.com/published/ce4f603e7be6e8f6eecd64f4d9546744/media-4336916%402x.png)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0015:0001">The following code shows an example of using this function:</span>

```swift
    let a: [Float] = [10, 20, 30, 40, 50]
    let b: [Float] = [ 1,  2,  3,  4,  5]
    
    let c = vDSP.multiply(a, b)
    
    // Prints "[10.0, 40.0, 90.0, 160.0, 250.0]".
    print(c)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0017:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0001"><code>vectorA</code>: The first input vector, <code>A</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0002"><code>vectorB</code>: The second input vector, <code>B</code>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0019:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001">[static func multiply&lt;U&gt;(Double, U) -&gt; [Double]](vdsp/multiply(_:_:)-9dxnc.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">플레이어 항목이 액세스 로그에 새 항목을 추가할 때 시스템이 게시하는 알림입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001">[static func multiply&lt;T, U&gt;(T, U) -&gt; [Double]](vdsp/multiply(_:_:)-1ckqt.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">플레이어 항목이 오류 로그에 새 항목을 추가할 때 시스템이 게시하는 알림입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001">[static func multiply&lt;U&gt;(Float, U) -&gt; [Float]](vdsp/multiply(_:_:)-993yp.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">Returns the single-precision element-wise product of a vector and a scalar value.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="vdsp/multiply(_:_:result:">static func multiply&lt;U, V&gt;(Double, U, result: inout V)</a>-4xorc.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">Calculates the double-precision element-wise product of a vector and a scalar value.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="vdsp/multiply(_:_:result:">static func multiply&lt;U, V&gt;(Float, U, result: inout V)</a>-358cn.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">Calculates the single-precision element-wise product of a vector and a scalar value.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="vdsp/multiply(_:_:result:">static func multiply&lt;T, U, V&gt;(T, U, result: inout V)</a>-3ptjl.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">Calculates the double-precision element-wise product of two vectors.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="vdsp/multiply(_:_:result:">static func multiply&lt;T, U, V&gt;(T, U, result: inout V)</a>-155f3.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">Calculates the single-precision element-wise product of two vectors.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="vdsp/multiply(_:by:count:useconjugate:result:">static func multiply(DSPSplitComplex, by: DSPSplitComplex, count: Int, useConjugate: Bool, result: inout DSPSplitComplex)</a>-4idx8.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">Calculates the product of two complex single-precision vectors, optionally conjugating one of them.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="vdsp/multiply(_:by:count:useconjugate:result:">static func multiply(DSPDoubleSplitComplex, by: DSPDoubleSplitComplex, count: Int, useConjugate: Bool, result: inout DSPDoubleSplitComplex)</a>-79r8u.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">Calculates the element-wise product of two complex double-precision vectors, optionally conjugating one of them.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="vdsp/multiply(_:by:result:">static func multiply&lt;U&gt;(DSPSplitComplex, by: U, result: inout DSPSplitComplex)</a>-8b9eq.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">Calculates the double-precision element-wise product of a complex vector and a real vector.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001"><a href="vdsp/multiply(_:by:result:">static func multiply&lt;U&gt;(DSPDoubleSplitComplex, by: U, result: inout DSPDoubleSplitComplex)</a>-8jyhd.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">Calculates the single-precision element-wise product of a complex vector and a real vector.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0042:0001">[static func multiply&lt;T, U&gt;(addition: (a: T, b: U), Double) -&gt; [Double]](vdsp/multiply(addition:_:)-4c9in.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">Returns the double-precision element-wise product of the sum of two vectors and a scalar value.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0044:0001">[static func multiply&lt;S, T, U&gt;(addition: (a: S, b: T), U) -&gt; [Double]](vdsp/multiply(addition:_:)-1wt61.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0045:0001">Returns the double-precision element-wise product of a vector and the sum of two vectors.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0046:0001">[static func multiply&lt;T, U&gt;(addition: (a: T, b: U), Float) -&gt; [Float]](vdsp/multiply(addition:_:)-4fnbx.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0047:0001">Returns the single-precision element-wise product of the sum of two vectors and a scalar value.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0048:0001">[static func multiply&lt;S, T, U&gt;(addition: (a: S, b: T), U) -&gt; [Float]](vdsp/multiply(addition:_:)-7t59.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0049:0001">Returns the single-precision element-wise product of a vector and the sum of two vectors.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0051:0001">*<a href="https://developer.apple.com/documentation/accelerate/vdsp/multiply(_:_:">View on Apple Developer</a>-9zgw)*</span>

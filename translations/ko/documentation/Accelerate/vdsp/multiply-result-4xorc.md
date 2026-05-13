---
source_path: "documentation/Accelerate/vdsp/multiply-result-4xorc.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vdsp/multiply-result-4xorc"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:multiplyresult:0000:0001">multiply(_:_:result:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:multiplyresult:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:multiplyresult:0002:0001">Calculates the double-precision element-wise product of a vector and a scalar value.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:multiplyresult:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:multiplyresult:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:multiplyresult:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:multiplyresult:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:multiplyresult:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:multiplyresult:0004:0005">tvOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:multiplyresult:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:multiplyresult:0004:0007">watchOS 6.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static func multiply<U, V>(_ scalar: Double, _ vector: U, result: inout V) where U : AccelerateBuffer, V : AccelerateMutableBuffer, U.Element == Double, V.Element == Double
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">This function calculates the element-wise product of vector <code>A</code> and scalar value <code>B</code>, and writes the result to vector <code>C</code>.</span>

```swift
 for (n = 0; n < N; ++n)
    C[n] = A[n] * B;
```

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">이 속성을 사용하여 transport bar에 사용자 지정 팝업 메뉴를 표시합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">이 속성은 <a href="https://developer.apple.com/documentation/UIKit/UIAction">@@TOKEN_0@@</a> 및 <a href="https://developer.apple.com/documentation/UIKit/UIMenu">@@TOKEN_1@@</a> 유형의 메뉴 요소만 지원하며, 한 단계 수준의 하위 메뉴를 인라인으로 표시합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0003">The top row represents the input vector A with three boxes, and the scalar value B with one box.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0004">The middle row represents the operation as three boxes with multiplication signs.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0005">The bottom row represents the output vector C as three boxes.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0006">The diagram has connecting lines from the input vectors to the operation, and from the operation to the output vector. ](https://docs-assets.developer.apple.com/published/4787aba10601f66e9f08edf2b66706cd/media-4337186%402x.png)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">The following code shows an example of using this function:</span>

```swift
    let count = 5
    
    let a: [Double] = [1, 2, 3, 4, 5]
    let b: Double = 10
    
    let c = [Double](unsafeUninitializedCapacity: count) {
        buffer, initializedCount in
        
        vDSP.multiply(b, a,
                      result: &buffer)
        
        initializedCount = count
    }
    
    // Prints "[10.0, 20.0, 30.0, 40.0, 50.0]".
    print(c)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0013:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0001"><code>scalar</code>: The input scalar value, <code>B</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0002"><code>vector</code>: The input vector, <code>A</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0003"><code>result</code>: The output vector, <code>C</code>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0015:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001">[static func multiply&lt;U&gt;(Double, U) -&gt; [Double]](vdsp/multiply(_:_:)-9dxnc.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">Returns the double-precision element-wise product of a vector and a scalar value.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001">[static func multiply&lt;T, U&gt;(T, U) -&gt; [Double]](vdsp/multiply(_:_:)-1ckqt.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">Returns the double-precision element-wise product of two vectors.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001">[static func multiply&lt;U&gt;(Float, U) -&gt; [Float]](vdsp/multiply(_:_:)-993yp.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">Returns the single-precision element-wise product of a vector and a scalar value.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001">[static func multiply&lt;T, U&gt;(T, U) -&gt; [Float]](vdsp/multiply(_:_:)-9zgw.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">Returns the single-precision element-wise product of two vectors.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="bnnsfusedfilterapplybackwardbatch(_:_:_:_:_:_:_:_:_:_:_:">func BNNSFusedFilterApplyBackwardBatch(BNNSFilter?, Int, UnsafeRawPointer?, Int, UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;?, Int, UnsafeRawPointer?, Int, UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;, Int, UnsafeMutablePointer&lt;UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;?&gt;?) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">입력 그래디언트를 생성하기 위해 multiple-input fused filter backward를 적용합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="vdsp/multiply(_:_:result:">static func multiply&lt;T, U, V&gt;(T, U, result: inout V)</a>-3ptjl.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsfusedfilterapplybackwardmultiinputbatch(_:_:_:_:_:_:_:_:_:_:_:_:">View on Apple Developer</a>)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="vdsp/multiply(_:_:result:">static func multiply&lt;T, U, V&gt;(T, U, result: inout V)</a>-155f3.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">기본 sigmoid 활성화를 사용하는 입력 게이트의 디스크립터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="vdsp/multiply(_:by:count:useconjugate:result:">static func multiply(DSPSplitComplex, by: DSPSplitComplex, count: Int, useConjugate: Bool, result: inout DSPSplitComplex)</a>-4idx8.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">기본 sigmoid 활성화를 사용하는 forget 게이트의 디스크립터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="vdsp/multiply(_:by:count:useconjugate:result:">static func multiply(DSPDoubleSplitComplex, by: DSPDoubleSplitComplex, count: Int, useConjugate: Bool, result: inout DSPDoubleSplitComplex)</a>-79r8u.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">기본 tanh 활성화를 사용하는 후보 게이트의 디스크립터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="vdsp/multiply(_:by:result:">static func multiply&lt;U&gt;(DSPSplitComplex, by: U, result: inout DSPSplitComplex)</a>-8b9eq.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">기본 sigmoid 활성화를 사용하는 출력 게이트의 디스크립터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="vdsp/multiply(_:by:result:">static func multiply&lt;U&gt;(DSPDoubleSplitComplex, by: U, result: inout DSPDoubleSplitComplex)</a>-8jyhd.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">기본 tanh 활성화를 사용하는 은닉 활성화 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001">[static func multiply&lt;T, U&gt;(addition: (a: T, b: U), Double) -&gt; [Double]](vdsp/multiply(addition:_:)-4c9in.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">Returns the double-precision element-wise product of the sum of two vectors and a scalar value.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001">[static func multiply&lt;S, T, U&gt;(addition: (a: S, b: T), U) -&gt; [Double]](vdsp/multiply(addition:_:)-1wt61.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">Returns the double-precision element-wise product of a vector and the sum of two vectors.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0042:0001">[static func multiply&lt;T, U&gt;(addition: (a: T, b: U), Float) -&gt; [Float]](vdsp/multiply(addition:_:)-4fnbx.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">Returns the single-precision element-wise product of the sum of two vectors and a scalar value.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0044:0001">[static func multiply&lt;S, T, U&gt;(addition: (a: S, b: T), U) -&gt; [Float]](vdsp/multiply(addition:_:)-7t59.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0045:0001">Returns the single-precision element-wise product of a vector and the sum of two vectors.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0047:0001">*<a href="https://developer.apple.com/documentation/accelerate/vdsp/multiply(_:_:result:">View on Apple Developer</a>-4xorc)*</span>

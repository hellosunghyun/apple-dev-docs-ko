---
source_path: "documentation/Accelerate/vdsp/add-multiplication-4e3tj.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vdsp/add-multiplication-4e3tj"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:addmultiplication:0000:0001">add(multiplication:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:addmultiplication:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:addmultiplication:0002:0001">Returns the double-precision element-wise addition of the product of a vector and a scalar value, and a vector.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:addmultiplication:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:addmultiplication:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:addmultiplication:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:addmultiplication:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:addmultiplication:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:addmultiplication:0004:0005">tvOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:addmultiplication:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:addmultiplication:0004:0007">watchOS 6.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static func add<U>(multiplication: (a: U, b: Double), _ scalar: Double) -> [Double] where U : AccelerateBuffer, U.Element == Double
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">Return Value</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">The output vector <code>D</code> in <code>D = (A * B) + C</code>.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">This function calculates the element-wise product of vector <code>A</code> and scalar value <code>B</code>, adds scalar value <code>C</code> to the product, and writes the result to vector <code>D</code>.</span>

```swift
 for (n = 0; n < N; ++n)
    D[n] = A[n] * B + C[n];
```

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0001">![A diagram showing the operation of this function.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0002">There are four rows.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0003">The top row represents the input vector A with three boxes, and the scalar value B with one box.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0004">The second row represents the operation that multiplies A and B, with three boxes, as well as the input vector C with three boxes.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0005">The third row represents the addition operation as three boxes.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0006">The bottom row represents the output vector D as three boxes.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0007">The diagram has connecting lines from the input vectors to the operations, and from the operations to the output vector. ](https://docs-assets.developer.apple.com/published/8acd6489f7a40f9981697d673e124e2d/media-4387652%402x.png)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0013:0001">The following code shows an example of using this function:</span>

```swift
    let a: [Double] = [ 1,  2,  3,  4,  5]
    let b: Double = 10
    let c: Double = 5
    
    let d = vDSP.add(multiplication: (a, b),
                     c)
    
    // Prints "[15.0, 25.0, 35.0, 45.0, 55.0]".
    print(d)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0015:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0016:0001"><code>multiplication</code>: A tuple that contains the vector <code>A</code> and the scalar value <code>B</code> in <code>D = (A * B) + C</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0016:0002"><code>scalar</code>: The input scalar value <code>C</code> in <code>D = (A * B) + C</code>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0017:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="bnnsndarraydescriptor/allocate(randomin:using:shape:batchsize:">static func allocate&lt;Scalar, Generator&gt;(randomIn: ClosedRange&lt;Scalar&gt;, using: inout Generator, shape: BNNS.Shape, batchSize: Int) -&gt; BNNSNDArrayDescriptor</a>-5kbi8.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">주어진 generator를 난수 소스로 사용해 지정된 범위 내에서 임의 값을 갖는 새 배열 디스크립터를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001">[static func add&lt;T, U&gt;(T, U) -&gt; [Double]](vdsp/add(_:_:)-2ftxc.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">Returns the double-precision element-wise sum of two vectors.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001">[static func add&lt;U&gt;(Float, U) -&gt; [Float]](vdsp/add(_:_:)-53nh9.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">Returns the single-precision element-wise sum of a vector and a scalar value.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001">[static func add&lt;T, U&gt;(T, U) -&gt; [Float]](vdsp/add(_:_:)-7swvf.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">Returns the single-precision element-wise sum of two vectors.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="vdsp/add(_:_:result:">static func add&lt;U, V&gt;(Double, U, result: inout V)</a>-2531u.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">이 n차원 배열 디스크립터에 이전에 할당된 메모리 블록을 해제합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="vdsp/add(_:_:result:">static func add&lt;U, V&gt;(Float, U, result: inout V)</a>-2w0o9.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsndarraydescriptor/allocate(randomin:shape:batchsize:">View on Apple Developer</a>-5a2p2)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="vdsp/add(_:_:result:">static func add&lt;T, U, V&gt;(T, U, result: inout V)</a>-338hl.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">Calculates the double-precision element-wise sum of two vectors.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="vdsp/add(_:_:result:">static func add&lt;T, U, V&gt;(T, U, result: inout V)</a>-3vzwi.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">Calculates the single-precision element-wise sum of two vectors.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="vdsp/add(_:to:count:result:">static func add(DSPSplitComplex, to: DSPSplitComplex, count: Int, result: inout DSPSplitComplex)</a>-g1dk.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">Calculates the single-precision element-wise sum of the supplied complex vectors.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="vdsp/add(_:to:count:result:">static func add(DSPDoubleSplitComplex, to: DSPDoubleSplitComplex, count: Int, result: inout DSPDoubleSplitComplex)</a>-75np9.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">Calculates the double-precision element-wise sum of the supplied complex vectors.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001">[static func add&lt;T, U&gt;(multiplication: (a: T, b: Double), U) -&gt; [Double]](vdsp/add(multiplication:_:)-1bsuq.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">Returns the double-precision element-wise addition of the product of a vector and a scalar value, and a vector.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001">[static func add&lt;T, U&gt;(multiplication: (a: T, b: U), Double) -&gt; [Double]](vdsp/add(multiplication:_:)-9dxlr.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">Returns the double-precision element-wise sum of the product of two vectors, and a scalar value.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0042:0001">[static func add&lt;S, T, U&gt;(multiplication: (a: S, b: T), U) -&gt; [Double]](vdsp/add(multiplication:_:)-4667v.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">Returns the double-precision element-wise sum of a vector and the product of two vectors.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0044:0001">[static func add&lt;U&gt;(multiplication: (a: U, b: Float), Float) -&gt; [Float]](vdsp/add(multiplication:_:)-3tw93.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0045:0001">Returns the single-precision element-wise addition of the product of a vector and a scalar value, and a vector.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0046:0001">[static func add&lt;T, U&gt;(multiplication: (a: T, b: Float), U) -&gt; [Float]](vdsp/add(multiplication:_:)-7aut1.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0047:0001">Returns the single-precision element-wise addition of the product of a vector and a scalar value, and a vector.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0049:0001">*<a href="https://developer.apple.com/documentation/accelerate/vdsp/add(multiplication:_:">View on Apple Developer</a>-4e3tj)*</span>

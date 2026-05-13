---
source_path: "documentation/Accelerate/vdsp/add-multiplication-9bgb2.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vdsp/add-multiplication-9bgb2"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:addmultiplication:0000:0001">add(multiplication:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:addmultiplication:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:addmultiplication:0002:0001">Returns the single-precision element-wise sum of a vector and the product of two vectors.</span>

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
static func add<S, T, U>(multiplication: (a: S, b: T), _ vector: U) -> [Float] where S : AccelerateBuffer, T : AccelerateBuffer, U : AccelerateBuffer, S.Element == Float, T.Element == Float, U.Element == Float
```

## <span class="ko-segment" data-segment-id="seg:heading:mentions:0007:0001">Mentions</span>

- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0001"><a href="using-vdsp-for-vector-based-arithmetic.md">Using vDSP for vector-based arithmetic</a></span>

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0009:0001">Return Value</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0010:0001">The output vector <code>D</code> in <code>D = (A * B) + C</code>.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0011:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0001">``<code>swift
 1.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0
 0.0,  2.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0
 0.0,  0.0,  3.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0
 0.0,  0.0,  0.0,  4.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0
 0.0,  0.0,  0.0,  0.0,  5.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0
 0.0,  0.0,  0.0,  0.0,  0.0,  6.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  7.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  8.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  9.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, 10.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, 11.0,  0.0,  0.0,  0.0,  0.0,  0.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, 12.0,  0.0,  0.0,  0.0,  0.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, 13.0,  0.0,  0.0,  0.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, 14.0,  0.0,  0.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, 15.0,  0.0
 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, 16.0
</code>``</span>

```swift
 for (n = 0; n < N; ++n)
    D[n] = (A[n] * B[n]) + C[n];
```

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0014:0001">동일한 값을 COO 형식으로는 비영(0이 아닌) 값 배열, 열 인덱스 배열, 행 인덱스 배열의 세 배열로 표현할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0014:0002">There are four rows.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0014:0003">The top row represents the input vectors, A and B, with three boxes of each.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0014:0004">The second row represents the operation that multiplies A and B, as well as the input vector C, with three boxes of each.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0014:0005">The third row represents the addition operation as three boxes.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0014:0006">The bottom row represents the output vector D as three boxes.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0014:0007">The diagram has connecting lines from the input vectors to the operations, and from the operations to the output vectors. ](https://docs-assets.developer.apple.com/published/ff9d5e0e42fb64a3d1e6c0c7b21a9b24/media-4336969%402x.png)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0015:0001">The following code shows an example of using this function:</span>

```swift
    let a: [Float] = [ 1,  2,  3,  4,  5]
    let b: [Float] = [10, 20, 30, 40, 50]
    let c: [Float] = [ 5,  4,  3,  2,  1]
    
    let d = vDSP.add(multiplication: (a, b),
                     c)
    
    // Prints "[15.0, 44.0, 93.0, 162.0, 251.0]".
    print(d)

```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0017:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0001"><code>multiplication</code>: A tuple that contains the vectors <code>A</code> and <code>B</code> in <code>D = (A * B) + C</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0002"><code>vector</code>: The input vector <code>C</code> in <code>D = (A * B) + C</code>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0019:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001">[static func add&lt;U&gt;(Double, U) -&gt; [Double]](vdsp/add(_:_:)-9mv1a.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">Returns the double-precision element-wise sum of a vector and a scalar value.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001">[static func add&lt;T, U&gt;(T, U) -&gt; [Double]](vdsp/add(_:_:)-2ftxc.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">Returns the double-precision element-wise sum of two vectors.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001">[static func add&lt;U&gt;(Float, U) -&gt; [Float]](vdsp/add(_:_:)-53nh9.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">Returns the single-precision element-wise sum of a vector and a scalar value.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="bnns/fullyconnectedlayer/sparsify(batchsize:inputlayout:inputdenseshape:inputvalues:output:sparseparameters:workspace:filterparameters:">static func sparsify(batchSize: Int, inputLayout: BNNS.SparseLayout, inputDenseShape: BNNSNDArrayDescriptor, inputValues: BNNSNDArrayDescriptor, output: inout BNNSNDArrayDescriptor, sparseParameters: BNNS.SparseParameters?, workspace: UnsafeMutableRawBufferPointer?, filterParameters: BNNSFilterParameters?) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">표준화된 희소 레이아웃의 희소 텐서를 Fully Connected가 사용하는 장치별 희소 레이아웃으로 변환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="vdsp/add(_:_:result:">static func add&lt;U, V&gt;(Double, U, result: inout V)</a>-2531u.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">sparsity 함수에 대한 힌트를 제공하는 데이터 구조입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="vdsp/add(_:_:result:">static func add&lt;U, V&gt;(Float, U, result: inout V)</a>-2w0o9.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">BNNS가 opaque로 변환할 수 있는 표준화된 희소 레이아웃을 지정하는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="vdsp/add(_:_:result:">static func add&lt;T, U, V&gt;(T, U, result: inout V)</a>-338hl.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">sparsity의 패턴을 지정하는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="vdsp/add(_:_:result:">static func add&lt;T, U, V&gt;(T, U, result: inout V)</a>-3vzwi.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">Calculates the single-precision element-wise sum of two vectors.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="vdsp/add(_:to:count:result:">static func add(DSPSplitComplex, to: DSPSplitComplex, count: Int, result: inout DSPSplitComplex)</a>-g1dk.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">Calculates the single-precision element-wise sum of the supplied complex vectors.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="vdsp/add(_:to:count:result:">static func add(DSPDoubleSplitComplex, to: DSPDoubleSplitComplex, count: Int, result: inout DSPDoubleSplitComplex)</a>-75np9.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">Calculates the double-precision element-wise sum of the supplied complex vectors.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001">[static func add&lt;U&gt;(multiplication: (a: U, b: Double), Double) -&gt; [Double]](vdsp/add(multiplication:_:)-4e3tj.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">Returns the double-precision element-wise addition of the product of a vector and a scalar value, and a vector.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0042:0001">[static func add&lt;T, U&gt;(multiplication: (a: T, b: Double), U) -&gt; [Double]](vdsp/add(multiplication:_:)-1bsuq.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">Returns the double-precision element-wise addition of the product of a vector and a scalar value, and a vector.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0044:0001">[static func add&lt;T, U&gt;(multiplication: (a: T, b: U), Double) -&gt; [Double]](vdsp/add(multiplication:_:)-9dxlr.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0045:0001">Returns the double-precision element-wise sum of the product of two vectors, and a scalar value.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0046:0001">[static func add&lt;S, T, U&gt;(multiplication: (a: S, b: T), U) -&gt; [Double]](vdsp/add(multiplication:_:)-4667v.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0047:0001">Returns the double-precision element-wise sum of a vector and the product of two vectors.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0048:0001">[static func add&lt;U&gt;(multiplication: (a: U, b: Float), Float) -&gt; [Float]](vdsp/add(multiplication:_:)-3tw93.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0049:0001">Returns the single-precision element-wise addition of the product of a vector and a scalar value, and a vector.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0051:0001">*<a href="https://developer.apple.com/documentation/accelerate/vdsp/add(multiplication:_:">View on Apple Developer</a>-9bgb2)*</span>

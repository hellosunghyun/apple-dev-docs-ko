---
source_path: "documentation/Accelerate/vdsp/add-result-338hl.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vdsp/add-result-338hl"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:addresult:0000:0001">add(_:_:result:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:addresult:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:addresult:0002:0001">두 벡터의 배정밀도 요소별 합을 계산합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:addresult:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:addresult:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:addresult:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:addresult:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:addresult:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:addresult:0004:0005">tvOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:addresult:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:addresult:0004:0007">watchOS 6.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static func add<T, U, V>(_ vectorA: T, _ vectorB: U, result: inout V) where T : AccelerateBuffer, U : AccelerateBuffer, V : AccelerateMutableBuffer, T.Element == Double, U.Element == Double, V.Element == Double
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 함수는 입력 벡터 <code>A</code>와 <code>B</code>의 처음 <code>N</code>개 요소를 더해 결과를 출력 벡터 <code>C</code>에 기록합니다.</span>

```swift
 for (n = 0; n < N; ++n)
    C[n] = A[n] + B[n];
```

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">![이 함수의 동작을 보여주는 다이어그램.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">행은 세 개입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0003">상단 행은 입력 벡터 A와 B를 각각 세 개의 상자로 표시합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0004">중간 행은 세 개의 상자와 더하기 기호로 연산을 나타냅니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0005">하단 행은 출력 벡터 C를 세 개의 상자로 표시합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0006">입력 벡터에서 연산으로, 그리고 연산에서 출력 벡터로 이어지는 연결선이 있습니다.](https://docs-assets.developer.apple.com/published/7621d1c03eb1cfdeb4f5b95abdf1baba/media-4389098%402x.png)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">다음 코드는 이 함수를 사용하는 예입니다:</span>

```swift
    let count = 5

    let a: [Double] = [ 1,  2,  3,  4,  5]
    let b: [Double] = [10, 20, 30, 40, 50]

    let c = [Double](unsafeUninitializedCapacity: count) {
        buffer, initializedCount in
        
        vDSP.add(a, b,
                 result: &buffer)
        
        initializedCount = count
    }
   
    // Prints "[11.0, 22.0, 33.0, 44.0, 55.0]".
    print(c)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0013:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0001"><code>vectorA</code>: 첫 번째 입력 벡터인 <code>A</code>입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0002"><code>vectorB</code>: 두 번째 입력 벡터인 <code>B</code>입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0003"><code>result</code>: 출력 벡터인 <code>C</code>입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0015:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001">[static func add&lt;U&gt;(Double, U) -&gt; [Double]](vdsp/add(_:_:)-9mv1a.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">벡터와 스칼라 값의 배정밀도 요소별 합을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001">[static func add&lt;T, U&gt;(T, U) -&gt; [Double]](vdsp/add(_:_:)-2ftxc.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">두 벡터의 배정밀도 요소별 합을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001">[static func add&lt;U&gt;(Float, U) -&gt; [Float]](vdsp/add(_:_:)-53nh9.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">벡터와 스칼라 값의 단정밀도 요소별 합을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001">[static func add&lt;T, U&gt;(T, U) -&gt; [Float]](vdsp/add(_:_:)-7swvf.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">두 벡터의 단정밀도 요소별 합을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="vdsp/add(_:_:result:">static func add&lt;U, V&gt;(Double, U, result: inout V)</a>-2531u.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">벡터와 스칼라 값의 단정밀도 요소별 합을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="vdsp/add(_:_:result:">static func add&lt;U, V&gt;(Float, U, result: inout V)</a>-2w0o9.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">벡터와 스칼라 값의 단정밀도 요소별 합을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="vdsp/add(_:_:result:">static func add&lt;T, U, V&gt;(T, U, result: inout V)</a>-3vzwi.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">두 벡터의 단정밀도 요소별 합을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="vdsp/add(_:to:count:result:">static func add(DSPSplitComplex, to: DSPSplitComplex, count: Int, result: inout DSPSplitComplex)</a>-g1dk.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">지정된 복소 벡터의 단정밀도 요소별 합을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="vdsp/add(_:to:count:result:">static func add&lt;DSPDoubleSplitComplex, to: DSPDoubleSplitComplex, count: Int, result: inout DSPDoubleSplitComplex&gt;</a>-75np9.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">지정된 복소 벡터의 배정밀도 요소별 합을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001">[static func add&lt;U&gt;(multiplication: (a: U, b: Double), Double) -&gt; [Double]](vdsp/add(multiplication:_:)-4e3tj.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">벡터와 스칼라 값의 곱셈 결과에 벡터를 더한 배정밀도 요소별 덧셈을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001">[static func add&lt;T, U&gt;(multiplication: (a: T, b: Double), U) -&gt; [Double]](vdsp/add(multiplication:_:)-1bsuq.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">벡터와 스칼라 값의 곱셈 결과에 벡터를 더한 배정밀도 요소별 덧셈을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001">[static func add&lt;T, U&gt;(multiplication: (a: T, b: U), Double) -&gt; [Double]](vdsp/add(multiplication:_:)-9dxlr.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">두 벡터의 곱셈 결과와 스칼라 값을 더한 배정밀도 요소별 합을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001">[static func add&lt;S, T, U&gt;(multiplication: (a: S, b: T), U) -&gt; [Double]](vdsp/add(multiplication:_:)-4667v.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">Returns the double-precision element-wise sum of a vector and the product of two vectors.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0042:0001">[static func add&lt;U&gt;(multiplication: (a: U, b: Float), Float) -&gt; [Float]](vdsp/add(multiplication:_:)-3tw93.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">Returns the single-precision element-wise addition of the product of a vector and a scalar value, and a vector.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0044:0001">[static func add&lt;T, U&gt;(multiplication: (a: T, b: Float), U) -&gt; [Float]](vdsp/add(multiplication:_:)-7aut1.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0045:0001">Returns the single-precision element-wise addition of the product of a vector and a scalar value, and a vector.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0047:0001">*<a href="https://developer.apple.com/documentation/accelerate/vdsp/add(_:_:result:">View on Apple Developer</a>-338hl)*</span>

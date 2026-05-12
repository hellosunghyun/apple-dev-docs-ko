---
source_path: "documentation/Accelerate/vdsp/add-multiplication-result-8dau.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vdsp/add-multiplication-result-8dau"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:addmultiplicationresult:0000:0001">add(multiplication:_:result:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:addmultiplicationresult:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:addmultiplicationresult:0002:0001">이 함수는 두 벡터의 곱셈 결과에 스칼라 값을 더한 다음 요소별 단정밀도 합을 계산합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:addmultiplicationresult:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:addmultiplicationresult:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:addmultiplicationresult:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:addmultiplicationresult:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:addmultiplicationresult:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:addmultiplicationresult:0004:0005">tvOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:addmultiplicationresult:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:addmultiplicationresult:0004:0007">watchOS 6.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static func add<T, U, V>(multiplication: (a: T, b: U), _ scalar: Float, result: inout V) where T : AccelerateBuffer, U : AccelerateBuffer, V : AccelerateMutableBuffer, T.Element == Float, U.Element == Float, V.Element == Float
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 함수는 벡터 <code>A</code>와 <code>B</code>의 요소별 곱을 계산하고, 스칼라 값 <code>C</code>를 곱셈 결과에 더한 후 결과를 벡터 <code>D</code>에 기록합니다.</span>

```swift
 for (n = 0; n < N; ++n)
    D[n] = A[n] * B[n] + C;
```

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">![이 함수의 동작을 보여주는 다이어그램입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">행이 네 개 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0003">첫 번째 행은 입력 벡터 <code>A</code>와 <code>B</code>를 나타내며 각각 세 개의 상자를 가집니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0004">두 번째 행은 <code>A</code>와 <code>B</code>를 곱하는 연산을 세 개의 상자로, 그리고 입력 스칼라 <code>C</code>를 한 개의 상자로 표시합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0005">세 번째 행은 덧셈 연산을 세 개의 상자로 나타냅니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0006">마지막 행은 출력 벡터 <code>D</code>를 세 개의 상자로 나타냅니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0007">이 다이어그램에는 입력 벡터에서 연산으로, 그리고 연산에서 출력 벡터로 연결되는 선이 표시됩니다. ](https://docs-assets.developer.apple.com/published/99bc516d97b0d8928cf6579a5da72c0f/media-4387441%402x.png)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">다음 코드는 이 함수를 사용하는 예입니다.</span>

```swift
    let count = 5
    
    let a: [Float] = [ 1,  2,  3,  4,  5]
    let b: [Float] = [10, 20, 30, 40, 50]
    let c: Float = 5
    
    let d = [Float](unsafeUninitializedCapacity: count) {
        buffer, initializedCount in
        
        vDSP.add(multiplication: (a, b),
                 c,
                 result: &buffer)
        
        initializedCount = count
    }
    
    // Prints "[15.0, 45.0, 95.0, 165.0, 255.0]".
    print(d)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0013:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0001"><code>multiplication</code>: <code>D = (A * B) + C</code>에서 벡터 <code>A</code>와 <code>B</code>를 포함하는 튜플입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0002"><code>scalar</code>: <code>D = (A * B) + C</code>의 입력 스칼라 값 <code>C</code>입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0003"><code>result</code>: <code>D = (A * B) + C</code>의 출력 벡터 <code>D</code>입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0015:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001">[static func add&lt;U&gt;(Double, U) -&gt; [Double]](vdsp/add(_:_:)-9mv1a.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">벡터와 스칼라 값의 요소별 배정밀도 합을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001">[static func add&lt;T, U&gt;(T, U) -&gt; [Double]](vdsp/add(_:_:)-2ftxc.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">두 벡터의 요소별 배정밀도 합을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001">[static func add&lt;U&gt;(Float, U) -&gt; [Float]](vdsp/add(_:_:)-53nh9.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">벡터와 스칼라 값의 요소별 단정밀도 합을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001">[static func add&lt;T, U&gt;(T, U) -&gt; [Float]](vdsp/add(_:_:)-7swvf.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">두 벡터의 요소별 단정밀도 합을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="vdsp/add(_:_:result:">static func add&lt;U, V&gt;(Double, U, result: inout V)</a>-2531u.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">벡터와 스칼라 값의 요소별 단정밀도 합을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="vdsp/add(_:_:result:">static func add&lt;U, V&gt;(Float, U, result: inout V)</a>-2w0o9.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">벡터와 스칼라 값의 요소별 단정밀도 합을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="vdsp/add(_:_:result:">static func add&lt;T, U, V&gt;(T, U, result: inout V)</a>-3vzwi.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">두 벡터의 배정밀도 요소별 합을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="vdsp/add(_:to:count:result:">static func add&lt;T, U, V&gt;(T, U, result: inout V)</a>-g1dk.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">두 벡터의 단정밀도 요소별 합을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="vdsp/add(_:to:count:result:">static func add(DSPSplitComplex, to: DSPSplitComplex, count: Int, result: inout DSPSplitComplex)</a>-75np9.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">지정된 복소 벡터의 단정밀도 요소별 합을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="vdsp/add(multiplication:_:">static func add&lt;DSPDoubleSplitComplex, to: DSPDoubleSplitComplex, count: Int, result: inout DSPDoubleSplitComplex&gt;</a>-4e3tj.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">지정된 복소 벡터의 배정밀도 요소별 합을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001">[static func add&lt;U&gt;(multiplication: (a: U, b: Double), Double) -&gt; [Double]](vdsp/add(multiplication:_:)-1bsuq.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">벡터와 스칼라 값의 곱셈 결과에 벡터를 더한 배정밀도 요소별 덧셈을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001">[static func add&lt;T, U&gt;(multiplication: (a: T, b: Double), U) -&gt; [Double]](vdsp/add(multiplication:_:)-9dxlr.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">벡터와 스칼라 값의 곱셈 결과에 벡터를 더한 배정밀도 요소별 덧셈을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001">[static func add&lt;T, U&gt;(multiplication: (a: T, b: U), Double) -&gt; [Double]](vdsp/add(multiplication:_:)-4667v.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">두 벡터의 곱셈 결과와 스칼라 값을 더한 배정밀도 요소별 합을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0042:0001">[static func add&lt;S, T, U&gt;(multiplication: (a: S, b: T), U) -&gt; [Double]](vdsp/add(multiplication:_:)-4667v.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">한 벡터와 두 벡터 곱의 배정밀도 요소별 합을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0044:0001">[static func add&lt;U&gt;(multiplication: (a: U, b: Float), Float) -&gt; [Float]](vdsp/add(multiplication:_:)-3tw93.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0045:0001">벡터와 스칼라 값의 곱셈 결과에 벡터를 더한 단정밀도 요소별 덧셈을 반환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0047:0001">*<a href="https://developer.apple.com/documentation/accelerate/vdsp/add(multiplication:_:result:">Apple Developer에서 보기</a>-8dau)*</span>

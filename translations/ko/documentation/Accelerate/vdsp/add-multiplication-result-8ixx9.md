---
source_path: "documentation/Accelerate/vdsp/add-multiplication-result-8ixx9.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vdsp/add-multiplication-result-8ixx9"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:addmultiplicationresult:0000:0001">add(multiplication:_:result:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:addmultiplicationresult:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:addmultiplicationresult:0002:0001">벡터와 스칼라 값의 곱에 스칼라를 더한 배정밀도 요소별 합을 계산합니다.</span>

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
static func add<U, V>(multiplication: (a: U, b: Double), _ scalar: Double, result: inout V) where U : AccelerateBuffer, V : AccelerateMutableBuffer, U.Element == Double, V.Element == Double
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 함수는 벡터 <code>A</code>와 스칼라 값 <code>B</code>의 요소별 곱을 계산하고, 스칼라 값 <code>C</code>를 곱셈 결과에 더해 결과를 벡터 <code>D</code>에 기록합니다.</span>

```swift
 for (n = 0; n < N; ++n)
    D[n] = A[n] * B + C;
```

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">![이 함수의 동작을 보여 주는 다이어그램입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">총 네 줄로 구성됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0003">상단 행은 요소가 세 개인 입력 벡터 <code>A</code>와 요소가 하나인 스칼라 값 <code>B</code>를 나타냅니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0004">두 번째 행은 <code>A</code>와 <code>B</code>를 곱하는 연산(요소 3개)과 입력 스칼라 값 <code>C</code>(요소 1개)를 나타냅니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0005">세 번째 행은 덧셈 연산을 세 개의 상자로 표시합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0006">하단 행은 요소가 세 개인 출력 벡터 <code>D</code>를 나타냅니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0007">이 다이어그램은 입력 벡터에서 연산으로, 연산에서 출력 벡터로 이어지는 연결선을 표시합니다. ](https://docs-assets.developer.apple.com/published/13938f885dd23b946104d2e77ffe3965/media-4387656%402x.png)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">다음 코드는 이 함수를 사용하는 예시입니다.</span>

```swift
    let count = 5
    
    let a: [Double] = [ 1,  2,  3,  4,  5]
    let b: Double = 10
    let c: Double = 5
    
    let d = [Double](unsafeUninitializedCapacity: count) {
        buffer, initializedCount in
        
        vDSP.add(multiplication: (a, b), 
                 c,
                 result: &buffer)
        
        initializedCount = count
    }
    
    // Prints "[15.0, 25.0, 35.0, 45.0, 55.0]".
    print(d)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0013:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0001"><code>multiplication</code>: <code>D = (A * B) + C</code> 식에서 벡터 <code>A</code>와 스칼라 값 <code>B</code>를 포함하는 튜플입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0002"><code>scalar</code>: <code>D = (A * B) + C</code> 식의 입력 스칼라 값 <code>C</code>입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0003"><code>result</code>: <code>D = (A * B) + C</code> 식의 출력 벡터 <code>D</code>입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0015:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001">[static func add&lt;U&gt;(Double, U) -&gt; [Double]](vdsp/add(_:_:)-9mv1a.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">배정밀도에서 벡터와 스칼라 값의 요소별 합을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001">[static func add&lt;T, U&gt;(T, U) -&gt; [Double]](vdsp/add(_:_:)-2ftxc.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">배정밀도에서 두 벡터의 요소별 합을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001">[static func add&lt;U&gt;(Float, U) -&gt; [Float]](vdsp/add(_:_:)-53nh9.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">단정밀도에서 벡터와 스칼라 값의 요소별 합을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001">[static func add&lt;T, U&gt;(T, U) -&gt; [Float]](vdsp/add(_:_:)-7swvf.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">단정밀도에서 두 벡터의 요소별 합을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="vdsp/add(_:_:result:">static func add&lt;U, V&gt;(Double, U, result: inout V)</a>-2531u.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">단정밀도에서 벡터와 스칼라 값의 요소별 합을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="vdsp/add(_:_:result:">static func add&lt;U, V&gt;(Float, U, result: inout V)</a>-2w0o9.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">단정밀도에서 벡터와 스칼라 값의 요소별 합을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="vdsp/add(_:_:result:">static func add&lt;T, U, V&gt;(T, U, result: inout V)</a>-338hl.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">배정밀도에서 두 벡터의 요소별 합을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="vdsp/add(_:_:result:">static func add&lt;T, U, V&gt;(T, U, result: inout V)</a>-3vzwi.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">단정밀도에서 두 벡터의 요소별 합을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="vdsp/add(_:to:count:result:">static func add(DSPSplitComplex, to: DSPSplitComplex, count: Int, result: inout DSPSplitComplex)</a>-g1dk.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">제공된 복소수 벡터의 단정밀도 요소별 합을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="vdsp/add(_:to:count:result:">static func add(DSPDoubleSplitComplex, to: DSPDoubleSplitComplex, count: Int, result: inout DSPDoubleSplitComplex)</a>-75np9.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">제공된 복소수 벡터의 배정밀도 요소별 합을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001">[static func add&lt;U&gt;(multiplication: (a: U, b: Double), Double) -&gt; [Double]](vdsp/add(multiplication:_:)-4e3tj.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">벡터와 스칼라 값의 곱과 벡터를 요소별로 더한 배정밀도 결과를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001">[static func add&lt;T, U&gt;(multiplication: (a: T, b: Double), U) -&gt; [Double]](vdsp/add(multiplication:_:)-1bsuq.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">벡터와 스칼라 값의 곱과 벡터를 요소별로 더한 배정밀도 결과를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001">[static func add&lt;T, U&gt;(multiplication: (a: T, b: U), Double) -&gt; [Double]](vdsp/add(multiplication:_:)-9dxlr.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">두 벡터의 곱과 스칼라 값의 요소별 합을 배정밀도로 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0042:0001">[static func add&lt;S, T, U&gt;(multiplication: (a: S, b: T), U) -&gt; [Double]](vdsp/add(multiplication:_:)-4667v.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">벡터와 두 벡터 곱의 요소별 합을 배정밀도로 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0044:0001">[static func add&lt;U&gt;(multiplication: (a: U, b: Float), Float) -&gt; [Float]](vdsp/add(multiplication:_:)-3tw93.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0045:0001">벡터와 스칼라 값의 곱과 벡터의 요소별 합을 단정밀도로 반환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0047:0001">*<a href="https://developer.apple.com/documentation/accelerate/vdsp/add(multiplication:_:result:">View on Apple Developer</a>-8ixx9)*</span>

---
source_path: "documentation/Accelerate/vdsp/subtract-multiplicationmultiplication-1ghyu.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vdsp/subtract-multiplicationmultiplication-1ghyu"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:subtractmultiplicationmultiplication:0000:0001">subtract(multiplication:multiplication:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:subtractmultiplicationmultiplication:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:subtractmultiplicationmultiplication:0002:0001">이 함수는 두 벡터 쌍의 원소별 곱 결과 차이를 단정밀도로 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:subtractmultiplicationmultiplication:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:subtractmultiplicationmultiplication:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:subtractmultiplicationmultiplication:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:subtractmultiplicationmultiplication:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:subtractmultiplicationmultiplication:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:subtractmultiplicationmultiplication:0004:0005">tvOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:subtractmultiplicationmultiplication:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:subtractmultiplicationmultiplication:0004:0007">watchOS 6.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static func subtract<R, S, T, U>(multiplication multiplicationAB: (a: T, b: U), multiplication multiplicationCD: (c: R, d: S)) -> [Float] where R : AccelerateBuffer, S : AccelerateBuffer, T : AccelerateBuffer, U : AccelerateBuffer, R.Element == Float, S.Element == Float, T.Element == Float, U.Element == Float
```

## <span class="ko-segment" data-segment-id="seg:heading:mentions:0007:0001">Mentions</span>

- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0001"><a href="using-vdsp-for-vector-based-arithmetic.md">벡터 기반 산술에 vDSP 사용</a></span>

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0009:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0010:0001">수식 <code>E = (A * B) - (C * D)</code>에서 출력 벡터는 <code>E</code>입니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0011:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0001">이 함수는 벡터 <code>A</code>와 <code>B</code>의 곱셈 결과와 벡터 <code>C</code>와 <code>D</code>의 곱셈 결과의 첫 <code>N</code>개 원소 차이를 계산합니다.</span>

```swift
 for (n = 0; n < N; ++n)
    E[n] = A[n]*B[n] - C[n]*D[n]; 
```

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0014:0001">![이 함수의 동작을 보여 주는 다이어그램.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0014:0002">네 개의 행이 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0014:0003">첫 번째 행은 입력 벡터 <code>A</code>, <code>B</code>, <code>C</code>, <code>D</code>를 각각 세 개의 상자로 나타냅니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0014:0004">두 번째 행은 벡터 <code>A</code>와 <code>B</code>의 곱셈 연산, 그리고 벡터 <code>C</code>와 <code>D</code>의 곱셈 연산을 각각 세 개의 상자로 나타냅니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0014:0005">세 번째 행은 뺄셈 연산을 세 개의 상자로 나타냅니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0014:0006">마지막 행은 출력 벡터 <code>E</code>를 세 개의 상자로 나타냅니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0014:0007">이 다이어그램에는 입력 벡터에서 연산으로, 그리고 연산에서 출력 벡터로 이어지는 연결선이 있습니다.](https://docs-assets.developer.apple.com/published/39d89329286f14952e7b03fb1b3f22de/media-4337028%402x.png)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0015:0001">다음 코드는 이 함수를 사용하는 예를 보여 줍니다.</span>

```swift
    let a: [Float] = [ 1,  2,  3,  4,  5]
    let b: [Float] = [10, 20, 30, 40, 50]
    let c: [Float] = [ 5,  4,  3,  2,  1]
    let d: [Float] = [50, 40, 30, 20, 10]
    
    let e = vDSP.subtract(multiplication: (a, b),
                          multiplication: (c, d))
    
    // Prints "[-240.0, -120.0, 0.0, 120.0, 240.0]".
    print(e)

```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0017:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0001"><code>multiplicationAB</code>: 수식 <code>E = (A * B) - (C * D)</code>에서 벡터 <code>A</code>와 <code>B</code>를 포함하는 튜플입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0002"><code>multiplicationCD</code>: 수식 <code>E = (A * B) - (C * D)</code>에서 벡터 <code>C</code>와 <code>D</code>를 포함하는 튜플입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0019:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001">[static func subtract&lt;T, U&gt;(U, T) -&gt; [Double]](vdsp/subtract(_:_:)-8o5ai.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">두 벡터의 배정밀도 원소별 뺄셈 결과를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001">[static func subtract&lt;T, U&gt;(U, T) -&gt; [Float]](vdsp/subtract(_:_:)-9xmo8.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">두 벡터의 단정밀도 원소별 뺄셈 결과를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="vdsp/subtract(_:_:result:">static func subtract&lt;T, U, V&gt;(U, T, result: inout V)</a>-1ianx.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">두 벡터의 배정밀도 원소별 뺄셈을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="vdsp/subtract(_:_:result:">static func subtract&lt;T, U, V&gt;(U, T, result: inout V)</a>-2p3fa.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">두 벡터의 단정밀도 원소별 뺄셈을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="vdsp/subtract(_:from:count:result:">static func subtract(DSPSplitComplex, from: DSPSplitComplex, count: Int, result: inout DSPSplitComplex)</a>-4p5xd.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">복소 벡터에서 복소 벡터를 단정밀도 원소별로 뺍니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="vdsp/subtract(_:from:count:result:">static func subtract(DSPDoubleSplitComplex, from: DSPDoubleSplitComplex, count: Int, result: inout DSPDoubleSplitComplex)</a>-80zi9.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">복소 벡터에서 복소 벡터를 배정밀도 원소별로 뺍니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001">[static func subtract&lt;T, U&gt;(multiplication: (a: U, b: Double), T) -&gt; [Double]](vdsp/subtract(multiplication:_:)-2hhme.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">벡터와 스칼라 값의 곱과 벡터의 배정밀도 원소별 차이를 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001">[static func subtract&lt;S, T, U&gt;(multiplication: (a: T, b: U), S) -&gt; [Double]](vdsp/subtract(multiplication:_:)-9gphg.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">한 벡터와 두 벡터 곱의 배정밀도 원소별 차를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001">[static func subtract&lt;T, U&gt;(multiplication: (a: U, b: Float), T) -&gt; [Float]](vdsp/subtract(multiplication:_:)-3zm6l.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">벡터와 스칼라 값의 곱과 벡터의 단정밀도 원소별 차이를 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001">[static func subtract&lt;S, T, U&gt;(multiplication: (a: T, b: U), S) -&gt; [Float]](vdsp/subtract(multiplication:_:)-6u3sp.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">한 벡터와 두 벡터 곱의 단정밀도 원소별 차를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001"><a href="vdsp/subtract(multiplication:_:result:">static func subtract&lt;T, U, V&gt;(multiplication: (a: U, b: Double), T, result: inout V)</a>-9p12h.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">벡터와 스칼라 값의 곱과 벡터의 배정밀도 원소별 차이를 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0042:0001"><a href="vdsp/subtract(multiplication:_:result:">static func subtract&lt;T, U, V&gt;(multiplication: (a: U, b: Float), T, result: inout V)</a>-86gx3.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">벡터와 스칼라 값의 곱과 벡터의 단정밀도 원소별 차이를 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0044:0001"><a href="vdsp/subtract(multiplication:_:result:">static func subtract&lt;S, T, U, V&gt;(multiplication: (a: T, b: U), S, result: inout V)</a>-3f2bw.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0045:0001">배정밀도 값 벡터와 두 벡터의 곱의 원소별 차이를 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0046:0001"><a href="vdsp/subtract(multiplication:_:result:">static func subtract&lt;S, T, U, V&gt;(multiplication: (a: T, b: U), S, result: inout V)</a>-6b91s.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0047:0001">단정밀도 값 벡터와 두 벡터의 곱의 원소별 차이를 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0048:0001">[static func subtract&lt;R, S, T, U&gt;(multiplication: (a: T, b: U), multiplication: (c: R, d: S)) -&gt; [Double]](vdsp/subtract(multiplication:multiplication:)-22a4b.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0049:0001">두 쌍의 벡터 곱셈 결과에 대한 원소별 차이를 배정밀도로 반환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0051:0001">*<a href="https://developer.apple.com/documentation/accelerate/vdsp/subtract(multiplication:multiplication:">Apple Developer에서 보기</a>-1ghyu)*</span>

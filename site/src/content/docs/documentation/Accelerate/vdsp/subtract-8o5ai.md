---
source_path: "documentation/Accelerate/vdsp/subtract-8o5ai.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vdsp/subtract-8o5ai"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:subtract:0000:0001">subtract(_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:subtract:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:subtract:0002:0001">두 벡터의 배정밀도 요소별 뺄셈을 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:subtract:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:subtract:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:subtract:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:subtract:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:subtract:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:subtract:0004:0005">tvOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:subtract:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:subtract:0004:0007">watchOS 6.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static func subtract<T, U>(_ vectorA: U, _ vectorB: T) -> [Double] where T : AccelerateBuffer, U : AccelerateBuffer, T.Element == Double, U.Element == Double
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">출력 벡터는 <code>C</code>입니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">이 함수는 입력 벡터 <code>A</code>와 <code>B</code>의 처음 <code>N</code>개 요소 차이를 계산하여 출력 벡터 <code>C</code>에 기록합니다.</span>

```swift
 for (n = 0; n < N; ++n)
    C[n] = A[n] - B[n];
```

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0001">![이 함수의 동작을 보여주는 다이어그램입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0002">세 개의 행이 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0003">위쪽 행은 입력 벡터 A와 B를 각각 세 개의 박스로 나타냅니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0004">중간 행은 빼기 기호가 있는 세 개의 박스로 연산을 나타냅니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0005">아래 행은 출력 벡터 C를 세 개의 박스로 나타냅니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0006">입력 벡터에서 연산으로, 그리고 연산에서 출력 벡터로 연결되는 선이 있는 도식입니다.](https://docs-assets.developer.apple.com/published/b6392409a61e2886a212bf90df89b30c/media-4336885%402x.png)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0013:0001">다음 코드는 이 함수를 사용하는 예를 보여줍니다.</span>

```swift
    let a: [Double] = [10, 20, 30, 40, 50]
    let b: [Double] = [ 1,  2,  3,  4,  5]

    let c = vDSP.subtract(a, b)
   
    // Prints "[9.0, 18.0, 27.0, 36.0, 45.0]".
    print(c)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0015:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0016:0001"><code>vectorA</code>: 첫 번째 입력 벡터 <code>A</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0016:0002"><code>vectorB</code>: 두 번째 입력 벡터 <code>B</code>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0017:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001">[static func subtract&lt;T, U&gt;(U, T) -&gt; [Float]](vdsp/subtract(_:_:)-9xmo8.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">두 벡터의 단정밀도 요소별 뺄셈을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="vdsp/subtract(_:_:result:">static func subtract&lt;T, U, V&gt;(U, T, result: inout V)</a>-1ianx.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">두 벡터의 배정밀도 요소별 뺄셈을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="vdsp/subtract(_:_:result:">static func subtract&lt;T, U, V&gt;(U, T, result: inout V)</a>-2p3fa.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">복소수 벡터에서 복소수 벡터의 단정밀도 요소별 뺄셈을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="vdsp/subtract(_:from:count:result:">static func subtract(DSPSplitComplex, from: DSPSplitComplex, count: Int, result: inout DSPSplitComplex)</a>-4p5xd.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">복소수 벡터에서 복소수 벡터의 배정밀도 요소별 뺄셈을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="vdsp/subtract(_:from:count:result:">static func subtract(DSPDoubleSplitComplex, from: DSPDoubleSplitComplex, count: Int, result: inout DSPDoubleSplitComplex)</a>-80zi9.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">복소수 벡터에서 복소수 벡터의 배정밀도 요소별 뺄셈을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001">[static func subtract&lt;T, U&gt;(multiplication: (a: U, b: Double), T) -&gt; [Double]](vdsp/subtract(multiplication:_:)-2hhme.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">벡터와 스칼라 값의 곱과 벡터의 배정밀도 요소별 차이를 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001">[static func subtract&lt;S, T, U&gt;(multiplication: (a: T, b: U), S) -&gt; [Double]](vdsp/subtract(multiplication:_:)-9gphg.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">벡터와 두 벡터 곱의 배정밀도 요소별 차이를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001">[static func subtract&lt;T, U&gt;(multiplication: (a: U, b: Float), T) -&gt; [Float]](vdsp/subtract(multiplication:_:)-3zm6l.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">벡터와 스칼라 값의 곱과 벡터의 단정밀도 요소별 차이를 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001">[static func subtract&lt;S, T, U&gt;(multiplication: (a: T, b: U), S) -&gt; [Float]](vdsp/subtract(multiplication:_:)-6u3sp.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">벡터와 두 벡터 곱의 단정밀도 요소별 차이를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="vdsp/subtract(multiplication:_:result:">static func subtract&lt;T, U, V&gt;(multiplication: (a: U, b: Double), T, result: inout V)</a>-9p12h.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">벡터와 스칼라 값의 곱과 벡터의 배정밀도 요소별 차이를 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="vdsp/subtract(multiplication:_:result:">static func subtract&lt;T, U, V&gt;(multiplication: (a: U, b: Float), T, result: inout V)</a>-86gx3.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">벡터와 스칼라 값의 곱과 벡터의 단정밀도 요소별 차이를 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001"><a href="vdsp/subtract(multiplication:_:result:">static func subtract&lt;S, T, U, V&gt;(multiplication: (a: T, b: U), S, result: inout V)</a>-3f2bw.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">벡터와 두 벡터 곱의 배정밀도 요소별 차이를 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0042:0001"><a href="vdsp/subtract(multiplication:_:result:">static func subtract&lt;S, T, U, V&gt;(multiplication: (a: T, b: U), S, result: inout V)</a>-6b91s.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">벡터와 두 벡터 곱의 단정밀도 요소별 차이를 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0044:0001">[static func subtract&lt;R, S, T, U&gt;(multiplication: (a: T, b: U), multiplication: (c: R, d: S)) -&gt; [Double]](vdsp/subtract(multiplication:multiplication:)-22a4b.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0045:0001">두 쌍의 벡터 곱 결과의 배정밀도 요소별 차이를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0046:0001">[static func subtract&lt;R, S, T, U&gt;(multiplication: (a: T, b: U), multiplication: (c: R, d: S)) -&gt; [Float]](vdsp/subtract(multiplication:multiplication:)-1ghyu.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0047:0001">두 쌍의 벡터 곱 결과의 단정밀도 요소별 차이를 반환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0049:0001">*<a href="https://developer.apple.com/documentation/accelerate/vdsp/subtract(_:_:">View on Apple Developer</a>-8o5ai)*</span>

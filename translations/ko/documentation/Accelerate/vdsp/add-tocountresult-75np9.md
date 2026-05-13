---
source_path: "documentation/Accelerate/vdsp/add-tocountresult-75np9.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vdsp/add-tocountresult-75np9"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:addtocountresult:0000:0001">add(_:to:count:result:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:addtocountresult:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:addtocountresult:0002:0001">제공된 복소수 벡터의 각 요소별 배정도 합을 계산합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:addtocountresult:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:addtocountresult:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:addtocountresult:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:addtocountresult:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:addtocountresult:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:addtocountresult:0004:0005">tvOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:addtocountresult:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:addtocountresult:0004:0007">watchOS 6.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static func add(_ splitComplexA: DSPDoubleSplitComplex, to splitComplexB: DSPDoubleSplitComplex, count: Int, result: inout DSPDoubleSplitComplex)
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001">[static func add&lt;U&gt;(Double, U) -&gt; [Double]](vdsp/add(_:_:)-9mv1a.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">벡터와 스칼라 값의 각 요소별 배정도 합을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001">[static func add&lt;T, U&gt;(T, U) -&gt; [Double]](vdsp/add(_:_:)-2ftxc.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">두 벡터의 각 요소별 배정도 합을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001">[static func add&lt;U&gt;(Float, U) -&gt; [Float]](vdsp/add(_:_:)-53nh9.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">벡터와 스칼라 값의 각 요소별 단정도 합을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001">[static func add&lt;T, U&gt;(T, U) -&gt; [Float]](vdsp/add(_:_:)-7swvf.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">두 벡터의 각 요소별 단정도 합을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="vdsp/add(_:_:result:">static func add&lt;U, V&gt;(Double, U, result: inout V)</a>-2531u.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">벡터와 스칼라 값의 각 요소별 단정도 합을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="vdsp/add(_:_:result:">static func add&lt;U, V&gt;(Float, U, result: inout V)</a>-2w0o9.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">벡터와 스칼라 값의 각 요소별 단정도 합을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="vdsp/add(_:_:result:">static func add&lt;T, U, V&gt;(T, U, result: inout V)</a>-338hl.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">두 벡터의 각 요소별 배정도 합을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="vdsp/add(_:_:result:">static func add&lt;T, U, V&gt;(T, U, result: inout V)</a>-3vzwi.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">두 벡터의 각 요소별 단정도 합을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="vdsp/add(_:to:count:result:">static func add(DSPSplitComplex, to: DSPSplitComplex, count: Int, result: inout DSPSplitComplex)</a>-g1dk.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">주어진 복소수 벡터의 각 요소별 단정도 합을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001">[static func add&lt;U&gt;(multiplication: (a: U, b: Double), Double) -&gt; [Double]](vdsp/add(multiplication:_:)-4e3tj.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">벡터와 스칼라 값의 곱과 벡터를 요소별로 배정도 덧셈한 값을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001">[static func add&lt;T, U&gt;(multiplication: (a: T, b: Double), U) -&gt; [Double]](vdsp/add(multiplication:_:)-1bsuq.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">벡터와 스칼라 값의 곱과 벡터를 요소별로 배정도 덧셈한 값을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001">[static func add&lt;T, U&gt;(multiplication: (a: T, b: U), Double) -&gt; [Double]](vdsp/add(multiplication:_:)-9dxlr.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">두 벡터의 곱과 스칼라 값의 각 요소별 배정도 합을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001">[static func add&lt;S, T, U&gt;(multiplication: (a: S, b: T), U) -&gt; [Double]](vdsp/add(multiplication:_:)-4667v.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">벡터와 두 벡터의 곱의 각 요소별 배정도 합을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001">[static func add&lt;U&gt;(multiplication: (a: U, b: Float), Float) -&gt; [Float]](vdsp/add(multiplication:_:)-3tw93.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">벡터와 스칼라 값의 곱과 벡터를 요소별로 단정도 덧셈한 값을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001">[static func add&lt;T, U&gt;(multiplication: (a: T, b: Float), U) -&gt; [Float]](vdsp/add(multiplication:_:)-7aut1.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">벡터와 스칼라 값의 곱과 벡터를 요소별로 단정도 덧셈한 값을 반환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">*<a href="https://developer.apple.com/documentation/accelerate/vdsp/add(_:to:count:result:">Apple Developer에서 보기</a>-75np9)*</span>

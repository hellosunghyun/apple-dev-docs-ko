---
source_path: "documentation/Accelerate/vdsp/convertelements-ofto-3jcmt.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vdsp/convertelements-ofto-3jcmt"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:convertelementsofto:0000:0001">convertElements(of:to:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:convertelementsofto:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:convertelementsofto:0002:0001">8비트 부호 있는 정수를 배정밀도 값으로 변환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:convertelementsofto:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:convertelementsofto:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:convertelementsofto:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:convertelementsofto:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:convertelementsofto:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:convertelementsofto:0004:0005">tvOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:convertelementsofto:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:convertelementsofto:0004:0007">watchOS 6.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static func convertElements<U, V>(of source: U, to destination: inout V) where U : AccelerateBuffer, V : AccelerateMutableBuffer, U.Element == Int8, V.Element == Double
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>source</code>: 원본 벡터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>destination</code>: 출력에서 원본 값이 배정밀도 값으로 변환됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001">[static func absolute&lt;U&gt;(U) -&gt; [Double]](vdsp/absolute(_:)-9c3ge.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">제공된 배정밀도 벡터의 각 요소에 대한 절대값을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001">[static func absolute&lt;U&gt;(U) -&gt; [Float]](vdsp/absolute(_:)-5ehc1.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">제공된 단일 정밀도 벡터의 각 요소에 대한 절대값을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="vdsp/absolute(_:result:">static func absolute&lt;V&gt;(DSPSplitComplex, result: inout V)</a>-9x5jn.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">제공된 단일 정밀도 복소수 벡터의 각 요소에 대한 절대값을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="vdsp/absolute(_:result:">static func absolute&lt;V&gt;(DSPDoubleSplitComplex, result: inout V)</a>-1wu9x.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">제공된 배정밀도 복소수 벡터의 각 요소에 대한 절대값을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="vdsp/absolute(_:result:">static func absolute&lt;U, V&gt;(U, result: inout V)</a>-657bd.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">제공된 배정밀도 벡터의 각 요소에 대한 절대값을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="vdsp/absolute(_:result:">static func absolute&lt;U, V&gt;(U, result: inout V)</a>-4pigo.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">제공된 단일 정밀도 벡터의 각 요소에 대한 절대값을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001">[static func add&lt;U&gt;(Double, U) -&gt; [Double]](vdsp/add(_:_:)-9mv1a.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">배정밀도 벡터와 스칼라 값의 요소별 합을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001">[static func add&lt;T, U&gt;(T, U) -&gt; [Double]](vdsp/add(_:_:)-2ftxc.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">두 벡터의 배정밀도 요소별 합을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001">[static func add&lt;U&gt;(Float, U) -&gt; [Float]](vdsp/add(_:_:)-53nh9.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">단일 정밀도 벡터와 스칼라 값의 요소별 합을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001">[static func add&lt;T, U&gt;(T, U) -&gt; [Float]](vdsp/add(_:_:)-7swvf.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">두 단일 정밀도 벡터의 요소별 합을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="vdsp/add(_:_:result:">static func add&lt;U, V&gt;(Double, U, result: inout V)</a>-2531u.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">단일 정밀도 벡터와 스칼라 값의 요소별 합을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="vdsp/add(_:_:result:">static func add&lt;U, V&gt;(Float, U, result: inout V)</a>-2w0o9.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">단일 정밀도 벡터와 스칼라 값의 요소별 합을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="vdsp/add(_:_:result:">static func add&lt;T, U, V&gt;(T, U, result: inout V)</a>-338hl.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">배정밀도 벡터 두 개의 요소별 합을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="vdsp/add(_:_:result:">static func add&lt;T, U, V&gt;(T, U, result: inout V)</a>-3vzwi.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">단일 정밀도 벡터 두 개의 요소별 합을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="vdsp/add(_:to:count:result:">static func add(DSPSplitComplex, to: DSPSplitComplex, count: Int, result: inout DSPSplitComplex)</a>-g1dk.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">Calculates the single-precision element-wise sum of the supplied complex vectors.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">*<a href="https://developer.apple.com/documentation/accelerate/vdsp/convertelements(of:to:">View on Apple Developer</a>-3jcmt)*</span>

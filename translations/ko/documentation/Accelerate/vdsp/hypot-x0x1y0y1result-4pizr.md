---
source_path: "documentation/Accelerate/vdsp/hypot-x0x1y0y1result-4pizr.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vdsp/hypot-x0x1y0y1result-4pizr"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:hypotx0x1y0y1result:0000:0001">hypot(x0:x1:y0:y1:result:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:hypotx0x1y0y1result:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:hypotx0x1y0y1result:0002:0001">두 벡터 쌍의 대응 원소 차이를 빗변의 두 직각변으로 갖는 직각삼각형의 배정밀도 빗변 길이를 계산합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:hypotx0x1y0y1result:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:hypotx0x1y0y1result:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:hypotx0x1y0y1result:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:hypotx0x1y0y1result:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:hypotx0x1y0y1result:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:hypotx0x1y0y1result:0004:0005">tvOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:hypotx0x1y0y1result:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:hypotx0x1y0y1result:0004:0007">watchOS 6.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static func hypot<R, S, T, U, V>(x0: R, x1: S, y0: T, y1: U, result: inout V) where R : AccelerateBuffer, S : AccelerateBuffer, T : AccelerateBuffer, U : AccelerateBuffer, V : AccelerateMutableBuffer, R.Element == Double, S.Element == Double, T.Element == Double, U.Element == Double, V.Element == Double
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 함수는 제공된 벡터의 원소 수인 *n*개의 직각삼각형에 대해 각 빗변 길이를 계산합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">벡터 <code>x0</code>과 <code>x1</code>, <code>y0</code> 및 <code>y1</code>의 대응 원소 차이가 각 삼각형에서 두 변의 길이를 정의합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">함수는 다음 연산을 사용합니다.</span>

```swift
for (n = 0; n < N; ++n)
    E[n] = sqrt((x0[n]-x1[n])**2 + (y0[n]-y1[n])**2);
```

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">예를 들어, 다음 코드는 네 개의 피타고라스 삼중항의 빗변을 계산합니다.</span>

```swift
    let x0: [Double] = [3, 6, 5, 9]
    let x1: [Double] = [0, 0, 0, 0]
    
    let y0: [Double] = [0, 0, 0, 0]
    let y1: [Double] = [4, 8, 12, 12]
    
    let hypotenuses = [Double](
        unsafeUninitializedCapacity: x0.count) {
            buffer, initializedCount in
            
            vDSP.hypot(x0: x0, x1: x1,
                       y0: y0, y1: y1,
                       result: &buffer)
            
            initializedCount = x0.count
        }
    
    // Prints "[5.0, 10.0, 13.0, 15.0]".
    print(hypotenuses)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0013:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0001"><code>x0</code>: 삼각형의 첫 번째 변 집합 첫 번째 값들을 담은 배열입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0002"><code>x1</code>: 삼각형의 첫 번째 변 집합 두 번째 값들을 담은 배열입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0003"><code>y0</code>: 삼각형의 두 번째 변 집합 첫 번째 값들을 담은 배열입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0004"><code>y1</code>: 삼각형의 두 번째 변 집합 두 번째 값들을 담은 배열입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0005"><code>result</code>: 계산 결과를 받는 배열입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0015:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="vdsp_vpythg.md">vDSP_vpythg</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">두 벡터 쌍의 대응 원소 차이를 직각변으로 갖는 직각삼각형의 단정밀도 빗변 길이를 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001">[static func absolute&lt;U&gt;(U) -&gt; [Double]](vdsp/absolute(_:)-9c3ge.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">지정된 배정밀도 벡터의 각 원소에 대한 절대값을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001">[static func absolute&lt;U&gt;(U) -&gt; [Float]](vdsp/absolute(_:)-5ehc1.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">지정된 단정밀도 벡터의 각 원소에 대한 절대값을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="vdsp/absolute(_:result:">static func absolute&lt;V&gt;(DSPSplitComplex, result: inout V)</a>-9x5jn.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">지정된 단정밀도 복소수 벡터의 각 원소에 대한 절대값을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="vdsp/absolute(_:result:">static func absolute&lt;V&gt;(DSPDoubleSplitComplex, result: inout V)</a>-1wu9x.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">지정된 배정밀도 복소수 벡터의 각 원소에 대한 절대값을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="vdsp/absolute(_:result:">static func absolute&lt;U, V&gt;(U, result: inout V)</a>-657bd.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">지정된 배정밀도 벡터의 각 원소에 대한 절대값을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="vdsp/absolute(_:result:">static func absolute&lt;U, V&gt;(U, result: inout V)</a>-4pigo.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">지정된 단정밀도 벡터의 각 원소에 대한 절대값을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001">[static func add&lt;U&gt;(Double, U) -&gt; [Double]](vdsp/add(_:_:)-9mv1a.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">벡터와 스칼라 값의 배정밀도 원소별 합계를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001">[static func add&lt;T, U&gt;(T, U) -&gt; [Double]](vdsp/add(_:_:)-2ftxc.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">Returns the double-precision element-wise sum of two vectors.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001">[static func add&lt;U&gt;(Float, U) -&gt; [Float]](vdsp/add(_:_:)-53nh9.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">Returns the single-precision element-wise sum of a vector and a scalar value.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001">[static func add&lt;T, U&gt;(T, U) -&gt; [Float]](vdsp/add(_:_:)-7swvf.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">Returns the single-precision element-wise sum of two vectors.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="vdsp/add(_:_:result:">static func add&lt;U, V&gt;(Double, U, result: inout V)</a>-2531u.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">Calculates the single-precision element-wise sum of a vector and a scalar value.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001"><a href="vdsp/add(_:_:result:">static func add&lt;U, V&gt;(Float, U, result: inout V)</a>-2w0o9.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">Calculates the single-precision element-wise sum of a vector and a scalar value.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0042:0001"><a href="vdsp/add(_:_:result:">static func add&lt;T, U, V&gt;(T, U, result: inout V)</a>-338hl.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">Calculates the double-precision element-wise sum of two vectors.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0044:0001"><a href="vdsp/add(_:_:result:">static func add&lt;T, U, V&gt;(T, U, result: inout V)</a>-3vzwi.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0045:0001">Calculates the single-precision element-wise sum of two vectors.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0046:0001"><a href="vdsp/add(_:to:count:result:">static func add(DSPSplitComplex, to: DSPSplitComplex, count: Int, result: inout DSPSplitComplex)</a>-g1dk.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0047:0001">Calculates the single-precision element-wise sum of the supplied complex vectors.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0049:0001">*<a href="https://developer.apple.com/documentation/accelerate/vdsp/hypot(x0:x1:y0:y1:result:">View on Apple Developer</a>-4pizr)*</span>

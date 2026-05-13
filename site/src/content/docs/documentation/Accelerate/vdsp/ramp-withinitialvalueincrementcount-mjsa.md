---
source_path: "documentation/Accelerate/vdsp/ramp-withinitialvalueincrementcount-mjsa.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vdsp/ramp-withinitialvalueincrementcount-mjsa"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:rampwithinitialvalueincrementcount:0000:0001">ramp(withInitialValue:increment:count:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:rampwithinitialvalueincrementcount:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:rampwithinitialvalueincrementcount:0002:0001">초기값과 증가량을 사용해 단조롭게 증가하거나 감소하는 값을 포함하는 단정밀도 벡터를 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:rampwithinitialvalueincrementcount:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:rampwithinitialvalueincrementcount:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:rampwithinitialvalueincrementcount:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:rampwithinitialvalueincrementcount:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:rampwithinitialvalueincrementcount:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:rampwithinitialvalueincrementcount:0004:0005">tvOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:rampwithinitialvalueincrementcount:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:rampwithinitialvalueincrementcount:0004:0007">watchOS 6.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static func ramp(withInitialValue initialValue: Float, increment: Float, count: Int) -> [Float]
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 함수를 사용하여 램프 값이 채워진 벡터를 생성하고 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">다음 코드는 `0 ... 범위의 값으로 램프 벡터를 생성합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">7`:</span>

```swift
    let ramp = vDSP.ramp(withInitialValue: Float(0),
                         increment: 1,
                         count: 8)
    
    // Prints "[0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0]".
    print(ramp)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>initialValue</code>: 램프의 초기값입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0002"><code>increment</code>: 각 생성 요소 사이의 증분이며, 음수인 경우 감소분입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0003"><code>count</code>: 램프의 요소 수입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001">[static func absolute&lt;U&gt;(U) -&gt; [Double]](vdsp/absolute(_:)-9c3ge.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">제공된 이중 정밀도 벡터의 각 요소에 대한 절대값을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001">[static func absolute&lt;U&gt;(U) -&gt; [Float]](vdsp/absolute(_:)-5ehc1.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">제공된 단정밀도 벡터의 각 요소에 대한 절대값을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="vdsp/absolute(_:result:">static func absolute&lt;V&gt;(DSPSplitComplex, result: inout V)</a>-9x5jn.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">제공된 단정밀도 복소수 벡터의 각 요소에 대한 절대값을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="vdsp/absolute(_:result:">static func absolute&lt;V&gt;(DSPDoubleSplitComplex, result: inout V)</a>-1wu9x.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">제공된 이중 정밀도 복소수 벡터의 각 요소에 대한 절대값을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="vdsp/absolute(_:result:">static func absolute&lt;U, V&gt;(U, result: inout V)</a>-657bd.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">제공된 이중 정밀도 벡터의 각 요소에 대한 절대값을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="vdsp/absolute(_:result:">static func absolute&lt;U, V&gt;(U, result: inout V)</a>-4pigo.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">제공된 단정밀도 벡터의 각 요소에 대한 절대값을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001">[static func add&lt;U&gt;(Double, U) -&gt; [Double]](vdsp/add(_:_:)-9mv1a.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">벡터와 스칼라 값의 이중 정밀도 요소별 합을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001">[static func add&lt;T, U&gt;(T, U) -&gt; [Double]](vdsp/add(_:_:)-2ftxc.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">두 벡터의 이중 정밀도 요소별 합을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001">[static func add&lt;U&gt;(Float, U) -&gt; [Float]](vdsp/add(_:_:)-53nh9.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">벡터와 스칼라 값의 단정밀도 요소별 합을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001">[static func add&lt;T, U&gt;(T, U) -&gt; [Float]](vdsp/add(_:_:)-7swvf.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">두 벡터의 단정밀도 요소별 합을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="vdsp/add(_:_:result:">static func add&lt;U, V&gt;(Double, U, result: inout V)</a>-2531u.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">벡터와 스칼라 값의 단정밀도 요소별 합계를 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="vdsp/add(_:_:result:">static func add&lt;U, V&gt;(Float, U, result: inout V)</a>-2w0o9.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">벡터와 스칼라 값의 단정밀도 요소별 합계를 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="vdsp/add(_:_:result:">static func add&lt;T, U, V&gt;(T, U, result: inout V)</a>-338hl.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">두 벡터의 배정밀도 요소별 합계를 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001"><a href="vdsp/add(_:_:result:">static func add&lt;T, U, V&gt;(T, U, result: inout V)</a>-3vzwi.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">두 벡터의 단정밀도 요소별 합계를 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0042:0001"><a href="vdsp/add(_:to:count:result:">static func add(DSPSplitComplex, to: DSPSplitComplex, count: Int, result: inout DSPSplitComplex)</a>-g1dk.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">제공된 복소수 벡터의 단정밀도 요소별 합계를 계산합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0045:0001">*<a href="https://developer.apple.com/documentation/accelerate/vdsp/ramp(withinitialvalue:increment:count:">Apple Developer에서 보기</a>-mjsa)*</span>

---
source_path: "documentation/Accelerate/vforce/logb-6hwhw.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vforce/logb-6hwhw"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:logb:0000:0001">logb(_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:logb:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:logb:0002:0001">배정밀도 값 벡터의 각 요소에 대해 편향이 제거된 지수를 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:logb:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:logb:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:logb:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:logb:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:logb:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:logb:0004:0005">tvOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:logb:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:logb:0004:0007">watchOS 6.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static func logb<U>(_ vector: U) -> [Float] where U : AccelerateBuffer, U.Element == Float
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001">[static func exp&lt;U&gt;(U) -&gt; [Double]](vforce/exp(_:)-76nrd.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">배정밀도 값 벡터의 각 요소에 대해 *e*를 거듭제곱한 값을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001">[static func exp&lt;U&gt;(U) -&gt; [Float]](vforce/exp(_:)-5iaun.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">단정밀도 값 벡터의 각 요소에 대해 *e*를 거듭제곱한 값을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="vforce/exp(_:result:">static func exp&lt;U, V&gt;(U, result: inout V)</a>-34nxw.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">배정밀도 값 벡터의 각 요소에 대해 *e*를 거듭제곱한 값을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="vforce/exp(_:result:">static func exp&lt;U, V&gt;(U, result: inout V)</a>-4k85n.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">단정밀도 값 벡터의 각 요소에 대해 *e*를 거듭제곱한 값을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001">[static func exp2&lt;U&gt;(U) -&gt; [Double]](vforce/exp2(_:)-2m5q.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">배정밀도 값 벡터의 각 요소에 대해 2의 거듭제곱 값을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001">[static func exp2&lt;U&gt;(U) -&gt; [Float]](vforce/exp2(_:)-4mm9y.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">단정밀도 값 벡터의 각 요소에 대해 2의 거듭제곱 값을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="vforce/exp2(_:result:">static func exp2&lt;U, V&gt;(U, result: inout V)</a>-6ru6m.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">배정밀도 값 벡터의 각 요소에 대해 2를 거듭제곱한 값을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="vforce/exp2(_:result:">static func exp2&lt;U, V&gt;(U, result: inout V)</a>-8m564.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">단정밀도 값 벡터의 각 요소에 대해 2를 거듭제곱한 값을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001">[static func expm1&lt;U&gt;(U) -&gt; [Double]](vforce/expm1(_:)-xkzx.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">배정밀도 값 벡터의 각 요소에 대해 *eˣ-1* 값을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001">[static func expm1&lt;U&gt;(U) -&gt; [Float]](vforce/expm1(_:)-mfq5.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">단정밀도 값 벡터의 각 요소에 대해 *eˣ-1* 값을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="vforce/expm1(_:result:">static func expm1&lt;U, V&gt;(U, result: inout V)</a>-4dpl4.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">배정밀도 값 벡터의 각 요소에 대해 *eˣ-1*을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="vforce/expm1(_:result:">static func expm1&lt;U, V&gt;(U, result: inout V)</a>-2yhs3.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">단정밀도 값 벡터의 각 요소에 대해 *eˣ-1*을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001">[static func log10&lt;U&gt;(U) -&gt; [Double]](vforce/log10(_:)-9wr68.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">배정밀도 값 벡터의 각 요소에 대한 10을 밑으로 하는 로그를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001">[static func log&lt;U&gt;(U) -&gt; [Double]](vforce/log(_:)-2gh9a.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">배정밀도 값 벡터의 각 요소에 대한 자연 로그를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001">[static func log&lt;U&gt;(U) -&gt; [Float]](vforce/log(_:)-5ffby.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">단정밀도 값 벡터의 각 요소에 대한 자연 로그를 반환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">*<a href="https://developer.apple.com/documentation/accelerate/vforce/logb(_:">Apple Developer에서 보기</a>-6hwhw)*</span>

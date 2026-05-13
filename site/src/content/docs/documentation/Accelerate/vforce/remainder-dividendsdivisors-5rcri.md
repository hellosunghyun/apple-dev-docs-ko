---
source_path: "documentation/Accelerate/vforce/remainder-dividendsdivisors-5rcri.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vforce/remainder-dividendsdivisors-5rcri"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:remainderdividendsdivisors:0000:0001">remainder(dividends:divisors:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:remainderdividendsdivisors:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:remainderdividendsdivisors:0002:0001">Returns the remainder of the double-precision elements in <code>dividends</code> divided by the elements in <code>divisors</code>, using truncating division.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:remainderdividendsdivisors:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:remainderdividendsdivisors:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:remainderdividendsdivisors:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:remainderdividendsdivisors:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:remainderdividendsdivisors:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:remainderdividendsdivisors:0004:0005">tvOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:remainderdividendsdivisors:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:remainderdividendsdivisors:0004:0007">watchOS 6.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static func remainder<U, V>(dividends: U, divisors: V) -> [Double] where U : AccelerateBuffer, V : AccelerateMutableBuffer, U.Element == Double, V.Element == Double
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001">[static func ceil&lt;U&gt;(U) -&gt; [Double]](vforce/ceil(_:)-9dsdt.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">*<a href="https://developer.apple.com/documentation/accelerate/cgbtrf_(_:_:_:_:_:_:_:_:">Apple Developer에서 보기</a>)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001">[static func ceil&lt;U&gt;(U) -&gt; [Float]](vforce/ceil(_:)-57grr.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">Returns the ceiling of each element in a vector of single-precision values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="vforce/ceil(_:result:">static func ceil&lt;U, V&gt;(U, result: inout V)</a>-4wev4.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">Calculates the ceiling of each element in a vector of double-precision values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="vforce/ceil(_:result:">static func ceil&lt;U, V&gt;(U, result: inout V)</a>-6zm3u.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">Calculates the ceiling of each element in a vector of single-precision values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001">[static func copysign&lt;U, V&gt;(magnitudes: U, signs: V) -&gt; [Double]](vforce/copysign(magnitudes:signs:)-s0r3.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">Returns each single-precision element in the magnitudes vector, setting its sign to the corresponding elements in the signs vector.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001">[static func copysign&lt;U, V&gt;(magnitudes: U, signs: V) -&gt; [Float]](vforce/copysign(magnitudes:signs:)-3jhf0.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">Returns each single-precision element in the magnitudes vector, setting its sign to the corresponding elements in the signs vector.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="vforce/copysign(magnitudes:signs:result:">static func copysign&lt;T, U, V&gt;(magnitudes: T, signs: U, result: inout V)</a>-3zoya.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">Calculates each double-precision element in the magnitudes vector, setting its sign to the corresponding elements in the signs vector.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="vforce/copysign(magnitudes:signs:result:">static func copysign&lt;T, U, V&gt;(magnitudes: T, signs: U, result: inout V)</a>-5umya.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">Calculates each single-precision element in the magnitudes vector, setting its sign to the corresponding elements in the signs vector.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001">[static func floor&lt;U&gt;(U) -&gt; [Double]](vforce/floor(_:)-64hyu.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">Returns the floor of each element in a vector of double-precision values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001">[static func floor&lt;U&gt;(U) -&gt; [Float]](vforce/floor(_:)-5awna.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">Returns the floor of each element in a vector of single-precision values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="vforce/floor(_:result:">static func floor&lt;U, V&gt;(U, result: inout V)</a>-61veb.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">Calculates the floor of each element in a vector of double-precision values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="vforce/floor(_:result:">static func floor&lt;U, V&gt;(U, result: inout V)</a>-4mf4q.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">Calculates the floor of each element in a vector of single-precision values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001">[static func nearestInteger&lt;U&gt;(U) -&gt; [Double]](vforce/nearestinteger(_:)-5mppu.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">Returns the nearest integer to each element in a vector of double-precision values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001">[static func nearestInteger&lt;U&gt;(U) -&gt; [Float]](vforce/nearestinteger(_:)-386dx.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">Returns the nearest integer to each element in a vector of single-precision values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="vforce/nearestinteger(_:result:">static func nearestInteger&lt;U, V&gt;(U, result: inout V)</a>-bbtt.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">Calculates the nearest integer to each element in a vector of double-precision values.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">*<a href="https://developer.apple.com/documentation/accelerate/vforce/remainder(dividends:divisors:">View on Apple Developer</a>-5rcri)*</span>

---
source_path: "documentation/Accelerate/vvnextafterf.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vvnextafterf"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:vvnextafterf:0000:0001">vvnextafterf(_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vvnextafterf:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vvnextafterf:0002:0001">Calculates the next machine-representable value for each element in an array of single-precision values.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vvnextafterf:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:vvnextafterf:0004:0001">iOS 5.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vvnextafterf:0004:0002">iPadOS 5.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vvnextafterf:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:vvnextafterf:0004:0004">macOS 10.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:vvnextafterf:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:vvnextafterf:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vvnextafterf:0004:0007">watchOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func vvnextafterf(_: UnsafeMutablePointer<Float>, _: UnsafePointer<Float>, _: UnsafePointer<Float>, _: UnsafePointer<Int32>)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

##### <span class="ko-segment" data-segment-id="seg:heading:parameters:0008:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0009:0001">**parameter 1**: The output array, *z*.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0009:0002">**parameter 2**: The input array, *y*.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0009:0003">**parameter 3**: The direction array, *x*.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0009:0004">**parameter 4a**: The number of elements in the arrays.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0010:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avsamplecursordependencyinfo/init(sampleindicateswhetherithasdependentsamples:samplehasdependentsamples:sampleindicateswhetheritdependsonothers:sampledependsonothers:sampleindicateswhetherithasredundantcoding:samplehasredundantcoding:">View on Apple Developer</a>)*</span> <span class="ko-segment" data-segment-id="seg:paragraph:parameters:0010:0002">This function sets a value in <code>z[i]</code> that is either minimally larger than the value in <code>y[i]</code> (if <code>x[i]</code> is larger than <code>y[i]</code>) or minimally smaller than the value in <code>y[i]</code> (if <code>x[i]</code> is smaller than <code>y[i]</code>).</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001">[static func ceil&lt;U&gt;(U) -&gt; [Double]](vforce/ceil(_:)-9dsdt.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avvideocompositionlayerinstruction/configuration/opacityramp(at:">View on Apple Developer</a>)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001">[var events: [AVPlayerItemAccessLogEvent]](avplayeritemaccesslog/events.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">플레이어 아이템 액세스 로그 이벤트를 시간순으로 정렬한 배열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="vforce/ceil(_:result:">static func ceil&lt;U, V&gt;(U, result: inout V)</a>-4wev4.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">확장 로그 데이터의 문자열 인코딩입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="vforce/ceil(_:result:">static func ceil&lt;U, V&gt;(U, result: inout V)</a>-6zm3u.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avplayeritemaccesslog/extendedlogdata(">View on Apple Developer</a>)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001">[static func copysign&lt;U, V&gt;(magnitudes: U, signs: V) -&gt; [Double]](vforce/copysign(magnitudes:signs:)-s0r3.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">Returns each single-precision element in the magnitudes vector, setting its sign to the corresponding elements in the signs vector.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001">[static func copysign&lt;U, V&gt;(magnitudes: U, signs: V) -&gt; [Float]](vforce/copysign(magnitudes:signs:)-3jhf0.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">Returns each single-precision element in the magnitudes vector, setting its sign to the corresponding elements in the signs vector.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="vforce/copysign(magnitudes:signs:result:">static func copysign&lt;T, U, V&gt;(magnitudes: T, signs: U, result: inout V)</a>-3zoya.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">Calculates each double-precision element in the magnitudes vector, setting its sign to the corresponding elements in the signs vector.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="vforce/copysign(magnitudes:signs:result:">static func copysign&lt;T, U, V&gt;(magnitudes: T, signs: U, result: inout V)</a>-5umya.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">Calculates each single-precision element in the magnitudes vector, setting its sign to the corresponding elements in the signs vector.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001">[static func floor&lt;U&gt;(U) -&gt; [Double]](vforce/floor(_:)-64hyu.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">Returns the floor of each element in a vector of double-precision values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001">[static func floor&lt;U&gt;(U) -&gt; [Float]](vforce/floor(_:)-5awna.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">Returns the floor of each element in a vector of single-precision values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="vforce/floor(_:result:">static func floor&lt;U, V&gt;(U, result: inout V)</a>-61veb.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">Calculates the floor of each element in a vector of double-precision values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="vforce/floor(_:result:">static func floor&lt;U, V&gt;(U, result: inout V)</a>-4mf4q.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">Calculates the floor of each element in a vector of single-precision values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001">[static func nearestInteger&lt;U&gt;(U) -&gt; [Double]](vforce/nearestinteger(_:)-5mppu.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">Returns the nearest integer to each element in a vector of double-precision values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001">[static func nearestInteger&lt;U&gt;(U) -&gt; [Float]](vforce/nearestinteger(_:)-386dx.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">Returns the nearest integer to each element in a vector of single-precision values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001"><a href="vforce/nearestinteger(_:result:">static func nearestInteger&lt;U, V&gt;(U, result: inout V)</a>-bbtt.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">Calculates the nearest integer to each element in a vector of double-precision values.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">*<a href="https://developer.apple.com/documentation/accelerate/vvnextafterf(_:_:_:_:">View on Apple Developer</a>)*</span>

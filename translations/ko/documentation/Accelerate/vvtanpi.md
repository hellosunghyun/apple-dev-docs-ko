---
source_path: "documentation/Accelerate/vvtanpi.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vvtanpi"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:vvtanpi:0000:0001">vvtanpi(_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vvtanpi:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vvtanpi:0002:0001">배정밀도(double-precision) 값 배열의 각 요소에 <code>pi</code>를 곱한 뒤 탄젠트를 계산합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vvtanpi:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:vvtanpi:0004:0001">iOS 5.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vvtanpi:0004:0002">iPadOS 5.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vvtanpi:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:vvtanpi:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:vvtanpi:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:vvtanpi:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vvtanpi:0004:0007">watchOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func vvtanpi(_: UnsafeMutablePointer<Double>, _: UnsafePointer<Double>, _: UnsafePointer<Int32>)
```

##### <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001">**parameter 1**: 출력 배열, *y*입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002">**parameter 2**: 입력 배열, *x*입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0003">**parameter 3**: 배열의 요소 수입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001">[static func acos&lt;U&gt;(U) -&gt; [Double]](vforce/acos(_:)-8srk.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">배정밀도(double-precision) 값 벡터의 각 요소에 대한 역코사인을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001">[static func acos&lt;U&gt;(U) -&gt; [Float]](vforce/acos(_:)-3hl5t.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">단정밀도(single-precision) 값 벡터의 각 요소에 대한 역코사인을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="vforce/acos(_:result:">static func acos&lt;U, V&gt;(U, result: inout V)</a>-3c9qz.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">배정밀도(double-precision) 값 벡터의 각 요소에 대해 역코사인을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="vforce/acos(_:result:">static func acos&lt;U, V&gt;(U, result: inout V)</a>-6rc2f.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">단정밀도(single-precision) 값 벡터의 각 요소에 대해 역코사인을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001">[static func asin&lt;U&gt;(U) -&gt; [Double]](vforce/asin(_:)-454ds.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">배정밀도(double-precision) 값 벡터의 각 요소에 대한 역사인을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001">[static func asin&lt;U&gt;(U) -&gt; [Float]](vforce/asin(_:)-8vvt1.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">단정밀도(single-precision) 값 벡터의 각 요소에 대한 역사인을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="vforce/asin(_:result:">static func asin&lt;U, V&gt;(U, result: inout V)</a>-94jmy.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">배정밀도(double-precision) 값 벡터의 각 요소에 대해 역사인을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="vforce/asin(_:result:">static func asin&lt;U, V&gt;(U, result: inout V)</a>-ooti.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">단정밀도(single-precision) 값 벡터의 각 요소에 대해 역사인을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001">[static func atan&lt;U&gt;(U) -&gt; [Double]](vforce/atan(_:)-1ghr3.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">배정밀도(double-precision) 값 벡터의 각 요소에 대한 역탄젠트를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001">[static func atan&lt;U&gt;(U) -&gt; [Float]](vforce/atan(_:)-5ejvk.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">단정밀도(single-precision) 값 벡터의 각 요소에 대한 역탄젠트를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="vforce/atan(_:result:">static func atan&lt;U, V&gt;(U, result: inout V)</a>-691jp.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">배정밀도(double-precision) 값 벡터의 각 요소에 대해 역탄젠트를 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="vforce/atan(_:result:">static func atan&lt;U, V&gt;(U, result: inout V)</a>-6bb8n.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">단정밀도(single-precision) 값 벡터의 각 요소에 대해 역탄젠트를 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001">[static func atan2&lt;U, V&gt;(x: U, y: V) -&gt; [Double]](vforce/atan2(x:y:)-h54u.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">배정밀도(double-precision) 값 두 벡터에서 각 요소 쌍에 대한 역탄젠트를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001">[static func atan2&lt;U, V&gt;(x: U, y: V) -&gt; [Float]](vforce/atan2(x:y:)-3lku3.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">단정밀도(single-precision) 값 두 벡터에서 각 요소 쌍에 대한 역탄젠트를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="vforce/atan2(x:y:result:">static func atan2&lt;T, U, V&gt;(x: T, y: U, result: inout V)</a>-184b6.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">배정밀도(double-precision) 값 두 벡터에서 각 요소 쌍에 대한 역탄젠트를 계산합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">*<a href="https://developer.apple.com/documentation/accelerate/vvtanpi(_:_:_:">View on Apple Developer</a>)*</span>

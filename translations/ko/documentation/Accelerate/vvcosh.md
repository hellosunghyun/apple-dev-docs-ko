---
source_path: "documentation/Accelerate/vvcosh.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vvcosh"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:vvcosh:0000:0001">vvcosh(_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vvcosh:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vvcosh:0002:0001">배정밀도(double-precision) 값 배열의 각 요소에 대해 쌍곡 코사인을 계산합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vvcosh:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:vvcosh:0004:0001">iOS 5.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vvcosh:0004:0002">iPadOS 5.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vvcosh:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:vvcosh:0004:0004">macOS 10.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:vvcosh:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:vvcosh:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vvcosh:0004:0007">watchOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func vvcosh(_: UnsafeMutablePointer<Double>, _: UnsafePointer<Double>, _: UnsafePointer<Int32>)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

##### <span class="ko-segment" data-segment-id="seg:heading:parameters:0008:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0009:0001">**매개변수 1**: 출력 배열, *y*입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0009:0002">**매개변수 2**: 입력 배열, *x*입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0009:0003">**매개변수 3**: 배열 내 요소 개수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0010:0001"><code>x</code>가 <code>+/-0</code>이면 결과가 부호 있는 0을 유지합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0011:0001"><code>x</code>가 <code>+/-inf</code>이면 결과는 <code>+inf</code>입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0012:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001">[static func acosh&lt;U&gt;(U) -&gt; [Double]](vforce/acosh(_:)-1j3qt.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">배정밀도(double-precision) 값 벡터의 각 요소에 대한 역쌍곡 코사인을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001">[static func acosh&lt;U&gt;(U) -&gt; [Float]](vforce/acosh(_:)-8zjay.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">단정밀도 값 벡터의 각 요소에 대해 역쌍곡 코사인 값을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="vforce/acosh(_:result:">static func acosh&lt;U, V&gt;(U, result: inout V)</a>-4cip0.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">배정밀도 값 벡터의 각 요소에 대해 역쌍곡 코사인을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="vforce/acosh(_:result:">static func acosh&lt;U, V&gt;(U, result: inout V)</a>-2r23w.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">단정밀도 값 벡터의 각 요소에 대해 역쌍곡 코사인을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001">[static func asinh&lt;U&gt;(U) -&gt; [Double]](vforce/asinh(_:)-ue6b.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">배정밀도 값 벡터의 각 요소에 대한 역쌍곡 사인 값을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001">[static func asinh&lt;U&gt;(U) -&gt; [Float]](vforce/asinh(_:)-284n7.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">단정밀도 값 벡터의 각 요소에 대한 역쌍곡 사인 값을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="vforce/asinh(_:result:">static func asinh&lt;U, V&gt;(U, result: inout V)</a>-7wn57.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">배정밀도 값 벡터의 각 요소에 대해 역쌍곡 사인 값을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="vforce/asinh(_:result:">static func asinh&lt;U, V&gt;(U, result: inout V)</a>-17vv4.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">단정밀도 값 벡터의 각 요소에 대해 역쌍곡 사인 값을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001">[static func atanh&lt;U&gt;(U) -&gt; [Double]](vforce/atanh(_:)-922d.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">배정밀도 값 벡터의 각 요소에 대한 역쌍곡 탄젠트 값을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001">[static func atanh&lt;U&gt;(U) -&gt; [Float]](vforce/atanh(_:)-2t372.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">단정밀도 값 벡터의 각 요소에 대한 역쌍곡 탄젠트 값을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0033:0001"><a href="vforce/atanh(_:result:">static func atanh&lt;U, V&gt;(U, result: inout V)</a>-6waj3.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">배정밀도 값 벡터의 각 요소에 대해 역쌍곡 탄젠트를 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0035:0001"><a href="vforce/atanh(_:result:">static func atanh&lt;U, V&gt;(U, result: inout V)</a>-596wg.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0036:0001">단정밀도 값 벡터의 각 요소에 대해 역쌍곡 탄젠트를 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0037:0001">[static func cosh&lt;U&gt;(U) -&gt; [Double]](vforce/cosh(_:)-4dmhm.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0038:0001">배정밀도 값 벡터의 각 요소에 대한 쌍곡 코사인 값을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0039:0001">[static func cosh&lt;U&gt;(U) -&gt; [Float]](vforce/cosh(_:)-5ax3f.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0040:0001">단정밀도 값 벡터의 각 요소에 대한 쌍곡 코사인 값을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0041:0001"><a href="vforce/cosh(_:result:">static func cosh&lt;U, V&gt;(U, result: inout V)</a>-4f7in.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0042:0001">배정밀도 값 벡터의 각 요소에 대해 쌍곡 코사인을 계산합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0044:0001">*<a href="https://developer.apple.com/documentation/accelerate/vvcosh(_:_:_:">Apple Developer에서 보기</a>)*</span>

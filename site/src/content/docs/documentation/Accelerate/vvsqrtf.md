---
source_path: "documentation/Accelerate/vvsqrtf.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vvsqrtf"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:vvsqrtf:0000:0001">vvsqrtf(_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vvsqrtf:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vvsqrtf:0002:0001">단정밀(single-precision) 값 배열의 각 요소에 대해 제곱근을 계산합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vvsqrtf:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:vvsqrtf:0004:0001">iOS 5.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vvsqrtf:0004:0002">iPadOS 5.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vvsqrtf:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:vvsqrtf:0004:0004">macOS 10.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:vvsqrtf:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:vvsqrtf:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vvsqrtf:0004:0007">watchOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func vvsqrtf(_: UnsafeMutablePointer<Float>, _: UnsafePointer<Float>, _: UnsafePointer<Int32>)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

##### <span class="ko-segment" data-segment-id="seg:heading:parameters:0008:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0009:0001">**매개변수 1**: 출력 배열, *y*입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0009:0002">**매개변수 2**: 입력 배열, *x*입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0009:0003">**매개변수 3**: 배열의 요소 개수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0010:0001">다음 코드는 <a href="vvsqrtf(_:_:_:">@@TOKEN_0@@</a>.md) 사용 예를 보여줍니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0011:0001">**Swift**:</span>

```swift
var x: [Float] = [100, 10000, 64, 144]
var y = [Float](repeating: 0, count: x.count)
var n = Int32(x.count)
 
vvsqrtf(&y, &x, &n)
 
print(y) // [10.0, 100.0, 8.0, 12.0]
```

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0013:0001">**Objective-C**:</span>

```objc
float x[] = {100, 10000, 64, 144};
float y[4];
int n = 4;
 
vvsqrtf(y, x, &n);
 
NSLog(@"y: [%lf, %lf, %lf, %lf]", y[0], y[1], y[2], y[3]);
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0015:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001">[static func ceil&lt;U&gt;(U) -&gt; [Double]](vforce/ceil(_:)-9dsdt.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">배정밀도(double-precision) 값 벡터의 각 요소에 대한 올림값을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001">[static func ceil&lt;U&gt;(U) -&gt; [Float]](vforce/ceil(_:)-57grr.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">단정밀(single-precision) 값 벡터의 각 요소에 대한 올림값을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="vforce/ceil(_:result:">static func ceil&lt;U, V&gt;(U, result: inout V)</a>-4wev4.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">배정밀도(double-precision) 값 벡터의 각 요소에 대한 올림값을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="vforce/ceil(_:result:">static func ceil&lt;U, V&gt;(U, result: inout V)</a>-6zm3u.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">단정밀(single-precision) 값 벡터의 각 요소에 대한 올림값을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001">[static func copysign&lt;U, V&gt;(magnitudes: U, signs: V) -&gt; [Double]](vforce/copysign(magnitudes:signs:)-s0r3.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">단정밀(single-precision) magnitudes 벡터의 각 요소를 반환하면서 signs 벡터의 대응 요소로 부호를 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001">[static func copysign&lt;U, V&gt;(magnitudes: U, signs: V) -&gt; [Float]](vforce/copysign(magnitudes:signs:)-3jhf0.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">단정밀(single-precision) magnitudes 벡터의 각 요소를 반환하면서 signs 벡터의 대응 요소로 부호를 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="vforce/copysign(magnitudes:signs:result:">static func copysign&lt;T, U, V&gt;(magnitudes: T, signs: U, result: inout V)</a>-3zoya.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">배정밀도(double-precision) magnitudes 벡터의 각 요소를 계산하며 signs 벡터의 대응 요소로 부호를 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="vforce/copysign(magnitudes:signs:result:">static func copysign&lt;T, U, V&gt;(magnitudes: T, signs: U, result: inout V)</a>-5umya.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">단정밀(single-precision) magnitudes 벡터의 각 요소를 계산하며 signs 벡터의 대응 요소로 부호를 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001">[static func floor&lt;U&gt;(U) -&gt; [Double]](vforce/floor(_:)-64hyu.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">배정밀도(double-precision) 값 벡터의 각 요소에 대한 바닥값을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001">[static func floor&lt;U&gt;(U) -&gt; [Float]](vforce/floor(_:)-5awna.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">단정밀(single-precision) 값 벡터의 각 요소에 대한 바닥값을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="vforce/floor(_:result:">static func floor&lt;U, V&gt;(U, result: inout V)</a>-61veb.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">배정밀도(double-precision) 값 벡터의 각 요소에 대한 바닥값을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="vforce/floor(_:result:">static func floor&lt;U, V&gt;(U, result: inout V)</a>-4mf4q.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">단정밀도 값 벡터의 각 요소에 대해 floor를 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001">[static func nearestInteger&lt;U&gt;(U) -&gt; [Double]](vforce/nearestinteger(_:)-5mppu.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">배정도 값 벡터의 각 요소에 대해 가장 가까운 정수를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0042:0001">[static func nearestInteger&lt;U&gt;(U) -&gt; [Float]](vforce/nearestinteger(_:)-386dx.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">단정도 값 벡터의 각 요소에 대해 가장 가까운 정수를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0044:0001"><a href="vforce/nearestinteger(_:result:">static func nearestInteger&lt;U, V&gt;(U, result: inout V)</a>-bbtt.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0045:0001">배정도 값 벡터의 각 요소에 대해 가장 가까운 정수를 계산합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0047:0001">*<a href="https://developer.apple.com/documentation/accelerate/vvsqrtf(_:_:_:">View on Apple Developer</a>)*</span>

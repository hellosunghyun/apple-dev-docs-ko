---
source_path: "documentation/Accelerate/vvpowf.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vvpowf"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:vvpowf:0000:0001">vvpowf(_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vvpowf:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vvpowf:0002:0001">단일 정밀도 값 배열의 두 번째 배열 요소만큼 배열의 각 요소를 거듭제곱합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vvpowf:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:vvpowf:0004:0001">iOS 5.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vvpowf:0004:0002">iPadOS 5.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vvpowf:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:vvpowf:0004:0004">macOS 10.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:vvpowf:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:vvpowf:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vvpowf:0004:0007">watchOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func vvpowf(_: UnsafeMutablePointer<Float>, _: UnsafePointer<Float>, _: UnsafePointer<Float>, _: UnsafePointer<Int32>)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

##### <span class="ko-segment" data-segment-id="seg:heading:parameters:0008:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0009:0001">**매개변수 1**: 출력 배열, *z*.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0009:0002">**매개변수 2**: 지수 입력 배열, *y*.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0009:0003">**매개변수 3**: 밑 입력 배열, *x*.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0009:0004">**매개변수 4**: 배열의 요소 수.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0010:0001">다음 코드는 <a href="vvpowf(_:_:_:_:">@@TOKEN_0@@</a>.md) 사용 예시를 보여줍니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0011:0001">**Swift**:</span>

```swift
var x: [Float] = [3, 2, 10, 6]
var y: [Float] = [2, 4, 3, 2]
var z = [Float](repeating: 0, count: x.count)
var n = Int32(x.count)
 
vvpowf(&z, &y, &x, &n)
 
print(z) // [9.0, 16.0, 1000.0, 36.0]
```

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0013:0001">**Objective-C**:</span>

```objc
float x[] = {3, 2, 10, 6};
float y[] = {2, 4, 3, 2};
float z[4];
int n = 4;
 
vvpowf(z, y, x, &n);
 
NSLog(@"z: [%lf, %lf, %lf, %lf]", z[0], z[1], z[2], z[3]);
```

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0015:0001">주어진 <code>z</code> 값에 대응하는 <code>x</code>와 <code>y</code>의 특수 값은 다음과 같습니다.</span>

| <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0001"><code>x (밑)</code></span> | <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0002"><code>y (지수)</code></span> | <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0003"><code>z (결과)</code></span> |
| --- | --- | --- |
| <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0004"><code>odd integer, &lt;0</code></span> | <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0005"><code>+/-0</code></span> | <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0006"><code>+/-inf</code></span> |
| <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0007"><code>odd integer, &gt;0</code></span> | <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0008"><code>+/-0</code></span> | <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0009"><code>+/-0</code></span> |
| <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0010"><code>otherwise, &lt;0</code></span> | <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0011"><code>+/-0</code></span> | <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0012"><code>+inf</code></span> |
| <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0013"><code>otherwise, &gt;0</code></span> | <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0014"><code>+/-0</code></span> | <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0015"><code>+0</code></span> |
| <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0016"><code>+/-inf</code></span> | <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0017"><code>-1</code></span> | <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0018"><code>1</code></span> |
| <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0019"><code>NaN</code></span> | <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0020"><code>+1</code></span> | <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0021"><code>1</code></span> |
| <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0022"><code>+/-0</code></span> | <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0023"><code>NaN</code></span> | <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0024"><code>1</code></span> |
| <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0025"><code>-inf</code></span> | <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0026">`</span> | <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0027">x</span> | <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0028">&lt;1`</span> | <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0029"><code>+inf</code></span> |
| <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0030"><code>-inf</code></span> | <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0031">`</span> | <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0032">x</span> | <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0033">&gt;1`</span> | <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0034"><code>+0</code></span> |
| <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0035"><code>+inf</code></span> | <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0036">`</span> | <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0037">x</span> | <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0038">&lt;1`</span> | <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0039"><code>+0</code></span> |
| <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0040"><code>+inf</code></span> | <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0041">`</span> | <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0042">x</span> | <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0043">&gt;1`</span> | <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0044"><code>+inf</code></span> |
| <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0045"><code>odd integer, &lt;0</code></span> | <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0046"><code>-inf</code></span> | <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0047"><code>-0</code></span> |
| <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0048"><code>odd integer, &gt;0</code></span> | <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0049"><code>-inf</code></span> | <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0050"><code>-inf</code></span> |
| <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0051"><code>otherwise, &lt;0</code></span> | <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0052"><code>-inf</code></span> | <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0053"><code>+0</code></span> |
| <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0054"><code>otherwise, &gt;0</code></span> | <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0055"><code>-inf</code></span> | <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0056"><code>+inf</code></span> |
| <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0057"><code>&lt;0</code></span> | <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0058"><code>+inf</code></span> | <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0059"><code>+0</code></span> |
| <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0060"><code>&gt;0</code></span> | <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0061"><code>+inf</code></span> | <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0062"><code>+inf</code></span> |
| <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0063"><code>non-integer</code></span> | <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0064"><code>&lt;0</code></span> | <span class="ko-segment" data-segment-id="seg:table:parameters:0016:0065"><code>NaN</code></span> |

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0017:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001">[static func pow&lt;U, V&gt;(bases: U, exponents: V) -&gt; [Double]](vforce/pow(bases:exponents:)-94dha.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">bases 벡터의 각 double-precision 요소를 exponents 벡터의 해당 요소만큼 거듭제곱한 값을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001">[static func pow&lt;U, V&gt;(bases: U, exponents: V) -&gt; [Float]](vforce/pow(bases:exponents:)-3gl7v.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">bases 벡터의 각 단정밀도 요소를 exponents 벡터의 대응 요소만큼 거듭제곱한 값을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="vforce/pow(bases:exponents:result:">static func pow&lt;T, U, V&gt;(bases: T, exponents: U, result: inout V)</a>-4bso.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">bases 벡터의 각 배정밀도 요소를 exponents 벡터의 대응 요소만큼 거듭제곱해 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="vforce/pow(bases:exponents:result:">static func pow&lt;T, U, V&gt;(bases: T, exponents: U, result: inout V)</a>-6pffz.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">bases 벡터의 각 단정밀도 요소를 exponents 벡터의 대응 요소만큼 거듭제곱해 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="vvpow(_:_:_:_:">func vvpow(UnsafeMutablePointer&lt;Double&gt;, UnsafePointer&lt;Double&gt;, UnsafePointer&lt;Double&gt;, UnsafePointer&lt;Int32&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">배열의 각 요소를 두 번째 이중 정밀도 값 배열의 대응 요소를 지수로 하여 거듭제곱합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">*<a href="https://developer.apple.com/documentation/accelerate/vvpowf(_:_:_:_:">Apple Developer에서 보기</a>)*</span>

---
source_path: "documentation/Accelerate/vforce/cosh-5ax3f.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vforce/cosh-5ax3f"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:cosh:0000:0001">cosh(_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cosh:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cosh:0002:0001">Returns the hyperbolic cosine of each element in a vector of single-precision values.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cosh:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:cosh:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:cosh:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:cosh:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:cosh:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:cosh:0004:0005">tvOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:cosh:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:cosh:0004:0007">watchOS 6.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static func cosh<U>(_ vector: U) -> [Float] where U : AccelerateBuffer, U.Element == Float
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001">[static func acosh&lt;U&gt;(U) -&gt; [Double]](vforce/acosh(_:)-1j3qt.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">Returns the inverse hyperbolic cosine of each element in a vector of double-precision values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001">[static func acosh&lt;U&gt;(U) -&gt; [Float]](vforce/acosh(_:)-8zjay.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">Returns the inverse hyperbolic cosine of each element in a vector of single-precision values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="vforce/acosh(_:result:">static func acosh&lt;U, V&gt;(U, result: inout V)</a>-4cip0.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">Calculates the inverse hyperbolic cosine of each element in a vector of double-precision values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="vforce/acosh(_:result:">static func acosh&lt;U, V&gt;(U, result: inout V)</a>-2r23w.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">Calculates the inverse hyperbolic cosine of each element in a vector of single-precision values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001">[static func asinh&lt;U&gt;(U) -&gt; [Double]](vforce/asinh(_:)-ue6b.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">Returns the inverse hyperbolic sine of each element in a vector of double-precision values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001">[static func asinh&lt;U&gt;(U) -&gt; [Float]](vforce/asinh(_:)-284n7.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">Returns the inverse hyperbolic sine of each element in a vector of single-precision values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="cblas_dzasum(_:_:_:">func cblas_dzasum(__LAPACK_int, OpaquePointer?, __LAPACK_int) -&gt; Double</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">벡터의 각 요소에 대해 실수부와 허수부의 절댓값 합을 계산합니다(단일 정밀도 복소수).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="cblas_dznrm2(_:_:_:">func cblas_dznrm2(__LAPACK_int, OpaquePointer?, __LAPACK_int) -&gt; Double</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">벡터의 유클리드 노름을 계산합니다(배정밀도 복소수).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="cblas_zaxpy(_:_:_:_:_:_:">func cblas_zaxpy(__LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">상수 배율의 벡터에 벡터를 더한 값을 계산합니다(배정밀도 복소수).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="cblas_zcopy(_:_:_:_:_:">func cblas_zcopy(__LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">벡터를 다른 벡터로 복사합니다(배정밀도 복소수).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="cblas_zdrot(_:_:_:_:_:_:_:">func cblas_zdrot(__LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, Double, Double)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">복소수 벡터 쌍에 Givens 회전 행렬을 적용합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="cblas_zdscal(_:_:_:_:">func cblas_zdscal(__LAPACK_int, Double, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">벡터의 각 요소에 상수를 곱합니다(배정밀도 복소수).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="cblas_zgbmv(_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_zgbmv(CBLAS_ORDER, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">일반 밴드 행렬을 스케일링한 다음 벡터와 곱하고, 벡터를 더합니다(배정밀도 복소수).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="cblas_zgemm(_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_zgemm(CBLAS_ORDER, CBLAS_TRANSPOSE, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">두 개의 행렬을 곱합니다(배정밀도 복소수).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="cblas_zgemv(_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_zgemv(CBLAS_ORDER, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">행렬과 벡터를 곱합니다(배정밀도 복소수).</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">벡터 <code>X</code>를 벡터 <code>Y</code>의 켤레 전치와 곱한 뒤 행렬 <code>A</code>를 더합니다(배정밀도 복소수).</span>

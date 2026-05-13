---
source_path: "documentation/Accelerate/cblas-zhpr2.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/cblas-zhpr2"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:cblaszhpr2:0000:0001">cblas_zhpr2(_:_:_:_:_:_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cblaszhpr2:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cblaszhpr2:0002:0001">두 번째 벡터의 복소켤레 전치와 첫 번째 벡터의 곱을 반대로 수행해 결과를 합산한 뒤 행렬을 더합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cblaszhpr2:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:cblaszhpr2:0004:0001">iOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblaszhpr2:0004:0002">iPadOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblaszhpr2:0004:0003">Mac Catalyst 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblaszhpr2:0004:0004">macOS 13.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblaszhpr2:0004:0005">tvOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblaszhpr2:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblaszhpr2:0004:0007">watchOS 9.4+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func cblas_zhpr2(_ ORDER: CBLAS_ORDER, _ UPLO: CBLAS_UPLO, _ N: __LAPACK_int, _ ALPHA: OpaquePointer, _ X: OpaquePointer?, _ INCX: __LAPACK_int, _ Y: OpaquePointer?, _ INCY: __LAPACK_int, _ AP: OpaquePointer?)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001"><code>alpha*x*conjg(y') + conjg(alpha)*y*conjg(x') + A</code>를 계산하고 결과를 <code>A</code>에 저장합니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0001">❗ **중요**: Apple은 Accelerate framework에서 BLAS 및 LAPACK 라이브러리를 LAPACK 3.9.1에 맞추어 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0002">iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, watchOS 26부터 라이브러리는 LAPACK 3.12.0에 맞추어 제공됩니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0003">이 새 인터페이스는 추가 기능과 함께 새 ILP64 인터페이스를 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0004">새 인터페이스를 사용하려면 <code>Accelerate</code> 또는 <code>vecLib</code> 헤더를 포함하기 전에 <code>ACCELERATE_NEW_LAPACK</code>를 정의합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0005">ILP64 인터페이스를 사용할 때는 <code>ACCELERATE_LAPACK_ILP64</code>도 정의합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0006">Swift 프로젝트의 경우 Xcode 빌드 설정에서 전처리기 매크로로 <code>ACCELERATE_NEW_LAPACK=1</code> 및 <code>ACCELERATE_LAPACK_ILP64=1</code>을 지정합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0010:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0001"><code>ORDER</code>: 데이터 정렬을 row-major(C) 또는 column-major(Fortran) 방식으로 지정합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0002"><code>UPLO</code>: 행렬에서 상삼각 또는 하삼각을 사용할지 지정합니다. 유효 값은 <code>'U'</code> 또는 <code>'L'</code>입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0003"><code>N</code>: 행렬 <code>A</code>의 차수와 벡터 <code>x</code> 및 <code>y</code>의 요소 수를 지정합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0004"><code>ALPHA</code>: 벡터 <code>x</code>에 곱해지는 스케일링 인수입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0005"><code>X</code>: 벡터 <code>x</code>입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0006"><code>INCX</code>: <code>X</code> 내의 스트라이드입니다. 예를 들어 <code>incX</code>가 7이면 7번째 요소를 사용합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0007"><code>Y</code>: 벡터 <code>y</code>입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0008"><code>INCY</code>: <code>Y</code> 내의 스트라이드입니다. 예를 들어 <code>incY</code>가 7이면 7번째 요소를 사용합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0009"><code>AP</code>: packed 형식의 행렬 <code>A</code>입니다. 반환 시 결과로 덮어씁니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0012:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="cblas_dzasum(_:_:_:">func cblas_dzasum(__LAPACK_int, OpaquePointer?, __LAPACK_int) -&gt; Double</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">벡터의 요소에서 실수부와 허수부의 절댓값 합계를 계산합니다 (단정밀도 복소수).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="cblas_dznrm2(_:_:_:">func cblas_dznrm2(__LAPACK_int, OpaquePointer?, __LAPACK_int) -&gt; Double</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">벡터의 unitary 노름을 계산합니다 (배정밀도 복소수).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="cblas_zaxpy(_:_:_:_:_:_:">func cblas_zaxpy(__LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">상수 배 벡터에 벡터를 더합니다 (배정밀도 복소수).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="cblas_zcopy(_:_:_:_:_:">func cblas_zcopy(__LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">벡터를 다른 벡터로 복사합니다 (배정밀도 복소수).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="cblas_zdrot(_:_:_:_:_:_:_:">func cblas_zdrot(__LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, Double, Double)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">복소수 벡터 두 개에 Givens 회전 행렬을 적용합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="cblas_zdscal(_:_:_:_:">func cblas_zdscal(__LAPACK_int, Double, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">벡터의 각 요소를 상수와 곱합니다 (배정밀도 복소수).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="cblas_zgbmv(_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_zgbmv(CBLAS_ORDER, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">일반 밴드 행렬을 스케일링한 다음 벡터를 곱하고, 벡터를 더합니다 (배정밀도 복소수).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="cblas_zgemm(_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_zgemm(CBLAS_ORDER, CBLAS_TRANSPOSE, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">두 행렬을 곱합니다 (배정밀도 복소수).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="cblas_zgemv(_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_zgemv(CBLAS_ORDER, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">행렬을 벡터와 곱합니다 (배정밀도 복소수).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001"><a href="cblas_zgerc(_:_:_:_:_:_:_:_:_:_:">func cblas_zgerc(CBLAS_ORDER, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">벡터 X를 벡터 Y의 켤레 전치와 곱한 다음 행렬 A를 더합니다 (배정밀도 복소수).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0033:0001"><a href="cblas_zgeru(_:_:_:_:_:_:_:_:_:_:">func cblas_zgeru(CBLAS_ORDER, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">벡터 X를 벡터 Y의 전치와 곱한 다음 행렬 A를 더합니다 (배정밀도 복소수).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0035:0001"><a href="cblas_zhbmv(_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_zhbmv(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0036:0001">에르미트 밴드 행렬을 스케일링하고 벡터를 곱한 다음 벡터를 더합니다 (배정밀도 복소수).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0037:0001"><a href="cblas_zhemm(_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_zhemm(CBLAS_ORDER, CBLAS_SIDE, CBLAS_UPLO, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0038:0001">두 에르미트 행렬을 곱합니다 (배정밀도 복소수).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0039:0001"><a href="cblas_zhemv(_:_:_:_:_:_:_:_:_:_:_:">func cblas_zhemv(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0040:0001">에르미트 행렬을 스케일링한 뒤 벡터와 곱하고, 두 번째(스케일링된) 벡터를 더합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0041:0001"><a href="cblas_zher(_:_:_:_:_:_:_:_:">func cblas_zher(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, Double, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0042:0001">스케일링 계수와 벡터 <code>X</code>, 그리고 벡터 <code>X</code>의 켤레 전치의 곱을 행렬 <code>A</code>에 더합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0044:0001">*<a href="https://developer.apple.com/documentation/accelerate/cblas_zhpr2(_:_:_:_:_:_:_:_:_:">Apple Developer에서 보기</a>)*</span>

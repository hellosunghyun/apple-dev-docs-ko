---
source_path: "documentation/Accelerate/cblas-zhemm.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/cblas-zhemm"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:cblaszhemm:0000:0001">cblas_zhemm(_:_:_:_:_:_:_:_:_:_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cblaszhemm:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cblaszhemm:0002:0001">두 개의 Hermitian 행렬(배정밀도 복소수)을 곱합니다</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cblaszhemm:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:cblaszhemm:0004:0001">iOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblaszhemm:0004:0002">iPadOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblaszhemm:0004:0003">Mac Catalyst 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblaszhemm:0004:0004">macOS 13.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblaszhemm:0004:0005">tvOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblaszhemm:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblaszhemm:0004:0007">watchOS 9.4+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func cblas_zhemm(_ ORDER: CBLAS_ORDER, _ SIDE: CBLAS_SIDE, _ UPLO: CBLAS_UPLO, _ M: __LAPACK_int, _ N: __LAPACK_int, _ ALPHA: OpaquePointer, _ A: OpaquePointer?, _ LDA: __LAPACK_int, _ B: OpaquePointer?, _ LDB: __LAPACK_int, _ BETA: OpaquePointer, _ C: OpaquePointer?, _ LDC: __LAPACK_int)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001"><code>Side</code> 값에 따라 <code>A * B</code> 또는 <code>B * A</code>를 곱하고, 그 결과 행렬에 <code>alpha</code>를 곱합니다</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">그런 다음 행렬 <code>C</code>에 <code>beta</code>를 곱합니다</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">이 두 곱셈 결과의 합을 행렬 <code>C</code>에 저장합니다</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">따라서 다음 식 중 하나를 계산합니다</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001"><code>C←αAB + βC</code></span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">or</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0001"><code>C←αBA + βC</code></span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0013:0001">where</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0014:0001"><code>A = A</code></span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0015:0001">❗ **중요**: Apple은 Accelerate 프레임워크에 BLAS 및 LAPACK 라이브러리를 제공하며, 이는 LAPACK 3.9.1과 맞춰져 있습니다</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0015:0002">iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26 및 watchOS 26부터 라이브러리는 LAPACK 3.12.0과 맞춰져 있습니다</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0015:0003">이 새 인터페이스는 추가 기능과 함께 새로운 ILP64 인터페이스도 제공합니다</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0015:0004">새 인터페이스를 사용하려면 <code>Accelerate</code> 또는 <code>vecLib</code> 헤더를 포함하기 전에 <code>ACCELERATE_NEW_LAPACK</code>을(를) 정의해야 합니다</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0015:0005">ILP64 인터페이스를 사용하는 경우 <code>ACCELERATE_LAPACK_ILP64</code>도 정의해야 합니다</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0015:0006">Swift 프로젝트의 경우 Xcode 빌드 설정에서 <code>ACCELERATE_NEW_LAPACK=1</code> 및 <code>ACCELERATE_LAPACK_ILP64=1</code>을 전처리기 매크로로 지정해야 합니다</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0016:0001">``</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0017:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0001"><code>ORDER</code>: 행 기준(C) 또는 열 기준(Fortran) 데이터 순서를 지정합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0002"><code>SIDE</code>: 행렬의 곱셈 수행 순서를 결정합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0003"><code>UPLO</code>: 행렬에서 상삼각 또는 하삼각을 사용할지 지정합니다. 유효한 값은 <code>'U'</code> 또는 <code>'L'</code>입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0004"><code>M</code>: 행렬 <code>A</code>와 <code>C</code>의 행 개수입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0005"><code>N</code>: 행렬 <code>B</code>와 <code>C</code>의 열 개수입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0006"><code>ALPHA</code>: 행렬 <code>A</code>와 <code>B</code>의 곱에 적용할 스케일링 계수입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0007"><code>A</code>: 행렬 <code>A</code>입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0008"><code>LDA</code>: 행렬 <code>A</code>의 첫 번째 차원 크기입니다. <code>A[m][n]</code> 형식의 행렬을 전달하는 경우 값은 <code>m</code>이어야 합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0009"><code>B</code>: 행렬 <code>B</code>입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0010"><code>LDB</code>: 행렬 <code>B</code>의 첫 번째 차원 크기입니다. <code>B[m][n]</code> 형식의 행렬을 전달하는 경우 값은 <code>m</code>이어야 합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0011"><code>BETA</code>: 행렬 <code>C</code>의 스케일링 계수입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0012"><code>C</code>: 행렬 <code>C</code>입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0013"><code>LDC</code>: 행렬 <code>C</code>의 첫 번째 차원 크기입니다. <code>C[m][n]</code> 형식의 행렬을 전달하는 경우 값은 <code>m</code>이어야 합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0019:0001">관련 항목</span>

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

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="cblas_zgerc(_:_:_:_:_:_:_:_:_:_:">func cblas_zgerc(CBLAS_ORDER, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">벡터 <code>X</code>를 벡터 <code>Y</code>의 켤레 전치와 곱한 뒤 행렬 <code>A</code>를 더합니다(배정밀도 복소수).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001"><a href="cblas_zgeru(_:_:_:_:_:_:_:_:_:_:">func cblas_zgeru(CBLAS_ORDER, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">벡터 <code>X</code>를 벡터 <code>Y</code>의 전치와 곱한 뒤 행렬 <code>A</code>를 더합니다(배정밀도 복소수).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0042:0001"><a href="cblas_zhbmv(_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_zhbmv(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">에르미트 밴드 행렬을 스케일링한 후 벡터와 곱하고, 벡터를 더합니다(배정밀도 복소수).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0044:0001"><a href="cblas_zhemv(_:_:_:_:_:_:_:_:_:_:_:">func cblas_zhemv(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0045:0001">에르미트 행렬을 스케일링하고 벡터와 곱한 다음 두 번째(스케일링된) 벡터를 더합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0046:0001"><a href="cblas_zher(_:_:_:_:_:_:_:_:">func cblas_zher(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, Double, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0047:0001">스케일링 계수와 벡터 <code>X</code> 및 <code>X</code>의 켤레 전치의 곱을 행렬 <code>A</code>에 더합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0048:0001"><a href="cblas_zher2(_:_:_:_:_:_:_:_:_:_:">func cblas_zher2(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0049:0001">에르미트 랭크 2 업데이트: 스케일링 계수와 벡터 <code>X</code> 및 벡터 <code>Y</code>의 켤레 전치의 곱을, 스케일링 계수의 켤레와 벡터 <code>Y</code> 및 벡터 <code>X</code>의 켤레 전치의 곱에 더한 뒤 그 결과를 행렬 <code>A</code>에 더합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0051:0001">*<a href="https://developer.apple.com/documentation/accelerate/cblas_zhemm(_:_:_:_:_:_:_:_:_:_:_:_:_:">Apple Developer에서 보기</a>)*</span>

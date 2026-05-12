---
source_path: "documentation/Accelerate/cblas-cgemv.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/cblas-cgemv"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:cblascgemv:0000:0001">cblas_cgemv(_:_:_:_:_:_:_:_:_:_:_:_)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cblascgemv:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cblascgemv:0002:0001">단정밀도 복소수로 행렬을 벡터와 곱합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cblascgemv:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:cblascgemv:0004:0001">iOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblascgemv:0004:0002">iPadOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblascgemv:0004:0003">Mac Catalyst 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblascgemv:0004:0004">macOS 13.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblascgemv:0004:0005">tvOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblascgemv:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblascgemv:0004:0007">watchOS 9.4+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func cblas_cgemv(_ ORDER: CBLAS_ORDER, _ TRANSA: CBLAS_TRANSPOSE, _ M: __LAPACK_int, _ N: __LAPACK_int, _ ALPHA: OpaquePointer, _ A: OpaquePointer?, _ LDA: __LAPACK_int, _ X: OpaquePointer?, _ INCX: __LAPACK_int, _ BETA: OpaquePointer, _ Y: OpaquePointer?, _ INCY: __LAPACK_int)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 함수는 필요 시 행렬 <code>A</code>를 전치한 뒤 <code>A * X</code>를 계산하고, 그 결과 행렬에 <code>alpha</code>를 곱합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">그런 다음 벡터 <code>Y</code>에 <code>beta</code>를 곱합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">그 후 이 두 곱의 합계를 벡터 <code>Y</code>에 저장합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">따라서 다음을 계산합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001"><code>Y←αAX + βY</code></span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">단, <code>A</code>의 전치 형식을 선택적으로 사용할 수 있습니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0012:0001">❗ **중요**: Apple은 BLAS 및 LAPACK 라이브러리를 LAPACK 3.9.1에 맞추기 위해 Accelerate 프레임워크 하에 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0012:0002">iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, watchOS 26부터 라이브러리는 LAPACK 3.12.0에 맞춰져 있습니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0012:0003">이 새 인터페이스는 추가 기능과 함께 새 ILP64 인터페이스도 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0012:0004">새 인터페이스를 사용하려면 Accelerate 또는 vecLib 헤더를 포함하기 전에 <code>ACCELERATE_NEW_LAPACK</code>을 정의합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0012:0005">ILP64 인터페이스의 경우 <code>ACCELERATE_LAPACK_ILP64</code>도 정의합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0012:0006">Swift 프로젝트에서는 Xcode 빌드 설정의 전처리기 매크로로 <code>ACCELERATE_NEW_LAPACK=1</code> 및 <code>ACCELERATE_LAPACK_ILP64=1</code>을 지정합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0013:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0001"><code>ORDER</code>: 행 우선(<code>C</code>) 또는 열 우선(<code>Fortran</code>) 데이터 정렬을 지정합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0002"><code>TRANSA</code>: 행렬 <code>A</code>를 전치할지 여부를 지정합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0003"><code>M</code>: 행렬 <code>A</code>의 행 개수입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0004"><code>N</code>: 행렬 <code>A</code>의 열 개수입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0005"><code>ALPHA</code>: 행렬 <code>A</code>와 벡터 <code>X</code>의 곱에 대한 스케일링 계수입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0006"><code>A</code>: 행렬 <code>A</code>입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0007"><code>LDA</code>: 행렬 <code>A</code>의 첫 번째 차원 크기입니다. <code>A[m][n]</code>과 같은 행렬을 전달할 때 값은 <code>m</code>이어야 합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0008"><code>X</code>: 벡터 <code>X</code>입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0009"><code>INCX</code>: <code>X</code>의 스트라이드입니다. 예를 들어 <code>incX</code>가 7이면 7번째 요소가 사용됩니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0010"><code>BETA</code>: 벡터 <code>Y</code>의 스케일링 계수입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0011"><code>Y</code>: 벡터 <code>Y</code>입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0012"><code>INCY</code>: <code>Y</code>의 스트라이드입니다. 예를 들어 <code>incY</code>가 7이면 7번째 요소가 사용됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0015:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="cblas_caxpy(_:_:_:_:_:_:">func cblas_caxpy(__LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">상수에 벡터를 곱한 뒤 벡터를 더합니다(단정밀도 복소수).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="cblas_ccopy(_:_:_:_:_:">func cblas_ccopy(__LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">벡터를 다른 벡터로 복사합니다(단정밀도 복소수).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="cblas_cgbmv(_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_cgbmv(CBLAS_ORDER, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">일반 밴드 행렬을 스케일링한 뒤 벡터를 곱하고 벡터를 더합니다(단정밀도 복소수).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="cblas_cgemm(_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_cgemm(CBLAS_ORDER, CBLAS_TRANSPOSE, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">두 행렬을 곱합니다(단정밀도 복소수).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="cblas_cgerc(_:_:_:_:_:_:_:_:_:_:">func cblas_cgerc(CBLAS_ORDER, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">벡터 <code>X</code>에 벡터 <code>Y</code>의 켤레 전치를 곱한 뒤 행렬 <code>A</code>를 더합니다(단정밀도 복소수).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="cblas_cgeru(_:_:_:_:_:_:_:_:_:_:">func cblas_cgeru(CBLAS_ORDER, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">벡터 <code>X</code>에 벡터 <code>Y</code>의 전치를 곱한 뒤 행렬 <code>A</code>를 더합니다(단정밀도 복소수).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="cblas_chbmv(_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_chbmv(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">Hermitian 밴드 행렬을 스케일링한 뒤 벡터를 곱하고 벡터를 더합니다(단정밀도 복소수).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="cblas_chemm(_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_chemm(CBLAS_ORDER, CBLAS_SIDE, CBLAS_UPLO, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">두 개의 Hermitian 행렬을 곱한 뒤 세 번째 행렬을 (스케일링하여) 더합니다(단정밀도 복소수).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="cblas_chemv(_:_:_:_:_:_:_:_:_:_:_:">func cblas_chemv(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">Hermitian 행렬을 스케일링하고 벡터와 곱한 다음, 두 번째 (스케일링된) 벡터를 더합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="cblas_cher(_:_:_:_:_:_:_:_:">func cblas_cher(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, Float, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">Hermitian rank 1 업데이트: 스케일링 계수, 벡터 <code>X</code>, <code>X</code>의 켤레 전치의 곱을 행렬 <code>A</code>에 더합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="cblas_cher2(_:_:_:_:_:_:_:_:_:_:">func cblas_cher2(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">Hermitian rank 2 업데이트: 스케일링 계수와 벡터 <code>X</code>, 벡터 <code>Y</code>의 켤레 전치의 곱에 스케일링 계수의 켤레, 벡터 <code>Y</code>, 벡터 <code>X</code>의 켤레 전치의 곱을 더한 결과를 행렬 <code>A</code>에 더합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="cblas_cher2k(_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_cher2k(CBLAS_ORDER, CBLAS_UPLO, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, Float, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">복소 Hermitian 행렬(단 정밀도 복소수)에 대해 rank-2k 업데이트를 수행합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001"><a href="cblas_cherk(_:_:_:_:_:_:_:_:_:_:_:">func cblas_cherk(CBLAS_ORDER, CBLAS_UPLO, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, Float, OpaquePointer?, __LAPACK_int, Float, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">Rank-k 업데이트로 Hermitian 행렬을 전치와 곱한 뒤 두 번째 행렬을 더합니다(단 정밀도).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0042:0001"><a href="cblas_chpmv(_:_:_:_:_:_:_:_:_:_:">func cblas_chpmv(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, OpaquePointer, OpaquePointer?, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">packed Hermitian 행렬을 스케일링하고, 벡터를 곱한 뒤 스케일링된 벡터를 더합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0044:0001"><a href="cblas_chpr(_:_:_:_:_:_:_:">func cblas_chpr(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, Float, OpaquePointer?, __LAPACK_int, OpaquePointer?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0045:0001">벡터에 스케일링을 적용해 그 켤레 전치와의 곱을 계산한 다음, 행렬을 더합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0047:0001">*<a href="https://developer.apple.com/documentation/accelerate/cblas_cgemv(_:_:_:_:_:_:_:_:_:_:_:_:">Apple Developer에서 보기</a>)*</span>

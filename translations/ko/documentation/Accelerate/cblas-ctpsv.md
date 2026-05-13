---
source_path: "documentation/Accelerate/cblas-ctpsv.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/cblas-ctpsv"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:cblasctpsv:0000:0001">cblas_ctpsv(_:_:_:_:_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cblasctpsv:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cblasctpsv:0002:0001">패킹된 삼각 행렬 연립방정식 시스템을 풉니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cblasctpsv:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:cblasctpsv:0004:0001">iOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblasctpsv:0004:0002">iPadOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblasctpsv:0004:0003">Mac Catalyst 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblasctpsv:0004:0004">macOS 13.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblasctpsv:0004:0005">tvOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblasctpsv:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblasctpsv:0004:0007">watchOS 9.4+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func cblas_ctpsv(_ ORDER: CBLAS_ORDER, _ UPLO: CBLAS_UPLO, _ TRANSA: CBLAS_TRANSPOSE, _ DIAG: CBLAS_DIAG, _ N: __LAPACK_int, _ AP: OpaquePointer?, _ X: OpaquePointer?, _ INCX: __LAPACK_int)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001"><code>TransA</code>의 값에 따라 <code>A*X=B</code> 또는 <code>A'*X=B</code> 방정식 시스템을 풉니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0001">❗ **중요**: Apple은 LAPACK 3.9.1과 일치하도록 Accelerate 프레임워크에서 BLAS 및 LAPACK 라이브러리를 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0002">iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26 및 watchOS 26부터 라이브러리는 LAPACK 3.12.0과 일치합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0003">이 새로운 인터페이스는 추가 기능과 함께 새로운 ILP64 인터페이스도 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0004">새 인터페이스를 사용하려면 <code>Accelerate</code> 또는 <code>vecLib</code> 헤더를 포함하기 전에 <code>ACCELERATE_NEW_LAPACK</code>를 정의합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0005">ILP64 인터페이스의 경우 <code>ACCELERATE_LAPACK_ILP64</code>도 정의합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0006">Swift 프로젝트의 경우 Xcode 빌드 설정에서 전처리기 매크로로 <code>ACCELERATE_NEW_LAPACK=1</code> 및 <code>ACCELERATE_LAPACK_ILP64=1</code>을 지정합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0010:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0001"><code>ORDER</code>: 행 우선(C) 또는 열 우선(Fortran) 데이터 정렬을 지정합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0002"><code>UPLO</code>: 행렬의 상삼각형 또는 하삼각형 사용 여부를 지정합니다. 유효 값은 <code>'U'</code> 또는 <code>'L'</code>입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0003"><code>TRANSA</code>: 행렬 A(<code>'N'</code> 또는 <code>'n'</code>)를 사용할지 또는 A의 전치(<code>'T'</code>, <code>'t'</code>, <code>'C'</code>, <code>'c'</code>)를 사용할지 지정합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0004"><code>DIAG</code>: 행렬이 단위 삼각행렬인지 지정합니다. 가능한 값은 <code>'U'</code>(단위 삼각행렬) 또는 <code>'N'</code>(비단위 삼각행렬)입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0005"><code>N</code>: 행렬 <code>A</code>의 차수입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0006"><code>AP</code>: 행렬 <code>A</code>(<code>packed storage</code> 형식).</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0007"><code>X</code>: 시작 시 벡터 <code>B</code>를 포함합니다. 반환 시 벡터 <code>X</code>로 덮어씁니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0008"><code>INCX</code>: <code>X</code> 내부의 stride입니다. 예를 들어 <code>incX</code>가 7이면 7번째 요소마다 사용됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0012:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="cblas_caxpy(_:_:_:_:_:_:">func cblas_caxpy(__LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">상수와 벡터의 곱에 벡터를 더합니다(단정밀도 복소수).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="cblas_ccopy(_:_:_:_:_:">func cblas_ccopy(__LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">벡터를 다른 벡터로 복사합니다(단정밀도 복소수).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="cblas_cgbmv(_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_cgbmv(CBLAS_ORDER, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">일반 밴드 행렬을 스케일링한 뒤 벡터와 곱하고 벡터를 더합니다(단정밀도 복소수).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="cblas_cgemm(_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_cgemm(CBLAS_ORDER, CBLAS_TRANSPOSE, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">두 행렬을 곱합니다(단정밀도 복소수).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="cblas_cgemv(_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_cgemv(CBLAS_ORDER, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">행렬에 벡터를 곱합니다(단정밀도 복소수).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="cblas_cgerc(_:_:_:_:_:_:_:_:_:_:">func cblas_cgerc(CBLAS_ORDER, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">벡터 <code>X</code>에 벡터 <code>Y</code>의 켤레 전치를 곱한 다음 행렬 <code>A</code>를 더합니다(단정밀도 복소수).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="cblas_cgeru(_:_:_:_:_:_:_:_:_:_:">func cblas_cgeru(CBLAS_ORDER, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">벡터 <code>X</code>에 벡터 <code>Y</code>의 전치를 곱한 다음 행렬 <code>A</code>를 더합니다(단정밀도 복소수).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="cblas_chbmv(_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_chbmv(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">에르미트 밴드 행렬을 스케일링한 뒤 벡터와 곱하고 벡터를 더합니다(단정밀도 복소수).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="cblas_chemm(_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_chemm(CBLAS_ORDER, CBLAS_SIDE, CBLAS_UPLO, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">에르미트 행렬 두 개를 곱하고 스케일링된 세 번째 행렬을 더합니다(단정밀도 복소수).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001"><a href="cblas_chemv(_:_:_:_:_:_:_:_:_:_:_:">func cblas_chemv(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">에르미트 행렬을 스케일링한 뒤 벡터와 곱하고 두 번째(스케일링된) 벡터를 더합니다(단정밀도 복소수).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0033:0001"><a href="cblas_cher(_:_:_:_:_:_:_:_:">func cblas_cher(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, Float, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">에르미트 rank 1 업데이트: 스케일링 계수, 벡터 <code>X</code>, 그리고 벡터 <code>X</code>의 켤레 전치의 곱을 행렬 <code>A</code>에 더합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0035:0001"><a href="cblas_cher2(_:_:_:_:_:_:_:_:_:_:">func cblas_cher2(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0036:0001">Hermitian rank-2 업데이트는 스케일링 계수와 벡터 <code>X</code>, 벡터 <code>Y</code>의 켤레 전치행렬의 곱을 더하고, 스케일링 계수의 켤레와 벡터 <code>Y</code> 및 벡터 <code>X</code>의 켤레 전치행렬의 곱을 더해 그 결과를 행렬 <code>A</code>에 더합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0037:0001"><a href="cblas_cher2k(_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_cher2k(CBLAS_ORDER, CBLAS_UPLO, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, Float, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0038:0001">단정밀도 복소수형 Hermitian 행렬에 대한 rank-2k 업데이트를 수행합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0039:0001"><a href="cblas_cherk(_:_:_:_:_:_:_:_:_:_:_:">func cblas_cherk(CBLAS_ORDER, CBLAS_UPLO, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, Float, OpaquePointer?, __LAPACK_int, Float, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0040:0001">Rank-k 업데이트는 Hermitian 행렬을 전치행렬과 곱한 다음 단정밀도로 두 번째 행렬을 더합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0041:0001"><a href="cblas_chpmv(_:_:_:_:_:_:_:_:_:_:">func cblas_chpmv(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, OpaquePointer, OpaquePointer?, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0042:0001">packed 에르미트 행렬의 크기 조정 스케일을 적용한 뒤 벡터와 곱하고, 스케일링된 벡터를 더합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0044:0001">*<a href="https://developer.apple.com/documentation/accelerate/cblas_ctpsv(_:_:_:_:_:_:_:_:">View on Apple Developer</a>)*</span>

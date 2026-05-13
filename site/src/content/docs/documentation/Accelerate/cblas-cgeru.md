---
source_path: "documentation/Accelerate/cblas-cgeru.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/cblas-cgeru"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:cblascgeru:0000:0001">cblas_cgeru(_:_:_:_:_:_:_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cblascgeru:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cblascgeru:0002:0001">벡터 <code>X</code>를 벡터 <code>Y</code>의 전치와 곱한 다음 행렬 <code>A</code>를 더합니다(단정밀도 복소수).</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cblascgeru:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:cblascgeru:0004:0001">iOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblascgeru:0004:0002">iPadOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblascgeru:0004:0003">Mac Catalyst 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblascgeru:0004:0004">macOS 13.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblascgeru:0004:0005">tvOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblascgeru:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblascgeru:0004:0007">watchOS 9.4+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func cblas_cgeru(_ ORDER: CBLAS_ORDER, _ M: __LAPACK_int, _ N: __LAPACK_int, _ ALPHA: OpaquePointer, _ X: OpaquePointer?, _ INCX: __LAPACK_int, _ Y: OpaquePointer?, _ INCY: __LAPACK_int, _ A: OpaquePointer?, _ LDA: __LAPACK_int)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001"><code>alpha*x*y' + A</code>를 계산합니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0001">❗ **Important**: Apple은 BLAS 및 LAPACK 라이브러리를 LAPACK 3.9.1에 맞춰 Accelerate 프레임워크 아래에서 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0002">iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, watchOS 26부터 라이브러리는 LAPACK 3.12.0과 호환됩니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0003">이 새 인터페이스는 추가 기능과 함께 새로운 ILP64 인터페이스를 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0004">새 인터페이스를 사용하려면 Accelerate 또는 vecLib 헤더를 포함하기 전에 <code>ACCELERATE_NEW_LAPACK</code>를 정의합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0005">ILP64 인터페이스의 경우 <code>ACCELERATE_LAPACK_ILP64</code>도 정의합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0006">Swift 프로젝트의 경우 <code>Xcode</code> 빌드 설정에서 전처리기 매크로로 <code>ACCELERATE_NEW_LAPACK=1</code> 및 <code>ACCELERATE_LAPACK_ILP64=1</code>을 지정합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0010:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0001"><code>ORDER</code>: 행 우선(C) 또는 열 우선(Fortran) 데이터 순서를 지정합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0002"><code>M</code>: 행렬 <code>A</code>의 행 수입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0003"><code>N</code>: 행렬 <code>A</code>의 열 수입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0004"><code>ALPHA</code>: 벡터 <code>X</code>의 스케일 계수입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0005"><code>X</code>: 벡터 <code>X</code>입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0006"><code>INCX</code>: <code>X</code> 내의 stride입니다. 예를 들어 <code>incX</code>가 <code>7</code>이면 7개마다 요소를 사용합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0007"><code>Y</code>: 벡터 <code>Y</code>입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0008"><code>INCY</code>: <code>Y</code> 내의 stride입니다. 예를 들어 <code>incY</code>가 <code>7</code>이면 7개마다 요소를 사용합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0009"><code>A</code>: 행렬 <code>A</code>입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0010"><code>LDA</code>: Leading dimension of array containing matrix <code>A</code>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0012:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="cblas_caxpy(_:_:_:_:_:_:">func cblas_caxpy(__LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">Computes a constant times a vector plus a vector (single-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="cblas_ccopy(_:_:_:_:_:">func cblas_ccopy(__LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">Copies a vector to another vector (single-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="cblas_cgbmv(_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_cgbmv(CBLAS_ORDER, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">Scales a general band matrix, then multiplies by a vector, then adds a vector (single-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="cblas_cgemm(_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_cgemm(CBLAS_ORDER, CBLAS_TRANSPOSE, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">Multiplies two matrices (single-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="cblas_cgemv(_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_cgemv(CBLAS_ORDER, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">Multiplies a matrix by a vector (single-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="cblas_cgerc(_:_:_:_:_:_:_:_:_:_:">func cblas_cgerc(CBLAS_ORDER, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">Multiplies vector X by the conjugate transpose of vector Y, then adds matrix A (single-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="cblas_chbmv(_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_chbmv(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">Scales a Hermitian band matrix, then multiplies by a vector, then adds a vector (single-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="cblas_chemm(_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_chemm(CBLAS_ORDER, CBLAS_SIDE, CBLAS_UPLO, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">Multiplies two Hermitian matrices (single-precision complex), then adds a third (with scaling).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="cblas_chemv(_:_:_:_:_:_:_:_:_:_:_:">func cblas_chemv(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">Scales and multiplies a Hermitian matrix by a vector, then adds a second (scaled) vector.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001"><a href="cblas_cher(_:_:_:_:_:_:_:_:">func cblas_cher(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, Float, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">Hermitian rank 1 update: adds the product of a scaling factor, vector <code>X</code>, and the conjugate transpose of <code>X</code> to matrix <code>A</code>.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0033:0001"><a href="cblas_cher2(_:_:_:_:_:_:_:_:_:_:">func cblas_cher2(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">Hermitian rank 2 update: adds the product of a scaling factor, vector <code>X</code>, and the conjugate transpose of vector <code>Y</code> to the product of the conjugate of the scaling factor, vector <code>Y</code>, and the conjugate transpose of vector <code>X</code>, and adds the result to matrix <code>A</code>.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0035:0001"><a href="cblas_cher2k(_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_cher2k(CBLAS_ORDER, CBLAS_UPLO, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, Float, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0036:0001">Performs a rank-2k update of a complex Hermitian matrix (single-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0037:0001"><a href="cblas_cherk(_:_:_:_:_:_:_:_:_:_:_:">func cblas_cherk(CBLAS_ORDER, CBLAS_UPLO, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, Float, OpaquePointer?, __LAPACK_int, Float, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0038:0001">Rank-k update—multiplies a Hermitian matrix by its transpose and adds a second matrix (single precision).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0039:0001"><a href="cblas_chpmv(_:_:_:_:_:_:_:_:_:_:">func cblas_chpmv(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, OpaquePointer, OpaquePointer?, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0040:0001">Scales a packed hermitian matrix, multiplies it by a vector, and adds a scaled vector.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0041:0001"><a href="cblas_chpr(_:_:_:_:_:_:_:">func cblas_chpr(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, Float, OpaquePointer?, __LAPACK_int, OpaquePointer?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0042:0001">Scales and multiplies a vector times its conjugate transpose, then adds a matrix.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0044:0001">*<a href="https://developer.apple.com/documentation/accelerate/cblas_cgeru(_:_:_:_:_:_:_:_:_:_:">View on Apple Developer</a>)*</span>

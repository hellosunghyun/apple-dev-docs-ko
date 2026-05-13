---
source_path: "documentation/Accelerate/cblas-chpr.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/cblas-chpr"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:cblaschpr:0000:0001">cblas_chpr(_:_:_:_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cblaschpr:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cblaschpr:0002:0001">Scales and multiplies a vector times its conjugate transpose, then adds a matrix.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cblaschpr:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:cblaschpr:0004:0001">iOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblaschpr:0004:0002">iPadOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblaschpr:0004:0003">Mac Catalyst 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblaschpr:0004:0004">macOS 13.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblaschpr:0004:0005">tvOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblaschpr:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblaschpr:0004:0007">watchOS 9.4+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func cblas_chpr(_ ORDER: CBLAS_ORDER, _ UPLO: CBLAS_UPLO, _ N: __LAPACK_int, _ ALPHA: Float, _ X: OpaquePointer?, _ INCX: __LAPACK_int, _ A: OpaquePointer?)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">The property returns <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_0@@</a> if video stabilization is currently in use; otherwise <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_1@@</a>.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0001">**Note**: 현재 캡처 세션의 <a href="avcapturesession/sessionpreset.md">@@TOKEN_0@@</a> 속성이나 기본 캡처 장치의 <a href="avcapturedevice/activeformat.md">@@TOKEN_1@@</a> 속성이 변경되면 이 속성의 값이 변경될 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0002">모든 기기와 캡처 형식이 브래킷 캡처를 지원하지는 않습니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0003">현재 장치 또는 활성 형식이 브래킷 캡처를 지원하지 않으면 이 속성의 값은 0입니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0004">To use the new interfaces, define <code>ACCELERATE_NEW_LAPACK</code> before including the Accelerate or vecLib headers.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0005">For ILP64 interfaces, also define <code>ACCELERATE_LAPACK_ILP64</code>.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0006">For Swift projects, specify <code>ACCELERATE_NEW_LAPACK=1</code> and <code>ACCELERATE_LAPACK_ILP64=1</code> as preprocessor macros in Xcode build settings.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0010:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0001"><code>ORDER</code>: Specifies row-major (C) or column-major (Fortran) data ordering.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0002"><code>UPLO</code>: Specifies whether to use the upper or lower triangle from the matrix. Valid values are <code>'U'</code> or <code>'L'</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0003"><code>N</code>: Order of matrix <code>A</code> and the number of elements in vector <code>x</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0004"><code>ALPHA</code>: Scaling factor that vector <code>x</code> is multiplied by.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0005"><code>X</code>: Vector <code>x</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0006"><code>INCX</code>: Stride within <code>X</code>. For example, if <code>incX</code> is 7, every 7th element is used.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0007"><code>A</code>: Matrix <code>A</code>. Overwritten by results on return.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0012:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="cblas_caxpy(_:_:_:_:_:_:">func cblas_caxpy(__LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">현재 캡처 중인 정지 이미지가 정지 이미지 안정화를 지원하는지 나타내는 불리언 값입니다.</span>

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

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="cblas_cgeru(_:_:_:_:_:_:_:_:_:_:">func cblas_cgeru(CBLAS_ORDER, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">Multiplies vector X by the transpose of vector Y, then adds matrix A (single-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="cblas_chbmv(_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_chbmv(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">Scales a Hermitian band matrix, then multiplies by a vector, then adds a vector (single-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="cblas_chemm(_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_chemm(CBLAS_ORDER, CBLAS_SIDE, CBLAS_UPLO, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">Multiplies two Hermitian matrices (single-precision complex), then adds a third (with scaling).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001"><a href="cblas_chemv(_:_:_:_:_:_:_:_:_:_:_:">func cblas_chemv(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">Scales and multiplies a Hermitian matrix by a vector, then adds a second (scaled) vector.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0033:0001"><a href="cblas_cher(_:_:_:_:_:_:_:_:">func cblas_cher(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, Float, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">Hermitian rank 1 update: adds the product of a scaling factor, vector <code>X</code>, and the conjugate transpose of <code>X</code> to matrix <code>A</code>.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0035:0001"><a href="cblas_cher2(_:_:_:_:_:_:_:_:_:_:">func cblas_cher2(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0036:0001">Hermitian rank 2 update: adds the product of a scaling factor, vector <code>X</code>, and the conjugate transpose of vector <code>Y</code> to the product of the conjugate of the scaling factor, vector <code>Y</code>, and the conjugate transpose of vector <code>X</code>, and adds the result to matrix <code>A</code>.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0037:0001"><a href="cblas_cher2k(_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_cher2k(CBLAS_ORDER, CBLAS_UPLO, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, Float, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0038:0001">Performs a rank-2k update of a complex Hermitian matrix (single-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0039:0001"><a href="cblas_cherk(_:_:_:_:_:_:_:_:_:_:_:">func cblas_cherk(CBLAS_ORDER, CBLAS_UPLO, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, Float, OpaquePointer?, __LAPACK_int, Float, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0040:0001">Rank-k 업데이트는 Hermitian 행렬을 전치와 곱한 다음 두 번째 행렬(단일 정밀도)을 더합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0041:0001"><a href="cblas_chpmv(_:_:_:_:_:_:_:_:_:_:">func cblas_chpmv(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, OpaquePointer, OpaquePointer?, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0042:0001">압축된 Hermitian 행렬을 스케일링하고 벡터와 곱한 뒤 스케일된 벡터를 더합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0044:0001">*<a href="https://developer.apple.com/documentation/accelerate/cblas_chpr(_:_:_:_:_:_:_:">Apple Developer에서 보기</a>)*</span>

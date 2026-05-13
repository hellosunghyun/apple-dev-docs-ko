---
source_path: "documentation/Accelerate/cblas-cgemm.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/cblas-cgemm"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:cblascgemm:0000:0001">cblas_cgemm(_:_:_:_:_:_:_:_:_:_:_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cblascgemm:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cblascgemm:0002:0001">Multiplies two matrices (single-precision complex).</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cblascgemm:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:cblascgemm:0004:0001">iOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblascgemm:0004:0002">iPadOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblascgemm:0004:0003">Mac Catalyst 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblascgemm:0004:0004">macOS 13.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblascgemm:0004:0005">tvOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblascgemm:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblascgemm:0004:0007">watchOS 9.4+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func cblas_cgemm(_ ORDER: CBLAS_ORDER, _ TRANSA: CBLAS_TRANSPOSE, _ TRANSB: CBLAS_TRANSPOSE, _ M: __LAPACK_int, _ N: __LAPACK_int, _ K: __LAPACK_int, _ ALPHA: OpaquePointer, _ A: OpaquePointer?, _ LDA: __LAPACK_int, _ B: OpaquePointer?, _ LDB: __LAPACK_int, _ BETA: OpaquePointer, _ C: OpaquePointer?, _ LDC: __LAPACK_int)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">The delegate is an object conforming to the <a href="avcapturefileoutputdelegate.md">@@TOKEN_0@@</a> protocol that will be able to monitor and control recording along exact sample boundaries.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">앱에서 <a href="avcapturedevice/isfacedrivenautoexposureenabled.md">@@TOKEN_0@@</a>의 상태를 명시적으로 설정해야 하는 경우 이 값을 <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_1@@</a>로 설정합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">It stores the sum of these two products in matrix <code>C</code>.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">The system normalizes gain values to the minimum channel value to avoid brightness changes (for example, <code>R:2 G:2 B:4</code> normalizes to <code>R:1 G:1 B:2</code>).</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001"><code>C←αAB + βC</code></span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">or</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0001"><code>C←αBA + βC</code></span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0013:0001">with optional use of transposed forms of <code>A</code>, <code>B</code>, or both.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0014:0001">❗ **Important**: Apple provides the BLAS and LAPACK libraries under the Accelerate framework to be in line with LAPACK 3.9.1.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0014:0002">Starting with iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, and watchOS 26, the libraries are in line with LAPACK 3.12.0.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0014:0003">These new interfaces provide additional functionality, as well as a new ILP64 interface.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0014:0004">To use the new interfaces, define <code>ACCELERATE_NEW_LAPACK</code> before including the Accelerate or vecLib headers.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0014:0005">For ILP64 interfaces, also define <code>ACCELERATE_LAPACK_ILP64</code>.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0014:0006">For Swift projects, specify <code>ACCELERATE_NEW_LAPACK=1</code> and <code>ACCELERATE_LAPACK_ILP64=1</code> as preprocessor macros in Xcode build settings.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0015:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0016:0001"><code>ORDER</code>: Specifies row-major (C) or column-major (Fortran) data ordering.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0016:0002"><code>TRANSA</code>: Specifies whether to transpose matrix <code>A</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0016:0003"><code>TRANSB</code>: Specifies whether to transpose matrix <code>B</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0016:0004"><code>M</code>: Number of rows in matrices <code>A</code> and <code>C</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0016:0005"><code>N</code>: Number of columns in matrices <code>B</code> and <code>C</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0016:0006"><code>K</code>: Number of columns in matrix <code>A</code>; number of rows in matrix <code>B</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0016:0007"><code>ALPHA</code>: Scaling factor for the product of matrices A and B.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0016:0008"><code>A</code>: Matrix A.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0016:0009"><code>LDA</code>: The size of the first dimension of matrix <code>A</code>; if you are passing a matrix <code>A[m][n]</code>, the value should be <code>m</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0016:0010"><code>B</code>: Matrix B.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0016:0011"><code>LDB</code>: The size of the first dimension of matrix <code>B</code>; if you are passing a matrix <code>B[m][n]</code>, the value should be <code>m</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0016:0012"><code>BETA</code>: Scaling factor for matrix C.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0016:0013"><code>C</code>: Matrix C.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0016:0014"><code>LDC</code>: The size of the first dimension of matrix <code>C</code>; if you are passing a matrix <code>C[m][n]</code>, the value should be <code>m</code>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0017:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="cblas_caxpy(_:_:_:_:_:_:">func cblas_caxpy(__LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">Computes a constant times a vector plus a vector (single-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avcapturedevice/setwhitebalancemodelocked(whitebalancetemperatureandtintvalues:handler:">func setWhiteBalanceModeLocked(whiteBalanceTemperatureAndTintValues: AVCaptureDevice.WhiteBalanceTemperatureAndTintValues, handler: ((CMTime) -&gt; Void)?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">Copies a vector to another vector (single-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="cblas_cgbmv(_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_cgbmv(CBLAS_ORDER, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">Scales a general band matrix, then multiplies by a vector, then adds a vector (single-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="cblas_cgemv(_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_cgemv(CBLAS_ORDER, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">Multiplies a matrix by a vector (single-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="cblas_cgerc(_:_:_:_:_:_:_:_:_:_:">func cblas_cgerc(CBLAS_ORDER, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">Multiplies vector X by the conjugate transpose of vector Y, then adds matrix A (single-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="cblas_cgeru(_:_:_:_:_:_:_:_:_:_:">func cblas_cgeru(CBLAS_ORDER, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">Multiplies vector X by the transpose of vector Y, then adds matrix A (single-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="cblas_chbmv(_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_chbmv(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">Scales a Hermitian band matrix, then multiplies by a vector, then adds a vector (single-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="cblas_chemm(_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_chemm(CBLAS_ORDER, CBLAS_SIDE, CBLAS_UPLO, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">Multiplies two Hermitian matrices (single-precision complex), then adds a third (with scaling).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="cblas_chemv(_:_:_:_:_:_:_:_:_:_:_:">func cblas_chemv(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">Scales and multiplies a Hermitian matrix by a vector, then adds a second (scaled) vector.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="cblas_cher(_:_:_:_:_:_:_:_:">func cblas_cher(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, Float, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">Hermitian rank 1 update: adds the product of a scaling factor, vector <code>X</code>, and the conjugate transpose of <code>X</code> to matrix <code>A</code>.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="cblas_cher2(_:_:_:_:_:_:_:_:_:_:">func cblas_cher2(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">Hermitian rank 2 update: adds the product of a scaling factor, vector <code>X</code>, and the conjugate transpose of vector <code>Y</code> to the product of the conjugate of the scaling factor, vector <code>Y</code>, and the conjugate transpose of vector <code>X</code>, and adds the result to matrix <code>A</code>.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001"><a href="cblas_cher2k(_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_cher2k(CBLAS_ORDER, CBLAS_UPLO, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, Float, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">Performs a rank-2k update of a complex Hermitian matrix (single-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0042:0001"><a href="cblas_cherk(_:_:_:_:_:_:_:_:_:_:_:">func cblas_cherk(CBLAS_ORDER, CBLAS_UPLO, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, Float, OpaquePointer?, __LAPACK_int, Float, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">Rank-k update—multiplies a Hermitian matrix by its transpose and adds a second matrix (single precision).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0044:0001"><a href="cblas_chpmv(_:_:_:_:_:_:_:_:_:_:">func cblas_chpmv(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, OpaquePointer, OpaquePointer?, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0045:0001">Scales a packed hermitian matrix, multiplies it by a vector, and adds a scaled vector.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0046:0001"><a href="cblas_chpr(_:_:_:_:_:_:_:">func cblas_chpr(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, Float, OpaquePointer?, __LAPACK_int, OpaquePointer?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0047:0001">Scales and multiplies a vector times its conjugate transpose, then adds a matrix.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0049:0001">*<a href="https://developer.apple.com/documentation/accelerate/cblas_cgemm(_:_:_:_:_:_:_:_:_:_:_:_:_:_:">View on Apple Developer</a>)*</span>

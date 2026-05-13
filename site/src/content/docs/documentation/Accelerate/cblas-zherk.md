---
source_path: "documentation/Accelerate/cblas-zherk.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/cblas-zherk"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:cblaszherk:0000:0001">cblas_zherk(_:_:_:_:_:_:_:_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cblaszherk:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cblaszherk:0002:0001">Rank-k update—multiplies a Hermitian matrix by its transpose and adds a second matrix (single precision).</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cblaszherk:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:cblaszherk:0004:0001">iOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblaszherk:0004:0002">iPadOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblaszherk:0004:0003">Mac Catalyst 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblaszherk:0004:0004">macOS 13.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblaszherk:0004:0005">tvOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblaszherk:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblaszherk:0004:0007">watchOS 9.4+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func cblas_zherk(_ ORDER: CBLAS_ORDER, _ UPLO: CBLAS_UPLO, _ TRANS: CBLAS_TRANSPOSE, _ N: __LAPACK_int, _ K: __LAPACK_int, _ ALPHA: Double, _ A: OpaquePointer?, _ LDA: __LAPACK_int, _ BETA: Double, _ C: OpaquePointer?, _ LDC: __LAPACK_int)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">This property specifies the duration, in seconds, that the <a href="avcapturetimecodegenerator.md">@@TOKEN_0@@</a> will attempt to synchronize with a timecode source before timing out if synchronization cannot be achieved.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0001">❗ **Important**: Apple provides the BLAS and LAPACK libraries under the Accelerate framework to be in line with LAPACK 3.9.1.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0002">Starting with iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, and watchOS 26, the libraries are in line with LAPACK 3.12.0.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0003">These new interfaces provide additional functionality, as well as a new ILP64 interface.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0004">To use the new interfaces, define <code>ACCELERATE_NEW_LAPACK</code> before including the Accelerate or vecLib headers.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0005">For ILP64 interfaces, also define <code>ACCELERATE_LAPACK_ILP64</code>.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0006">For Swift projects, specify <code>ACCELERATE_NEW_LAPACK=1</code> and <code>ACCELERATE_LAPACK_ILP64=1</code> as preprocessor macros in Xcode build settings.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0010:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0001"><code>ORDER</code>: Specifies row-major (C) or column-major (Fortran) data ordering.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0002"><code>UPLO</code>: Specifies whether to use the upper or lower triangle from the matrix. Valid values are <code>'U'</code> or <code>'L'</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0003"><code>TRANS</code>: Specifies whether to use matrix A (<code>'N'</code> or <code>'n'</code>) or the conjugate transpose of A (<code>'C'</code> or <code>'c'</code>).</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0004"><code>N</code>: Order of matrix <code>C</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0005"><code>K</code>: Number of columns in matrix <code>A</code> (or number of rows if matrix <code>A</code> is transposed).</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0006"><code>ALPHA</code>: Scaling factor for matrix <code>A</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0007"><code>A</code>: Matrix <code>A</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0008"><code>LDA</code>: Leading dimension of array containing matrix <code>A</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0009"><code>BETA</code>: Scaling factor for matrix <code>C</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0010"><code>C</code>: Matrix <code>C</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0011"><code>LDC</code>: Leading dimension of array containing matrix <code>C</code>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0012:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="cblas_dzasum(_:_:_:">func cblas_dzasum(__LAPACK_int, OpaquePointer?, __LAPACK_int) -&gt; Double</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">자동 노출 알고리즘에 정의된 최대 노출 기간(초)입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="cblas_dznrm2(_:_:_:">func cblas_dznrm2(__LAPACK_int, OpaquePointer?, __LAPACK_int) -&gt; Double</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">현재 노출 ISO 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avcapturedevice/setexposuremodecustom(duration:iso:completionhandler:">func setExposureModeCustom(duration: CMTime, iso: Float, completionHandler: ((CMTime) -&gt; Void)?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">노출 모드를 사용자 지정 상태로 설정하고, 노출 기간과 ISO를 지정된 값으로 고정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="cblas_zcopy(_:_:_:_:_:">func cblas_zcopy(__LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">Copies a vector to another vector (double-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="cblas_zdrot(_:_:_:_:_:_:_:">func cblas_zdrot(__LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, Double, Double)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">Applies a Givens rotation matrix to a pair of complex vectors.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="cblas_zdscal(_:_:_:_:">func cblas_zdscal(__LAPACK_int, Double, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">Multiplies each element of a vector by a constant (double-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="cblas_zgbmv(_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_zgbmv(CBLAS_ORDER, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">일반 밴드 행렬을 스케일링한 다음 벡터를 곱하고 벡터를 더합니다(배정밀도 복소수).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="cblas_zgemm(_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_zgemm(CBLAS_ORDER, CBLAS_TRANSPOSE, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">두 행렬을 곱합니다(배정밀도 복소수).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="cblas_zgemv(_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_zgemv(CBLAS_ORDER, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">행렬을 벡터로 곱합니다(배정밀도 복소수).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001"><a href="cblas_zgerc(_:_:_:_:_:_:_:_:_:_:">func cblas_zgerc(CBLAS_ORDER, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">벡터 X를 벡터 Y의 켤레 전치와 곱한 다음 행렬 A를 더합니다(배정밀도 복소수).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0033:0001"><a href="cblas_zgeru(_:_:_:_:_:_:_:_:_:_:">func cblas_zgeru(CBLAS_ORDER, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">벡터 X를 벡터 Y의 전치와 곱한 다음 행렬 A를 더합니다(배정밀도 복소수).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0035:0001"><a href="cblas_zhbmv(_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_zhbmv(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0036:0001">에르미트 밴드 행렬을 스케일링한 다음 벡터를 곱하고 벡터를 더합니다(배정밀도 복소수).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0037:0001"><a href="cblas_zhemm(_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_zhemm(CBLAS_ORDER, CBLAS_SIDE, CBLAS_UPLO, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0038:0001">두 개의 에르미트 행렬을 곱합니다(배정밀도 복소수).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0039:0001"><a href="cblas_zhemv(_:_:_:_:_:_:_:_:_:_:_:">func cblas_zhemv(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0040:0001">에르미트 행렬을 스케일링하고 벡터를 곱한 다음 두 번째(스케일링된) 벡터를 더합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0041:0001"><a href="cblas_zher(_:_:_:_:_:_:_:_:">func cblas_zher(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, Double, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0042:0001">스케일링 계수, 벡터 <code>X</code>, 그리고 벡터 <code>X</code>의 켤레 전치의 곱을 행렬 <code>A</code>에 더합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0044:0001">*<a href="https://developer.apple.com/documentation/accelerate/cblas_zherk(_:_:_:_:_:_:_:_:_:_:_:">View on Apple Developer</a>)*</span>

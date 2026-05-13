---
source_path: "documentation/Accelerate/cblas-ztbmv.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/cblas-ztbmv"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:cblasztbmv:0000:0001">cblas_ztbmv(_:_:_:_:_:_:_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cblasztbmv:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cblasztbmv:0002:0001">Scales a triangular band matrix, then multiplies by a vector (double-precision complex).</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cblasztbmv:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:cblasztbmv:0004:0001">iOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblasztbmv:0004:0002">iPadOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblasztbmv:0004:0003">Mac Catalyst 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblasztbmv:0004:0004">macOS 13.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblasztbmv:0004:0005">tvOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblasztbmv:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblasztbmv:0004:0007">watchOS 9.4+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func cblas_ztbmv(_ ORDER: CBLAS_ORDER, _ UPLO: CBLAS_UPLO, _ TRANSA: CBLAS_TRANSPOSE, _ DIAG: CBLAS_DIAG, _ N: __LAPACK_int, _ K: __LAPACK_int, _ A: OpaquePointer?, _ LDA: __LAPACK_int, _ X: OpaquePointer?, _ INCX: __LAPACK_int)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">유효성 검사 중에 비디오 구성은 대리자가 있는 경우 문제 지점의 참조와 함께 비디오 구성의 유효성 검사 대리자를 호출합니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0001">❗ **Important**: Apple provides the BLAS and LAPACK libraries under the Accelerate framework to be in line with LAPACK 3.9.1.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0002">Starting with iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, and watchOS 26, the libraries are in line with LAPACK 3.12.0.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0003">These new interfaces provide additional functionality, as well as a new ILP64 interface.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0004">To use the new interfaces, define <code>ACCELERATE_NEW_LAPACK</code> before including the Accelerate or vecLib headers.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0005">For ILP64 interfaces, also define <code>ACCELERATE_LAPACK_ILP64</code>.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0006">For Swift projects, specify <code>ACCELERATE_NEW_LAPACK=1</code> and <code>ACCELERATE_LAPACK_ILP64=1</code> as preprocessor macros in Xcode build settings.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0010:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0001"><code>asset</code>: 지시사항의 시간 범위를 에셋의 재생 기간과 비교하고 레이어 지시사항의 트랙 ID를 에셋의 트랙과 비교해 유효성 검사해야 하는 경우 사용하는 에셋 객체입니다. 이 유효성 검사를 건너뛰려면 <code>nil</code>을 전달합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0002"><code>timeRange</code>: 지시사항을 유효성 검사할 시간 범위입니다. 메서드는 이 시간 범위와 겹치는 시간 범위를 가진 지시사항만 유효성 검사합니다. 재생 또는 기타 처리에 사용할 수 있는 모든 지시사항을 시간 범위와 무관하게 검증하려면 <code>CMTimeRange(start: .zero, duration: .positiveInfinity)</code>를 전달합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0003"><code>validationDelegate</code>: 처리 중 비디오 구성의 문제 구간에 대한 자세한 정보를 수신하기 위해 <a href="avvideocompositionvalidationhandling.md">@@TOKEN_1@@</a> 프로토콜을 채택하는 객체입니다. 상세 정보가 필요하지 않으면 <code>nil</code>을 전달합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0004"><code>completionHandler</code>: 시스템이 비디오 구성의 유효성을 판별했을 때 호출하는 블록입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0005"><code>N</code>: The order of matrix <code>A</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0006"><code>K</code>: Half-bandwidth of matrix <code>A</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0007"><code>A</code>: Matrix <code>A</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0008"><code>LDA</code>: The leading dimension of array containing matrix <code>A</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0009"><code>X</code>: Vector <code>x</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0010"><code>INCX</code>: Stride within <code>X</code>. For example, if <code>incX</code> is 7, every 7th element is used.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0012:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001">[func isValid(for: [AVAssetTrack], assetDuration: CMTime, timeRange: CMTimeRange, validationDelegate: (any AVVideoCompositionValidationHandling)?) -&gt; Bool](avvideocomposition/isvalid(for:assetduration:timerange:validationdelegate:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">구성의 지시사항 시간 범위가 유효성 검사 요구 사항을 준수하는지 나타냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="cblas_dznrm2(_:_:_:">func cblas_dznrm2(__LAPACK_int, OpaquePointer?, __LAPACK_int) -&gt; Double</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">특정 오류가 발견된 후 비디오 구성의 유효성 검사를 계속 진행할지 여부를 나타내기 위해 구현할 수 있는 메서드입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avvideocomposition/isvalid(for:timerange:validationdelegate:">func isValid(for: AVAsset?, timeRange: CMTimeRange, validationDelegate: (any AVVideoCompositionValidationHandling)?) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">구성의 지시사항 시간 범위가 유효성 검사 요구 사항을 준수하는지 나타냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="cblas_zcopy(_:_:_:_:_:">func cblas_zcopy(__LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avvideocomposition/determinevalidity(for:timerange:validationdelegate:completionhandler:">View on Apple Developer</a>)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="cblas_zdrot(_:_:_:_:_:_:_:">func cblas_zdrot(__LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, Double, Double)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">Applies a Givens rotation matrix to a pair of complex vectors.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="cblas_zdscal(_:_:_:_:">func cblas_zdscal(__LAPACK_int, Double, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">Multiplies each element of a vector by a constant (double-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="cblas_zgbmv(_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_zgbmv(CBLAS_ORDER, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">Scales a general band matrix, then multiplies by a vector, then adds a vector (double-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="cblas_zgemm(_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_zgemm(CBLAS_ORDER, CBLAS_TRANSPOSE, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">Multiplies two matrices (double-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="cblas_zgemv(_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_zgemv(CBLAS_ORDER, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">Multiplies a matrix by a vector (double-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001"><a href="cblas_zgerc(_:_:_:_:_:_:_:_:_:_:">func cblas_zgerc(CBLAS_ORDER, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">Multiplies vector X by the conjugate transpose of vector Y, then adds matrix A (double-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0033:0001"><a href="cblas_zgeru(_:_:_:_:_:_:_:_:_:_:">func cblas_zgeru(CBLAS_ORDER, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">Multiplies vector X by the transpose of vector Y, then adds matrix A (double-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0035:0001"><a href="cblas_zhbmv(_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_zhbmv(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0036:0001">Scales a Hermitian band matrix, then multiplies by a vector, then adds a vector (double-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0037:0001"><a href="cblas_zhemm(_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_zhemm(CBLAS_ORDER, CBLAS_SIDE, CBLAS_UPLO, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0038:0001">Multiplies two Hermitian matrices (double-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0039:0001"><a href="cblas_zhemv(_:_:_:_:_:_:_:_:_:_:_:">func cblas_zhemv(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0040:0001">Scales and multiplies a Hermitian matrix by a vector, then adds a second (scaled) vector.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0041:0001"><a href="cblas_zher(_:_:_:_:_:_:_:_:">func cblas_zher(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, Double, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0042:0001">Adds the product of a scaling factor, vector <code>X</code>, and the conjugate transpose of <code>X</code> to matrix <code>A</code>.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0044:0001">*<a href="https://developer.apple.com/documentation/accelerate/cblas_ztbmv(_:_:_:_:_:_:_:_:_:_:">View on Apple Developer</a>)*</span>

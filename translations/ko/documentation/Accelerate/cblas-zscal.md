---
source_path: "documentation/Accelerate/cblas-zscal.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/cblas-zscal"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:cblaszscal:0000:0001">cblas_zscal(_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cblaszscal:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cblaszscal:0002:0001">Multiplies each element of a vector by a constant (double-precision complex).</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cblaszscal:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:cblaszscal:0004:0001">iOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblaszscal:0004:0002">iPadOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblaszscal:0004:0003">Mac Catalyst 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblaszscal:0004:0004">macOS 13.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblaszscal:0004:0005">tvOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblaszscal:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblaszscal:0004:0007">watchOS 9.4+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func cblas_zscal(_ N: __LAPACK_int, _ ALPHA: OpaquePointer, _ X: OpaquePointer?, _ INCX: __LAPACK_int)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0008:0001">❗ **Important**: Apple provides the BLAS and LAPACK libraries under the Accelerate framework to be in line with LAPACK 3.9.1.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0008:0002">Starting with iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, and watchOS 26, the libraries are in line with LAPACK 3.12.0.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0008:0003">These new interfaces provide additional functionality, as well as a new ILP64 interface.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0008:0004">To use the new interfaces, define <code>ACCELERATE_NEW_LAPACK</code> before including the Accelerate or vecLib headers.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0008:0005">For ILP64 interfaces, also define <code>ACCELERATE_LAPACK_ILP64</code>.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0008:0006">For Swift projects, specify <code>ACCELERATE_NEW_LAPACK=1</code> and <code>ACCELERATE_LAPACK_ILP64=1</code> as preprocessor macros in Xcode build settings.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>captureOutput</code>: 데이터를 검색할 capture output입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>ALPHA</code>: The constant scaling factor.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0003"><code>X</code>: Vector <code>x</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0004"><code>INCX</code>: Stride within <code>X</code>. For example, if <code>incX</code> is 7, every 7th element is used.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="cblas_dzasum(_:_:_:">func cblas_dzasum(__LAPACK_int, OpaquePointer?, __LAPACK_int) -&gt; Double</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">시스템이 프레임을 드롭한 이유를 정의하는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcapturesynchronizeddatacollection/subscript(_:">subscript(AVCaptureOutput) -&gt; AVCaptureSynchronizedData?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">캡처 디바이스의 활성 비디오 최소 프레임 지속 시간에 수정자 역할을 하는 시간 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="cblas_zaxpy(_:_:_:_:_:_:">func cblas_zaxpy(__LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturesynchronizeddatacollection/synchronizeddata(for:">View on Apple Developer</a>)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="cblas_zcopy(_:_:_:_:_:">func cblas_zcopy(__LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">Copies a vector to another vector (double-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001">[func invalidatePersistableContentKey(Data, options: [AVContentKeySessionServerPlaybackContextOption : Any]?, completionHandler: (Data?, (any Error)?) -&gt; Void)](avcontentkeysession/invalidatepersistablecontentkey(_:options:completionhandler:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">영구 저장 가능한 콘텐츠 키를 무효화하고, 무효화 요청 결과를 검증하기 위해 보안 서버 재생 컨텍스트(SPC)를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001">[func invalidateAllPersistableContentKeys(forApp: Data, options: [AVContentKeySessionServerPlaybackContextOption : Any]?, completionHandler: (Data?, (any Error)?) -&gt; Void)](avcontentkeysession/invalidateallpersistablecontentkeys(forapp:options:completionhandler:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">앱의 모든 영구 저장 가능한 콘텐츠 키를 무효화하고, 무효화 요청 결과를 검증하기 위해 보안 서버 재생 컨텍스트(SPC)를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="cblas_zgbmv(_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_zgbmv(CBLAS_ORDER, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">Scales a general band matrix, then multiplies by a vector, then adds a vector (double-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="cblas_zgemm(_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_zgemm(CBLAS_ORDER, CBLAS_TRANSPOSE, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">Multiplies two matrices (double-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="cblas_zgemv(_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_zgemv(CBLAS_ORDER, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">Multiplies a matrix by a vector (double-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="cblas_zgerc(_:_:_:_:_:_:_:_:_:_:">func cblas_zgerc(CBLAS_ORDER, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">Multiplies vector X by the conjugate transpose of vector Y, then adds matrix A (double-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="cblas_zgeru(_:_:_:_:_:_:_:_:_:_:">func cblas_zgeru(CBLAS_ORDER, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">Multiplies vector X by the transpose of vector Y, then adds matrix A (double-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="cblas_zhbmv(_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_zhbmv(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">Scales a Hermitian band matrix, then multiplies by a vector, then adds a vector (double-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="cblas_zhemm(_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_zhemm(CBLAS_ORDER, CBLAS_SIDE, CBLAS_UPLO, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">Multiplies two Hermitian matrices (double-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="cblas_zhemv(_:_:_:_:_:_:_:_:_:_:_:">func cblas_zhemv(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">Scales and multiplies a Hermitian matrix by a vector, then adds a second (scaled) vector.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001"><a href="cblas_zher(_:_:_:_:_:_:_:_:">func cblas_zher(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, Double, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">Adds the product of a scaling factor, vector <code>X</code>, and the conjugate transpose of <code>X</code> to matrix <code>A</code>.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">*<a href="https://developer.apple.com/documentation/accelerate/cblas_zscal(_:_:_:_:">View on Apple Developer</a>)*</span>

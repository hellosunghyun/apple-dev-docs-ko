---
source_path: "documentation/Accelerate/cblas-dznrm2.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/cblas-dznrm2"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:cblasdznrm2:0000:0001">cblas_dznrm2(_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cblasdznrm2:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cblasdznrm2:0002:0001">Computes the unitary norm of a vector (double-precision complex).</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cblasdznrm2:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:cblasdznrm2:0004:0001">iOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblasdznrm2:0004:0002">iPadOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblasdznrm2:0004:0003">Mac Catalyst 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblasdznrm2:0004:0004">macOS 13.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblasdznrm2:0004:0005">tvOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblasdznrm2:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblasdznrm2:0004:0007">watchOS 9.4+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func cblas_dznrm2(_ N: __LAPACK_int, _ X: OpaquePointer?, _ INCX: __LAPACK_int) -> Double
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0008:0001">❗ **Important**: Apple provides the BLAS and LAPACK libraries under the Accelerate framework to be in line with LAPACK 3.9.1.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0008:0002">Starting with iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, and watchOS 26, the libraries are in line with LAPACK 3.12.0.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0008:0003">These new interfaces provide additional functionality, as well as a new ILP64 interface.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0008:0004">To use the new interfaces, define <code>ACCELERATE_NEW_LAPACK</code> before including the Accelerate or vecLib headers.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0008:0005">For ILP64 interfaces, also define <code>ACCELERATE_LAPACK_ILP64</code>.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0008:0006">For Swift projects, specify <code>ACCELERATE_NEW_LAPACK=1</code> and <code>ACCELERATE_LAPACK_ILP64=1</code> as preprocessor macros in Xcode build settings.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>N</code>: Length of vector <code>X</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>X</code>: Vector <code>X</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0003"><code>INCX</code>: Stride within <code>X</code>. For example, if <code>incX</code> is 7, every 7th element is used.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avmetadatakey/isouserdatakeydate.md">static var airPlayReceiverRequiresInternet: AVError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">AirPlay 수신기가 작동하려면 인터넷 연결이 필요합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="averror-swift.struct/airplayreceivertemporarilyunavailable.md">static var airPlayReceiverTemporarilyUnavailable: AVError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">AirPlay 수신기를 일시적으로 사용할 수 없습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="averror-swift.struct/applicationisnotauthorizedtousedevice.md">static var applicationIsNotAuthorizedToUseDevice: AVError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">사용자가 이 앱의 미디어 캡처 권한을 거부했습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="averror-swift.struct/applicationisnotauthorized.md">static var applicationIsNotAuthorized: AVError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">고정 초점 길이의 내장 카메라 3개(초광각 1개, 광각 1개, 망원 1개)로 구성된 카메라 디바이스 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="averror-swift.struct/autowhitebalancenotlocked.md">static let continuityCamera: AVCaptureDevice.DeviceType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">Continuity Camera 디바이스 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="averror-swift.struct/contentisnotauthorized.md">static let builtInDuoCamera: AVCaptureDevice.DeviceType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">내장 듀얼 카메라 디바이스 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="averror-swift.struct/contentisprotected.md">static var contentIsProtected: AVError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">이 앱은 미디어를 열 권한이 없습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="averror-swift.struct/contentisunavailable.md">static var contentIsUnavailable: AVError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">캡처된 콘텐츠를 사용할 수 없습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="averror-swift.struct/contentkeyrequestcancelled.md">static var contentKeyRequestCancelled: AVError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">앱이 콘텐츠 키 검색 요청을 취소했습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="averror-swift.struct/contentnotupdated.md">static var contentNotUpdated: AVError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">Multiplies vector X by the transpose of vector Y, then adds matrix A (double-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="cblas_zhbmv(_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_zhbmv(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">Scales a Hermitian band matrix, then multiplies by a vector, then adds a vector (double-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="cblas_zhemm(_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_zhemm(CBLAS_ORDER, CBLAS_SIDE, CBLAS_UPLO, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">Multiplies two Hermitian matrices (double-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="cblas_zhemv(_:_:_:_:_:_:_:_:_:_:_:">func cblas_zhemv(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">Scales and multiplies a Hermitian matrix by a vector, then adds a second (scaled) vector.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="cblas_zher(_:_:_:_:_:_:_:_:">func cblas_zher(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, Double, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">Adds the product of a scaling factor, vector <code>X</code>, and the conjugate transpose of <code>X</code> to matrix <code>A</code>.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001"><a href="cblas_zher2(_:_:_:_:_:_:_:_:_:_:">func cblas_zher2(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">Hermitian rank 2 update: adds the product of a scaling factor, vector <code>X</code>, and the conjugate transpose of vector <code>Y</code> to the product of the conjugate of the scaling factor, vector <code>Y</code>, and the conjugate transpose of vector <code>X</code>, and adds the result to matrix <code>A</code>.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">*<a href="https://developer.apple.com/documentation/accelerate/cblas_dznrm2(_:_:_:">View on Apple Developer</a>)*</span>

---
source_path: "documentation/Accelerate/cblas-dnrm2.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/cblas-dnrm2"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:cblasdnrm2:0000:0001">cblas_dnrm2(_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cblasdnrm2:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cblasdnrm2:0002:0001">Computes the L2 norm (Euclidian length) of a vector (double precision).</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cblasdnrm2:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:cblasdnrm2:0004:0001">iOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblasdnrm2:0004:0002">iPadOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblasdnrm2:0004:0003">Mac Catalyst 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblasdnrm2:0004:0004">macOS 13.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblasdnrm2:0004:0005">tvOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblasdnrm2:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblasdnrm2:0004:0007">watchOS 9.4+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func cblas_dnrm2(_ N: __LAPACK_int, _ X: UnsafePointer<Double>?, _ INCX: __LAPACK_int) -> Double
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0008:0001">❗ **Important**: Apple provides the BLAS and LAPACK libraries under the Accelerate framework to be in line with LAPACK 3.9.1.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0008:0002">Starting with iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, and watchOS 26, the libraries are in line with LAPACK 3.12.0.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0008:0003">These new interfaces provide additional functionality, as well as a new ILP64 interface.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0008:0004">To use the new interfaces, define <code>ACCELERATE_NEW_LAPACK</code> before including the Accelerate or vecLib headers.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0008:0005">For ILP64 interfaces, also define <code>ACCELERATE_LAPACK_ILP64</code>.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0008:0006">For Swift projects, specify <code>ACCELERATE_NEW_LAPACK=1</code> and <code>ACCELERATE_LAPACK_ILP64=1</code> as preprocessor macros in Xcode build settings.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>N</code>: Length of vector <code>X</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>X</code>: Vector <code>X</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0003"><code>INCX</code>: Stride within <code>X</code>. For example, if <code>incX</code> is 7, every 7th element is used.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="cblas_dasum(_:_:_:">func cblas_dasum(__LAPACK_int, UnsafePointer&lt;Double&gt;?, __LAPACK_int) -&gt; Double</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">Computes the sum of the absolute values of elements in a vector (double-precision).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avspeechutterance/init(attributedstring:">init(attributedString: NSAttributedString)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">Computes a constant times a vector plus a vector (double-precision).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="cblas_dcopy(_:_:_:_:_:">func cblas_dcopy(__LAPACK_int, UnsafePointer&lt;Double&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">Copies a vector to another vector (double-precision).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avspeechutterance/init(ssmlrepresentation:">init?(ssmlRepresentation: String)</a>-8zam9.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">Scales a general band matrix, then multiplies by a vector, then adds a vector (double precision).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="cblas_dgemm(_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_dgemm(CBLAS_ORDER, CBLAS_TRANSPOSE, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, __LAPACK_int, Double, UnsafePointer&lt;Double&gt;?, __LAPACK_int, UnsafePointer&lt;Double&gt;?, __LAPACK_int, Double, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">Multiplies two matrices (double-precision).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="cblas_dgemv(_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_dgemv(CBLAS_ORDER, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, Double, UnsafePointer&lt;Double&gt;?, __LAPACK_int, UnsafePointer&lt;Double&gt;?, __LAPACK_int, Double, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">캡처 세션이 중단될 때 시스템이 게시하는 알림입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="cblas_dger(_:_:_:_:_:_:_:_:_:_:">func cblas_dger(CBLAS_ORDER, __LAPACK_int, __LAPACK_int, Double, UnsafePointer&lt;Double&gt;?, __LAPACK_int, UnsafePointer&lt;Double&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">캡처 세션의 중단이 종료될 때 시스템이 게시하는 알림입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="cblas_drot(_:_:_:_:_:_:_:">func cblas_drot(__LAPACK_int, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int, Double, Double)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">Applies a Givens rotation matrix to a pair of vectors.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="cblas_drotg(_:_:_:_:">func cblas_drotg(UnsafeMutablePointer&lt;Double&gt;, UnsafeMutablePointer&lt;Double&gt;, UnsafeMutablePointer&lt;Double&gt;, UnsafeMutablePointer&lt;Double&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">Constructs a Givens rotation matrix.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="cblas_drotm(_:_:_:_:_:_:">func cblas_drotm(__LAPACK_int, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int, UnsafePointer&lt;Double&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">Applies a modified Givens transformation (single precision).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="cblas_drotmg(_:_:_:_:_:">func cblas_drotmg(UnsafeMutablePointer&lt;Double&gt;, UnsafeMutablePointer&lt;Double&gt;, UnsafeMutablePointer&lt;Double&gt;, Double, UnsafeMutablePointer&lt;Double&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">Generates a modified Givens rotation matrix.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="cblas_dsbmv(_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_dsbmv(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, __LAPACK_int, Double, UnsafePointer&lt;Double&gt;?, __LAPACK_int, UnsafePointer&lt;Double&gt;?, __LAPACK_int, Double, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">Scales a symmetric band matrix, then multiplies by a vector, then adds a vector (double precision).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="cblas_dscal(_:_:_:_:">func cblas_dscal(__LAPACK_int, Double, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">Multiplies each element of a vector by a constant (double-precision).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="cblas_dspmv(_:_:_:_:_:_:_:_:_:_:">func cblas_dspmv(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, Double, UnsafePointer&lt;Double&gt;?, UnsafePointer&lt;Double&gt;?, __LAPACK_int, Double, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">Scales a packed symmetric matrix, then multiplies by a vector, then scales and adds another vector (double precision).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001"><a href="cblas_dspr(_:_:_:_:_:_:_:">func cblas_dspr(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, Double, UnsafePointer&lt;Double&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Double&gt;?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">Rank one update: adds a packed symmetric matrix to the product of a scaling factor, a vector, and its transpose (double precision).</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">*<a href="https://developer.apple.com/documentation/accelerate/cblas_dnrm2(_:_:_:">View on Apple Developer</a>)*</span>

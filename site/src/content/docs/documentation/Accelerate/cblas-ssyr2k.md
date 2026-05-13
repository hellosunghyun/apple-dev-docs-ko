---
source_path: "documentation/Accelerate/cblas-ssyr2k.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/cblas-ssyr2k"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:cblasssyr2k:0000:0001">cblas_ssyr2k(_:_:_:_:_:_:_:_:_:_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cblasssyr2k:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cblasssyr2k:0002:0001">Performs a rank-2k update of a symmetric matrix (single precision).</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cblasssyr2k:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:cblasssyr2k:0004:0001">iOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblasssyr2k:0004:0002">iPadOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblasssyr2k:0004:0003">Mac Catalyst 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblasssyr2k:0004:0004">macOS 13.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblasssyr2k:0004:0005">tvOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblasssyr2k:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblasssyr2k:0004:0007">watchOS 9.4+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func cblas_ssyr2k(_ ORDER: CBLAS_ORDER, _ UPLO: CBLAS_UPLO, _ TRANS: CBLAS_TRANSPOSE, _ N: __LAPACK_int, _ K: __LAPACK_int, _ ALPHA: Float, _ A: UnsafePointer<Float>?, _ LDA: __LAPACK_int, _ B: UnsafePointer<Float>?, _ LDB: __LAPACK_int, _ BETA: Float, _ C: UnsafeMutablePointer<Float>?, _ LDC: __LAPACK_int)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">Computes <code>alpha*A*B</code></span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0001">❗ **Important**: Apple provides the BLAS and LAPACK libraries under the Accelerate framework to be in line with LAPACK 3.9.1.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0002">Starting with iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, and watchOS 26, the libraries are in line with LAPACK 3.12.0.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0003">These new interfaces provide additional functionality, as well as a new ILP64 interface.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0004">To use the new interfaces, define <code>ACCELERATE_NEW_LAPACK</code> before including the Accelerate or vecLib headers.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0005">For ILP64 interfaces, also define <code>ACCELERATE_LAPACK_ILP64</code>.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0006">For Swift projects, specify <code>ACCELERATE_NEW_LAPACK=1</code> and <code>ACCELERATE_LAPACK_ILP64=1</code> as preprocessor macros in Xcode build settings.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">``</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>ORDER</code>: Specifies row-major (C) or column-major (Fortran) data ordering.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0002"><code>UPLO</code>: Specifies whether to use the upper or lower triangle from the matrix. Valid values are <code>'U'</code> or <code>'L'</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0003"><code>TRANS</code>: Specifies whether to use matrix A (<code>'N'</code> or <code>'n'</code>), the transpose of A (<code>'T'</code> or <code>'t'</code>), or the conjugate of A (<code>'C'</code> or <code>'c'</code>).</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0004"><code>N</code>: Order of matrix <code>C</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0005"><code>K</code>: Specifies the number of columns in matrices <code>A</code> and <code>B</code> if <code>trans='N'</code>. Specifies the number of rows if <code>trans='C'</code> or <code>trans='T'</code>).</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0006"><code>ALPHA</code>: Scaling factor for matrix <code>A</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0007"><code>A</code>: Matrix <code>A</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0008"><code>LDA</code>: Leading dimension of matrix <code>A</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0009"><code>B</code>: Matrix <code>B</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0010"><code>LDB</code>: Leading dimension of array containing matrix <code>B</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0011"><code>BETA</code>: Scaling factor for matrix <code>C</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0012"><code>C</code>: Matrix <code>C</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0013"><code>LDC</code>: Leading dimension of array containing matrix <code>C</code>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="cblas_sasum(_:_:_:">func cblas_sasum(__LAPACK_int, UnsafePointer&lt;Float&gt;?, __LAPACK_int) -&gt; Float</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">Computes the sum of the absolute values of elements in a vector (single-precision).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="cblas_saxpy(_:_:_:_:_:_:">func cblas_saxpy(__LAPACK_int, Float, UnsafePointer&lt;Float&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">Computes a constant times a vector plus a vector (single-precision).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="cblas_scopy(_:_:_:_:_:">func cblas_scopy(__LAPACK_int, UnsafePointer&lt;Float&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">Copies a vector to another vector (single-precision).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="cblas_sgbmv(_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_sgbmv(CBLAS_ORDER, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, __LAPACK_int, __LAPACK_int, Float, UnsafePointer&lt;Float&gt;?, __LAPACK_int, UnsafePointer&lt;Float&gt;?, __LAPACK_int, Float, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">장치에 얼굴 기반 자동 초점이 활성화되어 있는지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="cblas_sgemm(_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_sgemm(CBLAS_ORDER, CBLAS_TRANSPOSE, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, __LAPACK_int, Float, UnsafePointer&lt;Float&gt;?, __LAPACK_int, UnsafePointer&lt;Float&gt;?, __LAPACK_int, Float, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">장치가 얼굴 기반 자동 초점을 자동으로 조정하는지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001">[func recommendedMovieMetadata(forVideoCodecType: AVVideoCodecType, assetWriterOutputFileType: AVFileType) -&gt; [AVMetadataItem]?](avcapturevideodataoutput/recommendedmoviemetadata(forvideocodectype:assetwriteroutputfiletype:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">장치가 초점 범위 제한을 지원하는지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001">[func recommendedVideoSettings(forVideoCodecType: AVVideoCodecType, assetWriterOutputFileType: AVFileType) -&gt; [String : Any]?](avcapturevideodataoutput/recommendedvideosettings(forvideocodectype:assetwriteroutputfiletype:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">자동 초점의 허용 범위를 제어하는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001">[func recommendedVideoSettings(forVideoCodecType: AVVideoCodecType, assetWriterOutputFileType: AVFileType, outputFileURL: URL?) -&gt; [String : Any]?](avcapturevideodataoutput/recommendedvideosettings(forvideocodectype:assetwriteroutputfiletype:outputfileurl:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">캡처 장치의 자동 초점 범위를 지정하는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001">[func recommendedVideoSettingsForAssetWriter(writingTo: AVFileType) -&gt; [String : Any]?](avcapturevideodataoutput/recommendedvideosettingsforassetwriter(writingto:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedevice/isfocusmodesupported(_:">View on Apple Developer</a>)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="cblas_srotg(_:_:_:_:">func cblas_srotg(UnsafeMutablePointer&lt;Float&gt;, UnsafeMutablePointer&lt;Float&gt;, UnsafeMutablePointer&lt;Float&gt;, UnsafeMutablePointer&lt;Float&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">Constructs a Givens rotation matrix.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="cblas_srotm(_:_:_:_:_:_:">func cblas_srotm(__LAPACK_int, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int, UnsafePointer&lt;Float&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">Applies a modified Givens transformation (single precision).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="cblas_srotmg(_:_:_:_:_:">func cblas_srotmg(UnsafeMutablePointer&lt;Float&gt;, UnsafeMutablePointer&lt;Float&gt;, UnsafeMutablePointer&lt;Float&gt;, Float, UnsafeMutablePointer&lt;Float&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">Generates a modified Givens rotation matrix.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="cblas_ssbmv(_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_ssbmv(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, __LAPACK_int, Float, UnsafePointer&lt;Float&gt;?, __LAPACK_int, UnsafePointer&lt;Float&gt;?, __LAPACK_int, Float, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">Scales a symmetric band matrix, then multiplies by a vector, then adds a vector (single-precision).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001"><a href="cblas_sscal(_:_:_:_:">func cblas_sscal(__LAPACK_int, Float, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">Multiplies each element of a vector by a constant (single-precision).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0042:0001"><a href="cblas_sspmv(_:_:_:_:_:_:_:_:_:_:">func cblas_sspmv(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, Float, UnsafePointer&lt;Float&gt;?, UnsafePointer&lt;Float&gt;?, __LAPACK_int, Float, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">Scales a packed symmetric matrix, then multiplies by a vector, then scales and adds another vector (single precision).</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0045:0001">*<a href="https://developer.apple.com/documentation/accelerate/cblas_ssyr2k(_:_:_:_:_:_:_:_:_:_:_:_:_:">View on Apple Developer</a>)*</span>

---
source_path: "documentation/Accelerate/cblas-dsyr2k.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/cblas-dsyr2k"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:cblasdsyr2k:0000:0001">cblas_dsyr2k(_:_:_:_:_:_:_:_:_:_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cblasdsyr2k:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cblasdsyr2k:0002:0001">Performs a rank-2k update of a symmetric matrix (double precision).</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cblasdsyr2k:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:cblasdsyr2k:0004:0001">iOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblasdsyr2k:0004:0002">iPadOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblasdsyr2k:0004:0003">Mac Catalyst 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblasdsyr2k:0004:0004">macOS 13.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblasdsyr2k:0004:0005">tvOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblasdsyr2k:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblasdsyr2k:0004:0007">watchOS 9.4+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func cblas_dsyr2k(_ ORDER: CBLAS_ORDER, _ UPLO: CBLAS_UPLO, _ TRANS: CBLAS_TRANSPOSE, _ N: __LAPACK_int, _ K: __LAPACK_int, _ ALPHA: Double, _ A: UnsafePointer<Double>?, _ LDA: __LAPACK_int, _ B: UnsafePointer<Double>?, _ LDB: __LAPACK_int, _ BETA: Double, _ C: UnsafeMutablePointer<Double>?, _ LDC: __LAPACK_int)
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
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0005"><code>K</code>: Specifies the number of columns in matrices <code>A</code> and <code>B</code> if <code>trans='N'</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0006"><code>ALPHA</code>: Scaling factor for matrix <code>A</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0007"><code>A</code>: Matrix <code>A</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0008"><code>LDA</code>: Leading dimension of array containing matrix <code>A</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0009"><code>B</code>: Matrix <code>B</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0010"><code>LDB</code>: Leading dimension of array containing matrix <code>B</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0011"><code>BETA</code>: Scaling factor for matrix <code>C</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0012"><code>C</code>: Matrix <code>C</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0013"><code>LDC</code>: Leading dimension of array containing matrix <code>C</code>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avmetadatakey/id3metadatakeyaudioencryption.md">static let id3MetadataKeyAudioEncryption: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">오디오 스트림의 암호화 세부 정보를 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avmetadatakey/id3metadatakeyaudioseekpointindex.md">static let id3MetadataKeyAudioSeekPointIndex: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">오디오 파일 내 탐색 지점 목록을 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avmetadatakey/id3metadatakeyband.md">static let id3MetadataKeyBand: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">녹음의 연주자에 대한 추가 정보를 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avmetadatakey/id3metadatakeybeatsperminute.md">static let id3MetadataKeyBeatsPerMinute: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">오디오의 분당 박자 수를 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avmetadatakey/id3metadatakeycomments.md">static let id3MetadataKeyComments: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">미디어의 추가 텍스트 정보를 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avmetadatakey/id3metadatakeycommercial.md">static let id3MetadataKeyCommercial: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">미디어의 상업적 세부 정보를 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avmetadatakey/id3metadatakeycommercialinformation.md">static let id3MetadataKeyCommercialInformation: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">구매 정보를 포함한 웹페이지를 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avmetadatakey/id3metadatakeycomposer.md">static let id3MetadataKeyComposer: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">작곡가의 이름을 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="avmetadatakey/id3metadatakeyconductor.md">static let id3MetadataKeyConductor: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">지휘자의 이름을 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="avmetadatakey/id3metadatakeycontentgroupdescription.md">static let id3MetadataKeyContentGroupDescription: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">음향이나 음악이 더 넓은 분류 범주에 속함을 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="avmetadatakey/id3metadatakeycontenttype.md">static let id3MetadataKeyContentType: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">미디어 콘텐츠 유형을 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="avmetadatakey/id3metadatakeycopyright.md">static let id3MetadataKeyCopyright: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">저작권 문구를 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="cblas_dsbmv(_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_dsbmv(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, __LAPACK_int, Double, UnsafePointer&lt;Double&gt;?, __LAPACK_int, UnsafePointer&lt;Double&gt;?, __LAPACK_int, Double, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">Scales a symmetric band matrix, then multiplies by a vector, then adds a vector (double precision).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001"><a href="cblas_dscal(_:_:_:_:">func cblas_dscal(__LAPACK_int, Double, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">Multiplies each element of a vector by a constant (double-precision).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0042:0001"><a href="cblas_dspmv(_:_:_:_:_:_:_:_:_:_:">func cblas_dspmv(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, Double, UnsafePointer&lt;Double&gt;?, UnsafePointer&lt;Double&gt;?, __LAPACK_int, Double, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">Scales a packed symmetric matrix, then multiplies by a vector, then scales and adds another vector (double precision).</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0045:0001">*<a href="https://developer.apple.com/documentation/accelerate/cblas_dsyr2k(_:_:_:_:_:_:_:_:_:_:_:_:_:">View on Apple Developer</a>)*</span>

---
source_path: "documentation/Accelerate/cblas-dsymm.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/cblas-dsymm"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:cblasdsymm:0000:0001">cblas_dsymm(_:_:_:_:_:_:_:_:_:_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cblasdsymm:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cblasdsymm:0002:0001">Multiplies a matrix by a symmetric matrix (double-precision).</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cblasdsymm:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:cblasdsymm:0004:0001">iOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblasdsymm:0004:0002">iPadOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblasdsymm:0004:0003">Mac Catalyst 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblasdsymm:0004:0004">macOS 13.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblasdsymm:0004:0005">tvOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblasdsymm:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblasdsymm:0004:0007">watchOS 9.4+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func cblas_dsymm(_ ORDER: CBLAS_ORDER, _ SIDE: CBLAS_SIDE, _ UPLO: CBLAS_UPLO, _ M: __LAPACK_int, _ N: __LAPACK_int, _ ALPHA: Double, _ A: UnsafePointer<Double>?, _ LDA: __LAPACK_int, _ B: UnsafePointer<Double>?, _ LDB: __LAPACK_int, _ BETA: Double, _ C: UnsafeMutablePointer<Double>?, _ LDC: __LAPACK_int)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">This function multiplies <code>A * B</code> or <code>B * A</code> (depending on the value of <code>Side</code>) and multiplies the resulting matrix by <code>alpha</code>.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">It then multiplies matrix <code>C</code> by <code>beta</code>.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">It stores the sum of these two products in matrix <code>C</code>.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">Thus, it calculates either</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001"><code>C←αAB + βC</code></span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">or</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0001"><code>C←αBA + βC</code></span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0013:0001">where</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0014:0001"><code>A = A</code></span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0015:0001">❗ **Important**: Apple provides the BLAS and LAPACK libraries under the Accelerate framework to be in line with LAPACK 3.9.1.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0015:0002">Starting with iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, and watchOS 26, the libraries are in line with LAPACK 3.12.0.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0015:0003">These new interfaces provide additional functionality, as well as a new ILP64 interface.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0015:0004">To use the new interfaces, define <code>ACCELERATE_NEW_LAPACK</code> before including the Accelerate or vecLib headers.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0015:0005">For ILP64 interfaces, also define <code>ACCELERATE_LAPACK_ILP64</code>.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0015:0006">For Swift projects, specify <code>ACCELERATE_NEW_LAPACK=1</code> and <code>ACCELERATE_LAPACK_ILP64=1</code> as preprocessor macros in Xcode build settings.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0016:0001">``</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0017:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0001"><code>ORDER</code>: Specifies row-major (C) or column-major (Fortran) data ordering.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0002"><code>SIDE</code>: Determines the order in which the matrices should be multiplied.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0003"><code>UPLO</code>: Specifies whether to use the upper or lower triangle from the matrix. Valid values are <code>'U'</code> or <code>'L'</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0004"><code>M</code>: Number of rows in matrices <code>A</code> and <code>C</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0005"><code>N</code>: Number of columns in matrices <code>B</code> and <code>C</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0006"><code>ALPHA</code>: Scaling factor for the product of matrices A and B.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0007"><code>A</code>: Matrix A.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0008"><code>LDA</code>: The size of the first dimension of matrix <code>A</code>; if you are passing a matrix <code>A[m][n]</code>, the value should be <code>m</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0009"><code>B</code>: Matrix B.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0010"><code>LDB</code>: The size of the first dimension of matrix <code>B</code>; if you are passing a matrix <code>B[m][n]</code>, the value should be <code>m</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0011"><code>BETA</code>: Scaling factor for matrix C.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0012"><code>C</code>: Matrix C.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0013"><code>LDC</code>: The size of the first dimension of matrix <code>C</code>; if you are passing a matrix <code>C[m][n]</code>, the value should be <code>m</code>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0019:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avmetadataidentifier/itunesmetadataartist.md">static let id3MetadataBeatsPerMinute: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">오디오의 BPM(분당 박자 수)를 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avmetadataidentifier/itunesmetadataartistid.md">static let id3MetadataComments: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">미디어의 추가 텍스트 정보를 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avmetadataidentifier/itunesmetadataauthor.md">static let id3MetadataCommercial: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">미디어의 상업 정보를 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avmetadataidentifier/itunesmetadatabeatspermin.md">static let id3MetadataCommercialInformation: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">구매 정보를 포함하는 웹페이지를 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avmetadataidentifier/itunesmetadatacomposer.md">static let id3MetadataComposer: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">작곡가의 이름을 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="avmetadataidentifier/itunesmetadataconductor.md">static let id3MetadataConductor: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">지휘자의 이름을 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="avmetadataidentifier/itunesmetadatacontentrating.md">static let id3MetadataContentGroupDescription: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">사운드 또는 음악이 더 큰 카테고리에 속함을 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="avmetadataidentifier/itunesmetadatacopyright.md">static let id3MetadataContentType: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">iTunes의 저작권 문구를 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="avmetadataidentifier/itunesmetadatacoverart.md">static let iTunesMetadataCoverArt: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">앨범 커버 이미지를 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="cblas_drotg(_:_:_:_:">func cblas_drotg(UnsafeMutablePointer&lt;Double&gt;, UnsafeMutablePointer&lt;Double&gt;, UnsafeMutablePointer&lt;Double&gt;, UnsafeMutablePointer&lt;Double&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">Constructs a Givens rotation matrix.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001"><a href="cblas_drotm(_:_:_:_:_:_:">func cblas_drotm(__LAPACK_int, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int, UnsafePointer&lt;Double&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">Applies a modified Givens transformation (single precision).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0042:0001"><a href="cblas_drotmg(_:_:_:_:_:">func cblas_drotmg(UnsafeMutablePointer&lt;Double&gt;, UnsafeMutablePointer&lt;Double&gt;, UnsafeMutablePointer&lt;Double&gt;, Double, UnsafeMutablePointer&lt;Double&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">Generates a modified Givens rotation matrix.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0044:0001"><a href="cblas_dsbmv(_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_dsbmv(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, __LAPACK_int, Double, UnsafePointer&lt;Double&gt;?, __LAPACK_int, UnsafePointer&lt;Double&gt;?, __LAPACK_int, Double, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0045:0001">Scales a symmetric band matrix, then multiplies by a vector, then adds a vector (double precision).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0046:0001"><a href="cblas_dscal(_:_:_:_:">func cblas_dscal(__LAPACK_int, Double, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0047:0001">Multiplies each element of a vector by a constant (double-precision).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0048:0001"><a href="cblas_dspmv(_:_:_:_:_:_:_:_:_:_:">func cblas_dspmv(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, Double, UnsafePointer&lt;Double&gt;?, UnsafePointer&lt;Double&gt;?, __LAPACK_int, Double, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0049:0001">Scales a packed symmetric matrix, then multiplies by a vector, then scales and adds another vector (double precision).</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0051:0001">*<a href="https://developer.apple.com/documentation/accelerate/cblas_dsymm(_:_:_:_:_:_:_:_:_:_:_:_:_:">View on Apple Developer</a>)*</span>

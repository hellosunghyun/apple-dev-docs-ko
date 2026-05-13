---
source_path: "documentation/Accelerate/sparse-matrix-trace-float.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/sparse-matrix-trace-float"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sparsematrixtracefloat:0000:0001">sparse_matrix_trace_float(_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsematrixtracefloat:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsematrixtracefloat:0002:0001">Computes the sum along the specified diagonal of the single-precision sparse matrix *A*.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsematrixtracefloat:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:sparsematrixtracefloat:0004:0001">iOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsematrixtracefloat:0004:0002">iPadOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsematrixtracefloat:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsematrixtracefloat:0004:0004">macOS 10.11+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsematrixtracefloat:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsematrixtracefloat:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsematrixtracefloat:0004:0007">watchOS 3.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func sparse_matrix_trace_float(_ A: sparse_matrix_float!, _ offset: sparse_index) -> Float
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">Return Value</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">The computed trace.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">The diagonal is specified by the <code>offset</code> parameter where zero is the main diagonal, values greater than one refer to diagonals above the main diagonal (<code>A[i,i+offset]</code>), and values less than one refer to diagonals below the main diagonal (<code>A[i-offset, i]</code>).</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">If offset is out of the bounds of the matrix <code>A</code>, <code>0</code> is returned.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0012:0001">❗ **Important**: Apple provides the BLAS and LAPACK libraries under the Accelerate framework to be in line with LAPACK 3.9.1.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0012:0002">Starting with iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, and watchOS 26, the libraries are in line with LAPACK 3.12.0.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0012:0003">These new interfaces provide additional functionality, as well as a new ILP64 interface.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0012:0004">To use the new interfaces, define <code>ACCELERATE_NEW_LAPACK</code> before including the Accelerate or vecLib headers.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0012:0005">For ILP64 interfaces, also define <code>ACCELERATE_LAPACK_ILP64</code>.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0012:0006">For Swift projects, specify <code>ACCELERATE_NEW_LAPACK=1</code> and <code>ACCELERATE_LAPACK_ILP64=1</code> as preprocessor macros in Xcode build settings.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0013:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0001"><code>A</code>: The sparse matrix, *A*.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0002"><code>offset</code>: Specifies the diagonal to sum.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0015:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avmetadataidentifier/quicktimeuserdataauthor.md">static let quickTimeMetadataArtist: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">동영상 파일 콘텐츠의 아티스트 이름을 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avmetadataidentifier/quicktimeuserdatachapter.md">static let quickTimeMetadataArtwork: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">동영상 파일 콘텐츠와 관련된 이미지를 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avmetadataidentifier/quicktimeuserdatacomment.md">static let quickTimeMetadataAuthor: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">동영상 파일 콘텐츠의 작성자 이름을 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avmetadataidentifier/quicktimeuserdatacomposer.md">static let quickTimeMetadataAutoLivePhoto: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">Solves the system of equations *x = alpha * T⁻¹ * x* for x where *x* is a dense vector and *T* is a triangular sparse matrix, with all operands containing single-precision values.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avmetadataidentifier/quicktimeuserdatacopyright.md">static let quickTimeMetadataCameraFocalLength35mmEquivalent: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">35mm 영화 환산값으로 정규화된 초점 거리를 나타내는 kCMMetadataBaseDataType_UTF8 유형의 값입니다(예: “50.00mm”).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avmetadataidentifier/quicktimemetadatacameraframereadouttime.md">static let quickTimeMetadataCameraFrameReadoutTime: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">QuickTime에서 카메라 프레임 판독 시간을 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avmetadataidentifier/quicktimemetadatacameraisosensitivity.md">static let quickTimeMetadataCameraISOSensitivity: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">ISO 노출 지수(예: “800”)로 카메라의 빛 감도를 나타내는 kCMMetadataBaseDataType_UTF8 유형의 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="avmetadataidentifier/quicktimemetadatacameraidentifier.md">static let quickTimeMetadataCameraIdentifier: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">영화 파일 콘텐츠의 설명을 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="avmetadatakey/id3metadatakeycontentgroupdescription.md">static let quickTimeUserDataDirector: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">영화 파일 콘텐츠의 감독 이름을 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="avmetadatakey/id3metadatakeycontenttype.md">static let quickTimeUserDataDisclaimer: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">영화 파일 콘텐츠의 면책 조항을 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="avmetadatakey/id3metadatakeycopyright.md">static let quickTimeUserDataEncodedBy: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">영화 파일 콘텐츠의 인코딩을 담당한 개인 또는 조직의 이름을 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="sparse_elementwise_norm_float(_:_:">func sparse_elementwise_norm_float(sparse_matrix_float!, sparse_norm) -&gt; Float</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">Computes the specified element-wise norm of the single-precision sparse matrix *A*.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001"><a href="sparse_operator_norm_double(_:_:">func sparse_operator_norm_double(sparse_matrix_double!, sparse_norm) -&gt; Double</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">Computes the specified operator norm of the double-precision sparse matrix *A*.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0042:0001"><a href="sparse_operator_norm_float(_:_:">func sparse_operator_norm_float(sparse_matrix_float!, sparse_norm) -&gt; Float</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">Computes the specified operator norm of the single-precision sparse matrix *A*.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0044:0001"><a href="sparse_matrix_trace_double(_:_:">func sparse_matrix_trace_double(sparse_matrix_double!, sparse_index) -&gt; Double</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0045:0001">Computes the sum along the specified diagonal of the double-precision sparse matrix *A*.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0047:0001">*<a href="https://developer.apple.com/documentation/accelerate/sparse_matrix_trace_float(_:_:">View on Apple Developer</a>)*</span>

---
source_path: "documentation/Accelerate/blas-library.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/blas-library"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:blas:0000:0001">BLAS</span>

<span class="ko-segment" data-segment-id="seg:paragraph:blas:0001:0001">**프레임워크**: Accelerate</span>

<span class="ko-segment" data-segment-id="seg:paragraph:blas:0002:0001">Apple의 Basic Linear Algebra Subprograms(BLAS) 구현으로 일반적인 선형 대수 연산을 수행합니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0003:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0001">vecLib 프레임워크에는 아홉 개의 C 헤더 파일이 포함되어 있으며, 단순히 나머지 파일을 포함하는 <code>vecLib.h</code>는 제외됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0005:0001">이 문서는 Apple의 BLAS API 인터페이스를 포함하는 헤더 파일 <code>cblas.h</code>와 <code>vblas.h</code>에 선언된 함수를 설명합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0006:0001">문서에서 선행 차원을 행렬의 첫 번째 차원으로 설명하는 경우, 이는 열 우선(column-major) 순서를 의미합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0006:0002">행 우선(row-major) 순서에서는 선행 차원이 행렬의 두 번째 차원입니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:overview:0007:0001">❗ **중요**: Apple은 BLAS 및 LAPACK 라이브러리를 Accelerate 프레임워크에서 제공하여 LAPACK 3.9.1과 일치합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:overview:0007:0002">iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26 및 watchOS 26부터 라이브러리는 LAPACK 3.12.0과 일치합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:overview:0007:0003">이 새 인터페이스는 추가 기능과 함께 새로운 ILP64 인터페이스를 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:overview:0007:0004">새 인터페이스를 사용하려면 Accelerate 또는 vecLib 헤더를 포함하기 전에 <code>ACCELERATE_NEW_LAPACK</code>을 정의합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:overview:0007:0005">ILP64 인터페이스의 경우 <code>ACCELERATE_LAPACK_ILP64</code>도 정의합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:overview:0007:0006">Swift 프로젝트의 경우 Xcode 빌드 설정에서 전처리기 매크로로 <code>ACCELERATE_NEW_LAPACK=1</code> 및 <code>ACCELERATE_LAPACK_ILP64=1</code>을 지정합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0008:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:specifying-the-threading-model:0009:0001">스레딩 모델 지정</span>

- <span class="ko-segment" data-segment-id="seg:list:specifying-the-threading-model:0010:0001"><a href="blas.md">struct BLAS</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:specifying-the-threading-model:0011:0001">BLAS용 Swift 오버레이의 네임스페이스 역할을 하는 열거형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:specifying-the-threading-model:0012:0001"><a href="blassetthreading(_:">func BLASSetThreading(BLAS_THREADING) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:specifying-the-threading-model:0013:0001">BLAS 및 LAPACK 스레딩 모델을 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:specifying-the-threading-model:0014:0001"><a href="blasgetthreading(">func BLASGetThreading() -&gt; BLAS_THREADING</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:specifying-the-threading-model:0015:0001">현재 BLAS 및 LAPACK 스레딩 모델을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:specifying-the-threading-model:0016:0001"><a href="blas_threading.md">struct BLAS_THREADING</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:specifying-the-threading-model:0017:0001">BLAS 및 LAPACK 스레딩 모델을 설명하는 상수입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:general-functions:0018:0001">일반 함수</span>

- <span class="ko-segment" data-segment-id="seg:list:general-functions:0019:0001"><a href="cblas_icamax(_:_:_:">func cblas_icamax(__LAPACK_int, OpaquePointer?, __LAPACK_int) -&gt; __LAPACK_int</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:general-functions:0020:0001">벡터에서 절댓값이 가장 큰 요소의 인덱스를 반환합니다(단정밀도 복소수).</span>

- <span class="ko-segment" data-segment-id="seg:list:general-functions:0021:0001"><a href="cblas_idamax(_:_:_:">func cblas_idamax(__LAPACK_int, UnsafePointer&lt;Double&gt;?, __LAPACK_int) -&gt; __LAPACK_int</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:general-functions:0022:0001">벡터에서 절댓값이 가장 큰 요소의 인덱스를 반환합니다(배정밀도).</span>

- <span class="ko-segment" data-segment-id="seg:list:general-functions:0023:0001"><a href="cblas_isamax(_:_:_:">func cblas_isamax(__LAPACK_int, UnsafePointer&lt;Float&gt;?, __LAPACK_int) -&gt; __LAPACK_int</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:general-functions:0024:0001">벡터에서 절댓값이 가장 큰 요소의 인덱스를 반환합니다(단정밀도).</span>

- <span class="ko-segment" data-segment-id="seg:list:general-functions:0025:0001"><a href="cblas_izamax(_:_:_:">func cblas_izamax(__LAPACK_int, OpaquePointer?, __LAPACK_int) -&gt; __LAPACK_int</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:general-functions:0026:0001">벡터에서 절댓값이 가장 큰 요소의 인덱스를 반환합니다(배정밀도 복소수).</span>

### <span class="ko-segment" data-segment-id="seg:heading:sparse-computation:0027:0001">희소 연산</span>

- <span class="ko-segment" data-segment-id="seg:list:sparse-computation:0028:0001"><a href="matrix-and-vector-operations.md">Matrix and Vector Operations</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparse-computation:0029:0001">행렬과 벡터를 사용해 계산을 수행합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:sparse-computation:0030:0001"><a href="pointwise-matrix-operations.md">Pointwise Matrix Operations</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparse-computation:0031:0001">점별 희소 행렬에서 값을 생성하고 삽입하며 추출합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:sparse-computation:0032:0001"><a href="blockwise-matrix-operations.md">Blockwise Matrix Operations</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparse-computation:0033:0001">블록 단위 희소 행렬에서 값을 생성하고 삽입하며 추출합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:sparse-computation:0034:0001"><a href="general-sparse-matrix-management-operations.md">General Sparse Matrix Management Operations</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparse-computation:0035:0001">희소 행렬의 속성을 관리하고 활용합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:sparse-computation:0036:0001"><a href="sparse-vector-utility-operations.md">Sparse Vector Utility Operations</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparse-computation:0037:0001">희소 벡터 구조를 생성하고 작업합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:data-types:0038:0001">데이터 유형</span>

- <span class="ko-segment" data-segment-id="seg:list:data-types:0039:0001"><a href="blasparamerrorproc.md">typealias BLASParamErrorProc</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:data-types:0040:0001">BLAS 오류 처리기 콜백 타입입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:constants:0041:0001">Constants</span>

- <span class="ko-segment" data-segment-id="seg:list:constants:0042:0001"><a href="cblas_order.md">struct CBLAS_ORDER</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:constants:0043:0001">행렬이 행 우선인지 열 우선인지 나타냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:constants:0044:0001"><a href="cblas_transpose.md">struct CBLAS_TRANSPOSE</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:constants:0045:0001">행렬에서 수행할 전치 연산을 나타냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:constants:0046:0001"><a href="cblas_uplo.md">struct CBLAS_UPLO</a></span>
- <span class="ko-segment" data-segment-id="seg:list:constants:0046:0002"><a href="cblas_diag.md">struct CBLAS_DIAG</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:constants:0047:0001">삼각 행렬이 단위 대각선인지(대각선 요소가 모두 1) 나타냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:constants:0048:0001"><a href="cblas_side.md">struct CBLAS_SIDE</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:constants:0049:0001">행렬 곱셈의 순서를 나타냅니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:variables:0050:0001">Variables</span>

- <span class="ko-segment" data-segment-id="seg:list:variables:0051:0001"><a href="cblascolmajor.md">var CblasColMajor: CBLAS_ORDER</a></span>
- <span class="ko-segment" data-segment-id="seg:list:variables:0051:0002"><a href="cblasconjtrans.md">var CblasConjTrans: CBLAS_TRANSPOSE</a></span>
- <span class="ko-segment" data-segment-id="seg:list:variables:0051:0003"><a href="cblasleft.md">var CblasLeft: CBLAS_SIDE</a></span>
- <span class="ko-segment" data-segment-id="seg:list:variables:0051:0004"><a href="cblaslower.md">var CblasLower: CBLAS_UPLO</a></span>
- <span class="ko-segment" data-segment-id="seg:list:variables:0051:0005"><a href="cblasnotrans.md">var CblasNoTrans: CBLAS_TRANSPOSE</a></span>
- <span class="ko-segment" data-segment-id="seg:list:variables:0051:0006"><a href="cblasnonunit.md">var CblasNonUnit: CBLAS_DIAG</a></span>
- <span class="ko-segment" data-segment-id="seg:list:variables:0051:0007"><a href="cblasright.md">var CblasRight: CBLAS_SIDE</a></span>
- <span class="ko-segment" data-segment-id="seg:list:variables:0051:0008"><a href="cblasrowmajor.md">var CblasRowMajor: CBLAS_ORDER</a></span>
- <span class="ko-segment" data-segment-id="seg:list:variables:0051:0009"><a href="cblastrans.md">var CblasTrans: CBLAS_TRANSPOSE</a></span>
- <span class="ko-segment" data-segment-id="seg:list:variables:0051:0010"><a href="cblasunit.md">var CblasUnit: CBLAS_DIAG</a></span>
- <span class="ko-segment" data-segment-id="seg:list:variables:0051:0011"><a href="cblasupper.md">var CblasUpper: CBLAS_UPLO</a></span>
- <span class="ko-segment" data-segment-id="seg:list:variables:0051:0012"><a href="atlasconj.md">var AtlasConj: CBLAS_TRANSPOSE</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:catlas-and-cblas-vector-functions:0052:0001">CATLAS 및 CBLAS 벡터 함수</span>

- <span class="ko-segment" data-segment-id="seg:list:catlas-and-cblas-vector-functions:0053:0001"><a href="catlas_caxpby(_:_:_:_:_:_:_:">func catlas_caxpby(__LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:catlas-and-cblas-vector-functions:0054:0001">두 벡터의 곱을 계산하고 각 벡터를 개별적으로 스케일합니다(단정밀도 복소수).</span>

- <span class="ko-segment" data-segment-id="seg:list:catlas-and-cblas-vector-functions:0055:0001"><a href="catlas_cset(_:_:_:_:">func catlas_cset(__LAPACK_int, OpaquePointer, OpaquePointer, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:catlas-and-cblas-vector-functions:0056:0001">단정밀도 복소수 벡터를 제자리에서 수정하며 각 요소를 지정된 값으로 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:catlas-and-cblas-vector-functions:0057:0001"><a href="catlas_daxpby(_:_:_:_:_:_:_:">func catlas_daxpby(__LAPACK_int, Double, UnsafePointer&lt;Double&gt;?, __LAPACK_int, Double, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:catlas-and-cblas-vector-functions:0058:0001">두 벡터의 합을 계산하고 각 벡터를 개별적으로 스케일합니다(배정밀도).</span>

- <span class="ko-segment" data-segment-id="seg:list:catlas-and-cblas-vector-functions:0059:0001"><a href="catlas_dset(_:_:_:_:">func catlas_dset(__LAPACK_int, Double, UnsafeMutablePointer&lt;Double&gt;, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:catlas-and-cblas-vector-functions:0060:0001">배정밀도 벡터를 제자리에서 수정하며 각 요소를 지정된 값으로 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:catlas-and-cblas-vector-functions:0061:0001"><a href="catlas_saxpby(_:_:_:_:_:_:_:">func catlas_saxpby(__LAPACK_int, Float, UnsafePointer&lt;Float&gt;?, __LAPACK_int, Float, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:catlas-and-cblas-vector-functions:0062:0001">두 벡터의 합을 계산하고 각 벡터를 개별적으로 스케일합니다(단정밀도).</span>

- <span class="ko-segment" data-segment-id="seg:list:catlas-and-cblas-vector-functions:0063:0001"><a href="catlas_sset(_:_:_:_:">func catlas_sset(__LAPACK_int, Float, UnsafeMutablePointer&lt;Float&gt;, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:catlas-and-cblas-vector-functions:0064:0001">단정밀도(single-precision) 벡터를 제자리에서 수정하고 각 요소를 지정된 값으로 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:catlas-and-cblas-vector-functions:0065:0001"><a href="catlas_zaxpby(_:_:_:_:_:_:_:">func catlas_zaxpby(__LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:catlas-and-cblas-vector-functions:0066:0001">두 벡터의 합을 계산하며, 각 벡터를 별도로 스케일링합니다(이중 정밀도 복소수).</span>

- <span class="ko-segment" data-segment-id="seg:list:catlas-and-cblas-vector-functions:0067:0001"><a href="catlas_zset(_:_:_:_:">func catlas_zset(__LAPACK_int, OpaquePointer, OpaquePointer, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:catlas-and-cblas-vector-functions:0068:0001">이중 정밀도 복소수 벡터를 제자리에서 수정하고 각 요소를 지정된 값으로 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:catlas-and-cblas-vector-functions:0069:0001"><a href="cblas_sdot(_:_:_:_:_:">func cblas_sdot(__LAPACK_int, UnsafePointer&lt;Float&gt;?, __LAPACK_int, UnsafePointer&lt;Float&gt;?, __LAPACK_int) -&gt; Float</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:catlas-and-cblas-vector-functions:0070:0001">두 벡터(단정밀도)의 내적을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:catlas-and-cblas-vector-functions:0071:0001"><a href="cblas_sdsdot(_:_:_:_:_:_:">func cblas_sdsdot(__LAPACK_int, Float, UnsafePointer&lt;Float&gt;?, __LAPACK_int, UnsafePointer&lt;Float&gt;?, __LAPACK_int) -&gt; Float</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:catlas-and-cblas-vector-functions:0072:0001">초기 단정밀도 값에 두 단정밀도 벡터의 내적을 더해 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:catlas-and-cblas-vector-functions:0073:0001"><a href="cblas_cdotc_sub(_:_:_:_:_:_:">func cblas_cdotc_sub(__LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:catlas-and-cblas-vector-functions:0074:0001">단정밀도 복소수 벡터의 켤레복소수와 두 번째 단정밀도 복소수 벡터의 내적을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:catlas-and-cblas-vector-functions:0075:0001"><a href="cblas_cdotu_sub(_:_:_:_:_:_:">func cblas_cdotu_sub(__LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:catlas-and-cblas-vector-functions:0076:0001">두 단정밀도 복소수 벡터의 내적을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:catlas-and-cblas-vector-functions:0077:0001"><a href="cblas_ddot(_:_:_:_:_:">func cblas_ddot(__LAPACK_int, UnsafePointer&lt;Double&gt;?, __LAPACK_int, UnsafePointer&lt;Double&gt;?, __LAPACK_int) -&gt; Double</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:catlas-and-cblas-vector-functions:0078:0001">두 벡터(이중 정밀도)의 내적을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:catlas-and-cblas-vector-functions:0079:0001"><a href="cblas_dsdot(_:_:_:_:_:">func cblas_dsdot(__LAPACK_int, UnsafePointer&lt;Float&gt;?, __LAPACK_int, UnsafePointer&lt;Float&gt;?, __LAPACK_int) -&gt; Double</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:catlas-and-cblas-vector-functions:0080:0001">단정밀도 벡터 쌍의 이중 정밀도 내적을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:catlas-and-cblas-vector-functions:0081:0001"><a href="cblas_zdotc_sub(_:_:_:_:_:_:">func cblas_zdotc_sub(__LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:catlas-and-cblas-vector-functions:0082:0001">이중 정밀도 복소수 벡터의 켤레복소수와 두 번째 이중 정밀도 복소수 벡터의 내적을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:catlas-and-cblas-vector-functions:0083:0001"><a href="cblas_zdotu_sub(_:_:_:_:_:_:">func cblas_zdotu_sub(__LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:catlas-and-cblas-vector-functions:0084:0001">두 이중 정밀도 복소수 벡터의 내적을 계산합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:single-precision-float-matrix-functions:0085:0001">단정밀도 부동 소수점 행렬 함수</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-float-matrix-functions:0086:0001"><a href="cblas_sasum(_:_:_:">func cblas_sasum(__LAPACK_int, UnsafePointer&lt;Float&gt;?, __LAPACK_int) -&gt; Float</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-float-matrix-functions:0087:0001">단정밀도 벡터의 각 요소 절대값 합을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-float-matrix-functions:0088:0001"><a href="cblas_saxpy(_:_:_:_:_:_:">func cblas_saxpy(__LAPACK_int, Float, UnsafePointer&lt;Float&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-float-matrix-functions:0089:0001">상수와 벡터의 곱에 벡터를 더한 값을 계산합니다(단정밀도).</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-float-matrix-functions:0090:0001"><a href="cblas_scopy(_:_:_:_:_:">func cblas_scopy(__LAPACK_int, UnsafePointer&lt;Float&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-float-matrix-functions:0091:0001">단정밀도 벡터를 다른 벡터로 복사합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-float-matrix-functions:0092:0001"><a href="cblas_sgbmv(_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_sgbmv(CBLAS_ORDER, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, __LAPACK_int, __LAPACK_int, Float, UnsafePointer&lt;Float&gt;?, __LAPACK_int, UnsafePointer&lt;Float&gt;?, __LAPACK_int, Float, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-float-matrix-functions:0093:0001">일반 밴드 행렬을 스케일링한 후 벡터를 곱하고 벡터를 더합니다(단정밀도).</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-float-matrix-functions:0094:0001"><a href="cblas_sgemm(_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_sgemm(CBLAS_ORDER, CBLAS_TRANSPOSE, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, __LAPACK_int, Float, UnsafePointer&lt;Float&gt;?, __LAPACK_int, UnsafePointer&lt;Float&gt;?, __LAPACK_int, Float, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-float-matrix-functions:0095:0001">두 행렬을 곱합니다(단정밀도).</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-float-matrix-functions:0096:0001"><a href="cblas_sgemv(_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_sgemv(CBLAS_ORDER, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, Float, UnsafePointer&lt;Float&gt;?, __LAPACK_int, UnsafePointer&lt;Float&gt;?, __LAPACK_int, Float, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-float-matrix-functions:0097:0001">단정밀도 행렬에 벡터를 곱합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-float-matrix-functions:0098:0001"><a href="cblas_sger(_:_:_:_:_:_:_:_:_:_:">func cblas_sger(CBLAS_ORDER, __LAPACK_int, __LAPACK_int, Float, UnsafePointer&lt;Float&gt;?, __LAPACK_int, UnsafePointer&lt;Float&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-float-matrix-functions:0099:0001">벡터 X에 벡터 Y의 전치 벡터를 곱한 뒤 행렬 A를 더합니다(단정밀도).</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-float-matrix-functions:0100:0001"><a href="cblas_snrm2(_:_:_:">func cblas_snrm2(__LAPACK_int, UnsafePointer&lt;Float&gt;?, __LAPACK_int) -&gt; Float</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-float-matrix-functions:0101:0001">단정밀도 벡터의 L2 노름(유클리드 길이)을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-float-matrix-functions:0102:0001"><a href="cblas_srot(_:_:_:_:_:_:_:">func cblas_srot(__LAPACK_int, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int, Float, Float)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-float-matrix-functions:0103:0001">한 쌍의 벡터에 Givens 회전 행렬을 적용합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-float-matrix-functions:0104:0001"><a href="cblas_srotg(_:_:_:_:">func cblas_srotg(UnsafeMutablePointer&lt;Float&gt;, UnsafeMutablePointer&lt;Float&gt;, UnsafeMutablePointer&lt;Float&gt;, UnsafeMutablePointer&lt;Float&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-float-matrix-functions:0105:0001">Givens 회전 행렬을 구성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-float-matrix-functions:0106:0001"><a href="cblas_srotm(_:_:_:_:_:_:">func cblas_srotm(__LAPACK_int, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int, UnsafePointer&lt;Float&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-float-matrix-functions:0107:0001">단정밀도에서 수정된 Givens 변환을 적용합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-float-matrix-functions:0108:0001"><a href="cblas_srotmg(_:_:_:_:_:">func cblas_srotmg(UnsafeMutablePointer&lt;Float&gt;, UnsafeMutablePointer&lt;Float&gt;, UnsafeMutablePointer&lt;Float&gt;, Float, UnsafeMutablePointer&lt;Float&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-float-matrix-functions:0109:0001">변형된 Givens 회전 행렬을 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-float-matrix-functions:0110:0001"><a href="cblas_ssbmv(_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_ssbmv(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, __LAPACK_int, Float, UnsafePointer&lt;Float&gt;?, __LAPACK_int, UnsafePointer&lt;Float&gt;?, __LAPACK_int, Float, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-float-matrix-functions:0111:0001">대칭 밴드 행렬을 스케일링한 다음 벡터를 곱하고, 벡터를 더합니다(단일 정밀도).</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-float-matrix-functions:0112:0001"><a href="cblas_sscal(_:_:_:_:">func cblas_sscal(__LAPACK_int, Float, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-float-matrix-functions:0113:0001">벡터의 각 요소를 상수로 곱합니다(단일 정밀도).</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-float-matrix-functions:0114:0001"><a href="cblas_sspmv(_:_:_:_:_:_:_:_:_:_:">func cblas_sspmv(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, Float, UnsafePointer&lt;Float&gt;?, UnsafePointer&lt;Float&gt;?, __LAPACK_int, Float, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-float-matrix-functions:0115:0001">패킹된 대칭 행렬을 스케일링한 다음 벡터를 곱하고, 다른 벡터를 스케일링해 더합니다(단일 정밀도).</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-float-matrix-functions:0116:0001"><a href="cblas_sspr(_:_:_:_:_:_:_:">func cblas_sspr(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, Float, UnsafePointer&lt;Float&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Float&gt;?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-float-matrix-functions:0117:0001">랭크 1 업데이트: 스케일 계수, 벡터 및 그 전치 행렬의 곱에 패킹된 대칭 행렬을 더합니다(단일 정밀도).</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-float-matrix-functions:0118:0001"><a href="cblas_sspr2(_:_:_:_:_:_:_:_:_:">func cblas_sspr2(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, Float, UnsafePointer&lt;Float&gt;?, __LAPACK_int, UnsafePointer&lt;Float&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Float&gt;?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-float-matrix-functions:0119:0001">두 벡터를 사용해 패킹된 대칭 행렬을 랭크 2 업데이트합니다(단일 정밀도).</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-float-matrix-functions:0120:0001"><a href="cblas_sswap(_:_:_:_:_:">func cblas_sswap(__LAPACK_int, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-float-matrix-functions:0121:0001">두 벡터의 요소를 교환합니다(단일 정밀도).</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-float-matrix-functions:0122:0001"><a href="cblas_ssymm(_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_ssymm(CBLAS_ORDER, CBLAS_SIDE, CBLAS_UPLO, __LAPACK_int, __LAPACK_int, Float, UnsafePointer&lt;Float&gt;?, __LAPACK_int, UnsafePointer&lt;Float&gt;?, __LAPACK_int, Float, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-float-matrix-functions:0123:0001">행렬을 대칭 행렬과 곱합니다(단일 정밀도).</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-float-matrix-functions:0124:0001"><a href="cblas_ssymv(_:_:_:_:_:_:_:_:_:_:_:">func cblas_ssymv(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, Float, UnsafePointer&lt;Float&gt;?, __LAPACK_int, UnsafePointer&lt;Float&gt;?, __LAPACK_int, Float, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-float-matrix-functions:0125:0001">대칭 행렬을 스케일링하고 벡터를 곱한 다음, 다른 벡터를 스케일링해 더합니다(단일 정밀도).</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-float-matrix-functions:0126:0001"><a href="cblas_ssyr(_:_:_:_:_:_:_:_:">func cblas_ssyr(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, Float, UnsafePointer&lt;Float&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-float-matrix-functions:0127:0001">랭크 1 업데이트: 스케일 계수, 벡터 및 그 전치 행렬의 곱에 대칭 행렬을 더합니다(단일 정밀도).</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-float-matrix-functions:0128:0001"><a href="cblas_ssyr2(_:_:_:_:_:_:_:_:_:_:">func cblas_ssyr2(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, Float, UnsafePointer&lt;Float&gt;?, __LAPACK_int, UnsafePointer&lt;Float&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-float-matrix-functions:0129:0001">두 벡터를 사용해 대칭 행렬을 랭크 2 업데이트합니다(단일 정밀도).</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-float-matrix-functions:0130:0001"><a href="cblas_ssyr2k(_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_ssyr2k(CBLAS_ORDER, CBLAS_UPLO, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, Float, UnsafePointer&lt;Float&gt;?, __LAPACK_int, UnsafePointer&lt;Float&gt;?, __LAPACK_int, Float, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-float-matrix-functions:0131:0001">대칭 행렬에 대해 rank-2k 업데이트를 수행합니다(단일 정밀도).</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-float-matrix-functions:0132:0001"><a href="cblas_ssyrk(_:_:_:_:_:_:_:_:_:_:_:">func cblas_ssyrk(CBLAS_ORDER, CBLAS_UPLO, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, Float, UnsafePointer&lt;Float&gt;?, __LAPACK_int, Float, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-float-matrix-functions:0133:0001">랭크-k 업데이트: 대칭 행렬을 그 전치 행렬과 곱한 뒤 두 번째 행렬을 더합니다(단일 정밀도).</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-float-matrix-functions:0134:0001"><a href="cblas_stbmv(_:_:_:_:_:_:_:_:_:_:">func cblas_stbmv(CBLAS_ORDER, CBLAS_UPLO, CBLAS_TRANSPOSE, CBLAS_DIAG, __LAPACK_int, __LAPACK_int, UnsafePointer&lt;Float&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-float-matrix-functions:0135:0001">삼각 밴드 행렬을 스케일링한 다음 벡터를 곱합니다(단일 정밀도).</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-float-matrix-functions:0136:0001"><a href="cblas_stbsv(_:_:_:_:_:_:_:_:_:_:">func cblas_stbsv(CBLAS_ORDER, CBLAS_UPLO, CBLAS_TRANSPOSE, CBLAS_DIAG, __LAPACK_int, __LAPACK_int, UnsafePointer&lt;Float&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-float-matrix-functions:0137:0001">삼각 밴드 형태의 연립 방정식을 풉니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-float-matrix-functions:0138:0001"><a href="cblas_stpmv(_:_:_:_:_:_:_:_:">func cblas_stpmv(CBLAS_ORDER, CBLAS_UPLO, CBLAS_TRANSPOSE, CBLAS_DIAG, __LAPACK_int, UnsafePointer&lt;Float&gt;?, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-float-matrix-functions:0139:0001">삼각 행렬을 벡터와 곱한 다음 벡터를 더합니다(단일 정밀도).</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-float-matrix-functions:0140:0001"><a href="cblas_stpsv(_:_:_:_:_:_:_:_:">func cblas_stpsv(CBLAS_ORDER, CBLAS_UPLO, CBLAS_TRANSPOSE, CBLAS_DIAG, __LAPACK_int, UnsafePointer&lt;Float&gt;?, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-float-matrix-functions:0141:0001">패킹된 삼각 시스템의 연립 방정식을 풉니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-float-matrix-functions:0142:0001"><a href="cblas_strmm(_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_strmm(CBLAS_ORDER, CBLAS_SIDE, CBLAS_UPLO, CBLAS_TRANSPOSE, CBLAS_DIAG, __LAPACK_int, __LAPACK_int, Float, UnsafePointer&lt;Float&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-float-matrix-functions:0143:0001">삼각 행렬을 스케일링하고 행렬과 곱합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-float-matrix-functions:0144:0001"><a href="cblas_strmv(_:_:_:_:_:_:_:_:_:">func cblas_strmv(CBLAS_ORDER, CBLAS_UPLO, CBLAS_TRANSPOSE, CBLAS_DIAG, __LAPACK_int, UnsafePointer&lt;Float&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-float-matrix-functions:0145:0001">삼각 행렬을 벡터와 곱합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-float-matrix-functions:0146:0001"><a href="cblas_strsm(_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_strsm(CBLAS_ORDER, CBLAS_SIDE, CBLAS_UPLO, CBLAS_TRANSPOSE, CBLAS_DIAG, __LAPACK_int, __LAPACK_int, Float, UnsafePointer&lt;Float&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-float-matrix-functions:0147:0001">Solves a triangular system of equations with multiple values for the right side.</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-float-matrix-functions:0148:0001"><a href="cblas_strsv(_:_:_:_:_:_:_:_:_:">func cblas_strsv(CBLAS_ORDER, CBLAS_UPLO, CBLAS_TRANSPOSE, CBLAS_DIAG, __LAPACK_int, UnsafePointer&lt;Float&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-float-matrix-functions:0149:0001">Solves a triangular system of equations with a single value for the right side.</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-float-matrix-functions:0150:0001"><a href="appleblas_sgeadd(_:_:_:_:_:_:_:_:_:_:_:_:_:">func appleblas_sgeadd(CBLAS_ORDER, CBLAS_TRANSPOSE, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, Float, UnsafePointer&lt;Float&gt;?, __LAPACK_int, Float, UnsafePointer&lt;Float&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Float&gt;, __LAPACK_int)</a>.md)</span>

### <span class="ko-segment" data-segment-id="seg:heading:single-precision-complex-matrix-functions:0151:0001">Single-precision complex matrix functions</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-complex-matrix-functions:0152:0001"><a href="cblas_caxpy(_:_:_:_:_:_:">func cblas_caxpy(__LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-complex-matrix-functions:0153:0001">Computes a constant times a vector plus a vector (single-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-complex-matrix-functions:0154:0001"><a href="cblas_ccopy(_:_:_:_:_:">func cblas_ccopy(__LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-complex-matrix-functions:0155:0001">Copies a vector to another vector (single-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-complex-matrix-functions:0156:0001"><a href="cblas_cgbmv(_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_cgbmv(CBLAS_ORDER, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-complex-matrix-functions:0157:0001">Scales a general band matrix, then multiplies by a vector, then adds a vector (single-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-complex-matrix-functions:0158:0001"><a href="cblas_cgemm(_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_cgemm(CBLAS_ORDER, CBLAS_TRANSPOSE, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-complex-matrix-functions:0159:0001">Multiplies two matrices (single-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-complex-matrix-functions:0160:0001"><a href="cblas_cgemv(_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_cgemv(CBLAS_ORDER, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-complex-matrix-functions:0161:0001">Multiplies a matrix by a vector (single-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-complex-matrix-functions:0162:0001"><a href="cblas_cgerc(_:_:_:_:_:_:_:_:_:_:">func cblas_cgerc(CBLAS_ORDER, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-complex-matrix-functions:0163:0001">Multiplies vector X by the conjugate transpose of vector Y, then adds matrix A (single-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-complex-matrix-functions:0164:0001"><a href="cblas_cgeru(_:_:_:_:_:_:_:_:_:_:">func cblas_cgeru(CBLAS_ORDER, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-complex-matrix-functions:0165:0001">Multiplies vector X by the transpose of vector Y, then adds matrix A (single-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-complex-matrix-functions:0166:0001"><a href="cblas_chbmv(_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_chbmv(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-complex-matrix-functions:0167:0001">Scales a Hermitian band matrix, then multiplies by a vector, then adds a vector (single-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-complex-matrix-functions:0168:0001"><a href="cblas_chemm(_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_chemm(CBLAS_ORDER, CBLAS_SIDE, CBLAS_UPLO, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-complex-matrix-functions:0169:0001">Multiplies two Hermitian matrices (single-precision complex), then adds a third (with scaling).</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-complex-matrix-functions:0170:0001"><a href="cblas_chemv(_:_:_:_:_:_:_:_:_:_:_:">func cblas_chemv(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-complex-matrix-functions:0171:0001">Scales and multiplies a Hermitian matrix by a vector, then adds a second (scaled) vector.</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-complex-matrix-functions:0172:0001"><a href="cblas_cher(_:_:_:_:_:_:_:_:">func cblas_cher(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, Float, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-complex-matrix-functions:0173:0001">Hermitian rank 1 update: adds the product of a scaling factor, vector <code>X</code>, and the conjugate transpose of <code>X</code> to matrix <code>A</code>.</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-complex-matrix-functions:0174:0001"><a href="cblas_cher2(_:_:_:_:_:_:_:_:_:_:">func cblas_cher2(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-complex-matrix-functions:0175:0001">Hermitian rank 2 update: adds the product of a scaling factor, vector <code>X</code>, and the conjugate transpose of vector <code>Y</code> to the product of the conjugate of the scaling factor, vector <code>Y</code>, and the conjugate transpose of vector <code>X</code>, and adds the result to matrix <code>A</code>.</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-complex-matrix-functions:0176:0001"><a href="cblas_cher2k(_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_cher2k(CBLAS_ORDER, CBLAS_UPLO, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, Float, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-complex-matrix-functions:0177:0001">Performs a rank-2k update of a complex Hermitian matrix (single-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-complex-matrix-functions:0178:0001"><a href="cblas_cherk(_:_:_:_:_:_:_:_:_:_:_:">func cblas_cherk(CBLAS_ORDER, CBLAS_UPLO, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, Float, OpaquePointer?, __LAPACK_int, Float, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-complex-matrix-functions:0179:0001">Rank-k update—multiplies a Hermitian matrix by its transpose and adds a second matrix (single precision).</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-complex-matrix-functions:0180:0001"><a href="cblas_chpmv(_:_:_:_:_:_:_:_:_:_:">func cblas_chpmv(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, OpaquePointer, OpaquePointer?, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-complex-matrix-functions:0181:0001">Scales a packed hermitian matrix, multiplies it by a vector, and adds a scaled vector.</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-complex-matrix-functions:0182:0001"><a href="cblas_chpr(_:_:_:_:_:_:_:">func cblas_chpr(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, Float, OpaquePointer?, __LAPACK_int, OpaquePointer?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-complex-matrix-functions:0183:0001">Scales and multiplies a vector times its conjugate transpose, then adds a matrix.</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-complex-matrix-functions:0184:0001"><a href="cblas_chpr2(_:_:_:_:_:_:_:_:_:">func cblas_chpr2(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-complex-matrix-functions:0185:0001">Multiplies a vector times the conjugate transpose of a second vector and vice-versa, sums the results, and adds a matrix.</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-complex-matrix-functions:0186:0001"><a href="cblas_crotg(_:_:_:_:">func cblas_crotg(OpaquePointer, OpaquePointer, UnsafeMutablePointer&lt;Float&gt;, OpaquePointer)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-complex-matrix-functions:0187:0001">Constructs a complex Givens rotation.</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-complex-matrix-functions:0188:0001"><a href="cblas_cscal(_:_:_:_:">func cblas_cscal(__LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-complex-matrix-functions:0189:0001">Multiplies each element of a vector by a constant (single-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-complex-matrix-functions:0190:0001"><a href="cblas_csrot(_:_:_:_:_:_:_:">func cblas_csrot(__LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, Float, Float)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-complex-matrix-functions:0191:0001">Applies a Givens rotation matrix to a pair of complex vectors.</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-complex-matrix-functions:0192:0001"><a href="cblas_csscal(_:_:_:_:">func cblas_csscal(__LAPACK_int, Float, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-complex-matrix-functions:0193:0001">Multiplies each element of a vector by a constant (single-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-complex-matrix-functions:0194:0001"><a href="cblas_cswap(_:_:_:_:_:">func cblas_cswap(__LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-complex-matrix-functions:0195:0001">Exchanges the elements of two vectors (single-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-complex-matrix-functions:0196:0001"><a href="cblas_csymm(_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_csymm(CBLAS_ORDER, CBLAS_SIDE, CBLAS_UPLO, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-complex-matrix-functions:0197:0001">Multiplies a matrix by a symmetric matrix (single-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-complex-matrix-functions:0198:0001"><a href="cblas_csyr2k(_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_csyr2k(CBLAS_ORDER, CBLAS_UPLO, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-complex-matrix-functions:0199:0001">Performs a rank-2k update of a symmetric matrix (single-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-complex-matrix-functions:0200:0001"><a href="cblas_csyrk(_:_:_:_:_:_:_:_:_:_:_:">func cblas_csyrk(CBLAS_ORDER, CBLAS_UPLO, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-complex-matrix-functions:0201:0001">Rank-k update—multiplies a symmetric matrix by its transpose and adds a second matrix (single-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-complex-matrix-functions:0202:0001"><a href="cblas_ctbmv(_:_:_:_:_:_:_:_:_:_:">func cblas_ctbmv(CBLAS_ORDER, CBLAS_UPLO, CBLAS_TRANSPOSE, CBLAS_DIAG, __LAPACK_int, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-complex-matrix-functions:0203:0001">Scales a triangular band matrix, then multiplies by a vector (single-precision compex).</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-complex-matrix-functions:0204:0001"><a href="cblas_ctbsv(_:_:_:_:_:_:_:_:_:_:">func cblas_ctbsv(CBLAS_ORDER, CBLAS_UPLO, CBLAS_TRANSPOSE, CBLAS_DIAG, __LAPACK_int, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-complex-matrix-functions:0205:0001">Solves a triangular banded system of equations.</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-complex-matrix-functions:0206:0001"><a href="cblas_ctpmv(_:_:_:_:_:_:_:_:">func cblas_ctpmv(CBLAS_ORDER, CBLAS_UPLO, CBLAS_TRANSPOSE, CBLAS_DIAG, __LAPACK_int, OpaquePointer?, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-complex-matrix-functions:0207:0001">Multiplies a triangular matrix by a vector, then adds a vector (single-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-complex-matrix-functions:0208:0001"><a href="cblas_ctpsv(_:_:_:_:_:_:_:_:">func cblas_ctpsv(CBLAS_ORDER, CBLAS_UPLO, CBLAS_TRANSPOSE, CBLAS_DIAG, __LAPACK_int, OpaquePointer?, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-complex-matrix-functions:0209:0001">Solves a packed triangular system of equations.</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-complex-matrix-functions:0210:0001"><a href="cblas_ctrmm(_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_ctrmm(CBLAS_ORDER, CBLAS_SIDE, CBLAS_UPLO, CBLAS_TRANSPOSE, CBLAS_DIAG, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-complex-matrix-functions:0211:0001">Scales a triangular matrix and multiplies it by a matrix.</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-complex-matrix-functions:0212:0001"><a href="cblas_ctrmv(_:_:_:_:_:_:_:_:_:">func cblas_ctrmv(CBLAS_ORDER, CBLAS_UPLO, CBLAS_TRANSPOSE, CBLAS_DIAG, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-complex-matrix-functions:0213:0001">Multiplies a triangular matrix by a vector.</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-complex-matrix-functions:0214:0001"><a href="cblas_ctrsm(_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_ctrsm(CBLAS_ORDER, CBLAS_SIDE, CBLAS_UPLO, CBLAS_TRANSPOSE, CBLAS_DIAG, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-complex-matrix-functions:0215:0001">Solves a triangular system of equations with multiple values for the right side.</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-complex-matrix-functions:0216:0001"><a href="cblas_ctrsv(_:_:_:_:_:_:_:_:_:">func cblas_ctrsv(CBLAS_ORDER, CBLAS_UPLO, CBLAS_TRANSPOSE, CBLAS_DIAG, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-complex-matrix-functions:0217:0001">Solves a triangular system of equations with a single value for the right side.</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-complex-matrix-functions:0218:0001"><a href="cblas_scasum(_:_:_:">func cblas_scasum(__LAPACK_int, OpaquePointer?, __LAPACK_int) -&gt; Float</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-complex-matrix-functions:0219:0001">Computes the sum of the absolute values of real and imaginary parts of elements in a vector (single-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-complex-matrix-functions:0220:0001"><a href="cblas_scnrm2(_:_:_:">func cblas_scnrm2(__LAPACK_int, OpaquePointer?, __LAPACK_int) -&gt; Float</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-complex-matrix-functions:0221:0001">Computes the unitary norm of a vector (single-precision complex).</span>

### <span class="ko-segment" data-segment-id="seg:heading:double-precision-float-matrix-functions:0222:0001">Double-precision float matrix functions</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-float-matrix-functions:0223:0001"><a href="cblas_dasum(_:_:_:">func cblas_dasum(__LAPACK_int, UnsafePointer&lt;Double&gt;?, __LAPACK_int) -&gt; Double</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-float-matrix-functions:0224:0001">Computes the sum of the absolute values of elements in a vector (double-precision).</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-float-matrix-functions:0225:0001"><a href="cblas_daxpy(_:_:_:_:_:_:">func cblas_daxpy(__LAPACK_int, Double, UnsafePointer&lt;Double&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-float-matrix-functions:0226:0001">Computes a constant times a vector plus a vector (double-precision).</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-float-matrix-functions:0227:0001"><a href="cblas_dcopy(_:_:_:_:_:">func cblas_dcopy(__LAPACK_int, UnsafePointer&lt;Double&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-float-matrix-functions:0228:0001">Copies a vector to another vector (double-precision).</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-float-matrix-functions:0229:0001"><a href="cblas_dgbmv(_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_dgbmv(CBLAS_ORDER, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, __LAPACK_int, __LAPACK_int, Double, UnsafePointer&lt;Double&gt;?, __LAPACK_int, UnsafePointer&lt;Double&gt;?, __LAPACK_int, Double, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-float-matrix-functions:0230:0001">Scales a general band matrix, then multiplies by a vector, then adds a vector (double precision).</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-float-matrix-functions:0231:0001"><a href="cblas_dgemm(_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_dgemm(CBLAS_ORDER, CBLAS_TRANSPOSE, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, __LAPACK_int, Double, UnsafePointer&lt;Double&gt;?, __LAPACK_int, UnsafePointer&lt;Double&gt;?, __LAPACK_int, Double, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-float-matrix-functions:0232:0001">Multiplies two matrices (double-precision).</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-float-matrix-functions:0233:0001"><a href="cblas_dgemv(_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_dgemv(CBLAS_ORDER, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, Double, UnsafePointer&lt;Double&gt;?, __LAPACK_int, UnsafePointer&lt;Double&gt;?, __LAPACK_int, Double, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-float-matrix-functions:0234:0001">Multiplies a matrix by a vector (double precision).</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-float-matrix-functions:0235:0001"><a href="cblas_dger(_:_:_:_:_:_:_:_:_:_:">func cblas_dger(CBLAS_ORDER, __LAPACK_int, __LAPACK_int, Double, UnsafePointer&lt;Double&gt;?, __LAPACK_int, UnsafePointer&lt;Double&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-float-matrix-functions:0236:0001">Multiplies vector X by the transpose of vector Y, then adds matrix A (double precison).</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-float-matrix-functions:0237:0001"><a href="cblas_dnrm2(_:_:_:">func cblas_dnrm2(__LAPACK_int, UnsafePointer&lt;Double&gt;?, __LAPACK_int) -&gt; Double</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-float-matrix-functions:0238:0001">Computes the L2 norm (Euclidian length) of a vector (double precision).</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-float-matrix-functions:0239:0001"><a href="cblas_drot(_:_:_:_:_:_:_:">func cblas_drot(__LAPACK_int, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int, Double, Double)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-float-matrix-functions:0240:0001">Applies a Givens rotation matrix to a pair of vectors.</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-float-matrix-functions:0241:0001"><a href="cblas_drotg(_:_:_:_:">func cblas_drotg(UnsafeMutablePointer&lt;Double&gt;, UnsafeMutablePointer&lt;Double&gt;, UnsafeMutablePointer&lt;Double&gt;, UnsafeMutablePointer&lt;Double&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-float-matrix-functions:0242:0001">Constructs a Givens rotation matrix.</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-float-matrix-functions:0243:0001"><a href="cblas_drotm(_:_:_:_:_:_:">func cblas_drotm(__LAPACK_int, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int, UnsafePointer&lt;Double&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-float-matrix-functions:0244:0001">Applies a modified Givens transformation (single precision).</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-float-matrix-functions:0245:0001"><a href="cblas_drotmg(_:_:_:_:_:">func cblas_drotmg(UnsafeMutablePointer&lt;Double&gt;, UnsafeMutablePointer&lt;Double&gt;, UnsafeMutablePointer&lt;Double&gt;, Double, UnsafeMutablePointer&lt;Double&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-float-matrix-functions:0246:0001">Generates a modified Givens rotation matrix.</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-float-matrix-functions:0247:0001"><a href="cblas_dsbmv(_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_dsbmv(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, __LAPACK_int, Double, UnsafePointer&lt;Double&gt;?, __LAPACK_int, UnsafePointer&lt;Double&gt;?, __LAPACK_int, Double, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-float-matrix-functions:0248:0001">Scales a symmetric band matrix, then multiplies by a vector, then adds a vector (double precision).</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-float-matrix-functions:0249:0001"><a href="cblas_dscal(_:_:_:_:">func cblas_dscal(__LAPACK_int, Double, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-float-matrix-functions:0250:0001">Multiplies each element of a vector by a constant (double-precision).</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-float-matrix-functions:0251:0001"><a href="cblas_dspmv(_:_:_:_:_:_:_:_:_:_:">func cblas_dspmv(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, Double, UnsafePointer&lt;Double&gt;?, UnsafePointer&lt;Double&gt;?, __LAPACK_int, Double, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-float-matrix-functions:0252:0001">Scales a packed symmetric matrix, then multiplies by a vector, then scales and adds another vector (double precision).</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-float-matrix-functions:0253:0001"><a href="cblas_dspr(_:_:_:_:_:_:_:">func cblas_dspr(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, Double, UnsafePointer&lt;Double&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Double&gt;?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-float-matrix-functions:0254:0001">Rank one update: adds a packed symmetric matrix to the product of a scaling factor, a vector, and its transpose (double precision).</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-float-matrix-functions:0255:0001"><a href="cblas_dspr2(_:_:_:_:_:_:_:_:_:">func cblas_dspr2(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, Double, UnsafePointer&lt;Double&gt;?, __LAPACK_int, UnsafePointer&lt;Double&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Double&gt;?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-float-matrix-functions:0256:0001">Rank two update of a packed symmetric matrix using two vectors (single precision).</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-float-matrix-functions:0257:0001"><a href="cblas_dswap(_:_:_:_:_:">func cblas_dswap(__LAPACK_int, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-float-matrix-functions:0258:0001">Exchanges the elements of two vectors (double precision).</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-float-matrix-functions:0259:0001"><a href="cblas_dsymm(_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_dsymm(CBLAS_ORDER, CBLAS_SIDE, CBLAS_UPLO, __LAPACK_int, __LAPACK_int, Double, UnsafePointer&lt;Double&gt;?, __LAPACK_int, UnsafePointer&lt;Double&gt;?, __LAPACK_int, Double, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-float-matrix-functions:0260:0001">Multiplies a matrix by a symmetric matrix (double-precision).</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-float-matrix-functions:0261:0001"><a href="cblas_dsymv(_:_:_:_:_:_:_:_:_:_:_:">func cblas_dsymv(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, Double, UnsafePointer&lt;Double&gt;?, __LAPACK_int, UnsafePointer&lt;Double&gt;?, __LAPACK_int, Double, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-float-matrix-functions:0262:0001">Scales a symmetric matrix, multiplies by a vector, then scales and adds another vector (single precision).</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-float-matrix-functions:0263:0001"><a href="cblas_dsyr(_:_:_:_:_:_:_:_:">func cblas_dsyr(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, Double, UnsafePointer&lt;Double&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-float-matrix-functions:0264:0001">Rank one update: adds a symmetric matrix to the product of a scaling factor, a vector, and its transpose (double precision).</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-float-matrix-functions:0265:0001"><a href="cblas_dsyr2(_:_:_:_:_:_:_:_:_:_:">func cblas_dsyr2(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, Double, UnsafePointer&lt;Double&gt;?, __LAPACK_int, UnsafePointer&lt;Double&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-float-matrix-functions:0266:0001">Rank two update of a symmetric matrix using two vectors (single precision).</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-float-matrix-functions:0267:0001"><a href="cblas_dsyr2k(_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_dsyr2k(CBLAS_ORDER, CBLAS_UPLO, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, Double, UnsafePointer&lt;Double&gt;?, __LAPACK_int, UnsafePointer&lt;Double&gt;?, __LAPACK_int, Double, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-float-matrix-functions:0268:0001">Performs a rank-2k update of a symmetric matrix (double precision).</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-float-matrix-functions:0269:0001"><a href="cblas_dsyrk(_:_:_:_:_:_:_:_:_:_:_:">func cblas_dsyrk(CBLAS_ORDER, CBLAS_UPLO, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, Double, UnsafePointer&lt;Double&gt;?, __LAPACK_int, Double, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-float-matrix-functions:0270:0001">Rank-k update—multiplies a symmetric matrix by its transpose and adds a second matrix (double precision).</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-float-matrix-functions:0271:0001"><a href="cblas_dtbmv(_:_:_:_:_:_:_:_:_:_:">func cblas_dtbmv(CBLAS_ORDER, CBLAS_UPLO, CBLAS_TRANSPOSE, CBLAS_DIAG, __LAPACK_int, __LAPACK_int, UnsafePointer&lt;Double&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-float-matrix-functions:0272:0001">Scales a triangular band matrix, then multiplies by a vector (double precision).</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-float-matrix-functions:0273:0001"><a href="cblas_dtbsv(_:_:_:_:_:_:_:_:_:_:">func cblas_dtbsv(CBLAS_ORDER, CBLAS_UPLO, CBLAS_TRANSPOSE, CBLAS_DIAG, __LAPACK_int, __LAPACK_int, UnsafePointer&lt;Double&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-float-matrix-functions:0274:0001">Solves a triangular banded system of equations.</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-float-matrix-functions:0275:0001"><a href="cblas_dtpmv(_:_:_:_:_:_:_:_:">func cblas_dtpmv(CBLAS_ORDER, CBLAS_UPLO, CBLAS_TRANSPOSE, CBLAS_DIAG, __LAPACK_int, UnsafePointer&lt;Double&gt;?, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-float-matrix-functions:0276:0001">Multiplies a triangular matrix by a vector, then adds a vector (double precision).</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-float-matrix-functions:0277:0001"><a href="cblas_dtpsv(_:_:_:_:_:_:_:_:">func cblas_dtpsv(CBLAS_ORDER, CBLAS_UPLO, CBLAS_TRANSPOSE, CBLAS_DIAG, __LAPACK_int, UnsafePointer&lt;Double&gt;?, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-float-matrix-functions:0278:0001">Solves a packed triangular system of equations.</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-float-matrix-functions:0279:0001"><a href="cblas_dtrmm(_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_dtrmm(CBLAS_ORDER, CBLAS_SIDE, CBLAS_UPLO, CBLAS_TRANSPOSE, CBLAS_DIAG, __LAPACK_int, __LAPACK_int, Double, UnsafePointer&lt;Double&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-float-matrix-functions:0280:0001">Scales a triangular matrix and multiplies it by a matrix.</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-float-matrix-functions:0281:0001"><a href="cblas_dtrmv(_:_:_:_:_:_:_:_:_:">func cblas_dtrmv(CBLAS_ORDER, CBLAS_UPLO, CBLAS_TRANSPOSE, CBLAS_DIAG, __LAPACK_int, UnsafePointer&lt;Double&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-float-matrix-functions:0282:0001">Multiplies a triangular matrix by a vector.</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-float-matrix-functions:0283:0001"><a href="cblas_dtrsm(_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_dtrsm(CBLAS_ORDER, CBLAS_SIDE, CBLAS_UPLO, CBLAS_TRANSPOSE, CBLAS_DIAG, __LAPACK_int, __LAPACK_int, Double, UnsafePointer&lt;Double&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-float-matrix-functions:0284:0001">Solves a triangular system of equations with multiple values for the right side.</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-float-matrix-functions:0285:0001"><a href="cblas_dtrsv(_:_:_:_:_:_:_:_:_:">func cblas_dtrsv(CBLAS_ORDER, CBLAS_UPLO, CBLAS_TRANSPOSE, CBLAS_DIAG, __LAPACK_int, UnsafePointer&lt;Double&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-float-matrix-functions:0286:0001">Solves a triangular system of equations with a single value for the right side.</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-float-matrix-functions:0287:0001"><a href="appleblas_dgeadd(_:_:_:_:_:_:_:_:_:_:_:_:_:">func appleblas_dgeadd(CBLAS_ORDER, CBLAS_TRANSPOSE, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, Double, UnsafePointer&lt;Double&gt;?, __LAPACK_int, Double, UnsafePointer&lt;Double&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Double&gt;, __LAPACK_int)</a>.md)</span>

### <span class="ko-segment" data-segment-id="seg:heading:double-precision-complex-matrix-functions:0288:0001">Double-precision complex matrix functions</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-complex-matrix-functions:0289:0001"><a href="cblas_dzasum(_:_:_:">func cblas_dzasum(__LAPACK_int, OpaquePointer?, __LAPACK_int) -&gt; Double</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-complex-matrix-functions:0290:0001">Computes the sum of the absolute values of real and imaginary parts of elements in a vector (single-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-complex-matrix-functions:0291:0001"><a href="cblas_dznrm2(_:_:_:">func cblas_dznrm2(__LAPACK_int, OpaquePointer?, __LAPACK_int) -&gt; Double</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-complex-matrix-functions:0292:0001">Computes the unitary norm of a vector (double-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-complex-matrix-functions:0293:0001"><a href="cblas_zaxpy(_:_:_:_:_:_:">func cblas_zaxpy(__LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-complex-matrix-functions:0294:0001">Computes a constant times a vector plus a vector (double-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-complex-matrix-functions:0295:0001"><a href="cblas_zcopy(_:_:_:_:_:">func cblas_zcopy(__LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-complex-matrix-functions:0296:0001">Copies a vector to another vector (double-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-complex-matrix-functions:0297:0001"><a href="cblas_zdrot(_:_:_:_:_:_:_:">func cblas_zdrot(__LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, Double, Double)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-complex-matrix-functions:0298:0001">Applies a Givens rotation matrix to a pair of complex vectors.</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-complex-matrix-functions:0299:0001"><a href="cblas_zdscal(_:_:_:_:">func cblas_zdscal(__LAPACK_int, Double, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-complex-matrix-functions:0300:0001">Multiplies each element of a vector by a constant (double-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-complex-matrix-functions:0301:0001"><a href="cblas_zgbmv(_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_zgbmv(CBLAS_ORDER, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-complex-matrix-functions:0302:0001">Scales a general band matrix, then multiplies by a vector, then adds a vector (double-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-complex-matrix-functions:0303:0001"><a href="cblas_zgemm(_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_zgemm(CBLAS_ORDER, CBLAS_TRANSPOSE, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-complex-matrix-functions:0304:0001">Multiplies two matrices (double-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-complex-matrix-functions:0305:0001"><a href="cblas_zgemv(_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_zgemv(CBLAS_ORDER, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-complex-matrix-functions:0306:0001">Multiplies a matrix by a vector (double-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-complex-matrix-functions:0307:0001"><a href="cblas_zgerc(_:_:_:_:_:_:_:_:_:_:">func cblas_zgerc(CBLAS_ORDER, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-complex-matrix-functions:0308:0001">Multiplies vector X by the conjugate transpose of vector Y, then adds matrix A (double-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-complex-matrix-functions:0309:0001"><a href="cblas_zgeru(_:_:_:_:_:_:_:_:_:_:">func cblas_zgeru(CBLAS_ORDER, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-complex-matrix-functions:0310:0001">Multiplies vector X by the transpose of vector Y, then adds matrix A (double-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-complex-matrix-functions:0311:0001"><a href="cblas_zhbmv(_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_zhbmv(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-complex-matrix-functions:0312:0001">Scales a Hermitian band matrix, then multiplies by a vector, then adds a vector (double-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-complex-matrix-functions:0313:0001"><a href="cblas_zhemm(_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_zhemm(CBLAS_ORDER, CBLAS_SIDE, CBLAS_UPLO, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-complex-matrix-functions:0314:0001">Multiplies two Hermitian matrices (double-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-complex-matrix-functions:0315:0001"><a href="cblas_zhemv(_:_:_:_:_:_:_:_:_:_:_:">func cblas_zhemv(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-complex-matrix-functions:0316:0001">Scales and multiplies a Hermitian matrix by a vector, then adds a second (scaled) vector.</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-complex-matrix-functions:0317:0001"><a href="cblas_zher(_:_:_:_:_:_:_:_:">func cblas_zher(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, Double, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-complex-matrix-functions:0318:0001">Adds the product of a scaling factor, vector <code>X</code>, and the conjugate transpose of <code>X</code> to matrix <code>A</code>.</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-complex-matrix-functions:0319:0001"><a href="cblas_zher2(_:_:_:_:_:_:_:_:_:_:">func cblas_zher2(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-complex-matrix-functions:0320:0001">Hermitian rank 2 update: adds the product of a scaling factor, vector <code>X</code>, and the conjugate transpose of vector <code>Y</code> to the product of the conjugate of the scaling factor, vector <code>Y</code>, and the conjugate transpose of vector <code>X</code>, and adds the result to matrix <code>A</code>.</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-complex-matrix-functions:0321:0001"><a href="cblas_zher2k(_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_zher2k(CBLAS_ORDER, CBLAS_UPLO, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, Double, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-complex-matrix-functions:0322:0001">Performs a rank-2k update of a complex Hermitian matrix (double-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-complex-matrix-functions:0323:0001"><a href="cblas_zherk(_:_:_:_:_:_:_:_:_:_:_:">func cblas_zherk(CBLAS_ORDER, CBLAS_UPLO, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, Double, OpaquePointer?, __LAPACK_int, Double, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-complex-matrix-functions:0324:0001">Rank-k update—multiplies a Hermitian matrix by its transpose and adds a second matrix (single precision).</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-complex-matrix-functions:0325:0001"><a href="cblas_zhpmv(_:_:_:_:_:_:_:_:_:_:">func cblas_zhpmv(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, OpaquePointer, OpaquePointer?, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-complex-matrix-functions:0326:0001">Scales a packed hermitian matrix, multiplies it by a vector, and adds a scaled vector.</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-complex-matrix-functions:0327:0001"><a href="cblas_zhpr(_:_:_:_:_:_:_:">func cblas_zhpr(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, Double, OpaquePointer?, __LAPACK_int, OpaquePointer?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-complex-matrix-functions:0328:0001">Scales and multiplies a vector times its conjugate transpose, then adds a matrix.</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-complex-matrix-functions:0329:0001"><a href="cblas_zhpr2(_:_:_:_:_:_:_:_:_:">func cblas_zhpr2(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-complex-matrix-functions:0330:0001">Multiplies a vector times the conjugate transpose of a second vector and vice-versa, sums the results, and adds a matrix.</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-complex-matrix-functions:0331:0001"><a href="cblas_zrotg(_:_:_:_:">func cblas_zrotg(OpaquePointer, OpaquePointer, UnsafeMutablePointer&lt;Double&gt;, OpaquePointer)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-complex-matrix-functions:0332:0001">Constructs a complex Givens rotation.</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-complex-matrix-functions:0333:0001"><a href="cblas_zscal(_:_:_:_:">func cblas_zscal(__LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-complex-matrix-functions:0334:0001">Multiplies each element of a vector by a constant (double-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-complex-matrix-functions:0335:0001"><a href="cblas_zswap(_:_:_:_:_:">func cblas_zswap(__LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-complex-matrix-functions:0336:0001">Exchanges the elements of two vectors (double-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-complex-matrix-functions:0337:0001"><a href="cblas_zsymm(_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_zsymm(CBLAS_ORDER, CBLAS_SIDE, CBLAS_UPLO, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-complex-matrix-functions:0338:0001">Multiplies a matrix by a symmetric matrix (double-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-complex-matrix-functions:0339:0001"><a href="cblas_zsyr2k(_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_zsyr2k(CBLAS_ORDER, CBLAS_UPLO, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-complex-matrix-functions:0340:0001">Performs a rank-2k update of a symmetric matrix (double-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-complex-matrix-functions:0341:0001"><a href="cblas_zsyrk(_:_:_:_:_:_:_:_:_:_:_:">func cblas_zsyrk(CBLAS_ORDER, CBLAS_UPLO, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-complex-matrix-functions:0342:0001">Rank-k update—multiplies a symmetric matrix by its transpose and adds a second matrix (double-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-complex-matrix-functions:0343:0001"><a href="cblas_ztbmv(_:_:_:_:_:_:_:_:_:_:">func cblas_ztbmv(CBLAS_ORDER, CBLAS_UPLO, CBLAS_TRANSPOSE, CBLAS_DIAG, __LAPACK_int, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-complex-matrix-functions:0344:0001">Scales a triangular band matrix, then multiplies by a vector (double-precision complex).</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-complex-matrix-functions:0345:0001"><a href="cblas_ztbsv(_:_:_:_:_:_:_:_:_:_:">func cblas_ztbsv(CBLAS_ORDER, CBLAS_UPLO, CBLAS_TRANSPOSE, CBLAS_DIAG, __LAPACK_int, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-complex-matrix-functions:0346:0001">Solves a triangular banded system of equations.</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-complex-matrix-functions:0347:0001"><a href="cblas_ztpmv(_:_:_:_:_:_:_:_:">func cblas_ztpmv(CBLAS_ORDER, CBLAS_UPLO, CBLAS_TRANSPOSE, CBLAS_DIAG, __LAPACK_int, OpaquePointer?, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-complex-matrix-functions:0348:0001">Multiplies a triangular matrix by a vector, then adds a vector (double-precision compex).</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-complex-matrix-functions:0349:0001"><a href="cblas_ztpsv(_:_:_:_:_:_:_:_:">func cblas_ztpsv(CBLAS_ORDER, CBLAS_UPLO, CBLAS_TRANSPOSE, CBLAS_DIAG, __LAPACK_int, OpaquePointer?, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-complex-matrix-functions:0350:0001">Solves a packed triangular system of equations.</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-complex-matrix-functions:0351:0001"><a href="cblas_ztrmm(_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_ztrmm(CBLAS_ORDER, CBLAS_SIDE, CBLAS_UPLO, CBLAS_TRANSPOSE, CBLAS_DIAG, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-complex-matrix-functions:0352:0001">Scales a triangular matrix and multiplies it by a matrix.</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-complex-matrix-functions:0353:0001"><a href="cblas_ztrmv(_:_:_:_:_:_:_:_:_:">func cblas_ztrmv(CBLAS_ORDER, CBLAS_UPLO, CBLAS_TRANSPOSE, CBLAS_DIAG, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-complex-matrix-functions:0354:0001">Multiplies a triangular matrix by a vector.</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-complex-matrix-functions:0355:0001"><a href="cblas_ztrsm(_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_ztrsm(CBLAS_ORDER, CBLAS_SIDE, CBLAS_UPLO, CBLAS_TRANSPOSE, CBLAS_DIAG, __LAPACK_int, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-complex-matrix-functions:0356:0001">Solves a triangular system of equations with multiple values for the right side.</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-complex-matrix-functions:0357:0001"><a href="cblas_ztrsv(_:_:_:_:_:_:_:_:_:">func cblas_ztrsv(CBLAS_ORDER, CBLAS_UPLO, CBLAS_TRANSPOSE, CBLAS_DIAG, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-complex-matrix-functions:0358:0001">Solves a triangular system of equations with a single value for the right side.</span>

### <span class="ko-segment" data-segment-id="seg:heading:lapack-functions:0359:0001">LAPACK functions</span>

- <span class="ko-segment" data-segment-id="seg:list:lapack-functions:0360:0001"><a href="lapack-functions.md">LAPACK/BLAS Functions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:lapack-functions:0361:0001">An updated BLAS interface supporting ILP64 is available.</span>

- <span class="ko-segment" data-segment-id="seg:list:lapack-functions:0362:0001"><a href="cgedmd_(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func cgedmd_(UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;Float&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;, OpaquePointer?, OpaquePointer?, UnsafeMutablePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Float&gt;?, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Float&gt;?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:lapack-functions:0362:0002"><a href="cgedmdq_(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func cgedmdq_(UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;Float&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;, OpaquePointer?, OpaquePointer?, UnsafeMutablePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Float&gt;?, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Float&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:lapack-functions:0362:0003"><a href="cgeqp3rk_(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func cgeqp3rk_(UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Float&gt;, UnsafeMutablePointer&lt;Float&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Float&gt;, UnsafeMutablePointer&lt;Float&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;?, OpaquePointer?, OpaquePointer, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Float&gt;?, UnsafeMutablePointer&lt;__LAPACK_int&gt;?, UnsafeMutablePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:lapack-functions:0362:0004"><a href="claqp2rk_(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func claqp2rk_(UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;Float&gt;, UnsafePointer&lt;Float&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;Float&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Float&gt;, UnsafeMutablePointer&lt;Float&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;?, OpaquePointer?, UnsafeMutablePointer&lt;Float&gt;?, UnsafeMutablePointer&lt;Float&gt;?, OpaquePointer, UnsafeMutablePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:lapack-functions:0362:0005"><a href="claqp3rk_(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func claqp3rk_(UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;Float&gt;, UnsafePointer&lt;Float&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;Float&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;__LAPACK_bool&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Float&gt;, UnsafeMutablePointer&lt;Float&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;?, OpaquePointer?, UnsafeMutablePointer&lt;Float&gt;?, UnsafeMutablePointer&lt;Float&gt;?, OpaquePointer?, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;?, UnsafeMutablePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:lapack-functions:0362:0006"><a href="crscl_(_:_:_:_:">func crscl_(UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:lapack-functions:0362:0007"><a href="dgedmd_(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func dgedmd_(UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Double&gt;?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Double&gt;?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;Double&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Double&gt;?, UnsafeMutablePointer&lt;Double&gt;?, UnsafeMutablePointer&lt;Double&gt;?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Double&gt;?, UnsafeMutablePointer&lt;Double&gt;?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Double&gt;?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Double&gt;?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Double&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:lapack-functions:0362:0008"><a href="dgedmdq_(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func dgedmdq_(UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Double&gt;?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Double&gt;?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Double&gt;?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;Double&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Double&gt;?, UnsafeMutablePointer&lt;Double&gt;?, UnsafeMutablePointer&lt;Double&gt;?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Double&gt;?, UnsafeMutablePointer&lt;Double&gt;?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Double&gt;?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Double&gt;?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Double&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:lapack-functions:0362:0009"><a href="dgeqp3rk_(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func dgeqp3rk_(UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Double&gt;, UnsafeMutablePointer&lt;Double&gt;, UnsafeMutablePointer&lt;Double&gt;?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Double&gt;, UnsafeMutablePointer&lt;Double&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;?, UnsafeMutablePointer&lt;Double&gt;?, UnsafeMutablePointer&lt;Double&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;?, UnsafeMutablePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:lapack-functions:0362:0010"><a href="dlaqp2rk_(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func dlaqp2rk_(UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;Double&gt;, UnsafePointer&lt;Double&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;Double&gt;, UnsafeMutablePointer&lt;Double&gt;?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Double&gt;, UnsafeMutablePointer&lt;Double&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;?, UnsafeMutablePointer&lt;Double&gt;?, UnsafeMutablePointer&lt;Double&gt;?, UnsafeMutablePointer&lt;Double&gt;?, UnsafeMutablePointer&lt;Double&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:lapack-functions:0362:0011"><a href="dlaqp3rk_(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func dlaqp3rk_(UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;Double&gt;, UnsafePointer&lt;Double&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;Double&gt;, UnsafeMutablePointer&lt;Double&gt;?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;__LAPACK_bool&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Double&gt;, UnsafeMutablePointer&lt;Double&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;?, UnsafeMutablePointer&lt;Double&gt;?, UnsafeMutablePointer&lt;Double&gt;?, UnsafeMutablePointer&lt;Double&gt;?, UnsafeMutablePointer&lt;Double&gt;?, UnsafeMutablePointer&lt;Double&gt;?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;?, UnsafeMutablePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:lapack-functions:0362:0012"><a href="sgedmd_(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func sgedmd_(UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Float&gt;?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Float&gt;?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;Float&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Float&gt;?, UnsafeMutablePointer&lt;Float&gt;?, UnsafeMutablePointer&lt;Float&gt;?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Float&gt;?, UnsafeMutablePointer&lt;Float&gt;?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Float&gt;?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Float&gt;?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Float&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:lapack-functions:0362:0013"><a href="sgedmdq_(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func sgedmdq_(UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Float&gt;?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Float&gt;?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Float&gt;?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;Float&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Float&gt;?, UnsafeMutablePointer&lt;Float&gt;?, UnsafeMutablePointer&lt;Float&gt;?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Float&gt;?, UnsafeMutablePointer&lt;Float&gt;?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Float&gt;?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Float&gt;?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Float&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:lapack-functions:0362:0014"><a href="sgeqp3rk_(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func sgeqp3rk_(UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Float&gt;, UnsafeMutablePointer&lt;Float&gt;, UnsafeMutablePointer&lt;Float&gt;?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Float&gt;, UnsafeMutablePointer&lt;Float&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;?, UnsafeMutablePointer&lt;Float&gt;?, UnsafeMutablePointer&lt;Float&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;?, UnsafeMutablePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:lapack-functions:0362:0015"><a href="slaqp2rk_(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func slaqp2rk_(UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;Float&gt;, UnsafePointer&lt;Float&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;Float&gt;, UnsafeMutablePointer&lt;Float&gt;?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Float&gt;, UnsafeMutablePointer&lt;Float&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;?, UnsafeMutablePointer&lt;Float&gt;?, UnsafeMutablePointer&lt;Float&gt;?, UnsafeMutablePointer&lt;Float&gt;?, UnsafeMutablePointer&lt;Float&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:lapack-functions:0362:0016"><a href="sgeqp3rk_(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func sgeqp3rk_(UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Float&gt;, UnsafeMutablePointer&lt;Float&gt;, UnsafeMutablePointer&lt;Float&gt;?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Float&gt;, UnsafeMutablePointer&lt;Float&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;?, UnsafeMutablePointer&lt;Float&gt;?, UnsafeMutablePointer&lt;Float&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;?, UnsafeMutablePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:lapack-functions:0362:0017"><a href="slaqp2rk_(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func slaqp2rk_(UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;Float&gt;, UnsafePointer&lt;Float&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;Float&gt;, UnsafeMutablePointer&lt;Float&gt;?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Float&gt;, UnsafeMutablePointer&lt;Float&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;?, UnsafeMutablePointer&lt;Float&gt;?, UnsafeMutablePointer&lt;Float&gt;?, UnsafeMutablePointer&lt;Float&gt;?, UnsafeMutablePointer&lt;Float&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:lapack-functions:0362:0018"><a href="slaqp3rk_(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func slaqp3rk_(UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;Float&gt;, UnsafePointer&lt;Float&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;Float&gt;, UnsafeMutablePointer&lt;Float&gt;?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;__LAPACK_bool&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Float&gt;, UnsafeMutablePointer&lt;Float&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;?, UnsafeMutablePointer&lt;Float&gt;?, UnsafeMutablePointer&lt;Float&gt;?, UnsafeMutablePointer&lt;Float&gt;?, UnsafeMutablePointer&lt;Float&gt;?, UnsafeMutablePointer&lt;Float&gt;?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;?, UnsafeMutablePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:lapack-functions:0362:0019"><a href="zgedmd_(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func zgedmd_(UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;Double&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;, OpaquePointer?, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Double&gt;?, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Double&gt;?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:lapack-functions:0362:0020"><a href="zgedmdq_(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func zgedmdq_(UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;CChar&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;Double&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;, OpaquePointer?, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Double&gt;?, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Double&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:lapack-functions:0362:0021"><a href="zgeqp3rk_(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func zgeqp3rk_(UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Double&gt;, UnsafeMutablePointer&lt;Double&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Double&gt;, UnsafeMutablePointer&lt;Double&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;?, OpaquePointer?, OpaquePointer, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Double&gt;?, UnsafeMutablePointer&lt;__LAPACK_int&gt;?, UnsafeMutablePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:lapack-functions:0362:0022"><a href="zlaqp2rk_(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func zlaqp2rk_(UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;Double&gt;, UnsafePointer&lt;Double&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;Double&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Double&gt;, UnsafeMutablePointer&lt;Double&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;?, OpaquePointer?, UnsafeMutablePointer&lt;Double&gt;?, UnsafeMutablePointer&lt;Double&gt;?, OpaquePointer, UnsafeMutablePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:lapack-functions:0362:0023"><a href="zlaqp3rk_(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func zlaqp3rk_(UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;Double&gt;, UnsafePointer&lt;Double&gt;, UnsafePointer&lt;__LAPACK_int&gt;, UnsafePointer&lt;Double&gt;, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;__LAPACK_bool&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;Double&gt;, UnsafeMutablePointer&lt;Double&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;?, OpaquePointer?, UnsafeMutablePointer&lt;Double&gt;?, UnsafeMutablePointer&lt;Double&gt;?, OpaquePointer?, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;, UnsafeMutablePointer&lt;__LAPACK_int&gt;?, UnsafeMutablePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:lapack-functions:0362:0024"><a href="zrscl_(_:_:_:_:">func zrscl_(UnsafePointer&lt;__LAPACK_int&gt;, OpaquePointer, OpaquePointer?, UnsafePointer&lt;__LAPACK_int&gt;)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:lapack-functions:0362:0025"><a href="sparse_matrix_double_complex.md">typealias sparse_matrix_double_complex</a></span>
- <span class="ko-segment" data-segment-id="seg:list:lapack-functions:0362:0026"><a href="sparse_matrix_float_complex.md">typealias sparse_matrix_float_complex</a></span>
- <span class="ko-segment" data-segment-id="seg:list:lapack-functions:0362:0027"><a href="vfloatpacked.md">typealias vFloatPacked</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0363:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0364:0001"><a href="solving-systems-of-linear-equations-with-lapack.md">Solving systems of linear equations with LAPACK</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0365:0001">Select the optimal LAPACK routine to solve a system of linear equations.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0366:0001"><a href="finding-an-interpolating-polynomial-using-the-vandermonde-method.md">Finding an interpolating polynomial using the Vandermonde method</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0367:0001">Use LAPACK to solve a linear system and find an interpolating polynomial to construct new points between a series of known data points.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0368:0001"><a href="compressing-an-image-using-linear-algebra.md">Compressing an image using linear algebra</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0369:0001">Reduce the storage size of an image using singular value decomposition (SVD).</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0371:0001">*<a href="https://developer.apple.com/documentation/accelerate/blas-library">View on Apple Developer</a>*</span>

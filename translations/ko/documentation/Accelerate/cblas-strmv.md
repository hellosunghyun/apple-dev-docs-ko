---
source_path: "documentation/Accelerate/cblas-strmv.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/cblas-strmv"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:cblasstrmv:0000:0001">cblas_strmv(_:_:_:_:_:_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cblasstrmv:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cblasstrmv:0002:0001">삼각 행렬을 벡터와 곱합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cblasstrmv:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:cblasstrmv:0004:0001">iOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblasstrmv:0004:0002">iPadOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblasstrmv:0004:0003">Mac Catalyst 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblasstrmv:0004:0004">macOS 13.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblasstrmv:0004:0005">tvOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblasstrmv:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblasstrmv:0004:0007">watchOS 9.4+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func cblas_strmv(_ ORDER: CBLAS_ORDER, _ UPLO: CBLAS_UPLO, _ TRANSA: CBLAS_TRANSPOSE, _ DIAG: CBLAS_DIAG, _ N: __LAPACK_int, _ A: UnsafePointer<Float>?, _ LDA: __LAPACK_int, _ X: UnsafeMutablePointer<Float>?, _ INCX: __LAPACK_int)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001"><code>TransA</code> 값에 따라 <code>A*X</code> 또는 <code>A'*X</code>를 곱합니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0001">❗ **중요**: Apple은 Accelerate framework에서 BLAS 및 LAPACK 라이브러리를 LAPACK 3.9.1과 맞추어 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0002">iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, watchOS 26부터 라이브러리가 LAPACK 3.12.0과 맞춰집니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0003">이 새 인터페이스는 추가 기능과 함께 새 ILP64 인터페이스를 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0004">새 인터페이스를 사용하려면 Accelerate 또는 vecLib 헤더를 포함하기 전에 <code>ACCELERATE_NEW_LAPACK</code>을 정의해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0005">ILP64 인터페이스의 경우 <code>ACCELERATE_LAPACK_ILP64</code>도 정의해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0006">Swift 프로젝트의 경우 Xcode 빌드 설정에서 <code>ACCELERATE_NEW_LAPACK=1</code> 및 <code>ACCELERATE_LAPACK_ILP64=1</code>을 전처리기 매크로로 지정해야 합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0010:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0001"><code>ORDER</code>: 행 우선(C) 또는 열 우선(Fortran) 데이터 정렬 방식을 지정합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0002"><code>UPLO</code>: 행렬에서 상삼각형 또는 하삼각형을 사용할지 지정합니다. 유효한 값은 <code>'U'</code> 또는 <code>'L'</code>입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0003"><code>TRANSA</code>: 행렬 A (<code>'N'</code> 또는 <code>'n'</code>)를 사용할지 또는 A의 전치 행렬 (<code>'T'</code>, <code>'t'</code>, <code>'C'</code>, <code>'c'</code>)을 사용할지 지정합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0004"><code>DIAG</code>: 행렬이 단위 삼각행렬인지 지정합니다. 가능한 값은 <code>'U'</code>(단위 삼각행렬) 또는 <code>'N'</code>(비단위 삼각행렬)입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0005"><code>N</code>: 행렬 <code>A</code>의 크기입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0006"><code>A</code>: 삼각행렬 <code>A</code>입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0007"><code>LDA</code>: 행렬 <code>A</code>의 선행 차원입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0008"><code>X</code>: 벡터 <code>X</code>입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0009"><code>INCX</code>: <code>X</code> 내의 스트라이드입니다. 예를 들어 <code>incX</code>가 7이면 7번째 요소마다 사용됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0012:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="cblas_sasum(_:_:_:">func cblas_sasum(__LAPACK_int, UnsafePointer&lt;Float&gt;?, __LAPACK_int) -&gt; Float</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">벡터의 요소 절대값 합을 계산합니다(단정밀도).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="cblas_saxpy(_:_:_:_:_:_:">func cblas_saxpy(__LAPACK_int, Float, UnsafePointer&lt;Float&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">상수와 벡터의 곱에 벡터를 더합니다(단정밀도).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="cblas_scopy(_:_:_:_:_:">func cblas_scopy(__LAPACK_int, UnsafePointer&lt;Float&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">벡터를 다른 벡터로 복사합니다(단정밀도).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="cblas_sgbmv(_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_sgbmv(CBLAS_ORDER, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, __LAPACK_int, __LAPACK_int, Float, UnsafePointer&lt;Float&gt;?, __LAPACK_int, UnsafePointer&lt;Float&gt;?, __LAPACK_int, Float, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">일반 밴드 행렬을 스케일한 다음 벡터를 곱하고 벡터를 더합니다(단정밀도).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="cblas_sgemm(_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_sgemm(CBLAS_ORDER, CBLAS_TRANSPOSE, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, __LAPACK_int, Float, UnsafePointer&lt;Float&gt;?, __LAPACK_int, UnsafePointer&lt;Float&gt;?, __LAPACK_int, Float, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">두 행렬을 곱합니다(단정밀도).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="cblas_sgemv(_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_sgemv(CBLAS_ORDER, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, Float, UnsafePointer&lt;Float&gt;?, __LAPACK_int, UnsafePointer&lt;Float&gt;?, __LAPACK_int, Float, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">단정밀도 행렬을 벡터와 곱합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="cblas_sger(_:_:_:_:_:_:_:_:_:_:">func cblas_sger(CBLAS_ORDER, __LAPACK_int, __LAPACK_int, Float, UnsafePointer&lt;Float&gt;?, __LAPACK_int, UnsafePointer&lt;Float&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">벡터 X를 벡터 Y의 전치와 곱한 후 행렬 A를 더합니다(단정밀도).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="cblas_snrm2(_:_:_:">func cblas_snrm2(__LAPACK_int, UnsafePointer&lt;Float&gt;?, __LAPACK_int) -&gt; Float</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">벡터의 L2 노름(유클리드 길이)을 계산합니다(단정밀도).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="cblas_srot(_:_:_:_:_:_:_:">func cblas_srot(__LAPACK_int, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int, Float, Float)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">두 벡터 쌍에 Givens 회전 행렬을 적용합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001"><a href="cblas_srotg(_:_:_:_:">func cblas_srotg(UnsafeMutablePointer&lt;Float&gt;, UnsafeMutablePointer&lt;Float&gt;, UnsafeMutablePointer&lt;Float&gt;, UnsafeMutablePointer&lt;Float&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">Givens 회전 행렬을 구성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0033:0001"><a href="cblas_srotm(_:_:_:_:_:_:">func cblas_srotm(__LAPACK_int, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int, UnsafePointer&lt;Float&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">수정된 Givens 변환을 적용합니다(단정밀도).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0035:0001"><a href="cblas_srotmg(_:_:_:_:_:">func cblas_srotmg(UnsafeMutablePointer&lt;Float&gt;, UnsafeMutablePointer&lt;Float&gt;, UnsafeMutablePointer&lt;Float&gt;, Float, UnsafeMutablePointer&lt;Float&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0036:0001">수정된 Givens 회전 행렬을 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0037:0001"><a href="cblas_ssbmv(_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_ssbmv(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, __LAPACK_int, Float, UnsafePointer&lt;Float&gt;?, __LAPACK_int, UnsafePointer&lt;Float&gt;?, __LAPACK_int, Float, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0038:0001">대칭 밴드 행렬을 스케일한 다음 벡터를 곱하고 벡터를 더합니다(단정밀도).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0039:0001"><a href="cblas_sscal(_:_:_:_:">func cblas_sscal(__LAPACK_int, Float, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0040:0001">벡터의 각 요소를 상수로 곱합니다(단정밀도).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0041:0001"><a href="cblas_sspmv(_:_:_:_:_:_:_:_:_:_:">func cblas_sspmv(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, Float, UnsafePointer&lt;Float&gt;?, UnsafePointer&lt;Float&gt;?, __LAPACK_int, Float, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0042:0001">압축 대칭 행렬을 스케일한 다음 벡터를 곱하고 다른 벡터를 스케일링해 더합니다(단정밀도).</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0044:0001">*<a href="https://developer.apple.com/documentation/accelerate/cblas_strmv(_:_:_:_:_:_:_:_:_:">Apple Developer에서 보기</a>)*</span>

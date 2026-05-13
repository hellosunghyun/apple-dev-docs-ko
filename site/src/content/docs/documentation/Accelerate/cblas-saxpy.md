---
source_path: "documentation/Accelerate/cblas-saxpy.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/cblas-saxpy"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:cblassaxpy:0000:0001">cblas_saxpy(_:_:_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cblassaxpy:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cblassaxpy:0002:0001">Computes a constant times a vector plus a vector (single-precision).</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cblassaxpy:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:cblassaxpy:0004:0001">iOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblassaxpy:0004:0002">iPadOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblassaxpy:0004:0003">Mac Catalyst 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblassaxpy:0004:0004">macOS 13.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblassaxpy:0004:0005">tvOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblassaxpy:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:cblassaxpy:0004:0007">watchOS 9.4+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func cblas_saxpy(_ N: __LAPACK_int, _ ALPHA: Float, _ X: UnsafePointer<Float>?, _ INCX: __LAPACK_int, _ Y: UnsafeMutablePointer<Float>?, _ INCY: __LAPACK_int)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">On return, the contents of vector Y are replaced with the result.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">The value computed is <code>(alpha * X[i]) + Y[i]</code>.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0001">❗ **Important**: Apple provides the BLAS and LAPACK libraries under the Accelerate framework to be in line with LAPACK 3.9.1.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0002">Starting with iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, and watchOS 26, the libraries are in line with LAPACK 3.12.0.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0003">These new interfaces provide additional functionality, as well as a new ILP64 interface.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0004">To use the new interfaces, define <code>ACCELERATE_NEW_LAPACK</code> before including the Accelerate or vecLib headers.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0005">For ILP64 interfaces, also define <code>ACCELERATE_LAPACK_ILP64</code>.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0006">For Swift projects, specify <code>ACCELERATE_NEW_LAPACK=1</code> and <code>ACCELERATE_LAPACK_ILP64=1</code> as preprocessor macros in Xcode build settings.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0010:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0001"><code>N</code>: Number of elements in the vectors.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0002"><code>ALPHA</code>: Scaling factor for the values in <code>X</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0003"><code>X</code>: Input vector <code>X</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0004"><code>INCX</code>: Stride within <code>X</code>. For example, if <code>incX</code> is 7, every 7th element is used.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0005"><code>Y</code>: Input vector <code>Y</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0006"><code>INCY</code>: Stride within <code>Y</code>. For example, if <code>incY</code> is 7, every 7th element is used.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0012:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="cblas_sasum(_:_:_:">func cblas_sasum(__LAPACK_int, UnsafePointer&lt;Float&gt;?, __LAPACK_int) -&gt; Float</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">Computes the sum of the absolute values of elements in a vector (single-precision).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="cblas_scopy(_:_:_:_:_:">func cblas_scopy(__LAPACK_int, UnsafePointer&lt;Float&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">Copies a vector to another vector (single-precision).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="cblas_sgbmv(_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_sgbmv(CBLAS_ORDER, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, __LAPACK_int, __LAPACK_int, Float, UnsafePointer&lt;Float&gt;?, __LAPACK_int, UnsafePointer&lt;Float&gt;?, __LAPACK_int, Float, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">Scales a general band matrix, then multiplies by a vector, then adds a vector (single precision).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="cblas_sgemm(_:_:_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_sgemm(CBLAS_ORDER, CBLAS_TRANSPOSE, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, __LAPACK_int, Float, UnsafePointer&lt;Float&gt;?, __LAPACK_int, UnsafePointer&lt;Float&gt;?, __LAPACK_int, Float, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">Multiplies two matrices (single-precision).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="cblas_sgemv(_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_sgemv(CBLAS_ORDER, CBLAS_TRANSPOSE, __LAPACK_int, __LAPACK_int, Float, UnsafePointer&lt;Float&gt;?, __LAPACK_int, UnsafePointer&lt;Float&gt;?, __LAPACK_int, Float, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">Multiplies a single-precision matrix by a vector.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="cblas_sger(_:_:_:_:_:_:_:_:_:_:">func cblas_sger(CBLAS_ORDER, __LAPACK_int, __LAPACK_int, Float, UnsafePointer&lt;Float&gt;?, __LAPACK_int, UnsafePointer&lt;Float&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">벡터 X를 벡터 Y의 전치와 곱한 다음 행렬 A를 더합니다 (단정밀도).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="cblas_snrm2(_:_:_:">func cblas_snrm2(__LAPACK_int, UnsafePointer&lt;Float&gt;?, __LAPACK_int) -&gt; Float</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">벡터의 L2 노름(유클리드 길이)을 계산합니다 (단정밀도).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="cblas_srot(_:_:_:_:_:_:_:">func cblas_srot(__LAPACK_int, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int, Float, Float)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">두 벡터에 Givens 회전 행렬을 적용합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="cblas_srotg(_:_:_:_:">func cblas_srotg(UnsafeMutablePointer&lt;Float&gt;, UnsafeMutablePointer&lt;Float&gt;, UnsafeMutablePointer&lt;Float&gt;, UnsafeMutablePointer&lt;Float&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">Givens 회전 행렬을 구성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001"><a href="cblas_srotm(_:_:_:_:_:_:">func cblas_srotm(__LAPACK_int, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int, UnsafePointer&lt;Float&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">단정밀도 수정형 Givens 변환을 적용합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0033:0001"><a href="cblas_srotmg(_:_:_:_:_:">func cblas_srotmg(UnsafeMutablePointer&lt;Float&gt;, UnsafeMutablePointer&lt;Float&gt;, UnsafeMutablePointer&lt;Float&gt;, Float, UnsafeMutablePointer&lt;Float&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">수정된 Givens 회전 행렬을 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0035:0001"><a href="cblas_ssbmv(_:_:_:_:_:_:_:_:_:_:_:_:">func cblas_ssbmv(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, __LAPACK_int, Float, UnsafePointer&lt;Float&gt;?, __LAPACK_int, UnsafePointer&lt;Float&gt;?, __LAPACK_int, Float, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0036:0001">단정밀도에서 대칭 밴드 행렬을 스케일링한 다음 벡터를 곱하고, 벡터를 더합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0037:0001"><a href="cblas_sscal(_:_:_:_:">func cblas_sscal(__LAPACK_int, Float, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0038:0001">벡터의 각 요소를 상수와 곱합니다 (단정밀도).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0039:0001"><a href="cblas_sspmv(_:_:_:_:_:_:_:_:_:_:">func cblas_sspmv(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, Float, UnsafePointer&lt;Float&gt;?, UnsafePointer&lt;Float&gt;?, __LAPACK_int, Float, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0040:0001">압축된 대칭 행렬을 스케일링한 다음 벡터를 곱하고, 다른 벡터를 스케일링하여 더합니다 (단정밀도).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0041:0001"><a href="cblas_sspr(_:_:_:_:_:_:_:">func cblas_sspr(CBLAS_ORDER, CBLAS_UPLO, __LAPACK_int, Float, UnsafePointer&lt;Float&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Float&gt;?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0042:0001">랭크-1 업데이트: 스케일링 인수, 벡터, 그리고 그 전치의 곱에 패킹된 대칭 행렬을 더합니다 (단정밀도).</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0044:0001">*<a href="https://developer.apple.com/documentation/accelerate/cblas_saxpy(_:_:_:_:_:_:">View on Apple Developer</a>)*</span>

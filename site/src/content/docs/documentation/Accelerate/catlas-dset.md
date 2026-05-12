---
source_path: "documentation/Accelerate/catlas-dset.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/catlas-dset"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:catlasdset:0000:0001">catlas_dset(_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:catlasdset:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:catlasdset:0002:0001">벡터(배정밀도)를 제자리에서 수정하여 각 요소를 지정된 값으로 설정합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:catlasdset:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:catlasdset:0004:0001">iOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:catlasdset:0004:0002">iPadOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:catlasdset:0004:0003">Mac Catalyst 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:catlasdset:0004:0004">macOS 13.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:catlasdset:0004:0005">tvOS 16.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:catlasdset:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:catlasdset:0004:0007">watchOS 9.4+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func catlas_dset(_ N: __LAPACK_int, _ ALPHA: Double, _ X: UnsafeMutablePointer<Double>, _ INCX: __LAPACK_int)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0008:0001">❗ **중요**: Apple은 BLAS 및 LAPACK 라이브러리를 Accelerate 프레임워크에서 LAPACK 3.9.1과 일치하도록 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0008:0002">iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, watchOS 26부터 라이브러리는 LAPACK 3.12.0과 일치합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0008:0003">이 새 인터페이스는 추가 기능과 함께 새 ILP64 인터페이스도 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0008:0004">새 인터페이스를 사용하려면 Accelerate 또는 vecLib 헤더를 포함하기 전에 <code>ACCELERATE_NEW_LAPACK</code>을 정의합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0008:0005">ILP64 인터페이스의 경우 <code>ACCELERATE_LAPACK_ILP64</code>도 정의합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0008:0006">Swift 프로젝트에서는 Xcode 빌드 설정의 전처리기 매크로로 <code>ACCELERATE_NEW_LAPACK=1</code> 및 <code>ACCELERATE_LAPACK_ILP64=1</code>을 지정합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>N</code>: 벡터의 요소 수입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>ALPHA</code>: 새 값입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0003"><code>X</code>: 수정할 벡터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0004"><code>INCX</code>: <code>X</code> 내의 보폭입니다. 예를 들어 <code>incX</code>가 7이면, 7번째마다 요소가 사용됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="catlas_caxpby(_:_:_:_:_:_:_:">func catlas_caxpby(__LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">두 벡터의 곱을 계산하고 각 벡터를 개별적으로 스케일링합니다(단정밀도 복소수).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="catlas_cset(_:_:_:_:">func catlas_cset(__LAPACK_int, OpaquePointer, OpaquePointer, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">단정밀도 복소수 벡터를 제자리에서 수정하여 각 요소를 지정된 값으로 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="catlas_daxpby(_:_:_:_:_:_:_:">func catlas_daxpby(__LAPACK_int, Double, UnsafePointer&lt;Double&gt;?, __LAPACK_int, Double, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">두 벡터의 합을 계산하고 각 벡터를 개별적으로 스케일링합니다(배정밀도).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="catlas_saxpby(_:_:_:_:_:_:_:">func catlas_saxpby(__LAPACK_int, Float, UnsafePointer&lt;Float&gt;?, __LAPACK_int, Float, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">두 벡터의 합을 계산하고 각 벡터를 개별적으로 스케일링합니다(단정밀도).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="catlas_sset(_:_:_:_:">func catlas_sset(__LAPACK_int, Float, UnsafeMutablePointer&lt;Float&gt;, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">단정밀도 벡터를 제자리에서 수정하여 각 요소를 지정된 값으로 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="catlas_zaxpby(_:_:_:_:_:_:_:">func catlas_zaxpby(__LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">두 벡터의 합을 계산하고 각 벡터를 개별적으로 스케일링합니다(배정밀도 복소수).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="catlas_zset(_:_:_:_:">func catlas_zset(__LAPACK_int, OpaquePointer, OpaquePointer, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">배정밀도 복소수 벡터를 제자리에서 수정하여 각 요소를 지정된 값으로 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="cblas_sdot(_:_:_:_:_:">func cblas_sdot(__LAPACK_int, UnsafePointer&lt;Float&gt;?, __LAPACK_int, UnsafePointer&lt;Float&gt;?, __LAPACK_int) -&gt; Float</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">두 벡터의 내적을 계산합니다(단정밀도).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="cblas_sdsdot(_:_:_:_:_:_:">func cblas_sdsdot(__LAPACK_int, Float, UnsafePointer&lt;Float&gt;?, __LAPACK_int, UnsafePointer&lt;Float&gt;?, __LAPACK_int) -&gt; Float</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">두 개의 단정밀도 벡터와 초기 단정밀도 값을 더한 내적을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="cblas_cdotc_sub(_:_:_:_:_:_:">func cblas_cdotc_sub(__LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">단정밀도 복소수 벡터의 켤레복소수와 두 번째 단정밀도 복소수 벡터의 내적을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="cblas_cdotu_sub(_:_:_:_:_:_:">func cblas_cdotu_sub(__LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">두 개의 단정밀도 복소수 벡터의 내적을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="cblas_ddot(_:_:_:_:_:">func cblas_ddot(__LAPACK_int, UnsafePointer&lt;Double&gt;?, __LAPACK_int, UnsafePointer&lt;Double&gt;?, __LAPACK_int) -&gt; Double</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">두 벡터의 내적을 계산합니다(배정밀도).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="cblas_dsdot(_:_:_:_:_:">func cblas_dsdot(__LAPACK_int, UnsafePointer&lt;Float&gt;?, __LAPACK_int, UnsafePointer&lt;Float&gt;?, __LAPACK_int) -&gt; Double</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">단정밀도 벡터 한 쌍의 배정밀도 내적을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="cblas_zdotc_sub(_:_:_:_:_:_:">func cblas_zdotc_sub(__LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">배정밀도 복소수 벡터의 켤레복소수와 두 번째 배정밀도 복소수 벡터의 내적을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001"><a href="cblas_zdotu_sub(_:_:_:_:_:_:">func cblas_zdotu_sub(__LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer?, __LAPACK_int, OpaquePointer)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">두 개의 배정밀도 복소수 벡터의 내적을 계산합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">*<a href="https://developer.apple.com/documentation/accelerate/catlas_dset(_:_:_:_:">Apple Developer 보기</a>)*</span>

---
source_path: "documentation/Accelerate/sparse-pack-vector-double.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/sparse-pack-vector-double"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sparsepackvectordouble:0000:0001">sparse_pack_vector_double(_:_:_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsepackvectordouble:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsepackvectordouble:0002:0001">Packs nonzero values from a double-precision dense vector to a destination array.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsepackvectordouble:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:sparsepackvectordouble:0004:0001">iOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsepackvectordouble:0004:0002">iPadOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsepackvectordouble:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsepackvectordouble:0004:0004">macOS 10.11+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsepackvectordouble:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsepackvectordouble:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsepackvectordouble:0004:0007">watchOS 3.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func sparse_pack_vector_double(_ N: sparse_dimension, _ nz: sparse_dimension, _ x: UnsafePointer<Double>!, _ incx: sparse_stride, _ y: UnsafeMutablePointer<Double>!, _ indy: UnsafeMutablePointer<sparse_index>!) -> Int
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">Return Value</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">The number of nonzero values written.</span> <span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0002">On success, <code>y</code> and <code>indy</code> are updated with up to the first <code>nz</code> nonzero indices.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">Pack the first <code>nz</code> nonzero values and indices from the dense vector *x* and place them in <code>y</code> and <code>indy</code>.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002"><code>x</code>의 <code>N</code>개 요소에서 <code>nz</code>개 미만의 0이 아닌 요소가 발견되면 <code>y</code>와 <code>indy</code>의 마지막 <code>nz - actual_nonzero_count</code> 요소는 사용되지 않습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0003">기록된 인덱스 수는 <code>0</code>에서 <code>nz</code>까지일 수 있으며, 기록한 개수가 반환됩니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0011:0001">❗ **중요**: Apple은 <code>Accelerate</code> 프레임워크에서 BLAS 및 LAPACK 라이브러리를 <code>LAPACK 3.9.1</code>에 맞춰 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0011:0002">iOS 26, iPadOS 26, macOS 26, tvOS 26, visionOS 26, watchOS 26부터 라이브러리가 <code>LAPACK 3.12.0</code>과 맞춰집니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0011:0003">이 새 인터페이스는 추가 기능과 함께 새 ILP64 인터페이스를 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0011:0004">새 인터페이스를 사용하려면 <code>Accelerate</code> 또는 <code>vecLib</code> 헤더를 포함하기 전에 <code>ACCELERATE_NEW_LAPACK</code>을 정의해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0011:0005">ILP64 인터페이스를 사용하려면 <code>ACCELERATE_LAPACK_ILP64</code>도 정의해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0011:0006">Swift 프로젝트에서는 Xcode 빌드 설정의 전처리기 매크로로 <code>ACCELERATE_NEW_LAPACK=1</code> 및 <code>ACCELERATE_LAPACK_ILP64=1</code>을 지정해야 합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0012:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0001"><code>N</code>: 밀집 벡터 *x*의 요소 수입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0002"><code>nz</code>: 수집할 0이 아닌 값의 개수입니다. <code>x</code>의 <code>N</code>개 요소에서 <code>nz</code>개보다 적은 수의 0이 아닌 요소가 발견되면, <code>y</code>와 <code>indy</code>의 마지막 <code>nz - actual_nonzero_count</code> 요소는 사용되지 않습니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0003"><code>x</code>: 밀집 벡터 *x*에 대한 포인터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0004"><code>incx</code>: 밀집 벡터 *x*의 유효한 값 사이의 간격입니다. 음수 스트라이드는 지원됩니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0005"><code>y</code>: *x*의 0이 아닌 값이 저장되는 대상 밀집 저장소입니다. 크기는 <code>nz</code> 요소로 예상됩니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0006"><code>indy</code>: *x*의 0이 아닌 인덱스가 저장되는 대상 밀집 저장소입니다. 크기는 <code>nz</code> 요소로 예상됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0014:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="sparse_get_vector_nonzero_count_double(_:_:_:">func sparse_get_vector_nonzero_count_double(sparse_dimension, UnsafePointer&lt;Double&gt;!, sparse_stride) -&gt; Int</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">배정밀도(double-precision) 밀집 벡터 *x*의 0이 아닌 값 개수를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="sparse_get_vector_nonzero_count_float(_:_:_:">func sparse_get_vector_nonzero_count_float(sparse_dimension, UnsafePointer&lt;Float&gt;!, sparse_stride) -&gt; Int</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">단정밀도(single-precision) 밀집 벡터 *x*의 0이 아닌 값 개수를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="sparse_pack_vector_float(_:_:_:_:_:_:">func sparse_pack_vector_float(sparse_dimension, sparse_dimension, UnsafePointer&lt;Float&gt;!, sparse_stride, UnsafeMutablePointer&lt;Float&gt;!, UnsafeMutablePointer&lt;sparse_index&gt;!) -&gt; Int</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">단정밀도 밀집 벡터에서 0이 아닌 값을 대상 배열로 패킹합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="sparse_unpack_vector_double(_:_:_:_:_:_:_:">func sparse_unpack_vector_double(sparse_dimension, sparse_dimension, Bool, UnsafePointer&lt;Double&gt;!, UnsafePointer&lt;sparse_index&gt;!, UnsafeMutablePointer&lt;Double&gt;!, sparse_stride)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">희소 벡터 *x*의 요소를 추출해 대응하는 밀집 벡터 *y*의 위치에 배치합니다. 두 벡터 모두 배정밀도 값으로 구성됩니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="sparse_unpack_vector_float(_:_:_:_:_:_:_:">func sparse_unpack_vector_float(sparse_dimension, sparse_dimension, Bool, UnsafePointer&lt;Float&gt;!, UnsafePointer&lt;sparse_index&gt;!, UnsafeMutablePointer&lt;Float&gt;!, sparse_stride)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">희소 벡터 *x*의 요소를 추출해 대응하는 밀집 벡터 *y*의 위치에 배치합니다. 두 벡터 모두 단정밀도 값으로 구성됩니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">*<a href="https://developer.apple.com/documentation/accelerate/sparse_pack_vector_double(_:_:_:_:_:_:">View on Apple Developer</a>)*</span>

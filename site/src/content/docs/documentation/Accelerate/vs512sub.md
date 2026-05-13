---
source_path: "documentation/Accelerate/vs512sub.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vs512sub"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:vs512sub:0000:0001">vS512Sub(_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vs512sub:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vs512sub:0002:0001">Signed 512-bit subtraction (modular arithmetic).</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vs512sub:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:vs512sub:0004:0001">macOS 10.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func vS512Sub(_ a: UnsafePointer<vS512>, _ b: UnsafePointer<vS512>, _ result: UnsafeMutablePointer<vS512>)
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="vu256add(_:_:_:">func vU256Add(UnsafePointer&lt;vU256&gt;, UnsafePointer&lt;vU256&gt;, UnsafeMutablePointer&lt;vU256&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">Unsigned 256-bit addition (modular arithmetic).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="vu256adds(_:_:_:">func vU256AddS(UnsafePointer&lt;vU256&gt;, UnsafePointer&lt;vU256&gt;, UnsafeMutablePointer&lt;vU256&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">Unsigned 256-bit addition with saturation (clipping).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="catlas_caxpby(_:_:_:_:_:_:_:">func catlas_caxpby(__LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">두 벡터의 곱을 계산하고 각 벡터를 개별적으로 스케일링합니다(단정밀도 복소수).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="catlas_cset(_:_:_:_:">func catlas_cset(__LAPACK_int, OpaquePointer, OpaquePointer, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">단정밀도 복소수 벡터를 제자리에서 수정하여 각 요소를 지정된 값으로 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="catlas_daxpby(_:_:_:_:_:_:_:">func catlas_daxpby(__LAPACK_int, Double, UnsafePointer&lt;Double&gt;?, __LAPACK_int, Double, UnsafeMutablePointer&lt;Double&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">두 벡터의 합을 계산하고 각 벡터를 개별적으로 스케일링합니다(배정밀도).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="catlas_saxpby(_:_:_:_:_:_:_:">func catlas_saxpby(__LAPACK_int, Float, UnsafePointer&lt;Float&gt;?, __LAPACK_int, Float, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">각 샘플에 적용할 풀링 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="catlas_sset(_:_:_:_:">func catlas_sset(__LAPACK_int, Float, UnsafeMutablePointer&lt;Float&gt;, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">X 패딩입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="catlas_zaxpby(_:_:_:_:_:_:_:">func catlas_zaxpby(__LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int, OpaquePointer, OpaquePointer?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">입력 이미지의 X 증가량입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="catlas_zset(_:_:_:_:">func catlas_zset(__LAPACK_int, OpaquePointer, OpaquePointer, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">Y 패딩입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="cblas_sdot(_:_:_:_:_:">func cblas_sdot(__LAPACK_int, UnsafePointer&lt;Float&gt;?, __LAPACK_int, UnsafePointer&lt;Float&gt;?, __LAPACK_int) -&gt; Float</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">Unsigned 1024-bit addition with saturation (clipping).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="vs1024add(_:_:_:">func vS1024Add(UnsafePointer&lt;vS1024&gt;, UnsafePointer&lt;vS1024&gt;, UnsafeMutablePointer&lt;vS1024&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">Signed 1024-bit addition (modular arithmetic).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="vs1024adds(_:_:_:">func vS1024AddS(UnsafePointer&lt;vS1024&gt;, UnsafePointer&lt;vS1024&gt;, UnsafeMutablePointer&lt;vS1024&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">Signed 1024-bit addition with saturation (clipping).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="vu256sub(_:_:_:">func vU256Sub(UnsafePointer&lt;vU256&gt;, UnsafePointer&lt;vU256&gt;, UnsafeMutablePointer&lt;vU256&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">Unsigned 256-bit subtraction (modular arithmetic).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="vu256subs(_:_:_:">func vU256SubS(UnsafePointer&lt;vU256&gt;, UnsafePointer&lt;vU256&gt;, UnsafeMutablePointer&lt;vU256&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">Unsigned 256-bit subtraction with saturation (clipping).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="vs256sub(_:_:_:">func vS256Sub(UnsafePointer&lt;vS256&gt;, UnsafePointer&lt;vS256&gt;, UnsafeMutablePointer&lt;vS256&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">Signed 256-bit subtraction (modular arithmetic).</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">*<a href="https://developer.apple.com/documentation/accelerate/vs512sub(_:_:_:">View on Apple Developer</a>)*</span>

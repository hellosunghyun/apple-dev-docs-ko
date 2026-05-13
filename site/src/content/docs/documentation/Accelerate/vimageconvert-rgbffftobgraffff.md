---
source_path: "documentation/Accelerate/vimageconvert-rgbffftobgraffff.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vimageconvert-rgbffftobgraffff"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:vimageconvertrgbffftobgraffff:0000:0001">vImageConvert_RGBFFFtoBGRAFFFF(_:_:_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimageconvertrgbffftobgraffff:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimageconvertrgbffftobgraffff:0002:0001">Combines a floating-point 32-bit-per-channel, 3-channel RGB buffer and either an 32-bit alpha buffer or constant alpha value to produce a BGRA result.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimageconvertrgbffftobgraffff:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:vimageconvertrgbffftobgraffff:0004:0001">iOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageconvertrgbffftobgraffff:0004:0002">iPadOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageconvertrgbffftobgraffff:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageconvertrgbffftobgraffff:0004:0004">macOS 10.9+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageconvertrgbffftobgraffff:0004:0005">tvOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageconvertrgbffftobgraffff:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageconvertrgbffftobgraffff:0004:0007">watchOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func vImageConvert_RGBFFFtoBGRAFFFF(_: UnsafePointer<vImage_Buffer>, _: UnsafePointer<vImage_Buffer>!, _: Pixel_F, _: UnsafePointer<vImage_Buffer>, _: Bool, _ flags: vImage_Flags) -> vImage_Error
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">Return Value</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001"><a href="kvimagenoerror.md">@@TOKEN_0@@</a>; otherwise, one of the error codes in <a href="data-types-and-constants.md">@@TOKEN_1@@</a>.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

##### <span class="ko-segment" data-segment-id="seg:heading:parameters:0010:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0001"><code>ORDER</code>: 행 기준(C) 또는 열 기준(Fortran) 데이터 배치를 지정합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0002"><code>UPLO</code>: 행렬에서 상삼각 또는 하삼각을 사용할지 지정합니다. 유효한 값은 <code>'U'</code> 또는 <code>'L'</code>입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0003"><code>TRANSA</code>: 행렬 A를 사용할지 (<code>'N'</code> 또는 <code>'n'</code>) 아니면 A의 전치 행렬을 사용할지 (<code>'T'</code>, <code>'t'</code>, <code>'C'</code> 또는 <code>'c'</code>) 지정합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0004"><code>DIAG</code>: 행렬이 단위 삼각 행렬인지 지정합니다. 가능한 값은 <code>'U'</code>(단위 삼각 행렬) 또는 <code>'N'</code>(비단위 삼각 행렬)입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0005"><code>N</code>: 행렬 <code>A</code>의 order입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0006"><code>AP</code>: (압축 저장 형식의) 삼각 행렬 <code>A</code>입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0012:0001">If you specify <code>premultiply</code> as <code>true</code>, the function uses the following calculation to perform the conversion:</span>

```objc
 r = (a * r)
 g = (a * g)
 b = (a * b)
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0014:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="cblas_saxpy(_:_:_:_:_:_:">func cblas_saxpy(__LAPACK_int, Float, UnsafePointer&lt;Float&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">상수 곱한 벡터에 벡터를 더하는 연산을 수행합니다(단정밀도).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="cblas_scopy(_:_:_:_:_:">func cblas_scopy(__LAPACK_int, UnsafePointer&lt;Float&gt;?, __LAPACK_int, UnsafeMutablePointer&lt;Float&gt;?, __LAPACK_int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">벡터를 다른 벡터로 복사합니다(단정밀도).</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">일반 밴드 행렬을 스케일링한 다음 벡터를 곱하고 벡터를 더합니다(단정밀도).</span>

---
source_path: "documentation/Accelerate/vimageconvert-xrgb2101010toargb16u.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vimageconvert-xrgb2101010toargb16u"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:vimageconvertxrgb2101010toargb16u:0000:0001">vImageConvert_XRGB2101010ToARGB16U(_:_:_:_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimageconvertxrgb2101010toargb16u:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimageconvertxrgb2101010toargb16u:0002:0001">XRGB2101010 32비트 4채널 인터리브 버퍼를 순열이 적용된 채널당 부호 없는 16비트 4채널 인터리브 버퍼로 변환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimageconvertxrgb2101010toargb16u:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:vimageconvertxrgb2101010toargb16u:0004:0001">iOS 9.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageconvertxrgb2101010toargb16u:0004:0002">iPadOS 9.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageconvertxrgb2101010toargb16u:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageconvertxrgb2101010toargb16u:0004:0004">macOS 10.12+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageconvertxrgb2101010toargb16u:0004:0005">tvOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageconvertxrgb2101010toargb16u:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageconvertxrgb2101010toargb16u:0004:0007">watchOS 3.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func vImageConvert_XRGB2101010ToARGB16U(_ src: UnsafePointer<vImage_Buffer>, _ alpha: UInt16, _ dest: UnsafePointer<vImage_Buffer>, _ RGB101010RangeMin: Int32, _ RGB101010RangeMax: Int32, _ permuteMap: UnsafePointer<UInt8>!, _ flags: vImage_Flags) -> vImage_Error
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001"><a href="kvimagenoerror.md">@@TOKEN_0@@</a>가 반환되며, 그렇지 않으면 <a href="data-types-and-constants.md">@@TOKEN_1@@</a>의 오류 코드 중 하나가 반환됩니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001"><code>RGB101010RangeMin</code>과 <code>RGB101010RangeMax</code> 매개변수를 사용하면 함수에서 <code>0.0 ...</code> 범위를 벗어나는 소스 픽셀 값을 지정할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">1.0`.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0003">전체 범위 픽셀 값의 경우 <code>RGB101010RangeMin</code> 및 <code>RGB101010RangeMax</code>를 다음과 같이 지정합니다:</span>

```swift
 RGB101010RangeMin = 0
 RGB101010RangeMax = 1023
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0012:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0001"><code>src</code>: 10-bit RGB 인터리브 소스 픽셀을 참조하는 vImage 버퍼에 대한 포인터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0002"><code>alpha</code>: 고정된 대상 alpha 값입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0003"><code>dest</code>: 대상 vImage 버퍼 구조체를 가리키는 포인터입니다. 이 구조체의 <a href="vimage_buffer/height.md">@@TOKEN_1@@</a>, <a href="vimage_buffer/width.md">@@TOKEN_2@@</a>, <a href="vimage_buffer/rowbytes.md">@@TOKEN_3@@</a> 필드를 채우고, 적절한 크기의 데이터 버퍼를 할당해야 합니다. 반환 시 이 구조체가 가리키는 데이터 버퍼에는 대상 이미지 데이터가 들어 있습니다. 더 이상 데이터 버퍼가 필요하지 않으면 메모리 누수를 방지하기 위해 메모리를 해제해야 합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0004"><code>RGB101010RangeMin</code>: 소스 이미지 범위의 최소 픽셀 값입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0005"><code>RGB101010RangeMax</code>: 소스 이미지 범위의 최대 픽셀 값입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0006"><code>permuteMap</code>: 값이 <code>0</code>, <code>1</code>, <code>2</code>, <code>3</code>으로 구성된 임의 순서의 8비트 정수 4개 배열입니다. 각 값은 함수가 해당 인덱스의 대상 채널로 소스 이미지에서 복사할 채널을 지정합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0007"><code>flags</code>: 연산 수행 시 사용할 옵션입니다. 코드에서 자체 타일링이나 자체 멀티스레딩을 구현하는 경우 <a href="kvimagedonottile.md">@@TOKEN_1@@</a>를 전달하고, 그렇지 않으면 <a href="kvimagenoflags.md">@@TOKEN_2@@</a>를 전달해야 합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0014:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="vimageconvert_argb2101010toargb8888(_:_:_:_:_:_:">func vImageConvert_ARGB2101010ToARGB8888(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, Int32, Int32, UnsafePointer&lt;UInt8&gt;!, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">ARGB2101010 32비트 4채널 인터리브 버퍼를 순열이 적용된 채널당 8비트 4채널 인터리브 버퍼로 변환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="vimageconvert_xrgb2101010toargb8888(_:_:_:_:_:_:_:">func vImageConvert_XRGB2101010ToARGB8888(UnsafePointer&lt;vImage_Buffer&gt;, Pixel_8, UnsafePointer&lt;vImage_Buffer&gt;, Int32, Int32, UnsafePointer&lt;UInt8&gt;!, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">XRGB2101010 32비트 4채널 인터리브 버퍼를 순열이 적용된 채널당 8비트 4채널 인터리브 버퍼로 변환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="vimageconvert_argb2101010toargb16u(_:_:_:_:_:_:">func vImageConvert_ARGB2101010ToARGB16U(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, Int32, Int32, UnsafePointer&lt;UInt8&gt;!, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">ARGB2101010 32비트 4채널 인터리브 버퍼를 순열이 적용된 채널당 부호 없는 16비트 4채널 인터리브 버퍼로 변환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">*<a href="https://developer.apple.com/documentation/accelerate/vimageconvert_xrgb2101010toargb16u(_:_:_:_:_:_:_:">View on Apple Developer</a>)*</span>

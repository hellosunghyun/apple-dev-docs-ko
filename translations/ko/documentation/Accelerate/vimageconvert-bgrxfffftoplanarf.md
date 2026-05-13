---
source_path: "documentation/Accelerate/vimageconvert-bgrxfffftoplanarf.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vimageconvert-bgrxfffftoplanarf"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:vimageconvertbgrxfffftoplanarf:0000:0001">vImageConvert_BGRXFFFFToPlanarF(_:_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimageconvertbgrxfffftoplanarf:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimageconvertbgrxfffftoplanarf:0002:0001">Deinterleaves a floating-point 32-bit-per-channel, 4-channel interleaved buffer into three floating-point 32-bit planar buffers and discards the last channel.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimageconvertbgrxfffftoplanarf:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:vimageconvertbgrxfffftoplanarf:0004:0001">iOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageconvertbgrxfffftoplanarf:0004:0002">iPadOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageconvertbgrxfffftoplanarf:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageconvertbgrxfffftoplanarf:0004:0004">macOS 10.9+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageconvertbgrxfffftoplanarf:0004:0005">tvOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageconvertbgrxfffftoplanarf:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageconvertbgrxfffftoplanarf:0004:0007">watchOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func vImageConvert_BGRXFFFFToPlanarF(_ src: UnsafePointer<vImage_Buffer>, _ blue: UnsafePointer<vImage_Buffer>, _ green: UnsafePointer<vImage_Buffer>, _ red: UnsafePointer<vImage_Buffer>, _ flags: vImage_Flags) -> vImage_Error
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">Return Value</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001"><a href="kvimagenoerror.md">@@TOKEN_0@@</a>; otherwise, one of the error codes in <a href="data-types-and-constants.md">@@TOKEN_1@@</a>.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">The source and destination buffers need to have the same height and width.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>src</code>: The source vImage buffer.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0002"><code>blue</code>: A pointer to the blue destination vImage buffer structure. You’re responsible for filling out the <a href="vimage_buffer/height.md">@@TOKEN_1@@</a>, <a href="vimage_buffer/width.md">@@TOKEN_2@@</a>, and <a href="vimage_buffer/rowbytes.md">@@TOKEN_3@@</a> fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the blue destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0003"><code>green</code>: A pointer to the green destination vImage buffer structure. You’re responsible for filling out the <a href="vimage_buffer/height.md">@@TOKEN_1@@</a>, <a href="vimage_buffer/width.md">@@TOKEN_2@@</a>, and <a href="vimage_buffer/rowbytes.md">@@TOKEN_3@@</a> fields of this structure, and for allocating a data buffer of the appropriate size. On return, the data buffer this structure points to contains the green destination image data. When you no longer need the data buffer, deallocate the memory to prevent memory leaks.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0004"><code>red</code>: red 대상 vImage 버퍼 구조체를 가리키는 포인터입니다. 이 구조체의 <a href="vimage_buffer/height.md">@@TOKEN_1@@</a>, <a href="vimage_buffer/width.md">@@TOKEN_2@@</a>, <a href="vimage_buffer/rowbytes.md">@@TOKEN_3@@</a> 필드를 채우고, 적절한 크기의 데이터 버퍼를 할당해야 합니다. 반환 시 이 구조체가 가리키는 데이터 버퍼에는 red 대상 이미지 데이터가 들어 있습니다. 더 이상 데이터 버퍼가 필요하지 않으면 메모리 누수를 방지하기 위해 메모리를 해제해야 합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0005"><code>flags</code>: 연산 수행 시 사용할 옵션입니다. 코드에서 자체 타일링이나 자체 멀티스레딩을 구현하는 경우 <a href="kvimagedonottile.md">@@TOKEN_1@@</a>를 전달하고, 그렇지 않으면 <a href="kvimagenoflags.md">@@TOKEN_2@@</a>를 전달해야 합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="vimageconvert_argbfffftoplanar8(_:_:_:_:_:_:_:_:">func vImageConvert_ARGBFFFFtoPlanar8(UnsafePointer&lt;vImage_Buffer&gt;!, UnsafePointer&lt;vImage_Buffer&gt;!, UnsafePointer&lt;vImage_Buffer&gt;!, UnsafePointer&lt;vImage_Buffer&gt;!, UnsafePointer&lt;vImage_Buffer&gt;!, UnsafePointer&lt;Float&gt;!, UnsafePointer&lt;Float&gt;!, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">부동 소수점 32비트/채널, 4채널 인터리브 버퍼를 8비트 플래너 버퍼 4개로 디인터리브합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="vimageconvert_xrgbfffftoplanarf(_:_:_:_:_:">func vImageConvert_XRGBFFFFToPlanarF(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">부동 소수점 32비트/채널, 4채널 인터리브 버퍼를 부동 소수점 32비트 플래너 버퍼 3개로 디인터리브하고 첫 번째 채널을 버립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="vimageconvert_argbfffftoplanarf(_:_:_:_:_:_:">func vImageConvert_ARGBFFFFtoPlanarF(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">부동 소수점 32비트/채널, 4채널 인터리브 버퍼를 부동 소수점 38비트 플래너 버퍼 4개로 디인터리브합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/accelerate/vimageconvert_bgrxfffftoplanarf(_:_:_:_:_:">View on Apple Developer</a>)*</span>

---
source_path: "documentation/Accelerate/vimagepermutechannelswithmaskedinsert-argb8888.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vimagepermutechannelswithmaskedinsert-argb8888"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:vimagepermutechannelswithmaskedinsertargb8888:0000:0001">vImagePermuteChannelsWithMaskedInsert_ARGB8888(_:_:_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimagepermutechannelswithmaskedinsertargb8888:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimagepermutechannelswithmaskedinsertargb8888:0002:0001">이 함수는 채널당 8비트인 4채널 인터리브 버퍼의 채널을 재배치하고 덮어씁니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimagepermutechannelswithmaskedinsertargb8888:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:vimagepermutechannelswithmaskedinsertargb8888:0004:0001">iOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimagepermutechannelswithmaskedinsertargb8888:0004:0002">iPadOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimagepermutechannelswithmaskedinsertargb8888:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimagepermutechannelswithmaskedinsertargb8888:0004:0004">macOS 10.9+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimagepermutechannelswithmaskedinsertargb8888:0004:0005">tvOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimagepermutechannelswithmaskedinsertargb8888:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimagepermutechannelswithmaskedinsertargb8888:0004:0007">watchOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func vImagePermuteChannelsWithMaskedInsert_ARGB8888(_ src: UnsafePointer<vImage_Buffer>, _ dest: UnsafePointer<vImage_Buffer>, _ permuteMap: UnsafePointer<UInt8>, _ copyMask: UInt8, _ backgroundColor: UnsafePointer<UInt8>, _ flags: vImage_Flags) -> vImage_Error
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001"><a href="kvimagenoerror.md">@@TOKEN_0@@</a>; 그렇지 않으면 <a href="data-types-and-constants.md">@@TOKEN_1@@</a>에 설명된 오류 코드 중 하나입니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">이 결합 연산은 <a href="vimagepermutechannels_argb8888(_:_:_:_:">@@TOKEN_0@@</a>.md) 다음에 <a href="vimageoverwritechannelswithscalar_argb8888(_:_:_:_:_:">@@TOKEN_1@@</a>.md)를 호출한 것과 동일한 기능을 제공하지만, 두 함수를 별도로 호출할 때보다 성능이 더 높습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">다음 코드는 픽셀 버퍼의 채널 순서를 뒤집고 대상의 채널 <code>0</code>을 배경색의 요소 <code>0</code>으로 덮어씁니다.</span>

```swift
let pixelBuffer = vImage.PixelBuffer<vImage.Interleaved8x4>(
    pixelValues: [10, 20, 30, 40],
    size: .init(width: 1, height: 1))

let backgroundColor: [Pixel_8] = [101, 102, 103, 104]

pixelBuffer.withUnsafePointerToVImageBuffer { buf in
    _ = vImagePermuteChannelsWithMaskedInsert_ARGB8888(buf,
                                                       buf,
                                                       [3, 2, 1, 0],
                                                       0x8,
                                                       backgroundColor,
                                                       vImage_Flags(kvImageNoFlags))
}

// Prints "[101, 30, 20, 10]".
print(pixelBuffer.array)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0013:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0001"><code>src</code>: 소스 vImage 버퍼입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0002"><code>dest</code>: 대상 vImage 버퍼 구조체에 대한 포인터입니다. 이 구조체의 <a href="vimage_buffer/height.md">@@TOKEN_1@@</a>, <a href="vimage_buffer/width.md">@@TOKEN_2@@</a>, <a href="vimage_buffer/rowbytes.md">@@TOKEN_3@@</a> 필드를 채우고 적절한 크기의 데이터 버퍼를 할당해야 합니다. 반환 시 이 구조체가 가리키는 데이터 버퍼에는 대상 이미지 데이터가 들어 있습니다. 더 이상 데이터 버퍼가 필요하지 않으면 메모리 누수를 방지하기 위해 메모리를 해제해야 합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0003"><code>permuteMap</code>: 값이 <code>0</code>, <code>1</code>, <code>2</code>, <code>3</code>인 8비트 정수 4개 배열입니다. 각 값은 해당 인덱스의 대상 채널로 복사할 소스 이미지의 채널을 지정합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0004"><code>copyMask</code>: 함수가 <code>backgroundColor</code> 매개변수의 해당 채널로 덮어쓰는 채널(또는 채널들)을 지정하는 비트마스크입니다. 값 <code>0x8</code>은 채널 <code>0</code>, 값 <code>0x4</code>는 채널 <code>1</code>, 값 <code>0x2</code>는 채널 <code>2</code>, 값 <code>0x1</code>은 채널 <code>3</code>을 나타냅니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0005"><code>backgroundColor</code>: 함수가 <code>copyMask</code> 값에 따라 대상에 기록하는 채널당 8비트 ARGB 값입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0006"><code>flags</code>: 작업 수행 시 사용할 옵션입니다. 코드가 자체 타일링 또는 자체 멀티스레딩을 구현한 경우 <a href="kvimagedonottile.md">@@TOKEN_1@@</a>를 전달하고, 그렇지 않으면 <a href="kvimagenoflags.md">@@TOKEN_2@@</a>를 전달합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0015:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="vimagepermutechannelswithmaskedinsert_argb16u(_:_:_:_:_:_:">func vImagePermuteChannelsWithMaskedInsert_ARGB16U(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;UInt8&gt;, UInt8, UnsafePointer&lt;UInt16&gt;, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">부호 없는 16비트 채널당, 4채널 인터리브 버퍼의 채널을 재배치하고 덮어씁니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="vimagepermutechannelswithmaskedinsert_argbffff(_:_:_:_:_:_:">func vImagePermuteChannelsWithMaskedInsert_ARGBFFFF(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;UInt8&gt;, UInt8, UnsafePointer&lt;Float&gt;, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">부동소수점 32비트 채널당, 4채널 인터리브 버퍼의 채널을 재배치하고 덮어씁니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/accelerate/vimagepermutechannelswithmaskedinsert_argb8888(_:_:_:_:_:_:">View on Apple Developer</a>)*</span>

---
source_path: "documentation/Accelerate/vimage/pixelbuffer/withunsafepixelbuffers.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/withunsafepixelbuffers"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:withunsafepixelbuffers:0000:0001">withUnsafePixelBuffers(_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:withunsafepixelbuffers:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:withunsafepixelbuffers:0002:0001">개별 평면을 참조하는 픽셀 버퍼 배열과 함께 지정된 클로저를 호출합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:withunsafepixelbuffers:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:withunsafepixelbuffers:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:withunsafepixelbuffers:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:withunsafepixelbuffers:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:withunsafepixelbuffers:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:withunsafepixelbuffers:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:withunsafepixelbuffers:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:withunsafepixelbuffers:0004:0007">watchOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func withUnsafePixelBuffers<R>(_ body: ([vImage.PixelBuffer<Format.PlanarPixelFormat>]) throws -> R) rethrows -> R
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001"><a href="kvimagenoerror.md">@@TOKEN_0@@</a>; otherwise, a negative value indicates one of the error codes that <a href="data-types-and-constants.md">@@TOKEN_1@@</a> describes, and a positive value indicates the required size for the temporary buffer.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">이 함수를 사용하면 다중 평면 픽셀 버퍼의 각 개별 평면 픽셀 버퍼에 접근할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">예를 들어, 다음 코드는 4채널 다중 평면 픽셀 버퍼의 처음 세 개 픽셀 버퍼에서 4채널 인터리브 픽셀 버퍼를 초기화합니다.</span>

```swift
 let src = vImage.PixelBuffer<vImage.Planar8x4>(size: vImage.Size(width: 32,
                                                                  height: 64))

 src.withUnsafePixelBuffers { overlaySource8x4PixelBuffers in

     let dest = vImage.PixelBuffer<vImage.Interleaved8x3>(planarBuffers: [
         overlaySource8x4PixelBuffers[0],
         overlaySource8x4PixelBuffers[1],
         overlaySource8x4PixelBuffers[2]
     ])
 }
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0012:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0001"><code>body</code>: 기본 픽셀 버퍼를 가리키는 <a href="vimage/pixelbuffer.md">@@TOKEN_1@@</a> 배열 매개변수를 갖는 클로저입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0014:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="vimage/pixelbuffer/withunsafepixelbuffer(at:_:">func withUnsafePixelBuffer&lt;R&gt;(at: Int, (vImage.PixelBuffer&lt;Format.PlanarPixelFormat&gt;) throws -&gt; R) rethrows -&gt; R</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">주어진 인덱스의 개별 평면을 참조하는 픽셀 버퍼와 함께 주어진 클로저를 호출합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">*<a href="https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/withunsafepixelbuffers(_:">View on Apple Developer</a>)*</span>

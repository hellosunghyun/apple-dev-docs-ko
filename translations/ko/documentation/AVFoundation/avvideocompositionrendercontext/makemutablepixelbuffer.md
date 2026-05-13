---
source_path: "documentation/AVFoundation/avvideocompositionrendercontext/makemutablepixelbuffer.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avvideocompositionrendercontext/makemutablepixelbuffer"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:makemutablepixelbuffer:0000:0001">makeMutablePixelBuffer()</span>

<span class="ko-segment" data-segment-id="seg:paragraph:makemutablepixelbuffer:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:makemutablepixelbuffer:0002:0001">Vends a CVMutablePixelBuffer to use for rendering.</span> <span class="ko-segment" data-segment-id="seg:paragraph:makemutablepixelbuffer:0002:0002">The buffer will have its kCVImageBufferCleanApertureKey and kCVImageBufferPixelAspectRatioKey attachments set to match the current composition processor properties.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:makemutablepixelbuffer:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:makemutablepixelbuffer:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:makemutablepixelbuffer:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:makemutablepixelbuffer:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:makemutablepixelbuffer:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:makemutablepixelbuffer:0004:0005">tvOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:makemutablepixelbuffer:0004:0006">visionOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func makeMutablePixelBuffer() throws -> CVMutablePixelBuffer
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">predicate와 일치하는 <code>AVAudioComponent</code> 객체의 배열입니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0010:0001">**Note**: Insufficient memory or other system error.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avvideocompositionrendercontext/newpixelbuffer.md">func newPixelBuffer() -&gt; CVPixelBuffer?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">Returns a pixel buffer to use for rendering.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avvideocompositionrendercontext/makemutablepixelbuffer(">View on Apple Developer</a>)*</span>

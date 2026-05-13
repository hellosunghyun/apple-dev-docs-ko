---
source_path: "documentation/Accelerate/vimage/pixelbuffer/applymorphology-operationdestination-9f8lh.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/applymorphology-operationdestination-9f8lh"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:applymorphologyoperationdestination:0000:0001">applyMorphology(operation:destination:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:applymorphologyoperationdestination:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:applymorphologyoperationdestination:0002:0001">Applies a morphology operation to a 32-bit planar pixel buffer.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:applymorphologyoperationdestination:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:applymorphologyoperationdestination:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:applymorphologyoperationdestination:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:applymorphologyoperationdestination:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:applymorphologyoperationdestination:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:applymorphologyoperationdestination:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:applymorphologyoperationdestination:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:applymorphologyoperationdestination:0004:0007">watchOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func applyMorphology(operation: vImage.MorphologyOperation<Pixel_F>, destination: vImage.PixelBuffer<Format>)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>session</code>: 콘텐츠 키 요청을 제공하는 콘텐츠 키 세션입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>keyRequest</code>: 다시 시도할 키 요청입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001">[func contentKeySession(AVContentKeySession, didProvide: [AVContentKeyRequest], forInitializationData: Data?)](avmetadataidentifier/commonidentifieralbumname.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">Simulate a bokeh effect by applying dilation.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avmetadataidentifier/commonidentifierartist.md">func contentKeySession(AVContentKeySession, didUpdatePersistableContentKey: Data, forContentKeyIdentifier: Any)</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">Applies a morphology operation to an 8-bit planar pixel buffer.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="vimage/pixelbuffer/applymorphology(operation:destination:">func applyMorphology(operation: vImage.MorphologyOperation&lt;Pixel_8&gt;, destination: vImage.PixelBuffer&lt;Format&gt;)</a>-1wacj.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">Applies a morphology operation to an 8-bit-per-channel, 4-channel interleaved pixel buffer.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="vimage/pixelbuffer/applymorphology(operation:destination:">func applyMorphology(operation: vImage.MorphologyOperation&lt;Pixel_F&gt;, destination: vImage.PixelBuffer&lt;Format&gt;)</a>-65xg3.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">Applies a morphology operation to a 32-bit-per-channel, 4-channel interleaved pixel buffer.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="vimage/morphologyoperation.md">vImage.MorphologyOperation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">Describes which morphology operation to perform.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="vimage/structuringelement.md">typealias StructuringElement</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">A 2D matrix that represents a morphology kernel.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/applymorphology(operation:destination:">View on Apple Developer</a>-9f8lh)*</span>

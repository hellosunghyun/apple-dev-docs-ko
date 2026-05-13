---
source_path: "documentation/Accelerate/bnns/gradientclipping/byvalue-bounds.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnns/gradientclipping/byvalue-bounds"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnsgradientclippingbyvaluebounds:0000:0001">BNNS.GradientClipping.byValue(bounds:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsgradientclippingbyvaluebounds:0001:0001">**Framework**: Accelerate **Kind**: case</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsgradientclippingbyvaluebounds:0002:0001">A constant that indicates that the operation clips gradients to a specified range.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsgradientclippingbyvaluebounds:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnsgradientclippingbyvaluebounds:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsgradientclippingbyvaluebounds:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsgradientclippingbyvaluebounds:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsgradientclippingbyvaluebounds:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsgradientclippingbyvaluebounds:0004:0005">tvOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsgradientclippingbyvaluebounds:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsgradientclippingbyvaluebounds:0004:0007">watchOS 8.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
case byValue(bounds: ClosedRange<Float>)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>bounds</code>: The minimum and maximum clipping values.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnns/gradientclipping/none.md">BNNS.GradientClipping.none</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">A constant that indicates that the operation doesn’t clip gradients.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avmetadatakey/id3metadatakeyattachedpicture.md">static let id3MetadataKeyAttachedPicture: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">A constant that indicates that the operation clips gradients to a specified Euclidean norm.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avmetadatakey/id3metadatakeyaudioencryption.md">static let id3MetadataKeyAudioEncryption: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">A constant that indicates that the operation clips gradients to a specified global Euclidean norm.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">오디오 파일 내의 탐색 지점 목록을 나타내는 키입니다.</span>

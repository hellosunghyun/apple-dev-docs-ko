---
source_path: "documentation/AVFoundation/avvideocompositionlayerinstruction/opacityramp-at.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avvideocompositionlayerinstruction/opacityramp-at"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:opacityrampat:0000:0001">opacityRamp(at:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:opacityrampat:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:opacityrampat:0002:0001">Obtains the opacity ramp that includes a specified time.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:opacityrampat:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:opacityrampat:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:opacityrampat:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:opacityrampat:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:opacityrampat:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:opacityrampat:0004:0005">tvOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:opacityrampat:0004:0006">visionOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func opacityRamp(at time: CMTime) -> AVVideoCompositionLayerInstruction.OpacityRamp?
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="avvideocompositionlayerinstruction/croprectangleramp(at:">func cropRectangleRamp(at: CMTime) -&gt; AVVideoCompositionLayerInstruction.CropRectangleRamp?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">Obtains the crop rectangle ramp that includes the specified time.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avvideocompositionlayerinstruction/croprectangleramp.md">AVVideoCompositionLayerInstruction.CropRectangleRamp</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0002"><a href="avcontentkeysessiondelegate/contentkeysession(_:externalprotectionstatusdidchangefor:">func contentKeySession(AVContentKeySession, externalProtectionStatusDidChangeFor: AVContentKey)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">현재 캡처 출력이 Live Photo 캡처를 지원하는지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avvideocompositionlayerinstruction/opacityramp.md">AVVideoCompositionLayerInstruction.OpacityRamp</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0002"><a href="avvideocompositionlayerinstruction/getopacityramp(for:startopacity:endopacity:timerange:">func getOpacityRamp(for: CMTime, startOpacity: UnsafeMutablePointer&lt;Float&gt;?, endOpacity: UnsafeMutablePointer&lt;Float&gt;?, timeRange: UnsafeMutablePointer&lt;CMTimeRange&gt;?) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">지정된 개수의 인덱스에서 값을 선택하도록 컨트롤을 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001">[init(String, symbolName: String, localizedIndexTitles: [String])](avcontentkeysessiondelegate/contentkeysession(_:shouldretry:reason:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">값 집합에서 인덱스를 선택하는 객체를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avvideocompositionlayerinstruction/transformramp.md">AVVideoCompositionLayerInstruction.TransformRamp</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0002"><a href="avvideocompositionlayerinstruction/gettransformramp(for:start:end:timerange:">func getTransformRamp(for: CMTime, start: UnsafeMutablePointer&lt;CGAffineTransform&gt;?, end: UnsafeMutablePointer&lt;CGAffineTransform&gt;?, timeRange: UnsafeMutablePointer&lt;CMTimeRange&gt;?) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">Obtains the transform ramp that includes a specified time.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avvideocompositionlayerinstruction/opacityramp(at:">View on Apple Developer</a>)*</span>

---
source_path: "documentation/AVFoundation/avvideocompositionlayerinstruction/getopacityramp-forstartopacityendopacitytimerange.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avvideocompositionlayerinstruction/getopacityramp-forstartopacityendopacitytimerange"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:getopacityrampforstartopacityendopacitytimerange:0000:0001">getOpacityRamp(for:startOpacity:endOpacity:timeRange:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:getopacityrampforstartopacityendopacitytimerange:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:getopacityrampforstartopacityendopacitytimerange:0002:0001">지정된 시간을 포함하는 opacity ramp를 가져옵니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:getopacityrampforstartopacityendopacitytimerange:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:getopacityrampforstartopacityendopacitytimerange:0004:0001">iOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:getopacityrampforstartopacityendopacitytimerange:0004:0002">iPadOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:getopacityrampforstartopacityendopacitytimerange:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:getopacityrampforstartopacityendopacitytimerange:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:getopacityrampforstartopacityendopacitytimerange:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:getopacityrampforstartopacityendopacitytimerange:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func getOpacityRamp(for time: CMTime, startOpacity: UnsafeMutablePointer<Float>?, endOpacity: UnsafeMutablePointer<Float>?, timeRange: UnsafeMutablePointer<CMTimeRange>?) -> Bool
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">값이 성공적으로 반환되면 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_0@@</a>를 반환하고, 그렇지 않으면 <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_1@@</a>를 반환합니다. 설정된 마지막 opacity ramp의 기간을 벗어난 <code>time</code>인 경우 <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_3@@</a>가 반환됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>time</code>: 지정된 시간을 포함하는 time range의 ramp가 설정되어 있으면 해당 시간에 대한 유효 ramp 정보를 제공합니다. 그렇지 않으면 지정된 시간 뒤에 시작하는 첫 번째 ramp 정보를 제공합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>startOpacity</code>: opacity ramp의 시작 불투명도 값을 받는 <code>float</code>에 대한 포인터입니다. 이 값은 <code>NULL</code>일 수 있습니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0003"><code>endOpacity</code>: opacity ramp의 종료 불투명도 값을 받는 <code>float</code>에 대한 포인터입니다. 이 값은 <code>NULL</code>일 수 있습니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0004"><code>timeRange</code>: opacity ramp의 시간 범위를 받는 <code>CMTimeRange</code>에 대한 포인터입니다. 이 값은 <code>NULL</code>일 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avvideocompositionlayerinstruction/croprectangleramp(at:">func cropRectangleRamp(at: CMTime) -&gt; AVVideoCompositionLayerInstruction.CropRectangleRamp?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">지정된 시간을 포함하는 crop rectangle ramp를 가져옵니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avvideocompositionlayerinstruction/croprectangleramp.md">AVVideoCompositionLayerInstruction.CropRectangleRamp</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0002"><a href="avvideocompositionlayerinstruction/getcroprectangleramp(for:startcroprectangle:endcroprectangle:timerange:">func getCropRectangleRamp(for: CMTime, startCropRectangle: UnsafeMutablePointer&lt;CGRect&gt;?, endCropRectangle: UnsafeMutablePointer&lt;CGRect&gt;?, timeRange: UnsafeMutablePointer&lt;CMTimeRange&gt;?) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">지정된 시간을 포함하는 crop rectangle ramp를 가져옵니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avvideocompositionlayerinstruction/opacityramp(at:">func opacityRamp(at: CMTime) -&gt; AVVideoCompositionLayerInstruction.OpacityRamp?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">지정된 시간을 포함하는 opacity ramp를 가져옵니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avvideocompositionlayerinstruction/opacityramp.md">AVVideoCompositionLayerInstruction.OpacityRamp</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0002"><a href="avvideocompositionlayerinstruction/transformramp(at:">func transformRamp(at: CMTime) -&gt; AVVideoCompositionLayerInstruction.TransformRamp?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">지정된 시간을 포함하는 transform ramp를 가져옵니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avvideocompositionlayerinstruction/transformramp.md">AVVideoCompositionLayerInstruction.TransformRamp</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0002"><a href="avvideocompositionlayerinstruction/gettransformramp(for:start:end:timerange:">func getTransformRamp(for: CMTime, start: UnsafeMutablePointer&lt;CGAffineTransform&gt;?, end: UnsafeMutablePointer&lt;CGAffineTransform&gt;?, timeRange: UnsafeMutablePointer&lt;CMTimeRange&gt;?) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">지정된 시간을 포함하는 transform ramp를 가져옵니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avvideocompositionlayerinstruction/getopacityramp(for:startopacity:endopacity:timerange:">View on Apple Developer</a>)*</span>

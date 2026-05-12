---
source_path: "documentation/AVFoundation/avvideocompositionlayerinstruction/getcroprectangleramp-forstartcroprectangleendcroprectangletimerange.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avvideocompositionlayerinstruction/getcroprectangleramp-forstartcroprectangleendcroprectangletimerange"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:getcroprectanglerampforstartcroprectangleendcroprectangletimerange:0000:0001">getCropRectangleRamp(for:startCropRectangle:endCropRectangle:timeRange:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:getcroprectanglerampforstartcroprectangleendcroprectangletimerange:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:getcroprectanglerampforstartcroprectangleendcroprectangletimerange:0002:0001">지정한 시간을 포함하는 crop rectangle ramp를 가져옵니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:getcroprectanglerampforstartcroprectangleendcroprectangletimerange:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:getcroprectanglerampforstartcroprectangleendcroprectangletimerange:0004:0001">iOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:getcroprectanglerampforstartcroprectangleendcroprectangletimerange:0004:0002">iPadOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:getcroprectanglerampforstartcroprectangleendcroprectangletimerange:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:getcroprectanglerampforstartcroprectangleendcroprectangletimerange:0004:0004">macOS 10.9+</span>
- <span class="ko-segment" data-segment-id="seg:list:getcroprectanglerampforstartcroprectangleendcroprectangletimerange:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:getcroprectanglerampforstartcroprectangleendcroprectangletimerange:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func getCropRectangleRamp(for time: CMTime, startCropRectangle: UnsafeMutablePointer<CGRect>?, endCropRectangle: UnsafeMutablePointer<CGRect>?, timeRange: UnsafeMutablePointer<CMTimeRange>?) -> Bool
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">설정된 마지막 crop rectangle ramp의 지속 시간을 초과하는 시간이 지정되면 <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_0@@</a>가 반환됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>time</code>: 지정된 시간을 포함하는 time range를 가진 램프가 설정되어 있으면 해당 시간의 적용되는 램프 정보가 제공됩니다. 그렇지 않으면 지정한 시간 이후에 시작되는 첫 번째 램프의 정보가 제공됩니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>startCropRectangle</code>: crop rectangle ramp의 시작 crop rectangle 값을 받기 위한 <code>CGRect</code>에 대한 포인터입니다. <code>NULL</code>일 수 있습니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0003"><code>endCropRectangle</code>: crop rectangle ramp의 끝 crop rectangle 값을 받기 위한 <code>CGRect</code>에 대한 포인터입니다. 이 값은 <code>NULL</code>일 수 있습니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0004"><code>timeRange</code>: crop rectangle ramp의 time range를 받기 위한 <code>CMTimeRange</code>에 대한 포인터입니다. 이 값은 <code>NULL</code>일 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avvideocompositionlayerinstruction/croprectangleramp(at:">func cropRectangleRamp(at: CMTime) -&gt; AVVideoCompositionLayerInstruction.CropRectangleRamp?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">지정한 시간을 포함하는 crop rectangle ramp를 가져옵니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avvideocompositionlayerinstruction/croprectangleramp.md">AVVideoCompositionLayerInstruction.CropRectangleRamp</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0002"><a href="avvideocompositionlayerinstruction/opacityramp(at:">func opacityRamp(at: CMTime) -&gt; AVVideoCompositionLayerInstruction.OpacityRamp?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">지정한 시간을 포함하는 opacity ramp를 가져옵니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avvideocompositionlayerinstruction/opacityramp.md">AVVideoCompositionLayerInstruction.OpacityRamp</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0002"><a href="avvideocompositionlayerinstruction/getopacityramp(for:startopacity:endopacity:timerange:">func getOpacityRamp(for: CMTime, startOpacity: UnsafeMutablePointer&lt;Float&gt;?, endOpacity: UnsafeMutablePointer&lt;Float&gt;?, timeRange: UnsafeMutablePointer&lt;CMTimeRange&gt;?) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">지정된 시간을 포함하는 opacity ramp를 가져옵니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avvideocompositionlayerinstruction/transformramp(at:">func transformRamp(at: CMTime) -&gt; AVVideoCompositionLayerInstruction.TransformRamp?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">지정된 시간을 포함하는 transform ramp를 가져옵니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avvideocompositionlayerinstruction/transformramp.md">AVVideoCompositionLayerInstruction.TransformRamp</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0002"><a href="avvideocompositionlayerinstruction/gettransformramp(for:start:end:timerange:">func getTransformRamp(for: CMTime, start: UnsafeMutablePointer&lt;CGAffineTransform&gt;?, end: UnsafeMutablePointer&lt;CGAffineTransform&gt;?, timeRange: UnsafeMutablePointer&lt;CMTimeRange&gt;?) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">지정된 시간을 포함하는 transform ramp를 가져옵니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avvideocompositionlayerinstruction/getcroprectangleramp(for:startcroprectangle:endcroprectangle:timerange:">View on Apple Developer</a>)*</span>

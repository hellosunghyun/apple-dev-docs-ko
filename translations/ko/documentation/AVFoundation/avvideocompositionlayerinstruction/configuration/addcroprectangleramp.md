---
source_path: "documentation/AVFoundation/avvideocompositionlayerinstruction/configuration/addcroprectangleramp.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avvideocompositionlayerinstruction/configuration/addcroprectangleramp"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:addcroprectangleramp:0000:0001">addCropRectangleRamp(_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:addcroprectangleramp:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:addcroprectangleramp:0002:0001">지정된 시간 범위에서 적용할 crop rectangle 램프를 설정합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:addcroprectangleramp:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:addcroprectangleramp:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:addcroprectangleramp:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:addcroprectangleramp:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:addcroprectangleramp:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:addcroprectangleramp:0004:0005">tvOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:addcroprectangleramp:0004:0006">visionOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
mutating func addCropRectangleRamp(_ ramp: AVVideoCompositionLayerInstruction.CropRectangleRamp)
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참조 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="avvideocompositionlayerinstruction/configuration/setcroprectangle(_:at:">func setCropRectangle(CGRect, at: CMTime)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">지시문 시간 범위 내 특정 시간에서 crop rectangle 값을 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avvideocompositionlayerinstruction/configuration/croprectangleramp(at:">func cropRectangleRamp(at: CMTime) -&gt; AVVideoCompositionLayerInstruction.CropRectangleRamp?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">지정된 시간을 포함하는 crop rectangle 램프를 가져옵니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avvideocompositionlayerinstruction/configuration/addcroprectangleramp(_:">View on Apple Developer</a>)*</span>

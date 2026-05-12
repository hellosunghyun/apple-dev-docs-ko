---
source_path: "documentation/AVFoundation/avvideocompositionlayerinstruction.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avvideocompositionlayerinstruction"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avvideocompositionlayerinstruction:0000:0001">AVVideoCompositionLayerInstruction</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avvideocompositionlayerinstruction:0001:0001">**Framework**: AVFoundation **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avvideocompositionlayerinstruction:0002:0001">주어진 트랙에 적용되는 변환, 크롭 및 불투명도 램프를 수정하는 데 사용되는 객체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avvideocompositionlayerinstruction:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avvideocompositionlayerinstruction:0004:0001">iOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avvideocompositionlayerinstruction:0004:0002">iPadOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avvideocompositionlayerinstruction:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avvideocompositionlayerinstruction:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:avvideocompositionlayerinstruction:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avvideocompositionlayerinstruction:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class AVVideoCompositionLayerInstruction
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:creating-a-layer-instruction:0008:0001">레이어 지시사항 생성</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-a-layer-instruction:0009:0001"><a href="avvideocompositionlayerinstruction/init(configuration:">convenience init(configuration: AVVideoCompositionLayerInstruction.Configuration)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-a-layer-instruction:0010:0001">구성(configuration)을 사용해 AVVideoCompositionLayerInstruction을 초기화합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-a-layer-instruction:0011:0001"><a href="avvideocompositionlayerinstruction/configuration.md">AVVideoCompositionLayerInstruction.Configuration</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-a-layer-instruction:0012:0001">새 AVVideoCompositionLayerInstruction 인스턴스를 초기화하기 위한 구성 가능한 속성입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:getting-the-track-id:0013:0001">트랙 ID 가져오기</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-the-track-id:0014:0001"><a href="avvideocompositionlayerinstruction/trackid.md">var trackID: CMPersistentTrackID</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-the-track-id:0015:0001">컴포지터가 이 지시사항을 적용할 소스 트랙의 트랙 식별자입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:getting-opacity-transform-and-cropping-ramps:0016:0001">불투명도, 변환 및 크롭 램프 가져오기</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-opacity-transform-and-cropping-ramps:0017:0001"><a href="avvideocompositionlayerinstruction/croprectangleramp(at:">func cropRectangleRamp(at: CMTime) -&gt; AVVideoCompositionLayerInstruction.CropRectangleRamp?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-opacity-transform-and-cropping-ramps:0018:0001">지정된 시간을 포함하는 crop rectangle ramp를 가져옵니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-opacity-transform-and-cropping-ramps:0019:0001"><a href="avvideocompositionlayerinstruction/croprectangleramp.md">AVVideoCompositionLayerInstruction.CropRectangleRamp</a></span>
- <span class="ko-segment" data-segment-id="seg:list:getting-opacity-transform-and-cropping-ramps:0019:0002"><a href="avvideocompositionlayerinstruction/getcroprectangleramp(for:startcroprectangle:endcroprectangle:timerange:">func getCropRectangleRamp(for: CMTime, startCropRectangle: UnsafeMutablePointer&lt;CGRect&gt;?, endCropRectangle: UnsafeMutablePointer&lt;CGRect&gt;?, timeRange: UnsafeMutablePointer&lt;CMTimeRange&gt;?) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-opacity-transform-and-cropping-ramps:0020:0001">지정된 시간을 포함하는 crop rectangle ramp를 가져옵니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-opacity-transform-and-cropping-ramps:0021:0001"><a href="avvideocompositionlayerinstruction/opacityramp(at:">func opacityRamp(at: CMTime) -&gt; AVVideoCompositionLayerInstruction.OpacityRamp?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-opacity-transform-and-cropping-ramps:0022:0001">지정된 시간을 포함하는 불투명도 램프를 가져옵니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-opacity-transform-and-cropping-ramps:0023:0001"><a href="avvideocompositionlayerinstruction/opacityramp.md">AVVideoCompositionLayerInstruction.OpacityRamp</a></span>
- <span class="ko-segment" data-segment-id="seg:list:getting-opacity-transform-and-cropping-ramps:0023:0002"><a href="avvideocompositionlayerinstruction/getopacityramp(for:startopacity:endopacity:timerange:">func getOpacityRamp(for: CMTime, startOpacity: UnsafeMutablePointer&lt;Float&gt;?, endOpacity: UnsafeMutablePointer&lt;Float&gt;?, timeRange: UnsafeMutablePointer&lt;CMTimeRange&gt;?) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-opacity-transform-and-cropping-ramps:0024:0001">지정된 시간을 포함하는 불투명도 램프를 가져옵니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-opacity-transform-and-cropping-ramps:0025:0001"><a href="avvideocompositionlayerinstruction/transformramp(at:">func transformRamp(at: CMTime) -&gt; AVVideoCompositionLayerInstruction.TransformRamp?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-opacity-transform-and-cropping-ramps:0026:0001">지정된 시간을 포함하는 변환 램프를 가져옵니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-opacity-transform-and-cropping-ramps:0027:0001"><a href="avvideocompositionlayerinstruction/transformramp.md">AVVideoCompositionLayerInstruction.TransformRamp</a></span>
- <span class="ko-segment" data-segment-id="seg:list:getting-opacity-transform-and-cropping-ramps:0027:0002"><a href="avvideocompositionlayerinstruction/gettransformramp(for:start:end:timerange:">func getTransformRamp(for: CMTime, start: UnsafeMutablePointer&lt;CGAffineTransform&gt;?, end: UnsafeMutablePointer&lt;CGAffineTransform&gt;?, timeRange: UnsafeMutablePointer&lt;CMTimeRange&gt;?) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-opacity-transform-and-cropping-ramps:0028:0001">지정된 시간을 포함하는 변환 램프를 가져옵니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0029:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0030:0001"><a href="avvideocompositionlayerinstruction/init(coder:">init?(coder: NSCoder)</a>.md)</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0031:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0032:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0033:0001"><a href="../ObjectiveC/NSObject-swift.class.md">NSObject</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:inherited-by:0034:0001">상속받는 클래스</span>

- <span class="ko-segment" data-segment-id="seg:list:inherited-by:0035:0001"><a href="avmutablevideocompositionlayerinstruction.md">AVMutableVideoCompositionLayerInstruction</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0036:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0037:0001"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0037:0002"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0037:0003"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0037:0004"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0037:0005"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0037:0006"><a href="../Foundation/NSCoding.md">NSCoding</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0037:0007"><a href="../Foundation/NSCopying.md">NSCopying</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0037:0008"><a href="../Foundation/NSMutableCopying.md">NSMutableCopying</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0037:0009"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0037:0010"><a href="../Foundation/NSSecureCoding.md">NSSecureCoding</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0037:0011"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0037:0012"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0038:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0039:0001"><a href="editing-and-playing-hdr-video.md">Editing and playing HDR video</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0040:0001">AVFoundation의 HDR 편집 및 재생 기능을 사용해 앱에서 HDR(고동적 범위) 비디오 콘텐츠를 지원합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0041:0001"><a href="debugging-avfoundation-audio-mixes-compositions-and-video-compositions.md">Debugging AVFoundation audio mixes, compositions, and video compositions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0042:0001">컴포지션, 비디오 구성, 오디오 믹스를 생성할 때 발생할 수 있는 일반적인 문제를 해결합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0043:0001"><a href="avvideocomposition.md">class AVVideoComposition</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0044:0001">특정 시점에서 비디오 프레임을 구성하는 방법을 설명하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0045:0001"><a href="avvideocompositioninstruction-swift.class.md">class AVVideoCompositionInstruction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0046:0001">컴포지터가 수행하는 작업입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0047:0001"><a href="avmutablevideocomposition.md">class AVMutableVideoComposition</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0048:0001">가변 비디오 구성의 하위 클래스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0049:0001"><a href="avmutablevideocompositioninstruction.md">class AVMutableVideoCompositionInstruction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0050:0001">가변 비디오 구성 지시사항의 하위 클래스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0051:0001"><a href="avmutablevideocompositionlayerinstruction.md">class AVMutableVideoCompositionLayerInstruction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0052:0001">가변 구성에서 지정된 트랙에 적용되는 변환, 크롭 및 불투명도 램프를 수정하는 데 사용되는 객체입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0054:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avvideocompositionlayerinstruction">View on Apple Developer</a>*</span>

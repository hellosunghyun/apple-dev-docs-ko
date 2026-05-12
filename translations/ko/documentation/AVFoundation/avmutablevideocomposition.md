---
source_path: "documentation/AVFoundation/avmutablevideocomposition.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avmutablevideocomposition"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avmutablevideocomposition:0000:0001">AVMutableVideoComposition</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avmutablevideocomposition:0001:0001">**Framework**: AVFoundation **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avmutablevideocomposition:0002:0001">가변 비디오 컴포지션 하위 클래스입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avmutablevideocomposition:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avmutablevideocomposition:0004:0001">iOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmutablevideocomposition:0004:0002">iPadOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmutablevideocomposition:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmutablevideocomposition:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmutablevideocomposition:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmutablevideocomposition:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class AVMutableVideoComposition
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">내장 비디오 컴포지터를 사용하는 경우, 비디오 컴포지션의 지시문은 각 비디오 소스에 대해 공간 변환, 불투명도 값, 잘라내기 사각형을 지정할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0002">선형 램핑 함수를 적용하면 이 값들은 시간에 따라 변할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0001"><a href="avvideocompositing.md">@@TOKEN_0@@</a> 프로토콜을 구현해 사용자 지정 비디오 컴포지터를 만들 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0002">시스템은 재생 중 각 비디오 소스의 픽셀 버퍼를 사용자 지정 비디오 컴포지터에 제공하며, 이를 사용해 임의의 그래픽 작업을 수행해 시각적 출력을 생성할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0010:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:creating-a-video-composition:0011:0001">비디오 컴포지션 만들기</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-a-video-composition:0012:0001"><a href="avmutablevideocomposition/videocomposition(withpropertiesof:completionhandler:">class func videoComposition(withPropertiesOf: AVAsset, completionHandler: (AVMutableVideoComposition?, (any Error)?) -&gt; Void)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-a-video-composition:0013:0001">지정된 자산의 비디오 트랙을 표시하도록 구성된 새 비디오 컴포지션을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-a-video-composition:0014:0001"><a href="avmutablevideocomposition/videocomposition(withpropertiesof:prototypeinstruction:completionhandler:">class func videoComposition(withPropertiesOf: AVAsset, prototypeInstruction: AVVideoCompositionInstruction, completionHandler: (AVMutableVideoComposition?, (any Error)?) -&gt; Void)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-a-video-composition:0015:0001">지정된 자산 속성 및 프로토타입 비디오 컴포지션 지시문을 사용해 새 가변 비디오 컴포지션을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-a-video-composition:0016:0001"><a href="avmutablevideocomposition/videocomposition(with:applyingcifilterswithhandler:completionhandler:">class func videoComposition(with: AVAsset, applyingCIFiltersWithHandler: (AVAsynchronousCIImageFilteringRequest) -&gt; Void, completionHandler: (AVMutableVideoComposition?, (any Error)?) -&gt; Void)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-a-video-composition:0017:0001">지정된 자산의 각 비디오 프레임에 Core Image 필터를 적용하도록 구성된 새 비디오 컴포지션을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-a-video-composition:0018:0001"><a href="avmutablevideocomposition/init(propertiesof:">init(propertiesOf: AVAsset)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-a-video-composition:0019:0001">지정된 자산 속성으로 가변 비디오 컴포지션을 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-a-video-composition:0020:0001"><a href="avmutablevideocomposition/init(propertiesof:prototypeinstruction:">init(propertiesOf: AVAsset, prototypeInstruction: AVVideoCompositionInstruction)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-a-video-composition:0021:0001">지정된 자산 속성과 프로토타입 비디오 컴포지션 지시문을 사용해 가변 비디오 컴포지션을 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-a-video-composition:0022:0001"><a href="avmutablevideocomposition/init(asset:applyingcifilterswithhandler:">init(asset: AVAsset, applyingCIFiltersWithHandler: (AVAsynchronousCIImageFilteringRequest) -&gt; Void)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-a-video-composition:0023:0001">지정된 자산의 각 비디오 프레임에 Core Image 필터를 적용하도록 구성된 가변 비디오 컴포지션을 생성합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:configuring-video-composition-properties:0024:0001">비디오 컴포지션 속성 구성</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-video-composition-properties:0025:0001"><a href="avmutablevideocomposition/frameduration.md">var frameDuration: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-video-composition-properties:0026:0001">비디오 컴포지션이 합성된 비디오 프레임을 렌더링해야 하는 시간 간격입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-video-composition-properties:0027:0001"><a href="avmutablevideocomposition/rendersize.md">var renderSize: CGSize</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-video-composition-properties:0028:0001">비디오 컴포지션이 렌더링해야 하는 크기입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-video-composition-properties:0029:0001"><a href="avmutablevideocomposition/renderscale.md">var renderScale: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-video-composition-properties:0030:0001">비디오 컴포지션이 렌더링해야 하는 배율입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-video-composition-properties:0031:0001"><a href="avmutablevideocomposition/animationtool.md">var animationTool: AVVideoCompositionCoreAnimationTool?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-video-composition-properties:0032:0001">오프라인 렌더링에서 Core Animation과 함께 사용할 비디오 컴포지션 도구입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:specifying-composition-instructions:0033:0001">컴포지션 지시문 지정</span>

- <span class="ko-segment" data-segment-id="seg:list:specifying-composition-instructions:0034:0001">[var instructions: [any AVVideoCompositionInstructionProtocol]](avmutablevideocomposition/instructions.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:specifying-composition-instructions:0035:0001">The video composition instructions.</span>

- <span class="ko-segment" data-segment-id="seg:list:specifying-composition-instructions:0036:0001"><a href="avvideocompositioninstructionprotocol.md">protocol AVVideoCompositionInstructionProtocol</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:specifying-composition-instructions:0037:0001">A protocol that defines the interface for a video composition instruction.</span>

### <span class="ko-segment" data-segment-id="seg:heading:configuring-hdr-metadata:0038:0001">Configuring HDR metadata</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-hdr-metadata:0039:0001"><a href="avmutablevideocomposition/perframehdrdisplaymetadatapolicy.md">var perFrameHDRDisplayMetadataPolicy: AVVideoComposition.PerFrameHDRDisplayMetadataPolicy</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-hdr-metadata:0040:0001">Configures the policy for display of HDR display metadata on the rendered frame.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-hdr-metadata:0041:0001"><a href="avvideocomposition/perframehdrdisplaymetadatapolicy-swift.struct.md">AVVideoComposition.PerFrameHDRDisplayMetadataPolicy</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-hdr-metadata:0042:0001">A type that defines the policy for handling of per frame HDR metadata.</span>

### <span class="ko-segment" data-segment-id="seg:heading:configuring-color:0043:0001">Configuring color</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-color:0044:0001"><a href="avmutablevideocomposition/colorprimaries.md">var colorPrimaries: String?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-color:0045:0001">The color primaries used for video composition.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-color:0046:0001"><a href="avmutablevideocomposition/colortransferfunction.md">var colorTransferFunction: String?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-color:0047:0001">The transfer function used for video composition.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-color:0048:0001"><a href="avmutablevideocomposition/colorycbcrmatrix.md">var colorYCbCrMatrix: String?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-color:0049:0001">The YCbCr matrix used for video composition.</span>

### <span class="ko-segment" data-segment-id="seg:heading:identifying-source-tracks:0050:0001">Identifying source tracks</span>

- <span class="ko-segment" data-segment-id="seg:list:identifying-source-tracks:0051:0001"><a href="avmutablevideocomposition/sourcetrackidforframetiming.md">var sourceTrackIDForFrameTiming: CMPersistentTrackID</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:identifying-source-tracks:0052:0001">An identifier of the source track from which the video composition derives frame timing.</span>

- <span class="ko-segment" data-segment-id="seg:list:identifying-source-tracks:0053:0001">[var sourceSampleDataTrackIDs: [CMPersistentTrackID]](avmutablevideocomposition/sourcesampledatatrackids-7i02t.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:identifying-source-tracks:0054:0001">The identifiers of source sample data tracks in the composition that the object requires to compose frames.</span>

### <span class="ko-segment" data-segment-id="seg:heading:specifying-a-custom-compositor:0055:0001">Specifying a custom compositor</span>

- <span class="ko-segment" data-segment-id="seg:list:specifying-a-custom-compositor:0056:0001"><a href="avmutablevideocomposition/customvideocompositorclass.md">var customVideoCompositorClass: (any AVVideoCompositing.Type)?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:specifying-a-custom-compositor:0057:0001">The custom compositor class to use.</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0058:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0059:0001"><a href="avmutablevideocomposition/init(propertiesofasset:prototypeinstruction:">init(propertiesOfAsset: AVAsset, prototypeInstruction: AVVideoCompositionInstruction)</a>.md)</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0060:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0061:0001">Inherits From</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0062:0001"><a href="avvideocomposition.md">AVVideoComposition</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0063:0001">Conforms To</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0064:0001"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0064:0002"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0064:0003"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0064:0004"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0064:0005"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0064:0006"><a href="../Foundation/NSCopying.md">NSCopying</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0064:0007"><a href="../Foundation/NSMutableCopying.md">NSMutableCopying</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0064:0008"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0064:0009"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0064:0010"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0065:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0066:0001"><a href="editing-and-playing-hdr-video.md">Editing and playing HDR video</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0067:0001">Support high-dynamic-range (HDR) video content in your app by using the HDR editing and playback capabilities of AVFoundation.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0068:0001"><a href="debugging-avfoundation-audio-mixes-compositions-and-video-compositions.md">Debugging AVFoundation audio mixes, compositions, and video compositions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0069:0001">Resolve common problems when creating compositions, video compositions, and audio mixes.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0070:0001"><a href="avvideocomposition.md">class AVVideoComposition</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0071:0001">An object that describes how to compose video frames at particular points in time.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0072:0001"><a href="avvideocompositioninstruction-swift.class.md">class AVVideoCompositionInstruction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0073:0001">An operation that a compositor performs.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0074:0001"><a href="avvideocompositionlayerinstruction.md">class AVVideoCompositionLayerInstruction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0075:0001">An object used to modify the transform, cropping, and opacity ramps applied to a given track in a composition.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0076:0001"><a href="avmutablevideocompositioninstruction.md">class AVMutableVideoCompositionInstruction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0077:0001">A mutable video composition instruction subclass.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0078:0001"><a href="avmutablevideocompositionlayerinstruction.md">class AVMutableVideoCompositionLayerInstruction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0079:0001">An object used to modify the transform, cropping, and opacity ramps applied to a given track in a mutable composition.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0081:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmutablevideocomposition">View on Apple Developer</a>*</span>

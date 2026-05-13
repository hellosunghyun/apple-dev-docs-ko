---
source_path: "documentation/AVFoundation/avvideocomposition/configuration/spatialvideoconfigurations.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avvideocomposition/configuration/spatialvideoconfigurations"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:spatialvideoconfigurations:0000:0001">spatialVideoConfigurations</span>

<span class="ko-segment" data-segment-id="seg:paragraph:spatialvideoconfigurations:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:spatialvideoconfigurations:0002:0001">Indicates the spatial configurations that are available to associate with the output of the video composition.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:spatialvideoconfigurations:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:spatialvideoconfigurations:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:spatialvideoconfigurations:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:spatialvideoconfigurations:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:spatialvideoconfigurations:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:spatialvideoconfigurations:0004:0005">tvOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:spatialvideoconfigurations:0004:0006">visionOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var spatialVideoConfigurations: [AVSpatialVideoConfiguration] { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">delegate 객체는 <a href="avaudiosessiondelegate.md">@@TOKEN_0@@</a>에 설명된 프로토콜을 구현해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">이 메서드는 로딩 요청을 완료로 표시하고, 해당 리소스를 로드할 수 없음을 리소스 로더 객체에 알립니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">GDC를 사용하면 기기가 보정된 이미지를 원래 이미지 크기로 업스케일링합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0004">The value can be nil, which indicates the output will not be spatial.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0005">NOTE: If this property is not empty, then the client must attach one of the spatial configurations in this array to all of the pixel buffers, otherwise an exception will be thrown.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avvideocomposition/configuration/rendersize.md">var renderSize: CGSize</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">The size at which the video composition should render.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avvideocomposition/configuration/renderscale.md">var renderScale: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">The scale at which the video composition should render.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avvideocomposition/configuration/frameduration.md">var frameDuration: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">A time interval for which the video composition should render composed video frames.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avvideocomposition/configuration/animationtool.md">var animationTool: AVVideoCompositionCoreAnimationTool?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">A video composition tool to use with Core Animation in offline rendering.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avvideocomposition/configuration/colorprimaries.md">var colorPrimaries: String?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">The color primaries used for video composition.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avvideocomposition/configuration/colortransferfunction.md">var colorTransferFunction: String?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">The transfer function used for video composition.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avvideocomposition/configuration/colorycbcrmatrix.md">var colorYCbCrMatrix: String?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">The YCbCr matrix used for video composition.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avvideocomposition/configuration/customvideocompositorclass.md">var customVideoCompositorClass: (any AVVideoCompositing.Type)?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">A custom compositor class to use.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001">[var outputBufferDescription: [[CMTag]]?](avvideocomposition/configuration/outputbufferdescription.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">The output buffers of the video composition can be specified with the outputBufferDescription.</span> <span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0002">The value is an array of an array of CMTag objects that describes the output buffers.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001">[var instructions: [any AVVideoCompositionInstructionProtocol]](avvideocomposition/configuration/instructions.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">The video composition instructions.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="avvideocomposition/configuration/perframehdrdisplaymetadatapolicy.md">var perFrameHDRDisplayMetadataPolicy: AVVideoComposition.PerFrameHDRDisplayMetadataPolicy</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">The policy for display of HDR display metadata on the rendered frame.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001">[var sourceSampleDataTrackIDs: [CMPersistentTrackID]](avvideocomposition/configuration/sourcesampledatatrackids.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">The identifiers of source sample data tracks in the composition that the object requires to compose frames.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="avvideocomposition/configuration/sourcetrackidforframetiming.md">var sourceTrackIDForFrameTiming: CMPersistentTrackID</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">An identifier of the source track from which the video composition derives frame timing.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avvideocomposition/configuration/spatialvideoconfigurations">View on Apple Developer</a>*</span>

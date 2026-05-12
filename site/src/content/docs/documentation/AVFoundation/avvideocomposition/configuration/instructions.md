---
source_path: "documentation/AVFoundation/avvideocomposition/configuration/instructions.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avvideocomposition/configuration/instructions"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:instructions:0000:0001">instructions</span>

<span class="ko-segment" data-segment-id="seg:paragraph:instructions:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:instructions:0002:0001">비디오 구성 지침입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:instructions:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:instructions:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:instructions:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:instructions:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:instructions:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:instructions:0004:0005">tvOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:instructions:0004:0006">visionOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var instructions: [any AVVideoCompositionInstructionProtocol] { get set }
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="avvideocomposition/configuration/rendersize.md">var renderSize: CGSize</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">비디오 구성이 렌더링되어야 하는 크기입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avvideocomposition/configuration/renderscale.md">var renderScale: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">비디오 구성이 렌더링되어야 하는 배율입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avvideocomposition/configuration/frameduration.md">var frameDuration: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">비디오 구성에서 합성된 비디오 프레임을 렌더링해야 하는 시간 간격입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avvideocomposition/configuration/animationtool.md">var animationTool: AVVideoCompositionCoreAnimationTool?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">오프라인 렌더링에서 Core Animation과 함께 사용할 비디오 구성 도구입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avvideocomposition/configuration/colorprimaries.md">var colorPrimaries: String?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avkit/avpictureinpicturecontroller/stoppictureinpicture(">View on Apple Developer</a>)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avvideocomposition/configuration/colortransferfunction.md">var colorTransferFunction: String?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">비디오 구성에 사용되는 전송 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avvideocomposition/configuration/colorycbcrmatrix.md">var colorYCbCrMatrix: String?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">비디오 구성에 사용되는 YCbCr 매트릭스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avvideocomposition/configuration/customvideocompositorclass.md">var customVideoCompositorClass: (any AVVideoCompositing.Type)?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">사용할 사용자 지정 compositor 클래스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001">[var outputBufferDescription: [[CMTag]]?](avvideocomposition/configuration/outputbufferdescription.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">비디오 구성의 출력 버퍼는 outputBufferDescription으로 지정할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0002">이 값은 출력 버퍼를 설명하는 CMTag 객체의 배열의 배열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001">[var spatialVideoConfigurations: [AVSpatialVideoConfiguration]](avvideocomposition/configuration/spatialvideoconfigurations.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">비디오 구성의 출력과 연결할 수 있는 spatial configuration을 나타냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avvideocomposition/configuration/perframehdrdisplaymetadatapolicy.md">var perFrameHDRDisplayMetadataPolicy: AVVideoComposition.PerFrameHDRDisplayMetadataPolicy</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">렌더링된 프레임에서 HDR 표시 메타데이터를 표시하는 정책입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001">[var sourceSampleDataTrackIDs: [CMPersistentTrackID]](avvideocomposition/configuration/sourcesampledatatrackids.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">객체가 프레임을 구성하는 데 필요한 구성 내의 원본 샘플 데이터 트랙의 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="avvideocomposition/configuration/sourcetrackidforframetiming.md">var sourceTrackIDForFrameTiming: CMPersistentTrackID</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">비디오 구성이 프레임 타이밍을 가져오는 원본 트랙의 식별자입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avvideocomposition/configuration/instructions">View on Apple Developer</a>*</span>

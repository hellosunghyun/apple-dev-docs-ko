---
source_path: "documentation/AVFoundation/avvideocomposition/outputbufferdescription-3ayt8.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avvideocomposition/outputbufferdescription-3ayt8"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:outputbufferdescription:0000:0001">outputBufferDescription</span>

<span class="ko-segment" data-segment-id="seg:paragraph:outputbufferdescription:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:outputbufferdescription:0002:0001">비디오 컴포지션의 출력 버퍼는 outputBufferDescription으로 지정할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:outputbufferdescription:0002:0002">값은 출력 버퍼를 설명하는 CMTag 객체의 배열입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:outputbufferdescription:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:outputbufferdescription:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:outputbufferdescription:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:outputbufferdescription:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:outputbufferdescription:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:outputbufferdescription:0004:0005">tvOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:outputbufferdescription:0004:0006">visionOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var outputBufferDescription: [[CMTag]]? { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">비디오 컴포지션에서 태그가 지정된 버퍼를 출력할 경우, 해당 버퍼의 세부 정보는 CMTags로 지정해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">구체적으로 StereoView (eyes)와 ProjectionKind를 지정해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">출력 버퍼가 outputBufferDescription과 일치하지 않으면 동작이 정의되지 않습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0004">기본값은 nil이며, 이는 단안(monoscopic) 출력을 의미합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0005">빈 배열은 유효하지 않습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0006">태그된 버퍼는 사용자 지정 compositor에서만 지원됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참조</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avvideocomposition/rendersize.md">var renderSize: CGSize</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">비디오 컴포지션을 렌더링해야 하는 크기입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avvideocomposition/renderscale.md">var renderScale: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">비디오 컴포지션을 렌더링해야 하는 배율입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avvideocomposition/frameduration.md">var frameDuration: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">비디오 합성 프레임을 렌더링해야 하는 시간 간격입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avvideocomposition/animationtool.md">var animationTool: AVVideoCompositionCoreAnimationTool?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">오프라인 렌더링에서 Core Animation과 함께 사용할 비디오 컴포지션 도구입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avvideocomposition/colorprimaries.md">var colorPrimaries: String?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">비디오 컴포지션에 사용되는 컬러 프라이머리입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avvideocomposition/colortransferfunction.md">var colorTransferFunction: String?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">비디오 컴포지션에 사용되는 전송 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avvideocomposition/colorycbcrmatrix.md">var colorYCbCrMatrix: String?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">비디오 컴포지션에 사용되는 YCbCr 매트릭스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avvideocomposition/customvideocompositorclass.md">var customVideoCompositorClass: (any AVVideoCompositing.Type)?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">사용할 사용자 지정 compositor 클래스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001">[var spatialVideoConfigurations: [AVSpatialVideoConfiguration]](avvideocomposition/spatialvideoconfigurations-80iab.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">비디오 컴포지션 출력에 연결할 수 있는 공간 구성을 나타냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avspatialvideoconfiguration-swift.struct.md">struct AVSpatialVideoConfiguration</a></span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avvideocomposition/outputbufferdescription-3ayt8">View on Apple Developer</a>*</span>

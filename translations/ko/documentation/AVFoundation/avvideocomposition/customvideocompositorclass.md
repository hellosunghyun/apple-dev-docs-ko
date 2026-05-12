---
source_path: "documentation/AVFoundation/avvideocomposition/customvideocompositorclass.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avvideocomposition/customvideocompositorclass"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:customvideocompositorclass:0000:0001">customVideoCompositorClass</span>

<span class="ko-segment" data-segment-id="seg:paragraph:customvideocompositorclass:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:customvideocompositorclass:0002:0001">사용할 사용자 정의 컴포지터 클래스입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:customvideocompositorclass:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:customvideocompositorclass:0004:0001">iOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:customvideocompositorclass:0004:0002">iPadOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:customvideocompositorclass:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:customvideocompositorclass:0004:0004">macOS 10.9+</span>
- <span class="ko-segment" data-segment-id="seg:list:customvideocompositorclass:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:customvideocompositorclass:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var customVideoCompositorClass: (any AVVideoCompositing.Type)? { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">기본값은 <code>nil</code>이며, 내부 비디오 컴포지터를 사용함을 나타냅니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002"><code>customVideoCompositorClass</code>는 <a href="avvideocompositing.md">@@TOKEN_1@@</a> 프로토콜을 구현해야 합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avvideocomposition/rendersize.md">var renderSize: CGSize</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">비디오 컴포지션이 렌더링할 크기입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avvideocomposition/renderscale.md">var renderScale: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">비디오 컴포지션이 렌더링할 스케일입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avvideocomposition/frameduration.md">var frameDuration: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">비디오 컴포지션이 합성된 비디오 프레임을 렌더링해야 하는 시간 간격입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avvideocomposition/animationtool.md">var animationTool: AVVideoCompositionCoreAnimationTool?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">오프라인 렌더링에서 Core Animation과 함께 사용할 비디오 컴포지션 도구입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avvideocomposition/colorprimaries.md">var colorPrimaries: String?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">비디오 컴포지션에 사용되는 컬러 프라이머리입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avvideocomposition/colortransferfunction.md">var colorTransferFunction: String?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">비디오 컴포지션에 사용되는 전송 함수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avvideocomposition/colorycbcrmatrix.md">var colorYCbCrMatrix: String?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">비디오 컴포지션에 사용되는 YCbCr 행렬입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001">[var outputBufferDescription: [[CMTag]]?](avvideocomposition/outputbufferdescription-3ayt8.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">비디오 컴포지션의 출력 버퍼는 outputBufferDescription로 지정할 수 있습니다. 해당 값은 출력 버퍼를 설명하는 <code>CMTag</code> 객체의 배열의 배열입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0002">이 값은 출력 버퍼를 설명하는 CMTag 객체의 이중 배열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001">[var spatialVideoConfigurations: [AVSpatialVideoConfiguration]](avvideocomposition/spatialvideoconfigurations-80iab.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">비디오 구성 출력과 연결할 수 있는 공간 구성을 나타냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avspatialvideoconfiguration-swift.struct.md">struct AVSpatialVideoConfiguration</a></span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avvideocomposition/customvideocompositorclass">View on Apple Developer</a>*</span>

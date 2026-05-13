---
source_path: "documentation/AVFoundation/avcapturedevice/format/supportedvideozoomrangesfordepthdatadelivery.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/supportedvideozoomrangesfordepthdatadelivery"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:supportedvideozoomrangesfordepthdatadelivery:0000:0001">supportedVideoZoomRangesForDepthDataDelivery</span>

<span class="ko-segment" data-segment-id="seg:paragraph:supportedvideozoomrangesfordepthdatadelivery:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:supportedvideozoomrangesfordepthdatadelivery:0002:0001">The zoom ranges that support the delivery of depth data.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:supportedvideozoomrangesfordepthdatadelivery:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:supportedvideozoomrangesfordepthdatadelivery:0004:0001">iOS 17.2+</span>
- <span class="ko-segment" data-segment-id="seg:list:supportedvideozoomrangesfordepthdatadelivery:0004:0002">iPadOS 17.2+</span>
- <span class="ko-segment" data-segment-id="seg:list:supportedvideozoomrangesfordepthdatadelivery:0004:0003">Mac Catalyst 17.2+</span>
- <span class="ko-segment" data-segment-id="seg:list:supportedvideozoomrangesfordepthdatadelivery:0004:0004">macOS 14.2+</span>
- <span class="ko-segment" data-segment-id="seg:list:supportedvideozoomrangesfordepthdatadelivery:0004:0005">tvOS 17.2+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
@nonobjc
var supportedVideoZoomRangesForDepthDataDelivery: [ClosedRange<CGFloat>] { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001"><a href="arworldmap.md">@@TOKEN_0@@</a>은 실행 중인 <a href="arsession.md">@@TOKEN_1@@</a>의 상태를 캡슐화합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">이 상태에는 사용자가 기기를 이동하는 물리적 공간에 대한 ARKit의 인식(기기의 위치와 방향을 결정하는 데 사용됨)과 세션에 추가된 모든 <a href="aranchor.md">@@TOKEN_0@@</a> 객체(탐지된 실제 환경 기능이나 앱이 배치한 가상 콘텐츠를 나타낼 수 있는 객체)가 포함됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">월드맵을 저장하고 이를 사용해 새 세션을 시작하면 앱에 새로운 AR 기능을 추가할 수 있습니다:</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">For example, if the value of this property contains the closed ranges <code>2...2</code> and <code>4...4</code>, the system only allows you to set zoom factors 2 and 4 when you enable depth data delivery.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0003">Setting a zoom factor outside these ranges results in an exception.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0004">Alternatively, a closed range of <code>2...5</code> indicates the system supports depth data delivery with zoom factors from 2 to 5.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0005">You can set a zoom factor outside this range, but results in a loss of depth data.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0006">Setting the zoom factor back to the supported range resumes depth data delivery.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">When you enable depth data delivery, the effective <a href="avcapturedevice/format/videozoomfactorupscalethreshold.md">@@TOKEN_0@@</a> is <code>1.0</code>, which means that all zoom factors that aren’t native zoom factors (see <a href="avcapturedevice/virtualdeviceswitchovervideozoomfactors.md">@@TOKEN_2@@</a> and <a href="avcapturedevice/format/secondarynativeresolutionzoomfactors.md">@@TOKEN_3@@</a>) result in digital upscaling.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcapturedevice/format/systemrecommendedvideozoomrange.md">var systemRecommendedVideoZoomRange: ClosedRange&lt;CGFloat&gt;?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">The system’s recommended zoom range for this device format.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcapturedevice/format/videomaxzoomfactor.md">var videoMaxZoomFactor: CGFloat</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">A maximum zoom factor the format allows.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avcapturedevice/format/videozoomfactorupscalethreshold.md">var videoZoomFactorUpscaleThreshold: CGFloat</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">A threshold at which the system upscales pixel data.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001">[static func supportedVideoFormats(for: CameraFrameProvider.CameraType, cameraPositions: [CameraFrameProvider.CameraPosition]) -&gt; [CameraVideoFormat]](cameravideoformat/supportedvideoformats(for:camerapositions:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">The zoom factors at which this device transitions to secondary native resolution modes.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avcapturedevice/format/zoomfactorsoutsideofvideozoomrangesfordepthdeliverysupported.md">var zoomFactorsOutsideOfVideoZoomRangesForDepthDeliverySupported: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">A Boolean value that indicates whether the format supports zoom factors outside the range supported for depth delivery.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/supportedvideozoomrangesfordepthdatadelivery">View on Apple Developer</a>*</span>

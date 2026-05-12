---
source_path: "documentation/AVFoundation/avcapturedevice/format/videozoomfactorupscalethreshold.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/videozoomfactorupscalethreshold"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:videozoomfactorupscalethreshold:0000:0001">videoZoomFactorUpscaleThreshold</span>

<span class="ko-segment" data-segment-id="seg:paragraph:videozoomfactorupscalethreshold:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:videozoomfactorupscalethreshold:0002:0001">시스템이 픽셀 데이터를 업스케일링하는 임계값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:videozoomfactorupscalethreshold:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:videozoomfactorupscalethreshold:0004:0001">iOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:videozoomfactorupscalethreshold:0004:0002">iPadOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:videozoomfactorupscalethreshold:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:videozoomfactorupscalethreshold:0004:0004">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var videoZoomFactorUpscaleThreshold: CGFloat { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">기기는 센서로 캡처한 이미지의 중심을 기준으로 잘라냄으로써 줌 효과를 구현합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">낮은 줌 배율에서는 잘린 이미지 크기가 출력 크기와 같거나 더 큽니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">더 높은 줌 배율에서는 기기가 잘린 이미지를 출력 크기로 확대해야 하므로 이미지 품질이 저하됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0004">이 속성은 업스케일링이 발생하는 배율을 나타냅니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avcapturedevice/format/systemrecommendedvideozoomrange.md">var systemRecommendedVideoZoomRange: ClosedRange&lt;CGFloat&gt;?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">이 디바이스 형식에 대해 시스템이 권장하는 줌 범위입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcapturedevice/format/videomaxzoomfactor.md">var videoMaxZoomFactor: CGFloat</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">형식에서 허용되는 최대 줌 배율입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001">[var secondaryNativeResolutionZoomFactors: [CGFloat]](avcapturedevice/format/secondarynativeresolutionzoomfactors.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">이 디바이스가 보조 기본 해상도 모드로 전환되는 줌 배율입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001">[var supportedVideoZoomRangesForDepthDataDelivery: [ClosedRange&lt;CGFloat&gt;]](avcapturedevice/isflashmodesupported(_:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">깊이 데이터 전달을 지원하는 줌 범위입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avcapturedevice/format/zoomfactorsoutsideofvideozoomrangesfordepthdeliverysupported.md">var zoomFactorsOutsideOfVideoZoomRangesForDepthDeliverySupported: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">형식이 깊이 전달에 지원되는 범위를 벗어나는 줌 배율을 지원하는지 나타내는 불리언 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/videozoomfactorupscalethreshold">View on Apple Developer</a>*</span>

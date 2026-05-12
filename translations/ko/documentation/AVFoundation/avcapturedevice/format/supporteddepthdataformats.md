---
source_path: "documentation/AVFoundation/avcapturedevice/format/supporteddepthdataformats.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/supporteddepthdataformats"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:supporteddepthdataformats:0000:0001">supportedDepthDataFormats</span>

<span class="ko-segment" data-segment-id="seg:paragraph:supporteddepthdataformats:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:supporteddepthdataformats:0002:0001">이 비디오 형식과 호환되는 데이터 형식의 목록입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:supporteddepthdataformats:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:supporteddepthdataformats:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:supporteddepthdataformats:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:supporteddepthdataformats:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:supporteddepthdataformats:0004:0004">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var supportedDepthDataFormats: [AVCaptureDevice.Format] { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">This readonly property returns the <a href="avexternalsyncdevice.md">@@TOKEN_0@@</a> instance you provided in <a href="avcapturedeviceinput/follow(_:videoframeduration:delegate:">@@TOKEN_1@@</a>.md).</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">This property returns <code>nil</code> when an external sync device is disconnected or fails to calibrate.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">지원되는 깊이 데이터 형식은 항상 해당 비디오 형식의 종횡비와 일치합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001">[var supportedVideoZoomFactorsForDepthDataDelivery: [CGFloat]](avcapturedevice/format/supportedvideozoomfactorsfordepthdatadelivery.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">형식이 깊이 데이터 전달에 대해 지원하는 줌 계수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/supporteddepthdataformats">View on Apple Developer</a>*</span>

---
source_path: "documentation/AVFoundation/avcaptureconnection/iscameraintrinsicmatrixdeliveryenabled.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcaptureconnection/iscameraintrinsicmatrixdeliveryenabled"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:iscameraintrinsicmatrixdeliveryenabled:0000:0001">isCameraIntrinsicMatrixDeliveryEnabled</span>

<span class="ko-segment" data-segment-id="seg:paragraph:iscameraintrinsicmatrixdeliveryenabled:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:iscameraintrinsicmatrixdeliveryenabled:0002:0001">이 속성은 캡처 파이프라인이 카메라 내부 행렬 정보를 전달하도록 구성할 수 있는지를 나타내는 Boolean 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:iscameraintrinsicmatrixdeliveryenabled:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:iscameraintrinsicmatrixdeliveryenabled:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:iscameraintrinsicmatrixdeliveryenabled:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:iscameraintrinsicmatrixdeliveryenabled:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:iscameraintrinsicmatrixdeliveryenabled:0004:0004">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var isCameraIntrinsicMatrixDeliveryEnabled: Bool { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 속성은 <a href="avcaptureconnection/iscameraintrinsicmatrixdeliverysupported.md">@@TOKEN_0@@</a>가 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_1@@</a>일 때 비디오 연결에 대해 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_2@@</a>로 설정할 수 있으며, <a href="avcapturesession.md">@@TOKEN_3@@</a> <a href="avcapturesession/startrunning(">@@TOKEN_4@@</a>.md) 메서드를 호출하기 전에서만 가능합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">기본값은 <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_0@@</a>입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">카메라 내부 행렬은 캡처 장치의 현재 촬영 파라미터를 설명하며, 이를 사용해 오버레이를 렌더링하거나 컴퓨터 비전 작업을 수행할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">If <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_0@@</a>, any <a href="avcapturevideodataoutput.md">@@TOKEN_1@@</a> instance in this connection can include the <a href="https://developer.apple.com/documentation/CoreMedia/kCMSampleBufferAttachmentKey_CameraIntrinsicMatrix">@@TOKEN_2@@</a> attachment for each sample buffer it vends.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="avcaptureconnection/iscameraintrinsicmatrixdeliverysupported.md">var isCameraIntrinsicMatrixDeliverySupported: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiosessionspatialexperience-swift.protocol/headtracked(soundstagesize:anchoringstrategy:">Apple Developer에서 보기</a>)*</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcaptureconnection/iscameraintrinsicmatrixdeliveryenabled">View on Apple Developer</a>*</span>

---
source_path: "documentation/AVFoundation/avcapturedevice/rotationcoordinator/device.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedevice/rotationcoordinator/device"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:device:0000:0001">device</span>

<span class="ko-segment" data-segment-id="seg:paragraph:device:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:device:0002:0001">조정기가 물리적 회전을 추적하기 위해 모니터링하는 캡처 디바이스입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:device:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:device:0004:0001">iOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:device:0004:0002">iPadOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:device:0004:0003">Mac Catalyst 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:device:0004:0004">macOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:device:0004:0005">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
weak var device: AVCaptureDevice? { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">조정기는 장치의 물리적 회전을 모니터링하여 <a href="avcapturedevice/rotationcoordinator/videorotationangleforhorizonlevelcapture.md">@@TOKEN_0@@</a> 속성을 업데이트합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avcapturedevice/rotationcoordinator/previewlayer.md">var previewLayer: CALayer?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">조정기가 비디오 회전 각도를 계산하기 위해 사용하는 카메라 미리보기를 표시하는 레이어입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedevice/rotationcoordinator/device">View on Apple Developer</a>*</span>

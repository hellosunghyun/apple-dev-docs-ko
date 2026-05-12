---
source_path: "documentation/AVFoundation/avcaptureexternaldisplayconfigurator/activeexternaldisplayframerate.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcaptureexternaldisplayconfigurator/activeexternaldisplayframerate"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:activeexternaldisplayframerate:0000:0001">activeExternalDisplayFrameRate</span>

<span class="ko-segment" data-segment-id="seg:paragraph:activeexternaldisplayframerate:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:activeexternaldisplayframerate:0002:0001">현재 미리보기 레이어를 표시하는 외부 디스플레이의 설정된 프레임레이트입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:activeexternaldisplayframerate:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:activeexternaldisplayframerate:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:activeexternaldisplayframerate:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:activeexternaldisplayframerate:0004:0003">Mac Catalyst 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:activeexternaldisplayframerate:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:activeexternaldisplayframerate:0004:0005">tvOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var activeExternalDisplayFrameRate: Double { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">By default, <code>AVCaptureStillImageOutput</code> emits images with the same dimensions as its source <a href="avcapturedevice.md">@@TOKEN_1@@</a> instance’s <code>activeFormat.formatDescription</code>.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">However, if you set this property to <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_0@@</a>, the receiver emits still images at the capture device’s <a href="avcapturedevice/format/highresolutionstillimagedimensions.md">@@TOKEN_1@@</a> value.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avcaptureexternaldisplayconfigurator/device.md">var device: AVCaptureDevice?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">조정자가 미리보기 레이어를 구성하는 장치입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcaptureexternaldisplayconfigurator/isactive.md">var isActive: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">이 속성은 조정자가 외부 디스플레이를 능동적으로 구성하고 있는지 여부를 나타냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcaptureexternaldisplayconfigurator/previewlayer.md">var previewLayer: CALayer?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">조정자가 장치 상태에 맞춰 표시 속성을 조정하는 레이어입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcaptureexternaldisplayconfigurator/activeexternaldisplayframerate">View on Apple Developer</a>*</span>

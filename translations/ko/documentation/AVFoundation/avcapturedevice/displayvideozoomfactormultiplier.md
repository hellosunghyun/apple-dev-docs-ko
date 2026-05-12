---
source_path: "documentation/AVFoundation/avcapturedevice/displayvideozoomfactormultiplier.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedevice/displayvideozoomfactormultiplier"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:displayvideozoomfactormultiplier:0000:0001">displayVideoZoomFactorMultiplier</span>

<span class="ko-segment" data-segment-id="seg:paragraph:displayvideozoomfactormultiplier:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:displayvideozoomfactormultiplier:0002:0001">사용자 인터페이스에서 줌 정보를 표시할 때 사용하는 비디오 줌 팩터 배수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:displayvideozoomfactormultiplier:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:displayvideozoomfactormultiplier:0004:0001">iOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:displayvideozoomfactormultiplier:0004:0002">iPadOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:displayvideozoomfactormultiplier:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:displayvideozoomfactormultiplier:0004:0004">macOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:displayvideozoomfactormultiplier:0004:0005">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var displayVideoZoomFactorMultiplier: CGFloat { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">macOS Video Effects Menu와 같은 일부 시스템 사용자 인터페이스는 시각적 표현에 가장 적합한 방식으로 비디오 줌 팩터 값을 표시하며, 이는 <a href="avcapturedevice/videozoomfactor.md">@@TOKEN_0@@</a> 속성 값과 다를 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">To set the ISO, call the <a href="avcapturedevice/setexposuremodecustom(duration:iso:completionhandler:">@@TOKEN_0@@</a>.md) method.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="avcapturedevice/minavailablevideozoomfactor.md">var minAvailableVideoZoomFactor: CGFloat</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">현재 캡처 구성에서 허용되는 최소 줌 팩터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avcapturedevice/maxavailablevideozoomfactor.md">var maxAvailableVideoZoomFactor: CGFloat</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">현재 캡처 구성에서 허용되는 최대 줌 팩터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001">[var virtualDeviceSwitchOverVideoZoomFactors: [NSNumber]](avcapturedevice/virtualdeviceswitchovervideozoomfactors.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">이중 카메라와 같은 가상 장치가 다음 구성 요소 장치로 전환할 수 있는 기준이 되는 비디오 줌 팩터의 배열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avcapturedevice/dualcameraswitchovervideozoomfactor.md">var dualCameraSwitchOverVideoZoomFactor: CGFloat</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">이중 카메라 장치가 카메라 간을 자동으로 전환할 수 있는 비디오 줌 팩터입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedevice/displayvideozoomfactormultiplier">View on Apple Developer</a>*</span>

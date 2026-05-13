---
source_path: "documentation/AVFoundation/avcapturedevice/isfacedrivenautoexposureenabled.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedevice/isfacedrivenautoexposureenabled"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:isfacedrivenautoexposureenabled:0000:0001">isFaceDrivenAutoExposureEnabled</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isfacedrivenautoexposureenabled:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isfacedrivenautoexposureenabled:0002:0001">A Boolean value that indicates whether the device has face-driven autoexposure enabled.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isfacedrivenautoexposureenabled:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:isfacedrivenautoexposureenabled:0004:0001">iOS 15.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:isfacedrivenautoexposureenabled:0004:0002">iPadOS 15.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:isfacedrivenautoexposureenabled:0004:0003">Mac Catalyst 15.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:isfacedrivenautoexposureenabled:0004:0004">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var isFaceDrivenAutoExposureEnabled: Bool { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">Face-driven autoexposure takes a subject’s face into account when performing automatic exposure adjustments.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">Enabling this feature can better expose subjects with darker skin tones or those who are backlit.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">For apps that link against iOS 15.4 or later, the value of this property defaults to <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_0@@</a> for devices that support autoexposure.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">!<a href="https://docs-assets.developer.apple.com/published/91ac97857a79016f3be51942ca95e735/media-3261294%402x.png">앱의 가상 콘텐츠에 이미지 노이즈를 적용했을 때의 적용 전후 사례를 보여 주는 스크린샷입니다.</a></span>

- <span class="ko-segment" data-segment-id="seg:list:discussion:0010:0001">Obtain exclusive access to the device by calling its <a href="avcapturedevice/lockforconfiguration(">@@TOKEN_0@@</a>.md) method.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0010:0002">Set the value of the device’s <a href="avcapturedevice/automaticallyadjustsfacedrivenautoexposureenabled.md">@@TOKEN_0@@</a> property to <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_1@@</a>.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">Attempting to set a value before performing these steps results in an exception.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0001">When you finish configuring the device, unlock it by calling its <a href="avcapturedevice/unlockforconfiguration(">@@TOKEN_0@@</a>.md) method.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0013:0001">❗ **Important**: Updating the state of this property doesn’t initiate an exposure change.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0013:0002">After setting a new value, set an appropriate <a href="avcapturedevice/exposuremode-swift.property.md">@@TOKEN_0@@</a> to apply the change.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0014:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avcapturedevice/automaticallyadjustsfacedrivenautoexposureenabled.md">var automaticallyAdjustsFaceDrivenAutoExposureEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">프레임을 캡처할 때 사용되는 카메라 위치, 방향 및 이미지 매개변수에 대한 정보입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedevice/isfacedrivenautoexposureenabled">View on Apple Developer</a>*</span>

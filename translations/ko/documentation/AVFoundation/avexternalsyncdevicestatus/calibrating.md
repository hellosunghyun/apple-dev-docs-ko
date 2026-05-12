---
source_path: "documentation/AVFoundation/avexternalsyncdevicestatus/calibrating.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avexternalsyncdevicestatus/calibrating"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avexternalsyncdevicestatuscalibrating:0000:0001">AVExternalSyncDeviceStatus.calibrating</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avexternalsyncdevicestatuscalibrating:0001:0001">**Framework**: AVFoundation **Kind**: case</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avexternalsyncdevicestatuscalibrating:0002:0001">외부 동기화 신호가 연결되어 있으며 <code>AVExternalSyncDevice</code> 객체가 해당 신호를 추적하도록 보정 중임을 나타냅니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avexternalsyncdevicestatuscalibrating:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avexternalsyncdevicestatuscalibrating:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avexternalsyncdevicestatuscalibrating:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avexternalsyncdevicestatuscalibrating:0004:0003">Mac Catalyst 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avexternalsyncdevicestatuscalibrating:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avexternalsyncdevicestatuscalibrating:0004:0005">tvOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
case calibrating
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="avexternalsyncdevicestatus/activesync.md">AVExternalSyncDeviceStatus.activeSync</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001"><a href="avexternalsyncdevice.md">@@TOKEN_0@@</a> 객체가 실행 중이며, <a href="avexternalsyncdevice.md">@@TOKEN_1@@</a> 객체의 <code>clock</code> 속성이 외부 동기화 신호에 보정되어 있음을 나타냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avexternalsyncdevicestatus/freerunsync.md">AVExternalSyncDeviceStatus.freeRunSync</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">Indicates that the AVExternalSyncDevice was calibrated to follow the external sync, but the sync signal has been lost.</span> <span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0002">The camera will continue to match the last signal it received, but sync is not guaranteed.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avexternalsyncdevicestatus/ready.md">AVExternalSyncDeviceStatus.ready</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">Indicates that a device supporting external sync is connected, but calibration has not started.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avexternalsyncdevicestatus/unavailable.md">AVExternalSyncDeviceStatus.unavailable</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">Indicates that external sync signal is not connected, or has transitioned to a state that is not recoverable.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avexternalsyncdevicestatus/calibrating">View on Apple Developer</a>*</span>

---
source_path: "documentation/AVFoundation/avexternalsyncdevicestatus/unavailable.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avexternalsyncdevicestatus/unavailable"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avexternalsyncdevicestatusunavailable:0000:0001">AVExternalSyncDeviceStatus.unavailable</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avexternalsyncdevicestatusunavailable:0001:0001">**Framework**: AVFoundation **Kind**: case</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avexternalsyncdevicestatusunavailable:0002:0001">외부 동기화 신호가 연결되지 않았거나 복구할 수 없는 상태로 전환되었음을 나타냅니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avexternalsyncdevicestatusunavailable:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avexternalsyncdevicestatusunavailable:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avexternalsyncdevicestatusunavailable:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avexternalsyncdevicestatusunavailable:0004:0003">Mac Catalyst 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avexternalsyncdevicestatusunavailable:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avexternalsyncdevicestatusunavailable:0004:0005">tvOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
case unavailable
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="avexternalsyncdevicestatus/activesync.md">AVExternalSyncDeviceStatus.activeSync</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001"><a href="avexternalsyncdevice.md">@@TOKEN_0@@</a> 객체가 실행 중이며, <a href="avexternalsyncdevice.md">@@TOKEN_1@@</a>의 clock 속성이 외부 동기화 신호에 맞춰 보정되었음을 나타냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avexternalsyncdevicestatus/calibrating.md">AVExternalSyncDeviceStatus.calibrating</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">외부 동기화 신호가 연결되어 있고 AVExternalSyncDevice 객체가 추적하도록 보정 중임을 나타냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avexternalsyncdevicestatus/freerunsync.md">AVExternalSyncDeviceStatus.freeRunSync</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">AVExternalSyncDevice가 외부 동기화에 맞춰 보정되었지만 동기화 신호가 손실되었음을 나타냅니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0002">카메라는 마지막으로 수신한 신호를 계속 추적하지만 동기화가 보장되지 않습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avexternalsyncdevicestatus/ready.md">AVExternalSyncDeviceStatus.ready</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">외부 동기화를 지원하는 기기가 연결되었지만 보정이 시작되지 않았음을 나타냅니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avexternalsyncdevicestatus/unavailable">View on Apple Developer</a>*</span>

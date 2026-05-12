---
source_path: "documentation/AVFoundation/avcapturedevice/systempressurestate-swift.class/level-swift.struct/shutdown.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedevice/systempressurestate-swift.class/level-swift.struct/shutdown"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:shutdown:0000:0001">shutdown</span>

<span class="ko-segment" data-segment-id="seg:paragraph:shutdown:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:shutdown:0002:0001">시스템 압력이 임계치를 초과하여 캡처 시스템이 종료됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:shutdown:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:shutdown:0004:0001">iOS 11.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:shutdown:0004:0002">iPadOS 11.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:shutdown:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:shutdown:0004:0004">tvOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:shutdown:0004:0005">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static let shutdown: AVCaptureDevice.SystemPressureState.Level
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">시스템 압력이 이 수준에 도달하면 캡처 시스템이 자동으로 종료되어 세션이 중단됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">인터럽션 알림의 <a href="https://developer.apple.com/documentation/Foundation/Notification/userInfo">@@TOKEN_0@@</a> 딕셔너리에서 <a href="avcapturesessioninterruptionsystempressurestatekey.md">@@TOKEN_1@@</a>를 사용하면 세션 중단을 유발한 시스템 압력 요인에 대한 세부 정보를 확인할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avcapturedevice/systempressurestate-swift.class/level-swift.struct/nominal.md">static let nominal: AVCaptureDevice.SystemPressureState.Level</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">시스템 압력이 정상이며 과부하 상태가 아님을 나타내는 수준입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcapturedevice/systempressurestate-swift.class/level-swift.struct/fair.md">static let fair: AVCaptureDevice.SystemPressureState.Level</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">시스템 압력이 약간 상승했음을 나타내는 수준입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcapturedevice/systempressurestate-swift.class/level-swift.struct/serious.md">static let serious: AVCaptureDevice.SystemPressureState.Level</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">시스템 압력이 크게 상승했음을 나타내는 수준입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avcapturefileoutputdelegate/fileoutputshouldprovidesampleaccuraterecordingstart(_:">static let critical: AVCaptureDevice.SystemPressureState.Level</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">Allows a client to opt in to frame accurate recording in <a href="avcapturefileoutputdelegate/fileoutput(_:didoutputsamplebuffer:from:">@@TOKEN_0@@</a>.md).</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedevice/systempressurestate-swift.class/level-swift.struct/shutdown">View on Apple Developer</a>*</span>

---
source_path: "documentation/AVFoundation/avcapturedevice/fallbackprimaryconstituentdevices.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedevice/fallbackprimaryconstituentdevices"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:fallbackprimaryconstituentdevices:0000:0001">fallbackPrimaryConstituentDevices</span>

<span class="ko-segment" data-segment-id="seg:paragraph:fallbackprimaryconstituentdevices:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:fallbackprimaryconstituentdevices:0002:0001">초점 길이가 더 긴 구성 구성요소가 광 민감도나 최소 초점 거리 제한을 받게 될 때 사용할 대체 장치입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:fallbackprimaryconstituentdevices:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:fallbackprimaryconstituentdevices:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:fallbackprimaryconstituentdevices:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:fallbackprimaryconstituentdevices:0004:0003">Mac Catalyst 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:fallbackprimaryconstituentdevices:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:fallbackprimaryconstituentdevices:0004:0005">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var fallbackPrimaryConstituentDevices: [AVCaptureDevice] { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">기본적으로 이 값에는 <a href="avcapturedevice/supportedfallbackprimaryconstituentdevices.md">@@TOKEN_0@@</a> 속성이 제공하는 장치 배열이 포함됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">장치 배열에 없는 장치를 지정하려고 하면 시스템이 예외를 throw합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">On iOS, your output settings dictionary may only contain keys listed returned from the <a href="avcapturemoviefileoutput/supportedoutputsettingskeys(for:">@@TOKEN_0@@</a>.md) method.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="avcapturedevice/setprimaryconstituentdeviceswitchingbehavior(_:restrictedswitchingbehaviorconditions:">func setPrimaryConstituentDeviceSwitchingBehavior(AVCaptureDevice.PrimaryConstituentDeviceSwitchingBehavior, restrictedSwitchingBehaviorConditions: AVCaptureDevice.PrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">주요 구성 요소 장치의 전환 동작을 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avcapturedevice/primaryconstituentdeviceswitchingbehavior-swift.property.md">var primaryConstituentDeviceSwitchingBehavior: AVCaptureDevice.PrimaryConstituentDeviceSwitchingBehavior</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">주요 구성 요소 장치의 전환 동작입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avcapturedevice/primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.property.md">var primaryConstituentDeviceRestrictedSwitchingBehaviorConditions: AVCaptureDevice.PrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">주요 구성 요소 장치의 전환 동작을 제한하는 조건입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avcapturedevice/activeprimaryconstituentdeviceswitchingbehavior.md">var activePrimaryConstituentDeviceSwitchingBehavior: AVCaptureDevice.PrimaryConstituentDeviceSwitchingBehavior</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">활성 주요 구성 요소 장치의 전환 동작입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="avcapturedevice/activeprimaryconstituentdevicerestrictedswitchingbehaviorconditions.md">var activePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions: AVCaptureDevice.PrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">활성 주요 구성 요소 장치의 카메라 전환 동작을 제한하는 조건입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="avcapturedevice/activeprimaryconstituent.md">var activePrimaryConstituent: AVCaptureDevice?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">가상 장치의 활성 주요 구성 요소 장치입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="avcapturedevice/primaryconstituentdeviceswitchingbehavior-swift.enum.md">AVCaptureDevice.PrimaryConstituentDeviceSwitchingBehavior</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">가상 장치에서 활성 주요 구성 요소 장치로 전환할 수 있는 시점을 제어하는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="avcapturedevice/primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.struct.md">AVCaptureDevice.PrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">A structure that defines the conditions in which to restrict camera switching.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001">[var supportedFallbackPrimaryConstituentDevices: [AVCaptureDevice]](avcapturedevice/supportedfallbackprimaryconstituentdevices.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">초점 거리가 더 긴 주요 구성 요소 장치의 대체 항목으로 선택할 수 있는 구성 요소 장치입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedevice/fallbackprimaryconstituentdevices">View on Apple Developer</a>*</span>

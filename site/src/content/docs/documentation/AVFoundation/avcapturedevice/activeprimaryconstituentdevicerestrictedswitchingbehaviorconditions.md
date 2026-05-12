---
source_path: "documentation/AVFoundation/avcapturedevice/activeprimaryconstituentdevicerestrictedswitchingbehaviorconditions.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedevice/activeprimaryconstituentdevicerestrictedswitchingbehaviorconditions"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:activeprimaryconstituentdevicerestrictedswitchingbehaviorconditions:0000:0001">activePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions</span>

<span class="ko-segment" data-segment-id="seg:paragraph:activeprimaryconstituentdevicerestrictedswitchingbehaviorconditions:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:activeprimaryconstituentdevicerestrictedswitchingbehaviorconditions:0002:0001">활성 기본 구성 요소 장치의 카메라 전환 동작을 제한하는 조건입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:activeprimaryconstituentdevicerestrictedswitchingbehaviorconditions:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:activeprimaryconstituentdevicerestrictedswitchingbehaviorconditions:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:activeprimaryconstituentdevicerestrictedswitchingbehaviorconditions:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:activeprimaryconstituentdevicerestrictedswitchingbehaviorconditions:0004:0003">Mac Catalyst 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:activeprimaryconstituentdevicerestrictedswitchingbehaviorconditions:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:activeprimaryconstituentdevicerestrictedswitchingbehaviorconditions:0004:0005">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var activePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions: AVCaptureDevice.PrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">구성 요소 장치가 여러 개인 가상 장치에서 이 속성은 활성 제한 전환 동작 조건을 반환합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">이 값은 <a href="avcapturedevice/primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.property.md">@@TOKEN_0@@</a>와 동일하지만, 서로 다른 제한 전환 동작 조건으로 구성한 <a href="avcapturemoviefileoutput.md">@@TOKEN_1@@</a>로 녹화할 때는 예외입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">구성 요소 장치 전환을 지원하지 않는 장치는 <a href="avcaptureprimaryconstituentdevicerestrictedswitchingbehaviorconditions/avcaptureprimaryconstituentdevicerestrictedswitchingbehaviorconditionnone.md">@@TOKEN_0@@</a> 값을 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">이 속성은 키-값 관찰이 가능합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcapturereactiontype/fireworks.md">func setPrimaryConstituentDeviceSwitchingBehavior(AVCaptureDevice.PrimaryConstituentDeviceSwitchingBehavior, restrictedSwitchingBehaviorConditions: AVCaptureDevice.PrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions)</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">기본 구성 요소 장치의 전환 동작을 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcapturedevice/primaryconstituentdeviceswitchingbehavior-swift.property.md">var primaryConstituentDeviceSwitchingBehavior: AVCaptureDevice.PrimaryConstituentDeviceSwitchingBehavior</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">기본 구성 요소 장치의 전환 동작입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avcapturedevice/primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.property.md">var primaryConstituentDeviceRestrictedSwitchingBehaviorConditions: AVCaptureDevice.PrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">기본 구성 요소 장치의 전환 동작을 제한하는 조건입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avcapturedevice/activeprimaryconstituentdeviceswitchingbehavior.md">var activePrimaryConstituentDeviceSwitchingBehavior: AVCaptureDevice.PrimaryConstituentDeviceSwitchingBehavior</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">활성 구성 요소 장치의 전환 동작입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avcapturedevice/activeprimaryconstituent.md">var activePrimaryConstituent: AVCaptureDevice?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">가상 장치의 활성 기본 구성 요소 장치입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avcapturedevice/primaryconstituentdeviceswitchingbehavior-swift.enum.md">AVCaptureDevice.PrimaryConstituentDeviceSwitchingBehavior</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">가상 장치가 활성 기본 구성 요소 장치를 전환할 수 있는 시점을 제어하는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avcapturedevice/primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.struct.md">AVCaptureDevice.PrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">카메라 전환을 제한할 조건을 정의하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001">[var supportedFallbackPrimaryConstituentDevices: [AVCaptureDevice]](avcapturedevice/supportedfallbackprimaryconstituentdevices.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">더 긴 초점 거리를 가진 기본 구성 요소 장치의 대체 선택 대상으로 사용할 수 있는 구성 요소 장치입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001">[var fallbackPrimaryConstituentDevices: [AVCaptureDevice]](avcapturedevice/fallbackprimaryconstituentdevices.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">더 긴 초점 거리의 구성 요소 장치가 조도 민감도 또는 최소 초점 거리 제한에 걸릴 때 사용할 대체 장치입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedevice/activeprimaryconstituentdevicerestrictedswitchingbehaviorconditions">View on Apple Developer</a>*</span>

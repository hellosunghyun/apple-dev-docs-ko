---
source_path: "documentation/AVFoundation/avcapturedevice/primaryconstituentdevicerestrictedswitchingbehaviorconditions-swiftstruct.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedevice/primaryconstituentdevicerestrictedswitchingbehaviorconditions-swiftstruct"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avcapturedeviceprimaryconstituentdevicerestrictedswitchingbehaviorconditions:0000:0001">AVCaptureDevice.PrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcapturedeviceprimaryconstituentdevicerestrictedswitchingbehaviorconditions:0001:0001">**Framework**: AVFoundation **Kind**: struct</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcapturedeviceprimaryconstituentdevicerestrictedswitchingbehaviorconditions:0002:0001">카메라 전환을 제한할 조건을 정의하는 구조체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcapturedeviceprimaryconstituentdevicerestrictedswitchingbehaviorconditions:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avcapturedeviceprimaryconstituentdevicerestrictedswitchingbehaviorconditions:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturedeviceprimaryconstituentdevicerestrictedswitchingbehaviorconditions:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturedeviceprimaryconstituentdevicerestrictedswitchingbehaviorconditions:0004:0003">Mac Catalyst 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturedeviceprimaryconstituentdevicerestrictedswitchingbehaviorconditions:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturedeviceprimaryconstituentdevicerestrictedswitchingbehaviorconditions:0004:0005">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
struct PrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001"><a href="avcapturedevice/primaryconstituentdeviceswitchingbehavior-swift.property.md">@@TOKEN_0@@</a> 속성 값을 <a href="avcapturedevice/primaryconstituentdeviceswitchingbehavior-swift.enum/restricted.md">@@TOKEN_1@@</a>로 설정할 때, fallback 카메라 선택을 허용하는 조건을 제어하려면 이 상수를 사용합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0001">하나 이상의 조건이 활성화되어 트리거되면 대체 카메라 전환은 노출과 초점이 안정화될 때까지 대기한 뒤 primary constituent device로 어떤 카메라를 사용할지 결정합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0010:0001"><a href="avcapturedevice/primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.struct/videozoomchanged.md">@@TOKEN_0@@</a>가 제한된 전환 동작 조건에 포함되지 않은 경우에도 <a href="avcapturedevice/primaryconstituentdeviceswitchingbehavior-swift.enum/restricted.md">@@TOKEN_1@@</a>는 비디오 줌 팩터 변경으로 카메라가 <a href="avcapturedevice/activeprimaryconstituent.md">@@TOKEN_2@@</a>로 선택되거나 선택 대상에서 제외되는 경우 카메라 선택을 허용합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0011:0001">비디오 줌 팩터가 활성 primary constituent device의 전환 임계 줌 팩터보다 낮아지면 시스템은 요청된 줌 팩터를 충족하기 위해 다른 카메라를 선택합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0012:0001">비디오 줌 팩터가 증가해 카메라의 전환 임계 줌 팩터를 넘으면 이 카메라는 <a href="avcapturedevice/activeprimaryconstituent.md">@@TOKEN_0@@</a>로 설정할 수 있는 자격을 갖습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0012:0002">노출과 초점이 허용되면 이 카메라는 새 active primary constituent device가 됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0012:0003">이 경우는 <a href="avcapturedevice/primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.struct/videozoomchanged.md">@@TOKEN_0@@</a>와 유사하게 노출과 초점이 안정화될 때까지 대기합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0012:0004">그렇지 않으면 <a href="avcapturedevice/activeprimaryconstituent.md">@@TOKEN_0@@</a>는 변경되지 않습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0013:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:switching-behavior-conditions:0014:0001">카메라 전환 조건</span>

- <span class="ko-segment" data-segment-id="seg:list:switching-behavior-conditions:0015:0001"><a href="avcapturedevice/primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.struct/exposuremodechanged.md">static var exposureModeChanged: AVCaptureDevice.PrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:switching-behavior-conditions:0016:0001">장치의 노출 모드가 변경될 때에만 대체 카메라로의 전환을 제한합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:switching-behavior-conditions:0017:0001"><a href="avcapturedevice/primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.struct/focusmodechanged.md">static var focusModeChanged: AVCaptureDevice.PrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:switching-behavior-conditions:0018:0001">장치의 초점 모드가 변경될 때에만 대체 카메라로의 전환을 제한합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:switching-behavior-conditions:0019:0001"><a href="avcapturedevice/primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.struct/videozoomchanged.md">static var videoZoomChanged: AVCaptureDevice.PrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:switching-behavior-conditions:0020:0001">장치의 비디오 줌이 변경될 때에만 대체 카메라로의 전환을 제한합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0021:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0022:0001"><a href="avcapturedevice/primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.struct/init(rawvalue:">init(rawValue: UInt)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0023:0001">부호 없는 정수 값으로 전환 동작 조건을 생성합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0024:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0025:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0026:0001"><a href="../Swift/BitwiseCopyable.md">BitwiseCopyable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0026:0002"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0026:0003"><a href="../Swift/ExpressibleByArrayLiteral.md">ExpressibleByArrayLiteral</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0026:0004"><a href="../Swift/OptionSet.md">OptionSet</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0026:0005"><a href="../Swift/RawRepresentable.md">RawRepresentable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0026:0006"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0026:0007"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0026:0008"><a href="../Swift/SetAlgebra.md">SetAlgebra</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0027:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avcapturedevice/setprimaryconstituentdeviceswitchingbehavior(_:restrictedswitchingbehaviorconditions:">func setPrimaryConstituentDeviceSwitchingBehavior(AVCaptureDevice.PrimaryConstituentDeviceSwitchingBehavior, restrictedSwitchingBehaviorConditions: AVCaptureDevice.PrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">주요 구성 장치의 전환 동작을 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="avcapturedevice/primaryconstituentdeviceswitchingbehavior-swift.property.md">var primaryConstituentDeviceSwitchingBehavior: AVCaptureDevice.PrimaryConstituentDeviceSwitchingBehavior</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">주요 구성 장치의 전환 동작입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="avcapturedevice/primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.property.md">var primaryConstituentDeviceRestrictedSwitchingBehaviorConditions: AVCaptureDevice.PrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">주요 구성 장치의 전환 동작을 제한하는 조건입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="avcapturedevice/activeprimaryconstituentdeviceswitchingbehavior.md">var activePrimaryConstituentDeviceSwitchingBehavior: AVCaptureDevice.PrimaryConstituentDeviceSwitchingBehavior</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">활성 구성 장치의 전환 동작입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="avcapturedevice/activeprimaryconstituentdevicerestrictedswitchingbehaviorconditions.md">var activePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions: AVCaptureDevice.PrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">활성 기본 구성 장치의 카메라 전환 동작을 제한하는 조건입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="avcapturedevice/activeprimaryconstituent.md">var activePrimaryConstituent: AVCaptureDevice?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">가상 장치의 활성 기본 구성 장치입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001"><a href="avcapturedevice/primaryconstituentdeviceswitchingbehavior-swift.enum.md">AVCaptureDevice.PrimaryConstituentDeviceSwitchingBehavior</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">가상 장치가 활성 기본 구성 장치를 전환할 수 있는 시점을 제어하는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0042:0001">[var supportedFallbackPrimaryConstituentDevices: [AVCaptureDevice]](avcapturedevice/supportedfallbackprimaryconstituentdevices.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">더 긴 초점 거리 기본 구성 장치에 대해 대체 후보로 선택할 수 있는 구성 장치입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0044:0001">[var fallbackPrimaryConstituentDevices: [AVCaptureDevice]](avcapturedevice/fallbackprimaryconstituentdevices.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0045:0001">더 긴 초점 거리의 구성 장치가 광 민감도나 최소 초점 거리로 제한될 때 사용할 대체 장치입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0047:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedevice/primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.struct">View on Apple Developer</a>*</span>

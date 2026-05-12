---
source_path: "documentation/AVFoundation/avcapturedevice/primaryconstituentdeviceswitchingbehavior-swiftenum.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedevice/primaryconstituentdeviceswitchingbehavior-swiftenum"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avcapturedeviceprimaryconstituentdeviceswitchingbehavior:0000:0001">AVCaptureDevice.PrimaryConstituentDeviceSwitchingBehavior</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcapturedeviceprimaryconstituentdeviceswitchingbehavior:0001:0001">**Framework**: AVFoundation **Kind**: enum</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcapturedeviceprimaryconstituentdeviceswitchingbehavior:0002:0001">가상 장치가 활성 기본 구성 장치 전환을 허용할 시점을 제어하는 상수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcapturedeviceprimaryconstituentdeviceswitchingbehavior:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avcapturedeviceprimaryconstituentdeviceswitchingbehavior:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturedeviceprimaryconstituentdeviceswitchingbehavior:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturedeviceprimaryconstituentdeviceswitchingbehavior:0004:0003">Mac Catalyst 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturedeviceprimaryconstituentdeviceswitchingbehavior:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturedeviceprimaryconstituentdeviceswitchingbehavior:0004:0005">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
enum PrimaryConstituentDeviceSwitchingBehavior
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">듀얼 카메라, 듀얼 와이드 카메라, 트리플 카메라와 같은 다중 구성 비디오 장치를 가진 가상 장치는 초점 거리, 최대 광 민감도, 최소 초점 거리와 같은 각기 다른 속성을 가진 카메라로 구성됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0002">시스템은 여러 구성 비디오 장치 중 하나를 기본 장치로 선택합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0001">요청된 줌 배율을 달성할 수 있는 구성 카메라가 여러 개인 경우, 가상 장치는 장면에 가장 적합한 카메라를 선택합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0002">시스템은 주로 카메라의 초점 거리를 기반으로 이 결정을 내리며, 초점 거리가 가장 긴 카메라가 디지털 업스케일링이 가장 적어 최고 화질 이미지를 제공하기 때문입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0003">보조 조건은 초점과 노출입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0004">예를 들어 장면에서 활성 기본 구성 장치의 한계를 넘어 초점이나 노출이 필요할 때는 더 짧은 초점 거리의 카메라가 더 나은 품질의 이미지를 제공할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0005">시스템은 이러한 장치를 대체 기본 구성 장치로 간주합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0006">예를 들어, 최소 초점 거리가 40cm인 망원 카메라는 장면의 피사체가 40cm보다 가까울 때 선명한 이미지를 제공할 수 없습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0007">이러한 장면에서는 가상 장치가 대개 최소 초점 거리가 더 짧아 피사체에 정확히 초점을 맞출 수 있는 광각 카메라로 전환합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0008">이 경우 광각 카메라가 대체 기본 구성 장치입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0010:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:switching-behaviors:0011:0001">전환 동작</span>

- <span class="ko-segment" data-segment-id="seg:list:switching-behaviors:0012:0001"><a href="avcapturedevice/primaryconstituentdeviceswitchingbehavior-swift.enum/unsupported.md">AVCaptureDevice.PrimaryConstituentDeviceSwitchingBehavior.unsupported</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:switching-behaviors:0013:0001">장치에서 구성 장치 전환을 지원하지 않습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:switching-behaviors:0014:0001"><a href="avcapturedevice/primaryconstituentdeviceswitchingbehavior-swift.enum/auto.md">AVCaptureDevice.PrimaryConstituentDeviceSwitchingBehavior.auto</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:switching-behaviors:0015:0001">장치가 현재 장면에 가장 적합한 카메라를 자동으로 선택합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:switching-behaviors:0016:0001"><a href="avcapturedevice/primaryconstituentdeviceswitchingbehavior-swift.enum/restricted.md">AVCaptureDevice.PrimaryConstituentDeviceSwitchingBehavior.restricted</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:switching-behaviors:0017:0001">장치는 특정 조건에서만 대체 카메라 선택을 제한합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:switching-behaviors:0018:0001"><a href="avcapturedevice/primaryconstituentdeviceswitchingbehavior-swift.enum/locked.md">AVCaptureDevice.PrimaryConstituentDeviceSwitchingBehavior.locked</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:switching-behaviors:0019:0001">장치는 활성 기본 구성 장치로 카메라 전환을 잠급니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0020:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0021:0001"><a href="avcapturedevice/primaryconstituentdeviceswitchingbehavior-swift.enum/init(rawvalue:">init?(rawValue: Int)</a>.md)</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0022:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0023:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0024:0001"><a href="../Swift/BitwiseCopyable.md">BitwiseCopyable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0024:0002"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0024:0003"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0024:0004"><a href="../Swift/RawRepresentable.md">RawRepresentable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0024:0005"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0024:0006"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0025:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avcapturedevice/setprimaryconstituentdeviceswitchingbehavior(_:restrictedswitchingbehaviorconditions:">func setPrimaryConstituentDeviceSwitchingBehavior(AVCaptureDevice.PrimaryConstituentDeviceSwitchingBehavior, restrictedSwitchingBehaviorConditions: AVCaptureDevice.PrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">기본 구성 장치의 전환 동작을 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avcapturedevice/primaryconstituentdeviceswitchingbehavior-swift.property.md">var primaryConstituentDeviceSwitchingBehavior: AVCaptureDevice.PrimaryConstituentDeviceSwitchingBehavior</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">기본 구성 장치의 전환 동작입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="avcapturedevice/primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.property.md">var primaryConstituentDeviceRestrictedSwitchingBehaviorConditions: AVCaptureDevice.PrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">기본 구성 장치의 전환 동작을 제한하는 조건입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="avcapturedevice/activeprimaryconstituentdeviceswitchingbehavior.md">var activePrimaryConstituentDeviceSwitchingBehavior: AVCaptureDevice.PrimaryConstituentDeviceSwitchingBehavior</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">활성 구성 장치의 전환 동작입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="avcapturedevice/activeprimaryconstituentdevicerestrictedswitchingbehaviorconditions.md">var activePrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions: AVCaptureDevice.PrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">활성 기본 구성 장치의 카메라 전환 동작을 제한하는 조건입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="avcapturedevice/activeprimaryconstituent.md">var activePrimaryConstituent: AVCaptureDevice?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">가상 장치의 활성 기본 구성 장치입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="avcapturedevice/primaryconstituentdevicerestrictedswitchingbehaviorconditions-swift.struct.md">AVCaptureDevice.PrimaryConstituentDeviceRestrictedSwitchingBehaviorConditions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">카메라 전환을 제한할 조건을 정의하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001">[var supportedFallbackPrimaryConstituentDevices: [AVCaptureDevice]](avcapturedevice/supportedfallbackprimaryconstituentdevices.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">긴 초점 길이 기본 구성 요소 디바이스의 대체 선택으로 사용할 수 있는 구성 요소 디바이스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0042:0001">[var fallbackPrimaryConstituentDevices: [AVCaptureDevice]](avcapturedevice/fallbackprimaryconstituentdevices.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">긴 초점 길이 구성 요소 디바이스가 빛 민감도 또는 최소 초점 거리 제한을 받는 경우 사용할 대체 장치입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0045:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedevice/primaryconstituentdeviceswitchingbehavior-swift.enum">View on Apple Developer</a>*</span>

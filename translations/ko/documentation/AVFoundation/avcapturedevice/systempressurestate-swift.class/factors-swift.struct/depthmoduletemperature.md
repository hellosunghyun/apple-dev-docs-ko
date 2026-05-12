---
source_path: "documentation/AVFoundation/avcapturedevice/systempressurestate-swift.class/factors-swift.struct/depthmoduletemperature.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedevice/systempressurestate-swift.class/factors-swift.struct/depthmoduletemperature"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:depthmoduletemperature:0000:0001">depthModuleTemperature</span>

<span class="ko-segment" data-segment-id="seg:paragraph:depthmoduletemperature:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:depthmoduletemperature:0002:0001">깊이 정보를 캡처하는 모듈이 높은 온도에서 동작 중입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:depthmoduletemperature:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:depthmoduletemperature:0004:0001">iOS 11.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:depthmoduletemperature:0004:0002">iPadOS 11.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:depthmoduletemperature:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:depthmoduletemperature:0004:0004">tvOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:depthmoduletemperature:0004:0005">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static var depthModuleTemperature: AVCaptureDevice.SystemPressureState.Factors { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">시스템 압력이 증가하면 깊이 품질이 저하될 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">이 요인으로 인한 시스템 압박을 줄이려면 깊이 캡처 프레임률을 낮춥니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이 요소는 <a href="avcapturedevice/devicetype-swift.struct/builtintruedepthcamera.md">@@TOKEN_0@@</a> 기기에서만 적용됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="avcapturedevice/systempressurestate-swift.class/factors-swift.struct/systemtemperature.md">static var systemTemperature: AVCaptureDevice.SystemPressureState.Factors</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">시스템 전체가 높은 열 부하 상태입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avcapturedevice/systempressurestate-swift.class/factors-swift.struct/peakpower.md">static var peakPower: AVCaptureDevice.SystemPressureState.Factors</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">시스템의 최대 전력 요구량이 배터리의 현재 용량을 초과합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avcapturedevice/systempressurestate-swift.class/factors-swift.struct/cameratemperature.md">static var cameraTemperature: AVCaptureDevice.SystemPressureState.Factors</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">카메라 모듈이 상승한 온도로 동작하고 있습니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedevice/systempressurestate-swift.class/factors-swift.struct/depthmoduletemperature">View on Apple Developer</a>*</span>

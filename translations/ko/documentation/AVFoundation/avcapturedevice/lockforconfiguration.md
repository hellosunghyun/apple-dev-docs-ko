---
source_path: "documentation/AVFoundation/avcapturedevice/lockforconfiguration.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedevice/lockforconfiguration"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:lockforconfiguration:0000:0001">lockForConfiguration()</span>

<span class="ko-segment" data-segment-id="seg:paragraph:lockforconfiguration:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:lockforconfiguration:0002:0001">장치 하드웨어 속성을 구성하기 위해 독점 접근을 요청합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:lockforconfiguration:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:lockforconfiguration:0004:0001">iOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:lockforconfiguration:0004:0002">iPadOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:lockforconfiguration:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:lockforconfiguration:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:lockforconfiguration:0004:0005">tvOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:lockforconfiguration:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func lockForConfiguration() throws
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">캡처 장치에서 <a href="avcapturedevice/focusmode-swift.property.md">@@TOKEN_0@@</a> 및 <a href="avcapturedevice/exposuremode-swift.property.md">@@TOKEN_1@@</a>와 같은 하드웨어 속성을 설정하려면 앱이 먼저 장치 잠금을 획득해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">앱에서 설정 가능한 장치 속성이 변경되지 않은 상태로 유지되어야 하는 경우에만 장치 잠금을 유지해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">불필요하게 장치 잠금을 유지하면 장치를 공유하는 다른 앱의 캡처 품질이 저하될 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avcapturedevice/unlockforconfiguration.md">func unlockForConfiguration()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">장치 하드웨어 속성에 대한 독점 제어를 해제합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcapturedevice/issubjectareachangemonitoringenabled.md">var isSubjectAreaChangeMonitoringEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">장치가 주제 영역의 변경 사항을 모니터링하는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcapturedevice/subjectareadidchangenotification.md">class let subjectAreaDidChangeNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">캡처 장치가 비디오 주제 영역의 중요한 변경을 감지할 때 시스템이 게시하는 알림입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="capture-device-formats.md">Formats</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">캡처 형식과 카메라 프레임 속도를 구성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="capture-device-focus.md">Focus</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">카메라의 자동 초점 동작을 구성하거나 렌즈 위치를 수동으로 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="capture-device-exposure.md">Exposure</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">카메라의 자동 노출 동작을 구성하거나 노출 설정을 수동으로 제어합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="capture-device-white-balance.md">White balance</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">카메라의 자동 화이트 밸런스 동작을 구성하거나 화이트 밸런스 설정을 수동으로 제어합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="capture-device-lighting.md">Lighting</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">기기 플래시, 토치, 저조도 설정을 구성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="capture-device-color.md">Color</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">기기의 HDR 및 색 공간 설정을 관리합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="capture-device-zoom.md">Zoom</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">기기 줌 동작을 구성하고 하드웨어 기능을 확인합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedevice/lockforconfiguration(">View on Apple Developer</a>)*</span>

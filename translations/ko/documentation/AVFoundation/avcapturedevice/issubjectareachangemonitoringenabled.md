---
source_path: "documentation/AVFoundation/avcapturedevice/issubjectareachangemonitoringenabled.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedevice/issubjectareachangemonitoringenabled"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:issubjectareachangemonitoringenabled:0000:0001">isSubjectAreaChangeMonitoringEnabled</span>

<span class="ko-segment" data-segment-id="seg:paragraph:issubjectareachangemonitoringenabled:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:issubjectareachangemonitoringenabled:0002:0001">장치가 피사체 영역의 변경 사항을 모니터링하는지를 나타내는 부울 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:issubjectareachangemonitoringenabled:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:issubjectareachangemonitoringenabled:0004:0001">iOS 5.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:issubjectareachangemonitoringenabled:0004:0002">iPadOS 5.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:issubjectareachangemonitoringenabled:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:issubjectareachangemonitoringenabled:0004:0004">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var isSubjectAreaChangeMonitoringEnabled: Bool { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 속성 값은 조명 변경, 큰 이동 등과 같은 비디오 피사체 영역의 변경을 장치가 모니터링하는지를 나타냅니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">피사체 영역 변경 모니터링을 활성화하면 캡처 장치 객체가 피사체 영역의 변경을 감지할 때마다 <a href="avcapturedevice/subjectareadidchangenotification.md">@@TOKEN_0@@</a> 알림을 보냅니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">이 알림을 관찰하고 초점 조정, 노출 조정 등의 작업을 수행할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이 속성 값을 변경하기 전에 장치 구성 속성에 독점 액세스 권한을 얻으려면 <a href="avcapturedevice/lockforconfiguration(">@@TOKEN_0@@</a>.md) 을(를) 호출해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">그렇지 않으면 이 속성 값을 설정할 때 예외가 발생합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0003">장치 구성이 끝나면 <a href="avcapturedevice/unlockforconfiguration(">@@TOKEN_0@@</a>.md) 을(를) 호출해 잠금을 해제하고 다른 장치가 설정을 구성할 수 있도록 합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">The rectangle of interest for an <a href="avcapturemetadataoutput.md">@@TOKEN_0@@</a> object is in a coordinate system extending from <code>{0,0}</code> in the top-left to <code>{1,1}</code> in the bottom-right, relative to the device’s natural orientation.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcapturedevice/lockforconfiguration.md">func lockForConfiguration() throws</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">장치 하드웨어 속성을 구성하기 위해 독점 액세스 권한을 요청합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcapturedevice/unlockforconfiguration.md">func unlockForConfiguration()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">장치 하드웨어 속성에 대한 독점 제어를 해제합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avcapturedevice/subjectareadidchangenotification.md">class let subjectAreaDidChangeNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">캡처 장치가 비디오 피사체 영역의 중요한 변경을 감지할 때 시스템이 게시하는 알림입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="capture-device-formats.md">Formats</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcaptureoutput/outputrectconverted(frommetadataoutputrect:">View on Apple Developer</a>)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="capture-device-focus.md">Focus</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">카메라의 자동 초점 동작을 구성하거나 수동으로 렌즈 위치를 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="capture-device-exposure.md">Exposure</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">카메라의 자동 노출 동작을 구성하거나 수동으로 노출 설정을 제어합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avcapturedevice/settorchmodeon(level:">White balance</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">카메라의 자동 화이트 밸런스 동작을 구성하거나 수동으로 화이트 밸런스 설정을 제어합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="capture-device-lighting.md">Lighting</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">카메라 플래시, 토치, 저조도 설정을 구성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="capture-device-color.md">Color</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedevice/istorchmodesupported(_:">View on Apple Developer</a>)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="capture-device-zoom.md">Zoom</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">기기 줌 동작을 구성하고 하드웨어 기능을 검사합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedevice/issubjectareachangemonitoringenabled">View on Apple Developer</a>*</span>

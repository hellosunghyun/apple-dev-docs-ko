---
source_path: "documentation/AVFoundation/avcapturesession/automaticallyconfigurescapturedeviceforwidecolor.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturesession/automaticallyconfigurescapturedeviceforwidecolor"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:automaticallyconfigurescapturedeviceforwidecolor:0000:0001">automaticallyConfiguresCaptureDeviceForWideColor</span>

<span class="ko-segment" data-segment-id="seg:paragraph:automaticallyconfigurescapturedeviceforwidecolor:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:automaticallyconfigurescapturedeviceforwidecolor:0002:0001">세션이 사용 가능한 경우 와이드갬마 색상을 자동으로 사용할지 여부를 지정하는 부울 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:automaticallyconfigurescapturedeviceforwidecolor:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:automaticallyconfigurescapturedeviceforwidecolor:0004:0001">iOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:automaticallyconfigurescapturedeviceforwidecolor:0004:0002">iPadOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:automaticallyconfigurescapturedeviceforwidecolor:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:automaticallyconfigurescapturedeviceforwidecolor:0004:0004">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var automaticallyConfiguresCaptureDeviceForWideColor: Bool { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">모든 장치와 형식은 sRGB 색 공간에서 캡처를 지원합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">일부 장치와 형식은 훨씬 넓은 색 영역을 포함하는 P3 색 공간에서도 캡처할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">와이드갬마 캡처는 특정 캡처 워크플로우에서만 적절하므로 이 속성이 해당 워크플로우의 자동 구성을 제어합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이 속성이 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_0@@</a> (기본값)이고 세션 구성이 와이드갬마 캡처에 적합한 경우에는 다음과 같습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:discussion:0010:0001">세션 프리셋을 <a href="avcapturesession/preset/inputpriority.md">@@TOKEN_0@@</a> 이외로 사용하면, 세션이 장치의 <a href="avcapturedevice/activeformat.md">@@TOKEN_1@@</a> 속성을 와이드갬마 캡처를 지원하는 형식으로 자동 설정하고 장치의 <a href="avcapturedevice/activecolorspace.md">@@TOKEN_2@@</a> 속성을 와이드갬마 색 공간으로 설정합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0010:0002">캡처 형식을 수동으로 선택하면(이로 인해 세션이 input priority로 설정됨) 세션은 선택한 형식이 와이드갬마 캡처를 지원할 때만 장치의 <a href="avcapturedevice/activecolorspace.md">@@TOKEN_0@@</a> 속성을 와이드갬마 색 공간으로 자동 설정합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">와이드 색역 캡처가 자동으로 활성화되는 기기와 세션 구성에 대한 자세한 내용은 <a href="https://developer.apple.comhttps://developer.apple.com/library/archive/documentation/DeviceInformation/Reference/iOSDeviceCompatibility/Introduction/Introduction.html#//apple_ref/doc/uid/TP40013599">@@TOKEN_0@@</a>의 Wide-Gamut Capture를 참조합니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0012:0001">**참고**: 이 속성이 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_0@@</a>이고 세션 구성이 와이드 색역 캡처에 적합하지 않으면 <a href="avcapturesession/preset/inputpriority.md">@@TOKEN_1@@</a>가 아닌 세션 프리셋이 와이드 색역 캡처를 지원하지 않는 캡처 포맷을 선택할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0013:0001">세션 프리셋이나 캡처 포맷을 직접 설정하여 장치를 구성했는지와 관계없이 캡처 디바이스의 <a href="avcapturedevice/activecolorspace.md">@@TOKEN_0@@</a> 값을 직접 변경하려면 이 속성을 <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_1@@</a>로 설정합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0015:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturesession/automaticallyconfigurescapturedeviceforwidecolor">View on Apple Developer</a>*</span>

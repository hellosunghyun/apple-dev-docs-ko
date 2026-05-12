---
source_path: "documentation/AVFoundation/avcapturecontrol.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturecontrol"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avcapturecontrol:0000:0001">AVCaptureControl</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcapturecontrol:0001:0001">**Framework**: AVFoundation **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcapturecontrol:0002:0001">카메라 시스템과 상호 작용하는 컨트롤을 위한 추상 기본 클래스입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcapturecontrol:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avcapturecontrol:0004:0001">iOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturecontrol:0004:0002">iPadOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturecontrol:0004:0003">Mac Catalyst 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturecontrol:0004:0004">macOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturecontrol:0004:0005">tvOS 18.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class AVCaptureControl
```

## <span class="ko-segment" data-segment-id="seg:heading:mentions:0007:0001">Mentions</span>

- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0001"><a href="enhancing-your-app-experience-with-the-camera-control.md">Enhancing your app experience with the Camera Control</a></span>

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0009:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0010:0001">캡처 컨트롤은 iPhone 16 기기의 Camera Control 버튼을 통해 카메라 시스템과 상호 작용할 수 있는 인터페이스를 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0010:0002">이 프레임워크는 앱이 기본 제공 기능에 접근하고 사용자 정의 컨트롤을 정의할 수 있도록 하는 이 클래스의 구체 하위 클래스를 여러 개 제공합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0011:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:setting-the-enabled-state:0012:0001">활성화 상태 설정</span>

- <span class="ko-segment" data-segment-id="seg:list:setting-the-enabled-state:0013:0001"><a href="avcapturecontrol/isenabled.md">var isEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:setting-the-enabled-state:0014:0001">이 컨트롤이 사용자 상호작용을 지원하는지 나타내는 부울 값입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0015:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0016:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0017:0001"><a href="../ObjectiveC/NSObject-swift.class.md">NSObject</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:inherited-by:0018:0001">상속 대상</span>

- <span class="ko-segment" data-segment-id="seg:list:inherited-by:0019:0001"><a href="avcaptureindexpicker.md">AVCaptureIndexPicker</a></span>
- <span class="ko-segment" data-segment-id="seg:list:inherited-by:0019:0002"><a href="avcaptureslider.md">AVCaptureSlider</a></span>
- <span class="ko-segment" data-segment-id="seg:list:inherited-by:0019:0003"><a href="avcapturesystemexposurebiasslider.md">AVCaptureSystemExposureBiasSlider</a></span>
- <span class="ko-segment" data-segment-id="seg:list:inherited-by:0019:0004"><a href="avcapturesystemzoomslider.md">AVCaptureSystemZoomSlider</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0020:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0021:0001"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0021:0002"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0021:0003"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0021:0004"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0021:0005"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0021:0006"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0022:0001">추가 참조</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="enhancing-your-app-experience-with-the-camera-control.md">Enhancing your app experience with the Camera Control</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">사용자가 완벽한 샷을 빠르게 찍을 수 있도록 카메라 앱의 기능에 직접 액세스할 수 있게 제공합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="avcapturesystemzoomslider.md">class AVCaptureSystemZoomSlider</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">시스템 권장 범위 내에서 캡처 장치의 비디오 줌 배율을 조정하는 컨트롤입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="avcapturesystemexposurebiasslider.md">class AVCaptureSystemExposureBiasSlider</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">시스템 권장 범위 내에서 캡처 장치의 노출 바이어스를 조정하는 컨트롤입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="avcaptureslider.md">class AVCaptureSlider</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">제한된 범위에서 값을 선택하는 슬라이더 컨트롤입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001"><a href="avcaptureindexpicker.md">class AVCaptureIndexPicker</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">상호 배타적인 값 집합에서 인덱스로 값을 선택하는 컨트롤입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturecontrol">View on Apple Developer</a>*</span>

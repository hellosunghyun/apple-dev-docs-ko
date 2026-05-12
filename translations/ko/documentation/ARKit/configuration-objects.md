---
source_path: "documentation/ARKit/configuration-objects.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/configuration-objects"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:configuration-objects:0000:0001">구성 객체</span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuration-objects:0001:0001">**Framework**: ARKit</span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuration-objects:0002:0001">증강 현실 세션을 구성해 특정 유형의 콘텐츠를 감지하고 추적합니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0003:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0001">구성 객체는 ARKit가 증강 현실 세션을 설정하고 실행하는 방식을 정의합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0002"><code>[</code>ARWorldTrackingConfiguration<code>](arworldtrackingconfiguration.md)</code>는 후면 카메라 환경에서 가장 폭넓은 기능을 제공하지만, 각 기능은 디바이스 에너지와 연산 주기를 사용합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0003">따라서 디바이스 사용 시간을 최대화하고 성능을 유지하려면 추가 옵션은 신중하게 활성화해야 합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0005:0001">요구 사항을 더 간결한 기능 집합으로 충족하는 다른 AR 구성이 있다면 그 구성을 사용합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0005:0002">예를 들어 사용자 얼굴 추적, 협업, 또는 장면 재구성이 필요하지 않은 경우 3D 모션 캡처에서는 world-tracking 구성 대신 <a href="arbodytrackingconfiguration.md">@@TOKEN_0@@</a>을 사용합니다.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:select-frame-features:0006:0001">프레임 기능 선택</span>

<span class="ko-segment" data-segment-id="seg:paragraph:select-frame-features:0007:0001">일부 구성은 세션의 프레임과 관련된 하위 기능을 지원합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:select-frame-features:0007:0002">구성의 <a href="arconfiguration/framesemantics-swift.property.md">@@TOKEN_0@@</a>에서 다음 플래그를 설정해 이러한 기능을 활성화합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:select-frame-features:0008:0001">**<a href="arconfiguration/framesemantics-swift.struct/bodydetection.md">@@TOKEN_0@@</a>**: 2D 인간 신체 추적을 활성화합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:select-frame-features:0008:0002">**<a href="arconfiguration/framesemantics-swift.struct/personsegmentation.md">@@TOKEN_0@@</a>**: 사람 오클루전을 활성화합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:select-frame-features:0008:0003">**<a href="arconfiguration/framesemantics-swift.struct/personsegmentationwithdepth.md">@@TOKEN_0@@</a>**: 카메라 피드의 사람이 가상 콘텐츠보다 카메라에 더 가까운지 여부를 기준으로 사람 오클루전을 활성화합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:select-frame-features:0009:0001"><a href="arconfiguration/framesemantics-swift.property.md">@@TOKEN_0@@</a>를 설정하기 전에 <a href="arconfiguration/framesemantics-swift.struct.md">@@TOKEN_1@@</a> 지원 여부를 확인하려면 <a href="arconfiguration/supportsframesemantics(_:">@@TOKEN_2@@</a>.md) 를 사용합니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:select-frame-features:0010:0001">❗ **중요**: 장면에 사람이 없을 것으로 예상되는 단일 사용자 경험에서는 디바이스 반응 속도를 높이기 위해 사람 오클루전을 활성화하지 않아야 합니다.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:switch-configurations-at-runtime:0011:0001">런타임에 구성 전환</span>

<span class="ko-segment" data-segment-id="seg:paragraph:switch-configurations-at-runtime:0012:0001">평면 감지, 프레임 시맨틱, 환경 텍스처링과 같은 기능을 전환하려면 기존 세션에서 <a href="arsession/runwithconfiguration:.md">@@TOKEN_0@@</a> 를 호출해 런타임에 구성을 전환합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:switch-configurations-at-runtime:0012:0002">가능한 경우 ARKit는 물리적 환경과 앵커에 대한 정보처럼 이전 구성에서 세션 중 수집된 모든 정보를 유지합니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:switch-configurations-at-runtime:0013:0001">💡 **팁**: 저전력 또는 과열 이벤트가 발생하면 AR 경험을 점진적으로 낮은 수준으로 전환할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:switch-configurations-at-runtime:0013:0002">예를 들어 앱이 제한된 기능에서도 기본 수준으로 동작할 수 있다면, 기기가 냉각될 때까지 잠시 world-tracking 구성을 position-tracking 구성(<a href="arpositionaltrackingconfiguration.md">@@TOKEN_0@@</a>)으로 전환할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:switch-configurations-at-runtime:0014:0001">세션이 face-tracking 구성과 world-tracking 구성 사이를 전환하면 세션은 상태를 유지하지 않습니다.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:enable-high-quality-video-and-custom-capture-settings:0015:0001">고품질 비디오 및 사용자 지정 캡처 설정 사용</span>

<span class="ko-segment" data-segment-id="seg:paragraph:enable-high-quality-video-and-custom-capture-settings:0016:0001">iOS 16에서는 4K 및 고동적 범위(HDR) 비디오 형식을 사용할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:enable-high-quality-video-and-custom-capture-settings:0016:0002">또한 기본 AV 캡처 장치를 통해 세션의 비디오 설정을 사용자 지정할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:enable-high-quality-video-and-custom-capture-settings:0017:0001">세션이 4K를 지원하는지 확인하려면 <a href="arconfiguration/recommendedvideoformatfor4kresolution.md">@@TOKEN_0@@</a>를 호출합니다.</span>

```swift
guard let hiResFormat = ARWorldTrackingConfiguration.recommendedVideoFormatFor4KResolution else {
   print("4K video format not supported."); return }
```

<span class="ko-segment" data-segment-id="seg:paragraph:enable-high-quality-video-and-custom-capture-settings:0019:0001">그런 다음 해당 형식으로 구성을 생성합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:enable-high-quality-video-and-custom-capture-settings:0019:0002">또한 <a href="arconfiguration/videohdrallowed.md">@@TOKEN_0@@</a>를 <code>true</code>로 설정해 HDR 사용 의도를 지정할 수도 있습니다.</span>

```swift
var config = ARWorldTrackingConfiguration()
config.videoFormat = hiResFormat
config.videoHDRAllowed = true
session.run(config)
```

<span class="ko-segment" data-segment-id="seg:paragraph:enable-high-quality-video-and-custom-capture-settings:0021:0001">기기가 구성 가능한 캡처 세션을 지원하면 <a href="arconfiguration/configurablecapturedeviceforprimarycamera.md">@@TOKEN_0@@</a>가 필요에 따라 조정할 수 있는 기본 캡처 장치를 제공합니다.</span>

```swift
if let device = ARWorldTrackingConfiguration.configurableCaptureDeviceForPrimaryCamera {
   do { try device.lockForConfiguration()
      // Configure capture settings here.
      device.unlockForConfiguration()
   } catch { /* Error handling. */ }
}
```

##### <span class="ko-segment" data-segment-id="seg:heading:capture-high-resolution-still-frames:0023:0001">고해상도 스틸 프레임 캡처</span>

<span class="ko-segment" data-segment-id="seg:paragraph:capture-high-resolution-still-frames:0024:0001">iOS 16에서는 구성(configuration)에서 <a href="arconfiguration/recommendedvideoformatforhighresolutionframecapturing.md">@@TOKEN_0@@</a>를 호출해 고해상도 프레임 캡처를 활성화할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:capture-high-resolution-still-frames:0024:0002">기기가 고해상도 정지 프레임을 지원하면, 함수가 세션을 시작할 때 사용할 수 있는 비디오 형식을 반환합니다:</span>

```swift
guard let hiResFormat = type(of: config).recommendedVideoFormatForHighResolutionFrameCapturing else {
    fatalError("The device doesn't support high-resolution stills.") }
config.videoFormat = hiResFormat
arSession.run(config)
```

<span class="ko-segment" data-segment-id="seg:paragraph:capture-high-resolution-still-frames:0026:0001">세션 동안 <a href="arsession/capturehighresolutionframe(completion:">@@TOKEN_0@@</a>.md)를 호출해 언제든지 고해상도 정지 프레임을 캡처할 수 있습니다:</span>

```swift
arSession.captureHighResolutionFrame { (frame, error) in
    if let frame = frame {
        saveHiResFrame(frame)
    } else { /* Error handling. */ }
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0028:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:common-configuration-details:0029:0001">공통 구성 세부 정보</span>

- <span class="ko-segment" data-segment-id="seg:list:common-configuration-details:0030:0001"><a href="arconfiguration.md">class ARConfiguration</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:common-configuration-details:0031:0001">증강 현실 세션을 구성하는 방법에 대한 정보를 포함하는 기본 객체입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:spatial-tracking:0032:0001">공간 추적</span>

- <span class="ko-segment" data-segment-id="seg:list:spatial-tracking:0033:0001"><a href="understanding-world-tracking.md">Understanding World Tracking</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:spatial-tracking:0034:0001">후면 카메라 AR 경험을 구축하기 위한 기능과 모범 사례를 설명합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:spatial-tracking:0035:0001"><a href="arworldtrackingconfiguration.md">class ARWorldTrackingConfiguration</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:spatial-tracking:0036:0001">환경의 객체와의 관계에서 장치의 위치를 추적하는 구성입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:spatial-tracking:0037:0001"><a href="argeotrackingconfiguration.md">class ARGeoTrackingConfiguration</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:spatial-tracking:0038:0001">GPS, 지도 데이터 및 장치의 나침반을 사용해 위치를 추적하는 구성입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:spatial-tracking:0039:0001"><a href="arorientationtrackingconfiguration.md">class AROrientationTrackingConfiguration</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:spatial-tracking:0040:0001">후면 카메라를 사용해 장치의 방향만 추적하는 구성입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:spatial-tracking:0041:0001"><a href="arpositionaltrackingconfiguration.md">class ARPositionalTrackingConfiguration</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:spatial-tracking:0042:0001">3D 공간에서 장치의 위치만 추적하는 구성입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:body-and-face-tracking:0043:0001">신체 및 얼굴 추적</span>

- <span class="ko-segment" data-segment-id="seg:list:body-and-face-tracking:0044:0001"><a href="arbodytrackingconfiguration.md">class ARBodyTrackingConfiguration</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:body-and-face-tracking:0045:0001">후면 카메라를 사용해 사람의 신체 자세, 평면 표면 및 이미지를 추적하는 구성입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:body-and-face-tracking:0046:0001"><a href="arfacetrackingconfiguration.md">class ARFaceTrackingConfiguration</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:body-and-face-tracking:0047:0001">전면 카메라를 사용해 얼굴 움직임과 표정을 추적하는 구성입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:image-recognition:0048:0001">이미지 인식</span>

- <span class="ko-segment" data-segment-id="seg:list:image-recognition:0049:0001"><a href="arimagetrackingconfiguration.md">class ARImageTrackingConfiguration</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:image-recognition:0050:0001">후면 카메라를 사용해 알려진 이미지를 추적하는 구성입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:object-detection:0051:0001">객체 감지</span>

- <span class="ko-segment" data-segment-id="seg:list:object-detection:0052:0001"><a href="arobjectscanningconfiguration.md">class ARObjectScanningConfiguration</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:object-detection:0053:0001">후면 카메라를 사용해 특정 객체를 인식하고 해당 객체의 고충실도 데이터를 수집하는 구성입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0054:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0055:0001"><a href="choosing-which-camera-feed-to-augment.md">Choosing Which Camera Feed to Augment</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0056:0001">전면 또는 후면 카메라를 통해 AR 경험에서 사용자 환경에 시각 효과를 추가합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0057:0001"><a href="managing-session-life-cycle-and-tracking-quality.md">Managing Session Life Cycle and Tracking Quality</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0058:0001">현재 세션 상태를 사용자에게 알리고 중단에서 복구할 수 있습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0059:0001"><a href="displaying-an-ar-experience-with-metal.md">Displaying an AR Experience with Metal</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0060:0001">카메라 피드 위에 앱의 가상 콘텐츠 렌더링을 제어합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0061:0001"><a href="arsession.md">class ARSession</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0062:0001">이 객체는 모션 추적, 카메라 패스스루, 이미지 분석과 같은 AR 경험의 핵심 작업을 관리합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0064:0001">*<a href="https://developer.apple.com/documentation/arkit/configuration-objects">View on Apple Developer</a>*</span>

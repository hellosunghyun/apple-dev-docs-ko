---
source_path: "documentation/AVFoundation/capture-device-lighting.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/capture-device-lighting"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:lighting:0000:0001">Lighting</span>

<span class="ko-segment" data-segment-id="seg:paragraph:lighting:0001:0001">**프레임워크**: AVFoundation</span>

<span class="ko-segment" data-segment-id="seg:paragraph:lighting:0002:0001">디바이스의 플래시, torch 및 저조도 설정을 구성합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0003:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:configuring-flash-settings:0004:0001">플래시 설정 구성</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-flash-settings:0005:0001"><a href="avcapturedevice/hasflash.md">var hasFlash: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-flash-settings:0006:0001">캡처 장치에 플래시가 있는지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-flash-settings:0007:0001"><a href="avcapturedevice/isflashavailable.md">var isFlashAvailable: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-flash-settings:0008:0001">현재 플래시를 사용할 수 있는지를 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-flash-settings:0009:0001"><a href="avcapturedevice/isflashactive.md">var isFlashActive: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-flash-settings:0010:0001">현재 플래시가 활성화되어 있는지를 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-flash-settings:0011:0001"><a href="avcapturedevice/flashmode-swift.property.md">var flashMode: AVCaptureDevice.FlashMode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-flash-settings:0012:0001">기기의 현재 플래시 모드입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-flash-settings:0013:0001"><a href="avcapturedevice/isflashmodesupported(_:">func isFlashModeSupported(AVCaptureDevice.FlashMode) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-flash-settings:0014:0001">주어진 플래시 모드를 장치가 지원하는지 나타내는 Boolean 값을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-flash-settings:0015:0001"><a href="avcapturedevice/flashmode-swift.enum.md">AVCaptureDevice.FlashMode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-flash-settings:0016:0001">캡처 장치의 플래시 모드를 지정하는 상수입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:configuring-torch-settings:0017:0001">Torch 설정 구성</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-torch-settings:0018:0001"><a href="avcapturedevice/hastorch.md">var hasTorch: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-torch-settings:0019:0001">캡처 장치에 torch가 있는지 지정하는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-torch-settings:0020:0001"><a href="avcapturedevice/istorchavailable.md">var isTorchAvailable: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-torch-settings:0021:0001">현재 torch를 사용할 수 있는지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-torch-settings:0022:0001"><a href="avcapturedevice/istorchactive.md">var isTorchActive: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-torch-settings:0023:0001">장치의 torch가 현재 활성 상태인지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-torch-settings:0024:0001"><a href="avcapturedevice/torchlevel.md">var torchLevel: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-torch-settings:0025:0001">현재 torch 밝기 수준입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-torch-settings:0026:0001"><a href="avcapturedevice/torchmode-swift.property.md">var torchMode: AVCaptureDevice.TorchMode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-torch-settings:0027:0001">현재 torch 모드입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-torch-settings:0028:0001"><a href="avcapturedevice/torchmode-swift.enum.md">AVCaptureDevice.TorchMode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-torch-settings:0029:0001">캡처 장치의 torch 모드를 지정하는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-torch-settings:0030:0001"><a href="avcapturedevice/istorchmodesupported(_:">func isTorchModeSupported(AVCaptureDevice.TorchMode) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-torch-settings:0031:0001">지정된 torch 모드를 장치가 지원하는지 나타내는 Boolean 값을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-torch-settings:0032:0001"><a href="avcapturedevice/settorchmodeon(level:">func setTorchModeOn(level: Float) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-torch-settings:0033:0001">torch 모드에서 조도 수준을 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-torch-settings:0034:0001"><a href="avcapturedevice/maxavailabletorchlevel.md">class let maxAvailableTorchLevel: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-torch-settings:0035:0001">torch를 최대 수준으로 설정함을 나타내는 상수입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:configuring-low-light-settings:0036:0001">저조도 설정 구성</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-low-light-settings:0037:0001"><a href="avcapturedevice/islowlightboostsupported.md">var isLowLightBoostSupported: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-low-light-settings:0038:0001">캡처 장치가 저조도에서 이미지 보강(boosting) 기능을 지원하는지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-low-light-settings:0039:0001"><a href="avcapturedevice/islowlightboostenabled.md">var isLowLightBoostEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-low-light-settings:0040:0001">캡처 장치의 저조도 보강 기능이 활성 상태인지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-low-light-settings:0041:0001"><a href="avcapturedevice/automaticallyenableslowlightboostwhenavailable.md">var automaticallyEnablesLowLightBoostWhenAvailable: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-low-light-settings:0042:0001">캡처 장치가 필요할 때 저조도 부스트 모드로 자동 전환하는지 나타내는 Boolean 값입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0043:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0044:0001"><a href="avcapturedevice/lockforconfiguration.md">func lockForConfiguration() throws</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0045:0001">장치 하드웨어 속성을 구성할 때 독점 접근을 요청합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0046:0001"><a href="avcapturedevice/unlockforconfiguration.md">func unlockForConfiguration()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0047:0001">장치 하드웨어 속성에 대한 독점 제어를 해제합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0048:0001"><a href="avcapturedevice/issubjectareachangemonitoringenabled.md">var isSubjectAreaChangeMonitoringEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0049:0001">장치가 피사체 영역의 변경을 모니터링하는지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0050:0001"><a href="avcapturedevice/subjectareadidchangenotification.md">class let subjectAreaDidChangeNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0051:0001">캡처 장치가 비디오 피사체 영역의 유의미한 변경을 감지할 때 시스템이 게시하는 알림입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0052:0001"><a href="capture-device-formats.md">Formats</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0053:0001">캡처 형식과 카메라 프레임 속도를 구성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0054:0001"><a href="capture-device-focus.md">Focus</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0055:0001">카메라의 자동 초점 동작을 구성하거나 렌즈 위치를 수동으로 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0056:0001"><a href="capture-device-exposure.md">Exposure</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0057:0001">카메라의 자동 노출 동작을 구성하거나 노출 설정을 수동으로 제어합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0058:0001"><a href="capture-device-white-balance.md">White balance</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0059:0001">카메라의 자동 화이트 밸런스 동작을 구성하거나 화이트 밸런스 설정을 수동으로 제어합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0060:0001"><a href="capture-device-color.md">Color</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0061:0001">장치의 HDR 및 색 공간 설정을 관리합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0062:0001"><a href="capture-device-zoom.md">Zoom</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0063:0001">장치 줌 동작을 구성하고 하드웨어 기능을 검사합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0065:0001">*<a href="https://developer.apple.com/documentation/avfoundation/capture-device-lighting">View on Apple Developer</a>*</span>

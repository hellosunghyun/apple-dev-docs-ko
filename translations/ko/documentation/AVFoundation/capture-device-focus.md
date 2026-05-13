---
source_path: "documentation/AVFoundation/capture-device-focus.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/capture-device-focus"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:focus:0000:0001">Focus</span>

<span class="ko-segment" data-segment-id="seg:paragraph:focus:0001:0001">**Framework**: AVFoundation</span>

<span class="ko-segment" data-segment-id="seg:paragraph:focus:0002:0001">Configure the automatic focus behavior of a camera, or manually set its lens position.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0003:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:configuring-automatic-focus:0004:0001">Configuring automatic focus</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-automatic-focus:0005:0001"><a href="avcapturedevice/isfocusmodesupported(_:">func isFocusModeSupported(AVCaptureDevice.FocusMode) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-automatic-focus:0006:0001">Returns a Boolean value that indicates whether the device supports the specified focus mode.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-automatic-focus:0007:0001"><a href="avcapturedevice/focusmode-swift.property.md">var focusMode: AVCaptureDevice.FocusMode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-automatic-focus:0008:0001">The capture device’s focus mode.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-automatic-focus:0009:0001"><a href="avcapturedevice/focusmode-swift.enum.md">AVCaptureDevice.FocusMode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-automatic-focus:0010:0001">Constants to specify the focus mode of a capture device.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-automatic-focus:0011:0001"><a href="avcapturedevice/issmoothautofocussupported.md">var isSmoothAutoFocusSupported: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-automatic-focus:0012:0001">A Boolean value that indicates whether the device supports smooth autofocus.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-automatic-focus:0013:0001"><a href="avcapturedevice/issmoothautofocusenabled.md">var isSmoothAutoFocusEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-automatic-focus:0014:0001">A Boolean value that indicates whether smooth autofocus is in an enabled state on the device.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-automatic-focus:0015:0001"><a href="avcapturedevice/isfacedrivenautofocusenabled.md">var isFaceDrivenAutoFocusEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-automatic-focus:0016:0001">A Boolean value that indicates whether the device has face-driven autofocus enabled.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-automatic-focus:0017:0001"><a href="avcapturedevice/automaticallyadjustsfacedrivenautofocusenabled.md">var automaticallyAdjustsFaceDrivenAutoFocusEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-automatic-focus:0018:0001">A Boolean value that indicates whether the device automatically adjusts face-driven autofocus.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-automatic-focus:0019:0001"><a href="avcapturedevice/isautofocusrangerestrictionsupported.md">var isAutoFocusRangeRestrictionSupported: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-automatic-focus:0020:0001">A Boolean value that indicates whether the device supports focus range restrictions.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-automatic-focus:0021:0001"><a href="avcapturedevice/autofocusrangerestriction-swift.property.md">var autoFocusRangeRestriction: AVCaptureDevice.AutoFocusRangeRestriction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-automatic-focus:0022:0001">A value that controls the allowable range for automatic focusing.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-automatic-focus:0023:0001"><a href="avcapturedevice/autofocusrangerestriction-swift.enum.md">AVCaptureDevice.AutoFocusRangeRestriction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-automatic-focus:0024:0001">Constants to specify the autofocus range of a capture device.</span>

### <span class="ko-segment" data-segment-id="seg:heading:setting-a-focus-point-of-interest:0025:0001">Setting a focus point of interest</span>

- <span class="ko-segment" data-segment-id="seg:list:setting-a-focus-point-of-interest:0026:0001"><a href="avcapturedevice/isfocuspointofinterestsupported.md">var isFocusPointOfInterestSupported: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:setting-a-focus-point-of-interest:0027:0001">A Boolean value that indicates whether the device supports a point of interest for focus.</span>

- <span class="ko-segment" data-segment-id="seg:list:setting-a-focus-point-of-interest:0028:0001"><a href="avcapturedevice/focuspointofinterest.md">var focusPointOfInterest: CGPoint</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:setting-a-focus-point-of-interest:0029:0001">The point of interest for focusing.</span>

### <span class="ko-segment" data-segment-id="seg:heading:setting-a-focus-rectangle-of-interest:0030:0001">Setting a focus rectangle of interest</span>

- <span class="ko-segment" data-segment-id="seg:list:setting-a-focus-rectangle-of-interest:0031:0001"><a href="avcapturedevice/isfocusrectofinterestsupported.md">var isFocusRectOfInterestSupported: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:setting-a-focus-rectangle-of-interest:0032:0001">수신기가 관심 영역 포커스 사각형을 지원하는지 여부를 나타냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:setting-a-focus-rectangle-of-interest:0033:0001"><a href="avcapturedevice/focusrectofinterest.md">var focusRectOfInterest: CGRect</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:setting-a-focus-rectangle-of-interest:0034:0001">장치가 보유한 경우 현재 포커스 관심 영역 사각형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:setting-a-focus-rectangle-of-interest:0035:0001"><a href="avcapturedevice/minfocusrectofinterestsize.md">var minFocusRectOfInterestSize: CGSize</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:setting-a-focus-rectangle-of-interest:0036:0001">관심 영역 사각형을 지정할 때 사용할 수 있는 최소 크기입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:setting-a-focus-rectangle-of-interest:0037:0001"><a href="avcapturedevice/defaultrectforfocuspoint(ofinterest:">func defaultRectForFocusPoint(ofInterest: CGPoint) -&gt; CGRect</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setting-a-focus-rectangle-of-interest:0038:0001">지정된 포커스 관심 지점에 사용되는 기본 관심 영역 사각형입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:monitoring-focus-changes:0039:0001">포커스 변경 사항 모니터링</span>

- <span class="ko-segment" data-segment-id="seg:list:monitoring-focus-changes:0040:0001"><a href="avcapturedevice/isadjustingfocus.md">var isAdjustingFocus: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:monitoring-focus-changes:0041:0001">장치가 현재 포커스 설정을 조정 중인지 나타내는 부울 값입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:setting-focus-manually:0042:0001">포커스 수동 설정</span>

- <span class="ko-segment" data-segment-id="seg:list:setting-focus-manually:0043:0001"><a href="avcapturedevice/islockingfocuswithcustomlenspositionsupported.md">var isLockingFocusWithCustomLensPositionSupported: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:setting-focus-manually:0044:0001">장치가 특정 렌즈 위치로 포커스를 잠그는 것을 지원하는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:setting-focus-manually:0045:0001"><a href="avcapturedevice/lensposition.md">var lensPosition: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:setting-focus-manually:0046:0001">현재 렌즈의 포커스 위치입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:setting-focus-manually:0047:0001"><a href="avcapturedevice/currentlensposition.md">class let currentLensPosition: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:setting-focus-manually:0048:0001">현재 렌즈 위치를 나타내는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:setting-focus-manually:0049:0001"><a href="avcapturedevice/setfocusmodelocked(lensposition:completionhandler:">func setFocusModeLocked(lensPosition: Float, completionHandler: ((CMTime) -&gt; Void)?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setting-focus-manually:0050:0001">지정한 값으로 렌즈 위치를 잠그고 포커스 모드를 잠금 상태로 설정합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:inspecting-the-focus-distance:0051:0001">포커스 거리 검사</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-the-focus-distance:0052:0001"><a href="avcapturedevice/minimumfocusdistance.md">var minimumFocusDistance: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-the-focus-distance:0053:0001">캡처 장치의 최소 포커스 거리는 밀리미터 단위입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0054:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0055:0001"><a href="avcapturedevice/lockforconfiguration.md">func lockForConfiguration() throws</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0056:0001">장치 하드웨어 속성을 구성할 수 있도록 독점 액세스를 요청합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0057:0001"><a href="avcapturedevice/unlockforconfiguration.md">func unlockForConfiguration()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0058:0001">장치 하드웨어 속성에 대한 독점 제어를 해제합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0059:0001"><a href="avcapturedevice/issubjectareachangemonitoringenabled.md">var isSubjectAreaChangeMonitoringEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0060:0001">장치가 피사체 영역의 변경 사항을 모니터링하는지 여부를 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0061:0001"><a href="avcapturedevice/subjectareadidchangenotification.md">class let subjectAreaDidChangeNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0062:0001">캡처 장치가 비디오 피사체 영역의 중요한 변경을 감지할 때 시스템이 게시하는 알림입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0063:0001"><a href="capture-device-formats.md">Formats</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0064:0001">캡처 형식과 카메라 프레임 속도를 구성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0065:0001"><a href="capture-device-exposure.md">Exposure</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0066:0001">카메라의 자동 노출 동작을 구성하거나 노출 설정을 수동으로 제어합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0067:0001"><a href="capture-device-white-balance.md">White balance</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0068:0001">카메라의 자동 화이트 밸런스 동작을 구성하거나 화이트 밸런스 설정을 수동으로 제어합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0069:0001"><a href="capture-device-lighting.md">Lighting</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0070:0001">장치의 플래시, 토치, 저조도 설정을 구성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0071:0001"><a href="capture-device-color.md">Color</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0072:0001">장치의 HDR 및 색 공간 설정을 관리합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0073:0001"><a href="capture-device-zoom.md">Zoom</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0074:0001">장치 줌 동작을 구성하고 하드웨어 기능을 확인합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0076:0001">*<a href="https://developer.apple.com/documentation/avfoundation/capture-device-focus">View on Apple Developer</a>*</span>

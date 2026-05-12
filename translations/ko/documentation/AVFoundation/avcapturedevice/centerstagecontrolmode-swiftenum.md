---
source_path: "documentation/AVFoundation/avcapturedevice/centerstagecontrolmode-swiftenum.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedevice/centerstagecontrolmode-swiftenum"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avcapturedevicecenterstagecontrolmode:0000:0001">AVCaptureDevice.CenterStageControlMode</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcapturedevicecenterstagecontrolmode:0001:0001">**Framework**: AVFoundation **Kind**: enum</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcapturedevicecenterstagecontrolmode:0002:0001">현재 Center Stage 제어 모드를 나타내는 상수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcapturedevicecenterstagecontrolmode:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avcapturedevicecenterstagecontrolmode:0004:0001">iOS 14.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturedevicecenterstagecontrolmode:0004:0002">iPadOS 14.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturedevicecenterstagecontrolmode:0004:0003">Mac Catalyst 14.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturedevicecenterstagecontrolmode:0004:0004">macOS 12.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturedevicecenterstagecontrolmode:0004:0005">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
enum CenterStageControlMode
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:control-modes:0008:0001">제어 모드</span>

- <span class="ko-segment" data-segment-id="seg:list:control-modes:0009:0001"><a href="avcapturedevice/centerstagecontrolmode-swift.enum/user.md">AVCaptureDevice.CenterStageControlMode.user</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:control-modes:0010:0001">사용자가 Center Stage를 제어합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:control-modes:0011:0001"><a href="avcapturedevice/centerstagecontrolmode-swift.enum/app.md">AVCaptureDevice.CenterStageControlMode.app</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:control-modes:0012:0001">앱이 Center Stage를 제어합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:control-modes:0013:0001"><a href="avcapturedevice/centerstagecontrolmode-swift.enum/cooperative.md">AVCaptureDevice.CenterStageControlMode.cooperative</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:control-modes:0014:0001">사용자와 앱이 협력하여 Center Stage 제어권을 공유합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0015:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0016:0001"><a href="avcapturedevice/centerstagecontrolmode-swift.enum/init(rawvalue:">init?(rawValue: Int)</a>.md)</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0017:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0018:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0001"><a href="../Swift/BitwiseCopyable.md">BitwiseCopyable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0002"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0003"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0004"><a href="../Swift/RawRepresentable.md">RawRepresentable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0005"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0006"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0020:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="avcapturedevice/iscenterstageactive.md">var isCenterStageActive: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">기기에서 Center Stage가 활성화되어 있는지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="avcapturedevice/iscenterstageenabled.md">class var isCenterStageEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">사용자 또는 앱이 기기에서 Center Stage를 활성화했는지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="avcapturedevice/centerstagerectofinterest.md">var centerStageRectOfInterest: CGRect</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">Center Stage 프레이밍을 수행할 출력 픽셀 버퍼 내의 유효 영역입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="avcapturedevice/centerstagecontrolmode-swift.type.property.md">class var centerStageControlMode: AVCaptureDevice.CenterStageControlMode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">현재 Center Stage 제어 모드를 나타내는 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedevice/centerstagecontrolmode-swift.enum">View on Apple Developer</a>*</span>

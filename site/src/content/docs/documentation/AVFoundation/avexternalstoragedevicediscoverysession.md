---
source_path: "documentation/AVFoundation/avexternalstoragedevicediscoverysession.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avexternalstoragedevicediscoverysession"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avexternalstoragedevicediscoverysession:0000:0001">AVExternalStorageDeviceDiscoverySession</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avexternalstoragedevicediscoverysession:0001:0001">**Framework**: AVFoundation **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avexternalstoragedevicediscoverysession:0002:0001">Informs your app when the external storage devices connect to and disconnect from the system.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avexternalstoragedevicediscoverysession:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avexternalstoragedevicediscoverysession:0004:0001">iOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avexternalstoragedevicediscoverysession:0004:0002">iPadOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avexternalstoragedevicediscoverysession:0004:0003">Mac Catalyst 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avexternalstoragedevicediscoverysession:0004:0004">macOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avexternalstoragedevicediscoverysession:0004:0005">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class AVExternalStorageDeviceDiscoverySession
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:checking-for-session-support-on-a-device:0008:0001">Checking for session support on a device</span>

- <span class="ko-segment" data-segment-id="seg:list:checking-for-session-support-on-a-device:0009:0001"><a href="avexternalstoragedevicediscoverysession/issupported.md">class var isSupported: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:checking-for-session-support-on-a-device:0010:0001">A Boolean value that indicates whether the system supports external storage devices.</span>

### <span class="ko-segment" data-segment-id="seg:heading:retrieving-the-shared-device-discovery-session-instance:0011:0001">Retrieving the shared device discovery session instance</span>

- <span class="ko-segment" data-segment-id="seg:list:retrieving-the-shared-device-discovery-session-instance:0012:0001"><a href="avexternalstoragedevicediscoverysession/shared.md">class var shared: AVExternalStorageDeviceDiscoverySession?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:retrieving-the-shared-device-discovery-session-instance:0013:0001">The system’s singleton device discovery session instance.</span>

### <span class="ko-segment" data-segment-id="seg:heading:monitoring-for-storage-device-updates:0014:0001">Monitoring for storage device updates</span>

- <span class="ko-segment" data-segment-id="seg:list:monitoring-for-storage-device-updates:0015:0001">[var externalStorageDevices: [AVExternalStorageDevice]](avexternalstoragedevicediscoverysession/externalstoragedevices.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:monitoring-for-storage-device-updates:0016:0001">An array of external storage devices the session updates as individual devices connect or disconnect from the system.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0017:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0018:0001">Inherits From</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0019:0001"><a href="../ObjectiveC/NSObject-swift.class.md">NSObject</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0020:0001">Conforms To</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0021:0001"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0021:0002"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0021:0003"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0021:0004"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0021:0005"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0021:0006"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0022:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="choosing-a-capture-device.md">Choosing a capture device</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">Select the front or back camera, or use advanced features like the TrueDepth camera or dual camera.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="adopting-smart-framing-in-your-camera-app.md">Adopting smart framing in your camera app</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">Capture the optimal shot by providing automatic framing recommendations.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="avcapturedevice.md">class AVCaptureDevice</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">](avassetexportsession/states(updateinterval:).md) 내보내기 작업의 진행 상태를 모니터링합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="avcapturedeviceinput.md">class AVCaptureDeviceInput</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">내보내기 작업의 상태를 나타내는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001"><a href="avcontinuitydevice.md">class AVContinuityDevice</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">내보내기 세션의 상태입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0033:0001"><a href="avexternalstoragedevice.md">class AVExternalStorageDevice</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">내보내기 진행 상태를 나타내는 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0036:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avexternalstoragedevicediscoverysession">View on Apple Developer</a>*</span>

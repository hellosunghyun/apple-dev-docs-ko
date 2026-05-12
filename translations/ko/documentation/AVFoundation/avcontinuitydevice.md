---
source_path: "documentation/AVFoundation/avcontinuitydevice.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcontinuitydevice"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avcontinuitydevice:0000:0001">AVContinuityDevice</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcontinuitydevice:0001:0001">**Framework**: AVFoundation **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcontinuitydevice:0002:0001">근처에 있는 물리적 iOS 기기를 나타내는 클래스이며, 해당 기기의 카메라와 마이크에 대한 액세스를 제공할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcontinuitydevice:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avcontinuitydevice:0004:0001">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class AVContinuityDevice
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">각 연속성 디바이스 인스턴스는 근처에 있는 다른 iOS 기기를 나타냅니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0002">앱은 각각 <a href="avcontinuitydevice/videodevices.md">@@TOKEN_0@@</a> 및 <a href="avcontinuitydevice/audiosessioninputs.md">@@TOKEN_1@@</a> 속성을 통해 다른 기기의 카메라와 마이크에 액세스할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0009:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:checking-a-continuity-devices-availability:0010:0001">연속성 디바이스의 가용성 확인</span>

- <span class="ko-segment" data-segment-id="seg:list:checking-a-continuity-devices-availability:0011:0001"><a href="avcontinuitydevice/isconnected.md">var isConnected: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:checking-a-continuity-devices-availability:0012:0001">연속성 디바이스가 시스템에 연결되어 있어 사용할 수 있는지 나타내는 불리언 값입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:retrieving-video-devices-from-a-continuity-device:0013:0001">연속성 디바이스에서 비디오 장치 가져오기</span>

- <span class="ko-segment" data-segment-id="seg:list:retrieving-video-devices-from-a-continuity-device:0014:0001">[var videoDevices: [AVCaptureDevice]](avcontinuitydevice/videodevices.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:retrieving-video-devices-from-a-continuity-device:0015:0001">연속성 디바이스의 앱에서 사용할 수 있는 비디오 캡처 장치 배열입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:retrieving-audio-ports-from-a-continuity-device:0016:0001">연속성 디바이스에서 오디오 포트 가져오기</span>

- <span class="ko-segment" data-segment-id="seg:list:retrieving-audio-ports-from-a-continuity-device:0017:0001">[var audioSessionInputs: [AVAudioSessionPortDescription]](avcontinuitydevice/audiosessioninputs.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:retrieving-audio-ports-from-a-continuity-device:0018:0001">연속성 디바이스의 앱에서 사용할 수 있는 오디오 세션 포트 설명 배열입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:identifying-a-continuity-device:0019:0001">연속성 디바이스 식별</span>

- <span class="ko-segment" data-segment-id="seg:list:identifying-a-continuity-device:0020:0001"><a href="avcontinuitydevice/connectionid.md">var connectionID: UUID</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:identifying-a-continuity-device:0021:0001">특정 연속성 디바이스를 식별하는 범용 고유 값입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0022:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0023:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0024:0001"><a href="../ObjectiveC/NSObject-swift.class.md">NSObject</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0025:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0026:0001"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0026:0002"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0026:0003"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0026:0004"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0026:0005"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0026:0006"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0027:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="choosing-a-capture-device.md">Choosing a capture device</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">전면 또는 후면 카메라를 선택하거나 TrueDepth 카메라 또는 듀얼 카메라 같은 고급 기능을 사용할 수 있습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="adopting-smart-framing-in-your-camera-app.md">Adopting smart framing in your camera app</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">자동 구도 권장 사항을 제공하여 최적의 샷을 캡처합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="avcapturedevice.md">class AVCaptureDevice</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">카메라 또는 마이크와 같은 하드웨어 또는 가상 캡처 장치를 나타내는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="avcapturedeviceinput.md">class AVCaptureDeviceInput</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">캡처 세션으로 캡처 장치에서 미디어 입력을 제공하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="avexternalstoragedevice.md">class AVExternalStorageDevice</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">미디어 자산을 저장하는 물리적 외부 스토리지 장치를 나타내는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="avexternalstoragedevicediscoverysession.md">class AVExternalStorageDeviceDiscoverySession</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">외부 스토리지 장치가 시스템에 연결되거나 연결이 해제될 때 앱에 알립니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcontinuitydevice">View on Apple Developer</a>*</span>

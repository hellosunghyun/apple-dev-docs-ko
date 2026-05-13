---
source_path: "documentation/AVFoundation/avcaptureinput/port/sourcedeviceposition.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcaptureinput/port/sourcedeviceposition"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sourcedeviceposition:0000:0001">sourceDevicePosition</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sourcedeviceposition:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sourcedeviceposition:0002:0001">The position of the source device providing input through this port.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sourcedeviceposition:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:sourcedeviceposition:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sourcedeviceposition:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sourcedeviceposition:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sourcedeviceposition:0004:0004">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var sourceDevicePosition: AVCaptureDevice.Position { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">All ports contained in an <a href="avcaptureinput.md">@@TOKEN_0@@</a> object’s <a href="avcaptureinput/ports.md">@@TOKEN_1@@</a> array have the same <a href="avcaptureinput/port/sourcedeviceposition.md">@@TOKEN_2@@</a> value.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">카메라 내부 행렬은 캡처 장치의 현재 촬영 파라미터를 설명하며, 이를 사용해 오버레이를 렌더링하거나 컴퓨터 비전 작업을 수행할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">For example, you can record audio from the front microphone input to pair with video from the front camera, and record audio from the back microphone input to pair with video from the back camera.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">By calling the input’s <a href="avcapturedeviceinput/ports(for:sourcedevicetype:sourcedeviceposition:">@@TOKEN_0@@</a>.md) method, you may discover additional hidden ports originating from the source audio device.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">These ports represent individual microphones positioned to pick up audio from one particular direction.</span>

```swift
// Find the audio port that captures omnidirectional audio.
let omniAudioPort = audioDeviceInput.ports(for: .audio,
                                           sourceDeviceType: .builtInMicrophone,
                                           sourceDevicePosition: .unspecified).first

// Find the audio port that captures front audio.
let frontAudioPort = audioDeviceInput.ports(for: .audio,
                                            sourceDeviceType: .builtInMicrophone,
                                            sourceDevicePosition: .front).first

// Find the audio port that captures back audio.
let backAudioPort = audioDeviceInput.ports(for: .audio,
                                           sourceDeviceType: .builtInMicrophone,
                                           sourceDevicePosition: .back).first
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0012:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avcaptureinput/port/isenabled.md">var isEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">A Boolean value that indicates whether the port is in an enabled state.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avcaptureinput/port/mediatype.md">var mediaType: AVMediaType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">The media type of the port.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avcaptureinput/port/formatdescription.md">var formatDescription: CMFormatDescription?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">A description of the port format.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="avcaptureinput/port/sourcedevicetype.md">var sourceDeviceType: AVCaptureDevice.DeviceType?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">The device type of the source camera that provides data to the port.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="avcaptureinput/port/clock.md">var clock: CMClock?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">An object that represents the capture device’s clock.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcaptureinput/port/sourcedeviceposition">View on Apple Developer</a>*</span>

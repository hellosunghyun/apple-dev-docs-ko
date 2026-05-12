---
source_path: "documentation/AVFoundation/macos-capture-features.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/macos-capture-features"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:macos-capture-features:0000:0001">macOS 캡처 기능</span>

<span class="ko-segment" data-segment-id="seg:paragraph:macos-capture-features:0001:0001">**Framework**: AVFoundation</span>

<span class="ko-segment" data-segment-id="seg:paragraph:macos-capture-features:0002:0001">macOS의 캡처 하드웨어의 전송 동작과 입력 소스를 제어합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0003:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:controlling-transport-behavior:0004:0001">전송 동작 제어</span>

- <span class="ko-segment" data-segment-id="seg:list:controlling-transport-behavior:0005:0001"><a href="avcapturedevice/transportcontrolssupported.md">var transportControlsSupported: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:controlling-transport-behavior:0006:0001">장치가 전송 제어 명령을 지원하는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:controlling-transport-behavior:0007:0001"><a href="avcapturedevice/transportcontrolsplaybackmode-swift.property.md">var transportControlsPlaybackMode: AVCaptureDevice.TransportControlsPlaybackMode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:controlling-transport-behavior:0008:0001">현재 재생 모드입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:controlling-transport-behavior:0009:0001"><a href="avcapturedevice/settransportcontrolsplaybackmode(_:speed:">func setTransportControlsPlaybackMode(AVCaptureDevice.TransportControlsPlaybackMode, speed: AVCaptureDevice.TransportControlsSpeed)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:controlling-transport-behavior:0010:0001">전송 제어의 재생 모드와 속도를 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:controlling-transport-behavior:0011:0001"><a href="avcapturedevice/transportcontrolsplaybackmode-swift.enum.md">AVCaptureDevice.TransportControlsPlaybackMode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:controlling-transport-behavior:0012:0001">해당 시 전송 제어의 현재 재생 모드를 나타내는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:controlling-transport-behavior:0013:0001"><a href="avcapturedevice/transportcontrolsspeed-swift.property.md">var transportControlsSpeed: AVCaptureDevice.TransportControlsSpeed</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:controlling-transport-behavior:0014:0001">현재 재생 속도입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:controlling-transport-behavior:0015:0001"><a href="avcapturedevice/transportcontrolsspeed-swift.typealias.md">AVCaptureDevice.TransportControlsSpeed</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:controlling-transport-behavior:0016:0001">전송 제어의 속도를 지정하는 상수입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:configuring-input-sources:0017:0001">입력 소스 구성</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-input-sources:0018:0001">[var inputSources: [AVCaptureDevice.InputSource]](avcapturedevice/inputsources.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-input-sources:0019:0001">장치가 지원하는 입력 소스 배열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-input-sources:0020:0001"><a href="avcapturedevice/activeinputsource.md">var activeInputSource: AVCaptureDevice.InputSource?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-input-sources:0021:0001">장치의 현재 활성 입력 소스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-input-sources:0022:0001"><a href="avcapturedevice/inputsource.md">AVCaptureDevice.InputSource</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-input-sources:0023:0001">캡처 장치의 고유한 입력 소스입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:accessing-linked-devices:0024:0001">연결된 장치 접근</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-linked-devices:0025:0001">[var linkedDevices: [AVCaptureDevice]](avcapturedevice/linkeddevices.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-linked-devices:0026:0001">물리적으로 장치에 연결된 캡처 장치의 배열입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-linked-devices:0028:0001">*<a href="https://developer.apple.com/documentation/avfoundation/macos-capture-features">View on Apple Developer</a>*</span>

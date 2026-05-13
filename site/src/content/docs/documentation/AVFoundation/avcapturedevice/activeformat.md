---
source_path: "documentation/AVFoundation/avcapturedevice/activeformat.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedevice/activeformat"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:activeformat:0000:0001">activeFormat</span>

<span class="ko-segment" data-segment-id="seg:paragraph:activeformat:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:activeformat:0002:0001">장치에서 사용 중인 캡처 형식입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:activeformat:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:activeformat:0004:0001">iOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:activeformat:0004:0002">iPadOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:activeformat:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:activeformat:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:activeformat:0004:0005">tvOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:activeformat:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var activeFormat: AVCaptureDevice.Format { get set }
```

## <span class="ko-segment" data-segment-id="seg:heading:mentions:0007:0001">Mentions</span>

- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0001"><a href="adopting-smart-framing-in-your-camera-app.md">Adopting smart framing in your camera app</a></span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">iOS에서 장치의 활성 형식과 캡처 세션의 <a href="avcapturesession/sessionpreset.md">@@TOKEN_0@@</a>는 상호 배타적입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">장치의 activeFormat을 설정하면, 연결된 세션이 <a href="avcapturesession/preset/inputpriority.md">@@TOKEN_0@@</a>로 그 프리셋을 변경합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0003">마찬가지로 캡처 세션에 프리셋을 설정하면, 세션이 입력 장치를 제어하고 각 장치의 활성 형식을 적절히 구성합니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0011:0001">**Note**: iOS에서 오디오 장치는 사용자 구성 가능한 형식을 노출하지 않습니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0011:0002">iOS에서 오디오 입력을 구성하려면 <a href="https://developer.apple.com/documentation/AVFAudio/AVAudioSession">@@TOKEN_0@@</a> 및 관련 API를 대신 사용합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0001"><a href="avcapturedevice/activeformat.md">@@TOKEN_0@@</a>, <a href="avcapturedevice/activevideominframeduration.md">@@TOKEN_1@@</a>, <a href="avcapturedevice/activevideomaxframeduration.md">@@TOKEN_2@@</a> 속성은 세션의 <a href="avcapturesession/beginconfiguration(">@@TOKEN_3@@</a>.md) 및 <a href="avcapturesession/commitconfiguration(">@@TOKEN_4@@</a>.md) 호출 사이에서 동시에 설정합니다.</span>

```swift
// Configure capture session.
captureSession.beginConfiguration()

do {
    try device.lockForConfiguration()
    
    // Set the device's active format.
    device.activeFormat = // a supported format.
    
    // Set the device's min/max frame duration.
    device.activeVideoMinFrameDuration = // a supported minimum duration.
    device.activeVideoMaxFrameDuration = // a supported maximum duration.
    
    device.unlockForConfiguration()
} catch {
    // Handle error.
}

// Apply the changes to the session.
captureSession.commitConfiguration()
```

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0014:0001">캡처 세션을 고해상도 정지 사진용 활성 형식으로 구성하고 <a href="avcapturevideodataoutput.md">@@TOKEN_0@@</a>에 줌, 방향 또는 형식 변경을 적용하면 시스템이 목표 프레임 속도를 충족하지 못할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0015:0001">이 속성은 키-값 관찰을 통해 확인할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0016:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001">[var formats: [AVCaptureDevice.Format]](avcapturedevice/formats.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">장치가 지원하는 캡처 형식입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="avcapturedevice/activedepthdataformat.md">var activeDepthDataFormat: AVCaptureDevice.Format?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">캡처 장치의 현재 활성 깊이 데이터 형식입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="avcapturedevice/format.md">AVCaptureDevice.Format</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">캡처 장치가 지원하는 미디어 형식과 캡처 설정을 정의하는 클래스입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedevice/activeformat">View on Apple Developer</a>*</span>

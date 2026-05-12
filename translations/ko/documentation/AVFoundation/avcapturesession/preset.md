---
source_path: "documentation/AVFoundation/avcapturesession/preset.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturesession/preset"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avcapturesessionpreset:0000:0001">AVCaptureSession.Preset</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcapturesessionpreset:0001:0001">**Framework**: AVFoundation **Kind**: struct</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcapturesessionpreset:0002:0001">캡처 세션의 표준 구성을 정의하는 사전 설정입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcapturesessionpreset:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avcapturesessionpreset:0004:0001">iOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturesessionpreset:0004:0002">iPadOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturesessionpreset:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturesessionpreset:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturesessionpreset:0004:0005">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
struct Preset
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001"><a href="avcapturesession/sessionpreset.md">@@TOKEN_0@@</a> 값을 설정하면 캡처 세션을 일반적인 사용 사례에 맞게 쉽게 구성할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0009:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:quality-levels:0010:0001">품질 수준</span>

- <span class="ko-segment" data-segment-id="seg:list:quality-levels:0011:0001"><a href="avcapturesession/preset/high.md">static let high: AVCaptureSession.Preset</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:quality-levels:0012:0001">고품질 출력을 캡처하는 데 적합한 사전 설정입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:quality-levels:0013:0001"><a href="avcapturesession/preset/medium.md">static let medium: AVCaptureSession.Preset</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:quality-levels:0014:0001">중간 품질 출력을 캡처하는 데 적합한 사전 설정입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:quality-levels:0015:0001"><a href="avcapturesession/preset/low.md">static let low: AVCaptureSession.Preset</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:quality-levels:0016:0001">저품질 출력을 캡처하는 데 적합한 사전 설정입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:photo:0017:0001">Photo</span>

- <span class="ko-segment" data-segment-id="seg:list:photo:0018:0001"><a href="avcapturesession/preset/photo.md">static let photo: AVCaptureSession.Preset</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:photo:0019:0001">고해상도 사진 품질 출력을 캡처하는 데 적합한 사전 설정입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:manual-configuration:0020:0001">수동 구성</span>

- <span class="ko-segment" data-segment-id="seg:list:manual-configuration:0021:0001"><a href="avcapturesession/preset/inputpriority.md">static let inputPriority: AVCaptureSession.Preset</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:manual-configuration:0022:0001">캡처 세션의 오디오 및 비디오 출력 설정을 지정하지 않는 사전 설정입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:high-definition:0023:0001">고화질</span>

- <span class="ko-segment" data-segment-id="seg:list:high-definition:0024:0001"><a href="avcapturesession/preset/qhd960x540.md">static let qHD960x540: AVCaptureSession.Preset</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:high-definition:0025:0001">쿼터 HD(960 x 540 픽셀) 품질 비디오 출력을 캡처하는 데 적합한 사전 설정입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:high-definition:0026:0001"><a href="avcapturesession/preset/hd1280x720.md">static let hd1280x720: AVCaptureSession.Preset</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:high-definition:0027:0001">720p 품질(1280 x 720 픽셀) 비디오 출력을 캡처하는 데 적합한 사전 설정입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:high-definition:0028:0001"><a href="avcapturesession/preset/hd1920x1080.md">static let hd1920x1080: AVCaptureSession.Preset</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:high-definition:0029:0001">1080p 품질(1920 x 1080 픽셀) 비디오 출력을 캡처하는 데 적합한 사전 설정입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:high-definition:0030:0001"><a href="avcapturesession/preset/hd4k3840x2160.md">static let hd4K3840x2160: AVCaptureSession.Preset</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:high-definition:0031:0001">2160p 품질(3840 x 2160 픽셀) 비디오 출력을 캡처하는 데 적합한 사전 설정입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:vga:0032:0001">VGA</span>

- <span class="ko-segment" data-segment-id="seg:list:vga:0033:0001"><a href="avcapturesession/preset/qvga320x240.md">static let qvga320x240: AVCaptureSession.Preset</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:vga:0034:0001">320 x 240 픽셀 비디오 출력을 캡처하는 데 적합한 사전 설정입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:vga:0035:0001"><a href="avcapturesession/preset/vga640x480.md">static let vga640x480: AVCaptureSession.Preset</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:vga:0036:0001">VGA 품질(640 x 480 픽셀) 비디오 출력을 캡처하는 데 적합한 사전 설정입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:iframe:0037:0001">iFrame</span>

- <span class="ko-segment" data-segment-id="seg:list:iframe:0038:0001"><a href="avcapturesession/preset/iframe960x540.md">static let iFrame960x540: AVCaptureSession.Preset</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:iframe:0039:0001">960 x 540 품질의 iFrame H.264 비디오를 AAC 오디오와 함께 약 30 Mbits/sec로 캡처하기에 적합한 preset입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:iframe:0040:0001"><a href="avcapturesession/preset/iframe1280x720.md">static let iFrame1280x720: AVCaptureSession.Preset</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:iframe:0041:0001">1280 x 720 품질의 iFrame H.264 비디오를 AAC 오디오와 함께 약 40 Mbits/sec로 캡처하기에 적합한 preset입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:cif:0042:0001">CIF</span>

- <span class="ko-segment" data-segment-id="seg:list:cif:0043:0001"><a href="avcapturesession/preset/cif352x288.md">static let cif352x288: AVCaptureSession.Preset</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:cif:0044:0001">CIF(352 x 288 픽셀) 품질 비디오 출력을 캡처하기에 적합한 preset입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0045:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0046:0001"><a href="avcapturesession/preset/init(rawvalue:">init(rawValue: String)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0047:0001">문자열 값으로 preset을 생성합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0048:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0049:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0050:0001"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0050:0002"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0050:0003"><a href="../Swift/RawRepresentable.md">RawRepresentable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0050:0004"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0050:0005"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0051:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0052:0001"><a href="avcapturesession/cansetsessionpreset(_:">func canSetSessionPreset(AVCaptureSession.Preset) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0053:0001">지정한 preset으로 캡처 세션을 구성할 수 있는지 확인합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0054:0001"><a href="avcapturesession/sessionpreset.md">var sessionPreset: AVCaptureSession.Preset</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0055:0001">출력의 품질 수준 또는 비트 전송률을 나타내는 preset 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0057:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturesession/preset">View on Apple Developer</a>*</span>

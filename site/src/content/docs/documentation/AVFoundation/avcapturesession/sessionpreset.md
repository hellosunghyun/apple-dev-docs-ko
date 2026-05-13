---
source_path: "documentation/AVFoundation/avcapturesession/sessionpreset.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturesession/sessionpreset"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sessionpreset:0000:0001">sessionPreset</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sessionpreset:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sessionpreset:0002:0001">출력의 품질 수준 또는 비트 전송률을 나타내는 프리셋 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sessionpreset:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:sessionpreset:0004:0001">iOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sessionpreset:0004:0002">iPadOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sessionpreset:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sessionpreset:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:sessionpreset:0004:0005">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var sessionPreset: AVCaptureSession.Preset { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">캡처 세션의 형식과 설정을 구성하려면 프리셋 값을 지정합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">기본 프리셋은 <a href="avcapturesession/preset/high.md">@@TOKEN_0@@</a>로, 고품질 비디오 및 오디오 출력을 생성합니다. 하지만 <a href="avcapturesession/cansetsessionpreset(_:">@@TOKEN_1@@</a>.md) 호출 시 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_2@@</a>를 반환하는 임의의 프리셋 값을 지정할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">세션이 실행 중일 때도 이 값을 설정할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="avcapturesession/preset.md">AVCaptureSession.Preset</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">캡처 세션의 표준 구성을 정의하는 프리셋입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avcapturesession/cansetsessionpreset(_:">func canSetSessionPreset(AVCaptureSession.Preset) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">지정한 프리셋으로 캡처 세션을 구성할 수 있는지 여부를 결정합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturesession/sessionpreset">View on Apple Developer</a>*</span>

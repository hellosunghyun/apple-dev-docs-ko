---
source_path: "documentation/AVFoundation/avcapturedevice/formats.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedevice/formats"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:formats:0000:0001">formats</span>

<span class="ko-segment" data-segment-id="seg:paragraph:formats:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:formats:0002:0001">장치에서 지원하는 캡처 포맷입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:formats:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:formats:0004:0001">iOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:formats:0004:0002">iPadOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:formats:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:formats:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:formats:0004:0005">tvOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:formats:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var formats: [AVCaptureDevice.Format] { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">캡처 장치 포맷은 특정 캡처 모드의 비디오, 이미지 또는 오디오 매개변수의 세부 정보를 설명합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">캡처 세션 프리셋에서 다루지 않는 캡처 설정이 필요한 경우, 이 배열의 형식 중 하나를 <a href="avcapturedevice/activeformat.md">@@TOKEN_0@@</a> 속성으로 설정할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이 속성 값은 key-value 관찰이 가능합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="avcapturedevice/activeformat.md">var activeFormat: AVCaptureDevice.Format</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">장치에서 사용 중인 캡처 포맷입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avcapturedevice/activedepthdataformat.md">var activeDepthDataFormat: AVCaptureDevice.Format?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">캡처 장치의 현재 활성 깊이 데이터 포맷입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avcapturedevice/format.md">AVCaptureDevice.Format</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">캡처 장치가 지원하는 미디어 포맷과 캡처 설정을 정의하는 클래스입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedevice/formats">View on Apple Developer</a>*</span>

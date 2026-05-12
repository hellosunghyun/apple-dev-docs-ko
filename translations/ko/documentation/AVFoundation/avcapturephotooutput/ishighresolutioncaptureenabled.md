---
source_path: "documentation/AVFoundation/avcapturephotooutput/ishighresolutioncaptureenabled.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/ishighresolutioncaptureenabled"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:ishighresolutioncaptureenabled:0000:0001">isHighResolutionCaptureEnabled</span>

<span class="ko-segment" data-segment-id="seg:paragraph:ishighresolutioncaptureenabled:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:ishighresolutioncaptureenabled:0002:0001">정지 이미지의 고해상도 캡처를 위해 캡처 파이프라인을 구성할지 여부를 지정하는 부울 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:ishighresolutioncaptureenabled:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:ishighresolutioncaptureenabled:0004:0001">iOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:ishighresolutioncaptureenabled:0004:0002">iPadOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:ishighresolutioncaptureenabled:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:ishighresolutioncaptureenabled:0004:0004">macOS 10.15+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var isHighResolutionCaptureEnabled: Bool { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">By default, <code>AVCaptureScreenInput</code> captures the video buffers from the display at a scale factor of 1.0 (no scaling).</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">Set this property to scale the buffers by a given factor; for example a 320x240 capture area with a scaleFactor of <code>2.0</code> produces video buffers at 640x480.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">This property defaults to the smallest dimensions returned by <a href="avcapturedevice/format/supportedmaxphotodimensions.md">@@TOKEN_0@@</a>.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">세션이 실행 중일 때 이 속성을 변경하면 캡처 렌더링 파이프라인을 오랜 시간 다시 구성해야 하므로, 진행 중인 Live Photo 캡처가 즉시 종료되고 완료되지 않은 사진 요청이 중단되며 비디오 미리보기가 일시적으로 멈춥니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">사진 설정 객체의 <a href="avcapturephotosettings/ishighresolutionphotoenabled.md">@@TOKEN_0@@</a> 속성을 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_1@@</a>로 설정해 사진 캡처를 시작하려면 먼저 이 옵션을 사용 설정해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">그러나 이 옵션을 사용 설정한 후에는 <a href="avcapturephotosettings/ishighresolutionphotoenabled.md">@@TOKEN_0@@</a> 설정 값에 상관없이 자유롭게 사진 캡처 요청을 발행할 수 있습니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/ishighresolutioncaptureenabled">View on Apple Developer</a>*</span>

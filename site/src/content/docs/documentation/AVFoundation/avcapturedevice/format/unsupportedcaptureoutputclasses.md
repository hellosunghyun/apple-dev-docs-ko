---
source_path: "documentation/AVFoundation/avcapturedevice/format/unsupportedcaptureoutputclasses.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/unsupportedcaptureoutputclasses"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:unsupportedcaptureoutputclasses:0000:0001">unsupportedCaptureOutputClasses</span>

<span class="ko-segment" data-segment-id="seg:paragraph:unsupportedcaptureoutputclasses:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:unsupportedcaptureoutputclasses:0002:0001">이 형식으로 캡처할 수 없는 캡처 출력 하위 클래스 목록입니다(해당되는 경우).</span>

<span class="ko-segment" data-segment-id="seg:paragraph:unsupportedcaptureoutputclasses:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:unsupportedcaptureoutputclasses:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:unsupportedcaptureoutputclasses:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:unsupportedcaptureoutputclasses:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:unsupportedcaptureoutputclasses:0004:0004">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var unsupportedCaptureOutputClasses: [AnyClass] { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">A preview layer begins displaying content when you call the capture session’s <a href="avcapturesession/startrunning(">@@TOKEN_0@@</a>.md) method.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">If you associate the layer with an instance of <a href="avcapturemulticamsession.md">@@TOKEN_0@@</a>, the system guarantees that all video preview layers display content by the time the blocking call to <a href="avcapturesession/startrunning(">@@TOKEN_1@@</a>.md) or <a href="avcapturesession/commitconfiguration(">@@TOKEN_2@@</a>.md) returns.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">예를 들어 대역폭 제한으로 인해 고해상도 사진 캡처용 형식은 <a href="avcapturemoviefileoutput.md">@@TOKEN_0@@</a> 클래스를 지원하지 않을 수 있습니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/unsupportedcaptureoutputclasses">View on Apple Developer</a>*</span>

---
source_path: "documentation/AVFoundation/avcapturedeviceinput/iscinematicvideocaptureenabled.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedeviceinput/iscinematicvideocaptureenabled"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:iscinematicvideocaptureenabled:0000:0001">isCinematicVideoCaptureEnabled</span>

<span class="ko-segment" data-segment-id="seg:paragraph:iscinematicvideocaptureenabled:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:iscinematicvideocaptureenabled:0002:0001">캡처 세션에 추가된 movie file output, video data output, metadata output, 또는 video preview layer 중 하나에 Cinematic Video 효과가 적용되는지 지정하는 <code>BOOL</code> 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:iscinematicvideocaptureenabled:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:iscinematicvideocaptureenabled:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:iscinematicvideocaptureenabled:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:iscinematicvideocaptureenabled:0004:0003">Mac Catalyst 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:iscinematicvideocaptureenabled:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:iscinematicvideocaptureenabled:0004:0005">tvOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var isCinematicVideoCaptureEnabled: Bool { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">기본값은 <code>false</code>입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">Cinematic Video 캡처 지원을 사용하려면 <code>true</code>로 설정합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이 속성을 <code>true</code>로 설정하면, 해당 입력의 <a href="avcapturedevice/focusmode-swift.property.md">@@TOKEN_1@@</a>와 연결된 값이 <code>AVCaptureFocusModeContinuousAutoFocus</code>로 변경됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">Cinematic Video 캡처가 활성화된 동안에는 장치의 초점 모드를 변경할 수 없으며, 이를 시도하면 <code>NSInvalidArgumentException</code>이 발생합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0003">이 속성은 <a href="avcapturedeviceinput/iscinematicvideocapturesupported.md">@@TOKEN_0@@</a>가 <code>true</code>인 경우에만 <code>true</code>로 설정할 수 있습니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0010:0001">**Note**: Enabling Cinematic Video capture requires a lengthy reconfiguration of the capture render pipeline, so if you intend to capture Cinematic Video, you should set this property to <code>true</code> before calling <a href="avcapturesession/startrunning(">@@TOKEN_1@@</a>.md) or within <a href="avcapturesession/beginconfiguration(">@@TOKEN_2@@</a>.md) and <a href="avcapturesession/commitconfiguration(">@@TOKEN_3@@</a>.md) while running.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcapturedeviceinput/iscinematicvideocapturesupported.md">var isCinematicVideoCaptureSupported: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">Cinematic Video 캡처 지원 여부를 지정하는 <code>BOOL</code> 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcapturedeviceinput/simulatedaperture.md">var simulatedAperture: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">얕은 피사계 심도를 시뮬레이션하는 조리개입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedeviceinput/iscinematicvideocaptureenabled">View on Apple Developer</a>*</span>

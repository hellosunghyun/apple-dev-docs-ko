---
source_path: "documentation/AVFoundation/avcapturedeviceinput/simulatedaperture.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedeviceinput/simulatedaperture"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:simulatedaperture:0000:0001">simulatedAperture</span>

<span class="ko-segment" data-segment-id="seg:paragraph:simulatedaperture:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:simulatedaperture:0002:0001">시뮬레이션된 얕은 피사계 심도 조리개입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:simulatedaperture:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:simulatedaperture:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:simulatedaperture:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:simulatedaperture:0004:0003">Mac Catalyst 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:simulatedaperture:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:simulatedaperture:0004:0005">tvOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var simulatedAperture: Float { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">Retrieve the underlying error from the notification’s user information dictionary using the key <a href="avcapturesessionerrorkey.md">@@TOKEN_0@@</a>.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이 속성은 <a href="avcapturedeviceinput/iscinematicvideocaptureenabled.md">@@TOKEN_0@@</a>가 <code>true</code>로 설정된 경우에만 적용됩니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0010:0001">❗ **중요**: 이 속성을 <code>AVCaptureDevice/activeFormat/minSimulatedAperture</code>보다 작은 값이나 <code>AVCaptureDevice/activeFormat/maxSimulatedAperture</code>보다 큰 값으로 설정하면 <code>NSRangeException</code>이 발생합니다. 이 속성은 <code>AVCaptureDevice/activeFormat/minSimulatedAperture</code>가 0이 아닌 값을 반환하는 경우에만 설정할 수 있으며, 그렇지 않으면 <code>NSInvalidArgumentException</code>이 발생합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0010:0002">이 속성은 Cinematic Video 캡처를 시작하기 전에 설정해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0010:0003">녹화가 진행 중일 때 설정하려고 하면 <code>NSInvalidArgumentException</code>이 발생합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">이 속성은 연결된 <code>AVCaptureDevice/activeFormat/defaultSimulatedAperture</code> 값으로 초기화됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0001">이 속성은 key-value 관찰이 가능합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcapturedeviceinput/iscinematicvideocapturesupported.md">var isCinematicVideoCaptureSupported: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">Cinematic Video 캡처 지원 여부를 지정하는 BOOL 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avcapturedeviceinput/iscinematicvideocaptureenabled.md">var isCinematicVideoCaptureEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">이 값은 캡처 세션에 추가된 movie file output, video data output, metadata output, video preview layer에서 Cinematic Video 효과가 적용되는지를 지정하는 BOOL 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedeviceinput/simulatedaperture">View on Apple Developer</a>*</span>

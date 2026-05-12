---
source_path: "documentation/ARKit/arconfiguration/videohdrallowed.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arconfiguration/videohdrallowed"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:videohdrallowed:0000:0001">videoHDRAllowed</span>

<span class="ko-segment" data-segment-id="seg:paragraph:videohdrallowed:0001:0001">**Framework**: ARKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:videohdrallowed:0002:0001">이 속성은 세션의 카메라 피드에서 HDR(고동적 범위)을 활성화합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:videohdrallowed:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:videohdrallowed:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:videohdrallowed:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:videohdrallowed:0004:0003">Mac Catalyst 16.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var videoHDRAllowed: Bool { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">This property returns a value in the range <code>0.0</code> to <code>1.0</code>, with <code>0.0</code> representing the minimum volume, and <code>1.0</code> representing the maximum volume.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="arconfiguration/videoformat-swift.property.md">var videoFormat: ARConfiguration.VideoFormat</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">세션 출력의 비디오 형식입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001">[class var supportedVideoFormats: [ARConfiguration.VideoFormat]](avaudiosession/port/bluetoothhfp.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">현재 기기에서 사용할 수 있는 비디오 캡처 형식의 집합입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="arconfiguration/videoformat-swift.class.md">ARConfiguration.VideoFormat</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">AR 세션에서 사용되는 비디오 크기 및 프레임 속도 사양입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="arconfiguration/configurablecapturedeviceforprimarycamera.md">class var configurableCaptureDeviceForPrimaryCamera: AVCaptureDevice?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">프레임의 캡처된 이미지 모양을 변경할 수 있도록 해주는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="arconfiguration/recommendedvideoformatfor4kresolution.md">class var recommendedVideoFormatFor4KResolution: ARConfiguration.VideoFormat?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">기기와 구성에서 지원하는 경우 4K 비디오 형식을 제공합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="arconfiguration/recommendedvideoformatforhighresolutionframecapturing.md">class var recommendedVideoFormatForHighResolutionFrameCapturing: ARConfiguration.VideoFormat?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">이 프레임워크가 고해상도 정지 이미지 캡처에 권장하는 비디오 형식을 반환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/arkit/arconfiguration/videohdrallowed">View on Apple Developer</a>*</span>

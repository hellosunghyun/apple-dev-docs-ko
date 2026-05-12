---
source_path: "documentation/ARKit/arconfiguration/recommendedvideoformatfor4kresolution.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arconfiguration/recommendedvideoformatfor4kresolution"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:recommendedvideoformatfor4kresolution:0000:0001">recommendedVideoFormatFor4KResolution</span>

<span class="ko-segment" data-segment-id="seg:paragraph:recommendedvideoformatfor4kresolution:0001:0001">**Framework**: ARKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:recommendedvideoformatfor4kresolution:0002:0001">기기와 구성이 이를 지원하는 경우 4K 비디오 형식을 제공합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:recommendedvideoformatfor4kresolution:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:recommendedvideoformatfor4kresolution:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:recommendedvideoformatfor4kresolution:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:recommendedvideoformatfor4kresolution:0004:0003">Mac Catalyst 16.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class var recommendedVideoFormatFor4KResolution: ARConfiguration.VideoFormat? { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">기기와 구성이 4K를 지원하면, 반환된 비디오 형식이 구성의 <a href="arconfiguration/supportedvideoformats.md">@@TOKEN_0@@</a> 배열에도 존재합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이 함수는 기기 또는 구성에서 4K를 지원하지 않으면 <code>nil</code>을 반환하므로, 세션에서 4K를 활성화할지 판단할 때 이 함수를 호출할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="arconfiguration/videoformat-swift.property.md">var videoFormat: ARConfiguration.VideoFormat</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">세션 출력의 비디오 형식입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001">[class var supportedVideoFormats: [ARConfiguration.VideoFormat]](arconfiguration/supportedvideoformats.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">현재 기기에서 사용할 수 있는 비디오 캡처 형식 집합입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="arconfiguration/videoformat-swift.class.md">ARConfiguration.VideoFormat</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">AR 세션에서 사용할 비디오 크기와 프레임 속도 사양입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="arconfiguration/videohdrallowed.md">var videoHDRAllowed: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">*<a href="https://developer.apple.com/documentation/arkit/arreferenceobject/applyingtransform(_:">View on Apple Developer</a>)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="arconfiguration/configurablecapturedeviceforprimarycamera.md">class var configurableCaptureDeviceForPrimaryCamera: AVCaptureDevice?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">프레임의 캡처 이미지 모양을 변경할 수 있게 해주는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="arconfiguration/recommendedvideoformatforhighresolutionframecapturing.md">class var recommendedVideoFormatForHighResolutionFrameCapturing: ARConfiguration.VideoFormat?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">프레임워크에서 고해상도 정지 이미지 캡처를 위해 권장하는 비디오 형식을 반환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">*<a href="https://developer.apple.com/documentation/arkit/arconfiguration/recommendedvideoformatfor4kresolution">View on Apple Developer</a>*</span>

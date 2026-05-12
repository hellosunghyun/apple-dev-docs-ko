---
source_path: "documentation/ARKit/arconfiguration/configurablecapturedeviceforprimarycamera.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arconfiguration/configurablecapturedeviceforprimarycamera"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:configurablecapturedeviceforprimarycamera:0000:0001">configurableCaptureDeviceForPrimaryCamera</span>

<span class="ko-segment" data-segment-id="seg:paragraph:configurablecapturedeviceforprimarycamera:0001:0001">**Framework**: ARKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:configurablecapturedeviceforprimarycamera:0002:0001">프레임의 캡처된 이미지의 모양을 변경할 수 있게 하는 객체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:configurablecapturedeviceforprimarycamera:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:configurablecapturedeviceforprimarycamera:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:configurablecapturedeviceforprimarycamera:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:configurablecapturedeviceforprimarycamera:0004:0003">Mac Catalyst 16.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class var configurableCaptureDeviceForPrimaryCamera: AVCaptureDevice? { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">The figure below shows a face geometry (see <a href="arscnfacegeometry.md">@@TOKEN_0@@</a>) in two states, demonstrating values of <code>0.0</code> and <code>1.0</code> for this coefficient.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">In both states, the values for all other <a href="arfaceanchor/blendshapelocation.md">@@TOKEN_0@@</a> coefficients are set to <code>0.0</code>.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">장치의 설정은 신중하게 변경해야 합니다. 과도한 변경은 <a href="https://docs-assets.developer.apple.com/published/e6fbc01a3a640483d8b59d18e67b0752/media-2930066%402x.png">@@TOKEN_0@@</a>에 의존하고 그 무결성에 기반한 ARKit 기능(예: <a href="arconfiguration/framesemantics-swift.struct/personsegmentation.md">@@TOKEN_1@@</a> 기반 사람 가림) 에 영향을 줄 수 있습니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0010:0001">❗ **중요**: 이 property는 울트라 와이드 카메라가 장착되지 않은 기기에서는 <code>nil</code>입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="arconfiguration/videoformat-swift.property.md">var videoFormat: ARConfiguration.VideoFormat</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">세션 출력의 비디오 형식입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001">[class var supportedVideoFormats: [ARConfiguration.VideoFormat]](arconfiguration/supportedvideoformats.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">현재 기기에서 사용 가능한 비디오 캡처 형식 집합입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="arconfiguration/videoformat-swift.class.md">ARConfiguration.VideoFormat</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">AR 세션에서 사용하는 비디오 크기 및 프레임 레이트 사양입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="arconfiguration/videohdrallowed.md">var videoHDRAllowed: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">세션 카메라 피드에서 고동적 범위(HDR)를 활성화합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="arconfiguration/recommendedvideoformatfor4kresolution.md">class var recommendedVideoFormatFor4KResolution: ARConfiguration.VideoFormat?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">기기와 구성이 지원하면 4K 비디오 형식을 제공합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="arconfiguration/recommendedvideoformatforhighresolutionframecapturing.md">class var recommendedVideoFormatForHighResolutionFrameCapturing: ARConfiguration.VideoFormat?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">이 framework가 고해상도 정지 이미지 캡처에 권장하는 비디오 형식을 반환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">*<a href="https://developer.apple.com/documentation/arkit/arconfiguration/configurablecapturedeviceforprimarycamera">View on Apple Developer</a>*</span>

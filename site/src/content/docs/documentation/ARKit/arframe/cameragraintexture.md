---
source_path: "documentation/ARKit/arframe/cameragraintexture.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arframe/cameragraintexture"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:cameragraintexture:0000:0001">cameraGrainTexture</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cameragraintexture:0001:0001">**Framework**: ARKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cameragraintexture:0002:0001">현재 비디오 스트림의 시각적 특성에 맞춘 ARKit 생성 타일형 Metal 텍스처입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cameragraintexture:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:cameragraintexture:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:cameragraintexture:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:cameragraintexture:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var cameraGrainTexture: (any MTLTexture)? { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">This corresponds to <code>kAudioDevicePropertyLatency</code> and <code>kAudioStreamPropertyLatency</code>.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">!<a href="https://docs-assets.developer.apple.com/published/91ac97857a79016f3be51942ca95e735/media-3261294%402x.png">앱의 가상 콘텐츠에 이미지 노이즈를 적용했을 때의 적용 전후 사례를 보여 주는 스크린샷입니다.</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">렌더러가 <a href="arscnview.md">@@TOKEN_0@@</a>인 경우, SceneKit은 기본적으로 앱의 가상 콘텐츠에 카메라 grain을 적용합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">자세한 내용은 <a href="arscnview/renderscameragrain.md">@@TOKEN_0@@</a>를 참조합니다.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:enable-image-noise-on-a-custom-renderer:0011:0001">커스텀 렌더러에서 이미지 노이즈 활성화</span>

<span class="ko-segment" data-segment-id="seg:paragraph:enable-image-noise-on-a-custom-renderer:0012:0001">커스텀 Metal 렌더러를 사용하는 앱의 경우, ARKit는 현재 비디오 스트림에서 감지된 노이즈와 일치하는 <a href="arframe/cameragraintexture.md">@@TOKEN_0@@</a> 를 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:enable-image-noise-on-a-custom-renderer:0012:0002">노이즈 텍스처를 렌더러에 설정하여 그 특성을 가상 콘텐츠에 적용합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:enable-image-noise-on-a-custom-renderer:0013:0001">이미지 노이즈 텍스처의 깊이 차원에는 현재 프레임의 <a href="arframe/cameragrainintensity.md">@@TOKEN_0@@</a>를 기반으로 런타임에서 선택하는 변화가 포함됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0014:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="arframe/camera.md">var camera: ARCamera</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">프레임을 캡처할 때 사용되는 카메라 위치, 방향 및 이미지 매개변수에 대한 정보입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="arframe/capturedimage.md">var capturedImage: CVPixelBuffer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">카메라로 캡처된 이미지를 포함하는 픽셀 버퍼입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="arframe/timestamp.md">var timestamp: TimeInterval</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">프레임이 캡처된 시각입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="arframe/cameragrainintensity.md">var cameraGrainIntensity: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">카메라 grain 텍스처에 포함되는 grain 양을 지정하는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001">[var exifData: [String : Any]](arframe/exifdata.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">캡처된 이미지의 보조 데이터입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">*<a href="https://developer.apple.com/documentation/arkit/arframe/cameragraintexture">View on Apple Developer</a>*</span>

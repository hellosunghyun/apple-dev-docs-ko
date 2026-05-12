---
source_path: "documentation/ARKit/cameravideoformat/camerapositions.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/cameravideoformat/camerapositions"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:camerapositions:0000:0001">cameraPositions</span>

<span class="ko-segment" data-segment-id="seg:paragraph:camerapositions:0001:0001">**Framework**: ARKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:camerapositions:0002:0001">이 비디오 형식의 카메라 위치입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:camerapositions:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:camerapositions:0004:0001">visionOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var cameraPositions: [CameraFrameProvider.CameraPosition] { get }
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="cameravideoformat/cameratype.md">var cameraType: CameraFrameProvider.CameraType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">이 비디오 형식의 카메라 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="cameravideoformat/framesize.md">var frameSize: CGSize</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">이 비디오 형식의 프레임 크기입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="cameravideoformat/pixelformat.md">var pixelFormat: OSType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">이 비디오 형식의 픽셀 형식입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="cameravideoformat/maxframeduration.md">var maxFrameDuration: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">이 비디오 형식의 최대 프레임 지속 시간(초)입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="cameravideoformat/minframeduration.md">var minFrameDuration: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">이 비디오 형식의 최소 프레임 지속 시간(초)입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001">[static func supportedVideoFormats(for: CameraFrameProvider.CameraType, cameraPositions: [CameraFrameProvider.CameraPosition]) -&gt; [CameraVideoFormat]](cameravideoformat/supportedvideoformats(for:camerapositions:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">지정한 카메라 유형과 카메라 위치가 지원하는 비디오 형식을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="cameravideoformat/description.md">var description: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">이 카메라 비디오 형식의 텍스트 표현입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/arkit/cameravideoformat/camerapositions">View on Apple Developer</a>*</span>

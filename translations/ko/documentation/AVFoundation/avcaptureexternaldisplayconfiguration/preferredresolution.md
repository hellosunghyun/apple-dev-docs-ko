---
source_path: "documentation/AVFoundation/avcaptureexternaldisplayconfiguration/preferredresolution.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcaptureexternaldisplayconfiguration/preferredresolution"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:preferredresolution:0000:0001">preferredResolution</span>

<span class="ko-segment" data-segment-id="seg:paragraph:preferredresolution:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:preferredresolution:0002:0001">원하는 외부 디스플레이 해상도입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:preferredresolution:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:preferredresolution:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:preferredresolution:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:preferredresolution:0004:0003">Mac Catalyst 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:preferredresolution:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:preferredresolution:0004:0005">tvOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var preferredResolution: CMVideoDimensions { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001"><a href="avcaptureexternaldisplayconfiguration/preferredresolution.md">@@TOKEN_0@@</a>를 사용해 외부 디스플레이의 원하는 해상도를 설정합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">기본값이 { 0, 0 }으로 남아 있으면 외부 디스플레이의 기본 해상도가 사용됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avcaptureexternaldisplayconfiguration/bypasscolorspaceconversion.md">var bypassColorSpaceConversion: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">색 공간 변환을 피함으로써 구성자의 미리보기 레이어 color space를 출력 디스플레이에서 유지해야 하는지 나타내는 속성입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcaptureexternaldisplayconfiguration/shouldmatchframerate.md">var shouldMatchFrameRate: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">외부 디스플레이의 프레임 레이트를 카메라의 프레임 레이트에 맞추어 구성해야 하는지 나타내는 속성입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcaptureexternaldisplayconfiguration/preferredresolution">View on Apple Developer</a>*</span>

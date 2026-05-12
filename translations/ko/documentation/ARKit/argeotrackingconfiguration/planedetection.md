---
source_path: "documentation/ARKit/argeotrackingconfiguration/planedetection.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/argeotrackingconfiguration/planedetection"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:planedetection:0000:0001">planeDetection</span>

<span class="ko-segment" data-segment-id="seg:paragraph:planedetection:0001:0001">**Framework**: ARKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:planedetection:0002:0001">이 값은 세션이 카메라 캡처 이미지에서 평면을 자동으로 감지하려는지와 감지 방식을 지정합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:planedetection:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:planedetection:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:planedetection:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:planedetection:0004:0003">Mac Catalyst 14.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var planeDetection: ARWorldTrackingConfiguration.PlaneDetection { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">기본적으로 이 구성은 평면 감지를 비활성화합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">When ARKit observes a matching image, the framework creates an <a href="arimageanchor.md">@@TOKEN_0@@</a> object and adds it to the session.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="arworldtrackingconfiguration/planedetection-swift.struct.md">ARWorldTrackingConfiguration.PlaneDetection</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">캡처된 이미지에서 평평한 표면을 감지할지와 감지 방식을 지정하는 옵션입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">*<a href="https://developer.apple.com/documentation/arkit/argeotrackingconfiguration/planedetection">View on Apple Developer</a>*</span>

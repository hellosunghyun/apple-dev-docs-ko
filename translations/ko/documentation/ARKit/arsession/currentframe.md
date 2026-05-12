---
source_path: "documentation/ARKit/arsession/currentframe.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arsession/currentframe"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:currentframe:0000:0001">currentFrame</span>

<span class="ko-segment" data-segment-id="seg:paragraph:currentframe:0001:0001">**Framework**: ARKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:currentframe:0002:0001">ARKit의 해석을 포함해 활성 카메라 피드에서 캡처한 최신 정지 프레임입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:currentframe:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:currentframe:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:currentframe:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:currentframe:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
@NSCopying
var currentFrame: ARFrame? { get }
```

## <span class="ko-segment" data-segment-id="seg:heading:mentions:0007:0001">Mentions</span>

- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0001"><a href="enhancing-your-app-experience-with-the-camera-control.md">Displaying an AR Experience with Metal</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">추가 참조</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="arframe.md">class ARFrame</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">위치 추적 정보가 포함된 세션의 일부로 캡처된 비디오 이미지입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="arsession/capturehighresolutionframe(completion:">func captureHighResolutionFrame(completion: (ARFrame?, (any Error)?) -&gt; Void)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">일반 주기 밖에서 고해상도 캡처 이미지를 포함한 프레임을 요청합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/arkit/arsession/currentframe">View on Apple Developer</a>*</span>

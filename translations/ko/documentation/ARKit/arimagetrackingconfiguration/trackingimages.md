---
source_path: "documentation/ARKit/arimagetrackingconfiguration/trackingimages.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arimagetrackingconfiguration/trackingimages"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:trackingimages:0000:0001">trackingImages</span>

<span class="ko-segment" data-segment-id="seg:paragraph:trackingimages:0001:0001">**Framework**: ARKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:trackingimages:0002:0001">ARKit이 사용자 환경에서 검색하고 추적하는 이미지 집합입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:trackingimages:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:trackingimages:0004:0001">iOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:trackingimages:0004:0002">iPadOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:trackingimages:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var trackingImages: Set<ARReferenceImage> { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 집합에 사용자 환경에서 ARKit이 검색할 각 이미지를 추가합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">ARKit이 일치하는 이미지를 감지하면 프레임워크가 <a href="arimageanchor.md">@@TOKEN_0@@</a> 객체를 생성해 세션에 추가합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003"><a href="arworldtrackingconfiguration/maximumnumberoftrackedimages.md">@@TOKEN_0@@</a> 값을 <code>1</code>보다 크게 설정하면 ARKit는 세션 진행 중 최대 4개까지 여러 이미지를 추적합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이 속성이 포함하는 참조 이미지를 정의하려면 Xcode에서 에셋 카탈로그를 생성하거나 <a href="arreferenceimage.md">@@TOKEN_0@@</a> 객체를 프로그래밍 방식으로 생성하면 됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">예시는 <a href="tracking-and-altering-images.md">@@TOKEN_0@@</a>에서 확인할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="arimagetrackingconfiguration/maximumnumberoftrackedimages.md">var maximumNumberOfTrackedImages: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">위치 및 방향 업데이트를 면밀히 모니터링할 이미지 앵커 수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">*<a href="https://developer.apple.com/documentation/arkit/arimagetrackingconfiguration/trackingimages">View on Apple Developer</a>*</span>

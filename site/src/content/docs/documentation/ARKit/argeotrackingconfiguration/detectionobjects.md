---
source_path: "documentation/ARKit/argeotrackingconfiguration/detectionobjects.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/argeotrackingconfiguration/detectionobjects"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:detectionobjects:0000:0001">detectionObjects</span>

<span class="ko-segment" data-segment-id="seg:paragraph:detectionobjects:0001:0001">**Framework**: ARKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:detectionobjects:0002:0001">프레임워크가 사용자 환경에서 감지하려고 시도하는 3D 객체의 집합입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:detectionobjects:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:detectionobjects:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:detectionobjects:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:detectionobjects:0004:0003">Mac Catalyst 14.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var detectionObjects: Set<ARReferenceObject> { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 속성을 사용하면 ARKit가 사용자 환경에서 알려진 3D 객체를 찾아 <a href="arobjectanchor.md">@@TOKEN_0@@</a>로 표시하고 AR 경험에서 사용할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">감지를 위한 참조 객체를 만들려면 월드 트래킹 세션에서 스캔한 다음 <a href="arworldmap.md">@@TOKEN_0@@</a>를 사용해 <a href="arreferenceobject.md">@@TOKEN_1@@</a> 인스턴스를 추출합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">그런 다음 참조 객체를 파일로 저장하고 Xcode asset catalog를 사용해 만들기 원하는 ARKit 앱에 패키징할 수 있습니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">*<a href="https://developer.apple.com/documentation/arkit/argeotrackingconfiguration/detectionobjects">View on Apple Developer</a>*</span>

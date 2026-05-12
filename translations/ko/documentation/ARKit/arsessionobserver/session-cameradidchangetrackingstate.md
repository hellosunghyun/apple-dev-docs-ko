---
source_path: "documentation/ARKit/arsessionobserver/session-cameradidchangetrackingstate.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arsessionobserver/session-cameradidchangetrackingstate"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sessioncameradidchangetrackingstate:0000:0001">session(_:cameraDidChangeTrackingState:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sessioncameradidchangetrackingstate:0001:0001">**Framework**: ARKit **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sessioncameradidchangetrackingstate:0002:0001">ARKit의 장치 위치 추적 품질 변경 사항을 delegate에 알립니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sessioncameradidchangetrackingstate:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:sessioncameradidchangetrackingstate:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sessioncameradidchangetrackingstate:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sessioncameradidchangetrackingstate:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
optional func session(_ session: ARSession, cameraDidChangeTrackingState camera: ARCamera)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">ARKit은 모션 센싱과 이미지 처리의 조합으로 가상 장면에 대한 장치의 위치와 방향을 추적합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">따라서 장치의 모션 센싱 하드웨어 신호 품질에 영향을 주는 요인이나 카메라 이미지에서 장면 감지를 방해하는 요인은 장치 위치 추정치가 가상 장면에 대해 부정확해질 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>view</code>: The <a href="arskview.md">@@TOKEN_1@@</a> object rendering the scene.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>node</code>: The removed SpriteKit node.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="arskviewdelegate/view(_:nodefor:">func session(ARSession, didChange: ARGeoTrackingStatus)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">지오 트래킹 상태 변경을 수신하고 반응합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/arkit/arsessionobserver/session(_:cameradidchangetrackingstate:">Apple Developer에서 보기</a>)*</span>

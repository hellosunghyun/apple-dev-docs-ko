---
source_path: "documentation/ARKit/arsession/runoptions/resetscenereconstruction.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arsession/runoptions/resetscenereconstruction"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:resetscenereconstruction:0000:0001">resetSceneReconstruction</span>

<span class="ko-segment" data-segment-id="seg:paragraph:resetscenereconstruction:0001:0001">**Framework**: ARKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:resetscenereconstruction:0002:0001">씬 메시를 재설정하는 옵션입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:resetscenereconstruction:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:resetscenereconstruction:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:resetscenereconstruction:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:resetscenereconstruction:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static var resetSceneReconstruction: ARSession.RunOptions { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">씬 재구성을 재설정하면 ARKit은 세션에서 기존의 메시 앵커(<a href="armeshanchor.md">@@TOKEN_0@@</a>)를 모두 제거합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="arsession/runoptions/resettracking.md">static var resetTracking: ARSession.RunOptions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">세션의 이전 실행에서 기기 위치를 재설정하는 옵션입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="arsession/runoptions/removeexistinganchors.md">static var removeExistingAnchors: ARSession.RunOptions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">세션의 이전 실행과 연관된 모든 앵커 객체를 제거하는 옵션입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="arsession/runoptions/stoptrackedraycasts.md">static var stopTrackedRaycasts: ARSession.RunOptions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">모든 활성 추적 raycast를 중지하는 옵션입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/arkit/arsession/runoptions/resetscenereconstruction">View on Apple Developer</a>*</span>

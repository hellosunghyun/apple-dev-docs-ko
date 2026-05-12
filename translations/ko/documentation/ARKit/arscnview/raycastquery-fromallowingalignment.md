---
source_path: "documentation/ARKit/arscnview/raycastquery-fromallowingalignment.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arscnview/raycastquery-fromallowingalignment"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:raycastqueryfromallowingalignment:0000:0001">raycastQuery(from:allowing:alignment:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:raycastqueryfromallowingalignment:0001:0001">**Framework**: ARKit **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:raycastqueryfromallowingalignment:0002:0001">뷰의 한 지점에서 시작되고 카메라 시야의 중심과 정렬되는 raycast 쿼리를 생성합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:raycastqueryfromallowingalignment:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:raycastqueryfromallowingalignment:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:raycastqueryfromallowingalignment:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:raycastqueryfromallowingalignment:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func raycastQuery(from point: CGPoint, allowing target: ARRaycastQuery.Target, alignment: ARRaycastQuery.TargetAlignment) -> ARRaycastQuery?
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 함수를 호출하면 ARKit는 인수로 지정한 화면 공간 지점에서 양의 z축 방향으로 확장되는 광선을 생성해, 물리적 환경에서 광선 상에 인수로 지정한 대상이 있는지 확인합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">대상이 존재하면 ARKit는 광선이 대상과 교차하는 3D 위치를 반환합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001">[func hitTest(CGPoint, types: ARHitTestResult.ResultType) -&gt; [ARHitTestResult]](avaudiorecorderdelegate/audiorecorderendinterruption(_:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">SceneKit 뷰의 한 점에 해당하는 캡처된 카메라 이미지에서 실제 환경 객체 또는 AR 앵커를 검색합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">*<a href="https://developer.apple.com/documentation/arkit/arscnview/raycastquery(from:allowing:alignment:">View on Apple Developer</a>)*</span>

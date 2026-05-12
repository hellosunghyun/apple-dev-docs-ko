---
source_path: "documentation/ARKit/arhittestresult/resulttype/estimatedverticalplane.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arhittestresult/resulttype/estimatedverticalplane"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:estimatedverticalplane:0000:0001">estimatedVerticalPlane</span>

<span class="ko-segment" data-segment-id="seg:paragraph:estimatedverticalplane:0001:0001">**Framework**: ARKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:estimatedverticalplane:0002:0001">검색 중 감지된 실세계 평면 표면의 점으로, 방향이 중력과 평행한 점입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:estimatedverticalplane:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:estimatedverticalplane:0004:0001">iOS 11.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:estimatedverticalplane:0004:0002">iPadOS 11.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:estimatedverticalplane:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static var estimatedVerticalPlane: ARHitTestResult.ResultType { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">ARKit는 장면에서 실세계의 평면 표면을 찾는 두 가지 방법을 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">세션 구성에서 <a href="arworldtrackingconfiguration/planedetection-swift.property.md">@@TOKEN_0@@</a>으로 활성화되는 *Plane detection*은 지속적인 과정으로, 화면에 보이는 평면의 위치와 범위를 정확히 매핑하기 위해 장면을 계속 분석합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">평면 감지에는 시간이 걸리므로, 카메라 이미지의 2D 점이 실세계의 평면 표면과 대응하는지에 대한 즉각적인 표시를 더 정확하지 않더라도 얻기 위해 *plane estimation*으로 폴백할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">평면 탐지 결과는 평면 추정 결과보다 더 정확하므로, ARKit는 두 경우 모두 검색할 때 앞의 방식을 우선합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">hit-test 검색에 <a href="arhittestresult/resulttype/estimatedverticalplane.md">@@TOKEN_0@@</a>와 하나 이상의 <a href="arhittestresult/resulttype/existingplane.md">@@TOKEN_1@@</a> 유형이 모두 포함되고 검색에서 이미 탐지된 평면 앵커를 찾으면, 해당 검색은 기존 평면만 반환하고 추정 평면은 반환하지 않습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">추정 평면 검색은 최대 한 개의 결과만 반환하며, 이는 hit-test 광선과 교차하는 수직 평면에 대한 최적 추정치입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="arhittestresult/resulttype/featurepoint.md">static var featurePoint: ARHitTestResult.ResultType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">ARKit가 감지한 표면의 점이지만, 감지된 어떤 평면에도 속하지 않는 점입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="arhittestresult/resulttype/estimatedhorizontalplane.md">static var estimatedHorizontalPlane: ARHitTestResult.ResultType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">검색 중 감지된 실세계 평면 표면의 점으로, 방향이 중력과 수직인 점입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="arhittestresult/resulttype/existingplane.md">static var existingPlane: ARHitTestResult.ResultType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">실세계의 평면(세션 구성에서 <a href="arworldtrackingconfiguration/planedetection-swift.property.md">@@TOKEN_0@@</a> 옵션으로 이미 감지된) 점으로, 평면의 크기는 고려하지 않습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="arhittestresult/resulttype/existingplaneusingextent.md">static var existingPlaneUsingExtent: ARHitTestResult.ResultType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">실세계의 평면(세션 구성에서 <a href="arworldtrackingconfiguration/planedetection-swift.property.md">@@TOKEN_0@@</a> 옵션으로 이미 감지된) 점으로, 평면의 추정 크기를 반영합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="arhittestresult/resulttype/existingplaneusinggeometry.md">static var existingPlaneUsingGeometry: ARHitTestResult.ResultType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">실세계의 평면(세션 구성에서 <a href="arworldtrackingconfiguration/planedetection-swift.property.md">@@TOKEN_0@@</a> 옵션으로 이미 감지된) 점으로, 평면의 추정 크기와 형태를 반영합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/arkit/arhittestresult/resulttype/estimatedverticalplane">View on Apple Developer</a>*</span>

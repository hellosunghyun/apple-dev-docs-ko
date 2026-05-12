---
source_path: "documentation/ARKit/artrackedraycast.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/artrackedraycast"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:artrackedraycast:0000:0001">ARTrackedRaycast</span>

<span class="ko-segment" data-segment-id="seg:paragraph:artrackedraycast:0001:0001">**Framework**: ARKit **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:artrackedraycast:0002:0001">ARKit가 시간이 지남에 따라 점진적으로 정제된 결과를 제공하도록 연속으로 반복하는 레이캐스트 쿼리입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:artrackedraycast:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:artrackedraycast:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:artrackedraycast:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:artrackedraycast:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class ARTrackedRaycast
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">추적 레이캐스팅은 3D 위치에 대한 쿼리를 연속으로 반복하여 히트 테스트 기법을 개선합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0002">ARKit는 세션이 월드에 대한 이해를 시간이 지남에 따라 정제하면서 갱신된 위치를 제공합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0001">추적 레이캐스트를 시작하려면 앱의 현재 <a href="arsession.md">@@TOKEN_0@@</a>에서 <a href="arsession/trackedraycast(_:updatehandler:">@@TOKEN_1@@</a>.md) 메서드를 호출합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0010:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:stopping-tracking:0011:0001">추적 중지</span>

- <span class="ko-segment" data-segment-id="seg:list:stopping-tracking:0012:0001"><a href="artrackedraycast/stoptracking.md">func stopTracking()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:stopping-tracking:0013:0001">레이캐스트 쿼리의 반복 실행을 중지합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0014:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0015:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0016:0001"><a href="../ObjectiveC/NSObject-swift.class.md">NSObject</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0017:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0018:0001"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0018:0002"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0018:0003"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0018:0004"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0018:0005"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0018:0006"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0019:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="placing-objects-and-handling-3d-interaction.md">Placing objects and handling 3D interaction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">추적된 실제 세계 위치에 가상 콘텐츠를 배치하고, 제스처를 사용해 사용자가 가상 콘텐츠와 상호작용할 수 있도록 합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="arraycastquery.md">class ARRaycastQuery</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">실제 세계 표면에서 3D 위치를 찾는 데 사용하는 수학적 광선입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="arraycastresult.md">class ARRaycastResult</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">화면의 한 점을 검사하여 발견된 실제 세계 표면에 대한 정보입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">*<a href="https://developer.apple.com/documentation/arkit/artrackedraycast">View on Apple Developer</a>*</span>

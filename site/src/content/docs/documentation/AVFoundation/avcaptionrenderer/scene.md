---
source_path: "documentation/AVFoundation/avcaptionrenderer/scene.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcaptionrenderer/scene"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avcaptionrendererscene:0000:0001">AVCaptionRenderer.Scene</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcaptionrendererscene:0001:0001">**Framework**: AVFoundation **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcaptionrendererscene:0002:0001">렌더러가 출력을 그리는 시점을 나타내는 시간 범위와 관련된 상태를 보유하는 객체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcaptionrendererscene:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avcaptionrendererscene:0004:0001">iOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcaptionrendererscene:0004:0002">iPadOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcaptionrendererscene:0004:0003">Mac Catalyst 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcaptionrendererscene:0004:0004">macOS 12.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class Scene
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">장면을 렌더링할 때 객체는 캡션과 영역의 존재 여부, 시간적 중첩 및 캡션의 애니메이션 효과 사용 여부와 같은 상태를 고려합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0002">앱은 시각적 차이가 존재하는 시간 범위를 요청하고, 이를 사용해 장면당 한 번 그리기처럼 렌더링 성능을 최적화할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0003">또는 장면을 무시하고 <a href="avcaptionrenderer/render(in:for:">@@TOKEN_0@@</a>.md)를 반복 호출할 수 있지만, 성능에 추가 영향이 있을 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0009:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:inspecting-the-scene:0010:0001">장면 검사</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-the-scene:0011:0001"><a href="avcaptionrenderer/scene/timerange.md">var timeRange: CMTimeRange</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-the-scene:0012:0001">시스템이 장면을 수정하지 않는 시간 범위입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-the-scene:0013:0001"><a href="avcaptionrenderer/scene/hasactivecaptions.md">var hasActiveCaptions: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-the-scene:0014:0001">장면에 하나 이상의 활성 캡션이 포함되는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-the-scene:0015:0001"><a href="avcaptionrenderer/scene/needsperiodicrefresh.md">var needsPeriodicRefresh: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-the-scene:0016:0001">앱이 콘텐츠를 진행하는 동안 장면을 다시 그려야 하는지 나타내는 부울 값입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0017:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0018:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0019:0001"><a href="../ObjectiveC/NSObject-swift.class.md">NSObject</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0020:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0021:0001"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0021:0002"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0021:0003"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0021:0004"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0021:0005"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0021:0006"><a href="../Foundation/NSCopying.md">NSCopying</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0021:0007"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0021:0008"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0021:0009"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0022:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001">[func captionSceneChanges(in: CMTimeRange) -&gt; [AVCaptionRenderer.Scene]](avcaptionrenderer/captionscenechanges(in:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">캡션 간 시각적 변경을 반영하기 위해 상위 시간 범위 내에서 렌더링 시간 범위를 결정합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcaptionrenderer/scene">View on Apple Developer</a>*</span>

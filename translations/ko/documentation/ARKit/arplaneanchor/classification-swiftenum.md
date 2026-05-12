---
source_path: "documentation/ARKit/arplaneanchor/classification-swiftenum.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arplaneanchor/classification-swiftenum"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:arplaneanchorclassification:0000:0001">ARPlaneAnchor.Classification</span>

<span class="ko-segment" data-segment-id="seg:paragraph:arplaneanchorclassification:0001:0001">**Framework**: ARKit **Kind**: enum</span>

<span class="ko-segment" data-segment-id="seg:paragraph:arplaneanchorclassification:0002:0001">평면 앵커가 나타내는 실제 세계 표면의 가능한 분류입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:arplaneanchorclassification:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:arplaneanchorclassification:0004:0001">iOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:arplaneanchorclassification:0004:0002">iPadOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:arplaneanchorclassification:0004:0003">Mac Catalyst 12.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
enum Classification
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">이 유형의 값은 평면 앵커의 <a href="arplaneanchor/classification-2r4x8.md">@@TOKEN_0@@</a> 속성에서 얻으며, 감지된 평면 앵커의 실제 세계 표면 유형과 ARKit의 평면 분류 처리 상태를 모두 식별합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0009:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:plane-classifications:0010:0001">평면 분류</span>

- <span class="ko-segment" data-segment-id="seg:list:plane-classifications:0011:0001"><a href="arplaneanchor/classification-swift.enum/wall.md">ARPlaneAnchor.Classification.wall</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:plane-classifications:0012:0001">평면 앵커는 실제 세계의 벽이나 유사한 큰 수직면을 나타냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:plane-classifications:0013:0001"><a href="arplaneanchor/classification-swift.enum/floor.md">ARPlaneAnchor.Classification.floor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:plane-classifications:0014:0001">평면 앵커는 실제 세계의 바닥, 지면 또는 유사한 큰 수평 표면을 나타냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:plane-classifications:0015:0001"><a href="arplaneanchor/classification-swift.enum/ceiling.md">ARPlaneAnchor.Classification.ceiling</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:plane-classifications:0016:0001">평면 앵커는 실제 세계의 천장이나 유사한 상단 수평 표면을 나타냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:plane-classifications:0017:0001"><a href="arplaneanchor/classification-swift.enum/table.md">ARPlaneAnchor.Classification.table</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:plane-classifications:0018:0001">평면 앵커는 실제 세계의 테이블, 책상, 바 또는 유사한 평평한 표면을 나타냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:plane-classifications:0019:0001"><a href="arplaneanchor/classification-swift.enum/seat.md">ARPlaneAnchor.Classification.seat</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:plane-classifications:0020:0001">평면 앵커는 실제 세계의 의자, 스툴, 벤치 또는 유사한 평평한 표면을 나타냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:plane-classifications:0021:0001"><a href="arplaneanchor/classification-swift.enum/door.md">ARPlaneAnchor.Classification.door</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:plane-classifications:0022:0001">평면 앵커는 실제 세계의 문 또는 유사한 수직 표면을 나타냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:plane-classifications:0023:0001"><a href="arplaneanchor/classification-swift.enum/window.md">ARPlaneAnchor.Classification.window</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:plane-classifications:0024:0001">평면 앵커는 실제 세계의 창문 또는 유사한 수직 표면을 나타냅니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:missing-classification-status:0025:0001">분류 누락 상태</span>

- <span class="ko-segment" data-segment-id="seg:list:missing-classification-status:0026:0001"><a href="arplaneanchor/classification-swift.enum/none(_:">case none(ARPlaneAnchor.Classification.Status)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:missing-classification-status:0027:0001">평면 앵커에 사용 가능한 분류가 없습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:missing-classification-status:0028:0001"><a href="arplaneanchor/classification-swift.enum/status.md">ARPlaneAnchor.Classification.Status</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:missing-classification-status:0029:0001">ARKit이 평면을 분류하지 못하는 이유입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0030:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0031:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0032:0001"><a href="../Swift/Copyable.md">Copyable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0032:0002"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0032:0003"><a href="../Swift/Escapable.md">Escapable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0032:0004"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0032:0005"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0033:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="arplaneanchor/isclassificationsupported.md">class var isClassificationSupported: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">현재 기기에서 평면 분류를 사용할 수 있는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="arplaneanchor/classification-2r4x8.md">var classification: ARPlaneAnchor.Classification</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">평면 앵커가 나타내는 실제 세계 표면의 일반적인 분류입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">*<a href="https://developer.apple.com/documentation/arkit/arplaneanchor/classification-swift.enum">View on Apple Developer</a>*</span>

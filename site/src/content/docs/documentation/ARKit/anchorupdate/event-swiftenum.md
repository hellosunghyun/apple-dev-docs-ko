---
source_path: "documentation/ARKit/anchorupdate/event-swiftenum.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/anchorupdate/event-swiftenum"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:anchorupdateevent:0000:0001">AnchorUpdate.Event</span>

<span class="ko-segment" data-segment-id="seg:paragraph:anchorupdateevent:0001:0001">**Framework**: ARKit **Kind**: enum</span>

<span class="ko-segment" data-segment-id="seg:paragraph:anchorupdateevent:0002:0001">앵커가 추가, 업데이트 또는 제거되었는지 나타내는 이벤트입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:anchorupdateevent:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:anchorupdateevent:0004:0001">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
@frozen
enum Event
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:inspecting-anchor-update-events:0008:0001">앵커 업데이트 이벤트 검사</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-anchor-update-events:0009:0001"><a href="anchorupdate/event-swift.enum/added.md">AnchorUpdate.Event.added</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-anchor-update-events:0010:0001">ARKit가 앵커 추적을 시작할 때 발생하는 이벤트입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-anchor-update-events:0011:0001"><a href="anchorupdate/event-swift.enum/updated.md">AnchorUpdate.Event.updated</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-anchor-update-events:0012:0001">기존 앵커가 데이터를 업데이트할 때 발생하는 이벤트입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:inspecting-anchor-update-events:0013:0001"><a href="anchorupdate/event-swift.enum/removed.md">AnchorUpdate.Event.removed</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:inspecting-anchor-update-events:0014:0001">ARKit가 앵커 추적을 중단할 때 발생하는 이벤트입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:instance-properties:0015:0001">인스턴스 속성</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0016:0001"><a href="anchorupdate/event-swift.enum/description.md">var description: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0017:0001">AnchorUpdate.Event의 텍스트 표현입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0018:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0019:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0020:0001"><a href="../Swift/BitwiseCopyable.md">BitwiseCopyable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0020:0002"><a href="../Swift/Copyable.md">Copyable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0020:0003"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0020:0004"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0020:0005"><a href="../Swift/Escapable.md">Escapable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0020:0006"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0020:0007"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0020:0008"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0021:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="anchorupdate/anchor.md">let anchor: AnchorType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">이 앵커 업데이트에 대한 정보가 포함된 앵커입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="anchorupdate/timestamp.md">var timestamp: TimeInterval</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">이 앵커 업데이트가 발생한 시점입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="anchorupdate/event-swift.property.md">let event: AnchorUpdate&lt;AnchorType&gt;.Event</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">앵커 업데이트를 유발한 이벤트입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="anchorupdate/description.md">var description: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">이 앵커 업데이트의 텍스트 표현입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">*<a href="https://developer.apple.com/documentation/arkit/anchorupdate/event-swift.enum">View on Apple Developer</a>*</span>

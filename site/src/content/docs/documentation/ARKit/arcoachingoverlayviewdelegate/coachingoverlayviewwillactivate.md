---
source_path: "documentation/ARKit/arcoachingoverlayviewdelegate/coachingoverlayviewwillactivate.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arcoachingoverlayviewdelegate/coachingoverlayviewwillactivate"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:coachingoverlayviewwillactivate:0000:0001">coachingOverlayViewWillActivate(_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:coachingoverlayviewwillactivate:0001:0001">**Framework**: ARKit **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:coachingoverlayviewwillactivate:0002:0001">코칭 오버레이 뷰가 활성화될 때 알려줍니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:coachingoverlayviewwillactivate:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:coachingoverlayviewwillactivate:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:coachingoverlayviewwillactivate:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:coachingoverlayviewwillactivate:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
optional func coachingOverlayViewWillActivate(_ coachingOverlayView: ARCoachingOverlayView)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">The value of this property is <code>0</code> when you call it on a stopped audio recorder.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="argeoanchor/init(coordinate:altitude:">func coachingOverlayViewDidDeactivate(ARCoachingOverlayView)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">코칭 경험이 완전히 비활성화될 때를 알려줍니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">*<a href="https://developer.apple.com/documentation/arkit/arcoachingoverlayviewdelegate/coachingoverlayviewwillactivate(_:">View on Apple Developer</a>)*</span>

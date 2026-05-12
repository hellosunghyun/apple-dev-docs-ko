---
source_path: "documentation/ARKit/artrackable.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/artrackable"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:artrackable:0000:0001">ARTrackable</span>

<span class="ko-segment" data-segment-id="seg:paragraph:artrackable:0001:0001">**Framework**: ARKit **Kind**: protocol</span>

<span class="ko-segment" data-segment-id="seg:paragraph:artrackable:0002:0001">실제 세계 객체 또는 위치를 추적하는 객체를 위한 인터페이스입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:artrackable:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:artrackable:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:artrackable:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:artrackable:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
protocol ARTrackable : NSObjectProtocol
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">이 프로토콜은 씬에서 이동 객체를 나타내는 <a href="arfaceanchor.md">@@TOKEN_0@@</a> 클래스와 같은 ARKit 클래스에서 채택됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0001">ARKit은 활성 AR 세션에서 이러한 객체의 표현을 자동으로 관리하여, 실제 객체의 위치와 방향 변경(앵커의 <a href="aranchor/transform.md">@@TOKEN_0@@</a> 속성)이 해당 ARKit 객체에 반영되도록 보장합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0002"><a href="artrackable/istracked.md">@@TOKEN_0@@</a> 속성은 실제 객체의 움직임에 대해 현재 transform이 유효한지 여부를 나타냅니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0010:0001">Trackable anchor 클래스는 다른 ARKit 동작에 영향을 줍니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:overview:0011:0001"><a href="arsession/getcurrentworldmap(completionhandler:">@@TOKEN_0@@</a>.md) 메서드는 생성하는 <a href="arworldmap.md">@@TOKEN_1@@</a>에 추적 불가 anchor만 자동으로 포함합니다. (world map을 만든 후에는 필요에 따라 다른 anchor를 추가할 수 있습니다.)</span>
- <span class="ko-segment" data-segment-id="seg:list:overview:0011:0002"><a href="arscnview.md">@@TOKEN_0@@</a> 및 <a href="arskview.md">@@TOKEN_1@@</a>는 <a href="artrackable/istracked.md">@@TOKEN_2@@</a> 속성이 <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_3@@</a>인 anchor의 노드를 자동으로 숨깁니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:overview:0011:0003">world-tracking 세션은 각 anchor 주변의 추적 품질을 최적화하기 위해 추적 불가 anchor를 사용합니다. trackable anchor는 world tracking에 영향을 주지 않습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0012:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:monitoring-tracking-state:0013:0001">추적 상태 모니터링</span>

- <span class="ko-segment" data-segment-id="seg:list:monitoring-tracking-state:0014:0001"><a href="artrackable/istracked.md">var isTracked: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:monitoring-tracking-state:0015:0001">객체의 transform이 유효한지를 나타내는 Boolean 값입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0016:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0017:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0018:0001"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforming-types:0019:0001">준수 타입</span>

- <span class="ko-segment" data-segment-id="seg:list:conforming-types:0020:0001"><a href="arappclipcodeanchor.md">ARAppClipCodeAnchor</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforming-types:0020:0002"><a href="arbodyanchor.md">ARBodyAnchor</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforming-types:0020:0003"><a href="arfaceanchor.md">ARFaceAnchor</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforming-types:0020:0004"><a href="argeoanchor.md">ARGeoAnchor</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforming-types:0020:0005"><a href="arimageanchor.md">ARImageAnchor</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0021:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="aranchor.md">class ARAnchor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">물리적 환경에서 항목의 위치와 방향을 지정하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="aranchorcopying.md">protocol ARAnchorCopying</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">커스텀 anchor 하위 클래스에 대한 지원입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">*<a href="https://developer.apple.com/documentation/arkit/artrackable">View on Apple Developer</a>*</span>

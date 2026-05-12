---
source_path: "documentation/ARKit/accessorytrackingprovider/latestanchors.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/accessorytrackingprovider/latestanchors"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:latestanchors:0000:0001">latestAnchors</span>

<span class="ko-segment" data-segment-id="seg:paragraph:latestanchors:0001:0001">**Framework**: ARKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:latestanchors:0002:0001">최신 관성 데이터로 업데이트된 최신 액세서리 앵커입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:latestanchors:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:latestanchors:0004:0001">visionOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
final var latestAnchors: [AccessoryAnchor] { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">When you reset scene reconstruction, ARKit removes any existing mesh anchors (<a href="armeshanchor.md">@@TOKEN_0@@</a>) from the session.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">See <a href="argeotrackingconfiguration/checkavailability(completionhandler:">@@TOKEN_0@@</a>.md) for more information.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">If <a href="argeotrackingconfiguration/checkavailability(completionhandler:">@@TOKEN_0@@</a>.md) returns <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_1@@</a> and an app begins a geo-tracking session, ARKit provides this state reason when the user has moved to an unsupported area.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">*<a href="https://developer.apple.com/documentation/arkit/accessorytrackingprovider/latestanchors">View on Apple Developer</a>*</span>

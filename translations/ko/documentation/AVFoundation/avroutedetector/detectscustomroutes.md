---
source_path: "documentation/AVFoundation/avroutedetector/detectscustomroutes.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avroutedetector/detectscustomroutes"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:detectscustomroutes:0000:0001">detectsCustomRoutes</span>

<span class="ko-segment" data-segment-id="seg:paragraph:detectscustomroutes:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:detectscustomroutes:0002:0001">A Boolean value that indicates whether route detection includes custom routes.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:detectscustomroutes:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:detectscustomroutes:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:detectscustomroutes:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:detectscustomroutes:0004:0003">Mac Catalyst 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:detectscustomroutes:0004:0004">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var detectsCustomRoutes: Bool { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">The default value is <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_0@@</a>.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">해당 좌표계는 <code>extractReferenceObject(transform:center:extent:)</code>를 호출할 때 transform 매개변수로 정의되며, <a href="arreferenceobject/applyingtransform(_:">@@TOKEN_1@@</a>.md)로 다른 참조 객체를 생성해 수정할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avroutedetector/isroutedetectionenabled.md">var isRouteDetectionEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">A Boolean value that indicates whether route detection is in an enabled state.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avroutedetector/multipleroutesdetected.md">var multipleRoutesDetected: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">A Boolean value that indicates whether the object detects more than one playback route.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="../Foundation/NSNotification/Name-swift.struct/AVRouteDetectorMultipleRoutesDetectedDidChange.md">static let AVRouteDetectorMultipleRoutesDetectedDidChange: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">A notification the system posts when changes occur to its detected routes.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avroutedetector/detectscustomroutes">View on Apple Developer</a>*</span>

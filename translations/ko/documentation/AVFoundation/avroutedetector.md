---
source_path: "documentation/AVFoundation/avroutedetector.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avroutedetector"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avroutedetector:0000:0001">AVRouteDetector</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avroutedetector:0001:0001">**Framework**: AVFoundation **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avroutedetector:0002:0001">사용 가능한 미디어 재생 경로를 감지하는 객체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avroutedetector:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avroutedetector:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avroutedetector:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avroutedetector:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avroutedetector:0004:0004">macOS 10.13+</span>
- <span class="ko-segment" data-segment-id="seg:list:avroutedetector:0004:0005">tvOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avroutedetector:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class AVRouteDetector
```

## <span class="ko-segment" data-segment-id="seg:heading:mentions:0007:0001">Mentions</span>

- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0001"><a href="supporting-airplay-in-your-app.md">앱에서 AirPlay 지원하기</a></span>

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0009:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0010:0001">경로 감지를 활성화하면, 객체가 여러 개의 재생 경로를 감지했는지 보고합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0010:0002">그럴 경우 <a href="https://developer.apple.com/documentation/AVKit/AVRoutePickerView">@@TOKEN_0@@</a>를 사용하여 사용자가 적절한 경로를 선택할 수 있는 UI를 표시합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0011:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:detecting-routes:0012:0001">경로 감지</span>

- <span class="ko-segment" data-segment-id="seg:list:detecting-routes:0013:0001"><a href="avroutedetector/detectscustomroutes.md">var detectsCustomRoutes: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:detecting-routes:0014:0001">경로 감지에 사용자 정의 경로가 포함되는지 나타내는 불리언 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:detecting-routes:0015:0001"><a href="avroutedetector/isroutedetectionenabled.md">var isRouteDetectionEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:detecting-routes:0016:0001">경로 감지가 활성 상태인지 나타내는 불리언 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:detecting-routes:0017:0001"><a href="avroutedetector/multipleroutesdetected.md">var multipleRoutesDetected: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:detecting-routes:0018:0001">객체가 둘 이상의 재생 경로를 감지하는지 나타내는 불리언 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:detecting-routes:0019:0001"><a href="../Foundation/NSNotification/Name-swift.struct/AVRouteDetectorMultipleRoutesDetectedDidChange.md">static let AVRouteDetectorMultipleRoutesDetectedDidChange: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:detecting-routes:0020:0001">감지된 경로에 변경이 발생할 때 시스템에서 게시하는 알림입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0021:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0022:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0023:0001"><a href="../ObjectiveC/NSObject-swift.class.md">NSObject</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0024:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0025:0001"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0025:0002"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0025:0003"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0025:0004"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0025:0005"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0025:0006"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0025:0007"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0025:0008"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:conforms-to:0027:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avroutedetector">View on Apple Developer</a>*</span>

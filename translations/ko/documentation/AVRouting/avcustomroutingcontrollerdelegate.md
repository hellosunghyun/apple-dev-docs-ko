---
source_path: "documentation/AVRouting/avcustomroutingcontrollerdelegate.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avrouting/avcustomroutingcontrollerdelegate"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avcustomroutingcontrollerdelegate:0000:0001">AVCustomRoutingControllerDelegate</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcustomroutingcontrollerdelegate:0001:0001">**Framework**: AVRouting **Kind**: protocol</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcustomroutingcontrollerdelegate:0002:0001">A protocol for delegates of a custom routing controller.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcustomroutingcontrollerdelegate:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avcustomroutingcontrollerdelegate:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcustomroutingcontrollerdelegate:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcustomroutingcontrollerdelegate:0004:0003">Mac Catalyst 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcustomroutingcontrollerdelegate:0004:0004">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
protocol AVCustomRoutingControllerDelegate : NSObjectProtocol, Sendable
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:handling-controller-events:0008:0001">Handling controller events</span>

- <span class="ko-segment" data-segment-id="seg:list:handling-controller-events:0009:0001"><a href="avcustomroutingcontrollerdelegate/customroutingcontroller(_:handle:completionhandler:">func customRoutingController(AVCustomRoutingController, handle: AVCustomRoutingEvent, completionHandler: (Bool) -&gt; Void)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:handling-controller-events:0010:0001">Connects to, or disconnects from, a device when a user requests it in the picker.</span>

- <span class="ko-segment" data-segment-id="seg:list:handling-controller-events:0011:0001"><a href="avcustomroutingcontrollerdelegate/customroutingcontroller(_:eventdidtimeout:">func customRoutingController(AVCustomRoutingController, eventDidTimeOut: AVCustomRoutingEvent)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:handling-controller-events:0012:0001">Tells the delegate when a routing event times out.</span>

- <span class="ko-segment" data-segment-id="seg:list:handling-controller-events:0013:0001"><a href="avcustomroutingcontrollerdelegate/customroutingcontroller(_:didselect:">func customRoutingController(AVCustomRoutingController, didSelect: AVCustomRoutingActionItem)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:handling-controller-events:0014:0001">Tells the delegate when a user selects a custom item in the route picker.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0015:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0016:0001">Inherits From</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0017:0001"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>
- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0017:0002"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0017:0003"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0018:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="avcustomroutingcontroller.md">class AVCustomRoutingController</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">재생 명령을 위한 추상 상위 클래스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="avcustomroutingevent.md">class AVCustomRoutingEvent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">특정 속도와 시점에서 재생함을 나타내는 명령입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="avcustomroutingactionitem.md">class AVCustomRoutingActionItem</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">항목 타임라인에서 새 시점으로 이동함을 나타내는 명령입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">*<a href="https://developer.apple.com/documentation/avrouting/avcustomroutingcontrollerdelegate">View on Apple Developer</a>*</span>

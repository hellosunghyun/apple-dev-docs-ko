---
source_path: "documentation/AppKit/nscell/starttracking-atin.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appkit/nscell/starttracking-atin"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:starttrackingatin:0000:0001">startTracking(at:in:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:starttrackingatin:0001:0001">**Framework**: AppKit **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:starttrackingatin:0002:0001">수신자 내에서 마우스 이벤트 추적을 시작합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:starttrackingatin:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:starttrackingatin:0004:0001">macOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func startTracking(at startPoint: NSPoint, in controlView: NSView) -> Bool
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">수신자가 연속 응답 모드이거나 마우스가 드래그될 때 응답하도록 설정된 경우 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_0@@</a>, 그렇지 않으면 <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_1@@</a>입니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001"><a href="nscell/trackmouse(with:in:of:untilmouseup:">@@TOKEN_0@@</a>.md)의 <code>NSCell</code> 구현은 추적이 시작될 때 이 메서드를 호출합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">서브클래스는 마우스 추적 시작 시 특수한 마우스 추적 동작(예: 특수 커서 표시)을 구현하기 위해 이 메서드를 재정의할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>startPoint</code>: 커서의 초기 위치입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0002"><code>controlView</code>: 수신자를 관리하는 <code>NSControl</code> 객체입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="nscell/trackmouse(with:in:of:untilmouseup:">func trackMouse(with: NSEvent, in: NSRect, of: NSView, untilMouseUp: Bool) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">셀에서 마우스 추적 동작을 시작합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="nscell/continuetracking(last:current:in:">func continueTracking(last: NSPoint, current: NSPoint, in: NSView) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">수신 셀에서 마우스 추적을 계속해야 하는지 나타내는 Boolean 값을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="nscell/stoptracking(last:current:in:mouseisup:">func stopTracking(last: NSPoint, current: NSPoint, in: NSView, mouseIsUp: Bool)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">수신자 내에서 마우스 이벤트 추적을 중지합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="nscell/mousedownflags.md">var mouseDownFlags: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">마지막(왼쪽) 마우스 다운 이벤트의 modifier 플래그입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="nscell/preferstrackinguntilmouseup.md">class var prefersTrackingUntilMouseUp: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">커서가 셀을 벗어날 때 추적이 중단되는지 여부를 나타내는 Boolean 값을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="nscell/getperiodicdelay(_:interval:">func getPeriodicDelay(UnsafeMutablePointer&lt;Float&gt;, interval: UnsafeMutablePointer&lt;Float&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">대상 객체로 action 메시지를 연속 전송할 때 사용할 초기 지연값과 반복값을 반환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">*<a href="https://developer.apple.com/documentation/appkit/nscell/starttracking(at:in:">View on Apple Developer</a>)*</span>

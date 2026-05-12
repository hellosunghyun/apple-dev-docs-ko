---
source_path: "documentation/AVKit/avinputpickerinteraction/delegate-swiftprotocol.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avkit/avinputpickerinteraction/delegate-swiftprotocol"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avinputpickerinteractiondelegate:0000:0001">AVInputPickerInteraction.Delegate</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avinputpickerinteractiondelegate:0001:0001">**Framework**: AVKit **Kind**: protocol</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avinputpickerinteractiondelegate:0002:0001"><code>AVInputPickerInteractionDelegate</code> 프로토콜은 <code>AVInputPickerInteraction</code> 객체의 전환 알림을 수신하기 위한 메서드를 정의합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avinputpickerinteractiondelegate:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avinputpickerinteractiondelegate:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avinputpickerinteractiondelegate:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avinputpickerinteractiondelegate:0004:0003">Mac Catalyst 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
protocol Delegate : NSObjectProtocol
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:responding-to-life-cycle-events:0008:0001">수명 주기 이벤트 응답</span>

- <span class="ko-segment" data-segment-id="seg:list:responding-to-life-cycle-events:0009:0001"><a href="avinputpickerinteraction/delegate-swift.protocol/inputpickerinteractionwillbeginpresenting(_:">func inputPickerInteractionWillBeginPresenting(AVInputPickerInteraction)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:responding-to-life-cycle-events:0010:0001">입력 피커 뷰가 장치를 표시하기 시작할 것임을 델리게이트에 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:responding-to-life-cycle-events:0011:0001"><a href="avinputpickerinteraction/delegate-swift.protocol/inputpickerinteractiondidendpresenting(_:">func inputPickerInteractionDidEndPresenting(AVInputPickerInteraction)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:responding-to-life-cycle-events:0012:0001">입력 피커 뷰가 장치 표시를 완료했음을 델리게이트에 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:responding-to-life-cycle-events:0013:0001"><a href="avinputpickerinteraction/delegate-swift.protocol/inputpickerinteractionwillbegindismissing(_:">func inputPickerInteractionWillBeginDismissing(AVInputPickerInteraction)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:responding-to-life-cycle-events:0014:0001">입력 피커 뷰가 장치 표시를 닫으려는 시점을 델리게이트에 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:responding-to-life-cycle-events:0015:0001"><a href="avinputpickerinteraction/delegate-swift.protocol/inputpickerinteractiondidenddismissing(_:">func inputPickerInteractionDidEndDismissing(AVInputPickerInteraction)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:responding-to-life-cycle-events:0016:0001">입력 피커 뷰가 장치 표시를 종료했음을 델리게이트에 알립니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0017:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0018:0001">관계</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0019:0001"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0020:0001">참조 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="avinputpickerinteraction/delegate-swift.property.md">var delegate: (any AVInputPickerInteraction.Delegate)?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">입력 피커 뷰의 델리게이트입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">*<a href="https://developer.apple.com/documentation/avkit/avinputpickerinteraction/delegate-swift.protocol">View on Apple Developer</a>*</span>

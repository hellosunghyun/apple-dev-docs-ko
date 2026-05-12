---
source_path: "documentation/AVRouting/avcustomroutingeventreason.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avrouting/avcustomroutingeventreason"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avcustomroutingeventreason:0000:0001">AVCustomRoutingEventReason</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcustomroutingeventreason:0001:0001">**Framework**: AVRouting **Kind**: enum</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcustomroutingeventreason:0002:0001">라우팅 이벤트의 이유를 나타내는 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcustomroutingeventreason:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avcustomroutingeventreason:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcustomroutingeventreason:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcustomroutingeventreason:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcustomroutingeventreason:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcustomroutingeventreason:0004:0005">visionOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
enum AVCustomRoutingEventReason
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:reasons:0008:0001">Reasons</span>

- <span class="ko-segment" data-segment-id="seg:list:reasons:0009:0001"><a href="avcustomroutingeventreason/activate.md">AVCustomRoutingEventReason.activate</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:reasons:0010:0001">사용자가 피커에서 경로를 선택했음을 나타내는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:reasons:0011:0001"><a href="avcustomroutingeventreason/deactivate.md">AVCustomRoutingEventReason.deactivate</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:reasons:0012:0001">사용자가 피커에서 경로를 선택 해제했음을 나타내는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:reasons:0013:0001"><a href="avcustomroutingeventreason/reactivate.md">AVCustomRoutingEventReason.reactivate</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:reasons:0014:0001">사용자가 이전에 권한 부여한 경로를 다시 활성화함을 나타내는 값입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0015:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0016:0001"><a href="avcustomroutingeventreason/init(rawvalue:">init?(rawValue: Int)</a>.md)</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0017:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0018:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0001"><a href="../Swift/BitwiseCopyable.md">BitwiseCopyable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0002"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0003"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0004"><a href="../Swift/RawRepresentable.md">RawRepresentable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0005"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0006"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0020:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="avcustomroutingevent/route.md">var route: AVCustomDeviceRoute</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">이벤트의 경로입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="avcustomdeviceroute.md">class AVCustomDeviceRoute</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">커스텀 장치 경로를 나타내는 개체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="avcustomroutingevent/reason.md">var reason: AVCustomRoutingEventReason</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">경로를 활성화하거나 비활성화하려는 사용자 요청과 같은 이벤트의 이유입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">*<a href="https://developer.apple.com/documentation/avrouting/avcustomroutingeventreason">View on Apple Developer</a>*</span>

---
source_path: "documentation/AVFAudio/avaudiosession/routechangereason.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiosession/routechangereason"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avaudiosessionroutechangereason:0000:0001">AVAudioSession.RouteChangeReason</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiosessionroutechangereason:0001:0001">**Framework**: AVFAudio **Kind**: enum</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiosessionroutechangereason:0002:0001">오디오 라우트 변경의 이유를 나타내는 상수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiosessionroutechangereason:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avaudiosessionroutechangereason:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiosessionroutechangereason:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiosessionroutechangereason:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiosessionroutechangereason:0004:0004">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiosessionroutechangereason:0004:0005">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiosessionroutechangereason:0004:0006">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
enum RouteChangeReason
```

## <span class="ko-segment" data-segment-id="seg:heading:mentions:0007:0001">Mentions</span>

- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0001"><a href="responding-to-audio-route-changes.md">Responding to audio route changes</a></span>

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0009:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0010:0001">이 상수는 <a href="avaudiosession/routechangenotification.md">@@TOKEN_0@@</a> 알림의 <code>userInfo</code> 딕셔너리 내 <a href="avaudiosessionroutechangereasonkey.md">@@TOKEN_2@@</a> 키에서 가능한 값으로 표시됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0011:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:route-change-reasons:0012:0001">경로 변경 이유</span>

- <span class="ko-segment" data-segment-id="seg:list:route-change-reasons:0013:0001"><a href="avaudiosession/routechangereason/unknown.md">AVAudioSession.RouteChangeReason.unknown</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:route-change-reasons:0014:0001">변경 이유를 알 수 없는 경우를 나타내는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:route-change-reasons:0015:0001"><a href="avaudiosession/routechangereason/newdeviceavailable.md">AVAudioSession.RouteChangeReason.newDeviceAvailable</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:route-change-reasons:0016:0001">헤드셋을 연결하는 등 사용자 동작으로 선호 오디오 경로를 사용할 수 있게 되었음을 나타내는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:route-change-reasons:0017:0001"><a href="avaudiosession/routechangereason/olddeviceunavailable.md">AVAudioSession.RouteChangeReason.oldDeviceUnavailable</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:route-change-reasons:0018:0001">이전 오디오 출력 경로가 더 이상 사용 가능하지 않음을 나타내는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:route-change-reasons:0019:0001"><a href="avaudiosession/routechangereason/categorychange.md">AVAudioSession.RouteChangeReason.categoryChange</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:route-change-reasons:0020:0001">세션 객체의 범주가 변경되었음을 나타내는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:route-change-reasons:0021:0001"><a href="avaudiosession/routechangereason/override.md">AVAudioSession.RouteChangeReason.override</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:route-change-reasons:0022:0001">오디오 경로가 앱에 의해 재정의되었음을 나타내는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:route-change-reasons:0023:0001"><a href="avaudiosession/routechangereason/wakefromsleep.md">AVAudioSession.RouteChangeReason.wakeFromSleep</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:route-change-reasons:0024:0001">기기가 절전 상태에서 깨어날 때 경로가 변경되었음을 나타내는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:route-change-reasons:0025:0001"><a href="avaudiosession/routechangereason/nosuitablerouteforcategory.md">AVAudioSession.RouteChangeReason.noSuitableRouteForCategory</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:route-change-reasons:0026:0001">지정된 범주에서 더 이상 적합한 경로를 사용할 수 없어 경로가 변경되었음을 나타내는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:route-change-reasons:0027:0001"><a href="avaudiosession/routechangereason/routeconfigurationchange.md">AVAudioSession.RouteChangeReason.routeConfigurationChange</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:route-change-reasons:0028:0001">I/O 포트 집합의 구성이 변경되었음을 나타내는 값입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0029:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0030:0001"><a href="avaudiosession/routechangereason/init(rawvalue:">init?(rawValue: UInt)</a>.md)</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0031:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0032:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0033:0001"><a href="../Swift/BitwiseCopyable.md">BitwiseCopyable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0033:0002"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0033:0003"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0033:0004"><a href="../Swift/RawRepresentable.md">RawRepresentable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0033:0005"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0033:0006"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:conforms-to:0035:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiosession/routechangereason">View on Apple Developer</a>*</span>

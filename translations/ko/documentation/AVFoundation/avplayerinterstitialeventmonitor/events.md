---
source_path: "documentation/AVFoundation/avplayerinterstitialeventmonitor/events.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avplayerinterstitialeventmonitor/events"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:events:0000:0001">events</span>

<span class="ko-segment" data-segment-id="seg:paragraph:events:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:events:0002:0001">The schedule of interstitial events.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:events:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:events:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:events:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:events:0004:0003">Mac Catalyst 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:events:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:events:0004:0005">tvOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:events:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:events:0004:0007">watchOS 8.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var events: [AVPlayerInterstitialEvent] { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">해당 값은 장치에 Desk View 카메라가 존재하는 경우 이를 제공하며, 이 카메라는 장치의 울트라 와이드 카메라에서 프레이밍을 파생합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">시스템에 여러 개의 Continuity Camera 디바이스가 있는 경우, 이 속성을 사용해 특정 인스턴스를 해당 Desk View 디바이스와 연결해야 합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이 속성의 값을 변경하기 전에 <a href="avcapturedevice/lockforconfiguration(">@@TOKEN_0@@</a>.md) 을 호출해 장치 구성 속성에 대한 배타적 접근 권한을 먼저 획득해야 합니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0010:0001">**Note**: The elements in the <a href="avplayerinterstitialeventmonitor/events.md">@@TOKEN_0@@</a> array are immutable.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0010:0002">Attempting to modify them generates an exception.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0010:0003">To alter an event, make a copy and modify the new instance.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avplayerinterstitialeventmonitor/eventsdidchangenotification.md">class let eventsDidChangeNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">A notification the system posts when the monitor’s schedule of interstitial events changes.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avplayerinterstitialeventmonitor/interstitialeventwasunschedulednotification.md">class let interstitialEventWasUnscheduledNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">A notification that is posted whenever an AVPlayerInterstitialEvent with loaded assets was unscheduled prior to playing.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avplayerinterstitialeventmonitor/interstitialeventwasunscheduledeventkey.md">class let interstitialEventWasUnscheduledEventKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">The dictionary key for the AVPlayerInterstitialEvent that was unscheduled in the payload of the AVPlayerInterstitialEventMonitorInterstitialEventWasUnscheduledNotification.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avplayerinterstitialeventmonitor/interstitialeventwasunschedulederrorkey.md">class let interstitialEventWasUnscheduledErrorKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">The dictionary key to indicate whether the event that was unscheduled was due to an error.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avplayerinterstitialeventmonitor/interstitialeventdidfinishnotification.md">class let interstitialEventDidFinishNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">A notification that is posted whenever an AVPlayerInterstitialEvent finished playing.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avplayerinterstitialeventmonitor/interstitialeventdidfinisheventkey.md">class let interstitialEventDidFinishEventKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">The dictionary key for the AVPlayerInterstitialEvent that finished playing in the payload of the AVPlayerInterstitialEventMonitorInterstitialEventDidFinishNotification.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avplayerinterstitialeventmonitor/interstitialeventdidfinishplayouttimekey.md">class let interstitialEventDidFinishPlayoutTimeKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">The dictionary key for the playout time of the event that finished playing in the payload of the AVPlayerInterstitialEventMonitorInterstitialEventDidFinishNotification.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avplayerinterstitialeventmonitor/interstitialeventdidfinishdidplayentireeventkey.md">class let interstitialEventDidFinishDidPlayEntireEventKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">기본 구성 장치의 전환 동작을 설정합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avplayerinterstitialeventmonitor/events">View on Apple Developer</a>*</span>

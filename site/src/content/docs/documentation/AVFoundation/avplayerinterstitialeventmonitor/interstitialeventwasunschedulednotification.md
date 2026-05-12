---
source_path: "documentation/AVFoundation/avplayerinterstitialeventmonitor/interstitialeventwasunschedulednotification.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avplayerinterstitialeventmonitor/interstitialeventwasunschedulednotification"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:interstitialeventwasunschedulednotification:0000:0001">interstitialEventWasUnscheduledNotification</span>

<span class="ko-segment" data-segment-id="seg:paragraph:interstitialeventwasunschedulednotification:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:interstitialeventwasunschedulednotification:0002:0001">로드된 자산이 있는 AVPlayerInterstitialEvent가 재생되기 전에 예기치 않게 취소(unscheduled)될 때마다 게시되는 알림입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:interstitialeventwasunschedulednotification:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:interstitialeventwasunschedulednotification:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:interstitialeventwasunschedulednotification:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:interstitialeventwasunschedulednotification:0004:0003">Mac Catalyst 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:interstitialeventwasunschedulednotification:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:interstitialeventwasunschedulednotification:0004:0005">tvOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:interstitialeventwasunschedulednotification:0004:0006">visionOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:interstitialeventwasunschedulednotification:0004:0007">watchOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class let interstitialEventWasUnscheduledNotification: NSNotification.Name
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">다음 키와 값이 포함될 수 있는 <code>userInfo</code> 사전을 가집니다.</span>

1. <span class="ko-segment" data-segment-id="seg:list:discussion:0009:0001"><code>AVPlayerInterstitialEventMonitorInterstitialEventWasUnscheduledEventKey</code> — 어떤 <code>AVPlayerInterstitialEvent</code>가 unscheduled되었는지 식별하는 값.</span>
2. <span class="ko-segment" data-segment-id="seg:list:discussion:0009:0002"><code>AVPlayerInterstitialEventMonitorInterstitialEventWasUnscheduledErrorKey</code>와 <code>NSError</code> 값. 이 키는 AVPlayerInterstitialEvent가 오류로 인해 unscheduled된 경우에만 포함됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001">[var events: [AVPlayerInterstitialEvent]](avplayerinterstitialeventmonitor/events.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">인터스티셜 이벤트의 스케줄입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avplayerinterstitialeventmonitor/eventsdidchangenotification.md">class let eventsDidChangeNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">시스템은 인터스티셜 이벤트 모니터의 스케줄이 변경될 때마다 이 알림을 게시합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avplayerinterstitialeventmonitor/interstitialeventwasunscheduledeventkey.md">class let interstitialEventWasUnscheduledEventKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001"><code>AVPlayerInterstitialEventMonitorInterstitialEventWasUnscheduledNotification</code>의 페이로드에서, 예약 취소된 <code>AVPlayerInterstitialEvent</code>를 지정하는 사전 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avplayerinterstitialeventmonitor/interstitialeventwasunschedulederrorkey.md">class let interstitialEventWasUnscheduledErrorKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">해당 이벤트가 오류로 인해 예약 취소되었는지 나타내는 사전 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="avplayerinterstitialeventmonitor/interstitialeventdidfinishnotification.md">class let interstitialEventDidFinishNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">AVPlayerInterstitialEvent 재생이 완료될 때마다 게시되는 알림입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="avplayerinterstitialeventmonitor/interstitialeventdidfinisheventkey.md">class let interstitialEventDidFinishEventKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001"><code>AVPlayerInterstitialEventMonitorInterstitialEventDidFinishNotification</code>의 페이로드에서 재생이 완료된 <code>AVPlayerInterstitialEvent</code>를 지정하는 사전 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="avplayerinterstitialeventmonitor/interstitialeventdidfinishplayouttimekey.md">class let interstitialEventDidFinishPlayoutTimeKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001"><code>AVPlayerInterstitialEventMonitorInterstitialEventDidFinishNotification</code>의 페이로드에서 재생이 끝난 이벤트의 재생 시간을 나타내는 사전 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="avplayerinterstitialeventmonitor/interstitialeventdidfinishdidplayentireeventkey.md">class let interstitialEventDidFinishDidPlayEntireEventKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001"><code>AVPlayerInterstitialEventMonitorInterstitialEventDidFinishNotification</code>의 페이로드에서 이벤트가 끝까지 재생되었는지 여부를 나타내는 사전 키입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avplayerinterstitialeventmonitor/interstitialeventwasunschedulednotification">View on Apple Developer</a>*</span>

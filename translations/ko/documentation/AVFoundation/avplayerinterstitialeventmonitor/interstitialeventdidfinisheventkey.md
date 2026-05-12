---
source_path: "documentation/AVFoundation/avplayerinterstitialeventmonitor/interstitialeventdidfinisheventkey.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avplayerinterstitialeventmonitor/interstitialeventdidfinisheventkey"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:interstitialeventdidfinisheventkey:0000:0001">interstitialEventDidFinishEventKey</span>

<span class="ko-segment" data-segment-id="seg:paragraph:interstitialeventdidfinisheventkey:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:interstitialeventdidfinisheventkey:0002:0001">이 키에 해당하는 값은 AVPlayerInterstitialEventMonitorInterstitialEventDidFinishNotification의 페이로드에 재생이 완료된 AVPlayerInterstitialEvent에 대한 사전 키입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:interstitialeventdidfinisheventkey:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:interstitialeventdidfinisheventkey:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:interstitialeventdidfinisheventkey:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:interstitialeventdidfinisheventkey:0004:0003">Mac Catalyst 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:interstitialeventdidfinisheventkey:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:interstitialeventdidfinisheventkey:0004:0005">tvOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:interstitialeventdidfinisheventkey:0004:0006">visionOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:interstitialeventdidfinisheventkey:0004:0007">watchOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class let interstitialEventDidFinishEventKey: String
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 키에 해당하는 값의 형식은 AVPlayerInterstitialEvent입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001">[var events: [AVPlayerInterstitialEvent]](avplayerinterstitialeventmonitor/events.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">인터스티셜 이벤트의 스케줄입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avplayerinterstitialeventmonitor/eventsdidchangenotification.md">class let eventsDidChangeNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">시스템이 인터스티셜 이벤트의 모니터 스케줄이 변경될 때 게시하는 알림입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avplayerinterstitialeventmonitor/interstitialeventwasunschedulednotification.md">class let interstitialEventWasUnscheduledNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">로드된 에셋을 가진 AVPlayerInterstitialEvent가 재생되기 전에 예약이 해제될 때마다 게시되는 알림입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avplayerinterstitialeventmonitor/interstitialeventwasunscheduledeventkey.md">class let interstitialEventWasUnscheduledEventKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">AVPlayerInterstitialEventMonitorInterstitialEventWasUnscheduledNotification의 페이로드에 예약 해제된 AVPlayerInterstitialEvent에 대한 사전 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avplayerinterstitialeventmonitor/interstitialeventwasunschedulederrorkey.md">class let interstitialEventWasUnscheduledErrorKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">예약 해제된 이벤트가 오류로 인해 발생했는지 나타내는 사전 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avplayerinterstitialeventmonitor/interstitialeventdidfinishnotification.md">class let interstitialEventDidFinishNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">AVPlayerInterstitialEvent가 재생을 완료할 때마다 게시되는 알림입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avplayerinterstitialeventmonitor/interstitialeventdidfinishplayouttimekey.md">class let interstitialEventDidFinishPlayoutTimeKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">AVPlayerInterstitialEventMonitorInterstitialEventDidFinishNotification의 페이로드에 재생이 완료된 이벤트의 재생 시간을 나타내는 사전 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avplayerinterstitialeventmonitor/interstitialeventdidfinishdidplayentireeventkey.md">class let interstitialEventDidFinishDidPlayEntireEventKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">AVPlayerInterstitialEventMonitorInterstitialEventDidFinishNotification의 페이로드에서 재생이 완료된 이벤트가 완전히 재생되었는지 여부를 나타내는 사전 키입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avplayerinterstitialeventmonitor/interstitialeventdidfinisheventkey">View on Apple Developer</a>*</span>

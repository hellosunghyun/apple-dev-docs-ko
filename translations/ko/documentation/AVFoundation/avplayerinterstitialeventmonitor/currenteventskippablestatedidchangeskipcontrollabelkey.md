---
source_path: "documentation/AVFoundation/avplayerinterstitialeventmonitor/currenteventskippablestatedidchangeskipcontrollabelkey.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avplayerinterstitialeventmonitor/currenteventskippablestatedidchangeskipcontrollabelkey"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:currenteventskippablestatedidchangeskipcontrollabelkey:0000:0001">currentEventSkippableStateDidChangeSkipControlLabelKey</span>

<span class="ko-segment" data-segment-id="seg:paragraph:currenteventskippablestatedidchangeskipcontrollabelkey:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:currenteventskippablestatedidchangeskipcontrollabelkey:0002:0001"><code>AVPlayerInterstitialEventMonitorCurrentEventSkippableStateDidChangeNotification</code>의 payload에서 이벤트 건너뛰기 레이블에 대한 딕셔너리 키입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:currenteventskippablestatedidchangeskipcontrollabelkey:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:currenteventskippablestatedidchangeskipcontrollabelkey:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:currenteventskippablestatedidchangeskipcontrollabelkey:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:currenteventskippablestatedidchangeskipcontrollabelkey:0004:0003">Mac Catalyst 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:currenteventskippablestatedidchangeskipcontrollabelkey:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:currenteventskippablestatedidchangeskipcontrollabelkey:0004:0005">tvOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:currenteventskippablestatedidchangeskipcontrollabelkey:0004:0006">visionOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:currenteventskippablestatedidchangeskipcontrollabelkey:0004:0007">watchOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class let currentEventSkippableStateDidChangeSkipControlLabelKey: String
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 키에 대응하는 값은 <code>NSString</code>이며, <code>AVPlayerInterstitialEventController</code>에 <code>localizedStringsBundle</code>이 설정되어 있고 건너뛰기 이벤트 상태가 변경된 <code>AVPlayerInterstitialEvent</code>에 <code>skipControlLocalizedLabelBundleKey</code>가 있는 경우 지역화된 skip label입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002"><code>localizedStringsBundle</code>이 설정되지 않았거나 현재 이벤트의 skippable 상태가 <code>AVPlayerInterstitialEventSkippableEventStateNotSkippable</code>로 변경된 경우 이 키는 존재하지 않습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avplayerinterstitialeventmonitor/currenteventskippablestatedidchangenotification.md">class let currentEventSkippableStateDidChangeNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001"><code>AVPlayerInterstitialEventMonitor</code>의 <code>currentEventSkippableState</code>가 변경될 때마다 게시되는 알림입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avplayerinterstitialeventmonitor/currenteventskippablestatedidchangeeventkey.md">class let currentEventSkippableStateDidChangeEventKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001"><code>AVPlayerInterstitialEventMonitorCurrentEventSkippableStateDidChangeNotification</code>의 payload에서 skippable 상태가 변경된 <code>AVPlayerInterstitial</code> 이벤트의 딕셔너리 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avplayerinterstitialeventmonitor/currenteventskippablestatedidchangestatekey.md">class let currentEventSkippableStateDidChangeStateKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001"><code>AVPlayerInterstitialEventMonitorCurrentEventSkippableStateDidChangeNotification</code>의 payload에서 skippable 이벤트 상태에 대한 딕셔너리 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avplayerinterstitialeventmonitor/currenteventskippednotification.md">class let currentEventSkippedNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001"><code>skip control</code>을 통해 이벤트가 건너뛰어질 때마다 게시되는 알림입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avplayerinterstitialeventmonitor/currenteventskippedeventkey.md">class let currentEventSkippedEventKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avspatialvideoconfiguration-swift.struct/init(formatdescription:">View on Apple Developer</a>)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avplayerinterstitialeventmonitor/currenteventskipcontrollabel.md">var currentEventSkipControlLabel: String?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001"><code>currentEvent</code>에 대한 skip control 레이블입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avplayerinterstitialeventmonitor/currenteventskippablestate.md">var currentEventSkippableState: AVPlayerInterstitialEvent.SkippableEventState</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001"><code>currentEvent</code>의 skippable 이벤트 상태입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avplayerinterstitialeventmonitor/currenteventskippablestatedidchangeskipcontrollabelkey">View on Apple Developer</a>*</span>

---
source_path: "documentation/AVFAudio/avaudiosession/outputmutestatechangenotification.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiosession/outputmutestatechangenotification"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:outputmutestatechangenotification:0000:0001">outputMuteStateChangeNotification</span>

<span class="ko-segment" data-segment-id="seg:paragraph:outputmutestatechangenotification:0001:0001">**Framework**: AVFAudio **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:outputmutestatechangenotification:0002:0001">세션 출력 음소거 상태가 변경될 때 등록된 수신자에게 전송되는 알림입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:outputmutestatechangenotification:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:outputmutestatechangenotification:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:outputmutestatechangenotification:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:outputmutestatechangenotification:0004:0003">Mac Catalyst 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class let outputMuteStateChangeNotification: NSNotification.Name
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">The expected behavior of an app is to pause playback if a route change occurs due to a device no longer being available (<a href="avaudiosession/routechangereason/olddeviceunavailable.md">@@TOKEN_0@@</a>).</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avaudiosession/isoutputmuted.md">var isOutputMuted: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">오디오 출력이 음소거 상태인지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avaudiosession/setoutputmuted(_:">func setOutputMuted(Bool) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">시스템에 세션의 출력 오디오를 음소거하도록 알리는 부울 값을 설정합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0002">기본값은 false(음소거 해제)입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avaudiosession/mutestatekey.md">class let muteStateKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001"><a href="avaudiosession/outputmutestatechangenotification.md">@@TOKEN_0@@</a>용 키입니다. 값은 <code>NSNumber</code> 타입으로, 음소거 해제는 부울 0, 음소거는 부울 1(샘플이 0으로 설정됨)입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avaudiosession/userintenttounmuteoutputnotification.md">class let userIntentToUnmuteOutputNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">애플리케이션 출력이 음소거되고 사용자가 음소거 해제를 요청할 때 등록된 수신자에게 전송되는 알림입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avaudiosession/userintenttounmuteoutputnotification.md">class let userIntentToUnmuteOutputNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">애플리케이션 출력이 음소거되고 사용자가 음소거 해제를 요청할 때 등록된 수신자에게 전송되는 알림입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avaudiosession/mutestatekey.md">class let muteStateKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001"><a href="avaudiosession/outputmutestatechangenotification.md">@@TOKEN_0@@</a>용 키입니다. 값은 <code>NSNumber</code> 타입으로, 음소거 해제는 부울 0, 음소거는 부울 1(샘플이 0으로 설정됨)입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiosession/outputmutestatechangenotification">View on Apple Developer</a>*</span>

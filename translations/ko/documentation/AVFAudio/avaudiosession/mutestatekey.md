---
source_path: "documentation/AVFAudio/avaudiosession/mutestatekey.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiosession/mutestatekey"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:mutestatekey:0000:0001">muteStateKey</span>

<span class="ko-segment" data-segment-id="seg:paragraph:mutestatekey:0001:0001">**Framework**: AVFAudio **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:mutestatekey:0002:0001"><a href="avaudiosession/outputmutestatechangenotification.md">@@TOKEN_0@@</a> 키입니다. 값은 <code>NSNumber</code> 타입의 불리언 값으로, 음소거 해제 상태는 0, 음소거 상태는 1입니다(샘플은 0으로 처리됨).</span>

<span class="ko-segment" data-segment-id="seg:paragraph:mutestatekey:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:mutestatekey:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:mutestatekey:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:mutestatekey:0004:0003">Mac Catalyst 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class let muteStateKey: String
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="avaudiosession/isoutputmuted.md">var isOutputMuted: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">오디오 출력이 음소거 상태인지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avaudiosession/setoutputmuted(_:">func setOutputMuted(Bool) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">시스템에 세션의 출력 오디오를 음소거하도록 알리는 Boolean 값을 설정합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0002">기본값은 false(음소거 해제)입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avaudiosession/outputmutestatechangenotification.md">class let outputMuteStateChangeNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">세션의 출력 음소거 상태가 변경될 때 등록된 리스너로 전송되는 알림입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avaudiosession/userintenttounmuteoutputnotification.md">class let userIntentToUnmuteOutputNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">애플리케이션의 출력이 음소거 상태이고 사용자가 음소거 해제를 의도할 때 등록된 리스너로 전송되는 알림입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avaudiosession/userintenttounmuteoutputnotification.md">class let userIntentToUnmuteOutputNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">애플리케이션의 출력이 음소거 상태이고 사용자가 음소거 해제를 의도할 때 등록된 리스너로 전송되는 알림입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiosession/mutestatekey">View on Apple Developer</a>*</span>

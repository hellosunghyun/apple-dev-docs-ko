---
source_path: "documentation/AVFoundation/avcapturesession/didstartrunningnotification.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturesession/didstartrunningnotification"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:didstartrunningnotification:0000:0001">didStartRunningNotification</span>

<span class="ko-segment" data-segment-id="seg:paragraph:didstartrunningnotification:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:didstartrunningnotification:0002:0001">캡처 세션이 시작될 때 시스템이 게시하는 알림입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:didstartrunningnotification:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:didstartrunningnotification:0004:0001">iOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:didstartrunningnotification:0004:0002">iPadOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:didstartrunningnotification:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:didstartrunningnotification:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:didstartrunningnotification:0004:0005">tvOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:didstartrunningnotification:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class let didStartRunningNotification: NSNotification.Name
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="avcapturesession/isrunning.md">var isRunning: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">Indicates that the <a href="avexternalsyncdevice.md">@@TOKEN_0@@</a> object is running and that the clock property on <a href="avexternalsyncdevice.md">@@TOKEN_1@@</a> is calibrated to the external sync signal.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avcapturesession/isinterrupted.md">var isInterrupted: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">캡처 세션이 중단 상태인지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcapturesession/didstoprunningnotification.md">class let didStopRunningNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">캡처 세션이 중지될 때 시스템이 게시하는 알림입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcapturesession/wasinterruptednotification.md">class let wasInterruptedNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">시스템이 캡처 세션을 중단할 때 게시하는 알림입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avcapturesession/interruptionendednotification.md">class let interruptionEndedNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcontentkeysession/makesecuretokenforexpirationdate(ofpersistablecontentkey:completionhandler:">View on Apple Developer</a>)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avcapturesession/runtimeerrornotification.md">class let runtimeErrorNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">캡처 세션 중에 오류가 발생할 때 시스템이 게시하는 알림입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturesession/didstartrunningnotification">View on Apple Developer</a>*</span>

---
source_path: "documentation/AVFAudio/avaudiosession/mediaserviceswerelostnotification.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiosession/mediaserviceswerelostnotification"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:mediaserviceswerelostnotification:0000:0001">mediaServicesWereLostNotification</span>

<span class="ko-segment" data-segment-id="seg:paragraph:mediaserviceswerelostnotification:0001:0001">**Framework**: AVFAudio **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:mediaserviceswerelostnotification:0002:0001">미디어 서버가 종료될 때 시스템이 게시하는 알림입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:mediaserviceswerelostnotification:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:mediaserviceswerelostnotification:0004:0001">iOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:mediaserviceswerelostnotification:0004:0002">iPadOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:mediaserviceswerelostnotification:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:mediaserviceswerelostnotification:0004:0004">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:mediaserviceswerelostnotification:0004:0005">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:mediaserviceswerelostnotification:0004:0006">watchOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class let mediaServicesWereLostNotification: NSNotification.Name
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">시스템은 미디어 서버가 처음으로 사용 불가능해질 때 이 알림을 게시합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">대부분의 앱은 이 알림에 구독할 필요가 없으며 대신 <a href="avaudiosession/mediaserviceswereresetnotification.md">@@TOKEN_0@@</a> 알림을 구독해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">그러나 이 알림은 서버가 다시 시작되기 전에 들어오는 요청을 처리하기 위한 적절한 조치를 취할 수 있는 신호로 사용할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이 알림에는 <a href="https://developer.apple.com/documentation/Foundation/NSNotification/userInfo">@@TOKEN_0@@</a> 딕셔너리가 없습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">이 알림은 메인 스레드에서 게시됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">관련 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avaudiosession/mediaserviceswereresetnotification.md">class let mediaServicesWereResetNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">시스템이 미디어 서버가 다시 시작할 때 게시하는 알림입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiosession/mediaserviceswerelostnotification">View on Apple Developer</a>*</span>

---
source_path: "documentation/AVFAudio/avaudiosession/mediaserviceswereresetnotification.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiosession/mediaserviceswereresetnotification"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:mediaserviceswereresetnotification:0000:0001">mediaServicesWereResetNotification</span>

<span class="ko-segment" data-segment-id="seg:paragraph:mediaserviceswereresetnotification:0001:0001">**Framework**: AVFAudio **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:mediaserviceswereresetnotification:0002:0001">A notification the system posts when the media server restarts.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:mediaserviceswereresetnotification:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:mediaserviceswereresetnotification:0004:0001">iOS 6.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:mediaserviceswereresetnotification:0004:0002">iPadOS 6.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:mediaserviceswereresetnotification:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:mediaserviceswereresetnotification:0004:0004">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:mediaserviceswereresetnotification:0004:0005">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:mediaserviceswereresetnotification:0004:0006">watchOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class let mediaServicesWereResetNotification: NSNotification.Name
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">세션에서 생성하고 실행하기 전에 <a href="arconfiguration.md">@@TOKEN_0@@</a>에서 <a href="arconfiguration/issupported.md">@@TOKEN_1@@</a>를 호출하여 지원되는지 확인한 다음 <a href="arsession/runwithconfiguration:.md">@@TOKEN_2@@</a>로 실행합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">For more information on ARKit’s coordinate space, see <a href="arsession/setworldorigin(relativetransform:">@@TOKEN_0@@</a>.md).</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">Your app shouldn’t restart its media playback, recording, or processing until initiated by user action.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0001">**Note**: You can trigger a media server reset by choosing the “Reset Media Services” selection under the Developer menu in the iOS Settings app.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0002">Using this utility helps to ensure that your app responds appropriately if media services were reset.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">This notification has no <a href="https://developer.apple.com/documentation/Foundation/NSNotification/userInfo">@@TOKEN_0@@</a> dictionary.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">The system posts this notification on the main thread.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0012:0001">❗ **Important**: Apps don’t need to reregister for any audio session notifications and don’t need to reset key-value observers on audio session properties after a media services reset.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avaudiosession/mediaserviceswerelostnotification.md">class let mediaServicesWereLostNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">A notification the system posts when it terminates the media server.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiosession/mediaserviceswereresetnotification">View on Apple Developer</a>*</span>

---
source_path: "documentation/AVFAudio/avaudiosession/isotheraudioplaying.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiosession/isotheraudioplaying"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:isotheraudioplaying:0000:0001">isOtherAudioPlaying</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isotheraudioplaying:0001:0001">**Framework**: AVFAudio **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isotheraudioplaying:0002:0001">다른 앱에서 오디오를 재생하는지 나타내는 부울 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isotheraudioplaying:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:isotheraudioplaying:0004:0001">iOS 6.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isotheraudioplaying:0004:0002">iPadOS 6.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isotheraudioplaying:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:isotheraudioplaying:0004:0004">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isotheraudioplaying:0004:0005">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isotheraudioplaying:0004:0006">watchOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var isOtherAudioPlaying: Bool { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 속성은 <a href="avaudiosession/category-swift.struct/ambient.md">@@TOKEN_0@@</a> 카테고리를 사용하는 앱의 오디오를 포함해 다른 오디오가 재생 중이면 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_1@@</a>를 반환합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">대부분의 앱은 다른 앱의 기본 오디오가 재생 중인지 판단할 때 더 엄격한 <a href="avaudiosession/secondaryaudioshouldbesilencedhint.md">@@TOKEN_0@@</a> 속성을 대신 사용해야 합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avaudiosession/secondaryaudioshouldbesilencedhint.md">var secondaryAudioShouldBeSilencedHint: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">비혼합 가능한 오디오 세션을 가진 다른 앱에서 오디오 재생이 이루어지는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avaudiosession/silencesecondaryaudiohintnotification.md">class let silenceSecondaryAudioHintNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">다른 앱의 기본 오디오가 시작되고 중지될 때 시스템이 게시하는 알림입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avaudiosession/allowhapticsandsystemsoundsduringrecording.md">var allowHapticsAndSystemSoundsDuringRecording: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">오디오 입력으로 녹음할 때 시스템 사운드와 햅틱이 재생되는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avasset/findunusedtrackid(completionhandler:">func setAllowHapticsAndSystemSoundsDuringRecording(Bool) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">오디오 입력으로 녹음할 때 시스템 사운드와 햅틱이 재생되는지 나타내는 부울 값을 설정합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiosession/isotheraudioplaying">View on Apple Developer</a>*</span>

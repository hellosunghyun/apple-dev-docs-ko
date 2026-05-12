---
source_path: "documentation/AVFAudio/avaudiosession/allowhapticsandsystemsoundsduringrecording.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiosession/allowhapticsandsystemsoundsduringrecording"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:allowhapticsandsystemsoundsduringrecording:0000:0001">allowHapticsAndSystemSoundsDuringRecording</span>

<span class="ko-segment" data-segment-id="seg:paragraph:allowhapticsandsystemsoundsduringrecording:0001:0001">**Framework**: AVFAudio **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:allowhapticsandsystemsoundsduringrecording:0002:0001">오디오 입력에서 녹음할 때 시스템 사운드와 햅틱이 재생되는지 여부를 나타내는 Boolean 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:allowhapticsandsystemsoundsduringrecording:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:allowhapticsandsystemsoundsduringrecording:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:allowhapticsandsystemsoundsduringrecording:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:allowhapticsandsystemsoundsduringrecording:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:allowhapticsandsystemsoundsduringrecording:0004:0004">tvOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:allowhapticsandsystemsoundsduringrecording:0004:0005">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:allowhapticsandsystemsoundsduringrecording:0004:0006">watchOS 6.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var allowHapticsAndSystemSoundsDuringRecording: Bool { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 property의 기본값은 <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_0@@</a>입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avaudiosession/isotheraudioplaying.md">var isOtherAudioPlaying: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">다른 앱이 오디오를 재생하는지 여부를 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avaudiosession/secondaryaudioshouldbesilencedhint.md">var secondaryAudioShouldBeSilencedHint: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">비혼합(nonmixable) audio session을 가진 다른 앱이 오디오를 재생하는지 여부를 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avaudiosession/silencesecondaryaudiohintnotification.md">class let silenceSecondaryAudioHintNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">다른 앱의 주요 오디오가 시작 및 중단될 때 시스템이 게시하는 알림입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avaudiosession/setallowhapticsandsystemsoundsduringrecording(_:">func setAllowHapticsAndSystemSoundsDuringRecording(Bool) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">오디오 입력으로 녹음할 때 시스템 사운드와 햅틱이 재생되는지 여부를 나타내는 Boolean 값을 설정합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiosession/allowhapticsandsystemsoundsduringrecording">View on Apple Developer</a>*</span>

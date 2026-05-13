---
source_path: "documentation/AVFAudio/avaudiosequencerusercallback.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiosequencerusercallback"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avaudiosequencerusercallback:0000:0001">AVAudioSequencerUserCallback</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiosequencerusercallback:0001:0001">**Framework**: AVFAudio **Kind**: typealias</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiosequencerusercallback:0002:0001">A callback the sequencer calls asynchronously during playback when it encounters a user event.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiosequencerusercallback:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avaudiosequencerusercallback:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiosequencerusercallback:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiosequencerusercallback:0004:0003">Mac Catalyst 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiosequencerusercallback:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiosequencerusercallback:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiosequencerusercallback:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
typealias AVAudioSequencerUserCallback = (AVMusicTrack, Data, AVMusicTimeStamp) -> Void
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">This property returns <code>nil</code> if you’re not encoding.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">The <code>userData</code> this returns is unique to each <a href="avmusicuserevent.md">@@TOKEN_1@@</a> instance.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>track</code>: The track that contains the user event.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>userData</code>: The data used to initialize the user event.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0003"><code>timeStamp</code>: The beat location of the event.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avaudiosequencer/setusercallback(_:">func setUserCallback(AVAudioSequencerUserCallback?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">Adds a callback that the sequencer calls each time it encounters a user event during playback.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiosequencerusercallback">View on Apple Developer</a>*</span>

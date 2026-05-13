---
source_path: "documentation/AVFAudio/avaudiosession/mode-swift.struct/spokenaudio.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiosession/mode-swift.struct/spokenaudio"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:spokenaudio:0000:0001">spokenAudio</span>

<span class="ko-segment" data-segment-id="seg:paragraph:spokenaudio:0001:0001">**Framework**: AVFAudio **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:spokenaudio:0002:0001">A mode used for continuous spoken audio to pause the audio when another app plays a short audio prompt.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:spokenaudio:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:spokenaudio:0004:0001">iOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:spokenaudio:0004:0002">iPadOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:spokenaudio:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:spokenaudio:0004:0004">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:spokenaudio:0004:0005">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:spokenaudio:0004:0006">watchOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static let spokenAudio: AVAudioSession.Mode
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">This mode is appropriate for apps that play continuous spoken audio, such as podcasts or audio books.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">Setting this mode indicates that your app should pause, rather than duck, its audio if another app plays a spoken audio prompt.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">After the interrupting app’s audio ends, you can resume your app’s audio playback.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avaudiosession/mode-swift.struct/default.md">static let @@TOKEN_0@@: AVAudioSession.Mode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">The default audio session mode.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avaudiosession/mode-swift.struct/dualroute.md">static let dualRoute: AVAudioSession.Mode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">앱에 카메라에 대한 사용자 권한이 없음을 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avaudiosession/mode-swift.struct/gamechat.md">static let gameChat: AVAudioSession.Mode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">A mode that the GameKit framework sets on behalf of an application that uses GameKit’s voice chat service.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avaudiosession/mode-swift.struct/measurement.md">static let measurement: AVAudioSession.Mode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">A mode that indicates that your app is performing measurement of audio input or output.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avaudiosession/mode-swift.struct/movieplayback.md">static let moviePlayback: AVAudioSession.Mode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">A mode that indicates that your app is playing back movie content.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avaudiosession/mode-swift.struct/shortformvideo.md">static let shortFormVideo: AVAudioSession.Mode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">Appropriate for applications playing short-form video content.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avaudiosession/mode-swift.struct/videochat.md">static let videoChat: AVAudioSession.Mode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">A mode that indicates that your app is engaging in online video conferencing.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avaudiosession/mode-swift.struct/videorecording.md">static let videoRecording: AVAudioSession.Mode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">A mode that indicates that your app is recording a movie.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="../visionOS/happybeam.md">Happy Beam</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">A mode that indicates that your app is performing two-way voice communication, such as using Voice over Internet Protocol (VoIP).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="../visionOS/creating-a-painting-space-in-visionos.md">Creating a 3D painting space</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">A mode that indicates that your app plays audio using text-to-speech.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiosession/mode-swift.struct/spokenaudio">View on Apple Developer</a>*</span>

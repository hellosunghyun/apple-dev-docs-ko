---
source_path: "documentation/AVFAudio/avaudiosession/mode-swift.struct/measurement.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiosession/mode-swift.struct/measurement"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:measurement:0000:0001">measurement</span>

<span class="ko-segment" data-segment-id="seg:paragraph:measurement:0001:0001">**Framework**: AVFAudio **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:measurement:0002:0001">앱이 오디오 입력 또는 출력의 측정을 수행하고 있음을 나타내는 모드입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:measurement:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:measurement:0004:0001">iOS 5.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:measurement:0004:0002">iPadOS 5.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:measurement:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:measurement:0004:0004">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:measurement:0004:0005">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:measurement:0004:0006">watchOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static let measurement: AVAudioSession.Mode
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">The necessary parameters for this type are <a href="avaudiouniteqfilterparameters/frequency.md">@@TOKEN_0@@</a> (center), <a href="avaudiouniteqfilterparameters/bandwidth.md">@@TOKEN_1@@</a>, and <a href="avaudiouniteqfilterparameters/gain.md">@@TOKEN_2@@</a>.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">두 개 이상의 내장 마이크가 장착된 기기에서 녹음할 때 세션은 기본 마이크를 사용합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001"><a href="avaudiosession/category-swift.struct/playback.md">@@TOKEN_0@@</a>, <a href="avaudiosession/category-swift.struct/record.md">@@TOKEN_1@@</a>, <a href="avaudiosession/category-swift.struct/playandrecord.md">@@TOKEN_2@@</a> 오디오 세션 카테고리와 함께 사용합니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0010:0001">❗ **중요**: 이 모드는 입력 및 출력 신호의 일부 다이내믹스 처리를 비활성화하여 출력 재생 레벨이 낮아집니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avaudiosession/mode-swift.struct/default.md">static let @@TOKEN_0@@: AVAudioSession.Mode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">기본 오디오 세션 모드입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avaudiosession/mode-swift.struct/dualroute.md">static let dualRoute: AVAudioSession.Mode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">입력과 출력을 모두 지원하는 보조 오디오 장치와 내장 마이크/스피커를 동시에 사용할 수 있게 해주는 모드입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avaudiosession/mode-swift.struct/gamechat.md">static let gameChat: AVAudioSession.Mode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">GameKit framework가 GameKit 음성 채팅 서비스를 사용하는 애플리케이션을 대신해 설정하는 모드입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avaudiosession/mode-swift.struct/movieplayback.md">static let moviePlayback: AVAudioSession.Mode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">앱이 동영상 콘텐츠를 재생하고 있음을 나타내는 모드입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avaudiosession/mode-swift.struct/shortformvideo.md">static let shortFormVideo: AVAudioSession.Mode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">짧은 형태의 비디오 콘텐츠를 재생하는 애플리케이션에 적합합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avaudiosession/mode-swift.struct/spokenaudio.md">static let spokenAudio: AVAudioSession.Mode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">다른 앱이 짧은 오디오 프롬프트를 재생할 때 연속적인 음성 오디오를 일시 정지하는 데 사용되는 모드입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avaudiosession/mode-swift.struct/videochat.md">static let videoChat: AVAudioSession.Mode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">앱이 온라인 화상 회의를 수행하고 있음을 나타내는 모드입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avaudiosession/mode-swift.struct/videorecording.md">static let videoRecording: AVAudioSession.Mode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">앱이 영화를 녹화하고 있음을 나타내는 모드입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avaudiosession/mode-swift.struct/voicechat.md">static let voiceChat: AVAudioSession.Mode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">예를 들어 Voice over Internet Protocol(VoIP)로 앱이 양방향 음성 통신을 수행하고 있음을 나타내는 모드입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="avaudiosession/mode-swift.struct/voiceprompt.md">static let voicePrompt: AVAudioSession.Mode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">앱이 텍스트 음성 변환으로 오디오를 재생하고 있음을 나타내는 모드입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiosession/mode-swift.struct/measurement">View on Apple Developer</a>*</span>

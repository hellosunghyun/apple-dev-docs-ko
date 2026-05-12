---
source_path: "documentation/AVFAudio/avaudiosession/renderingmode-swiftenum.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiosession/renderingmode-swiftenum"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avaudiosessionrenderingmode:0000:0001">AVAudioSession.RenderingMode</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiosessionrenderingmode:0001:0001">**Framework**: AVFAudio **Kind**: enum</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiosessionrenderingmode:0002:0001">오디오 세션 렌더링 모드 식별자입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiosessionrenderingmode:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avaudiosessionrenderingmode:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiosessionrenderingmode:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiosessionrenderingmode:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiosessionrenderingmode:0004:0004">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiosessionrenderingmode:0004:0005">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiosessionrenderingmode:0004:0006">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
enum RenderingMode
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:getting-the-rendering-modes:0008:0001">렌더링 모드 가져오기</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-the-rendering-modes:0009:0001"><a href="avaudiosession/renderingmode-swift.enum/monostereo.md">AVAudioSession.RenderingMode.monoStereo</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-the-rendering-modes:0010:0001">멀티 채널이 아닌 오디오를 나타내는 모드입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-the-rendering-modes:0011:0001"><a href="avaudiosession/renderingmode-swift.enum/surround.md">AVAudioSession.RenderingMode.surround</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-the-rendering-modes:0012:0001">일반적인 멀티 채널 오디오를 나타내는 모드입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-the-rendering-modes:0013:0001"><a href="avaudiosession/renderingmode-swift.enum/spatialaudio.md">AVAudioSession.RenderingMode.spatialAudio</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-the-rendering-modes:0014:0001">하드웨어 기능이 Dolby를 지원하지 않을 때 대체로 사용되는 모드입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-the-rendering-modes:0015:0001"><a href="avaudiosession/renderingmode-swift.enum/dolbyaudio.md">AVAudioSession.RenderingMode.dolbyAudio</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-the-rendering-modes:0016:0001">Dolby 오디오를 나타내는 모드입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-the-rendering-modes:0017:0001"><a href="avaudiosession/renderingmode-swift.enum/dolbyatmos.md">AVAudioSession.RenderingMode.dolbyAtmos</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-the-rendering-modes:0018:0001">Dolby Atmos를 나타내는 모드입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-the-rendering-modes:0019:0001"><a href="avaudiosession/renderingmode-swift.enum/notapplicable.md">AVAudioSession.RenderingMode.notApplicable</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:getting-the-rendering-modes:0020:0001">로드 또는 재생 상태에 있는 자산이 없음을 나타내는 모드입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0021:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0022:0001"><a href="avaudiosession/renderingmode-swift.enum/init(rawvalue:">init?(rawValue: Int)</a>.md)</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0023:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0024:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0025:0001"><a href="../Swift/BitwiseCopyable.md">BitwiseCopyable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0025:0002"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0025:0003"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0025:0004"><a href="../Swift/RawRepresentable.md">RawRepresentable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0025:0005"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0025:0006"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0026:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="avaudiosession/renderingmode-swift.property.md">var renderingMode: AVAudioSession.RenderingMode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">현재 오디오 세션의 렌더링 모드입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="avaudiosession/renderingmodechangenotification.md">class let renderingModeChangeNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">시스템이 렌더링 모드가 변경될 때 게시하는 알림입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001">[var supportedOutputChannelLayouts: [AVAudioChannelLayout]](avaudiosession/supportedoutputchannellayouts.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">현재 경로가 지원하는 채널 레이아웃 배열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0033:0001"><a href="avaudiosession/renderingcapabilitieschangenotification.md">class let renderingCapabilitiesChangeNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">시스템이 렌더링 기능이 변경될 때 게시하는 알림입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0036:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiosession/renderingmode-swift.enum">View on Apple Developer</a>*</span>

---
source_path: "documentation/AVFAudio/avaudiosession/iotype/notspecified.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiosession/iotype/notspecified"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avaudiosessioniotypenotspecified:0000:0001">AVAudioSession.IOType.notSpecified</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiosessioniotypenotspecified:0001:0001">**Framework**: AVFAudio **Kind**: case</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiosessioniotypenotspecified:0002:0001">기본 오디오 세션 I/O 유형입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiosessioniotypenotspecified:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avaudiosessioniotypenotspecified:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiosessioniotypenotspecified:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiosessioniotypenotspecified:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiosessioniotypenotspecified:0004:0004">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiosessioniotypenotspecified:0004:0005">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiosessioniotypenotspecified:0004:0006">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
case notSpecified
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 I/O 유형은 앱이 <a href="https://developer.apple.com/documentation/AVFoundation/AVCaptureSession">@@TOKEN_0@@</a>을 사용하지 않거나 동일한 실시간 I/O 콜백에서 입력과 출력 오디오를 통합해야 하는 특정 요구사항이 없는 경우에 사용합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">앱이 캡처 세션을 사용하지 않으면 <a href="avaudiosession/category-swift.struct/playandrecord.md">@@TOKEN_0@@</a> 카테고리 사용 시 통합된 I/O가 제공됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">앱이 캡처 세션을 사용하는 경우, 이 값을 지정하면 이미 실행 중인 출력 오디오에 글리치 없이 세션이 녹화를 시작할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">또한 시스템에서 전력 절약 최적화를 사용할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="avaudiosession/iotype/aggregated.md">AVAudioSession.IOType.aggregated</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">오디오 입력과 출력이 동일한 실시간 I/O 콜백에서 표시되어야 하는지 나타내는 I/O 유형입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiosession/iotype/notspecified">View on Apple Developer</a>*</span>

---
source_path: "documentation/AVFAudio/avaudiosession/inputnumberofchannels.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiosession/inputnumberofchannels"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:inputnumberofchannels:0000:0001">inputNumberOfChannels</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inputnumberofchannels:0001:0001">**Framework**: AVFAudio **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inputnumberofchannels:0002:0001">현재 라우트의 오디오 입력 채널 수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inputnumberofchannels:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:inputnumberofchannels:0004:0001">iOS 6.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:inputnumberofchannels:0004:0002">iPadOS 6.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:inputnumberofchannels:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:inputnumberofchannels:0004:0004">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:inputnumberofchannels:0004:0005">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:inputnumberofchannels:0004:0006">watchOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var inputNumberOfChannels: Int { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">Use this I/O type if your app doesn’t use <a href="https://developer.apple.com/documentation/AVFoundation/AVCaptureSession">@@TOKEN_0@@</a>, or doesn’t have any specific requirements for aggregating input and output audio in the same realtime I/O callback.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">If your app doesn’t use a capture session, it gets aggregated I/O when using the <a href="avaudiosession/category-swift.struct/playandrecord.md">@@TOKEN_0@@</a> category.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avaudiosession/preferredinputnumberofchannels.md">var preferredInputNumberOfChannels: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">현재 라우트의 선호 입력 채널 수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avaudiosession/setpreferredinputnumberofchannels(_:">func setPreferredInputNumberOfChannels(Int) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">현재 라우트의 선호 입력 채널 수를 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avaudiosession/maximuminputnumberofchannels.md">var maximumInputNumberOfChannels: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">현재 오디오 라우트에서 사용 가능한 최대 입력 채널 수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiosession/inputnumberofchannels">View on Apple Developer</a>*</span>

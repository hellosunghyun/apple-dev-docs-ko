---
source_path: "documentation/AVFAudio/avaudiosession/port/continuitymicrophone.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiosession/port/continuitymicrophone"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:continuitymicrophone:0000:0001">continuityMicrophone</span>

<span class="ko-segment" data-segment-id="seg:paragraph:continuitymicrophone:0001:0001">**Framework**: AVFAudio **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:continuitymicrophone:0002:0001">Apple TV의 Continuity Microphone에서 들어오는 입력입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:continuitymicrophone:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:continuitymicrophone:0004:0001">iOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:continuitymicrophone:0004:0002">iPadOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:continuitymicrophone:0004:0003">Mac Catalyst 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:continuitymicrophone:0004:0004">tvOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:continuitymicrophone:0004:0005">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:continuitymicrophone:0004:0006">watchOS 10.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static let continuityMicrophone: AVAudioSession.Port
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">You may set the value of a capture device’s <a href="avcapturedevice/activeformat.md">@@TOKEN_0@@</a> in two ways:</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avcaptureaudiofileoutput/metadata.md">static let builtInMic: AVAudioSession.Port</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">기기의 내장 마이크 입력입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avaudiosession/port/headsetmic.md">static let headsetMic: AVAudioSession.Port</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">유선 헤드셋의 내장 마이크에서의 입력입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avaudiounitcomponentmanager/components(matching:">static let lineIn: AVAudioSession.Port</a>-9qt94.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">도크 커넥터의 라인 레벨 입력입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiosession/port/continuitymicrophone">View on Apple Developer</a>*</span>

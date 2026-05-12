---
source_path: "documentation/AVFAudio/avaudiosession/stereoorientation.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiosession/stereoorientation"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avaudiosessionstereoorientation:0000:0001">AVAudioSession.StereoOrientation</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiosessionstereoorientation:0001:0001">**Framework**: AVFAudio **Kind**: enum</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiosessionstereoorientation:0002:0001">지원되는 스테레오 방향을 정의하는 상수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiosessionstereoorientation:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avaudiosessionstereoorientation:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiosessionstereoorientation:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiosessionstereoorientation:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiosessionstereoorientation:0004:0004">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiosessionstereoorientation:0004:0005">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiosessionstereoorientation:0004:0006">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
enum StereoOrientation
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:stereo-orientations:0008:0001">스테레오 방향</span>

- <span class="ko-segment" data-segment-id="seg:list:stereo-orientations:0009:0001"><a href="avaudiosession/stereoorientation/none.md">AVAudioSession.StereoOrientation.none</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:stereo-orientations:0010:0001">오디오 세션이 스테레오 녹음용으로 구성되어 있지 않습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:stereo-orientations:0011:0001"><a href="avaudiosession/stereoorientation/portrait.md">AVAudioSession.StereoOrientation.portrait</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:stereo-orientations:0012:0001">오디오 캡처는 USB-C 또는 Lightning 커넥터가 아래에 오도록 세로 방향으로 수행해야 합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:stereo-orientations:0013:0001"><a href="avaudiosession/stereoorientation/portraitupsidedown.md">AVAudioSession.StereoOrientation.portraitUpsideDown</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:stereo-orientations:0014:0001">오디오 캡처는 USB-C 또는 Lightning 커넥터가 위에 오도록 세로 방향으로 수행해야 합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:stereo-orientations:0015:0001"><a href="avaudiosession/stereoorientation/landscaperight.md">AVAudioSession.StereoOrientation.landscapeRight</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:stereo-orientations:0016:0001">오디오 캡처는 USB-C 또는 Lightning 커넥터가 오른쪽에 오도록 가로 방향으로 수행해야 합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:stereo-orientations:0017:0001"><a href="avaudiosession/stereoorientation/landscapeleft.md">AVAudioSession.StereoOrientation.landscapeLeft</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:stereo-orientations:0018:0001">오디오 캡처는 USB-C 또는 Lightning 커넥터가 왼쪽에 오도록 가로 방향으로 수행해야 합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0019:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0020:0001"><a href="avaudiosession/stereoorientation/init(rawvalue:">init?(rawValue: Int)</a>.md)</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0021:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0022:0001">준수 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0001"><a href="../Swift/BitwiseCopyable.md">BitwiseCopyable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0002"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0003"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0004"><a href="../Swift/RawRepresentable.md">RawRepresentable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0005"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0006"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0024:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="avaudiosession/inputorientation.md">var inputOrientation: AVAudioSession.StereoOrientation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">스테레오 녹음을 위해 구성된 내장 마이크에서 오디오를 캡처할 때 좌우를 나타내는 방향 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="avaudiosession/preferredinputorientation.md">var preferredInputOrientation: AVAudioSession.StereoOrientation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">오디오 세션의 선호 스테레오 입력 방향입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="avaudiosession/setpreferredinputorientation(_:">func setPreferredInputOrientation(AVAudioSession.StereoOrientation) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">오디오 세션의 선호 스테레오 입력 방향을 설정합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiosession/stereoorientation">View on Apple Developer</a>*</span>

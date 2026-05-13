---
source_path: "documentation/AVFAudio/avaudiosession/setisnowplayingcandidate.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiosession/setisnowplayingcandidate"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:setisnowplayingcandidate:0000:0001">setIsNowPlayingCandidate(_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setisnowplayingcandidate:0001:0001">**Framework**: AVFAudio **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setisnowplayingcandidate:0002:0001">오디오 세션이 Now Playing 세션 후보인지 나타내는 부울 값을 설정합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setisnowplayingcandidate:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:setisnowplayingcandidate:0004:0001">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func setIsNowPlayingCandidate(_ inValue: Bool) throws
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">앱에서 Now Playing 후보가 될 수 있는 오디오 세션은 하나뿐입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">동일한 앱에 대해 여러 오디오 세션을 Now Playing 후보로 지정하면 모두 자격이 없어집니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>inValue</code>: 설정할 새 상태입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avaudiosession/intendedspatialexperience-1bpnq.md">var intendedSpatialExperience: any AVAudioSessionSpatialExperience</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">앱이 사용자에게 제공하려는 공간 오디오 경험입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avaudiosession/setintendedspatialexperience(_:">func setIntendedSpatialExperience(any AVAudioSessionSpatialExperience) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">앱이 사용자에게 제공하려는 공간 오디오 경험을 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avaudiosessionspatialexperience-swift.protocol.md">protocol AVAudioSessionSpatialExperience</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0002"><a href="avaudiosession/isnowplayingcandidate.md">var isNowPlayingCandidate: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">오디오 세션이 Now Playing 세션 후보인지 나타내는 부울 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiosession/setisnowplayingcandidate(_:">View on Apple Developer</a>)*</span>

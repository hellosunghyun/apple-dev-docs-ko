---
source_path: "documentation/AVFAudio/avaudiosession/setintendedspatialexperience.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiosession/setintendedspatialexperience"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:setintendedspatialexperience:0000:0001">setIntendedSpatialExperience(_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setintendedspatialexperience:0001:0001">**Framework**: AVFAudio **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setintendedspatialexperience:0002:0001">앱이 사용자에게 제공하려는 공간 음향 경험을 설정합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setintendedspatialexperience:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:setintendedspatialexperience:0004:0001">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
@nonobjc
func setIntendedSpatialExperience(_ spatialExperience: any AVAudioSessionSpatialExperience) throws
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

- <span class="ko-segment" data-segment-id="seg:list:discussion:0008:0001"><code>spatialExperience</code>: 설정할 공간 음향 경험입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avaudiosession/intendedspatialexperience-1bpnq.md">var intendedSpatialExperience: any AVAudioSessionSpatialExperience</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">앱이 사용자에게 제공하려는 공간 음향 경험입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avaudiosessionspatialexperience-swift.protocol.md">protocol AVAudioSessionSpatialExperience</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0002"><a href="avaudiosession/isnowplayingcandidate.md">var isNowPlayingCandidate: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">오디오 세션이 Now Playing 세션이 될 후보인지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avspeechsynthesisvoice/speechvoices.md">func setIsNowPlayingCandidate(Bool) throws</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">오디오 세션이 Now Playing 세션이 될 후보인지 나타내는 Boolean 값을 설정합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiosession/setintendedspatialexperience(_:">View on Apple Developer</a>)*</span>

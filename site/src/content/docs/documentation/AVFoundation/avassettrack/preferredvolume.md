---
source_path: "documentation/AVFoundation/avassettrack/preferredvolume.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassettrack/preferredvolume"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:preferredvolume:0000:0001">preferredVolume</span>

<span class="ko-segment" data-segment-id="seg:paragraph:preferredvolume:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:preferredvolume:0002:0001">가청 미디어를 재생할 때의 트랙 볼륨 선호도입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:preferredvolume:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:preferredvolume:0004:0001">iOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:preferredvolume:0004:0002">iPadOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:preferredvolume:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:preferredvolume:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:preferredvolume:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:preferredvolume:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:preferredvolume:0004:0007">watchOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var preferredVolume: Float { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">오디오 트랙의 선호 볼륨은 일반적으로 <code>1.0</code>이지만 항상 그런 것은 아닙니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">비가청 트랙의 경우 값은 <code>0.0</code>입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassettrack/preferredvolume">View on Apple Developer</a>*</span>

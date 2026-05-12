---
source_path: "documentation/AVFoundation/avplayeritem/tracks.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avplayeritem/tracks"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:tracks:0000:0001">tracks</span>

<span class="ko-segment" data-segment-id="seg:paragraph:tracks:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:tracks:0002:0001">player item track 객체 배열입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:tracks:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:tracks:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:tracks:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:tracks:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:tracks:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:tracks:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:tracks:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:tracks:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
nonisolated
var tracks: [AVPlayerItemTrack] { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">플레이어가 기본 트랙을 로드하기 전에는 값이 빈 배열입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">이 속성 값을 키-값 방식으로 관찰하여 유효한 트랙이 사용 가능해지면 즉시 접근합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avplayeritem/tracks">View on Apple Developer</a>*</span>

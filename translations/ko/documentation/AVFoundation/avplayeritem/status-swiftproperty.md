---
source_path: "documentation/AVFoundation/avplayeritem/status-swiftproperty.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avplayeritem/status-swiftproperty"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:status:0000:0001">status</span>

<span class="ko-segment" data-segment-id="seg:paragraph:status:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:status:0002:0001">플레이어 항목의 상태입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:status:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:status:0004:0001">iOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:status:0004:0002">iPadOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:status:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:status:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:status:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:status:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:status:0004:0007">watchOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
nonisolated
var status: AVPlayerItem.Status { get }
```

## <span class="ko-segment" data-segment-id="seg:heading:mentions:0007:0001">Mentions</span>

- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0001"><a href="controlling-the-transport-behavior-of-a-player.md">Controlling the transport behavior of a player</a></span>
- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0002"><a href="observing-playback-state-in-swiftui.md">Observing playback state in SwiftUI</a></span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">플레이어 항목이 생성되면 <a href="avplayeritem/status-swift.property.md">@@TOKEN_0@@</a>는 <a href="avplayeritem/status-swift.enum/unknown.md">@@TOKEN_1@@</a>입니다. 즉, 미디어가 아직 로드되지 않았고 재생을 위해 아직 큐에 추가되지 않았음을 의미합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">플레이어 항목을 <a href="avplayer.md">@@TOKEN_0@@</a>와 연결하면 항목의 미디어를 즉시 큐에 넣고 재생 준비를 시작합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0003">플레이어 항목의 미디어가 로드되어 사용 준비가 되면 상태가 <a href="avplayeritem/status-swift.enum/readytoplay.md">@@TOKEN_0@@</a>로 변경됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0004">이 변경은 key-value observing을 사용해 관찰할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">가능한 값은 <a href="avplayeritem/status-swift.enum.md">@@TOKEN_0@@</a>에서 확인하세요.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0012:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avplayeritem/status-swift.enum.md">AVPlayerItem.Status</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">재생 항목의 상태입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avplayeritem/error.md">var error: (any Error)?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">재생 항목이 실패한 원인 오류입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avplayeritem/status-swift.property">View on Apple Developer</a>*</span>

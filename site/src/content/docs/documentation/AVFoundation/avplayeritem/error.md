---
source_path: "documentation/AVFoundation/avplayeritem/error.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avplayeritem/error"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:error:0000:0001">error</span>

<span class="ko-segment" data-segment-id="seg:paragraph:error:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:error:0002:0001">The error that caused the player item to fail.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:error:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:error:0004:0001">iOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:error:0004:0002">iPadOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:error:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:error:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:error:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:error:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:error:0004:0007">watchOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
nonisolated
var error: (any Error)? { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">The value of this property is an error that describes what caused the player item to no longer be able to be played.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">ARKit는 raw feature point의 수와 배치가 소프트웨어 릴리스 간에 안정적으로 유지된다는 것을 보장하지 않습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="avplayeritem/status-swift.property.md">var status: AVPlayerItem.Status</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">The status of the player item.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avplayeritem/status-swift.enum.md">AVPlayerItem.Status</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">The statuses for a player item.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avplayeritem/error">View on Apple Developer</a>*</span>

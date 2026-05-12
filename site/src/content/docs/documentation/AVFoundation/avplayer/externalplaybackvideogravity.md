---
source_path: "documentation/AVFoundation/avplayer/externalplaybackvideogravity.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avplayer/externalplaybackvideogravity"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:externalplaybackvideogravity:0000:0001">externalPlaybackVideoGravity</span>

<span class="ko-segment" data-segment-id="seg:paragraph:externalplaybackvideogravity:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:externalplaybackvideogravity:0002:0001">외부 재생 모드 전용 플레이어의 비디오 gravity입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:externalplaybackvideogravity:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:externalplaybackvideogravity:0004:0001">iOS 6.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:externalplaybackvideogravity:0004:0002">iPadOS 6.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:externalplaybackvideogravity:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:externalplaybackvideogravity:0004:0004">tvOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
nonisolated
var externalPlaybackVideoGravity: AVLayerVideoGravity { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">Inspect the value of the player’s <a href="avplayer/error.md">@@TOKEN_0@@</a> property to determine the details of the failure.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avplayer/allowsexternalplayback.md">var allowsExternalPlayback: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">플레이어가 외부 재생 모드로 전환하는 것을 허용하는지 나타내는 Bool 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avplayer/isexternalplaybackactive.md">var isExternalPlaybackActive: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">플레이어가 현재 외부 재생 모드에서 비디오를 재생하고 있는지를 나타내는 Bool 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avplayer/usesexternalplaybackwhileexternalscreenisactive.md">var usesExternalPlaybackWhileExternalScreenIsActive: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">외부 화면 모드가 활성 상태일 때 플레이어가 자동으로 외부 재생 모드로 전환되어야 하는지를 나타내는 Bool 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avplayer/externalplaybackvideogravity">View on Apple Developer</a>*</span>

---
source_path: "documentation/AVFoundation/avplayeritem/isplaybacklikelytokeepup.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avplayeritem/isplaybacklikelytokeepup"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:isplaybacklikelytokeepup:0000:0001">isPlaybackLikelyToKeepUp</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isplaybacklikelytokeepup:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isplaybacklikelytokeepup:0002:0001">항목이 끊김 없이 재생될 가능성이 있는지를 나타내는 부울 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isplaybacklikelytokeepup:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:isplaybacklikelytokeepup:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:isplaybacklikelytokeepup:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:isplaybacklikelytokeepup:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:isplaybacklikelytokeepup:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:isplaybacklikelytokeepup:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:isplaybacklikelytokeepup:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:isplaybacklikelytokeepup:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
nonisolated
var isPlaybackLikelyToKeepUp: Bool { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">This property provides access to an instance of <a href="avassetcache.md">@@TOKEN_0@@</a> to use for inspection of locally cached media data.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">The value of this property is <code>nil</code> if you haven’t configured the asset to store or access media data from disk.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003"><code>playbackLikelyToKeepUp</code>는 <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_1@@</a>를 나타낼 수 있지만, 속성 <a href="avplayeritem/isplaybackbufferfull.md">@@TOKEN_2@@</a>은 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_3@@</a>를 나타낼 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0004">이 경우 재생 버퍼가 용량에 도달했지만, 향후 재생이 계속 유지될 가능성을 예측할 통계 데이터가 없습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0005">미디어 재생을 계속할지는 사용자가 결정해야 합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avplayeritem/isplaybackbufferfull.md">var isPlaybackBufferFull: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">내부 미디어 버퍼가 가득 차서 추가 I/O가 중단됨을 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avplayeritem/isplaybackbufferempty.md">var isPlaybackBufferEmpty: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">버퍼링된 모든 미디어가 사용되었고, 재생이 중단되거나 종료될지를 나타내는 부울 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avplayeritem/isplaybacklikelytokeepup">View on Apple Developer</a>*</span>

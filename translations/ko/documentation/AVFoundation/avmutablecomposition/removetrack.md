---
source_path: "documentation/AVFoundation/avmutablecomposition/removetrack.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avmutablecomposition/removetrack"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:removetrack:0000:0001">removeTrack(_:)`</span>

<span class="ko-segment" data-segment-id="seg:paragraph:removetrack:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:removetrack:0002:0001">지정한 트랙을 composition에서 제거합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:removetrack:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:removetrack:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:removetrack:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:removetrack:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:removetrack:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:removetrack:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:removetrack:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:removetrack:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func removeTrack(_ track: AVCompositionTrack)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">트랙을 제거하면 시스템에서 해당 composition 값이 nil로 설정됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>track</code>: 제거할 트랙입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avmutablecomposition/mutabletrack(compatiblewith:">func mutableTrack(compatibleWith: AVAssetTrack) -&gt; AVMutableCompositionTrack?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">지정한 에셋 트랙의 임의 시간 범위를 삽입할 수 있는 composition 트랙을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avmutablecomposition/addmutabletrack(withmediatype:preferredtrackid:">func addMutableTrack(withMediaType: AVMediaType, preferredTrackID: CMPersistentTrackID) -&gt; AVMutableCompositionTrack?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">비어 있는 트랙을 composition에 추가합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmutablecomposition/removetrack(_:">View on Apple Developer</a>)*</span>

---
source_path: "documentation/AVFoundation/avmutablemovietrack/availabletrackassociationtypes.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/availabletrackassociationtypes"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:availabletrackassociationtypes:0000:0001">availableTrackAssociationTypes</span>

<span class="ko-segment" data-segment-id="seg:paragraph:availabletrackassociationtypes:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:availabletrackassociationtypes:0002:0001">An array of association types that the track uses to associate with other tracks.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:availabletrackassociationtypes:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:availabletrackassociationtypes:0004:0001">iOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:availabletrackassociationtypes:0004:0002">iPadOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:availabletrackassociationtypes:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:availabletrackassociationtypes:0004:0004">macOS 10.9+</span>
- <span class="ko-segment" data-segment-id="seg:list:availabletrackassociationtypes:0004:0005">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:availabletrackassociationtypes:0004:0006">watchOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var availableTrackAssociationTypes: [AVAssetTrack.AssociationType] { get }
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001">[func associatedTracks(ofType: AVAssetTrack.AssociationType) -&gt; [AVAssetTrack]](avmutablemovietrack/associatedtracks(oftype:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">지정된 연결 유형을 가진 연관 트랙의 배열을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avmutablemovietrack/addtrackassociation(to:type:">func addTrackAssociation(to: AVMovieTrack, type: AVAssetTrack.AssociationType)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">두 트랙 간에 특정 유형의 트랙 연결을 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avmutablevideocompositionlayerinstruction/setopacity(_:at:">func removeTrackAssociation(to: AVMovieTrack, type: AVAssetTrack.AssociationType)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">두 트랙 간에 특정 유형의 트랙 연결을 제거합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/availabletrackassociationtypes">View on Apple Developer</a>*</span>

---
source_path: "documentation/AVFoundation/avmutablemovietrack/associatedtracks-oftype.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/associatedtracks-oftype"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:associatedtracksoftype:0000:0001">associatedTracks(ofType:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:associatedtracksoftype:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:associatedtracksoftype:0002:0001">Returns an array of associated tracks that have the specified association type.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:associatedtracksoftype:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:associatedtracksoftype:0004:0001">iOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:associatedtracksoftype:0004:0002">iPadOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:associatedtracksoftype:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:associatedtracksoftype:0004:0004">macOS 10.9+</span>
- <span class="ko-segment" data-segment-id="seg:list:associatedtracksoftype:0004:0005">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:associatedtracksoftype:0004:0006">watchOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func associatedTracks(ofType trackAssociationType: AVAssetTrack.AssociationType) -> [AVAssetTrack]
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">지정한 형식과 일치하는 메타데이터 항목의 배열이며, 일치하는 항목이 없으면 빈 배열을 반환합니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">Apple은 iOS 15, tvOS 15 및 macOS 12 이상에서 이 메서드 사용을 권장하지 않습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">대신 <a href="avassettrack/loadmetadata(for:completionhandler:">@@TOKEN_0@@</a>.md)로 트랙 메타데이터를 비동기적으로 로드합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001"><a href="avassettrack/availablemetadataformats.md">@@TOKEN_0@@</a> 속성을 로드한 후에는 현재 스레드를 차단하지 않고 이 메서드를 호출할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0012:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0001"><code>format</code>: 검색할 메타데이터 항목의 형식입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0014:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001">[var availableTrackAssociationTypes: [AVAssetTrack.AssociationType]](avmutablemovietrack/availabletrackassociationtypes.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">An array of association types that the track uses to associate with other tracks.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avmutablemovietrack/addtrackassociation(to:type:">func addTrackAssociation(to: AVMovieTrack, type: AVAssetTrack.AssociationType)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">Creates a specific type of track association between two tracks.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="avmutablemovietrack/removetrackassociation(to:type:">func removeTrackAssociation(to: AVMovieTrack, type: AVAssetTrack.AssociationType)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">Removes a specific type of track association between two tracks.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/associatedtracks(oftype:">View on Apple Developer</a>)*</span>

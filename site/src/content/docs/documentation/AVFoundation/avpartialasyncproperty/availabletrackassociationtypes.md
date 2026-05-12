---
source_path: "documentation/AVFoundation/avpartialasyncproperty/availabletrackassociationtypes.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avpartialasyncproperty/availabletrackassociationtypes"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:availabletrackassociationtypes:0000:0001">availableTrackAssociationTypes</span>

<span class="ko-segment" data-segment-id="seg:paragraph:availabletrackassociationtypes:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:availabletrackassociationtypes:0002:0001">트랙이 다른 트랙과 연동할 때 사용하는 연관 유형의 배열입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:availabletrackassociationtypes:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:availabletrackassociationtypes:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:availabletrackassociationtypes:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:availabletrackassociationtypes:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:availabletrackassociationtypes:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:availabletrackassociationtypes:0004:0005">tvOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:availabletrackassociationtypes:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:availabletrackassociationtypes:0004:0007">watchOS 8.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static var availableTrackAssociationTypes: AVAsyncProperty<Root, [AVAssetTrack.AssociationType]> { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001"><a href="avasynchronouskeyvalueloading/load(_:isolation:">@@TOKEN_0@@</a>.md) 메서드를 사용해 해당 속성 값을 검색합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001">[func loadAssociatedTracks(ofType: AVAssetTrack.AssociationType, completionHandler: ([AVAssetTrack]?, (any Error)?) -&gt; Void)](avassettrack/loadassociatedtracks(oftype:completionhandler:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">지정된 연결 유형이 있는 연관 트랙을 로드합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avpartialasyncproperty/availabletrackassociationtypes">View on Apple Developer</a>*</span>

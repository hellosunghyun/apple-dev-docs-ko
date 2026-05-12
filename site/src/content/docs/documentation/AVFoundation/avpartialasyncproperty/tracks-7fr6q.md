---
source_path: "documentation/AVFoundation/avpartialasyncproperty/tracks-7fr6q.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avpartialasyncproperty/tracks-7fr6q"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:tracks:0000:0001">tracks</span>

<span class="ko-segment" data-segment-id="seg:paragraph:tracks:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:tracks:0002:0001">영화가 포함하는 트랙입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:tracks:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:tracks:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:tracks:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:tracks:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:tracks:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:tracks:0004:0005">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:tracks:0004:0006">watchOS 8.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static var tracks: AVAsyncProperty<Root, [AVFragmentedMovieTrack]> { get }
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="avfragmentedmovie/loadtrack(withtrackid:completionhandler:">func loadTrack(withTrackID: CMPersistentTrackID, completionHandler: (AVFragmentedMovieTrack?, (any Error)?) -&gt; Void)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">지정한 식별자를 포함하는 트랙을 로드합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001">[func loadTracks(withMediaType: AVMediaType, completionHandler: ([AVFragmentedMovieTrack]?, (any Error)?) -&gt; Void)](avfragmentedmovie/loadtracks(withmediatype:completionhandler:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">지정한 미디어 유형을 포함하는 트랙을 로드합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001">[func loadTracks(withMediaCharacteristic: AVMediaCharacteristic, completionHandler: ([AVFragmentedMovieTrack]?, (any Error)?) -&gt; Void)](avplayeritemoutputpulldelegate/outputmediadatawillchange(_:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">지정한 미디어 특성을 포함하는 트랙을 로드합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avpartialasyncproperty/tracks-7fr6q">View on Apple Developer</a>*</span>

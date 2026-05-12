---
source_path: "documentation/AVFoundation/avfragmentedmovie.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avfragmentedmovie"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avfragmentedmovie:0000:0001">AVFragmentedMovie</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avfragmentedmovie:0001:0001">**Framework**: AVFoundation **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avfragmentedmovie:0002:0001">분할 영화 파일을 나타내는 객체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avfragmentedmovie:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avfragmentedmovie:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avfragmentedmovie:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avfragmentedmovie:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avfragmentedmovie:0004:0004">macOS 10.10+</span>
- <span class="ko-segment" data-segment-id="seg:list:avfragmentedmovie:0004:0005">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avfragmentedmovie:0004:0006">watchOS 6.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class AVFragmentedMovie
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:loading-tracks:0008:0001">트랙 로드</span>

- <span class="ko-segment" data-segment-id="seg:list:loading-tracks:0009:0001">[static var tracks: AVAsyncProperty&lt;Root, [AVFragmentedMovieTrack]&gt;](avpartialasyncproperty/tracks-7fr6q.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:loading-tracks:0010:0001">영화가 포함하는 트랙입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:loading-tracks:0011:0001"><a href="avfragmentedmovie/loadtrack(withtrackid:completionhandler:">func loadTrack(withTrackID: CMPersistentTrackID, completionHandler: (AVFragmentedMovieTrack?, (any Error)?) -&gt; Void)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:loading-tracks:0012:0001">지정된 식별자를 포함하는 트랙을 로드합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:loading-tracks:0013:0001">[func loadTracks(withMediaType: AVMediaType, completionHandler: ([AVFragmentedMovieTrack]?, (any Error)?) -&gt; Void)](avfragmentedmovie/loadtracks(withmediatype:completionhandler:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:loading-tracks:0014:0001">지정된 미디어 유형을 포함하는 트랙을 로드합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:loading-tracks:0015:0001">[func loadTracks(withMediaCharacteristic: AVMediaCharacteristic, completionHandler: ([AVFragmentedMovieTrack]?, (any Error)?) -&gt; Void)](avfragmentedmovie/loadtracks(withmediacharacteristic:completionhandler:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:loading-tracks:0016:0001">지정된 미디어 특성을 포함하는 트랙을 로드합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:accessing-tracks:0017:0001">트랙 접근</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-tracks:0018:0001">[var tracks: [AVFragmentedMovieTrack]](avfragmentedmovie/tracks.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-tracks:0019:0001">영화가 포함하는 트랙입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-tracks:0020:0001"><a href="avfragmentedmovie/track(withtrackid:">func track(withTrackID: CMPersistentTrackID) -&gt; AVFragmentedMovieTrack?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-tracks:0021:0001">영화에서 지정된 식별자를 포함하는 트랙을 가져옵니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-tracks:0022:0001">[func tracks(withMediaType: AVMediaType) -&gt; [AVFragmentedMovieTrack]](avfragmentedmovie/tracks(withmediatype:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-tracks:0023:0001">영화에서 지정된 유형의 미디어를 제공하는 트랙을 가져옵니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-tracks:0024:0001">[func tracks(withMediaCharacteristic: AVMediaCharacteristic) -&gt; [AVFragmentedMovieTrack]](avfragmentedmovie/tracks(withmediacharacteristic:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-tracks:0025:0001">지정된 특성의 미디어를 제공하는 트랙을 영화에서 반환합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0026:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0027:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0028:0001"><a href="avmovie.md">AVMovie</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0029:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0001"><a href="avasynchronouskeyvalueloading.md">AVAsynchronousKeyValueLoading</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0002"><a href="avfragmentminding.md">AVFragmentMinding</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0003"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0004"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0005"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0006"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0007"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0008"><a href="../Foundation/NSCopying.md">NSCopying</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0009"><a href="../Foundation/NSMutableCopying.md">NSMutableCopying</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0010"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0011"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0012"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0031:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="avfragmentedmovietrack.md">class AVFragmentedMovieTrack</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">분할된 영화의 트랙을 나타내는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="avfragmentedmovieminder.md">class AVFragmentedMovieMinder</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">분할된 영화가 추가 영화 조각을 추가하는지 확인하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="avfragmentminding.md">protocol AVFragmentMinding</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">에셋이 fragment minding을 지원하는지 정의하는 프로토콜입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avfragmentedmovie">View on Apple Developer</a>*</span>

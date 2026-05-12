---
source_path: "documentation/AVFoundation/avmovie/tracks-withmediacharacteristic.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avmovie/tracks-withmediacharacteristic"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:trackswithmediacharacteristic:0000:0001">tracks(withMediaCharacteristic:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:trackswithmediacharacteristic:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:trackswithmediacharacteristic:0002:0001">지정된 특성의 미디어를 제공하는 영화의 트랙을 검색합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:trackswithmediacharacteristic:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:trackswithmediacharacteristic:0004:0001">iOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:trackswithmediacharacteristic:0004:0002">iPadOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:trackswithmediacharacteristic:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:trackswithmediacharacteristic:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:trackswithmediacharacteristic:0004:0005">watchOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func tracks(withMediaCharacteristic mediaCharacteristic: AVMediaCharacteristic) -> [AVMovieTrack]
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">미디어 특성을 가진 트랙이 없으면 비어 있는 트랙 배열입니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">Apple은 iOS 15, tvOS 15, macOS 12 및 watchOS 8 이상에서 이 메서드 사용을 권장하지 않습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">대신 <a href="avmovie/loadtracks(withmediacharacteristic:completionhandler:">@@TOKEN_0@@</a>.md)를 사용해 트랙을 비동기 방식으로 로드해야 합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>mediaCharacteristic</code>: 반환할 트랙의 미디어 특성입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001">[var tracks: [AVMovieTrack]](avmovie/tracks.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">영화에 포함된 트랙입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avmovie/track(withtrackid:">func track(withTrackID: CMPersistentTrackID) -&gt; AVMovieTrack?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">영화에서 지정된 식별자를 포함하는 트랙을 검색합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001">[func tracks(withMediaType: AVMediaType) -&gt; [AVMovieTrack]](avmovie/tracks(withmediatype:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">영화에서 지정된 유형의 미디어를 제공하는 트랙을 검색합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmovie/tracks(withmediacharacteristic:">View on Apple Developer</a>)*</span>

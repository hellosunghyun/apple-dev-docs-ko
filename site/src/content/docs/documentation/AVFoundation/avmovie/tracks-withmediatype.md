---
source_path: "documentation/AVFoundation/avmovie/tracks-withmediatype.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avmovie/tracks-withmediatype"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:trackswithmediatype:0000:0001">tracks(withMediaType:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:trackswithmediatype:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:trackswithmediatype:0002:0001">Retrieves tracks in the movie that present media of the specified type.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:trackswithmediatype:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:trackswithmediatype:0004:0001">iOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:trackswithmediatype:0004:0002">iPadOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:trackswithmediatype:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:trackswithmediatype:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:trackswithmediatype:0004:0005">watchOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func tracks(withMediaType mediaType: AVMediaType) -> [AVMovieTrack]
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">사용하지 않는 <a href="https://developer.apple.com/documentation/CoreMedia/CMPersistentTrackID">@@TOKEN_0@@</a> 값입니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">Apple discourages using this method in iOS 15, tvOS 15, macOS 12, and watchOS 8 or later.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">Load tracks asynchronously using <a href="avmovie/loadtracks(withmediatype:completionhandler:">@@TOKEN_0@@</a>.md) instead.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>string</code>: 유효한 SSML 마크업이 포함된 발음 문자열입니다. 잘못된 SSML 문자열을 전달하면 초기화 메서드가 <code>nil</code>을 반환합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001">[var tracks: [AVMovieTrack]](avmovie/tracks.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">The tracks that a movie contains.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avmovie/track(withtrackid:">func track(withTrackID: CMPersistentTrackID) -&gt; AVMovieTrack?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">Retrieves a track in the movie that contains the specified identifier.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001">[func tracks(withMediaCharacteristic: AVMediaCharacteristic) -&gt; [AVMovieTrack]](avmovie/tracks(withmediacharacteristic:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">Retrieves tracks in the movie that present media of the specified characteristic.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmovie/tracks(withmediatype:">View on Apple Developer</a>)*</span>

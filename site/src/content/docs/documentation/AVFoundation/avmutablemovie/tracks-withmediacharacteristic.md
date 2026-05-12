---
source_path: "documentation/AVFoundation/avmutablemovie/tracks-withmediacharacteristic.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avmutablemovie/tracks-withmediacharacteristic"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:trackswithmediacharacteristic:0000:0001">tracks(withMediaCharacteristic:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:trackswithmediacharacteristic:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:trackswithmediacharacteristic:0002:0001">지정된 특성을 갖는 미디어를 제공하는 movie의 트랙을 검색합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:trackswithmediacharacteristic:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:trackswithmediacharacteristic:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:trackswithmediacharacteristic:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:trackswithmediacharacteristic:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:trackswithmediacharacteristic:0004:0004">macOS 10.11+</span>
- <span class="ko-segment" data-segment-id="seg:list:trackswithmediacharacteristic:0004:0005">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:trackswithmediacharacteristic:0004:0006">watchOS 6.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func tracks(withMediaCharacteristic mediaCharacteristic: AVMediaCharacteristic) -> [AVMutableMovieTrack]
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">지정한 미디어 특성을 가진 트랙이 없으면 비어 있는 트랙 배열입니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">This method throws an <a href="https://developer.apple.com/documentation/Foundation/NSExceptionName/invalidArgumentException">@@TOKEN_0@@</a> if you pass an unrecognized <code>exifOrientation</code>.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">대신 <a href="avmutablemovie/loadtracks(withmediacharacteristic:completionhandler:">@@TOKEN_0@@</a>.md)를 사용해 트랙을 비동기적으로 로드합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>exifOrientation</code>: A <a href="https://developer.apple.com/documentation/ImageIO/CGImagePropertyOrientation">@@TOKEN_1@@</a> value expressing how the matte should be rotated or mirrored.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001">[var tracks: [AVMutableMovieTrack]](avsemanticsegmentationmatte/init(fromimagesourceauxiliarydatatype:dictionaryrepresentation:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">movie에 포함된 트랙입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avsemanticsegmentationmatte/replacingsemanticsegmentationmatte(with:">func track(withTrackID: CMPersistentTrackID) -&gt; AVMutableMovieTrack?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">지정한 식별자를 포함하는 movie의 트랙을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001">[func tracks(withMediaType: AVMediaType) -&gt; [AVMutableMovieTrack]](avsemanticsegmentationmatte/dictionaryrepresentation(forauxiliarydatatype:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">지정된 유형의 미디어를 제공하는 movie의 트랙을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avmutablemovie/unusedtrackid.md">func unusedTrackID() -&gt; CMPersistentTrackID</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avsemanticsegmentationmatte/applyingexiforientation(_:">View on Apple Developer</a>)*</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmutablemovie/tracks(withmediacharacteristic:">View on Apple Developer</a>)*</span>

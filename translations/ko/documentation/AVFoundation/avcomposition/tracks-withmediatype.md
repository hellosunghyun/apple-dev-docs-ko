---
source_path: "documentation/AVFoundation/avcomposition/tracks-withmediatype.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcomposition/tracks-withmediatype"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:trackswithmediatype:0000:0001">tracks(withMediaType:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:trackswithmediatype:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:trackswithmediatype:0002:0001">지정된 유형의 미디어를 포함하는 트랙을 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:trackswithmediatype:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:trackswithmediatype:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:trackswithmediatype:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:trackswithmediatype:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:trackswithmediatype:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:trackswithmediatype:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:trackswithmediatype:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:trackswithmediatype:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func tracks(withMediaType mediaType: AVMediaType) -> [AVCompositionTrack]
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">지정한 미디어 유형을 가진 트랙의 배열입니다. 해당 미디어 유형을 가진 트랙이 없으면 빈 배열입니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">Apple은 iOS 15, tvOS 15, macOS 12 및 watchOS 8 이상에서 이 메서드 사용을 권장하지 않습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">대신 <a href="avcomposition/loadtracks(withmediatype:completionhandler:">@@TOKEN_0@@</a>.md)로 트랙을 비동기 로드하세요.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>mediaType</code>: 반환할 트랙의 미디어 유형입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001">[var tracks: [AVCompositionTrack]](avcomposition/tracks.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">구성이 포함하는 트랙입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avcomposition/track(withtrackid:">func track(withTrackID: CMPersistentTrackID) -&gt; AVCompositionTrack?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">지정된 식별자를 포함하는 트랙을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001">[func tracks(withMediaCharacteristic: AVMediaCharacteristic) -&gt; [AVCompositionTrack]](avcomposition/tracks(withmediacharacteristic:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">지정된 특성을 가진 미디어를 포함하는 트랙을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avcomposition/unusedtrackid.md">func unusedTrackID() -&gt; CMPersistentTrackID</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">자산에서 다른 트랙이 사용하지 않는 식별자를 반환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcomposition/tracks(withmediatype:">Apple Developer 문서 보기</a>)*</span>

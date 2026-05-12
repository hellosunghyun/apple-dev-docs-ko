---
source_path: "documentation/AVFoundation/avmutablecomposition/tracks.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avmutablecomposition/tracks"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:tracks:0000:0001">tracks</span>

<span class="ko-segment" data-segment-id="seg:paragraph:tracks:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:tracks:0002:0001">컴포지션이 포함하는 트랙입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:tracks:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:tracks:0004:0001">iOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:tracks:0004:0002">iPadOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:tracks:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:tracks:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:tracks:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:tracks:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:tracks:0004:0007">watchOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var tracks: [AVMutableCompositionTrack] { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">변경 가능한 컴포지션에서는 tracks가 <a href="avmutablecompositiontrack.md">@@TOKEN_0@@</a>의 인스턴스이며, <a href="avcomposition.md">@@TOKEN_1@@</a>에서는 tracks가 <a href="avcompositiontrack.md">@@TOKEN_2@@</a>의 인스턴스입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avmutablecomposition/track(withtrackid:">func track(withTrackID: CMPersistentTrackID) -&gt; AVMutableCompositionTrack?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">지정한 식별자를 포함하는 트랙을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001">[func tracks(withMediaType: AVMediaType) -&gt; [AVMutableCompositionTrack]](avmutablecomposition/tracks(withmediatype:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">지정한 타입의 미디어를 포함하는 트랙을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001">[func tracks(withMediaCharacteristic: AVMediaCharacteristic) -&gt; [AVMutableCompositionTrack]](avmutablecomposition/tracks(withmediacharacteristic:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">지정한 특성의 미디어를 포함하는 트랙을 반환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmutablecomposition/tracks">View on Apple Developer</a>*</span>

---
source_path: "documentation/AVFoundation/avvideocomposition/sourcetrackidforframetiming.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avvideocomposition/sourcetrackidforframetiming"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sourcetrackidforframetiming:0000:0001">sourceTrackIDForFrameTiming</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sourcetrackidforframetiming:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sourcetrackidforframetiming:0002:0001">An identifier of the source track from which the video composition derives frame timing.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sourcetrackidforframetiming:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:sourcetrackidforframetiming:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sourcetrackidforframetiming:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sourcetrackidforframetiming:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:sourcetrackidforframetiming:0004:0004">macOS 10.13+</span>
- <span class="ko-segment" data-segment-id="seg:list:sourcetrackidforframetiming:0004:0005">tvOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sourcetrackidforframetiming:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var sourceTrackIDForFrameTiming: CMPersistentTrackID { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">If an empty edit is encountered in the source asset’s track, the compositor composes frames as needed up to the frequency specified in <a href="avvideocomposition/frameduration.md">@@TOKEN_0@@</a> property.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">Otherwise the frame timing for the video composition is derived from the source asset’s track with the corresponding ID.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avspeechsynthesismarker/init(markertype:fortextrange:atbytesampleoffset:">init(markerType: AVSpeechSynthesisMarker.Mark, forTextRange: NSRange, atByteSampleOffset: Int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">The identifiers of source sample data tracks in the composition that the object requires to compose frames.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avvideocomposition/sourcetrackidforframetiming">View on Apple Developer</a>*</span>

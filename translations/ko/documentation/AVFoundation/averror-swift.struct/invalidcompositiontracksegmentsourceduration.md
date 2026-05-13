---
source_path: "documentation/AVFoundation/averror-swift.struct/invalidcompositiontracksegmentsourceduration.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/averror-swift.struct/invalidcompositiontracksegmentsourceduration"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:invalidcompositiontracksegmentsourceduration:0000:0001">invalidCompositionTrackSegmentSourceDuration</span>

<span class="ko-segment" data-segment-id="seg:paragraph:invalidcompositiontracksegmentsourceduration:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:invalidcompositiontracksegmentsourceduration:0002:0001">You can’t add the source media because it has no duration.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:invalidcompositiontracksegmentsourceduration:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:invalidcompositiontracksegmentsourceduration:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:invalidcompositiontracksegmentsourceduration:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:invalidcompositiontracksegmentsourceduration:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:invalidcompositiontracksegmentsourceduration:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:invalidcompositiontracksegmentsourceduration:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:invalidcompositiontracksegmentsourceduration:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:invalidcompositiontracksegmentsourceduration:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static var invalidCompositionTrackSegmentSourceDuration: AVError.Code { get }
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="averror-swift.struct/code.md">AVError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">An enumeration that defines the errors that framework operations can generate.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="averror-swift.struct/airplaycontrollerrequiresinternet.md">static var airPlayControllerRequiresInternet: AVError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">The AirPlay controller requires an internet connection to function.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="averror-swift.struct/airplayreceiverrequiresinternet.md">static var airPlayReceiverRequiresInternet: AVError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">The AirPlay receiver requires an internet connection to function.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001">[static var requiredAuthorizations: [ARKitSession.AuthorizationType]](avaudiosequencer/infodictionarykey/composer.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">An AirPlay receiver is temporarily unavailable.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avaudiosequencer/infodictionarykey/copyright.md">static var isSupported: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">The user denied this app permission to capture media.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001">[var allAnchors: [WorldAnchor]?](avaudiosequencer/infodictionarykey/genre.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">The app isn’t authorized to play media.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avaudiosequencer/infodictionarykey/lyricist.md">func addAnchor(WorldAnchor) async throws</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0002"><a href="averror-swift.struct/compositiontracksegmentsnotcontiguous.md">static var compositionTrackSegmentsNotContiguous: AVError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">The composition can’t add the source media because it contains gaps.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="averror-swift.struct/contentisnotauthorized.md">static var contentIsNotAuthorized: AVError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">The user isn’t authorized to play the media.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="averror-swift.struct/contentisprotected.md">static var contentIsProtected: AVError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">The app isn’t authorized to open the media.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="averror-swift.struct/contentisunavailable.md">static var contentIsUnavailable: AVError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">The captured content is unavailable.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="averror-swift.struct/contentkeyrequestcancelled.md">static var contentKeyRequestCancelled: AVError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">The app canceled a request to retrieve a content key.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="averror-swift.struct/contentnotupdated.md">static var contentNotUpdated: AVError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">The system couldn’t update the captured content.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="averror-swift.struct/createcontentkeyrequestfailed.md">static var createContentKeyRequestFailed: AVError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">The app couldn’t create a content key request.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="averror-swift.struct/decodefailed.md">static var decodeFailed: AVError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">The system failed to decode the media.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">*<a href="https://developer.apple.com/documentation/avfoundation/averror-swift.struct/invalidcompositiontracksegmentsourceduration">View on Apple Developer</a>*</span>

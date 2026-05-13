---
source_path: "documentation/AVFoundation/avvideocomposition/init-configuration.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avvideocomposition/init-configuration"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initconfiguration:0000:0001">init(configuration:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initconfiguration:0001:0001">**Framework**: AVFoundation **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initconfiguration:0002:0001">Initialize an AVVideoComposition with a configuration.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initconfiguration:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initconfiguration:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initconfiguration:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initconfiguration:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:initconfiguration:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initconfiguration:0004:0005">tvOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initconfiguration:0004:0006">visionOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
convenience init(configuration: AVVideoComposition.Configuration)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>itemIdentifier</code>: The identifier for the new current item, which is <code>nil</code> if there isn’t anything to play.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avvideocomposition/configuration.md">AVVideoComposition.Configuration</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">Configurable properties for initializing a new AVVideoComposition instance.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avvideocomposition/init(applyingfiltersto:applier:">convenience init(applyingFiltersTo: AVAsset, applier: (AVCIImageFilteringParameters) async throws -&gt; AVCIImageFilteringResult) async throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">Creates a video composition configured to apply Core Image filters to each video frame of the specified asset.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avvideocomposition/videocomposition(with:applyingcifilterswithhandler:completionhandler:">class func videoComposition(with: AVAsset, applyingCIFiltersWithHandler: (AVAsynchronousCIImageFilteringRequest) -&gt; Void, completionHandler: (AVVideoComposition?, (any Error)?) -&gt; Void)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">Returns a new video composition that’s configured to apply Core Image filters to each video frame of the specified asset.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avasynchronousciimagefilteringrequest.md">class AVAsynchronousCIImageFilteringRequest</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">An object that supports using Core Image filters to process an individual video frame in a video composition.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avciimagefilteringparameters.md">struct AVCIImageFilteringParameters</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0002"><a href="avciimagefilteringresult.md">struct AVCIImageFilteringResult</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">An output video frame processed with Core Image filtering.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avvideocomposition/videocomposition(withpropertiesof:completionhandler:">class func videoComposition(withPropertiesOf: AVAsset, completionHandler: (AVVideoComposition?, (any Error)?) -&gt; Void)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">Returns a new video composition that’s configured to present the video tracks of the specified asset.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avvideocomposition/init(propertiesof:">init(propertiesOf: AVAsset)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">Creates a video composition object configured to present the video tracks of the specified asset.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avvideocomposition/init(asset:applyingcifilterswithhandler:">init(asset: AVAsset, applyingCIFiltersWithHandler: (AVAsynchronousCIImageFilteringRequest) -&gt; Void)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">Creates a video composition configured to apply Core Image filters to each video frame of the specified asset.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avvideocomposition/init(configuration:">View on Apple Developer</a>)*</span>

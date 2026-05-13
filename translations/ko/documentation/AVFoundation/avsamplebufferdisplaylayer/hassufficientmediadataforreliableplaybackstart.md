---
source_path: "documentation/AVFoundation/avsamplebufferdisplaylayer/hassufficientmediadataforreliableplaybackstart.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avsamplebufferdisplaylayer/hassufficientmediadataforreliableplaybackstart"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:hassufficientmediadataforreliableplaybackstart:0000:0001">hasSufficientMediaDataForReliablePlaybackStart</span>

<span class="ko-segment" data-segment-id="seg:paragraph:hassufficientmediadataforreliableplaybackstart:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:hassufficientmediadataforreliableplaybackstart:0002:0001">A Boolean value that indicates whether the enqueued media data meets the renderer’s preroll level.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:hassufficientmediadataforreliableplaybackstart:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:hassufficientmediadataforreliableplaybackstart:0004:0001">iOS 14.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:hassufficientmediadataforreliableplaybackstart:0004:0002">iPadOS 14.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:hassufficientmediadataforreliableplaybackstart:0004:0003">Mac Catalyst 14.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:hassufficientmediadataforreliableplaybackstart:0004:0004">macOS 11.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:hassufficientmediadataforreliableplaybackstart:0004:0005">tvOS 14.5+</span>
- <span class="ko-segment" data-segment-id="seg:list:hassufficientmediadataforreliableplaybackstart:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var hasSufficientMediaDataForReliablePlaybackStart: Bool { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">Apple discourages the use of this symbol in iOS 17, tvOS 17, and macOS 14 and later.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">Face ID는 재사용되지 않으며, 화면에서 나갔다가 다시 들어온 동일한 얼굴은 새 식별자가 할당됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avsamplebufferdisplaylayer/requestmediadatawhenready(on:using:">func requestMediaDataWhenReady(on: dispatch_queue_t, using: () -&gt; Void)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">Instructs the target to invoke a client-supplied block repeatedly, at its convenience, in order to gather sample buffers for display.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avsamplebufferdisplaylayer/isreadyformoremediadata.md">var isReadyForMoreMediaData: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">A Boolean value that indicates the readiness of the layer to accept more sample buffers.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avsamplebufferdisplaylayer/requiresflushtoresumedecoding.md">var requiresFlushToResumeDecoding: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">A Boolean value that indicates whether the layer needs to flush its state to continue decoding frames.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avsamplebufferdisplaylayer/stoprequestingmediadata.md">func stopRequestingMediaData()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">Cancels any current media data request.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avsamplebufferdisplaylayer/hassufficientmediadataforreliableplaybackstart">View on Apple Developer</a>*</span>

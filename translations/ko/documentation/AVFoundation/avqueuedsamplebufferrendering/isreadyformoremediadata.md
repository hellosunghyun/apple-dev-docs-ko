---
source_path: "documentation/AVFoundation/avqueuedsamplebufferrendering/isreadyformoremediadata.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avqueuedsamplebufferrendering/isreadyformoremediadata"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:isreadyformoremediadata:0000:0001">isReadyForMoreMediaData</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isreadyformoremediadata:0001:0001">**Framework**: AVFoundation **Kind**: property **Required**: Yes</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isreadyformoremediadata:0002:0001">A Boolean value that indicates whether the receiver is able to accept more sample buffers.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isreadyformoremediadata:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:isreadyformoremediadata:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isreadyformoremediadata:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isreadyformoremediadata:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:isreadyformoremediadata:0004:0004">macOS 10.13+</span>
- <span class="ko-segment" data-segment-id="seg:list:isreadyformoremediadata:0004:0005">tvOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isreadyformoremediadata:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isreadyformoremediadata:0004:0007">watchOS 4.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var isReadyForMoreMediaData: Bool { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">An object conforming to <code>AVQueuedSampleBufferRendering</code> keeps track of the occupancy levels of its internal queues for the benefit of clients that enqueue sample buffers from non-real-time sources, for example, clients that can supply sample buffers faster than they are consumed, and so need to decide when to hold back.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">Clients enqueueing sample buffers from non-real-time sources may hold off from generating or obtaining more sample buffers to enqueue when the value of <code>readyForMoreMediaData</code> is <code>NO</code>.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">It is safe to call <a href="avqueuedsamplebufferrendering/enqueue(_:">@@TOKEN_0@@</a>.md) when <code>readyForMoreMediaData</code> is <code>NO</code>, but don’t enqueue sample buffers without bound.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">To help with control of the non-real-time supply of sample buffers, clients can call <a href="avqueuedsamplebufferrendering/requestmediadatawhenready(on:using:">@@TOKEN_0@@</a>.md) in order to specify a block that the receiver should invoke whenever it’s ready for sample buffers to be appended.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">이 메서드는 무효화된 세션에서 호출하면 예외를 발생시킵니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">This property is not key-value observable.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0012:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avqueuedsamplebufferrendering/enqueue(_:">func enqueue(CMSampleBuffer)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">Sends a sample buffer to the queue for rendering.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avqueuedsamplebufferrendering/requestmediadatawhenready(on:using:">func requestMediaDataWhenReady(on: dispatch_queue_t, using: () -&gt; Void)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">Tells the target to invoke a client-supplied block in order to gather sample buffers for playback.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avqueuedsamplebufferrendering/stoprequestingmediadata.md">func stopRequestingMediaData()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">Cancels any current <a href="avqueuedsamplebufferrendering/requestmediadatawhenready(on:using:">@@TOKEN_0@@</a>.md) call.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avqueuedsamplebufferrendering/isreadyformoremediadata">View on Apple Developer</a>*</span>

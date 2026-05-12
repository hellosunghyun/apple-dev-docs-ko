---
source_path: "documentation/AVFoundation/avsamplebufferdisplaylayer/isreadyformoremediadata.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avsamplebufferdisplaylayer/isreadyformoremediadata"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:isreadyformoremediadata:0000:0001">isReadyForMoreMediaData</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isreadyformoremediadata:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isreadyformoremediadata:0002:0001">레이어가 추가 sample buffer를 수락할 준비 상태를 나타내는 부울 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isreadyformoremediadata:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:isreadyformoremediadata:0004:0001">iOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isreadyformoremediadata:0004:0002">iPadOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isreadyformoremediadata:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:isreadyformoremediadata:0004:0004">macOS 10.8+</span>
- <span class="ko-segment" data-segment-id="seg:list:isreadyformoremediadata:0004:0005">tvOS 10.2+</span>
- <span class="ko-segment" data-segment-id="seg:list:isreadyformoremediadata:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var isReadyForMoreMediaData: Bool { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">Apple은 iOS 17, tvOS 17 및 macOS 14 이상에서 이 기호 사용을 권장하지 않습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">대신 <a href="avsamplebufferdisplaylayer/samplebufferrenderer.md">@@TOKEN_0@@</a>의 <a href="avqueuedsamplebufferrendering/isreadyformoremediadata.md">@@TOKEN_1@@</a>를 사용합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001"><code>AVSampleBufferDisplayLayer</code>는 내부 큐의 점유 수준을 추적하여 비실시간 소스에서 sample buffer를 큐에 넣는 클라이언트에 이점을 제공합니다. 즉, sample buffer를 소모 속도보다 빠르게 제공하며 버퍼 보류 시점을 결정해야 하는 클라이언트를 위한 기능입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">비실시간 소스에서 샘플 버퍼를 enqueue하는 클라이언트는 <code>readyForMoreMediaData</code> 값이 <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_1@@</a>일 때 추가로 enqueue할 샘플 버퍼를 생성하거나 가져오는 작업을 보류할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">It is safe to call <a href="avsamplebufferdisplaylayer/enqueue(_:">@@TOKEN_0@@</a>.md) when <a href="avsamplebufferdisplaylayer/isreadyformoremediadata.md">@@TOKEN_1@@</a> is <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_2@@</a>, but enqueing more sample buffers than are required for timely rendering by the receiver is highly discouraged.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0001">비실시간 샘플 버퍼 공급을 제어하려면 이러한 클라이언트가 샘플 버퍼를 추가할 준비가 되면 레이어가 호출할 블록을 지정하도록 <a href="avsamplebufferdisplaylayer/requestmediadatawhenready(on:using:">@@TOKEN_0@@</a>.md)를 사용해야 합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0013:0001"><code>readyForMoreMediaData</code>의 값은 이전에 제공된 샘플 버퍼가 디코딩되고 표시되면 <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_1@@</a>에서 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_2@@</a>로 비동기적으로 바뀌는 경우가 자주 있습니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0014:0001">❗ **중요**: 이 속성은 key-value observing을 지원하지 않습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0015:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avsamplebufferdisplaylayer/requestmediadatawhenready(on:using:">func requestMediaDataWhenReady(on: dispatch_queue_t, using: () -&gt; Void)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">대상은 디스플레이용 샘플 버퍼를 수집하기 위해 클라이언트가 제공한 블록을 필요할 때마다 반복해서 호출하도록 지시합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avsamplebufferdisplaylayer/requiresflushtoresumedecoding.md">var requiresFlushToResumeDecoding: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">레이어가 프레임을 계속 디코딩하려면 상태를 플러시해야 하는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avsamplebufferdisplaylayer/stoprequestingmediadata.md">func stopRequestingMediaData()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">현재 미디어 데이터 요청을 모두 취소합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avsamplebufferdisplaylayer/hassufficientmediadataforreliableplaybackstart.md">var hasSufficientMediaDataForReliablePlaybackStart: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">큐에 추가된 미디어 데이터가 렌더러의 preroll 수준을 충족하는지를 나타내는 부울 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avsamplebufferdisplaylayer/isreadyformoremediadata">View on Apple Developer</a>*</span>

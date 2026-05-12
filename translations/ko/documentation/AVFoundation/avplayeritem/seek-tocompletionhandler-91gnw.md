---
source_path: "documentation/AVFoundation/avplayeritem/seek-tocompletionhandler-91gnw.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avplayeritem/seek-tocompletionhandler-91gnw"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:seektocompletionhandler:0000:0001">seek(to:completionHandler:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:seektocompletionhandler:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:seektocompletionhandler:0002:0001">현재 재생 시간을 지정된 시간으로 설정합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:seektocompletionhandler:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:seektocompletionhandler:0004:0001">iOS 5.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:seektocompletionhandler:0004:0002">iPadOS 5.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:seektocompletionhandler:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:seektocompletionhandler:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:seektocompletionhandler:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:seektocompletionhandler:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:seektocompletionhandler:0004:0007">watchOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
nonisolated
func seek(to time: CMTime) async -> Bool
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 메서드를 사용하면 플레이어 항목에서 지정된 시간으로 이동하고 작업이 완료될 때 알림을 받을 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">다른 탐색 요청이나 다른 작업으로 중단되지 않고 탐색 요청이 완료되면, 제공한 completion handler가 <code>finished</code> 매개변수가 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_1@@</a>로 설정된 상태에서 실행됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이 메서드를 호출할 때 이미 다른 탐색 요청이 진행 중이면, 진행 중인 탐색 요청의 completion handler가 즉시 실행되며 <code>finished</code> 매개변수가 <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_1@@</a>로 설정됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0010:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0001"><code>time</code>: 탐색할 시간입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0002"><code>completionHandler</code>: 탐색 작업이 완료되었거나 중단되었을 때 호출되는 블록입니다. 블록은 다음 인수를 하나 받습니다: - **finished**: 탐색 작업이 완료되었는지를 나타냅니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0012:0001">참조</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avplayeritem/seek(to:tolerancebefore:toleranceafter:completionhandler:">func seek(to: CMTime, toleranceBefore: CMTime, toleranceAfter: CMTime, completionHandler: ((Bool) -&gt; Void)?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">지정된 시간 경계 내에서 현재 재생 시간을 설정하고 탐색 작업이 완료되거나 중단될 때 지정한 블록을 호출합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avplayeritem/seek(to:completionhandler:">func seek(to: Date, completionHandler: ((Bool) -&gt; Void)?) -&gt; Bool</a>-1dibq.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">날짜 객체가 지정한 시간으로 현재 재생 시간을 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avplayeritem/cancelpendingseeks.md">func cancelPendingSeeks()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">보류 중인 모든 탐색 요청을 취소하고 해당 completion handler가 있으면 실행합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avplayeritem/seek(to:completionhandler:">View on Apple Developer</a>-91gnw)*</span>

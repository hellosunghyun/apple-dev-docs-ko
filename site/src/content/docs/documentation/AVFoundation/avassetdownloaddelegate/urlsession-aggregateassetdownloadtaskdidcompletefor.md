---
source_path: "documentation/AVFoundation/avassetdownloaddelegate/urlsession-aggregateassetdownloadtaskdidcompletefor.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetdownloaddelegate/urlsession-aggregateassetdownloadtaskdidcompletefor"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:urlsessionaggregateassetdownloadtaskdidcompletefor:0000:0001">urlSession(_:aggregateAssetDownloadTask:didCompleteFor:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:urlsessionaggregateassetdownloadtaskdidcompletefor:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:urlsessionaggregateassetdownloadtaskdidcompletefor:0002:0001">Tells the delegate that a child task finished downloading a media selection.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:urlsessionaggregateassetdownloadtaskdidcompletefor:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:urlsessionaggregateassetdownloadtaskdidcompletefor:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:urlsessionaggregateassetdownloadtaskdidcompletefor:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:urlsessionaggregateassetdownloadtaskdidcompletefor:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:urlsessionaggregateassetdownloadtaskdidcompletefor:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:urlsessionaggregateassetdownloadtaskdidcompletefor:0004:0005">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
optional func urlSession(_ session: URLSession, aggregateAssetDownloadTask: AVAggregateAssetDownloadTask, didCompleteFor mediaSelection: AVMediaSelection)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>session</code>: The session the asset download task is on.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>aggregateAssetDownloadTask</code>: The download task that finished downloading the media selection.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0003"><code>mediaSelection</code>: The downloaded media selection.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avassetdownloaddelegate/urlsession(_:aggregateassetdownloadtask:willdownloadto:">func urlSession(URLSession, aggregateAssetDownloadTask: AVAggregateAssetDownloadTask, willDownloadTo: URL)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">Tells the delegate the final location of the asset when the download completes.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001">[func urlSession(URLSession, aggregateAssetDownloadTask: AVAggregateAssetDownloadTask, didLoad: CMTimeRange, totalTimeRangesLoaded: [NSValue], timeRangeExpectedToLoad: CMTimeRange, for: AVMediaSelection)](avassetdownloaddelegate/urlsession(_:aggregateassetdownloadtask:didload:totaltimerangesloaded:timerangeexpectedtoload:for:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">Tells the delegate that the aggregate download task loaded a new time range.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetdownloaddelegate/urlsession(_:aggregateassetdownloadtask:didcompletefor:">View on Apple Developer</a>)*</span>

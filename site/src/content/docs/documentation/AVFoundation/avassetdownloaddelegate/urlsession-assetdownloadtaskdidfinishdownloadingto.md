---
source_path: "documentation/AVFoundation/avassetdownloaddelegate/urlsession-assetdownloadtaskdidfinishdownloadingto.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetdownloaddelegate/urlsession-assetdownloadtaskdidfinishdownloadingto"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:urlsessionassetdownloadtaskdidfinishdownloadingto:0000:0001">urlSession(_:assetDownloadTask:didFinishDownloadingTo:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:urlsessionassetdownloadtaskdidfinishdownloadingto:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:urlsessionassetdownloadtaskdidfinishdownloadingto:0002:0001">요청한 에셋의 다운로드가 완료되었음을 대리자에게 알립니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:urlsessionassetdownloadtaskdidfinishdownloadingto:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:urlsessionassetdownloadtaskdidfinishdownloadingto:0004:0001">iOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:urlsessionassetdownloadtaskdidfinishdownloadingto:0004:0002">iPadOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:urlsessionassetdownloadtaskdidfinishdownloadingto:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:urlsessionassetdownloadtaskdidfinishdownloadingto:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:urlsessionassetdownloadtaskdidfinishdownloadingto:0004:0005">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:urlsessionassetdownloadtaskdidfinishdownloadingto:0004:0006">watchOS 10.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
optional func urlSession(_ session: URLSession, assetDownloadTask: AVAssetDownloadTask, didFinishDownloadingTo location: URL)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">다운로드된 에셋은 이 위치에서 이동해서는 안 됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">다운로드된 에셋은 시스템에서 제공한 URL에 그대로 있어야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">대신, 향후 사용을 위해 이 URL에 대한 영구 참조를 저장해야 합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>session</code>: 에셋 다운로드 작업이 실행 중인 세션입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>assetDownloadTask</code>: 다운로드가 완료된 다운로드 작업입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0003"><code>location</code>: 에셋의 다운로드 위치입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avassetreader/add(_:">func urlSession(URLSession, assetDownloadTask: AVAssetDownloadTask, didResolve: AVMediaSelection)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">다운로드 작업이 미디어 선택(자동 선택 포함)을 다운로드 대상으로 결정했음을 델리게이트에 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001">[func urlSession(URLSession, assetDownloadTask: AVAssetDownloadTask, didLoad: CMTimeRange, totalTimeRangesLoaded: [NSValue], timeRangeExpectedToLoad: CMTimeRange)](avassetdownloaddelegate/urlsession(_:assetdownloadtask:didload:totaltimerangesloaded:timerangeexpectedtoload:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">다운로드 작업이 새 시간 범위를 로드했음을 델리게이트에 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001">[func urlSession(URLSession, assetDownloadTask: AVAssetDownloadTask, willDownloadVariants: [AVAssetVariant])](avassetdownloaddelegate/urlsession(_:assetdownloadtask:willdownloadvariants:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">다운로드 작업이 변형 선택을 완료했음을 델리게이트에 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avassetdownloaddelegate/urlsession(_:assetdownloadtask:willdownloadto:">func urlSession(URLSession, assetDownloadTask: AVAssetDownloadTask, willDownloadTo: URL)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">다운로드 작업이 다운로드 위치를 결정한 시점을 델리게이트에 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avassetdownloaddelegate/urlsession(_:assetdownloadtask:didreceive:">func urlSession(URLSession, assetDownloadTask: AVAssetDownloadTask, didReceive: AVMetricEvent)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">다운로드 작업이 AVMetricEvent를 수신할 때 전송됩니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetdownloaddelegate/urlsession(_:assetdownloadtask:didfinishdownloadingto:">Apple Developer에서 보기</a>)*</span>

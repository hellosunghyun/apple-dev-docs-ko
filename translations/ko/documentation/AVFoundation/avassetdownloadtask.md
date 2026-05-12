---
source_path: "documentation/AVFoundation/avassetdownloadtask.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetdownloadtask"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avassetdownloadtask:0000:0001">AVAssetDownloadTask</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetdownloadtask:0001:0001">**Framework**: AVFoundation **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetdownloadtask:0002:0001">HTTP Live Streaming 에셋을 다운로드하는 데 사용되는 세션입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetdownloadtask:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avassetdownloadtask:0004:0001">iOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetdownloadtask:0004:0002">iPadOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetdownloadtask:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetdownloadtask:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetdownloadtask:0004:0005">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetdownloadtask:0004:0006">watchOS 10.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class AVAssetDownloadTask
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">이 클래스는 HTTP Live Streaming 에셋을 다운로드할 때 사용하는 <a href="https://developer.apple.com/documentation/Foundation/URLSessionTask">@@TOKEN_0@@</a>의 하위 클래스입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0002">다운로드 세션에서 <a href="avassetdownloadurlsession/makeassetdownloadtask(downloadconfiguration:">@@TOKEN_0@@</a>.md)로 이 클래스의 인스턴스를 생성합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0009:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:accessing-task-information:0010:0001">작업 정보 액세스</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-task-information:0011:0001"><a href="avassetdownloadtask/urlasset.md">var urlAsset: AVURLAsset</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-task-information:0012:0001">이 작업이 다운로드하는 에셋입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-task-information:0013:0001">[var loadedTimeRanges: [NSValue]](avassetdownloadtask/loadedtimeranges.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-task-information:0014:0001">재생을 위해 준비된 다운로드 미디어의 시간 범위입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-task-information:0015:0001">[var options: [String : Any]?](avassetdownloadtask/options.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-task-information:0016:0001">작업의 구성 옵션입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-task-information:0017:0001"><a href="avassetdownloadtask/destinationurl.md">var destinationURL: URL</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-task-information:0018:0001">이 작업이 에셋을 다운로드하는 로컬 파일 URL입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0019:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0020:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0021:0001"><a href="../Foundation/URLSessionTask.md">URLSessionTask</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0022:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0001"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0002"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0003"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0004"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0005"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0006"><a href="../Foundation/NSCopying.md">NSCopying</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0007"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0008"><a href="../Foundation/ProgressReporting.md">ProgressReporting</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0009"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0023:0010"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0024:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="using-avfoundation-to-play-and-persist-http-live-streams.md">Using AVFoundation to play and persist HTTP live streams</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">AVFoundation을 사용하여 HTTP Live Streams를 재생하고 오프라인 재생을 위해 스트림을 디스크에 저장합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="avassetdownloadurlsession.md">class AVAssetDownloadURLSession</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">에셋 다운로드 작업을 생성하고 실행하는 URL session입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="avaggregateassetdownloadtask.md">class AVAggregateAssetDownloadTask</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">에셋의 여러 미디어 선택 항목을 다운로드하는 작업입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetdownloadtask">View on Apple Developer</a>*</span>

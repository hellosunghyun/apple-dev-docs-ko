---
source_path: "documentation/AVFoundation/avassetdownloadurlsession.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetdownloadurlsession"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avassetdownloadurlsession:0000:0001">AVAssetDownloadURLSession</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetdownloadurlsession:0001:0001">**Framework**: AVFoundation **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetdownloadurlsession:0002:0001">에셋 다운로드 작업을 생성하고 실행하는 URL 세션입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetdownloadurlsession:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avassetdownloadurlsession:0004:0001">iOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetdownloadurlsession:0004:0002">iPadOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetdownloadurlsession:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetdownloadurlsession:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetdownloadurlsession:0004:0005">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetdownloadurlsession:0004:0006">watchOS 10.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class AVAssetDownloadURLSession
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:creating-a-download-session:0008:0001">다운로드 세션 생성</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-a-download-session:0009:0001"><a href="avassetdownloadurlsession/init(configuration:assetdownloaddelegate:delegatequeue:">init(configuration: URLSessionConfiguration, assetDownloadDelegate: (any AVAssetDownloadDelegate)?, delegateQueue: OperationQueue?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-a-download-session:0010:0001">에셋을 다운로드하기 위한 URL 세션을 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-a-download-session:0011:0001"><a href="avassetdownloaddelegate.md">protocol AVAssetDownloadDelegate</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-a-download-session:0012:0001">에셋 다운로드 이벤트에 대응하기 위해 구현해야 할 메서드를 정의하는 프로토콜입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:creating-download-tasks:0013:0001">다운로드 작업 생성</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-download-tasks:0014:0001"><a href="avassetdownloadurlsession/makeassetdownloadtask(downloadconfiguration:">func makeAssetDownloadTask(downloadConfiguration: AVAssetDownloadConfiguration) -&gt; AVAssetDownloadTask</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-download-tasks:0015:0001">지정한 구성을 사용하는 다운로드 작업을 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-download-tasks:0016:0001"><a href="avassetdownloadconfiguration.md">class AVAssetDownloadConfiguration</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-download-tasks:0017:0001">다운로드 작업의 구성을 제공하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-download-tasks:0018:0001">[func makeAssetDownloadTask(asset: AVURLAsset, assetTitle: String, assetArtworkData: Data?, options: [String : Any]?) -&gt; AVAssetDownloadTask?](avassetdownloadurlsession/makeassetdownloadtask(asset:assettitle:assetartworkdata:options:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-download-tasks:0019:0001">에셋을 다운로드하기 위한 다운로드 작업을 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-download-tasks:0020:0001">[func aggregateAssetDownloadTask(with: AVURLAsset, mediaSelections: [AVMediaSelection], assetTitle: String, assetArtworkData: Data?, options: [String : Any]?) -&gt; AVAggregateAssetDownloadTask?](avassetdownloadurlsession/aggregateassetdownloadtask(with:mediaselections:assettitle:assetartworkdata:options:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-download-tasks:0021:0001">에셋과 미디어 선택 항목을 다운로드하는 작업을 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-download-tasks:0022:0001">[func makeAssetDownloadTask(asset: AVURLAsset, destinationURL: URL, options: [String : Any]?) -&gt; AVAssetDownloadTask?](avassetdownloadurlsession/makeassetdownloadtask(asset:destinationurl:options:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-download-tasks:0023:0001">지정한 위치로 에셋을 다운로드하는 작업을 생성합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:download-option-keys:0024:0001">다운로드 옵션 키</span>

- <span class="ko-segment" data-segment-id="seg:list:download-option-keys:0025:0001"><a href="avassetdownloadtaskminimumrequiredmediabitratekey.md">let AVAssetDownloadTaskMinimumRequiredMediaBitrateKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:download-option-keys:0026:0001">다운로드할 변형의 최소 비트 전송률을 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:download-option-keys:0027:0001"><a href="avassetdownloadtaskminimumrequiredpresentationsizekey.md">let AVAssetDownloadTaskMinimumRequiredPresentationSizeKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:download-option-keys:0028:0001">다운로드할 변형의 최소 표시 크기를 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:download-option-keys:0029:0001"><a href="avassetdownloadtaskmediaselectionkey.md">let AVAssetDownloadTaskMediaSelectionKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:download-option-keys:0030:0001">다운로드할 미디어 선택 항목을 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:download-option-keys:0031:0001"><a href="avassetdownloadtaskmediaselectionprefersmultichannelkey.md">let AVAssetDownloadTaskMediaSelectionPrefersMultichannelKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:download-option-keys:0032:0001">가능한 경우 다중 채널 재생을 지원하는 미디어 선택 항목을 다운로드할지 여부를 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:download-option-keys:0033:0001"><a href="avassetdownloadtaskprefershdrkey.md">let AVAssetDownloadTaskPrefersHDRKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:download-option-keys:0034:0001">작업이 가능한 경우 SDR 비디오 대신 HDR 비디오를 다운로드하는지를 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:download-option-keys:0035:0001"><a href="avassetdownloadtaskpreferslosslessaudiokey.md">let AVAssetDownloadTaskPrefersLosslessAudioKey: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:download-option-keys:0036:0001">작업이 가능한 경우 미디어 선택 항목을 무손실 오디오 형식으로 다운로드하는지를 나타내는 키입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0037:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0038:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0039:0001"><a href="../Foundation/URLSession.md">URLSession</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0040:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0041:0001"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0041:0002"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0041:0003"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0041:0004"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0041:0005"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0041:0006"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0041:0007"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0041:0008"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0042:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0043:0001"><a href="using-avfoundation-to-play-and-persist-http-live-streams.md">Using AVFoundation to play and persist HTTP live streams</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0044:0001">AVFoundation을 사용해 HTTP Live Streams를 재생하고, 스트림을 오프라인 재생을 위해 디스크에 보존합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0045:0001"><a href="avassetdownloadtask.md">class AVAssetDownloadTask</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0046:0001">HTTP Live Streaming 에셋을 다운로드하는 데 사용되는 세션입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0047:0001"><a href="avaggregateassetdownloadtask.md">class AVAggregateAssetDownloadTask</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0048:0001">자산의 여러 미디어 선택 항목을 다운로드하는 작업입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0050:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetdownloadurlsession">View on Apple Developer</a>*</span>

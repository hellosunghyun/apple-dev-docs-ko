---
source_path: "documentation/AVFoundation/avassetdownloadconfiguration.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetdownloadconfiguration"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avassetdownloadconfiguration:0000:0001">AVAssetDownloadConfiguration</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetdownloadconfiguration:0001:0001">**Framework**: AVFoundation **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetdownloadconfiguration:0002:0001">다운로드 작업의 구성을 제공하는 객체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetdownloadconfiguration:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avassetdownloadconfiguration:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetdownloadconfiguration:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetdownloadconfiguration:0004:0003">Mac Catalyst 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetdownloadconfiguration:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetdownloadconfiguration:0004:0005">tvOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetdownloadconfiguration:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetdownloadconfiguration:0004:0007">watchOS 10.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class AVAssetDownloadConfiguration
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:creating-a-configuration:0008:0001">구성 생성</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-a-configuration:0009:0001"><a href="avassetdownloadconfiguration/init(asset:title:">convenience init(asset: AVURLAsset, title: String)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-a-configuration:0010:0001">미디어 자산에 대한 다운로드 구성을 생성합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:accessing-configuration-details:0011:0001">구성 세부 정보 액세스</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-configuration-details:0012:0001"><a href="avassetdownloadconfiguration/artworkdata.md">var artworkData: Data?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-configuration-details:0013:0001">자산의 아트워크를 나타내는 데이터 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-configuration-details:0014:0001"><a href="avassetdownloadconfiguration/primarycontentconfiguration.md">var primaryContentConfiguration: AVAssetDownloadContentConfiguration</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-configuration-details:0015:0001">작업이 다운로드하는 기본 콘텐츠의 구성입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-configuration-details:0016:0001">[var auxiliaryContentConfigurations: [AVAssetDownloadContentConfiguration]](avassetdownloadconfiguration/auxiliarycontentconfigurations.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-configuration-details:0017:0001">작업이 다운로드하는 보조 콘텐츠의 구성입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-configuration-details:0018:0001"><a href="avassetdownloadcontentconfiguration.md">class AVAssetDownloadContentConfiguration</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-configuration-details:0019:0001">변형 한정자와 미디어 옵션을 포함하는 구성 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-configuration-details:0020:0001"><a href="avassetdownloadconfiguration/optimizesauxiliarycontentconfigurations.md">var optimizesAuxiliaryContentConfigurations: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-configuration-details:0021:0001">작업이 보조 콘텐츠 선택을 최적화하는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-configuration-details:0022:0001"><a href="avassetdownloadconfiguration/downloadsinterstitialassets.md">var downloadsInterstitialAssets: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-configuration-details:0023:0001">인덱스 파일에 나열된 인터스티셜 자산을 다운로드합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:accessing-configuration-details:0023:0002">기본값은 <code>false</code>입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-configuration-details:0024:0001">[func setInterstitialMediaSelectionCriteria([AVPlayerMediaSelectionCriteria], forMediaCharacteristic: AVMediaCharacteristic)](avassetdownloadconfiguration/setinterstitialmediaselectioncriteria(_:formediacharacteristic:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-configuration-details:0025:0001">이 자산의 인터스티셜에 대해 미디어 선택을 설정합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0026:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0027:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0028:0001"><a href="../ObjectiveC/NSObject-swift.class.md">NSObject</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0029:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0001"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0002"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0003"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0004"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0005"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0006"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0031:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="avassetdownloadurlsession/makeassetdownloadtask(downloadconfiguration:">func makeAssetDownloadTask(downloadConfiguration: AVAssetDownloadConfiguration) -&gt; AVAssetDownloadTask</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">지정된 구성을 사용하는 다운로드 작업을 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001">[func makeAssetDownloadTask(asset: AVURLAsset, assetTitle: String, assetArtworkData: Data?, options: [String : Any]?) -&gt; AVAssetDownloadTask?](avassetdownloadurlsession/makeassetdownloadtask(asset:assettitle:assetartworkdata:options:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">자산을 다운로드하는 다운로드 작업을 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001">[func aggregateAssetDownloadTask(with: AVURLAsset, mediaSelections: [AVMediaSelection], assetTitle: String, assetArtworkData: Data?, options: [String : Any]?) -&gt; AVAggregateAssetDownloadTask?](avassetdownloadurlsession/aggregateassetdownloadtask(with:mediaselections:assettitle:assetartworkdata:options:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">자산과 미디어 선택 항목을 다운로드하는 다운로드 작업을 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001">[func makeAssetDownloadTask(asset: AVURLAsset, destinationURL: URL, options: [String : Any]?) -&gt; AVAssetDownloadTask?](avassetdownloadurlsession/makeassetdownloadtask(asset:destinationurl:options:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">지정된 위치에 자산을 다운로드하는 다운로드 작업을 생성합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetdownloadconfiguration">View on Apple Developer</a>*</span>

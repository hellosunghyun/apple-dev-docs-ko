---
source_path: "documentation/AVFoundation/avassetdownloadurlsession/makeassetdownloadtask-downloadconfiguration.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetdownloadurlsession/makeassetdownloadtask-downloadconfiguration"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:makeassetdownloadtaskdownloadconfiguration:0000:0001">makeAssetDownloadTask(downloadConfiguration:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:makeassetdownloadtaskdownloadconfiguration:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:makeassetdownloadtaskdownloadconfiguration:0002:0001">지정한 구성을 사용하는 다운로드 작업을 생성합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:makeassetdownloadtaskdownloadconfiguration:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:makeassetdownloadtaskdownloadconfiguration:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:makeassetdownloadtaskdownloadconfiguration:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:makeassetdownloadtaskdownloadconfiguration:0004:0003">Mac Catalyst 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:makeassetdownloadtaskdownloadconfiguration:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:makeassetdownloadtaskdownloadconfiguration:0004:0005">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:makeassetdownloadtaskdownloadconfiguration:0004:0006">watchOS 8.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func makeAssetDownloadTask(downloadConfiguration: AVAssetDownloadConfiguration) -> AVAssetDownloadTask
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">새로운 다운로드 작업입니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">이 메서드는 무효화된 세션에서 호출하면 예외를 발생시킵니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>downloadConfiguration</code>: 작업이 사용하는 구성입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avassetdownloadconfiguration.md">class AVAssetDownloadConfiguration</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">다운로드 작업의 구성을 제공하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001">[func makeAssetDownloadTask(asset: AVURLAsset, assetTitle: String, assetArtworkData: Data?, options: [String : Any]?) -&gt; AVAssetDownloadTask?](avassetdownloadurlsession/makeassetdownloadtask(asset:assettitle:assetartworkdata:options:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">에셋을 다운로드하기 위한 다운로드 작업을 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001">[func aggregateAssetDownloadTask(with: AVURLAsset, mediaSelections: [AVMediaSelection], assetTitle: String, assetArtworkData: Data?, options: [String : Any]?) -&gt; AVAggregateAssetDownloadTask?](avassetdownloadurlsession/aggregateassetdownloadtask(with:mediaselections:assettitle:assetartworkdata:options:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">에셋과 미디어 선택 항목을 다운로드하기 위한 다운로드 작업을 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001">[func makeAssetDownloadTask(asset: AVURLAsset, destinationURL: URL, options: [String : Any]?) -&gt; AVAssetDownloadTask?](avassetdownloadurlsession/makeassetdownloadtask(asset:destinationurl:options:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">지정된 위치에 에셋을 다운로드하는 다운로드 작업을 생성합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetdownloadurlsession/makeassetdownloadtask(downloadconfiguration:">View on Apple Developer</a>)*</span>

---
source_path: "documentation/AVFoundation/avpartialasyncproperty/metadata-6e14c.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avpartialasyncproperty/metadata-6e14c"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:metadata:0000:0001">metadata</span>

<span class="ko-segment" data-segment-id="seg:paragraph:metadata:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:metadata:0002:0001">값이 있는 모든 메타데이터 식별자에 대한 메타데이터 항목 배열입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:metadata:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:metadata:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:metadata:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:metadata:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:metadata:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:metadata:0004:0005">tvOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:metadata:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:metadata:0004:0007">watchOS 8.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static var metadata: AVAsyncProperty<Root, [AVMetadataItem]> { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">This property provides access to an instance of <a href="avassetcache.md">@@TOKEN_0@@</a> to use for inspection of locally cached media data.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001"><a href="avmetadataitem/metadataitems(from:filteredandsortedaccordingtopreferredlanguages:">@@TOKEN_0@@</a>.md) 메서드를 사용하면 언어에 따라 메타데이터 항목 배열을 필터링할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">결과를 <a href="avmetadataitem/metadataitems(from:filteredbyidentifier:">@@TOKEN_0@@</a>.md) 메서드를 사용해 식별자로 필터링할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001">[static var commonMetadata: AVAsyncProperty&lt;Root, [AVMetadataItem]&gt;](avpartialasyncproperty/commonmetadata-73m58.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">값이 있는 모든 공통 메타데이터 키에 대한 메타데이터 항목 배열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001">[static var availableMetadataFormats: AVAsyncProperty&lt;Root, [AVMetadataFormat]&gt;](avpartialasyncproperty/availablemetadataformats-5p9xg.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">트랙에서 사용할 수 있는 메타데이터 형식의 배열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001">[func loadMetadata(for: AVMetadataFormat, completionHandler: ([AVMetadataItem]?, (any Error)?) -&gt; Void)](avassettrack/loadmetadata(for:completionhandler:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">지정된 형식으로 트랙에 포함된 메타데이터 항목을 로드합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avpartialasyncproperty/metadata-6e14c">View on Apple Developer</a>*</span>

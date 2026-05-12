---
source_path: "documentation/AVFoundation/avcomposition/availablemetadataformats.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcomposition/availablemetadataformats"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:availablemetadataformats:0000:0001">availableMetadataFormats</span>

<span class="ko-segment" data-segment-id="seg:paragraph:availablemetadataformats:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:availablemetadataformats:0002:0001">이 자산에 포함된 메타데이터 형식입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:availablemetadataformats:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:availablemetadataformats:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:availablemetadataformats:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:availablemetadataformats:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:availablemetadataformats:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:availablemetadataformats:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:availablemetadataformats:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:availablemetadataformats:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var availableMetadataFormats: [AVMetadataFormat] { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">메타데이터 형식에는 ID3, iTunes 메타데이터 등이 포함될 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001">[var metadata: [AVMetadataItem]](averror-swift.struct/airplaycontrollerrequiresinternet.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">값을 사용할 수 있는 모든 메타데이터 식별자에 대한 메타데이터 항목 배열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001">[var commonMetadata: [AVMetadataItem]](averror-swift.struct/airplayreceiverrequiresinternet.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">값을 제공하는 공통 메타데이터 식별자에 대해 이 자산이 보유한 메타데이터 항목입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001">[func metadata(forFormat: AVMetadataFormat) -&gt; [AVMetadataItem]](averror-swift.struct/airplayreceivertemporarilyunavailable.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">지정된 형식으로 컨테이너에서 메타데이터 항목 배열을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avcomposition/creationdate.md">var creationDate: AVMetadataItem?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">자산의 생성 날짜를 나타내는 메타데이터 항목입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avcomposition/lyrics.md">var lyrics: String?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">현재 로케일에 적합한 언어로 제공되는 자산의 가사입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcomposition/availablemetadataformats">View on Apple Developer</a>*</span>

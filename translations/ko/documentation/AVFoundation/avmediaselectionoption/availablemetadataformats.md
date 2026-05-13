---
source_path: "documentation/AVFoundation/avmediaselectionoption/availablemetadataformats.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avmediaselectionoption/availablemetadataformats"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:availablemetadataformats:0000:0001">availableMetadataFormats</span>

<span class="ko-segment" data-segment-id="seg:paragraph:availablemetadataformats:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:availablemetadataformats:0002:0001">옵션과 관련된 메타데이터를 포함하는 메타데이터 형식입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:availablemetadataformats:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:availablemetadataformats:0004:0001">iOS 5.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:availablemetadataformats:0004:0002">iPadOS 5.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:availablemetadataformats:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:availablemetadataformats:0004:0004">macOS 10.8+</span>
- <span class="ko-segment" data-segment-id="seg:list:availablemetadataformats:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:availablemetadataformats:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:availablemetadataformats:0004:0007">watchOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var availableMetadataFormats: [String] { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 배열에는 <code>NSString</code> 객체가 포함되며, 각 객체는 옵션과 관련된 메타데이터를 포함하는 메타데이터 형식을 나타냅니다(예: ID3, iTunes 메타데이터 등).</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001">[var commonMetadata: [AVMetadataItem]](avmediaselectionoption/commonmetadata.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">값을 사용할 수 있는 각 공통 메타데이터 키에 대한 메타데이터 항목 배열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001">[func metadata(forFormat: String) -&gt; [AVMetadataItem]](avmediaselectionoption/metadata(forformat:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">주어진 형식의 컨테이너에 있는 각 메타데이터 항목에 대해 하나씩 메타데이터 항목 배열을 반환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmediaselectionoption/availablemetadataformats">View on Apple Developer</a>*</span>

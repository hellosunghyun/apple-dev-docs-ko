---
source_path: "documentation/AVFoundation/avassettrack/metadata-forformat.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassettrack/metadata-forformat"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:metadataforformat:0000:0001">metadata(forFormat:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:metadataforformat:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:metadataforformat:0002:0001">지정한 형식에 대해 트랙이 포함하는 메타데이터 항목을 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:metadataforformat:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:metadataforformat:0004:0001">iOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:metadataforformat:0004:0002">iPadOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:metadataforformat:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:metadataforformat:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:metadataforformat:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:metadataforformat:0004:0006">watchOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func metadata(forFormat format: AVMetadataFormat) -> [AVMetadataItem]
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">지정한 형식과 일치하는 메타데이터 항목의 배열이며, 일치하는 항목이 없으면 빈 배열을 반환합니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">Apple은 iOS 15, tvOS 15 및 macOS 12 이상에서 이 메서드 사용을 권장하지 않습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">대신 <a href="avassettrack/loadmetadata(for:completionhandler:">@@TOKEN_0@@</a>.md)로 트랙 메타데이터를 비동기적으로 로드합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001"><a href="avassettrack/availablemetadataformats.md">@@TOKEN_0@@</a> 속성을 로드한 후에는 현재 스레드를 차단하지 않고 이 메서드를 호출할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0012:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0001"><code>format</code>: 검색할 메타데이터 항목의 형식입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0015:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassettrack/metadata(forformat:">View on Apple Developer</a>)*</span>

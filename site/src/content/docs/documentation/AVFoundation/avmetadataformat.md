---
source_path: "documentation/AVFoundation/avmetadataformat.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avmetadataformat"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avmetadataformat:0000:0001">AVMetadataFormat</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avmetadataformat:0001:0001">**Framework**: AVFoundation **Kind**: struct</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avmetadataformat:0002:0001">A structure that defines metadata formats.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avmetadataformat:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avmetadataformat:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmetadataformat:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmetadataformat:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmetadataformat:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmetadataformat:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmetadataformat:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmetadataformat:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
struct AVMetadataFormat
```

## <span class="ko-segment" data-segment-id="seg:heading:mentions:0007:0001">Mentions</span>

- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0001"><a href="retrieving-media-metadata.md">Retrieving media metadata</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0009:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:metadata-formats:0010:0001">Metadata formats</span>

- <span class="ko-segment" data-segment-id="seg:list:metadata-formats:0011:0001"><a href="avmetadataformat/hlsmetadata.md">static let hlsMetadata: AVMetadataFormat</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:metadata-formats:0012:0001">The HLS metadata format.</span>

- <span class="ko-segment" data-segment-id="seg:list:metadata-formats:0013:0001"><a href="avmetadataformat/itunesmetadata.md">static let iTunesMetadata: AVMetadataFormat</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:metadata-formats:0014:0001">The iTunes metadata format.</span>

- <span class="ko-segment" data-segment-id="seg:list:metadata-formats:0015:0001"><a href="avmetadataformat/id3metadata.md">static let id3Metadata: AVMetadataFormat</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:metadata-formats:0016:0001">The ID3 metadata format.</span>

- <span class="ko-segment" data-segment-id="seg:list:metadata-formats:0017:0001"><a href="avmetadataformat/isouserdata.md">static let isoUserData: AVMetadataFormat</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:metadata-formats:0018:0001">The ISO user data metadata format.</span>

- <span class="ko-segment" data-segment-id="seg:list:metadata-formats:0019:0001"><a href="avmetadataformat/quicktimemetadata.md">static let quickTimeMetadata: AVMetadataFormat</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:metadata-formats:0020:0001">The QuickTime metadata format.</span>

- <span class="ko-segment" data-segment-id="seg:list:metadata-formats:0021:0001"><a href="avmetadataformat/quicktimeuserdata.md">static let quickTimeUserData: AVMetadataFormat</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:metadata-formats:0022:0001">The QuickTime user data metadata format.</span>

- <span class="ko-segment" data-segment-id="seg:list:metadata-formats:0023:0001"><a href="avmetadataformat/unknown.md">static let unknown: AVMetadataFormat</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:metadata-formats:0024:0001">An unknown metadata format.</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0025:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0026:0001"><a href="avmetadataformat/init(rawvalue:">init(rawValue: String)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0027:0001">Creates a metadata format with a string value.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0028:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0029:0001">Conforms To</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0001"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0002"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0003"><a href="../Swift/RawRepresentable.md">RawRepresentable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0004"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0030:0005"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0031:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="retrieving-media-metadata.md">Retrieving media metadata</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">에코 디스토션의 변형 버전을 나타내는 프리셋입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="avmetadataitem.md">class AVMetadataItem</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">타이트 에코 디스토션의 변형 버전을 나타내는 프리셋입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="avmutablemetadataitem.md">class AVMutableMetadataItem</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">타이트 에코 디스토션의 변형 버전을 나타내는 프리셋입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="avmetadataidentifier.md">struct AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">A structure that defines identifiers for metadata formats.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001"><a href="avmetadatakey.md">struct AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">A structure that defines a metadata key.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0042:0001"><a href="avmetadatakeyspace.md">struct AVMetadataKeySpace</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">A structure that defines a metadata key space.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0044:0001"><a href="avmetadataextraattributekey.md">struct AVMetadataExtraAttributeKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0045:0001">A structure that defines keys for extra metadata attributes.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0046:0001"><a href="avmetadataitemfilter.md">class AVMetadataItemFilter</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0047:0001">An object that filters selected information from a metadata item.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0049:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmetadataformat">View on Apple Developer</a>*</span>

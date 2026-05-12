---
source_path: "documentation/AVFoundation/avmetadatakeyspace.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avmetadatakeyspace"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avmetadatakeyspace:0000:0001">AVMetadataKeySpace</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avmetadatakeyspace:0001:0001">**Framework**: AVFoundation **Kind**: struct</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avmetadatakeyspace:0002:0001">메타데이터 키 공간을 정의하는 구조체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avmetadatakeyspace:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avmetadatakeyspace:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmetadatakeyspace:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmetadatakeyspace:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmetadatakeyspace:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmetadatakeyspace:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmetadatakeyspace:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmetadatakeyspace:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
struct AVMetadataKeySpace
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:common-key-space:0008:0001">공통 키 공간</span>

- <span class="ko-segment" data-segment-id="seg:list:common-key-space:0009:0001"><a href="avmetadatakeyspace/common.md">static let common: AVMetadataKeySpace</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:common-key-space:0010:0001">공통 키 공간입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:format-specific-key-spaces:0011:0001">형식별 키 공간</span>

- <span class="ko-segment" data-segment-id="seg:list:format-specific-key-spaces:0012:0001"><a href="avmetadatakeyspace/audiofile.md">static let audioFile: AVMetadataKeySpace</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:format-specific-key-spaces:0013:0001">AudioToolbox 오디오 파일 키 공간입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:format-specific-key-spaces:0014:0001"><a href="avmetadatakeyspace/hlsdaterange.md">static let hlsDateRange: AVMetadataKeySpace</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:format-specific-key-spaces:0015:0001">HTTP Live Streaming 키 공간입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:format-specific-key-spaces:0016:0001"><a href="avmetadatakeyspace/itunes.md">static let iTunes: AVMetadataKeySpace</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:format-specific-key-spaces:0017:0001">iTunes 키 공간입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:format-specific-key-spaces:0018:0001"><a href="avmetadatakeyspace/icy.md">static let icy: AVMetadataKeySpace</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:format-specific-key-spaces:0019:0001">Icecast/ShoutCAST 스트리밍 키 공간입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:format-specific-key-spaces:0020:0001"><a href="avmetadatakeyspace/id3.md">static let id3: AVMetadataKeySpace</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:format-specific-key-spaces:0021:0001">ID3 키 공간입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:format-specific-key-spaces:0022:0001"><a href="avmetadatakeyspace/isouserdata.md">static let isoUserData: AVMetadataKeySpace</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:format-specific-key-spaces:0023:0001">ISO 키 공간입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:format-specific-key-spaces:0024:0001"><a href="avmetadatakeyspace/quicktimemetadata.md">static let quickTimeMetadata: AVMetadataKeySpace</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:format-specific-key-spaces:0025:0001">QuickTime 메타데이터 키 공간입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:format-specific-key-spaces:0026:0001"><a href="avmetadatakeyspace/quicktimeuserdata.md">static let quickTimeUserData: AVMetadataKeySpace</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:format-specific-key-spaces:0027:0001">QuickTime 사용자 데이터 키 공간입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0028:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0029:0001"><a href="avmetadatakeyspace/init(_:">init(String)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0030:0001">문자열로 키 공간을 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0031:0001"><a href="avmetadatakeyspace/init(rawvalue:">init(rawValue: String)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0032:0001">원시 문자열 값으로 키 공간을 생성합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0033:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0034:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0035:0001"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0035:0002"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0035:0003"><a href="../Swift/RawRepresentable.md">RawRepresentable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0035:0004"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0035:0005"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0036:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0037:0001"><a href="retrieving-media-metadata.md">Retrieving media metadata</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0038:0001">미디어 자산과 해당 트랙의 설명 메타데이터를 로드합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0039:0001"><a href="avmetadataitem.md">class AVMetadataItem</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0040:0001">오디오비주얼 자산 또는 해당 트랙 중 하나에 대한 메타데이터 항목입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0041:0001"><a href="avmutablemetadataitem.md">class AVMutableMetadataItem</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0042:0001">오디오비주얼 자산 또는 해당 자산의 트랙 중 하나에 대한 가변 metadata 항목입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0043:0001"><a href="avmetadataidentifier.md">struct AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0044:0001">메타데이터 형식의 식별자를 정의하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0045:0001"><a href="avmetadatakey.md">struct AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0046:0001">메타데이터 키를 정의하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0047:0001"><a href="avmetadataextraattributekey.md">struct AVMetadataExtraAttributeKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0048:0001">추가 메타데이터 특성의 키를 정의하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0049:0001"><a href="avmetadataformat.md">struct AVMetadataFormat</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0050:0001">메타데이터 형식을 정의하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0051:0001"><a href="avmetadataitemfilter.md">class AVMetadataItemFilter</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0052:0001">메타데이터 항목에서 선택한 정보를 필터링하는 객체입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0054:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmetadatakeyspace">View on Apple Developer</a>*</span>

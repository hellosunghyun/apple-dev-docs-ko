---
source_path: "documentation/AVFoundation/avmutablemetadataitem.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avmutablemetadataitem"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avmutablemetadataitem:0000:0001">AVMutableMetadataItem</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avmutablemetadataitem:0001:0001">**Framework**: AVFoundation **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avmutablemetadataitem:0002:0001">오디오-비디오 자산 또는 해당 트랙 중 하나에 대한 가변 메타데이터 항목입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avmutablemetadataitem:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avmutablemetadataitem:0004:0001">iOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmutablemetadataitem:0004:0002">iPadOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmutablemetadataitem:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmutablemetadataitem:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmutablemetadataitem:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmutablemetadataitem:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmutablemetadataitem:0004:0007">watchOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class AVMutableMetadataItem
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">기존 <a href="avmetadataitem.md">@@TOKEN_0@@</a> 객체를 사용하거나, 키, 키 스페이스, 로케일, 값과 같은 메타데이터 항목의 기본 속성 하나 이상으로 가변 메타데이터 항목을 초기화할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0009:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:identifying-metadata-items:0010:0001">메타데이터 항목 식별</span>

- <span class="ko-segment" data-segment-id="seg:list:identifying-metadata-items:0011:0001"><a href="avmutablemetadataitem/identifier.md">var identifier: AVMetadataIdentifier?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:identifying-metadata-items:0012:0001">메타데이터 항목의 식별자를 나타냅니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:accessing-keys-and-key-spaces:0013:0001">키 및 키 스페이스 접근</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-keys-and-key-spaces:0014:0001"><a href="avmutablemetadataitem/key.md">var key: (any NSCopying &amp; NSObjectProtocol)?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-keys-and-key-spaces:0015:0001">가변 메타데이터 항목의 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-keys-and-key-spaces:0016:0001"><a href="avmutablemetadataitem/keyspace.md">var keySpace: AVMetadataKeySpace?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-keys-and-key-spaces:0017:0001">메타데이터 항목 키의 키 스페이스입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:accessing-values:0018:0001">값 접근</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-values:0019:0001"><a href="avmutablemetadataitem/value.md">var value: (any NSCopying &amp; NSObjectProtocol)?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-values:0020:0001">가변 메타데이터 항목의 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-values:0021:0001">[var extraAttributes: [AVMetadataExtraAttributeKey : Any]?](avmutablemetadataitem/extraattributes.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-values:0022:0001">메타데이터 항목의 추가 특성 딕셔너리입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-values:0023:0001"><a href="avmutablemetadataitem/datatype.md">var dataType: String?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-values:0024:0001">메타데이터 항목 값의 데이터 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-values:0025:0001"><a href="avmutablemetadataitem/stringvalue.md">var stringValue: String?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-values:0026:0001">메타데이터 항목의 문자열 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-values:0027:0001"><a href="avmutablemetadataitem/numbervalue.md">var numberValue: NSNumber?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-values:0028:0001">메타데이터 항목의 숫자 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-values:0029:0001"><a href="avmutablemetadataitem/datevalue.md">var dateValue: Date?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-values:0030:0001">메타데이터 항목의 날짜 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-values:0031:0001"><a href="avmutablemetadataitem/datavalue.md">var dataValue: Data?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-values:0032:0001">메타데이터 항목의 데이터 값입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:accessing-timing:0033:0001">타이밍 접근</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-timing:0034:0001"><a href="avmutablemetadataitem/time.md">var time: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-timing:0035:0001">가변 메타데이터 항목의 타임스탬프입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-timing:0036:0001"><a href="avmutablemetadataitem/startdate.md">var startDate: Date?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-timing:0037:0001">시간 지정 메타데이터의 시작 날짜입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-timing:0038:0001"><a href="avmutablemetadataitem/duration.md">var duration: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-timing:0039:0001">가변 메타데이터 항목의 지속 시간입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:accessing-language-support:0040:0001">언어 지원 접근</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-language-support:0041:0001"><a href="avmutablemetadataitem/locale.md">var locale: Locale?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-language-support:0042:0001">가변 메타데이터 항목의 로케일입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-language-support:0043:0001"><a href="avmutablemetadataitem/extendedlanguagetag.md">var extendedLanguageTag: String?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-language-support:0044:0001">메타데이터 항목의 IETF BCP 47(RFC 4646) 언어 식별자입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0045:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0046:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0047:0001"><a href="avmetadataitem.md">AVMetadataItem</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0048:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0049:0001"><a href="avasynchronouskeyvalueloading.md">AVAsynchronousKeyValueLoading</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0049:0002"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0049:0003"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0049:0004"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0049:0005"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0049:0006"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0049:0007"><a href="../Foundation/NSCopying.md">NSCopying</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0049:0008"><a href="../Foundation/NSMutableCopying.md">NSMutableCopying</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0049:0009"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0050:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0051:0001"><a href="retrieving-media-metadata.md">Retrieving media metadata</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0052:0001">미디어 자산과 해당 트랙의 설명 메타데이터를 로드합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0053:0001"><a href="avmetadataitem.md">class AVMetadataItem</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0054:0001">오디오-비디오 자산 또는 해당 트랙 중 하나에 대한 메타데이터 항목입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0055:0001"><a href="avmetadataidentifier.md">struct AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0056:0001">메타데이터 형식을 정의하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0057:0001"><a href="avmetadatakey.md">struct AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0058:0001">메타데이터 키를 정의하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0059:0001"><a href="avmetadatakeyspace.md">struct AVMetadataKeySpace</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0060:0001">A structure that defines a metadata key space.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0061:0001"><a href="avmetadataextraattributekey.md">struct AVMetadataExtraAttributeKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0062:0001">A structure that defines keys for extra metadata attributes.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0063:0001"><a href="avmetadataformat.md">struct AVMetadataFormat</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0064:0001">A structure that defines metadata formats.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0065:0001"><a href="avmetadataitemfilter.md">class AVMetadataItemFilter</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0066:0001">An object that filters selected information from a metadata item.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0068:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmutablemetadataitem">View on Apple Developer</a>*</span>

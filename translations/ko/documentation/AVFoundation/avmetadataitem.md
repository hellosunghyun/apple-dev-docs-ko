---
source_path: "documentation/AVFoundation/avmetadataitem.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avmetadataitem"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avmetadataitem:0000:0001">AVMetadataItem</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avmetadataitem:0001:0001">**Framework**: AVFoundation **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avmetadataitem:0002:0001">A metadata item for an audiovisual asset or one of its tracks.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avmetadataitem:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avmetadataitem:0004:0001">iOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmetadataitem:0004:0002">iPadOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmetadataitem:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmetadataitem:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmetadataitem:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmetadataitem:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmetadataitem:0004:0007">watchOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class AVMetadataItem
```

## <span class="ko-segment" data-segment-id="seg:heading:mentions:0007:0001">Mentions</span>

- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0001"><a href="loading-media-data-asynchronously.md">Loading media data asynchronously</a></span>
- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0002"><a href="retrieving-media-metadata.md">Retrieving media metadata</a></span>
- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0003"><a href="presenting-chapter-markers.md">Presenting chapter markers</a></span>

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0009:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0010:0001"><code>AVAudioUnitSampler</code>의 출력은 단일 스테레오 버스입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0010:0002">To simplify finding and filtering metadata items, the framework groups related metadata into key spaces:</span>

- <span class="ko-segment" data-segment-id="seg:list:overview:0011:0001">**Format-specific key spaces.** The framework defines several format-specific key spaces. They roughly correlate to a particular container or file format, such as QuickTime (QuickTime metadata and user data) or MP3 (ID3). However, a single asset may contain metadata values across multiple key spaces. To retrieve an asset’s complete collection of format-specific metadata, you use its <a href="avasset/metadata.md">@@TOKEN_0@@</a> property.</span>
- <span class="ko-segment" data-segment-id="seg:list:overview:0011:0002">**Common key space.** There are several common metadata values, such as a movie’s creation date or description, that can exist across multiple key spaces. To help normalize access to this common metadata, the framework provides a common key space that gives access to a limited set of metadata values common to several key spaces. This makes it easy to retrieve commonly used metadata without concern for the specific format. To retrieve an asset’s collection of common metadata, you use its <a href="avasset/commonmetadata.md">@@TOKEN_0@@</a> property.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0012:0001">Metadata items have keys that accord with the specification of the container format from which they’re drawn.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0012:0002">Full details of the metadata formats, metadata keys, and metadata key spaces supported by AVFoundation are available in <a href="avmetadatakeyspace.md">@@TOKEN_0@@</a> and <a href="avmetadatakey.md">@@TOKEN_1@@</a>.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0013:0001">To load values of a metadata item when you access them for the first time, use the methods from the <a href="avasynchronouskeyvalueloading.md">@@TOKEN_0@@</a> protocol.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0013:0002">The <a href="avasset.md">@@TOKEN_0@@</a> class and other classes in turn provide their metadata as needed so that you can obtain objects from those arrays without incurring overhead for items you don’t inspect.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0014:0001">To filter arrays of metadata items, you use the methods of this class.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0014:0002">For example, you can filter by key and key space, by locale, and by preferred language.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0015:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:creating-a-metadata-item:0016:0001">Creating a metadata item</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-a-metadata-item:0017:0001"><a href="avmetadataitem/init(propertiesofmetadataitem:valueloadinghandler:">init(propertiesOfMetadataItem: AVMetadataItem, valueLoadingHandler: (AVMetadataItemValueRequest) -&gt; Void)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-a-metadata-item:0018:0001">Creates a metadata item whose value loads on an on-demand basis only.</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-a-metadata-item:0019:0001"><a href="avmetadataitemvaluerequest.md">class AVMetadataItemValueRequest</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-a-metadata-item:0020:0001">An object that responds to a request to load the value of a metadata item.</span>

### <span class="ko-segment" data-segment-id="seg:heading:identifying-metadata-items:0021:0001">Identifying metadata items</span>

- <span class="ko-segment" data-segment-id="seg:list:identifying-metadata-items:0022:0001"><a href="avmetadataitem/identifier.md">var identifier: AVMetadataIdentifier?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:identifying-metadata-items:0023:0001">An identifier for a metadata item.</span>

### <span class="ko-segment" data-segment-id="seg:heading:loading-values:0024:0001">Loading values</span>

- <span class="ko-segment" data-segment-id="seg:list:loading-values:0025:0001"><a href="avmetadataitem/datatype.md">var dataType: String?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:loading-values:0026:0001">The data type of the metadata item’s value.</span>

- <span class="ko-segment" data-segment-id="seg:list:loading-values:0027:0001"><a href="avpartialasyncproperty/value.md">static var value: AVAsyncProperty&lt;Root, (any NSCopying &amp; NSObjectProtocol)?&gt;</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:loading-values:0028:0001">The value of the metadata item.</span>

- <span class="ko-segment" data-segment-id="seg:list:loading-values:0029:0001"><a href="avpartialasyncproperty/stringvalue.md">static var stringValue: AVAsyncProperty&lt;Root, String?&gt;</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:loading-values:0030:0001">The value of the metadata item as a string.</span>

- <span class="ko-segment" data-segment-id="seg:list:loading-values:0031:0001"><a href="avpartialasyncproperty/numbervalue.md">static var numberValue: AVAsyncProperty&lt;Root, NSNumber?&gt;</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:loading-values:0032:0001">The value of the metadata item as a number.</span>

- <span class="ko-segment" data-segment-id="seg:list:loading-values:0033:0001"><a href="avpartialasyncproperty/datevalue.md">static var dateValue: AVAsyncProperty&lt;Root, Date?&gt;</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:loading-values:0034:0001">The value of the metadata item as a date.</span>

- <span class="ko-segment" data-segment-id="seg:list:loading-values:0035:0001"><a href="avpartialasyncproperty/datavalue.md">static var dataValue: AVAsyncProperty&lt;Root, Data?&gt;</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:loading-values:0036:0001">The value of the metadata item as a data value.</span>

- <span class="ko-segment" data-segment-id="seg:list:loading-values:0037:0001">[static var extraAttributes: AVAsyncProperty&lt;Root, [AVMetadataExtraAttributeKey : Any]?&gt;](avpartialasyncproperty/extraattributes.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:loading-values:0038:0001">A dictionary of additional attributes for the item.</span>

### <span class="ko-segment" data-segment-id="seg:heading:accessing-keys-and-key-spaces:0039:0001">Accessing keys and key spaces</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-keys-and-key-spaces:0040:0001"><a href="avmetadataitem/key.md">var key: (any NSCopying &amp; NSObjectProtocol)?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-keys-and-key-spaces:0041:0001">The key of the metadata item.</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-keys-and-key-spaces:0042:0001"><a href="avmetadataitem/commonkey.md">var commonKey: AVMetadataKey?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-keys-and-key-spaces:0043:0001">The common key of the metadata item.</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-keys-and-key-spaces:0044:0001"><a href="avmetadataitem/keyspace.md">var keySpace: AVMetadataKeySpace?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-keys-and-key-spaces:0045:0001">The key space for the metadata item’s key.</span>

### <span class="ko-segment" data-segment-id="seg:heading:accessing-timing:0046:0001">Accessing timing</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-timing:0047:0001"><a href="avmetadataitem/time.md">var time: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-timing:0048:0001">The timestamp of the metadata item.</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-timing:0049:0001"><a href="avmetadataitem/startdate.md">var startDate: Date?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-timing:0050:0001">The start date of the timed metadata.</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-timing:0051:0001"><a href="avmetadataitem/duration.md">var duration: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-timing:0052:0001">The duration of the metadata item.</span>

### <span class="ko-segment" data-segment-id="seg:heading:accessing-language-support:0053:0001">Accessing language support</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-language-support:0054:0001"><a href="avmetadataitem/locale.md">var locale: Locale?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-language-support:0055:0001">The locale of the metadata item.</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-language-support:0056:0001"><a href="avmetadataitem/extendedlanguagetag.md">var extendedLanguageTag: String?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-language-support:0057:0001">The IETF BCP 47 (RFC 4646) language identifier of the metadata item.</span>

### <span class="ko-segment" data-segment-id="seg:heading:filtering-arrays-of-metadata-items:0058:0001">Filtering arrays of metadata items</span>

- <span class="ko-segment" data-segment-id="seg:list:filtering-arrays-of-metadata-items:0059:0001">[class func metadataItems(from: [AVMetadataItem], filteredByIdentifier: AVMetadataIdentifier) -&gt; [AVMetadataItem]](avmetadataitem/metadataitems(from:filteredbyidentifier:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:filtering-arrays-of-metadata-items:0060:0001">Returns metadata items for the specified identifier.</span>

- <span class="ko-segment" data-segment-id="seg:list:filtering-arrays-of-metadata-items:0061:0001">[class func metadataItems(from: [AVMetadataItem], withKey: Any?, keySpace: AVMetadataKeySpace?) -&gt; [AVMetadataItem]](avmetadataitem/metadataitems(from:withkey:keyspace:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:filtering-arrays-of-metadata-items:0062:0001">Returns metadata items that match a specified key or key space.</span>

- <span class="ko-segment" data-segment-id="seg:list:filtering-arrays-of-metadata-items:0063:0001">[class func metadataItems(from: [AVMetadataItem], with: Locale) -&gt; [AVMetadataItem]](avmetadataitem/metadataitems(from:with:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:filtering-arrays-of-metadata-items:0064:0001">Returns metadata items that match a specified locale.</span>

- <span class="ko-segment" data-segment-id="seg:list:filtering-arrays-of-metadata-items:0065:0001">[class func metadataItems(from: [AVMetadataItem], filteredAndSortedAccordingToPreferredLanguages: [String]) -&gt; [AVMetadataItem]](avmetadataitem/metadataitems(from:filteredandsortedaccordingtopreferredlanguages:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:filtering-arrays-of-metadata-items:0066:0001">Returns metadata items whose locales match one of the specified language identifiers.</span>

- <span class="ko-segment" data-segment-id="seg:list:filtering-arrays-of-metadata-items:0067:0001">[class func metadataItems(from: [AVMetadataItem], filteredBy: AVMetadataItemFilter) -&gt; [AVMetadataItem]](avmetadataitem/metadataitems(from:filteredby:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:filtering-arrays-of-metadata-items:0068:0001">Returns filtered metadata items.</span>

### <span class="ko-segment" data-segment-id="seg:heading:translating-metadata-items:0069:0001">Translating metadata items</span>

- <span class="ko-segment" data-segment-id="seg:list:translating-metadata-items:0070:0001"><a href="avmetadataitem/identifier(forkey:keyspace:">class func identifier(forKey: Any, keySpace: AVMetadataKeySpace) -&gt; AVMetadataIdentifier?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:translating-metadata-items:0071:0001">Returns a metadata identifier for the specified key and key space.</span>

- <span class="ko-segment" data-segment-id="seg:list:translating-metadata-items:0072:0001"><a href="avmetadataitem/key(foridentifier:">class func key(forIdentifier: AVMetadataIdentifier) -&gt; Any?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:translating-metadata-items:0073:0001">Returns a metadata key for the specified identifier.</span>

- <span class="ko-segment" data-segment-id="seg:list:translating-metadata-items:0074:0001"><a href="avmetadataitem/keyspace(foridentifier:">class func keySpace(forIdentifier: AVMetadataIdentifier) -&gt; AVMetadataKeySpace?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:translating-metadata-items:0075:0001">Returns a metadata key space for the specified identifier.</span>

### <span class="ko-segment" data-segment-id="seg:heading:accessing-values:0076:0001">Accessing values</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-values:0077:0001"><a href="avmetadataitem/value.md">var value: (any NSCopying &amp; NSObjectProtocol)?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-values:0078:0001">The value of the metadata item.</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-values:0079:0001">[var extraAttributes: [AVMetadataExtraAttributeKey : Any]?](avmetadataitem/extraattributes.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-values:0080:0001">A dictionary of additional attributes for a metadata item.</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-values:0081:0001"><a href="avmetadataitem/stringvalue.md">var stringValue: String?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-values:0082:0001">The value of the metadata item as a string.</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-values:0083:0001"><a href="avmetadataitem/numbervalue.md">var numberValue: NSNumber?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-values:0084:0001">The value of the metadata item as a number.</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-values:0085:0001"><a href="avmetadataitem/datevalue.md">var dateValue: Date?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-values:0086:0001">The value of the metadata item as a date.</span>

- <span class="ko-segment" data-segment-id="seg:list:accessing-values:0087:0001"><a href="avmetadataitem/datavalue.md">var dataValue: Data?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:accessing-values:0088:0001">The value of the metadata item as a data value.</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0089:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0090:0001"><a href="avmetadataitem/init(propertiesof:valueloadinghandler:">init(propertiesOf: AVMetadataItem, valueLoadingHandler: (AVMetadataItemValueRequest) -&gt; Void)</a>.md)</span>

### <span class="ko-segment" data-segment-id="seg:heading:default-implementations:0091:0001">Default Implementations</span>

- <span class="ko-segment" data-segment-id="seg:list:default-implementations:0092:0001"><a href="avmetadataitem/avmetadataitem-implementations.md">AVMetadataItem Implementations</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0093:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0094:0001">Inherits From</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0095:0001"><a href="../ObjectiveC/NSObject-swift.class.md">NSObject</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:inherited-by:0096:0001">Inherited By</span>

- <span class="ko-segment" data-segment-id="seg:list:inherited-by:0097:0001"><a href="avmutablemetadataitem.md">AVMutableMetadataItem</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0098:0001">Conforms To</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0099:0001"><a href="avasynchronouskeyvalueloading.md">AVAsynchronousKeyValueLoading</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0099:0002"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0099:0003"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0099:0004"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0099:0005"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0099:0006"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0099:0007"><a href="../Foundation/NSCopying.md">NSCopying</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0099:0008"><a href="../Foundation/NSMutableCopying.md">NSMutableCopying</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0099:0009"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0100:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0101:0001"><a href="retrieving-media-metadata.md">Retrieving media metadata</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0102:0001">Load descriptive metadata for media assets and their tracks.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0103:0001"><a href="avmutablemetadataitem.md">class AVMutableMetadataItem</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0104:0001">A mutable metadata item for an audiovisual asset or for one of its tracks.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0105:0001"><a href="avmetadataidentifier.md">struct AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0106:0001">A structure that defines identifiers for metadata formats.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0107:0001"><a href="avmetadatakey.md">struct AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0108:0001">A structure that defines a metadata key.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0109:0001"><a href="avmetadatakeyspace.md">struct AVMetadataKeySpace</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0110:0001">A structure that defines a metadata key space.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0111:0001"><a href="avmetadataextraattributekey.md">struct AVMetadataExtraAttributeKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0112:0001">A structure that defines keys for extra metadata attributes.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0113:0001"><a href="avmetadataformat.md">struct AVMetadataFormat</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0114:0001">A structure that defines metadata formats.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0115:0001"><a href="avmetadataitemfilter.md">class AVMetadataItemFilter</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0116:0001">An object that filters selected information from a metadata item.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0118:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmetadataitem">View on Apple Developer</a>*</span>

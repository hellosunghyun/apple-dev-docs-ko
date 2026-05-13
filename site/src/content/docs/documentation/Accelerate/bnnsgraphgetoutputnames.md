---
source_path: "documentation/Accelerate/bnnsgraphgetoutputnames.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsgraphgetoutputnames"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnsgraphgetoutputnames:0000:0001">BNNSGraphGetOutputNames(_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsgraphgetoutputnames:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsgraphgetoutputnames:0002:0001">Extracts the names of output arguments for the given function argument.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsgraphgetoutputnames:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphgetoutputnames:0004:0001">iOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphgetoutputnames:0004:0002">iPadOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphgetoutputnames:0004:0003">Mac Catalyst 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphgetoutputnames:0004:0004">macOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphgetoutputnames:0004:0005">tvOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphgetoutputnames:0004:0006">visionOS 2.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphgetoutputnames:0004:0007">watchOS 11.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func BNNSGraphGetOutputNames(_ graph: bnns_graph_t, _ function: UnsafePointer<CChar>?, _ output_names_count: Int, _ output_names: UnsafeMutablePointer<UnsafePointer<CChar>?>) -> Int32
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">Return Value</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001"><code>0</code> on success, nonzero on failure.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>graph</code>: The compiled graph object.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>function</code>: The function. Specify as <code>nil</code> if the graph only contains one function.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0003"><code>output_names_count</code>: The number of elements in the <code>output_names</code> array.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0004"><code>output_names</code>: On output, an array of pointers to strings that contain the input names.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avmetadataidentifier/itunesmetadataalbum.md">static let identifier3GPUserDataCollection: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">미디어의 컬렉션 이름을 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnnsgraphargumentintent.md">struct BNNSGraphArgumentIntent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">저작권 문구를 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avmetadataidentifier/itunesmetadataappleid.md">static let identifier3GPUserDataDescription: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">미디어의 설명을 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avmetadataidentifier/itunesmetadataarranger.md">static let identifier3GPUserDataGenre: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">미디어의 장르를 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avmetadataidentifier/itunesmetadataartdirector.md">static let identifier3GPUserDataKeywordList: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">미디어의 키워드 목록을 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avmetadataidentifier/itunesmetadataartist.md">static let identifier3GPUserDataLocation: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">미디어의 위치 정보를 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avmetadataidentifier/identifier3gpuserdatamediaclassification.md">static let identifier3GPUserDataMediaClassification: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">미디어의 상업적 세부 정보를 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avmetadataidentifier/identifier3gpuserdatamediarating.md">static let id3MetadataCommercialInformation: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">구매 정보를 포함한 웹페이지를 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avmetadataidentifier/identifier3gpuserdataperformer.md">static let id3MetadataComposer: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">작곡가의 이름을 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="avmetadataidentifier/identifier3gpuserdatarecordingyear.md">static let id3MetadataConductor: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">지휘자의 이름을 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="avmetadataidentifier/identifier3gpuserdatathumbnail.md">static let id3MetadataContentGroupDescription: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">사운드가 더 큰 음원 또는 음악 카테고리에 속함을 나타내는 식별자입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">미디어 콘텐츠 유형을 나타내는 식별자입니다.</span>

---
source_path: "documentation/Accelerate/bnnsgraphcontextsetmessagelogmask.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsgraphcontextsetmessagelogmask"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnsgraphcontextsetmessagelogmask:0000:0001">BNNSGraphContextSetMessageLogMask(_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsgraphcontextsetmessagelogmask:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsgraphcontextsetmessagelogmask:0002:0001">Sets mask for log messages that are logged (either via <code>os_log</code> or the user specified callback)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsgraphcontextsetmessagelogmask:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphcontextsetmessagelogmask:0004:0001">iOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphcontextsetmessagelogmask:0004:0002">iPadOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphcontextsetmessagelogmask:0004:0003">Mac Catalyst 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphcontextsetmessagelogmask:0004:0004">macOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphcontextsetmessagelogmask:0004:0005">tvOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphcontextsetmessagelogmask:0004:0006">visionOS 2.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsgraphcontextsetmessagelogmask:0004:0007">watchOS 11.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func BNNSGraphContextSetMessageLogMask(_ context: bnns_graph_context_t, _ log_level_mask: UInt32) -> Int32
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

- <span class="ko-segment" data-segment-id="seg:list:discussion:0008:0001"><code>context</code>: context to set callbacks for</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0008:0002"><code>log_level_mask</code>: bitmask of levels to log for (Default is BNNSGraphMessageLevelUnsupported | BNNSGraphMessageLevelWarning | BNNSGraphMessageLevelError)</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnnsgraphcompileoptionssetmessagelogmask(_:_:">func BNNSGraphCompileOptionsSetMessageLogMask(bnns_graph_compile_options_t, UInt32)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">Sets the mask for compile-time messages.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnnsgraphmessagelevel.md">struct BNNSGraphMessageLevel</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">Constants that specify the mask for compile-time messages.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avmetadatakey/quicktimeuserdatakeyartist.md">static let quickTimeUserDataKeyArtist: AVMetadataKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">영화 파일 콘텐츠의 아티스트 이름을 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnns_graph_compile_message_fn_t.md">typealias bnns_graph_compile_message_fn_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">Apple ID를 나타내는 키입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="bnns_user_message_data_t.md">struct bnns_user_message_data_t</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">편곡자 이름을 나타내는 키입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">아트 디렉터 이름을 나타내는 키입니다.</span>

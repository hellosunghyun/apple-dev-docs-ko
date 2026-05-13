---
source_path: "documentation/AVFoundation/avsamplecursor/maysampleswithearlierdecodetimestampshavepresentationtimestamps-laterthan.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avsamplecursor/maysampleswithearlierdecodetimestampshavepresentationtimestamps-laterthan"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:maysampleswithearlierdecodetimestampshavepresentationtimestampslaterthan:0000:0001">maySamplesWithEarlierDecodeTimeStampsHavePresentationTimeStamps(laterThan:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:maysampleswithearlierdecodetimestampshavepresentationtimestampslaterthan:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:maysampleswithearlierdecodetimestampshavepresentationtimestampslaterthan:0002:0001">Determines whether a sample earlier in decode order can have a presentation timestamp later than that of the specified sample cursor.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:maysampleswithearlierdecodetimestampshavepresentationtimestampslaterthan:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:maysampleswithearlierdecodetimestampshavepresentationtimestampslaterthan:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:maysampleswithearlierdecodetimestampshavepresentationtimestampslaterthan:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:maysampleswithearlierdecodetimestampshavepresentationtimestampslaterthan:0004:0003">Mac Catalyst 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:maysampleswithearlierdecodetimestampshavepresentationtimestampslaterthan:0004:0004">macOS 10.10+</span>
- <span class="ko-segment" data-segment-id="seg:list:maysampleswithearlierdecodetimestampshavepresentationtimestampslaterthan:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:maysampleswithearlierdecodetimestampshavepresentationtimestampslaterthan:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:maysampleswithearlierdecodetimestampshavepresentationtimestampslaterthan:0004:0007">watchOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func maySamplesWithEarlierDecodeTimeStampsHavePresentationTimeStamps(laterThan cursor: AVSampleCursor) -> Bool
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">Return Value</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001"><a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_0@@</a> if it’s possible for any sample earlier in decode order than the sample at the position of the receiver can have a presentation timestamp later than that of the specified sample cursor; otherwise, <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_1@@</a>.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">A capture device’s <a href="avcapturedevice/focuspointofinterest.md">@@TOKEN_0@@</a> and <a href="avcapturedevice/exposurepointofinterest.md">@@TOKEN_1@@</a> properties provide a <a href="https://developer.apple.com/documentation/CoreFoundation/CGPoint">@@TOKEN_2@@</a> value where <code>{0,0}</code> represents the top-left and <code>{1,1}</code> represents the bottom-right of the unrotated image.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>cursor</code>: An instance of <code>AVSampleCursor</code> with which to test the sample reordering boundary.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avsamplecursor/maysampleswithlaterdecodetimestampshavepresentationtimestamps(earlierthan:">func maySamplesWithLaterDecodeTimeStampsHavePresentationTimeStamps(earlierThan: AVSampleCursor) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">Determines whether a sample later in decode order can have a presentation timestamp earlier than that of the specified sample cursor.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avsamplecursor/samplesrequiredfordecoderrefresh.md">var samplesRequiredForDecoderRefresh: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">The number of samples prior to the current sample, in decode order, the decoder requires to achieve a coherent output at the current decode time.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avsamplecursor/maysampleswithearlierdecodetimestampshavepresentationtimestamps(laterthan:">View on Apple Developer</a>)*</span>

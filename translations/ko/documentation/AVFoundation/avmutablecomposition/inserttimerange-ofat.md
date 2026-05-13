---
source_path: "documentation/AVFoundation/avmutablecomposition/inserttimerange-ofat.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avmutablecomposition/inserttimerange-ofat"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:inserttimerangeofat:0000:0001">insertTimeRange(_:of:at:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inserttimerangeofat:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inserttimerangeofat:0002:0001">Inserts all the tracks within a given time range of a specified asset into the composition.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inserttimerangeofat:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:inserttimerangeofat:0004:0001">iOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:inserttimerangeofat:0004:0002">iPadOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:inserttimerangeofat:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:inserttimerangeofat:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:inserttimerangeofat:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:inserttimerangeofat:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:inserttimerangeofat:0004:0007">watchOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func insertTimeRange(_ timeRange: CMTimeRange, of asset: AVAsset, at startTime: CMTime) throws
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">특정 속성에 해당하는 음성을 요청하기 위해 SSML을 사용하는 경우 시스템은 단일 발화를 여러 부분으로 분할해 각 부분을 적절한 합성기에 전송할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">일치하는 음성이 없으면 발화는 <a href="avspeechutterance/voice.md">@@TOKEN_0@@</a> 속성에 설정된 음성을 사용합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">Media data for the inserted time range is presented at its natural duration; you can scale it to a different duration using <a href="avmutablecomposition/scaletimerange(_:toduration:">@@TOKEN_0@@</a>.md).</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>timeRange</code>: The time range of the asset to be inserted.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0002"><code>asset</code>: An asset that contains the tracks to be inserted.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0003"><code>startTime</code>: The time at which the inserted tracks should be presented by the receiver.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avmutablecomposition/removetimerange(_:">func removeTimeRange(CMTimeRange)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">Removes a specified time range from all tracks of the composition.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avmutablecomposition/scaletimerange(_:toduration:">func scaleTimeRange(CMTimeRange, toDuration: CMTime)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">Changes the duration of all tracks in a given time range.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avmutablecomposition/insertemptytimerange(_:">func insertEmptyTimeRange(CMTimeRange)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">Adds or extends an empty time range within all tracks of the composition.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avmutablecomposition/inserttimerange(_:of:at:completionhandler:">func insertTimeRange(CMTimeRange, of: AVAsset, at: CMTime, completionHandler: ((any Error)?) -&gt; Void)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">Inserts all tracks of an asset for a time range into a composition.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmutablecomposition/inserttimerange(_:of:at:">View on Apple Developer</a>)*</span>

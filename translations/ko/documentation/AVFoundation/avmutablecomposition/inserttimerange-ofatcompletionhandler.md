---
source_path: "documentation/AVFoundation/avmutablecomposition/inserttimerange-ofatcompletionhandler.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avmutablecomposition/inserttimerange-ofatcompletionhandler"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:inserttimerangeofatcompletionhandler:0000:0001">insertTimeRange(_:of:at:completionHandler:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inserttimerangeofatcompletionhandler:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inserttimerangeofatcompletionhandler:0002:0001">시간 범위에 대해 자산의 모든 트랙을 composition에 삽입합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inserttimerangeofatcompletionhandler:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:inserttimerangeofatcompletionhandler:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:inserttimerangeofatcompletionhandler:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:inserttimerangeofatcompletionhandler:0004:0003">Mac Catalyst 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:inserttimerangeofatcompletionhandler:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:inserttimerangeofatcompletionhandler:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:inserttimerangeofatcompletionhandler:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:inserttimerangeofatcompletionhandler:0004:0007">watchOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func insertTimeRange(_ timeRange: CMTimeRange, of asset: AVAsset, at startTime: CMTime, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">필요한 경우 composition은 소스 자산의 시간 범위에서 모든 트랙을 삽입하기 위해 새 트랙을 추가합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">Format description can have extensions of type <a href="https://developer.apple.com/documentation/CoreMedia/kCMFormatDescriptionExtension_VerbatimSampleDescription">@@TOKEN_0@@</a> and <a href="https://developer.apple.com/documentation/CoreMedia/kCMFormatDescriptionExtension_VerbatimISOSampleEntry">@@TOKEN_1@@</a>.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">구성은 삽입된 시간 범위의 미디어 데이터를 원래 길이와 재생률로 표시합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002"><a href="avmutablecomposition/scaletimerange(_:toduration:">@@TOKEN_0@@</a>.md)를 호출하면 표시률이 변경되도록 이를 다른 길이로 스케일링할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0010:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0001"><code>timeRange</code>: composition에 삽입할 자산 트랙의 시간 범위입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0002"><code>asset</code>: 삽입할 트랙을 포함하는 소스 자산입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0003"><code>startTime</code>: 삽입된 트랙을 구성에서 표시할 시간입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0004"><code>completionHandler</code>: 삽입이 완료되면 시스템이 호출하는 콜백입니다. 오류가 발생하면 시스템은 실패 내용을 설명하는 오류 객체를 콜백에 전달합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0012:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avmutablecomposition/removetimerange(_:">func removeTimeRange(CMTimeRange)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">구성의 모든 트랙에서 지정된 시간 범위를 제거합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avmutablecomposition/scaletimerange(_:toduration:">func scaleTimeRange(CMTimeRange, toDuration: CMTime)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">지정된 시간 범위의 모든 트랙 지속 시간을 변경합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avmutablecomposition/insertemptytimerange(_:">func insertEmptyTimeRange(CMTimeRange)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">구성의 모든 트랙 내에서 빈 시간 범위를 추가하거나 확장합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="avmutablecomposition/inserttimerange(_:of:at:">func insertTimeRange(CMTimeRange, of: AVAsset, at: CMTime) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">지정된 자산의 특정 시간 범위 내 모든 트랙을 composition에 삽입합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmutablecomposition/inserttimerange(_:of:at:completionhandler:">Apple Developer에서 보기</a>)*</span>

---
source_path: "documentation/AVFoundation/avmutablecomposition/insertemptytimerange.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avmutablecomposition/insertemptytimerange"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:insertemptytimerange:0000:0001">insertEmptyTimeRange(_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:insertemptytimerange:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:insertemptytimerange:0002:0001">구성의 모든 트랙에서 빈 시간 범위를 추가하거나 확장합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:insertemptytimerange:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:insertemptytimerange:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:insertemptytimerange:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:insertemptytimerange:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:insertemptytimerange:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:insertemptytimerange:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:insertemptytimerange:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:insertemptytimerange:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func insertEmptyTimeRange(_ timeRange: CMTimeRange)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">빈 시간 범위를 삽입하면 시간 범위의 길이만큼 기존 콘텐츠가 밀려납니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">이 메서드는 이후에 생성된 트랙이 미디어를 표시할 수 있도록 구성에서 시간 범위를 예약할 때 사용합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>timeRange</code>: 삽입할 빈 시간 범위입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참조 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avmutablecomposition/removetimerange(_:">func removeTimeRange(CMTimeRange)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">구성의 모든 트랙에서 지정한 시간 범위를 제거합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avmutablecomposition/scaletimerange(_:toduration:">func scaleTimeRange(CMTimeRange, toDuration: CMTime)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">주어진 시간 범위에서 모든 트랙의 길이를 변경합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avmutablecomposition/inserttimerange(_:of:at:completionhandler:">func insertTimeRange(CMTimeRange, of: AVAsset, at: CMTime, completionHandler: ((any Error)?) -&gt; Void)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avplayeritemrenderedlegibleoutput/setdelegate(_:queue:">View on Apple Developer</a>)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avmutablecomposition/inserttimerange(_:of:at:">func insertTimeRange(CMTimeRange, of: AVAsset, at: CMTime) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">지정된 자산의 특정 시간 범위 내 모든 트랙을 composition에 삽입합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmutablecomposition/insertemptytimerange(_:">Apple Developer에서 보기</a>)*</span>

---
source_path: "documentation/AVFoundation/avpartialasyncproperty/containsfragments.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avpartialasyncproperty/containsfragments"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:containsfragments:0000:0001">containsFragments</span>

<span class="ko-segment" data-segment-id="seg:paragraph:containsfragments:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:containsfragments:0002:0001">최소한 하나의 movie fragment가 에셋을 확장하는지 나타내는 부울 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:containsfragments:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:containsfragments:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:containsfragments:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:containsfragments:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:containsfragments:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:containsfragments:0004:0005">tvOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:containsfragments:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static var containsFragments: AVAsyncProperty<Root, Bool> { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">This method plays the available media data at the specified <code>rate</code> regardless of whether there is sufficient media buffered to ensure smooth playback.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">QuickTime movie files 및 MPEG-4 files의 경우, 이 속성의 값은 <a href="avasset/cancontainfragments.md">@@TOKEN_0@@</a>가 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_1@@</a>이고, <code>moov</code> 박스 뒤에 하나 이상의 <code>moof</code> 박스가 있는 경우 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_4@@</a>입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="avpartialasyncproperty/cancontainfragments.md">static var canContainFragments: AVAsyncProperty&lt;Root, Bool&gt;</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">조각을 사용해 에셋을 확장할 수 있는지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avpartialasyncproperty/overalldurationhint.md">static var overallDurationHint: AVAsyncProperty&lt;Root, CMTime&gt;</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">현재 존재하거나 향후 존재할 수 있는 조각의 총 재생 시간을 나타내는 힌트입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avpartialasyncproperty/containsfragments">View on Apple Developer</a>*</span>

---
source_path: "documentation/AVFoundation/avcomposition/cancontainfragments.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcomposition/cancontainfragments"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:cancontainfragments:0000:0001">canContainFragments</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cancontainfragments:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cancontainfragments:0002:0001">에셋을 조각으로 확장할 수 있는지 나타내는 Boolean 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cancontainfragments:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:cancontainfragments:0004:0001">iOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:cancontainfragments:0004:0002">iPadOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:cancontainfragments:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:cancontainfragments:0004:0004">macOS 10.11+</span>
- <span class="ko-segment" data-segment-id="seg:list:cancontainfragments:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:cancontainfragments:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var canContainFragments: Bool { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">QuickTime movie 파일과 MPEG-4 파일의 경우, <code>moov</code> 박스에 <code>mvex</code> 박스가 있으면 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_2@@</a>입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">해당 형식의 경우 <code>mvex</code> 박스는 이후 <code>moof</code> 박스의 존재 가능성을 나타냅니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avcomposition/containsfragments.md">var containsFragments: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">최소 한 개 이상의 영화 조각이 에셋을 확장하는지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcomposition/overalldurationhint.md">var overallDurationHint: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">현재 존재하거나 향후 존재할 수 있는 조각의 총 지속 시간입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcomposition/cancontainfragments">View on Apple Developer</a>*</span>

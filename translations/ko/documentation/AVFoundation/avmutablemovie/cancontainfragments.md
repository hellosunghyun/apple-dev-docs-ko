---
source_path: "documentation/AVFoundation/avmutablemovie/cancontainfragments.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avmutablemovie/cancontainfragments"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:cancontainfragments:0000:0001">canContainFragments</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cancontainfragments:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cancontainfragments:0002:0001">에셋을 프래그먼트로 확장할 수 있는지를 나타내는 부울 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cancontainfragments:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:cancontainfragments:0004:0001">iOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:cancontainfragments:0004:0002">iPadOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:cancontainfragments:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:cancontainfragments:0004:0004">macOS 10.11+</span>
- <span class="ko-segment" data-segment-id="seg:list:cancontainfragments:0004:0005">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var canContainFragments: Bool { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">QuickTime movie 파일과 MPEG-4 파일의 경우, <code>moov</code> 박스에 <code>mvex</code> 박스가 있으면 값이 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_2@@</a>입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">이러한 형식에서 <code>mvex</code> 박스는 이후 <code>moof</code> 박스가 존재할 가능성을 나타냅니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avmutablemovie/containsfragments.md">var containsFragments: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">적어도 하나의 movie fragment가 에셋을 확장하는지를 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avmutablemovie/overalldurationhint.md">var overallDurationHint: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">현재 존재하거나 향후 존재할 수 있는 프래그먼트의 총 길이입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmutablemovie/cancontainfragments">View on Apple Developer</a>*</span>

---
source_path: "documentation/AVFoundation/avplayeritem/navigationmarkergroups.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avplayeritem/navigationmarkergroups"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:navigationmarkergroups:0000:0001">navigationMarkerGroups</span>

<span class="ko-segment" data-segment-id="seg:paragraph:navigationmarkergroups:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:navigationmarkergroups:0002:0001">The time marker groups that provide ways to navigate the player item’s content.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:navigationmarkergroups:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:navigationmarkergroups:0004:0001">tvOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var navigationMarkerGroups: [AVNavigationMarkersGroup] { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">If this property is <code>true</code>, but no assistive technology, such as VoiceOver, is on, the speech synthesizer uses the utterance property values.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">예를 들어 <a href="avaudiosession/category-swift.struct/record.md">@@TOKEN_0@@</a> 카테고리는 오디오 입력을 지원하지 않는 기기에서는 사용할 수 없습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">For example, a “Goals Scored” marker group might summarize key moments in a recorded sporting event.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0004">When you present a player item containing marker groups with the <a href="https://developer.apple.com/documentation/AVKit/AVPlayerViewController">@@TOKEN_0@@</a> class, the user interface provides options for navigating each group.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">챕터 목록을 제공하려면 <a href="avplayeritem/navigationmarkergroups.md">@@TOKEN_0@@</a> 배열의 첫 번째 항목을 사용하고 해당 항목의 <code>title</code> 속성을 <code>nil</code>로 설정합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">콘텐츠 탐색을 위한 추가 또는 대체 수단을 제공하려면 배열의 각 navigation marker group에 고유한 title 값을 사용합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="avplayeritem/nextcontentproposal.md">var nextContentProposal: AVContentProposal?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">현재 콘텐츠 뒤에 제안된 항목입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avplayeritem/navigationmarkergroups">View on Apple Developer</a>*</span>

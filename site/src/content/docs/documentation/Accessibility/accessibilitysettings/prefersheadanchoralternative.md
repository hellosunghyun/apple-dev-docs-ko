---
source_path: "documentation/Accessibility/accessibilitysettings/prefersheadanchoralternative.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accessibility/accessibilitysettings/prefersheadanchoralternative"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:prefersheadanchoralternative:0000:0001">prefersHeadAnchorAlternative</span>

<span class="ko-segment" data-segment-id="seg:paragraph:prefersheadanchoralternative:0001:0001">**Framework**: Accessibility **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:prefersheadanchoralternative:0002:0001">사용자의 머리 위치를 따라 이동하는 콘텐츠에 대한 선호도를 나타내는 부울 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:prefersheadanchoralternative:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:prefersheadanchoralternative:0004:0001">visionOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static var prefersHeadAnchorAlternative: Bool { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 속성의 값은 사용자가 콘텐츠를 머리 위치에 고정하는 것을 원하지 않으면 <code>true</code>, 머리 위치에 고정되는 콘텐츠가 허용되면 <code>false</code>입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">Apple Vision Pro에서 앱은 콘텐츠를 사용자의 머리 위치를 따라가도록 설정해 헤드업 디스플레이 효과를 만들 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">이 효과를 사용하면 사용자가 어디를 보더라도 콘텐츠의 위치가 동일하게 유지됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0003">하지만 일부 보조 기술은 이 유형의 콘텐츠와 호환되지 않습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0004">예를 들어 어떤 기술은 사용자의 머리 움직임을 이용해 현재 선택 항목을 제어할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0005">콘텐츠를 머리 위치에 고정하면 해당 기술이 그 콘텐츠와 상호 작용하지 못하게 됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">앱에 머리 기준으로 고정된 콘텐츠가 포함되어 있다면, 해당 콘텐츠를 표시하기 전에 이 함수를 호출합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">함수가 <code>true</code>를 반환하면 콘텐츠를 표시할 대체 방법을 찾습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0003">예를 들어 일반 창에서 표시할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="accessibilitysettings/prefersheadanchoralternativedidchangenotification.md">static var prefersHeadAnchorAlternativeDidChangeNotification: Notification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">시스템의 머리 기준 고정 콘텐츠 설정이 변경될 때 게시되는 알림입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/accessibility/accessibilitysettings/prefersheadanchoralternative">View on Apple Developer</a>*</span>

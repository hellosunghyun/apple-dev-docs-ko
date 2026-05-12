---
source_path: "documentation/AVFoundation/avplayeritem/effectivemediapresentationsettings-for.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avplayeritem/effectivemediapresentationsettings-for"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:effectivemediapresentationsettingsfor:0000:0001">effectiveMediaPresentationSettings(for:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:effectivemediapresentationsettingsfor:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:effectivemediapresentationsettingsfor:0002:0001">지정한 AVMediaSelectionGroup에서 현재 선택된 AVMediaSelectionOption이 보유한 미디어 특성을 가진 미디어 프레젠테이션 설정을 나타냅니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:effectivemediapresentationsettingsfor:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:effectivemediapresentationsettingsfor:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:effectivemediapresentationsettingsfor:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:effectivemediapresentationsettingsfor:0004:0003">Mac Catalyst 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:effectivemediapresentationsettingsfor:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:effectivemediapresentationsettingsfor:0004:0005">tvOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:effectivemediapresentationsettingsfor:0004:0006">visionOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:effectivemediapresentationsettingsfor:0004:0007">watchOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func effectiveMediaPresentationSettings(for mediaSelectionGroup: AVMediaSelectionGroup) -> [AVMediaPresentationSelector : Any]
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">AVMediaPresentationSelectors를 키로, AVMediaPresentationSettings를 값으로 하는 딕셔너리입니다. 단, 지정한 그룹에서 현재 선택된 AVMediaSelectionOption이 selector의 설정과 연결된 특성 중 아무 것도 보유하지 않으면 해당 값은 제외됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0002">이 경우 딕셔너리의 값은 <code>NSNull</code>이 됩니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">지정한 AVMediaSelectionGroup의 AVMediaSelectionOption 중 현재 선택된 미디어 프레젠테이션 언어를 가진 항목이 현재 선택된 설정과 연관된 모든 특성을 갖고 있지 않으면, 현재 미디어 프레젠테이션 설정은 현재 유효한 미디어 프레젠테이션 설정과 다를 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">AVMediaPresentationSelector의 값이 <code>NSNull</code>이 되는 경우는 AVCustomMediaSelectionScheme에서 사용할 수 있도록 콘텐츠가 적절하지 않게 작성되었거나, 현재 선택된 AVMediaSelectionOption이 AVMediaPresentationSettings를 사용하지 않는 방식으로 선택된 경우입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>mediaSelectionGroup</code>: 수신자의 에셋에서 현재 유효한 미디어 프레젠테이션 설정이 필요한 경우 가져온 AVMediaSelectionGroup입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avplayeritem/select(_:for:">func select(AVMediaPresentationSetting, for: AVMediaSelectionGroup)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">연결된 AVPlayer의 appliesMediaSelectionCriteriaAutomatically 속성이 YES로 설정되어 있으면 플레이어 항목이 특정 미디어 프레젠테이션 설정을 선호하도록 구성되며, 동일한 미디어 프레젠테이션 셀렉터의 이전 설정 우선순위를 대체합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001">[var preferredCustomMediaSelectionSchemes: [AVCustomMediaSelectionScheme]](avplayeritem/preferredcustommediaselectionschemes.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">수신자의 자산에 있는 AVMediaSelectionGroup의 AVCustomMediaSelectionScheme을 나타내며, 연결된 UI 구현에서 미디어 선택용 인터페이스를 구성할 때 사용해야 함을 나타냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avplayeritem/selectmediapresentationlanguage(_:for:">func selectMediaPresentationLanguage(String, for: AVMediaSelectionGroup)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">연결된 AVPlayer의 appliesMediaSelectionCriteriaAutomatically 속성이 YES로 설정되어 있으면 플레이어 항목이 특정 언어를 선호하도록 구성하며, 지정된 그룹의 커스텀 미디어 선택 스킴에서 사용 가능한 이전 언어 선호도를 대체합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avplayeritem/selectedmediapresentationlanguage(for:">func selectedMediaPresentationLanguage(for: AVMediaSelectionGroup) -&gt; String?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">-selectMediaPresentationLanguages:forMediaSelectionGroup:를 통해 이전에 언어가 선택된 경우 지정된 미디어 선택 그룹의 미디어 프레젠테이션 언어를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001">[func selectedMediaPresentationSettings(for: AVMediaSelectionGroup) -&gt; [AVMediaPresentationSelector : Any]](avplayeritem/selectedmediapresentationsettings(for:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">지정된 AVMediaSelectionGroup의 AVCustomMediaSelectionScheme에 있는 각 AVMediaPresentationSelector별로 가장 최근에 선택된 미디어 프레젠테이션 설정을 나타냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avplayeritem/currentmediaselection.md">var currentMediaSelection: AVMediaSelection</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">수신자의 각 미디어 선택 그룹에 대한 현재 미디어 선택입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avplayeritem/select(_:in:">func select(AVMediaSelectionOption?, in: AVMediaSelectionGroup)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">지정된 미디어 선택 그룹에서 미디어 옵션을 선택하고, 해당 그룹의 다른 모든 옵션 선택을 해제합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avplayeritem/selectmediaoptionautomatically(in:">func selectMediaOptionAutomatically(in: AVMediaSelectionGroup)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">지정된 미디어 선택 그룹에서 수신자의 자동 선택 기준과 가장 잘 일치하는 미디어 옵션을 선택합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avplayeritem/effectivemediapresentationsettings(for:">View on Apple Developer</a>)*</span>

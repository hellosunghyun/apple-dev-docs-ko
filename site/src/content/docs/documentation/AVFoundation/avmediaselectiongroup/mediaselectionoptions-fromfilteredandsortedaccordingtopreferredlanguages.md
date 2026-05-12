---
source_path: "documentation/AVFoundation/avmediaselectiongroup/mediaselectionoptions-fromfilteredandsortedaccordingtopreferredlanguages.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avmediaselectiongroup/mediaselectionoptions-fromfilteredandsortedaccordingtopreferredlanguages"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:mediaselectionoptionsfromfilteredandsortedaccordingtopreferredlanguages:0000:0001">mediaSelectionOptions(from:filteredAndSortedAccordingToPreferredLanguages:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:mediaselectionoptionsfromfilteredandsortedaccordingtopreferredlanguages:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:mediaselectionoptionsfromfilteredandsortedaccordingtopreferredlanguages:0002:0001">지정한 언어 중 하나와 로케일이 일치하는지 여부에 따라 미디어 선택 옵션 배열을 필터링하여 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:mediaselectionoptionsfromfilteredandsortedaccordingtopreferredlanguages:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:mediaselectionoptionsfromfilteredandsortedaccordingtopreferredlanguages:0004:0001">iOS 6.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:mediaselectionoptionsfromfilteredandsortedaccordingtopreferredlanguages:0004:0002">iPadOS 6.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:mediaselectionoptionsfromfilteredandsortedaccordingtopreferredlanguages:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:mediaselectionoptionsfromfilteredandsortedaccordingtopreferredlanguages:0004:0004">macOS 10.8+</span>
- <span class="ko-segment" data-segment-id="seg:list:mediaselectionoptionsfromfilteredandsortedaccordingtopreferredlanguages:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:mediaselectionoptionsfromfilteredandsortedaccordingtopreferredlanguages:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:mediaselectionoptionsfromfilteredandsortedaccordingtopreferredlanguages:0004:0007">watchOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class func mediaSelectionOptions(from mediaSelectionOptions: [AVMediaSelectionOption], filteredAndSortedAccordingToPreferredLanguages preferredLanguages: [String]) -> [AVMediaSelectionOption]
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001"><code>preferredLanguages</code> 매개변수에 있는 언어 중 하나와 일치하는 <a href="avmediaselectionoption.md">@@TOKEN_1@@</a> 객체 배열입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0002">이 배열의 객체는 각 객체가 일치하는 언어를 기준으로 정렬되며, 가장 선호되는 언어와 일치하는 객체가 배열 앞쪽에 배치됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>mediaSelectionOptions</code>: 필터링 및 정렬할 <a href="avmediaselectionoption.md">@@TOKEN_1@@</a> 객체 배열입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>preferredLanguages</code>: 정규화된 IETF BCP 47 언어 식별자를 각기 포함하는 <a href="https://developer.apple.com/documentation/Foundation/NSString">@@TOKEN_1@@</a> 객체 배열입니다. 문자열은 선호도 순으로 정렬되어야 하며, 가장 선호되는 언어에 해당하는 문자열이 배열의 첫 번째 요소가 됩니다. 일반적으로 이러한 문자열은 <a href="https://developer.apple.com/documentation/Foundation/NSLocale">@@TOKEN_2@@</a> 클래스의 <a href="https://developer.apple.com/documentation/Foundation/NSLocale/preferredLanguages">@@TOKEN_3@@</a> 클래스 메서드를 사용해 가져옵니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001">[class func playableMediaSelectionOptions(from: [AVMediaSelectionOption]) -&gt; [AVMediaSelectionOption]](avmediaselectiongroup/playablemediaselectionoptions(from:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">주어진 배열에서 재생 가능한 미디어 선택 옵션을 포함한 배열을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001">[class func mediaSelectionOptions(from: [AVMediaSelectionOption], with: Locale) -&gt; [AVMediaSelectionOption]](avmediaselectiongroup/mediaselectionoptions(from:with:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">주어진 배열에서 지정된 로케일과 일치하는 미디어 선택 옵션을 포함한 배열을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001">[class func mediaSelectionOptions(from: [AVMediaSelectionOption], withMediaCharacteristics: [AVMediaCharacteristic]) -&gt; [AVMediaSelectionOption]](avmediaselectiongroup/mediaselectionoptions(from:withmediacharacteristics:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">주어진 배열에서 지정된 미디어 특성에 일치하는 미디어 선택 옵션을 포함한 배열을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001">[class func mediaSelectionOptions(from: [AVMediaSelectionOption], withoutMediaCharacteristics: [AVMediaCharacteristic]) -&gt; [AVMediaSelectionOption]](avmediaselectiongroup/mediaselectionoptions(from:withoutmediacharacteristics:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">주어진 배열에서 지정한 미디어 특성과 일치하지 않는 미디어 선택 옵션으로 구성된 배열을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avmediaselectiongroup/custommediaselectionscheme.md">var customMediaSelectionScheme: AVCustomMediaSelectionScheme?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">AVMediaSelectionOptions에 대해 대체 선택 인터페이스를 제공할 목적으로 작성된 콘텐츠의 경우, AVCustomMediaSelectionScheme은 미디어 표시를 제어하기 위한 사용자 지정 설정 컬렉션을 제공합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmediaselectiongroup/mediaselectionoptions(from:filteredandsortedaccordingtopreferredlanguages:">View on Apple Developer</a>)*</span>

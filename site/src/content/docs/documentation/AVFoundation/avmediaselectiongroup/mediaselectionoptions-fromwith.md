---
source_path: "documentation/AVFoundation/avmediaselectiongroup/mediaselectionoptions-fromwith.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avmediaselectiongroup/mediaselectionoptions-fromwith"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:mediaselectionoptionsfromwith:0000:0001">mediaSelectionOptions(from:with:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:mediaselectionoptionsfromwith:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:mediaselectionoptionsfromwith:0002:0001">주어진 배열에서 지정된 <code>locale</code>과 일치하는 미디어 선택 옵션을 포함하는 배열을 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:mediaselectionoptionsfromwith:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:mediaselectionoptionsfromwith:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:mediaselectionoptionsfromwith:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:mediaselectionoptionsfromwith:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:mediaselectionoptionsfromwith:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:mediaselectionoptionsfromwith:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:mediaselectionoptionsfromwith:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:mediaselectionoptionsfromwith:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class func mediaSelectionOptions(from mediaSelectionOptions: [AVMediaSelectionOption], with locale: Locale) -> [AVMediaSelectionOption]
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001"><code>array</code>에서 <code>locale</code>와 일치하는 미디어 선택 옵션이 포함된 배열입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>mediaSelectionOptions</code>: 필터링할 <a href="avmediaselectionoption.md">@@TOKEN_1@@</a> 객체 배열입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>locale</code>: 미디어 선택 옵션이 출력 배열에 복사되려면 일치해야 하는 locale입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001">[class func playableMediaSelectionOptions(from: [AVMediaSelectionOption]) -&gt; [AVMediaSelectionOption]](avmediaselectiongroup/playablemediaselectionoptions(from:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">주어진 배열에서 재생 가능한 미디어 선택 옵션을 포함하는 배열을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001">[class func mediaSelectionOptions(from: [AVMediaSelectionOption], withMediaCharacteristics: [AVMediaCharacteristic]) -&gt; [AVMediaSelectionOption]](avmediaselectiongroup/mediaselectionoptions(from:withmediacharacteristics:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">주어진 배열에서 지정된 미디어 특성과 일치하는 미디어 선택 옵션을 포함하는 배열을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001">[class func mediaSelectionOptions(from: [AVMediaSelectionOption], withoutMediaCharacteristics: [AVMediaCharacteristic]) -&gt; [AVMediaSelectionOption]](avmediaselectiongroup/mediaselectionoptions(from:withoutmediacharacteristics:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">Returns an array containing the media selection options from a given array that do not match given media characteristics.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001">[class func mediaSelectionOptions(from: [AVMediaSelectionOption], filteredAndSortedAccordingToPreferredLanguages: [String]) -&gt; [AVMediaSelectionOption]](avmediaselectiongroup/mediaselectionoptions(from:filteredandsortedaccordingtopreferredlanguages:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">Returns an array of media selection options, filtering them according to whether their locales match one of the specified languages.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avmediaselectiongroup/custommediaselectionscheme.md">var customMediaSelectionScheme: AVCustomMediaSelectionScheme?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">For content that has been authored with the express intent of offering an alternative selection interface for AVMediaSelectionOptions, AVCustomMediaSelectionScheme provides a collection of custom settings for controlling the presentation of the media.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmediaselectiongroup/mediaselectionoptions(from:with:">View on Apple Developer</a>)*</span>

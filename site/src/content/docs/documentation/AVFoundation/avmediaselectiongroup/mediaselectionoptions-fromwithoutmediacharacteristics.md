---
source_path: "documentation/AVFoundation/avmediaselectiongroup/mediaselectionoptions-fromwithoutmediacharacteristics.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avmediaselectiongroup/mediaselectionoptions-fromwithoutmediacharacteristics"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:mediaselectionoptionsfromwithoutmediacharacteristics:0000:0001">mediaSelectionOptions(from:withoutMediaCharacteristics:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:mediaselectionoptionsfromwithoutmediacharacteristics:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:mediaselectionoptionsfromwithoutmediacharacteristics:0002:0001">주어진 배열에서 지정된 미디어 특성과 일치하지 않는 미디어 선택 옵션을 포함하는 배열을 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:mediaselectionoptionsfromwithoutmediacharacteristics:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:mediaselectionoptionsfromwithoutmediacharacteristics:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:mediaselectionoptionsfromwithoutmediacharacteristics:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:mediaselectionoptionsfromwithoutmediacharacteristics:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:mediaselectionoptionsfromwithoutmediacharacteristics:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:mediaselectionoptionsfromwithoutmediacharacteristics:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:mediaselectionoptionsfromwithoutmediacharacteristics:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:mediaselectionoptionsfromwithoutmediacharacteristics:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class func mediaSelectionOptions(from mediaSelectionOptions: [AVMediaSelectionOption], withoutMediaCharacteristics mediaCharacteristics: [AVMediaCharacteristic]) -> [AVMediaSelectionOption]
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001"><code>array</code>에서 <code>mediaCharacteristics</code>의 미디어 특성이 없는 미디어 선택 옵션을 포함하는 배열입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>mediaSelectionOptions</code>: 필터링할 <a href="avmediaselectionoption.md">@@TOKEN_1@@</a> 객체 배열입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>mediaCharacteristics</code>: 미디어 선택 옵션이 출력 배열에 존재하려면 <code>mediaCharacteristics</code>에 해당 미디어 특성이 없어야 합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001">[class func playableMediaSelectionOptions(from: [AVMediaSelectionOption]) -&gt; [AVMediaSelectionOption]](avmetadatakey/id3metadatakeyattachedpicture.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">지정된 배열에서 재생 가능한 미디어 선택 옵션을 포함하는 배열을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001">[class func mediaSelectionOptions(from: [AVMediaSelectionOption], with: Locale) -&gt; [AVMediaSelectionOption]](avmetadatakey/id3metadatakeyaudioencryption.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">지정된 배열에서 지정된 로케일과 일치하는 미디어 선택 옵션을 포함하는 배열을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001">[class func mediaSelectionOptions(from: [AVMediaSelectionOption], withMediaCharacteristics: [AVMediaCharacteristic]) -&gt; [AVMediaSelectionOption]](avmetadatakey/id3metadatakeyaudioseekpointindex.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">지정된 배열에서 지정된 미디어 특성과 일치하는 미디어 선택 옵션을 포함하는 배열을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001">[class func mediaSelectionOptions(from: [AVMediaSelectionOption], filteredAndSortedAccordingToPreferredLanguages: [String]) -&gt; [AVMediaSelectionOption]](avmetadatakey/id3metadatakeyband.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">지정한 언어 중 하나와 로케일이 일치하는지 여부에 따라 미디어 선택 옵션을 필터링한 배열을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avmediaselectiongroup/custommediaselectionscheme.md">var customMediaSelectionScheme: AVCustomMediaSelectionScheme?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">AVMediaSelectionOptions에 대한 대체 선택 인터페이스를 제공하기 위해 작성된 콘텐츠의 경우, AVCustomMediaSelectionScheme은 미디어의 표시를 제어하는 사용자 정의 설정 모음을 제공합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmediaselectiongroup/mediaselectionoptions(from:withoutmediacharacteristics:">Apple Developer에서 보기</a>)*</span>

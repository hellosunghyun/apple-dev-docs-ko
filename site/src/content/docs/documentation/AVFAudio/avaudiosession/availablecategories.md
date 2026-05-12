---
source_path: "documentation/AVFAudio/avaudiosession/availablecategories.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiosession/availablecategories"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:availablecategories:0000:0001">availableCategories</span>

<span class="ko-segment" data-segment-id="seg:paragraph:availablecategories:0001:0001">**Framework**: AVFAudio **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:availablecategories:0002:0001">현재 기기에서 사용 가능한 오디오 세션 카테고리입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:availablecategories:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:availablecategories:0004:0001">iOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:availablecategories:0004:0002">iPadOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:availablecategories:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:availablecategories:0004:0004">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:availablecategories:0004:0005">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:availablecategories:0004:0006">watchOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var availableCategories: [AVAudioSession.Category] { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">If this property is <code>true</code>, but no assistive technology, such as VoiceOver, is on, the speech synthesizer uses the utterance property values.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">예를 들어 <a href="avaudiosession/category-swift.struct/record.md">@@TOKEN_0@@</a> 카테고리는 오디오 입력을 지원하지 않는 기기에서는 사용할 수 없습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이 속성을 조회하면 현재 기기에서 사용하려는 카테고리가 사용 가능한지 확인할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="avaudiosession/category-swift.property.md">var category: AVAudioSession.Category</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">현재 오디오 세션 카테고리입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avaudiosession/category-swift.struct.md">AVAudioSession.Category</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">오디오 세션 카그고리 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avaudiosession/categoryoptions-swift.property.md">var categoryOptions: AVAudioSession.CategoryOptions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">현재 오디오 세션 카테고리와 연결된 옵션 집합입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avaudiosession/categoryoptions-swift.struct.md">AVAudioSession.CategoryOptions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">선택적 오디오 동작을 지정하는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="avaudiosession/categoryoptions-swift.struct/farfieldinput.md">static var farFieldInput: AVAudioSession.CategoryOptions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">이 옵션은 세션에서 FarFieldInput을 사용할 수 있을 때 이를 선호하는 경우 사용해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0002">이 옵션은 입력을 지원하는 카테고리에서만 유효합니다. 해당 카테고리는 <a href="avaudiosession/category-swift.struct/playandrecord.md">@@TOKEN_0@@</a>와 <a href="avaudiosession/category-swift.struct/record.md">@@TOKEN_1@@</a>입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiosession/availablecategories">View on Apple Developer</a>*</span>

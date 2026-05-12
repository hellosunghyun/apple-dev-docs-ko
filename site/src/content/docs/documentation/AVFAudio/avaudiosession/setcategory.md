---
source_path: "documentation/AVFAudio/avaudiosession/setcategory.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiosession/setcategory"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:setcategory:0000:0001">setCategory(_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setcategory:0001:0001">**Framework**: AVFAudio **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setcategory:0002:0001">오디오 세션의 카테고리를 설정합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setcategory:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:setcategory:0004:0001">iOS 3.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:setcategory:0004:0002">iPadOS 3.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:setcategory:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:setcategory:0004:0004">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:setcategory:0004:0005">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:setcategory:0004:0006">watchOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func setCategory(_ category: AVAudioSession.Category) throws
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">If <code>true</code>, the synthesizer is speaking or is in a paused state with utterances in its queue.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">If <code>false</code>, the synthesizer isn’t speaking and it doesn’t have any utterances in its queue.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">세션이 활성 상태일 때도 카테고리를 설정할 수 있지만, 이 경우 라우트가 즉시 변경됩니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0001">**Note**: <a href="avaudiosession/category-swift.property.md">@@TOKEN_0@@</a> 및 <a href="avaudiosession/mode-swift.property.md">@@TOKEN_1@@</a> 속성을 각각 개별적으로 설정하지 말고, <a href="avaudiosession/setcategory(_:mode:options:">@@TOKEN_2@@</a>.md) 또는 <a href="avaudiosession/setcategory(_:mode:policy:options:">@@TOKEN_3@@</a>.md) 메서드를 사용해 동시에 설정해야 합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0010:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0001"><code>category</code>: 오디오 세션에 적용할 카테고리입니다. 지원되는 카테고리 값은 <a href="avaudiosession/category-swift.struct.md">@@TOKEN_1@@</a>에서 확인할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0012:0001">관련 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avaudiosession/setcategory(_:mode:policy:options:">func setCategory(AVAudioSession.Category, mode: AVAudioSession.Mode, policy: AVAudioSession.RouteSharingPolicy, options: AVAudioSession.CategoryOptions) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">세션의 카테고리, 모드, 라우트 공유 정책 및 옵션을 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avaudiosession/setcategory(_:mode:options:">func setCategory(AVAudioSession.Category, mode: AVAudioSession.Mode, options: AVAudioSession.CategoryOptions) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">오디오 세션의 카테고리, 모드 및 옵션을 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avaudiosession/setcategory(_:options:">func setCategory(AVAudioSession.Category, options: AVAudioSession.CategoryOptions) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">오디오 세션의 카테고리를 지정한 옵션으로 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="avaudiosession/setmode(_:">func setMode(AVAudioSession.Mode) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">오디오 세션의 모드를 설정합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiosession/setcategory(_:">Apple Developer에서 보기</a>)*</span>

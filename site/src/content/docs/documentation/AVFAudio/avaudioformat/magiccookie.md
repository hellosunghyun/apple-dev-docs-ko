---
source_path: "documentation/AVFAudio/avaudioformat/magiccookie.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudioformat/magiccookie"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:magiccookie:0000:0001">magicCookie</span>

<span class="ko-segment" data-segment-id="seg:paragraph:magiccookie:0001:0001">**Framework**: AVFAudio **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:magiccookie:0002:0001">인코더와 디코더가 필요로 하는 메타데이터를 포함하는 객체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:magiccookie:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:magiccookie:0004:0001">iOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:magiccookie:0004:0002">iPadOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:magiccookie:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:magiccookie:0004:0004">macOS 10.12+</span>
- <span class="ko-segment" data-segment-id="seg:list:magiccookie:0004:0005">tvOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:magiccookie:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:magiccookie:0004:0007">watchOS 3.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var magicCookie: Data? { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">If this property is <code>true</code>, but no assistive technology, such as VoiceOver, is on, the speech synthesizer uses the utterance property values.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avaudioformat/isinterleaved.md">var isInterleaved: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">샘플이 하나의 스트림으로 섞이는지 여부를 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avaudioformat/isstandard.md">var isStandard: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">형식이 deinterleaved native-endian float 상태인지 여부를 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avaudioformat/commonformat.md">var commonFormat: AVAudioCommonFormat</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">공통 형식 식별자 인스턴스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001">[var settings: [String : Any]](avaudioformat/settings.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">오디오 설정 키를 사용해 형식을 딕셔너리로 나타내는 딕셔너리입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudioformat/magiccookie">View on Apple Developer</a>*</span>

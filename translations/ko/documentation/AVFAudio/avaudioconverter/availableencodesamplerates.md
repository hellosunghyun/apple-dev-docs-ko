---
source_path: "documentation/AVFAudio/avaudioconverter/availableencodesamplerates.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudioconverter/availableencodesamplerates"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:availableencodesamplerates:0000:0001">availableEncodeSampleRates</span>

<span class="ko-segment" data-segment-id="seg:paragraph:availableencodesamplerates:0001:0001">**Framework**: AVFAudio **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:availableencodesamplerates:0002:0001">인코딩 시 코덱이 제공하는 모든 출력 샘플 레이트 배열입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:availableencodesamplerates:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:availableencodesamplerates:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:availableencodesamplerates:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:availableencodesamplerates:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:availableencodesamplerates:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:availableencodesamplerates:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:availableencodesamplerates:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:availableencodesamplerates:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var availableEncodeSampleRates: [NSNumber]? { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 property는 인코딩하지 않는 경우 <code>nil</code>을 반환합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avaudioconverter/samplerateconverterquality.md">var sampleRateConverterQuality: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">샘플 레이트 변환기 알고리즘의 키 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avaudioconverter/samplerateconverteralgorithm.md">var sampleRateConverterAlgorithm: String?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">샘플 레이트 변환기 또는 디코더가 사용하는 프라이밍 방식입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001">[var applicableEncodeSampleRates: [NSNumber]?](avaudioconverter/applicableencodesamplerates.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">인코딩할 때 현재 포맷과 설정에 따라 컨버터가 적용하는 출력 샘플 레이트 배열입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudioconverter/availableencodesamplerates">View on Apple Developer</a>*</span>

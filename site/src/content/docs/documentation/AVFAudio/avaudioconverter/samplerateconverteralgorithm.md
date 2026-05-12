---
source_path: "documentation/AVFAudio/avaudioconverter/samplerateconverteralgorithm.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudioconverter/samplerateconverteralgorithm"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:samplerateconverteralgorithm:0000:0001">sampleRateConverterAlgorithm</span>

<span class="ko-segment" data-segment-id="seg:paragraph:samplerateconverteralgorithm:0001:0001">**Framework**: AVFAudio **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:samplerateconverteralgorithm:0002:0001">샘플레이트 변환기 또는 디코더에서 사용하는 프라이밍 방식입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:samplerateconverteralgorithm:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:samplerateconverteralgorithm:0004:0001">iOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:samplerateconverteralgorithm:0004:0002">iPadOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:samplerateconverteralgorithm:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:samplerateconverteralgorithm:0004:0004">macOS 10.11+</span>
- <span class="ko-segment" data-segment-id="seg:list:samplerateconverteralgorithm:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:samplerateconverteralgorithm:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:samplerateconverteralgorithm:0004:0007">watchOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var sampleRateConverterAlgorithm: String? { get set }
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:algorithms:0008:0001">Algorithms</span>

- <span class="ko-segment" data-segment-id="seg:list:algorithms:0009:0001"><a href="avsamplerateconverteralgorithm_normal.md">let AVSampleRateConverterAlgorithm_Normal: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:algorithms:0010:0001">일반 인코더 비트레이트 전략입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:algorithms:0011:0001"><a href="avsamplerateconverteralgorithm_minimumphase.md">let AVSampleRateConverterAlgorithm_MinimumPhase: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:algorithms:0012:0001">최소 위상 인코더 비트레이트 전략입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:algorithms:0013:0001"><a href="avsamplerateconverteralgorithm_mastering.md">let AVSampleRateConverterAlgorithm_Mastering: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:algorithms:0014:0001">마스터링 인코더 비트레이트 전략입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0015:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avaudioconverter/samplerateconverterquality.md">var sampleRateConverterQuality: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">샘플레이트 변환기 알고리즘 키 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001">[var applicableEncodeSampleRates: [NSNumber]?](avaudioconverter/applicableencodesamplerates.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">현재 포맷과 설정에 따라 인코딩 시 변환기가 적용하는 출력 샘플레이트 배열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001">[var availableEncodeSampleRates: [NSNumber]?](avaudioconverter/availableencodesamplerates.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">코덱이 인코딩할 때 제공하는 모든 출력 샘플레이트 배열입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudioconverter/samplerateconverteralgorithm">View on Apple Developer</a>*</span>

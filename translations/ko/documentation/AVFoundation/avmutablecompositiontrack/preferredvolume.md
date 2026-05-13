---
source_path: "documentation/AVFoundation/avmutablecompositiontrack/preferredvolume.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avmutablecompositiontrack/preferredvolume"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:preferredvolume:0000:0001">preferredVolume</span>

<span class="ko-segment" data-segment-id="seg:paragraph:preferredvolume:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:preferredvolume:0002:0001">트랙의 오디오 미디어 데이터에 선호되는 볼륨입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:preferredvolume:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:preferredvolume:0004:0001">iOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:preferredvolume:0004:0002">iPadOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:preferredvolume:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:preferredvolume:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:preferredvolume:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:preferredvolume:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:preferredvolume:0004:0007">watchOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var preferredVolume: Float { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">설정하지 않으면 값은 <code>1.0</code>입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avmutablecompositiontrack/isenabled.md">var isEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">트랙이 사용 가능 상태인지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avmutablecompositiontrack/naturaltimescale.md">var naturalTimeScale: CMTimeScale</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">추가 수치 변환 없이 시간 기반 연산을 수행할 수 있는 시간 스케일입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avmutablecompositiontrack/languagecode.md">var languageCode: String?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">트랙과 연결된 언어로, ISO 639-2/T 언어 코드입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avmutablecompositiontrack/extendedlanguagetag.md">var extendedLanguageTag: String?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">트랙과 연결된 언어 태그로, RFC 4646 언어 태그입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avmutablecompositiontrack/preferredtransform.md">var preferredTransform: CGAffineTransform</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">표시 목적으로 시각적 미디어 데이터의 선호 변환입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmutablecompositiontrack/preferredvolume">View on Apple Developer</a>*</span>

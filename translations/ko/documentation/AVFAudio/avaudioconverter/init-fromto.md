---
source_path: "documentation/AVFAudio/avaudioconverter/init-fromto.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudioconverter/init-fromto"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initfromto:0000:0001">init(from:to:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initfromto:0001:0001">**Framework**: AVFAudio **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initfromto:0002:0001">지정한 입력 및 출력 형식에서 오디오 변환기 객체를 생성합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initfromto:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initfromto:0004:0001">iOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initfromto:0004:0002">iPadOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initfromto:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:initfromto:0004:0004">macOS 10.11+</span>
- <span class="ko-segment" data-segment-id="seg:list:initfromto:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initfromto:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initfromto:0004:0007">watchOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
init?(from fromFormat: AVAudioFormat, to toFormat: AVAudioFormat)
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001"><a href="avaudioconverter.md">@@TOKEN_0@@</a> 인스턴스 또는 형식 변환이 불가능한 경우 <code>nil</code>입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>fromFormat</code>: 입력 오디오 형식입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>toFormat</code>: 변환할 오디오 형식입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0012:0001"><a href="https://developer.apple.com/documentation/avfaudio/avaudioconverter/init(from:to:">*View on Apple Developer*</a>)*</span>

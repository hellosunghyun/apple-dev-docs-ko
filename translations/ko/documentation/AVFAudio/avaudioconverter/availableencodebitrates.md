---
source_path: "documentation/AVFAudio/avaudioconverter/availableencodebitrates.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudioconverter/availableencodebitrates"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:availableencodebitrates:0000:0001">availableEncodeBitRates</span>

<span class="ko-segment" data-segment-id="seg:paragraph:availableencodebitrates:0001:0001">**Framework**: AVFAudio **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:availableencodebitrates:0002:0001">인코딩 시 코덱이 제공하는 모든 비트 전송률 배열입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:availableencodebitrates:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:availableencodebitrates:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:availableencodebitrates:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:availableencodebitrates:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:availableencodebitrates:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:availableencodebitrates:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:availableencodebitrates:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:availableencodebitrates:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var availableEncodeBitRates: [NSNumber]? { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 property는 인코딩하지 않는 경우 <code>nil</code>을 반환합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001">[var applicableEncodeBitRates: [NSNumber]?](avaudioconverter/applicableencodebitrates.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">현재 형식과 설정에 따라 인코딩 중 프레임워크가 적용하는 비트 전송률의 배열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001">[var availableEncodeChannelLayoutTags: [NSNumber]?](avaudioconverter/availableencodechannellayouttags.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">인코딩 시 코덱이 제공하는 모든 출력 채널 레이아웃 태그의 배열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avaudioconverter/bitrate.md">var bitRate: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">비트 전송률(초당 비트 수)입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avaudioconverter/bitratestrategy.md">var bitRateStrategy: String?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">프레임워크가 인코딩 중 사용하는 키 값 상수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudioconverter/availableencodebitrates">View on Apple Developer</a>*</span>

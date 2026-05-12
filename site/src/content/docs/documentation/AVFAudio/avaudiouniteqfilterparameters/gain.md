---
source_path: "documentation/AVFAudio/avaudiouniteqfilterparameters/gain.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiouniteqfilterparameters/gain"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:gain:0000:0001">gain</span>

<span class="ko-segment" data-segment-id="seg:paragraph:gain:0001:0001">**Framework**: AVFAudio **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:gain:0002:0001">이퀄라이저 필터의 게인입니다. 단위는 데시벨입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:gain:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:gain:0004:0001">iOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:gain:0004:0002">iPadOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:gain:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:gain:0004:0004">macOS 10.10+</span>
- <span class="ko-segment" data-segment-id="seg:list:gain:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:gain:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:gain:0004:0007">watchOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var gain: Float { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">If this method isn’t invoked, then the system uses the default pitch bend value of <code>8192</code> (no pitch).</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">유효한 값 범위는 <code>-96 dB</code>부터 <code>24 dB</code>입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avaudiouniteqfilterparameters/bandwidth.md">var bandwidth: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">이퀄라이저 필터의 대역폭은 옥타브 단위입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avaudiouniteqfilterparameters/bypass.md">var bypass: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">이퀄라이저 필터 밴드의 바이패스 상태입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avaudiouniteqfilterparameters/filtertype.md">var filterType: AVAudioUnitEQFilterType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">이퀄라이저 필터 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avaudiouniteqfilterparameters/frequency.md">var frequency: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">이퀄라이저 필터의 주파수는 헤르츠 단위입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiouniteqfilterparameters/gain">View on Apple Developer</a>*</span>

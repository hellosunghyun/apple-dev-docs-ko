---
source_path: "documentation/AVFAudio/avaudiouniteqfiltertype/resonantlowshelf.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiouniteqfiltertype/resonantlowshelf"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avaudiouniteqfiltertyperesonantlowshelf:0000:0001">AVAudioUnitEQFilterType.resonantLowShelf</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiouniteqfiltertyperesonantlowshelf:0001:0001">**Framework**: AVFAudio **Kind**: case</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiouniteqfiltertyperesonantlowshelf:0002:0001">이 타입은 대역폭 매개변수를 사용해 공진 지원을 갖는 로우-셸프 필터를 나타냅니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiouniteqfiltertyperesonantlowshelf:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avaudiouniteqfiltertyperesonantlowshelf:0004:0001">iOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiouniteqfiltertyperesonantlowshelf:0004:0002">iPadOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiouniteqfiltertyperesonantlowshelf:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiouniteqfiltertyperesonantlowshelf:0004:0004">macOS 10.10+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiouniteqfiltertyperesonantlowshelf:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiouniteqfiltertyperesonantlowshelf:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiouniteqfiltertyperesonantlowshelf:0004:0007">watchOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
case resonantLowShelf
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 타입에 필요한 매개변수는 <a href="avaudiouniteqfilterparameters/frequency.md">@@TOKEN_0@@</a> (중심), <a href="avaudiouniteqfilterparameters/bandwidth.md">@@TOKEN_1@@</a>, <a href="avaudiouniteqfilterparameters/gain.md">@@TOKEN_2@@</a>입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avaudiouniteqfiltertype/parametric.md">AVAudioUnitEQFilterType.parametric</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">Butterworth 아날로그 프로토타입에서 파생된 파라메트릭 필터를 나타내는 타입입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avaudiouniteqfiltertype/lowpass.md">AVAudioUnitEQFilterType.lowPass</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">간단한 Butterworth 2차 저역통과 필터를 나타내는 타입입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avaudiouniteqfiltertype/highpass.md">AVAudioUnitEQFilterType.highPass</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">간단한 Butterworth 2차 고역통과 필터를 나타내는 타입입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avaudiouniteqfiltertype/resonantlowpass.md">AVAudioUnitEQFilterType.resonantLowPass</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001"><code>bandwidth</code> 매개변수를 사용해 공진 지원이 있는 저역통과 필터를 나타내는 타입입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avaudiouniteqfiltertype/resonanthighpass.md">AVAudioUnitEQFilterType.resonantHighPass</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001"><code>bandwidth</code> 매개변수를 사용해 공진 지원이 있는 고역통과 필터를 나타내는 타입입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avaudiouniteqfiltertype/bandpass.md">AVAudioUnitEQFilterType.bandPass</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">대역통과 필터를 나타내는 타입입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avaudiouniteqfiltertype/bandstop.md">AVAudioUnitEQFilterType.bandStop</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">노치 필터라고도 불리는 대역제거 필터를 나타내는 타입입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avaudiouniteqfiltertype/lowshelf.md">AVAudioUnitEQFilterType.lowShelf</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">저역선반 필터를 나타내는 타입입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avaudiouniteqfiltertype/highshelf.md">AVAudioUnitEQFilterType.highShelf</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">고역선반 필터를 나타내는 타입입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avaudiouniteqfiltertype/resonanthighshelf.md">AVAudioUnitEQFilterType.resonantHighShelf</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001"><code>bandwidth</code> 매개변수를 사용해 공진 지원이 있는 고역선반 필터를 나타내는 타입입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiouniteqfiltertype/resonantlowshelf">View on Apple Developer</a>*</span>

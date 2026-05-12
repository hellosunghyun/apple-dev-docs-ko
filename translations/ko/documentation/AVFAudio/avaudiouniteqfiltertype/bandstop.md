---
source_path: "documentation/AVFAudio/avaudiouniteqfiltertype/bandstop.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiouniteqfiltertype/bandstop"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avaudiouniteqfiltertypebandstop:0000:0001">AVAudioUnitEQFilterType.bandStop</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiouniteqfiltertypebandstop:0001:0001">**Framework**: AVFAudio **Kind**: case</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiouniteqfiltertypebandstop:0002:0001">노치 필터로도 알려진 밴드 스톱 필터를 나타내는 타입입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiouniteqfiltertypebandstop:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avaudiouniteqfiltertypebandstop:0004:0001">iOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiouniteqfiltertypebandstop:0004:0002">iPadOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiouniteqfiltertypebandstop:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiouniteqfiltertypebandstop:0004:0004">macOS 10.10+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiouniteqfiltertypebandstop:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiouniteqfiltertypebandstop:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiouniteqfiltertypebandstop:0004:0007">watchOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
case bandStop
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 유형에 필요한 매개변수는 <a href="avaudiouniteqfilterparameters/frequency.md">@@TOKEN_0@@</a> (center) 및 <a href="avaudiouniteqfilterparameters/bandwidth.md">@@TOKEN_1@@</a>입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avaudiouniteqfiltertype/parametric.md">AVAudioUnitEQFilterType.parametric</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">Butterworth 아날로그 프로토타입에서 파생된 파라메트릭 필터를 나타내는 타입입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avaudiouniteqfiltertype/lowpass.md">AVAudioUnitEQFilterType.lowPass</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">단순한 Butterworth 2차 저역 통과 필터를 나타내는 타입입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avaudiouniteqfiltertype/highpass.md">AVAudioUnitEQFilterType.highPass</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">단순한 Butterworth 2차 고역 통과 필터를 나타내는 타입입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avaudiouniteqfiltertype/resonantlowpass.md">AVAudioUnitEQFilterType.resonantLowPass</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">대역폭 매개변수를 사용해 공진 지원이 포함된 저역 통과 필터를 나타내는 타입입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avaudiouniteqfiltertype/resonanthighpass.md">AVAudioUnitEQFilterType.resonantHighPass</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">대역폭 매개변수를 사용해 공진 지원이 포함된 고역 통과 필터를 나타내는 타입입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avaudiouniteqfiltertype/bandpass.md">AVAudioUnitEQFilterType.bandPass</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">밴드패스 필터를 나타내는 타입입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avaudiouniteqfiltertype/lowshelf.md">AVAudioUnitEQFilterType.lowShelf</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">로우 셸프 필터를 나타내는 타입입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avaudiouniteqfiltertype/highshelf.md">AVAudioUnitEQFilterType.highShelf</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">하이 셸프 필터를 나타내는 타입입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avaudiouniteqfiltertype/resonantlowshelf.md">AVAudioUnitEQFilterType.resonantLowShelf</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">대역폭 매개변수를 사용해 공진 지원이 포함된 로우 셸프 필터를 나타내는 타입입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avaudiouniteqfiltertype/resonanthighshelf.md">AVAudioUnitEQFilterType.resonantHighShelf</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">대역폭 매개변수를 사용해 공진 지원이 포함된 하이 셸프 필터를 나타내는 타입입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiouniteqfiltertype/bandstop">View on Apple Developer</a>*</span>

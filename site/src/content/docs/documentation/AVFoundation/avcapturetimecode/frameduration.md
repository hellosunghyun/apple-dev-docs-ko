---
source_path: "documentation/AVFoundation/avcapturetimecode/frameduration.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturetimecode/frameduration"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:frameduration:0000:0001">frameDuration</span>

<span class="ko-segment" data-segment-id="seg:paragraph:frameduration:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:frameduration:0002:0001">타임코드의 프레임 지속 시간입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:frameduration:0002:0002">알 수 없는 경우 값은 <code>kCMTimeInvalid</code>입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:frameduration:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:frameduration:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:frameduration:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:frameduration:0004:0003">Mac Catalyst 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:frameduration:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:frameduration:0004:0005">tvOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var frameDuration: CMTime
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="avcapturetimecode/frames.md">var frames: UInt8</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">초 내에서 프레임 수를 나타내는 타임코드의 프레임 구성 요소입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avcapturetimecode/hours.md">var hours: UInt8</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">현재 타임코드의 시간 구성 요소(시간)를 나타냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcapturetimecode/minutes.md">var minutes: UInt8</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">현재 타임코드의 시간 구성 요소(분)를 나타냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcapturetimecode/seconds.md">var seconds: UInt8</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">현재 타임코드의 시간 구성 요소(초)를 나타냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avcapturetimecode/userbits.md">var userBits: UInt32</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">엄격히 표준화되지 않은 SMPTE 사용자 비트를 보유한 32비트 필드입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0002">사용자 비트는 장면-테이크 정보, 릴 번호, 날짜와 같은 추가 메타데이터로 자주 사용되지만, 정확한 사용 방식은 애플리케이션에 따라 다릅니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturetimecode/frameduration">View on Apple Developer</a>*</span>

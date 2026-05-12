---
source_path: "documentation/AVFoundation/avcapturetimecode/sourcetype-swift.enum/realtimeclock.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturetimecode/sourcetype-swift.enum/realtimeclock"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avcapturetimecodesourcetyperealtimeclock:0000:0001">AVCaptureTimecode.SourceType.realTimeClock</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcapturetimecodesourcetyperealtimeclock:0001:0001">**Framework**: AVFoundation **Kind**: case</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcapturetimecodesourcetyperealtimeclock:0002:0001">실시간 응용 프로그램에서 timecode를 시스템 시계와 동기화합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:avcapturetimecodesourcetyperealtimeclock:0002:0002">실시간 이벤트나 실제 시간 정렬이 필요한 시나리오에 유용합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avcapturetimecodesourcetyperealtimeclock:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avcapturetimecodesourcetyperealtimeclock:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturetimecodesourcetyperealtimeclock:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturetimecodesourcetyperealtimeclock:0004:0003">Mac Catalyst 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturetimecodesourcetyperealtimeclock:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avcapturetimecodesourcetyperealtimeclock:0004:0005">tvOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
case realTimeClock
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="avcapturetimecode/sourcetype-swift.enum/external.md">AVCaptureTimecode.SourceType.external</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">timecode를 외부 timecode 데이터 스트림과 동기화합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0002">외부 쿼터 프레임 MIDI 또는 HID timecode 하드웨어를 활용한 전문 오디오 및 비디오 동기화에 적합합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avcapturetimecode/sourcetype-swift.enum/framecount.md">AVCaptureTimecode.SourceType.frameCount</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">내부 또는 외부 소스가 채택되지 않습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0002">timecode는 0부터 시작하며 순차적으로 생성되는 프레임 카운트입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturetimecode/sourcetype-swift.enum/realtimeclock">View on Apple Developer</a>*</span>

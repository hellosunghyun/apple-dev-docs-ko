---
source_path: "documentation/AVFAudio/avaudiorecorder/currenttime.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiorecorder/currenttime"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:currenttime:0000:0001">currentTime</span>

<span class="ko-segment" data-segment-id="seg:paragraph:currenttime:0001:0001">**Framework**: AVFAudio **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:currenttime:0002:0001">녹음 시작부터의 경과 시간을 초 단위로 나타냅니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:currenttime:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:currenttime:0004:0001">iOS 3.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:currenttime:0004:0002">iPadOS 3.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:currenttime:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:currenttime:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:currenttime:0004:0005">tvOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:currenttime:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:currenttime:0004:0007">watchOS 4.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var currentTime: TimeInterval { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">중지된 오디오 녹음기에서 호출하면 이 속성의 값은 <code>0</code>입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avaudiorecorder/devicecurrenttime.md">var deviceCurrentTime: TimeInterval</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">호스트 오디오 장치의 시간(초)입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiorecorder/currenttime">View on Apple Developer</a>*</span>

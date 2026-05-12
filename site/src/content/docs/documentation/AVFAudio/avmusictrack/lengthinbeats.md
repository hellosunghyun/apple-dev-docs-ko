---
source_path: "documentation/AVFAudio/avmusictrack/lengthinbeats.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avmusictrack/lengthinbeats"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:lengthinbeats:0000:0001">lengthInBeats</span>

<span class="ko-segment" data-segment-id="seg:paragraph:lengthinbeats:0001:0001">**Framework**: AVFAudio **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:lengthinbeats:0002:0001">트랙의 총 길이를 박자 단위로 표시한 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:lengthinbeats:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:lengthinbeats:0004:0001">iOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:lengthinbeats:0004:0002">iPadOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:lengthinbeats:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:lengthinbeats:0004:0004">macOS 10.11+</span>
- <span class="ko-segment" data-segment-id="seg:list:lengthinbeats:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:lengthinbeats:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var lengthInBeats: AVMusicTimeStamp { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 속성은 트랙의 마지막 이벤트 박자와 끝나는 음표를 페이드 아웃하거나 루프 지점을 마디 단위로 반올림하는 데 필요한 추가 시간을 더한 값을 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">사용자가 이 값을 설정하지 않으면 트랙 길이는 마지막 활성 이벤트의 끝으로 항상 조정되며, 사용자가 이벤트를 추가하거나 제거하면 동적으로 조정됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">이 속성은 사용자가 설정한 트랙 길이와 계산된 길이 중 더 큰 값을 반환합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avmusictrack/lengthinseconds.md">var lengthInSeconds: TimeInterval</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">트랙의 총 길이를 초 단위로 표시한 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avmusictrack/lengthinbeats">View on Apple Developer</a>*</span>

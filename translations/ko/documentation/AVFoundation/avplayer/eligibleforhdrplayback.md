---
source_path: "documentation/AVFoundation/avplayer/eligibleforhdrplayback.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avplayer/eligibleforhdrplayback"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:eligibleforhdrplayback:0000:0001">eligibleForHDRPlayback</span>

<span class="ko-segment" data-segment-id="seg:paragraph:eligibleforhdrplayback:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:eligibleforhdrplayback:0002:0001">현재 기기가 HDR 디스플레이에서 콘텐츠를 표시할 수 있는지를 나타내는 부울 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:eligibleforhdrplayback:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:eligibleforhdrplayback:0004:0001">iOS 13.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:eligibleforhdrplayback:0004:0002">iPadOS 13.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:eligibleforhdrplayback:0004:0003">Mac Catalyst 13.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:eligibleforhdrplayback:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:eligibleforhdrplayback:0004:0005">tvOS 13.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:eligibleforhdrplayback:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
nonisolated
class var eligibleForHDRPlayback: Bool { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 속성은 key-value 관찰 대상이 아닙니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avplayer/availablehdrmodes.md">class var availableHDRModes: AVPlayer.HDRMode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">재생에 사용할 수 있는 HDR 모드입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avplayer/hdrmode.md">AVPlayer.HDRMode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">HDR 모드를 지정하는 비트필드 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avplayer/eligibleforhdrplaybackdidchangenotification.md">class let eligibleForHDRPlaybackDidChangeNotification: NSNotification.Name</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">HDR 재생 가능성이 변경될 때마다 게시되는 알림입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avplayer/eligibleforhdrplayback">View on Apple Developer</a>*</span>

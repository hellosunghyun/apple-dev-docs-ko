---
source_path: "documentation/AVFAudio/avextendednoteonevent/velocity.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avextendednoteonevent/velocity"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:velocity:0000:0001">velocity</span>

<span class="ko-segment" data-segment-id="seg:paragraph:velocity:0001:0001">**Framework**: AVFAudio **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:velocity:0002:0001">MDI velocity.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:velocity:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:velocity:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:velocity:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:velocity:0004:0003">Mac Catalyst 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:velocity:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:velocity:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:velocity:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var velocity: Float { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">목적지 오디오 유닛의 <a href="avmusictrack.md">@@TOKEN_0@@</a> 내 악기가 소수값을 지원하는 경우 이 값을 사용해 게인 및 기타 값의 정밀한 변경을 생성할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">값의 유효 범위는 대상 오디오 유닛에 따라 다르며 일반적으로 <code>0.0</code>에서 <code>127.0</code> 사이입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avextendednoteonevent/midinote.md">var midiNote: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">MIDI 노트 번호입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avextendednoteonevent/instrumentid.md">var instrumentID: UInt32</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">악기 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avextendednoteonevent/groupid.md">var groupID: UInt32</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">이벤트를 처리하는 오디오 유닛 채널입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avextendednoteonevent/duration.md">var duration: AVMusicTimeStamp</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">이벤트의 지속 시간입니다. 단위는 beat입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avextendednoteonevent/velocity">View on Apple Developer</a>*</span>

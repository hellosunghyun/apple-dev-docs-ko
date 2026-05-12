---
source_path: "documentation/AVFAudio/avmusictrack/offsettime.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avmusictrack/offsettime"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:offsettime:0000:0001">offsetTime</span>

<span class="ko-segment" data-segment-id="seg:paragraph:offsettime:0001:0001">**Framework**: AVFAudio **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:offsettime:0002:0001">트랙 시작 시간의 오프셋(비트)입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:offsettime:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:offsettime:0004:0001">iOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:offsettime:0004:0002">iPadOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:offsettime:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:offsettime:0004:0004">macOS 10.11+</span>
- <span class="ko-segment" data-segment-id="seg:list:offsettime:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:offsettime:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var offsetTime: AVMusicTimeStamp { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">기본값은 <code>0</code>입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avmusictrack/ismuted.md">var isMuted: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">트랙이 음소거 상태인지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avmusictrack/issoloed.md">var isSoloed: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">트랙이 솔로 상태인지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avmusictrack/timeresolution.md">var timeResolution: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">시퀀스의 타임 리졸루션 값(쿼터 노트당 틱(펄스))입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avmusictrack/usesautomatedparameters.md">var usesAutomatedParameters: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">트랙이 자동화 트랙인지 나타내는 부울 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avmusictrack/offsettime">View on Apple Developer</a>*</span>
